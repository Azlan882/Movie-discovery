import './styles.css';

type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating?: string;
  runtime: string;
  tagline: string;
  synopsis: string;
  mood: string;
  cast: string[];
  featured?: boolean;
};

const legacyDemoMovies: Movie[] = [
  {
    id: 1,
    title: 'The Last Signal',
    year: 2025,
    genre: 'Sci-Fi',
    rating: '8.4',
    runtime: '2h 08m',
    tagline: 'The universe went quiet. One voice remained.',
    synopsis:
      'When a deep-space listening station receives a signal from beyond the known universe, a small crew must decide whether answering it could save humanity — or end it.',
    mood: 'violet',
    cast: ['Maya Brooks', 'Elias Reed', 'Nina Park'],
    featured: true,
  },
  {
    id: 2,
    title: 'Midnight in Kyoto',
    year: 2024,
    genre: 'Drama',
    rating: '7.9',
    runtime: '1h 54m',
    tagline: 'Some journeys bring you back to yourself.',
    synopsis:
      'A burned-out photographer misses her train and spends one unexpected night wandering Kyoto with a stranger who changes how she sees home.',
    mood: 'rose',
    cast: ['Aiko Tanaka', 'Daniel Cho', 'Rin Sato'],
  },
  {
    id: 3,
    title: 'The Hollow House',
    year: 2025,
    genre: 'Horror',
    rating: '7.6',
    runtime: '1h 47m',
    tagline: 'It knows what you did upstairs.',
    synopsis:
      'A family inherits a remote house where every room seems to remember a different version of their past. After dark, the memories begin to move.',
    mood: 'forest',
    cast: ['Olivia Hart', 'Marcus Vale', 'June Ellis'],
  },
  {
    id: 4,
    title: 'A Perfect Alibi',
    year: 2024,
    genre: 'Thriller',
    rating: '8.1',
    runtime: '2h 01m',
    tagline: 'Everyone has a story. One is a lie.',
    synopsis:
      'A celebrated defence attorney takes a case that looks impossible to lose, until a single photograph makes her the most important witness — and the prime suspect.',
    mood: 'amber',
    cast: ['Theo Grant', 'Amara King', 'Lucas Bell'],
  },
  {
    id: 5,
    title: 'Orbit Seven',
    year: 2023,
    genre: 'Sci-Fi',
    rating: '8.7',
    runtime: '2h 16m',
    tagline: 'Home is 400 kilometres away.',
    synopsis:
      'Stranded aboard a failing orbital habitat, an engineer races against dwindling oxygen to uncover why mission control has stopped responding.',
    mood: 'blue',
    cast: ['Sam Rivera', 'Priya Shah', 'Jonah West'],
  },
  {
    id: 6,
    title: 'The Long Weekend',
    year: 2025,
    genre: 'Comedy',
    rating: '7.3',
    runtime: '1h 42m',
    tagline: 'The plan was simple. The family was not.',
    synopsis:
      'Three siblings attempt one peaceful weekend at their childhood home. Then the neighbours arrive, the roof collapses and a long-buried secret surfaces.',
    mood: 'sunset',
    cast: ['Chloe Martin', 'Ben Foster', 'Rae Collins'],
  },
  {
    id: 7,
    title: 'Paper Kingdom',
    year: 2024,
    genre: 'Fantasy',
    rating: '8.0',
    runtime: '2h 04m',
    tagline: 'Every story has a price.',
    synopsis:
      'A young mapmaker discovers that the forgotten places she draws into existence are real — and something on the other side wants her world next.',
    mood: 'teal',
    cast: ['Lena Moss', 'Idris Cole', 'Eva Lin'],
  },
  {
    id: 8,
    title: 'Cold Harbour',
    year: 2023,
    genre: 'Thriller',
    rating: '7.8',
    runtime: '1h 58m',
    tagline: 'The tide always brings something back.',
    synopsis:
      'A small coastal town is shaken when a boat returns without its crew. A local journalist finds that the official story has been rehearsed for years.',
    mood: 'slate',
    cast: ['Noah Price', 'Sofia Lane', 'Caleb James'],
  },
];

void legacyDemoMovies;

const movies: Movie[] = [
  {
    id: 101,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    runtime: '2h 22m',
    tagline: 'Hope can set you free.',
    synopsis: 'A quiet banker sentenced to life in prison builds an unexpected friendship and holds on to hope through decades behind bars.',
    mood: 'slate',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    featured: true,
  },
  {
    id: 102,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    runtime: '2h 32m',
    tagline: 'Why so serious?',
    synopsis: 'Batman faces a criminal mastermind whose escalating attacks force Gotham to confront the cost of fighting chaos.',
    mood: 'forest',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
  },
  {
    id: 103,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    runtime: '2h 28m',
    tagline: 'Your mind is the scene of the crime.',
    synopsis: 'A specialist who steals secrets from dreams is offered a chance to return home if he can plant an idea deep inside a target’s mind.',
    mood: 'blue',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
  },
  {
    id: 104,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    runtime: '2h 49m',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    synopsis: 'As Earth becomes harder to inhabit, a pilot joins a mission through a wormhole to search for a future for humanity.',
    mood: 'violet',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
  },
  {
    id: 105,
    title: 'The Matrix',
    year: 1999,
    genre: 'Sci-Fi',
    runtime: '2h 16m',
    tagline: 'Reality is only the beginning.',
    synopsis: 'A computer programmer discovers that the world he knows is a constructed reality and joins a rebellion against its controllers.',
    mood: 'teal',
    cast: ['Keanu Reeves', 'Carrie-Anne Moss', 'Laurence Fishburne'],
  },
  {
    id: 106,
    title: 'Parasite',
    year: 2019,
    genre: 'Thriller',
    runtime: '2h 12m',
    tagline: 'Look closer.',
    synopsis: 'A struggling family gradually enters the lives of a wealthy household, setting off a chain of events that exposes sharp class divisions.',
    mood: 'forest',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
  },
  {
    id: 107,
    title: 'Spirited Away',
    year: 2001,
    genre: 'Animation',
    runtime: '2h 05m',
    tagline: 'The tunnel led Chihiro to a mysterious town.',
    synopsis: 'A young girl enters a strange spirit world and must find courage and ingenuity to rescue her parents and return home.',
    mood: 'rose',
    cast: ['Rumi Hiiragi', 'Miyu Irino', 'Mari Natsuki'],
  },
  {
    id: 108,
    title: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    runtime: '2h 55m',
    tagline: 'An offer you can’t refuse.',
    synopsis: 'The aging head of a crime family tries to protect his empire while his reluctant son is drawn into a violent world of loyalty and power.',
    mood: 'amber',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
  },
  {
    id: 109,
    title: 'Pulp Fiction',
    year: 1994,
    genre: 'Crime',
    runtime: '2h 34m',
    tagline: 'You won’t know the facts until you’ve seen the fiction.',
    synopsis: 'Interlocking stories of criminals, a boxer and two hitmen unfold in a darkly comic portrait of chance and consequence in Los Angeles.',
    mood: 'sunset',
    cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
  },
  {
    id: 110,
    title: 'Everything Everywhere All at Once',
    year: 2022,
    genre: 'Sci-Fi',
    runtime: '2h 19m',
    tagline: 'The universe is so much bigger than you realize.',
    synopsis: 'An overwhelmed laundromat owner discovers that she may be the key to saving the multiverse while trying to reconnect with her family.',
    mood: 'violet',
    cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'],
  },
  {
    id: 111,
    title: 'Get Out',
    year: 2017,
    genre: 'Horror',
    runtime: '1h 44m',
    tagline: 'Just because you’re invited, doesn’t mean you’re welcome.',
    synopsis: 'A photographer visits his girlfriend’s family estate and notices unsettling behaviour that reveals a much more sinister situation.',
    mood: 'forest',
    cast: ['Daniel Kaluuya', 'Allison Williams', 'Bradley Whitford'],
  },
  {
    id: 112,
    title: 'A Quiet Place',
    year: 2018,
    genre: 'Horror',
    runtime: '1h 30m',
    tagline: 'If they hear you, they hunt you.',
    synopsis: 'A family struggles to survive in silence in a world where mysterious creatures hunt by sound.',
    mood: 'slate',
    cast: ['Emily Blunt', 'John Krasinski', 'Millicent Simmonds'],
  },
  {
    id: 113,
    title: 'Knives Out',
    year: 2019,
    genre: 'Mystery',
    runtime: '2h 10m',
    tagline: 'Everyone has a motive. No one has a clue.',
    synopsis: 'A sharp detective investigates the death of a celebrated mystery novelist, whose eccentric relatives all have secrets of their own.',
    mood: 'amber',
    cast: ['Daniel Craig', 'Ana de Armas', 'Chris Evans'],
  },
  {
    id: 114,
    title: 'Arrival',
    year: 2016,
    genre: 'Sci-Fi',
    runtime: '1h 56m',
    tagline: 'Why are they here?',
    synopsis: 'A linguist is recruited to communicate with visitors from space, racing to understand their language before global tensions spiral.',
    mood: 'blue',
    cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
  },
  {
    id: 115,
    title: 'Mad Max: Fury Road',
    year: 2015,
    genre: 'Action',
    runtime: '2h 00m',
    tagline: 'What a lovely day.',
    synopsis: 'In a brutal desert wasteland, a drifter and a rebel driver risk everything in a high-speed escape from a tyrant.',
    mood: 'sunset',
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
  },
  {
    id: 116,
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Animation',
    runtime: '1h 57m',
    tagline: 'Enter a universe where more than one wears the mask.',
    synopsis: 'Brooklyn teenager Miles Morales discovers his powers and meets Spider-heroes from other dimensions who help him find his own path.',
    mood: 'rose',
    cast: ['Shameik Moore', 'Jake Johnson', 'Hailee Steinfeld'],
  },
  {
    id: 117,
    title: 'Dune: Part Two',
    year: 2024,
    genre: 'Adventure',
    runtime: '2h 46m',
    tagline: 'Long live the fighters.',
    synopsis: 'Paul Atreides joins Chani and the Fremen while facing a choice between love and the fate of the universe.',
    mood: 'amber',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
  },
  {
    id: 118,
    title: 'Oppenheimer',
    year: 2023,
    genre: 'Drama',
    runtime: '3h 00m',
    tagline: 'The world forever changes.',
    synopsis: 'A portrait of physicist J. Robert Oppenheimer and the scientific, political and personal consequences of the Manhattan Project.',
    mood: 'slate',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
  },
  {
    id: 119,
    title: 'Barbie',
    year: 2023,
    genre: 'Comedy',
    runtime: '1h 54m',
    tagline: 'She’s everything. He’s just Ken.',
    synopsis: 'A seemingly perfect life in Barbie Land takes an unexpected turn, sending Barbie and Ken on a journey into the real world.',
    mood: 'rose',
    cast: ['Margot Robbie', 'Ryan Gosling', 'America Ferrera'],
  },
  {
    id: 120,
    title: 'Top Gun: Maverick',
    year: 2022,
    genre: 'Action',
    runtime: '2h 10m',
    tagline: 'Feel the need for speed.',
    synopsis: 'A veteran naval aviator returns to train an elite group of pilots for a dangerous mission while confronting his past.',
    mood: 'blue',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
  },
  {
    id: 121,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    genre: 'Comedy',
    runtime: '1h 39m',
    tagline: 'A legendary concierge. A priceless painting. A most unusual adventure.',
    synopsis: 'A hotel concierge and his young protégé become entangled in a disputed inheritance and a series of increasingly absurd events.',
    mood: 'rose',
    cast: ['Ralph Fiennes', 'Tony Revolori', 'Saoirse Ronan'],
  },
  {
    id: 122,
    title: 'Whiplash',
    year: 2014,
    genre: 'Drama',
    runtime: '1h 47m',
    tagline: 'The road to greatness can take you to the edge.',
    synopsis: 'An ambitious young drummer enters a demanding conservatory and is pushed to extremes by a ruthless instructor.',
    mood: 'amber',
    cast: ['Miles Teller', 'J. K. Simmons', 'Paul Reiser'],
  },
  {
    id: 123,
    title: 'The Truman Show',
    year: 1998,
    genre: 'Drama',
    runtime: '1h 43m',
    tagline: 'On the air. Unaware.',
    synopsis: 'A cheerful insurance salesman begins to suspect that his picture-perfect life is being watched and controlled by unseen forces.',
    mood: 'teal',
    cast: ['Jim Carrey', 'Laura Linney', 'Ed Harris'],
  },
  {
    id: 124,
    title: 'Jurassic Park',
    year: 1993,
    genre: 'Adventure',
    runtime: '2h 07m',
    tagline: 'An adventure 65 million years in the making.',
    synopsis: 'Scientists visit a theme park populated by cloned dinosaurs, but a breakdown in security turns the demonstration into a fight for survival.',
    mood: 'forest',
    cast: ['Sam Neill', 'Laura Dern', 'Jeff Goldblum'],
  },
  {
    id: 125,
    title: 'Gladiator',
    year: 2000,
    genre: 'Action',
    runtime: '2h 35m',
    tagline: 'What we do in life echoes in eternity.',
    synopsis: 'A betrayed Roman general is forced into the arena, where he seeks justice against the emperor who destroyed his life.',
    mood: 'amber',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
  },
  {
    id: 126,
    title: 'John Wick',
    year: 2014,
    genre: 'Action',
    runtime: '1h 41m',
    tagline: 'A man of focus, commitment and sheer will.',
    synopsis: 'A retired assassin returns to the criminal underworld after a personal loss draws him back into a world he tried to leave behind.',
    mood: 'slate',
    cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
  },
  {
    id: 127,
    title: 'Die Hard',
    year: 1988,
    genre: 'Action',
    runtime: '2h 12m',
    tagline: 'Twelve terrorists. One cop. The odds are against John McClane.',
    synopsis: 'A New York detective visiting Los Angeles fights to save hostages when a Christmas party in a skyscraper is seized by armed criminals.',
    mood: 'blue',
    cast: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
  },
  {
    id: 128,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    genre: 'Adventure',
    runtime: '2h 58m',
    tagline: 'One ring to rule them all.',
    synopsis: 'A young hobbit begins a perilous journey to destroy a powerful ring before its dark creator can reclaim it.',
    mood: 'forest',
    cast: ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen'],
  },
  {
    id: 129,
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    year: 2003,
    genre: 'Adventure',
    runtime: '2h 23m',
    tagline: 'Prepare to be blown out of the water.',
    synopsis: 'A blacksmith teams up with an eccentric pirate to rescue a kidnapped governor’s daughter from a cursed crew.',
    mood: 'teal',
    cast: ['Johnny Depp', 'Geoffrey Rush', 'Keira Knightley'],
  },
  {
    id: 130,
    title: 'Raiders of the Lost Ark',
    year: 1981,
    genre: 'Adventure',
    runtime: '1h 55m',
    tagline: 'The return of the great adventure.',
    synopsis: 'Archaeologist Indiana Jones races against Nazi agents to find a legendary religious artifact before they can use its power.',
    mood: 'sunset',
    cast: ['Harrison Ford', 'Karen Allen', 'Paul Freeman'],
  },
  {
    id: 131,
    title: 'Toy Story',
    year: 1995,
    genre: 'Animation',
    runtime: '1h 21m',
    tagline: 'The adventure takes off when toys come to life.',
    synopsis: 'A cowboy toy feels threatened when a flashy space ranger becomes the favourite in their owner’s bedroom.',
    mood: 'blue',
    cast: ['Tom Hanks', 'Tim Allen', 'Don Rickles'],
  },
  {
    id: 132,
    title: 'Coco',
    year: 2017,
    genre: 'Animation',
    runtime: '1h 45m',
    tagline: 'The celebration of a lifetime.',
    synopsis: 'An aspiring young musician journeys to the Land of the Dead to uncover his family’s history and understand its forgotten stories.',
    mood: 'sunset',
    cast: ['Anthony Gonzalez', 'Gael García Bernal', 'Benjamin Bratt'],
  },
  {
    id: 133,
    title: 'WALL-E',
    year: 2008,
    genre: 'Animation',
    runtime: '1h 38m',
    tagline: 'After 700 years of doing what he was built for, he’ll discover what he was meant for.',
    synopsis: 'A lonely waste-collecting robot finds a new purpose after meeting a probe sent to search a deserted Earth for signs of life.',
    mood: 'amber',
    cast: ['Ben Burtt', 'Elissa Knight', 'Jeff Garlin'],
  },
  {
    id: 134,
    title: 'Superbad',
    year: 2007,
    genre: 'Comedy',
    runtime: '1h 53m',
    tagline: 'Come and see how it ends.',
    synopsis: 'Two inseparable high-school friends try to make the most of one party before graduation sends them in different directions.',
    mood: 'rose',
    cast: ['Jonah Hill', 'Michael Cera', 'Christopher Mintz-Plasse'],
  },
  {
    id: 135,
    title: 'Groundhog Day',
    year: 1993,
    genre: 'Comedy',
    runtime: '1h 41m',
    tagline: 'He’s having the worst day of his life… over and over again.',
    synopsis: 'A cynical weatherman finds himself reliving the same small-town day and must rethink how he treats everyone around him.',
    mood: 'teal',
    cast: ['Bill Murray', 'Andie MacDowell', 'Chris Elliott'],
  },
  {
    id: 136,
    title: 'Mean Girls',
    year: 2004,
    genre: 'Comedy',
    runtime: '1h 37m',
    tagline: 'Watch your back.',
    synopsis: 'A teenager entering public school for the first time gets drawn into a popular clique and learns how quickly social games can turn.',
    mood: 'rose',
    cast: ['Lindsay Lohan', 'Rachel McAdams', 'Tina Fey'],
  },
  {
    id: 137,
    title: 'Goodfellas',
    year: 1990,
    genre: 'Crime',
    runtime: '2h 25m',
    tagline: 'Three decades of life in the mafia.',
    synopsis: 'A young man rises through an organised-crime crew and discovers that wealth and loyalty come with a devastating cost.',
    mood: 'slate',
    cast: ['Ray Liotta', 'Robert De Niro', 'Joe Pesci'],
  },
  {
    id: 138,
    title: 'Heat',
    year: 1995,
    genre: 'Crime',
    runtime: '2h 50m',
    tagline: 'A Los Angeles crime saga.',
    synopsis: 'A disciplined detective and a professional thief become locked in a high-stakes pursuit that blurs the line between their lives.',
    mood: 'blue',
    cast: ['Al Pacino', 'Robert De Niro', 'Val Kilmer'],
  },
  {
    id: 139,
    title: 'The Departed',
    year: 2006,
    genre: 'Crime',
    runtime: '2h 31m',
    tagline: 'Lies. Betrayal. Sacrifice. How far will you take it?',
    synopsis: 'An undercover officer inside a Boston gang and a gang informant inside the police try to expose each other before their identities are revealed.',
    mood: 'forest',
    cast: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
  },
  {
    id: 140,
    title: 'Forrest Gump',
    year: 1994,
    genre: 'Drama',
    runtime: '2h 22m',
    tagline: 'Life is like a box of chocolates.',
    synopsis: 'A kind-hearted Alabama man recounts his unexpected place in several defining moments of American history.',
    mood: 'blue',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
  },
  {
    id: 141,
    title: 'Good Will Hunting',
    year: 1997,
    genre: 'Drama',
    runtime: '2h 06m',
    tagline: 'Some people can never believe in themselves until someone believes in them.',
    synopsis: 'A gifted young janitor at MIT confronts his troubled past with help from a professor and a therapist.',
    mood: 'slate',
    cast: ['Matt Damon', 'Robin Williams', 'Ben Affleck'],
  },
  {
    id: 142,
    title: 'Moonlight',
    year: 2016,
    genre: 'Drama',
    runtime: '1h 51m',
    tagline: 'This is the story of a lifetime.',
    synopsis: 'Across three stages of life, a young Black man in Miami navigates identity, family, friendship and love.',
    mood: 'violet',
    cast: ['Trevante Rhodes', 'André Holland', 'Janelle Monáe'],
  },
  {
    id: 143,
    title: 'Hereditary',
    year: 2018,
    genre: 'Horror',
    runtime: '2h 07m',
    tagline: 'Every family tree hides a secret.',
    synopsis: 'After a family matriarch dies, her descendants uncover increasingly disturbing secrets about their ancestry.',
    mood: 'forest',
    cast: ['Toni Collette', 'Alex Wolff', 'Milly Shapiro'],
  },
  {
    id: 144,
    title: 'The Conjuring',
    year: 2013,
    genre: 'Horror',
    runtime: '1h 52m',
    tagline: 'Based on the case files of the Warrens.',
    synopsis: 'Paranormal investigators help a family facing frightening events in an isolated farmhouse.',
    mood: 'slate',
    cast: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor'],
  },
  {
    id: 145,
    title: 'The Shining',
    year: 1980,
    genre: 'Horror',
    runtime: '2h 26m',
    tagline: 'A masterpiece of modern horror.',
    synopsis: 'A writer caring for an isolated hotel with his family begins to unravel as sinister forces take hold of the building.',
    mood: 'amber',
    cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
  },
  {
    id: 146,
    title: 'Se7en',
    year: 1995,
    genre: 'Mystery',
    runtime: '2h 07m',
    tagline: 'Seven deadly sins. Seven ways to die.',
    synopsis: 'Two detectives hunt a serial killer whose crimes are built around the seven deadly sins.',
    mood: 'slate',
    cast: ['Brad Pitt', 'Morgan Freeman', 'Gwyneth Paltrow'],
  },
  {
    id: 147,
    title: 'Zodiac',
    year: 2007,
    genre: 'Mystery',
    runtime: '2h 37m',
    tagline: 'There is more than one way to lose your life to a killer.',
    synopsis: 'Journalists and investigators become consumed by the search for a serial killer who taunts the San Francisco Bay Area.',
    mood: 'blue',
    cast: ['Jake Gyllenhaal', 'Mark Ruffalo', 'Robert Downey Jr.'],
  },
  {
    id: 148,
    title: 'Memento',
    year: 2000,
    genre: 'Mystery',
    runtime: '1h 53m',
    tagline: 'Some memories are best forgotten.',
    synopsis: 'A man unable to form new memories uses notes and tattoos while trying to solve the mystery of his wife’s death.',
    mood: 'teal',
    cast: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
  },
  {
    id: 149,
    title: 'Gone Girl',
    year: 2014,
    genre: 'Mystery',
    runtime: '2h 29m',
    tagline: 'You don’t know what you’ve got till it’s…',
    synopsis: 'When a woman disappears on her wedding anniversary, suspicion falls on her husband and the couple’s carefully shaped public image.',
    mood: 'rose',
    cast: ['Ben Affleck', 'Rosamund Pike', 'Neil Patrick Harris'],
  },
  {
    id: 150,
    title: 'Blade Runner 2049',
    year: 2017,
    genre: 'Sci-Fi',
    runtime: '2h 44m',
    tagline: 'The key to the future is finally unearthed.',
    synopsis: 'A replicant officer uncovers a secret that could unsettle the balance between humans and artificial beings.',
    mood: 'violet',
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
  },
  {
    id: 151,
    title: 'Back to the Future',
    year: 1985,
    genre: 'Sci-Fi',
    runtime: '1h 56m',
    tagline: 'He was never in time for his classes…',
    synopsis: 'A teenager travels to the past in a scientist’s experimental car and must ensure his parents meet or risk erasing his own future.',
    mood: 'blue',
    cast: ['Michael J. Fox', 'Christopher Lloyd', 'Lea Thompson'],
  },
  {
    id: 152,
    title: 'Terminator 2: Judgment Day',
    year: 1991,
    genre: 'Sci-Fi',
    runtime: '2h 17m',
    tagline: 'It’s nothing personal.',
    synopsis: 'A reprogrammed cyborg protects a boy destined to lead humanity against a more advanced machine sent to kill him.',
    mood: 'slate',
    cast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
  },
  {
    id: 153,
    title: 'Prisoners',
    year: 2013,
    genre: 'Thriller',
    runtime: '2h 33m',
    tagline: 'Every moment matters.',
    synopsis: 'When two young girls disappear, a desperate father and a determined detective follow different paths toward the truth.',
    mood: 'forest',
    cast: ['Hugh Jackman', 'Jake Gyllenhaal', 'Viola Davis'],
  },
  {
    id: 154,
    title: 'Shutter Island',
    year: 2010,
    genre: 'Thriller',
    runtime: '2h 18m',
    tagline: 'Someone is missing.',
    synopsis: 'A U.S. marshal investigating a disappearance at a remote psychiatric facility begins to question the island and his own perceptions.',
    mood: 'slate',
    cast: ['Leonardo DiCaprio', 'Mark Ruffalo', 'Ben Kingsley'],
  },
  {
    id: 155,
    title: 'Nightcrawler',
    year: 2014,
    genre: 'Thriller',
    runtime: '1h 57m',
    tagline: 'The city shines brightest at night.',
    synopsis: 'An ambitious freelance cameraman finds success filming violent incidents for local television and gradually crosses ethical lines.',
    mood: 'amber',
    cast: ['Jake Gyllenhaal', 'Riz Ahmed', 'Rene Russo'],
  },
];

const genres = [
  'All',
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Drama',
  'Horror',
  'Mystery',
  'Sci-Fi',
  'Thriller',
];
let activeGenre = 'All';
let query = '';
let selectedMovie: Movie | null = null;
let saved = new Set<number>();
type Trailer = { videoId: string; title: string; channelTitle: string; thumbnailUrl: string };
const trailerCache = new Map<number, Trailer | null>();
const trailerChecked = new Set<number>();
const trailerLoading = new Set<number>();
const trailerErrors = new Set<number>();
let playingTrailerId: number | null = null;

const app = document.querySelector<HTMLDivElement>('#app')!;
const escapeHtml = (value: string) =>
  value.replace(
    /[&<>\"']/g,
    char =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        "'": '&#39;',
      })[char] || char
  );
const officialPosterImages = new Map<number, string>();
let officialPostersLoading = false;
let officialPostersLoaded = false;

const posterFallback = (movie: Movie) =>
  `<div class="poster-fallback"><div class="poster-grain"></div><div class="poster-orbit orbit-one"></div><div class="poster-orbit orbit-two"></div><div class="poster-kicker">A FILM EXPERIENCE</div><div class="poster-art">${movie.mood === 'forest' ? '✳' : movie.mood === 'amber' ? '◈' : movie.mood === 'blue' ? '◉' : movie.mood === 'teal' ? '✧' : movie.mood === 'rose' ? '☾' : movie.mood === 'sunset' ? '✺' : movie.mood === 'slate' ? '⌁' : '✦'}</div><div class="poster-title">${escapeHtml(movie.title)}</div><div class="poster-footer">${movie.year} <span>•</span> ${escapeHtml(movie.genre.toUpperCase())}</div></div>`;

const poster = (movie: Movie, large = false) => {
  const imageUrl = officialPosterImages.get(movie.id);
  return `<div class="poster poster-${movie.mood} ${large ? 'poster-large' : ''} ${imageUrl ? 'poster-official' : ''}" aria-label="${imageUrl ? 'Official poster image' : 'Illustrated poster artwork'} for ${escapeHtml(movie.title)}">${imageUrl ? `<img class="official-poster-image" src="${escapeHtml(imageUrl)}" alt="Official movie poster for ${escapeHtml(movie.title)}" loading="${large ? 'eager' : 'lazy'}" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('poster-image-failed');this.remove()">` : ''}${posterFallback(movie)}</div>`;
};

async function loadOfficialPosters() {
  if (officialPostersLoading || officialPostersLoaded) return;
  officialPostersLoading = true;
  try {
    const response = await fetch('/api/posters', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ movies: movies.map(movie => ({ id: movie.id, title: movie.title })) }) });
    if (!response.ok) throw new Error('Poster lookup failed');
    const data = await response.json() as { posters?: { id: number; imageUrl: string }[] };
    for (const item of data.posters || []) {
      if (Number.isInteger(item.id) && typeof item.imageUrl === 'string' && /^https:\/\//.test(item.imageUrl)) {
        officialPosterImages.set(item.id, item.imageUrl);
      }
    }
    if (officialPosterImages.size) render();
  } catch {
    // Keep the built-in artwork if the poster service is temporarily unavailable.
  } finally {
    officialPostersLoading = false;
    officialPostersLoaded = true;
  }
}
const card = (movie: Movie, index: number) =>
  `<button class="movie-card" data-movie="${movie.id}" style="--card-index:${index}" aria-label="View ${escapeHtml(movie.title)} details">${poster(movie)}<div class="card-meta"><div class="card-title-row"><h3>${escapeHtml(movie.title)}</h3>${movie.rating ? `<span class="rating"><span>★</span> ${escapeHtml(movie.rating)}</span>` : ''}</div><p>${movie.year} <span>·</span> ${escapeHtml(movie.genre)} <span>·</span> ${movie.runtime}</p></div></button>`;
const visibleMovies = () =>
  movies.filter(
    movie =>
      (activeGenre === 'All' || movie.genre === activeGenre) &&
      `${movie.title} ${movie.genre} ${movie.year} ${movie.tagline}`
        .toLowerCase()
        .includes(query.toLowerCase())
  );

function render() {
  const list = visibleMovies();
  const featured = movies[0];
  app.innerHTML = `<header class="topbar"><button class="menu-toggle" id="genre-sidebar-toggle" aria-label="Open navigation menu" aria-expanded="false"><span>☰</span><span class="menu-label">Browse</span></button><a class="brand" href="#top" aria-label="Movie Discovery home"><span class="brand-mark">M<span>✦</span></span><span class="brand-name">MOVIE<span>DISCOVERY</span></span></a><nav class="desktop-nav" aria-label="Main navigation"><a class="nav-active" href="#discover">Discover</a><a href="#trending">Trending</a><a href="#genres">Genres</a></nav><button class="watchlist-button" id="watchlist-toggle"><span>♡</span><span class="watchlist-label">My list</span><b>${saved.size}</b></button></header>
  <div class="sidebar-scrim" id="sidebar-scrim"></div><aside class="genre-sidebar" id="genre-sidebar" aria-label="Browse movies"><div class="sidebar-heading"><span class="eyebrow muted-eyebrow">EXPLORE</span><button class="sidebar-close" id="sidebar-close" aria-label="Close navigation menu">×</button></div><button class="sidebar-home" data-sidebar-home><span>⌂</span> Discover all movies</button><button class="sidebar-section-toggle" id="movie-genres-toggle" aria-expanded="true"><span><span class="sidebar-icon">▤</span> Movie Genres</span><span class="sidebar-chevron">⌄</span></button><div class="sidebar-genre-list" id="sidebar-genre-list">${genres.filter(genre => genre !== 'All').map(genre => `<button class="sidebar-genre ${activeGenre === genre ? 'sidebar-genre-active' : ''}" data-sidebar-genre="${genre}"><span class="genre-dot"></span>${genre}<span class="sidebar-count">${movies.filter(movie => movie.genre === genre).length}</span></button>`).join('')}</div><div class="sidebar-divider"></div><a class="sidebar-link" href="#trending" data-sidebar-close><span>✦</span> Trending discoveries</a><div class="sidebar-note"><span>✧</span><p>Find your next favourite, one genre at a time.</p></div></aside>
  <main id="top"><section class="hero"><div class="hero-copy"><div class="eyebrow"><span class="eyebrow-dot"></span> YOUR NEXT FAVOURITE STARTS HERE</div><h1>Less scrolling.<br/><em>More watching.</em></h1><p class="hero-description">Find films that stay with you. Explore stories, uncover hidden gems and discover what to watch next.</p><form class="search-box" id="search-form"><span class="search-icon">⌕</span><input id="movie-search" aria-label="Search movies" placeholder="Search titles, genres, moods…" value="${escapeHtml(query)}"/><button type="submit" aria-label="Search">Search <span>↗</span></button></form><div class="hero-proof"><span class="proof-stars">★★★★★</span><span>A little less guesswork. A lot more great cinema.</span></div></div><div class="hero-art"><div class="hero-glow"></div><div class="hero-ticket"><div class="ticket-top"><span>FEATURED DISCOVERY</span><span>NO. 001</span></div>${poster(featured, true)}<div class="ticket-caption"><div><span class="caption-label">THIS WEEK'S PICK</span><h2>${featured.title}</h2><p>${featured.tagline}</p></div><span class="ticket-arrow">↗</span></div></div><div class="floating-note note-top"><span>✦</span> Stories worth finding</div><div class="floating-note note-bottom"><span class="mini-star">✦</span><div><b>${movies.length} <small>films</small></b><small>Curated catalogue</small></div></div></div><div class="hero-index">01 <span></span> ${movies.length}</div></section>
  <section class="section trending-section" id="trending"><div class="section-heading"><div><div class="eyebrow muted-eyebrow">THE GOOD STUFF</div><h2>Trending <em>discoveries</em></h2><p class="section-subtitle">Stories to put on your watchlist.</p></div><a class="text-link" href="#discover" id="view-all">Explore all films <span>↗</span></a></div><div class="genre-chips" id="genres" role="group" aria-label="Filter by genre">${genres.map(genre => `<button class="genre-chip ${activeGenre === genre ? 'chip-active' : ''}" data-genre="${genre}">${genre === 'All' ? '✦ ' : ''}${genre}</button>`).join('')}</div><div class="movie-grid" id="movie-grid">${list.length ? list.map(card).join('') : '<div class="empty-state"><span>⌕</span><h3>No films found</h3><p>Try another title or choose a different genre.</p><button class="reset-search" id="reset-search">Clear filters</button></div>'}</div><div class="demo-notice"><span>ⓘ</span><p><strong>About this catalogue:</strong> these are real films with original editorial summaries and cast information. No third-party rating is displayed. External links open IMDb, Wikipedia, YouTube trailer search and JustWatch search results. Streaming availability varies by country; no provider availability is guaranteed.</p></div></section>
  <section class="editorial-band"><div class="editorial-symbol">✳</div><div><div class="eyebrow">GOOD FILMS. NO ENDLESS SCROLL.</div><h2>Your watchlist deserves<br/>a little <em>inspiration.</em></h2></div><p>From edge-of-your-seat thrillers to the quiet films you think about for days — your next favourite is out there.</p><a href="#discover" class="band-link">Find your next film <span>↗</span></a></section>
  <section class="section why-section" id="discover"><div class="section-heading"><div><div class="eyebrow muted-eyebrow">MADE FOR MOVIE PEOPLE</div><h2>Find your kind <em>of story.</em></h2></div></div><div class="feature-grid"><article class="feature-item"><span class="feature-icon">⌕</span><h3>Search with a purpose</h3><p>Find films by title, genre or the kind of story you're in the mood for.</p></article><article class="feature-item"><span class="feature-icon">✦</span><h3>Discover hidden gems</h3><p>Go beyond the same top-ten lists and find something unexpected.</p></article><article class="feature-item"><span class="feature-icon">↗</span><h3>Know where to watch</h3><p>Our planned watch guide will point you to verified, legitimate streaming options.</p></article></div></section></main>
  <footer class="footer"><a class="brand footer-brand" href="#top"><span class="brand-mark">M<span>✦</span></span><span class="brand-name">MOVIE<span>DISCOVERY</span></span></a><p>Made for the love of a good story.</p><div class="footer-links"><a href="#about" id="about-link">About</a><a href="#privacy" id="privacy-link">Privacy</a><a href="#contact" id="contact-link">Contact</a></div><small>© 2026 Movie Discovery · Independent concept prototype</small></footer>
  ${selectedMovie ? detailModal(selectedMovie) : ''}<div class="toast" id="toast" role="status" aria-live="polite"></div>`;
  bindEvents();
}

function movieLinks(movie: Movie) {
  const titleYear = encodeURIComponent(movie.title + ' ' + movie.year);
  const filmQuery = encodeURIComponent(movie.title + ' film');
  const trailerQuery = encodeURIComponent(movie.title + ' ' + movie.year + ' official trailer');
  return `<div class="movie-links"><span class="caption-label">EXPLORE THIS FILM</span><div class="movie-link-list"><a href="https://www.imdb.com/find/?q=${titleYear}" target="_blank" rel="noopener noreferrer">IMDb <span>↗</span></a><a href="https://en.wikipedia.org/w/index.php?search=${filmQuery}" target="_blank" rel="noopener noreferrer">Wikipedia <span>↗</span></a><a href="https://www.youtube.com/results?search_query=${trailerQuery}" target="_blank" rel="noopener noreferrer">YouTube trailers <span>↗</span></a><a href="https://www.justwatch.com/us/search?q=${titleYear}" target="_blank" rel="noopener noreferrer">JustWatch <span>↗</span></a></div><p class="movie-links-note">External search links; availability and results can vary by country.</p></div>`;
}

function detailModal(movie: Movie) {
  return `<div class="modal-backdrop" id="modal-backdrop"><section class="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title"><button class="modal-close" id="modal-close" aria-label="Close details">×</button><div class="detail-poster">${poster(movie, true)}</div><div class="detail-copy"><div class="eyebrow muted-eyebrow">MOVIE DETAILS · CURATED FILM</div><h2 id="detail-title">${escapeHtml(movie.title)}</h2><div class="detail-facts"><span>${movie.year}</span><span>${escapeHtml(movie.genre)}</span><span>${movie.runtime}</span>${movie.rating ? `<span class="rating">★ ${escapeHtml(movie.rating)}</span>` : ''}</div><p class="detail-tagline">${escapeHtml(movie.tagline)}</p><p class="detail-synopsis">${escapeHtml(movie.synopsis)}</p><div class="detail-cast"><span class="caption-label">STARRING</span><p>${movie.cast.map(escapeHtml).join(' · ')}</p></div>${trailerPanel(movie)}${movieLinks(movie)}<div class="watch-placeholder"><span>↗</span><div><b>Where to watch</b><p>Verified streaming availability will appear here after data-source licensing.</p></div></div><button class="save-button ${saved.has(movie.id) ? 'is-saved' : ''}" id="save-movie">${saved.has(movie.id) ? '✓ Added to my list' : '+ Add to my list'}</button><p class="detail-disclaimer">Curated movie information and original summary. Use the external links to verify details and check availability in your country.</p></div></section></div>`;
}

function trailerPanel(movie: Movie) {
  const trailer = trailerCache.get(movie.id);
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' ' + movie.year + ' official trailer')}`;
  if (trailer && playingTrailerId === movie.id) {
    return `<div class="trailer-panel"><div class="trailer-player"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(trailer.videoId)}?autoplay=1&rel=0&playsinline=1" title="${escapeHtml(movie.title)}" loading="eager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div></div>`;
  }
  if (trailer) {
    return `<div class="trailer-panel"><button type="button" class="trailer-thumbnail" data-play-trailer aria-label="Play ${escapeHtml(movie.title)}">${poster(movie, true)}<span class="trailer-play-icon" aria-hidden="true">▶</span></button></div>`;
  }
  const stateClass = trailerLoading.has(movie.id) ? ' preview-loading' : '';
  const status = trailerErrors.has(movie.id) || trailerChecked.has(movie.id) ? ' preview-fallback' : stateClass;
  return `<div class="trailer-panel"><button type="button" class="trailer-thumbnail${status}" data-play-trailer aria-label="Play ${escapeHtml(movie.title)}">${poster(movie, true)}<span class="trailer-play-icon" aria-hidden="true">▶</span></button></div>`;
}

async function loadTrailer(movie: Movie, retry = false) {
  if (trailerLoading.has(movie.id)) return;
  if (trailerChecked.has(movie.id) && !retry) return;
  trailerLoading.add(movie.id);
  trailerErrors.delete(movie.id);
  render();
  try {
    const response = await fetch('/api/trailers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: movie.title, year: movie.year }) });
    if (!response.ok) throw new Error('Trailer lookup failed');
    const data = await response.json() as { trailer?: Trailer | null };
    trailerCache.set(movie.id, data.trailer || null);
    trailerChecked.add(movie.id);
  } catch {
    trailerErrors.add(movie.id);
    trailerChecked.delete(movie.id);
  } finally {
    trailerLoading.delete(movie.id);
    if (selectedMovie?.id === movie.id) render();
  }
}

function showToast(message: string) {
  const toast = document.querySelector<HTMLDivElement>('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('toast-visible');
  window.setTimeout(() => toast.classList.remove('toast-visible'), 2400);
}

function bindEvents() {
  document.querySelector('[data-find-trailer]')?.addEventListener('click', () => {
    if (selectedMovie) void loadTrailer(selectedMovie, true);
  });
  document.querySelector('[data-play-trailer]')?.addEventListener('click', () => {
    if (!selectedMovie) return;
    const trailer = trailerCache.get(selectedMovie.id);
    if (trailer) {
      playingTrailerId = selectedMovie.id;
      render();
      return;
    }
    if (!trailerLoading.has(selectedMovie.id)) void loadTrailer(selectedMovie, true);
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedMovie.title + ' ' + selectedMovie.year + ' official trailer')}`, '_blank', 'noopener,noreferrer');
  });
  document.querySelector('[data-stop-trailer]')?.addEventListener('click', () => {
    playingTrailerId = null;
    render();
  });
  const sidebar = document.querySelector<HTMLElement>('#genre-sidebar');
  const scrim = document.querySelector<HTMLElement>('#sidebar-scrim');
  const menuButton = document.querySelector<HTMLButtonElement>('#genre-sidebar-toggle');
  const closeSidebar = () => { sidebar?.classList.remove('is-open'); scrim?.classList.remove('is-visible'); menuButton?.setAttribute('aria-expanded', 'false'); document.body.classList.remove('sidebar-open'); };
  menuButton?.addEventListener('click', () => { const opening = !sidebar?.classList.contains('is-open'); sidebar?.classList.toggle('is-open', opening); scrim?.classList.toggle('is-visible', opening); menuButton.setAttribute('aria-expanded', String(opening)); document.body.classList.toggle('sidebar-open', opening); });
  document.querySelector('#sidebar-close')?.addEventListener('click', closeSidebar);
  scrim?.addEventListener('click', closeSidebar);
  document.querySelector('#movie-genres-toggle')?.addEventListener('click', () => { const list = document.querySelector<HTMLElement>('#sidebar-genre-list'); const button = document.querySelector<HTMLButtonElement>('#movie-genres-toggle'); const expanded = button?.getAttribute('aria-expanded') !== 'true'; button?.setAttribute('aria-expanded', String(expanded)); list?.classList.toggle('is-collapsed', !expanded); });
  document.querySelectorAll<HTMLButtonElement>('[data-sidebar-genre]').forEach(button => button.addEventListener('click', () => { activeGenre = button.dataset.sidebarGenre || 'All'; query = ''; closeSidebar(); render(); document.querySelector('#trending')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
  document.querySelector('[data-sidebar-home]')?.addEventListener('click', () => { activeGenre = 'All'; query = ''; closeSidebar(); render(); document.querySelector('#trending')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
  document.querySelectorAll<HTMLElement>('[data-sidebar-close]').forEach(link => link.addEventListener('click', closeSidebar));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeSidebar(); });
  document
    .querySelector<HTMLFormElement>('#search-form')
    ?.addEventListener('submit', event => {
      event.preventDefault();
      query =
        document
          .querySelector<HTMLInputElement>('#movie-search')
          ?.value.trim() || '';
      render();
      document
        .querySelector('#trending')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  document
    .querySelector<HTMLInputElement>('#movie-search')
    ?.addEventListener('input', event => {
      const input = event.currentTarget as HTMLInputElement;
      const cursor = input.selectionStart;
      query = input.value;
      const grid = document.querySelector<HTMLDivElement>('#movie-grid');
      const list = visibleMovies();
      if (grid)
        grid.innerHTML = list.length
          ? list.map(card).join('')
          : '<div class="empty-state"><span>⌕</span><h3>No films found</h3><p>Try another title or choose a different genre.</p><button class="reset-search" id="reset-search">Clear filters</button></div>';
      document
        .querySelectorAll<HTMLButtonElement>('.movie-card')
        .forEach(button =>
          button.addEventListener('click', () =>
            openMovie(Number(button.dataset.movie))
          )
        );
      document.querySelector('#reset-search')?.addEventListener('click', () => {
        query = '';
        activeGenre = 'All';
        render();
      });
      input.focus();
      if (cursor !== null) input.setSelectionRange(cursor, cursor);
    });
  document.querySelectorAll<HTMLButtonElement>('[data-genre]').forEach(button =>
    button.addEventListener('click', () => {
      activeGenre = button.dataset.genre || 'All';
      render();
    })
  );
  document
    .querySelectorAll<HTMLButtonElement>('[data-movie]')
    .forEach(button =>
      button.addEventListener('click', () =>
        openMovie(Number(button.dataset.movie))
      )
    );
  document.querySelector('#reset-search')?.addEventListener('click', () => {
    query = '';
    activeGenre = 'All';
    render();
  });
  document.querySelector('#watchlist-toggle')?.addEventListener('click', () => {
    if (!saved.size) {
      showToast('Open a movie and add it to your list.');
      return;
    }
    activeGenre = 'All';
    query = '';
    render();
    showToast(
      `You have ${saved.size} saved ${saved.size === 1 ? 'film' : 'films'} in this session.`
    );
  });
  document.querySelector('#view-all')?.addEventListener('click', () => {
    activeGenre = 'All';
    query = '';
    render();
  });
  document.querySelector('#modal-close')?.addEventListener('click', () => {
    closeMovie();
  });
  document
    .querySelector('#modal-backdrop')
    ?.addEventListener('click', event => {
      if (event.target === event.currentTarget) {
        closeMovie();
      }
    });
  document.querySelector('#save-movie')?.addEventListener('click', () => {
    if (!selectedMovie) return;
    if (saved.has(selectedMovie.id)) saved.delete(selectedMovie.id);
    else saved.add(selectedMovie.id);
    const movie = selectedMovie;
    render();
    selectedMovie = movie;
    const backdrop = document.querySelector('#modal-backdrop');
    if (backdrop) {
      const old = document.querySelector('#save-movie');
      if (old)
        old.textContent = saved.has(movie.id)
          ? '✓ Added to my list'
          : '+ Add to my list';
    }
    document.querySelector('.watchlist-button b')!.textContent = String(
      saved.size
    );
    showToast(
      saved.has(movie.id)
        ? 'Added to your list for this session.'
        : 'Removed from your list.'
    );
  });
  document.querySelector('#about-link')?.addEventListener('click', event => {
    event.preventDefault();
    showToast('An independent movie discovery concept.');
  });
  document.querySelector('#privacy-link')?.addEventListener('click', event => {
    event.preventDefault();
    showToast('Prototype only: no accounts or personal data collection.');
  });
  document.querySelector('#contact-link')?.addEventListener('click', event => {
    event.preventDefault();
    showToast('Contact details will be added before public launch.');
  });
  document.addEventListener(
    'keydown',
    function escapeModal(event) {
      if (event.key === 'Escape' && selectedMovie) {
        closeMovie();
      }
    },
    { once: true }
  );
}

function movieSlug(movie: Movie) {
  return movie.title.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function syncMovieRoute(movie: Movie | null, replace = false) {
  const path = movie ? `/movie/${movieSlug(movie)}` : '/';
  if (window.location.pathname !== path) {
    if (replace) history.replaceState({}, '', path); else history.pushState({}, '', path);
  }
}
function openMovie(id: number, updateRoute = true) {
  selectedMovie = movies.find(movie => movie.id === id) || null;
  playingTrailerId = null;
  if (selectedMovie && updateRoute) syncMovieRoute(selectedMovie);
  render();
  if (selectedMovie) void loadTrailer(selectedMovie);
}
function closeMovie(updateRoute = true) {
  selectedMovie = null;
  playingTrailerId = null;
  if (updateRoute) syncMovieRoute(null);
  render();
}
window.addEventListener('popstate', () => {
  const slug = window.location.pathname.match(/^\/movie\/([^/]+)\/?$/)?.[1];
  const movie = slug ? movies.find(item => movieSlug(item) === slug) : null;
  if (movie) openMovie(movie.id, false); else closeMovie(false);
});
const initialSlug = window.location.pathname.match(/^\/movie\/([^/]+)\/?$/)?.[1];
const initialMovie = initialSlug ? movies.find(item => movieSlug(item) === initialSlug) : null;
if (initialMovie) selectedMovie = initialMovie;
render();
if (selectedMovie) void loadTrailer(selectedMovie);
void loadOfficialPosters();
