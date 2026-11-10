# Movie Discovery — Cloudflare version

This is a separate migration copy. The original AppDeploy project and live URL are not changed.

## Deploy
1. Push this folder to the separate GitHub repository `Azlan882/Movie-discovery`.
2. In Cloudflare Workers & Pages, connect that repository. Build command: `npm run build`. Deploy command: `npx wrangler deploy`.
3. In Worker Settings → Variables and Secrets, add secret `YOUTUBE_API_KEY` with your YouTube Data API key. Never put the key in source code or GitHub.
4. Deploy and test `/api/_healthcheck`, poster loading, trailer search, and individual `/movie/<slug>` URLs.

## Notes
- `public/movies.json` contains the 55 curated movie records used for server-rendered SEO metadata.
- `public/sitemap.xml` and `public/robots.txt` are included. Update the sitemap base URL to the final `workers.dev` hostname after Cloudflare assigns it, before submitting it to Google Search Console.
- The app's API calls now use same-origin `fetch`; AppDeploy SDK dependencies have been removed.
- The movie detail URLs are routed by the Worker and include canonical, Open Graph, and Schema.org Movie metadata.
