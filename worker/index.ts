interface Env { ASSETS: { fetch(request: Request): Promise<Response> }; YOUTUBE_API_KEY?: string }
type Movie = { id:number; title:string; year:number; genre:string; runtime:string; tagline:string; synopsis:string; cast:string[]; rating?:string };
const cache = new Map<string,{expires:number;value:any}>();
const posterCache = new Map<string,{expires:number;url:string}>();
const normalize=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const relevant=(movie:string, candidate:string)=>{const ignore=new Set(['the','a','an','of','and','in','to']);const words=normalize(movie).split(' ').filter(x=>x&&!ignore.has(x));const c=normalize(candidate);const n=words.filter(w=>c.includes(w)).length;return words.length>0&&n>=Math.min(2,words.length)&&n/words.length>=.6;};
const json=(data:unknown,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
async function readMovies(env:Env,request:Request):Promise<Movie[]>{const u=new URL('/movies.json',request.url);const r=await env.ASSETS.fetch(new Request(u));return r.ok?await r.json() as Movie[]:[];}
function esc(s:string){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));}
function slug(s:string){return s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}

async function posterApi(body:any){
 const list=Array.isArray(body?.movies)?body.movies:[];
 if(!list.length||list.length>60)return json({error:'Provide between 1 and 60 movie titles.'},400);
 const valid=list.flatMap((m:any)=>{const id=Number(m?.id),title=typeof m?.title==='string'?m.title.trim():'';return Number.isInteger(id)&&title&&title.length<=160?[{id,title}]:[];});
 const now=Date.now(),out:any[]=[];
 const missing=valid.filter(m=>{const c=posterCache.get(normalize(m.title));if(c&&c.expires>now){out.push({id:m.id,imageUrl:c.url});return false;}return true;});
 for(let i=0;i<missing.length;i+=10){
  const batch=missing.slice(i,i+10);
  try{
   const params=new URLSearchParams({action:'query',format:'json',prop:'pageimages',piprop:'thumbnail',pithumbsize:'700',pilicense:'any',redirects:'1',titles:batch.map(m=>m.title).join('|')});
   const r=await fetch('https://en.wikipedia.org/w/api.php?'+params);
   if(!r.ok)continue;
   const data:any=await r.json();
   const pages=Object.values(data.query?.pages||{}) as any[];
   for(const m of batch){
    const page=pages.find(p=>normalize(p.title||'')===normalize(m.title));
    let url=page?.thumbnail?.source;
    if(!url){
     try{
      const q=await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/'+encodeURIComponent(m.title.replace(/ /g,'_')));
      if(q.ok){const d:any=await q.json();url=d.originalimage?.source||d.thumbnail?.source;}
     }catch{}
    }
    if(url&&url.startsWith('https://')){
     posterCache.set(normalize(m.title),{expires:now+86400000,url});
     out.push({id:m.id,imageUrl:url});
    }
   }
  }catch{}
 }
 return json({posters:out,count:out.length});
}

async function trailerApi(body:any,env:Env){
 const title=typeof body?.title==='string'?body.title.trim():'';
 const year=Number(body?.year);
 if(!title||title.length>120||!Number.isInteger(year)||year<1888||year>2100)return json({error:'A valid movie title and release year are required.'},400);
 if(!env.YOUTUBE_API_KEY)return json({error:'YouTube trailer search is not configured.'},503);
 const key=normalize(title)+':'+year,cached=cache.get(key);
 if(cached&&cached.expires>Date.now())return json({trailer:cached.value,cached:true});
 const params=new URLSearchParams({part:'snippet',q:`${title} ${year} official trailer`,type:'video',videoEmbeddable:'true',maxResults:'8',safeSearch:'moderate',key:env.YOUTUBE_API_KEY});
 try{
  const r=await fetch('https://www.googleapis.com/youtube/v3/search?'+params);
  if(!r.ok)return json({error:'YouTube trailer search is temporarily unavailable.'},502);
  const data:any=await r.json();
  const item=(data.items||[]).find((x:any)=>x.id?.videoId&&x.snippet?.title&&relevant(title,x.snippet.title));
  const thumb=item?.snippet?.thumbnails;
  const trailer=item&&(thumb?.high?.url||thumb?.medium?.url||thumb?.default?.url)?{videoId:item.id.videoId,title:item.snippet.title,channelTitle:item.snippet.channelTitle||'YouTube',thumbnailUrl:thumb.high?.url||thumb.medium?.url||thumb.default.url}:null;
  cache.set(key,{expires:Date.now()+21600000,value:trailer});
  return json({trailer,cached:false});
 }catch{return json({error:'Could not reach YouTube right now.'},502);}
}

export default {
 async fetch(request:Request,env:Env):Promise<Response>{
  const url=new URL(request.url);
  if(url.pathname==='/api/_healthcheck')return json({message:'Success'});
  if(url.pathname==='/api/posters'&&request.method==='POST'){
   try{return await posterApi(await request.json());}
   catch{return json({error:'Invalid request.'},400);}
  }
  if(url.pathname==='/api/trailers'&&request.method==='POST'){
   try{return await trailerApi(await request.json(),env);}
   catch{return json({error:'Invalid request.'},400);}
  }
  const match=url.pathname.match(/^\/movie\/([^/]+)\/?$/);
  if(match){
   const movies=await readMovies(env,request);
   const movie=movies.find(m=>slug(m.title)===match[1]);
   if(!movie)return new Response('Movie not found',{status:404,headers:{'content-type':'text/plain; charset=utf-8'}});
   const canonical=`${url.origin}/movie/${slug(movie.title)}`;
   const title=`${movie.title} (${movie.year}) — Movie Discovery`;
   const description=`${movie.tagline} ${movie.synopsis}`.slice(0,300);
   const image='';
   const ld={'@context':'https://schema.org','@type':'Movie',name:movie.title,dateCreated:String(movie.year),genre:movie.genre,duration:movie.runtime,description:movie.synopsis,actor:movie.cast.map(name=>({'@type':'Person',name}))};
   const baseResponse=await env.ASSETS.fetch(new Request(new URL('/',request.url)));
   if(!baseResponse.ok)return baseResponse;
   let page=await baseResponse.text();
   const head=`<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${canonical}"><meta property="og:type" content="video.movie"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta name="twitter:card" content="summary"><script type="application/ld+json">${JSON.stringify(ld).replace(/</g,'\\u003c')}</script>`;
   page=page.replace('</head>',head+'</head>');
   const fallback=`<main class="seo-movie"><h1>${esc(movie.title)} (${movie.year})</h1><p>${esc(movie.tagline)}</p><p>${esc(movie.synopsis)}</p><p>Genre: ${esc(movie.genre)} · Runtime: ${esc(movie.runtime)}</p><p>Starring: ${movie.cast.map(esc).join(', ')}</p><p><a href="/">Explore more films</a></p></main>`;
   page=page.replace('<div class="boot-screen">Loading your next favourite…</div>',fallback);
   return new Response(page,{headers:{'content-type':'text/html; charset=utf-8','cache-control':'public, max-age=300'}});
  }
  return env.ASSETS.fetch(request);
 }
};
