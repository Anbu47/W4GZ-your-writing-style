/*
  THE WRITERS
  ===========
  One block per writer. To add a writer, copy a whole block, change the text,
  and fill in "fit".

  "fit" is how this writer would answer the quiz: for each question id, the key
  of the answer that fits them. Question ids and answer keys are in data/questions.js.

    form: "epic"                  one answer fits
    form: ["epic", "serial"]      two answers fit equally well

  Give every writer an answer for each opening question and each question for
  everyone. For a branch question, add it only to the writers it is about.

  tagline is a short real line from the writer's own work, and taglineFrom says where it
  comes from. The page shows them as:  "tagline" — Name, taglineFrom

  focus and approach must be names listed in data/settings.js.

  After any change, open check.html. It lists typos, gaps, and writers the quiz
  cannot tell apart.
*/
var QUIZ_WRITERS = [

  {
    id: "dickens",
    name: "Charles Dickens",
    years: "1812–1870",
    from: "England",
    focus: "heart",
    approach: "planner",
    tagline: "It was the best of times, it was the worst of times.",
    taglineFrom: "A Tale of Two Cities",
    style: "Like Dickens, you build a big cast of unforgettable people, each with a name, a habit and a voice you could pick out of a crowd. You plan where they're going, so every one of them has a part to play by the end.",
    trueStory: "Dickens published most of his novels in monthly parts and kept \"number plans\": sheets sketching the chapters and characters of each part before he wrote it.",
    about: "Dickens grew up in Portsmouth and London. When he was 12, his father was sent to prison for debt, and Charles had to work long days in a factory pasting labels on pots of shoe polish. He never forgot it. His stories are packed with poor children, cruel institutions and unforgettable characters, and they made him the most famous writer of his time. He also gave public readings of his work to huge crowds.",
    works: ["Oliver Twist", "A Christmas Carol", "David Copperfield", "Great Expectations"],
    startWith: "A Christmas Carol is short, spooky and full of his best characters.",
    superpower: "Vivid, memorable characters and arcs that come together. Readers believe your people could walk off the page.",
    watchOut: "Spending so long on backstory and planning that the story never actually starts.",
    exercise: "Write one scene where your character wants something small (a seat on the bus, the last slice of pizza) and can't get it. No backstory allowed. Let the scene show who they are.",
    fit: {
      // questions for everyone
      form: "serial", ideas: "hardship", routine: "plan", mood: "stormy", hero: "outsider", humor: "comic",
      bigq: "power", setting: "city", narrator: "direct", sentences: "intense", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "people", rules: "clear", when: "lived",
      began: "reporter", real: "real", ending: "happy", words: "speech", seek: "society", fame: "famous",
      cast: "crowd", effect: "moved", time: "line",
      // long version only
      opening: "idea", enemy: "society", length: "giant", talk: "balanced", nature: "backdrop", romance: "side",
      death: "quiet", child: "hero", politics: "direct", faith: "absent", home: "capital", output: "flood",
      hook: "thrills", strongest: "ordinary", build: "straight", title: "name", sign: "real",
      peak: "lifelong", pace: "fast", self: "disguised", outlook: "hopeful", company: "public", heard: "both",
      money: "plot", creature: "humans",
      // branch questions this writer belongs to
      detour: "sidekick", reach: "readings", secret: "benefactor"
    }
  },

  {
    id: "murasaki",
    name: "Murasaki Shikibu",
    years: "c. 973 – c. 1014",
    from: "Japan",
    focus: "heart",
    approach: "explorer",
    tagline: "Real things in the darkness seem no realer than dreams.",
    taglineFrom: "The Tale of Genji",
    style: "Like Murasaki, you're fascinated by what people feel but don't say: longing, jealousy, quiet regret. You let your story grow chapter by chapter, following your characters through their lives.",
    trueStory: "The Tale of Genji was read and passed around at the Japanese imperial court while Murasaki was still writing it, and it grew to 54 chapters.",
    about: "Murasaki Shikibu was a lady-in-waiting at the Japanese imperial court during the Heian period, about a thousand years ago. \"Murasaki\" was a nickname, and her real name is unknown. She wrote The Tale of Genji, the story of a prince and his loves, which is often called one of the world's first novels. She also kept a diary that gives a sharp, honest look at court life.",
    works: ["The Tale of Genji", "The Diary of Lady Murasaki"],
    startWith: "The first few chapters of a modern translation of The Tale of Genji.",
    superpower: "Emotional insight. You notice the tiny moments where feelings change.",
    watchOut: "Drifting. Characters can wander without a clear story shape to hold them.",
    exercise: "Before your next draft, finish this sentence: \"My character wants ___ but ___.\" Keep it where you can see it while you write.",
    fit: {
      // questions for everyone
      form: "serial", ideas: "family", routine: "stolen", mood: "fleeting", hero: "polite", humor: "irony",
      bigq: "love", setting: "court", narrator: "hidden", sentences: "witty", audience: "circle",
      job: "memory", life: "books", describe: "nature", rules: "strict", when: "legend", began: "poet",
      real: "real", ending: "open", words: "music", seek: "beauty", fame: "handed", cast: "crowd",
      effect: "moved", time: "cycle",
      // long version only
      opening: "place", enemy: "fate", length: "giant", talk: "balanced", nature: "mirror", romance: "center",
      death: "quiet", child: "none", politics: "background", faith: "devout", home: "capital", output: "one",
      hook: "language", strongest: "women", build: "episodes", title: "name", sign: "pen", peak: "middle",
      pace: "slow", self: "disguised", outlook: "bittersweet", company: "circle", heard: "aloud",
      money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      love: "poems", reach: "aloud"
    }
  },

  {
    id: "austen",
    name: "Jane Austen",
    years: "1775–1817",
    from: "England",
    focus: "heart",
    approach: "reviser",
    tagline: "One half of the world cannot understand the pleasures of the other.",
    taglineFrom: "Emma",
    style: "Like Austen, you love people: their pride, their mistakes and the funny gap between what they say and what they mean. You rewrite until every conversation reveals character.",
    trueStory: "Austen's first version of Pride and Prejudice was called First Impressions. A publisher turned it down without reading it, and she reworked it for years before it came out in 1813.",
    about: "Austen was the daughter of a country clergyman in Hampshire and grew up in a lively family that loved reading and putting on plays at home. Her novels came out without her name; the first said only \"By a Lady.\" She wrote about everyday life, money and marriage with sharp humor, and her books are still adapted into films and series today.",
    works: ["Pride and Prejudice", "Sense and Sensibility", "Emma", "Persuasion"],
    startWith: "Pride and Prejudice: two proud people, one big misunderstanding.",
    superpower: "Sharp, witty characters and dialogue. Readers feel they know your people.",
    watchOut: "Rewriting chapter one forever and never reaching the end.",
    exercise: "Finish a whole draft before you revise anything. Then do a revision pass where every conversation must show something new about a character.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "family", routine: "rewrite", mood: "calm", hero: "polite", humor: "irony",
      bigq: "love", setting: "court", narrator: "inside", sentences: "witty", audience: "circle",
      job: "entertain", life: "books", describe: "people", rules: "clear", when: "now", began: "words",
      real: "real", ending: "happy", words: "exact", seek: "mind", fame: "hidden", cast: "few",
      effect: "laugh", time: "line",
      // long version only
      opening: "idea", enemy: "self", length: "book", talk: "mostly", nature: "backdrop", romance: "center",
      death: "light", child: "none", politics: "none", faith: "absent", home: "home", output: "few",
      hook: "laughter", strongest: "women", build: "straight", title: "idea", sign: "anon", peak: "middle",
      pace: "steady", self: "disguised", outlook: "hopeful", company: "loner", heard: "aloud", money: "plot",
      creature: "humans",
      // branch questions this writer belongs to
      love: "sparring", reach: "anonymous"
    }
  },

  {
    id: "shakespeare",
    name: "William Shakespeare",
    years: "1564–1616",
    from: "England",
    focus: "spark",
    approach: "planner",
    tagline: "All the world's a stage, and all the men and women merely players.",
    taglineFrom: "As You Like It",
    style: "Like Shakespeare, you take a story and engineer it for maximum drama: mistaken identities, secrets, bad timing and big reveals. You know exactly where each turn hits the audience.",
    trueStory: "Shakespeare borrowed almost all of his plots from older histories and stories, then rebuilt them into tightly constructed plays.",
    about: "Shakespeare was born in Stratford-upon-Avon and moved to London, where he became an actor, a playwright and a part-owner of an acting company and the Globe Theatre. He wrote about 37 plays and 154 sonnets. Many words and phrases we still use first appear in his writing. After he died, two of his fellow actors collected his plays in the First Folio (1623); without it, about half of them might have been lost.",
    works: ["Romeo and Juliet", "Hamlet", "Macbeth", "A Midsummer Night's Dream"],
    startWith: "A Midsummer Night's Dream, and watch a performance if you can. Plays are meant to be seen.",
    superpower: "Structure and drama. Your scenes build to moments people remember.",
    watchOut: "Characters turning into chess pieces that only exist to move the plot.",
    exercise: "Take your plot's biggest moment and rewrite it from inside your character's head. Focus on how it feels, not just what happens.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "remake", routine: "plan", mood: "stormy", hero: "rebel", humor: "comic",
      bigq: "fate", setting: "court", narrator: "hidden", sentences: "witty", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "battles", rules: "strict", when: "legend",
      began: "words", real: "strange", ending: "tragic", words: "play", seek: "mind", fame: "famous",
      cast: "crowd", effect: "moved", time: "line",
      // long version only
      opening: "action", enemy: "self", length: "short", talk: "mostly", nature: "mirror", romance: "ruin",
      death: "violent", child: "none", politics: "hidden", faith: "absent", home: "capital", output: "steady",
      hook: "language", strongest: "thinkers", build: "straight", title: "name", sign: "real", peak: "middle",
      pace: "fast", self: "invented", outlook: "bittersweet", company: "circle", heard: "performed",
      money: "hardly", creature: "monsters",
      // branch questions this writer belongs to
      love: "masks", reach: "actors", stage: "kings"
    }
  },

  {
    id: "dostoevsky",
    name: "Fyodor Dostoevsky",
    years: "1821–1881",
    from: "Russia",
    focus: "spark",
    approach: "explorer",
    tagline: "Pain and suffering are always inevitable for a large intelligence and a deep heart.",
    taglineFrom: "Crime and Punishment",
    style: "Like Dostoevsky, you write high-stakes stories: crimes, confessions, impossible choices. You write in feverish bursts, and the story often surprises you as much as your reader.",
    trueStory: "To meet a publisher's deadline, Dostoevsky dictated his novel The Gambler to a stenographer in 26 days. He later married her, Anna Snitkina.",
    about: "Dostoevsky was born in Moscow. As a young writer he was arrested for joining a group that discussed banned ideas, sentenced to death, and pardoned at the last moment. He spent four years in a prison camp in Siberia instead. That experience shaped his novels, which dive into guilt, faith, freedom and the darkest corners of the mind.",
    works: ["Crime and Punishment", "The Brothers Karamazov", "The Idiot", "Notes from Underground"],
    startWith: "\"White Nights,\" a short, tender story, before taking on Crime and Punishment.",
    superpower: "Intensity and suspense. Readers can't look away.",
    watchOut: "Endings. Stories that start strong can stall when the energy runs out.",
    exercise: "Write your last scene now, even roughly. Now you're racing toward something instead of away from the blank page.",
    fit: {
      // questions for everyone
      form: "serial", ideas: "hardship", routine: "burst", mood: "fever", hero: "rebel", humor: "bitter",
      bigq: "meaning", setting: "city", narrator: "inside", sentences: "intense", audience: "wake",
      job: "shake", life: "war", describe: "thoughts", rules: "mix", when: "now", began: "career",
      real: "real", ending: "open", words: "speech", seek: "spirit", fame: "banned", cast: "few",
      effect: "chill", time: "moment",
      // long version only
      opening: "action", enemy: "self", length: "giant", talk: "mostly", nature: "backdrop", romance: "ideal",
      death: "violent", child: "none", politics: "direct", faith: "wrestle", home: "capital",
      output: "steady", hook: "ideas", strongest: "thinkers", build: "straight", title: "idea", sign: "real",
      peak: "late", pace: "fast", self: "disguised", outlook: "bittersweet", company: "loner",
      heard: "silent", money: "poverty", creature: "humans",
      // branch questions this writer belongs to
      detour: "argument", trouble: "prison"
    }
  },

  {
    id: "hemingway",
    name: "Ernest Hemingway",
    years: "1899–1961",
    from: "United States",
    focus: "spark",
    approach: "reviser",
    tagline: "A man can be destroyed but not defeated.",
    taglineFrom: "The Old Man and the Sea",
    style: "Like Hemingway, you get the story down and then strip it back. You cut, tighten and rewrite until every scene moves and nothing is wasted.",
    trueStory: "Hemingway said he rewrote the ending of A Farewell to Arms 39 times before he was satisfied.",
    about: "Hemingway started as a newspaper reporter, where he learned to write short, clear sentences. In the First World War he drove ambulances in Italy and was badly wounded. He believed a writer should show only the tip of the iceberg and leave the rest beneath the surface for the reader to feel. He won the Pulitzer Prize in 1953 and the Nobel Prize in Literature in 1954.",
    works: ["The Old Man and the Sea", "A Farewell to Arms", "The Sun Also Rises", "For Whom the Bell Tolls"],
    startWith: "The Old Man and the Sea: short, simple sentences, huge feelings.",
    superpower: "Pacing and economy. You can tell what's dull and you're brave enough to cut it.",
    watchOut: "Cutting the quiet moments readers need to breathe and to care.",
    exercise: "Find one scene you cut for being \"too slow.\" Ask yourself: did it help me care about someone? If yes, bring back a shorter version.",
    fit: {
      // questions for everyone
      form: "short", ideas: "history", routine: "rewrite", mood: "calm", hero: "endure", humor: "irony",
      bigq: "love", setting: "far", narrator: "hidden", sentences: "plain", audience: "unsaid",
      job: "witness", life: "war", describe: "nature", rules: "clear", when: "lived", began: "reporter",
      real: "real", ending: "tragic", words: "exact", seek: "mind", fame: "famous", cast: "few",
      effect: "moved", time: "line",
      // long version only
      opening: "place", enemy: "fate", length: "short", talk: "mostly", nature: "force", romance: "ruin",
      death: "violent", child: "memory", politics: "background", faith: "absent", home: "abroad",
      output: "steady", hook: "language", strongest: "action", build: "straight", title: "image",
      sign: "real", peak: "young", pace: "steady", self: "disguised", outlook: "dark", company: "circle",
      heard: "silent", money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      onepage: "iceberg", war: "retreat"
    }
  },

  {
    id: "tolstoy",
    name: "Leo Tolstoy",
    years: "1828–1910",
    from: "Russia",
    focus: "world",
    approach: "planner",
    tagline: "Happy families are all alike; every unhappy family is unhappy in its own way.",
    taglineFrom: "Anna Karenina",
    style: "Like Tolstoy, you see the big picture: families, cities, wars and history, with hundreds of lives crossing. You research and plan your world so it feels completely real.",
    trueStory: "For War and Peace, Tolstoy read letters and memoirs from 1812 and visited the Borodino battlefield to study the ground where the battle was fought.",
    about: "Tolstoy was born into a rich noble family on an estate called Yasnaya Polyana. As a young man he served as a soldier, including in the Crimean War, and later wrote some of the longest and most admired novels ever written. In his later life he gave up much of his wealth, lived simply and wrote about how people should live. His ideas about peaceful resistance later inspired Mahatma Gandhi.",
    works: ["War and Peace", "Anna Karenina", "The Death of Ivan Ilyich"],
    startWith: "The Death of Ivan Ilyich is short but powerful, and much easier to start than War and Peace.",
    superpower: "Huge, believable worlds full of real people.",
    watchOut: "Info-dumping. The reader doesn't need every fact you found.",
    exercise: "Describe a place using only what one character would notice in a hurry. Five sentences maximum.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "history", routine: "plan", mood: "calm", hero: "polite", humor: "serious",
      bigq: "meaning", setting: "far", narrator: "direct", sentences: "rolling", audience: "wake",
      job: "witness", life: "war", describe: "battles", rules: "mix", when: "before", began: "career",
      real: "real", ending: "tragic", words: "exact", seek: "spirit", fame: "famous", cast: "people",
      effect: "moral", time: "cycle",
      // long version only
      opening: "idea", enemy: "society", length: "giant", talk: "balanced", nature: "sacred", romance: "ruin",
      death: "center", child: "memory", politics: "direct", faith: "wrestle", home: "home", output: "steady",
      hook: "ideas", strongest: "thinkers", build: "straight", title: "idea", sign: "real", peak: "middle",
      pace: "steady", self: "disguised", outlook: "hopeful", company: "teacher", heard: "silent",
      money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      detour: "history", love: "station", war: "chaos"
    }
  },

  {
    id: "garcia-marquez",
    name: "Gabriel García Márquez",
    years: "1927–2014",
    from: "Colombia",
    focus: "world",
    approach: "explorer",
    tagline: "There is always something left to love.",
    taglineFrom: "One Hundred Years of Solitude",
    style: "Like García Márquez, you create places where the impossible happens and everyone treats it as normal. You discover your world as you write it, and it keeps getting richer and stranger.",
    trueStory: "The idea for One Hundred Years of Solitude struck him while driving his family to Acapulco in 1965. He turned the car around and wrote for about a year and a half.",
    about: "García Márquez spent his early childhood with his grandparents in the small town of Aracataca. His grandmother told the most fantastic stories with a completely straight face, and he later said that was the tone he wanted for his novels. He worked for years as a journalist. His style became known as magical realism, and he won the Nobel Prize in Literature in 1982.",
    works: ["One Hundred Years of Solitude", "Love in the Time of Cholera", "Chronicle of a Death Foretold"],
    startWith: "\"A Very Old Man with Enormous Wings,\" a short story with an angel in a chicken coop.",
    superpower: "Imagination and atmosphere. Your settings feel alive and unforgettable.",
    watchOut: "Getting lost: wonderful places where nothing happens.",
    exercise: "Write a scene where something impossible happens and every character treats it as completely normal.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "family", routine: "burst", mood: "fleeting", hero: "endure", humor: "comic",
      bigq: "fate", setting: "remote", narrator: "bard", sentences: "rolling", audience: "unsaid",
      job: "memory", life: "books", describe: "people", rules: "break", when: "before", began: "reporter",
      real: "strange", ending: "tragic", words: "music", seek: "beauty", fame: "famous", cast: "people",
      effect: "moved", time: "cycle",
      // long version only
      opening: "action", enemy: "fate", length: "book", talk: "little", nature: "force", romance: "center",
      death: "light", child: "memory", politics: "hidden", faith: "absent", home: "abroad", output: "steady",
      hook: "language", strongest: "women", build: "layers", title: "image", sign: "real", peak: "middle",
      pace: "steady", self: "disguised", outlook: "bittersweet", company: "public", heard: "silent",
      money: "hardly", creature: "monsters",
      // branch questions this writer belongs to
      detour: "plague", love: "waiting", war: "uprisings"
    }
  },

  {
    id: "hugo",
    name: "Victor Hugo",
    years: "1802–1885",
    from: "France",
    focus: "world",
    approach: "reviser",
    tagline: "To love or have loved, that is enough.",
    taglineFrom: "Les Misérables",
    style: "Like Hugo, you care about places and the people history forgets: a cathedral, a city's streets, the poor and the outcast. Your world gets deeper with every draft.",
    trueStory: "Hugo started Les Misérables in the 1840s, put it aside for years, and finished it in exile on the island of Guernsey. It was published in 1862.",
    about: "Hugo was a poet, playwright, novelist and politician. He spoke out against Napoleon III, who had seized power, and lived in exile on the islands of Jersey and Guernsey for almost 20 years. He wrote The Hunchback of Notre-Dame partly to make people care about saving old Gothic buildings. When he died, about two million people are said to have joined his funeral procession in Paris.",
    works: ["Les Misérables", "The Hunchback of Notre-Dame", "The Contemplations (poems)"],
    startWith: "An abridged Les Misérables, or watch the musical first and then read the parts you loved.",
    superpower: "Depth and big themes. Your worlds feel like they existed long before page one.",
    watchOut: "Long detours. Readers may skip your brilliant 50 pages about the sewers.",
    exercise: "Pick one building in your story and write its history in 100 words. Then use only one detail of that history in the story.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "history", routine: "rewrite", mood: "stormy", hero: "outsider", humor: "serious",
      bigq: "power", setting: "city", narrator: "direct", sentences: "rolling", audience: "crowd",
      job: "memory", life: "wander", describe: "battles", rules: "mix", when: "before", began: "poet",
      real: "real", ending: "tragic", words: "music", seek: "society", fame: "banned", cast: "crowd",
      effect: "moved", time: "line",
      // long version only
      opening: "place", enemy: "society", length: "giant", talk: "balanced", nature: "force", romance: "ideal",
      death: "violent", child: "hero", politics: "direct", faith: "devout", home: "abroad", output: "flood",
      hook: "thrills", strongest: "ordinary", build: "layers", title: "idea", sign: "real", peak: "lifelong",
      pace: "steady", self: "researched", outlook: "hopeful", company: "public", heard: "both",
      money: "poverty", creature: "monsters",
      // branch questions this writer belongs to
      detour: "city", trouble: "exile", war: "field"
    }
  },

  {
    id: "lu-xun",
    name: "Lu Xun",
    years: "1881–1936",
    from: "China",
    focus: "voice",
    approach: "planner",
    tagline: "When many people pass one way, a road is made.",
    taglineFrom: "My Old Home",
    style: "Like Lu Xun, you write with a clear aim, and you choose your words to hit hard. Your style is sharp, plain and often ironic, and it makes people think.",
    trueStory: "Lu Xun's \"A Madman's Diary\" (1918) was one of the first major stories written in everyday spoken Chinese instead of formal classical Chinese.",
    about: "Lu Xun was the pen name of Zhou Shuren. He went to Japan to study medicine, but decided that his country needed its thinking healed more than its bodies, so he turned to writing. He is often called the father of modern Chinese literature. His stories and essays criticize old habits and injustice with dark humor, and many are still taught in schools.",
    works: ["A Madman's Diary", "The True Story of Ah Q", "Kong Yiji", "My Old Home"],
    startWith: "\"Kong Yiji\" or \"My Old Home,\" both short and moving.",
    superpower: "Clarity and impact. Your best lines stick in people's heads.",
    watchOut: "Writing that's so controlled it starts to feel stiff.",
    exercise: "Write one page as fast as you can without rereading. Then find the one wild sentence worth keeping.",
    fit: {
      // questions for everyone
      form: "short", ideas: "remake", routine: "stolen", mood: "fever", hero: "outsider", humor: "bitter",
      bigq: "fate", setting: "remote", narrator: "inside", sentences: "plain", audience: "wake", job: "shake",
      life: "lostmoney", describe: "thoughts", rules: "break", when: "now", began: "career", real: "real",
      ending: "tragic", words: "exact", seek: "society", fame: "banned", cast: "few", effect: "moral",
      time: "memory",
      // long version only
      opening: "voice", enemy: "society", length: "short", talk: "balanced", nature: "backdrop", romance: "side",
      death: "quiet", child: "memory", politics: "direct", faith: "mock", home: "capital", output: "steady",
      hook: "ideas", strongest: "ordinary", build: "pieces", title: "name", sign: "pen", peak: "middle",
      pace: "steady", self: "disguised", outlook: "dark", company: "public", heard: "silent",
      money: "poverty", creature: "humans",
      // branch questions this writer belongs to
      onepage: "fool", trouble: "pennames"
    }
  },

  {
    id: "nietzsche",
    name: "Friedrich Nietzsche",
    years: "1844–1900",
    from: "Germany",
    focus: "voice",
    approach: "explorer",
    tagline: "Without music, life would be a mistake.",
    taglineFrom: "Twilight of the Idols",
    style: "Like Nietzsche, you write in a voice nobody could mistake: daring, poetic and full of energy. Your best thoughts arrive suddenly, and you catch them before they're gone.",
    trueStory: "Nietzsche walked for hours a day in the Swiss Alps and jotted ideas in notebooks along the way. He said he wrote the first part of Thus Spoke Zarathustra in about ten days.",
    about: "Nietzsche was a philosopher, not a novelist, but he wrote like a poet. He became a university professor in Basel at just 24, then left because of poor health and spent years traveling between Switzerland and Italy. He often wrote in short, punchy aphorisms. His ideas about values, power and creating your own meaning are still argued about today and are often misunderstood.",
    works: ["Thus Spoke Zarathustra", "The Gay Science", "Beyond Good and Evil"],
    startWith: "A few short aphorisms from The Gay Science. His philosophy is best for older teens.",
    superpower: "A powerful, original voice. Readers feel you talking straight to them.",
    watchOut: "Voice can carry you right past structure. Readers still need a path.",
    exercise: "Read your piece out loud. Mark every spot where your own attention drifted. That's where the story needs a push.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "remake", routine: "burst", mood: "fever", hero: "rebel", humor: "bitter",
      bigq: "meaning", setting: "remote", narrator: "bard", sentences: "intense", audience: "circle",
      job: "shake", life: "wander", describe: "thoughts", rules: "break", when: "legend", began: "words",
      real: "invented", ending: "open", words: "music", seek: "mind", fame: "hidden", cast: "one",
      effect: "moral", time: "cycle",
      // long version only
      opening: "idea", enemy: "society", length: "tiny", talk: "none", nature: "sacred", romance: "side",
      death: "quiet", child: "none", politics: "background", faith: "mock", home: "road", output: "steady",
      hook: "ideas", strongest: "thinkers", build: "pieces", title: "idea", sign: "real", peak: "middle",
      pace: "fast", self: "disguised", outlook: "playful", company: "loner", heard: "silent", money: "hardly",
      creature: "talking",
      // branch questions this writer belongs to
      onepage: "sayings", trouble: "ignored"
    }
  },

  {
    id: "du-fu",
    name: "Du Fu",
    years: "712–770",
    from: "China",
    focus: "voice",
    approach: "reviser",
    tagline: "The nation is shattered; mountains and rivers remain.",
    taglineFrom: "Spring View",
    style: "Like Du Fu, you'll trade ten words for the perfect one. You work inside strict rules of rhythm and sound, and you polish until every line carries its full weight.",
    trueStory: "Du Fu wrote that he would not rest, even in death, until his lines could startle readers.",
    about: "Du Fu lived during the Tang dynasty, often called the golden age of Chinese poetry. He failed the imperial exams, lived through the An Lushan Rebellion, and spent years as a refugee in poverty. He wrote about war, hunger and ordinary people's suffering so truthfully that he is called the \"Poet-Historian\" and the \"Poet-Sage.\" His friendship with the poet Li Bai is famous too.",
    works: ["Spring View", "Ballad of the Army Carts", "My Thatched Hut Is Torn by the Autumn Wind"],
    startWith: "\"Spring View,\" just eight lines about a country at war.",
    superpower: "Precise word choice and deep feeling in very few words.",
    watchOut: "Polishing one line for an hour while the rest of the piece waits.",
    exercise: "Set a 20-minute timer: draft only, no fixing. Polish only after the whole piece exists.",
    fit: {
      // questions for everyone
      form: "short", ideas: "hardship", routine: "stolen", mood: "fleeting", hero: "endure", humor: "serious",
      bigq: "power", setting: "far", narrator: "bard", sentences: "plain", audience: "unsaid", job: "witness",
      life: "wander", describe: "nature", rules: "strict", when: "lived", began: "poet", real: "real",
      ending: "tragic", words: "exact", seek: "society", fame: "hidden", cast: "one", effect: "moved",
      time: "moment",
      // long version only
      opening: "place", enemy: "society", length: "tiny", talk: "none", nature: "mirror", romance: "side",
      death: "center", child: "none", politics: "direct", faith: "absent", home: "road", output: "steady",
      hook: "language", strongest: "ordinary", build: "pieces", title: "place", sign: "real", peak: "late",
      pace: "still", self: "auto", outlook: "bittersweet", company: "circle", heard: "silent",
      money: "poverty", creature: "observed",
      // branch questions this writer belongs to
      onepage: "eight", trouble: "demoted", war: "village"
    }
  },

  {
    id: "homer",
    name: "Homer",
    years: "c. 8th century BC",
    from: "Greece",
    focus: "world",
    approach: "planner",
    tagline: "Sing, goddess, the anger of Peleus' son Achilleus.",
    taglineFrom: "The Iliad",
    style: "Like Homer, you think on a grand scale: heroes, gods, long journeys and the pull of home. You build your story from strong patterns that a listener can follow by ear.",
    trueStory: "The Iliad and the Odyssey were made to be performed aloud. They are built from repeated phrases, like \"rosy-fingered dawn\", that helped a singer keep the rhythm.",
    about: "Almost nothing certain is known about Homer. Tradition describes a blind poet, and scholars still argue about whether one person or many singers shaped the poems. Either way, the two epics became the starting point of Western storytelling.",
    works: ["The Iliad", "The Odyssey"],
    startWith: "The Cyclops episode in the Odyssey (Book 9), in a modern translation.",
    superpower: "Scale and momentum. Your stories feel like legends.",
    watchOut: "Heroes so grand that readers can't see themselves in them.",
    exercise: "Give your hero one ordinary weakness, like homesickness or a bad temper, and let it cause a problem in the next scene.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "history", routine: "plan", mood: "stormy", hero: "endure", humor: "serious",
      bigq: "fate", setting: "far", narrator: "bard", sentences: "rolling", audience: "crowd", job: "memory",
      life: "wander", describe: "battles", rules: "strict", when: "legend", began: "poet", real: "invented",
      ending: "tragic", words: "music", seek: "spirit", fame: "handed", cast: "people", effect: "moved",
      time: "line",
      // long version only
      opening: "action", enemy: "fate", length: "giant", talk: "balanced", nature: "force", romance: "side",
      death: "violent", child: "none", politics: "background", faith: "devout", home: "road", output: "one",
      hook: "thrills", strongest: "action", build: "episodes", title: "name", sign: "tradition",
      peak: "lifelong", pace: "fast", self: "invented", outlook: "bittersweet", company: "teacher",
      heard: "performed", money: "hardly", creature: "monsters",
      // branch questions this writer belongs to
      song: "heroes", versestory: "voyage"
    }
  },

  {
    id: "sappho",
    name: "Sappho",
    years: "c. 630–c. 570 BC",
    from: "Greece",
    focus: "heart",
    approach: "explorer",
    tagline: "Someone will remember us, I say, even in another time.",
    taglineFrom: "Fragment 147",
    style: "Like Sappho, you write short and close. One moment of love, jealousy or longing is enough for a whole poem, and you say it so directly that it still feels fresh.",
    trueStory: "Most of Sappho's poems are lost. What survives is mostly fragments, some of them recovered from scraps of papyrus found in Egypt.",
    about: "Sappho lived on the island of Lesbos and wrote songs to be performed with a lyre. Ancient readers admired her so much that she was called \"the Tenth Muse\". A verse form, the Sapphic stanza, is named after her.",
    works: ["Ode to Aphrodite", "Fragment 31", "The Tithonus poem"],
    startWith: "Fragment 31, a few lines about what love does to the body.",
    superpower: "Emotional precision in very few words.",
    watchOut: "A feeling with no scene around it can float away.",
    exercise: "Describe a strong feeling using only what it does to your body: hands, voice, heartbeat. Six lines maximum.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "burst", mood: "fever", hero: "polite", humor: "serious",
      bigq: "love", setting: "remote", narrator: "bard", sentences: "intense", audience: "circle",
      job: "memory", life: "wander", describe: "people", rules: "strict", when: "now", began: "poet",
      real: "real", ending: "open", words: "music", seek: "beauty", fame: "famous", cast: "few",
      effect: "moved", time: "moment",
      // long version only
      opening: "voice", enemy: "self", length: "tiny", talk: "none", nature: "mirror", romance: "center",
      death: "quiet", child: "none", politics: "none", faith: "devout", home: "home", output: "few",
      hook: "language", strongest: "women", build: "pieces", title: "image", sign: "real", peak: "lifelong",
      pace: "still", self: "auto", outlook: "bittersweet", company: "teacher", heard: "performed",
      money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      song: "lyre"
    }
  },

  {
    id: "dante",
    name: "Dante Alighieri",
    years: "1265–1321",
    from: "Italy",
    focus: "world",
    approach: "planner",
    tagline: "Midway upon the journey of our life I found myself within a forest dark.",
    taglineFrom: "Inferno",
    style: "Like Dante, you design before you write. Your world has levels, rules and a place for everyone, and you put yourself inside it as the traveler.",
    trueStory: "Dante was banished from Florence in 1302 and never went home. He wrote the Divine Comedy in exile and placed several of his real enemies in Hell.",
    about: "Dante was a poet and politician in Florence. He chose to write his great poem in the Italian people spoke, not in Latin, which helped shape the Italian language. The Comedy has 100 cantos and follows a journey through Hell, Purgatory and Paradise.",
    works: ["The Divine Comedy", "Inferno", "La Vita Nuova"],
    startWith: "Inferno, Canto 1, where he is lost in a dark wood.",
    superpower: "Structure and vision. Every part of your world means something.",
    watchOut: "Using your story to settle scores.",
    exercise: "Draw a map of your story's world with at least three zones. Write one rule that is different in each zone.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "hardship", routine: "plan", mood: "stormy", hero: "outsider", humor: "bitter",
      bigq: "meaning", setting: "far", narrator: "bard", sentences: "intense", audience: "wake", job: "shake",
      life: "wander", describe: "people", rules: "strict", when: "lived", began: "poet", real: "invented",
      ending: "happy", words: "speech", seek: "spirit", fame: "banned", cast: "crowd", effect: "moral",
      time: "line",
      // long version only
      opening: "voice", enemy: "self", length: "giant", talk: "balanced", nature: "backdrop", romance: "ideal",
      death: "center", child: "none", politics: "direct", faith: "devout", home: "abroad", output: "one",
      hook: "ideas", strongest: "thinkers", build: "episodes", title: "idea", sign: "real", peak: "late",
      pace: "steady", self: "auto", outlook: "hopeful", company: "loner", heard: "aloud", money: "mocked",
      creature: "monsters",
      // branch questions this writer belongs to
      versestory: "afterlife", exile: "banished"
    }
  },

  {
    id: "cervantes",
    name: "Miguel de Cervantes",
    years: "1547–1616",
    from: "Spain",
    focus: "heart",
    approach: "explorer",
    tagline: "He who reads much and walks much, sees much and knows much.",
    taglineFrom: "Don Quixote",
    style: "Like Cervantes, you pair characters who see the world in opposite ways and let them talk. Your comedy is kind: the fool is also the bravest person in the book.",
    trueStory: "Cervantes was wounded at the Battle of Lepanto in 1571 and lost the use of his left hand. Later he was captured by pirates and held in Algiers for five years.",
    about: "Cervantes was a soldier, a tax collector and more than once a prisoner before he found success late in life. Don Quixote, about a man who reads so many adventure books that he sets out as a knight, is often called the first modern novel.",
    works: ["Don Quixote", "Exemplary Novels"],
    startWith: "The windmill chapter of Don Quixote (Part 1, Chapter 8).",
    superpower: "Warm comedy and unforgettable pairs of characters.",
    watchOut: "Episodes that pile up without moving the story forward.",
    exercise: "Write a conversation between a dreamer and a realist looking at the same ordinary object. Let each be right about something.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "remake", routine: "stolen", mood: "fleeting", hero: "outsider", humor: "comic",
      bigq: "meaning", setting: "far", narrator: "direct", sentences: "rolling", audience: "crowd",
      job: "entertain", life: "war", describe: "people", rules: "break", when: "now", began: "career",
      real: "real", ending: "tragic", words: "speech", seek: "mind", fame: "famous", cast: "few",
      effect: "laugh", time: "line",
      // long version only
      opening: "place", enemy: "self", length: "giant", talk: "mostly", nature: "backdrop", romance: "ideal",
      death: "quiet", child: "none", politics: "hidden", faith: "absent", home: "road", output: "one",
      hook: "laughter", strongest: "thinkers", build: "episodes", title: "name", sign: "real", peak: "late",
      pace: "steady", self: "disguised", outlook: "bittersweet", company: "loner", heard: "aloud",
      money: "poverty", creature: "humans",
      // branch questions this writer belongs to
      adventure: "knight"
    }
  },

  {
    id: "li-bai",
    name: "Li Bai",
    years: "701–762",
    from: "China",
    focus: "voice",
    approach: "explorer",
    tagline: "I raise my cup to invite the bright moon.",
    taglineFrom: "Drinking Alone by Moonlight",
    style: "Like Li Bai, you write freely and fast. Mountains, the moon, wine and friends turn into images nobody else would think of, and you don't mind breaking a rule to get there.",
    trueStory: "About a thousand of Li Bai's poems survive. A famous legend, which is probably not true, says he drowned reaching from a boat for the moon's reflection.",
    about: "Li Bai lived in the Tang dynasty and spent most of his life wandering China. He served briefly at the emperor's court and was friends with Du Fu, who wrote poems about him. He is called the \"Immortal Poet\".",
    works: ["Drinking Alone by Moonlight", "Quiet Night Thought", "Hard Road to Shu"],
    startWith: "\"Quiet Night Thought\", four lines about moonlight and home.",
    superpower: "Imagination and ease. Your writing never feels forced.",
    watchOut: "Charm without a point. A beautiful line still needs somewhere to go.",
    exercise: "Write eight lines about being alone outdoors at night. Invite something that isn't a person to keep you company.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "burst", mood: "fleeting", hero: "rebel", humor: "comic",
      bigq: "meaning", setting: "remote", narrator: "bard", sentences: "rolling", audience: "circle",
      job: "entertain", life: "wander", describe: "nature", rules: "break", when: "legend", began: "poet",
      real: "strange", ending: "tragic", words: "exact", seek: "society", fame: "banned", cast: "one",
      effect: "moral", time: "cycle",
      // long version only
      opening: "voice", enemy: "fate", length: "tiny", talk: "none", nature: "sacred", romance: "side",
      death: "light", child: "none", politics: "none", faith: "devout", home: "road", output: "flood",
      hook: "language", strongest: "thinkers", build: "pieces", title: "image", sign: "real", peak: "middle",
      pace: "fast", self: "auto", outlook: "playful", company: "circle", heard: "both", money: "hardly",
      creature: "observed",
      // branch questions this writer belongs to
      song: "moon"
    }
  },

  {
    id: "basho",
    name: "Matsuo Bashō",
    years: "1644–1694",
    from: "Japan",
    focus: "voice",
    approach: "reviser",
    tagline: "Every day is a journey, and the journey itself is home.",
    taglineFrom: "The Narrow Road to the Deep North",
    style: "Like Bashō, you notice. A frog, a crow, a summer field: you set one clear image down in a few words and trust the reader to feel the rest.",
    trueStory: "In 1689 Bashō set out on foot through northern Japan, a journey of roughly 2,400 kilometers. It became The Narrow Road to the Deep North, which he kept revising for years.",
    about: "Bashō was a teacher of poetry in Edo (now Tokyo) who took his pen name from a banana plant by his hut. He turned the short hokku, now called haiku, into a serious art, and he mixed travel diary and poems in a form called haibun.",
    works: ["The Narrow Road to the Deep North", "The Old Pond (frog haiku)"],
    startWith: "The frog haiku, then the opening page of The Narrow Road to the Deep North.",
    superpower: "Attention. You can make three lines feel complete.",
    watchOut: "So little on the page that the reader has nothing to hold.",
    exercise: "Go outside for ten minutes. Write three lines about one thing you saw, with no feelings named.",
    fit: {
      // questions for everyone
      form: "short", ideas: "remake", routine: "rewrite", mood: "fleeting", hero: "endure", humor: "irony",
      bigq: "meaning", setting: "far", narrator: "bard", sentences: "plain", audience: "circle",
      job: "memory", life: "books", describe: "nature", rules: "strict", when: "now", began: "poet",
      real: "real", ending: "open", words: "exact", seek: "spirit", fame: "famous", cast: "one",
      effect: "moved", time: "moment",
      // long version only
      opening: "place", enemy: "fate", length: "tiny", talk: "none", nature: "sacred", romance: "side",
      death: "quiet", child: "none", politics: "none", faith: "devout", home: "road", output: "few",
      hook: "language", strongest: "ordinary", build: "episodes", title: "place", sign: "pen", peak: "late",
      pace: "still", self: "auto", outlook: "bittersweet", company: "teacher", heard: "aloud",
      money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      poem: "haiku"
    }
  },

  {
    id: "rumi",
    name: "Rumi",
    years: "1207–1273",
    from: "Persia (lived in Konya, now in Turkey)",
    focus: "heart",
    approach: "explorer",
    tagline: "Listen to the reed, how it tells a tale of separations.",
    taglineFrom: "The Masnavi",
    style: "Like Rumi, you write out of longing. Your images spin from the everyday to the infinite, and you teach by telling stories rather than by explaining.",
    trueStory: "Rumi's life changed in 1244 when he met a wandering mystic, Shams of Tabriz. After Shams disappeared, Rumi poured out thousands of verses.",
    about: "Rumi was a religious scholar and teacher whose family fled westward when he was a child. His Masnavi runs to about 25,000 couplets, much of it dictated to a student. His followers founded the order known for its whirling dance.",
    works: ["The Masnavi", "Divan-e Shams-e Tabrizi"],
    startWith: "A short selection from the Masnavi, such as \"The Song of the Reed\".",
    superpower: "Passion and striking images.",
    watchOut: "Intensity all the time. Readers need a quiet line now and then.",
    exercise: "Write about missing someone as if you were an object that was taken from its home: a reed cut from the riverbank, a key far from its door.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "burst", mood: "fever", hero: "rebel", humor: "comic",
      bigq: "love", setting: "remote", narrator: "bard", sentences: "intense", audience: "circle",
      job: "shake", life: "wander", describe: "thoughts", rules: "mix", when: "now", began: "career",
      real: "strange", ending: "happy", words: "music", seek: "spirit", fame: "famous", cast: "one",
      effect: "moved", time: "moment",
      // long version only
      opening: "voice", enemy: "self", length: "giant", talk: "none", nature: "sacred", romance: "ideal",
      death: "light", child: "none", politics: "none", faith: "devout", home: "abroad", output: "flood",
      hook: "ideas", strongest: "thinkers", build: "layers", title: "image", sign: "real", peak: "late",
      pace: "fast", self: "disguised", outlook: "hopeful", company: "teacher", heard: "performed",
      money: "mocked", creature: "talking",
      // branch questions this writer belongs to
      song: "reed"
    }
  },

  {
    id: "nguyen-du",
    name: "Nguyễn Du",
    years: "1766–1820",
    from: "Vietnam",
    focus: "heart",
    approach: "planner",
    tagline: "In this life span on earth, talent and destiny are apt to feud.",
    taglineFrom: "The Tale of Kiều",
    style: "Like Nguyễn Du, you take a story people already know and make it deeper. You care about talented people crushed by bad luck, and you write their feelings with music and compassion.",
    trueStory: "The Tale of Kiều is 3,254 lines of lục bát verse, retold from a Chinese novel. Many Vietnamese people can recite passages by heart.",
    about: "Nguyễn Du was born into a family of high officials who served the Lê dynasty. When that dynasty fell he lived through years of hardship before serving the new Nguyễn court, which sent him as an envoy to China in 1813.",
    works: ["The Tale of Kiều (Truyện Kiều)", "Call to Wandering Souls (Văn tế thập loại chúng sinh)"],
    startWith: "The opening of The Tale of Kiều, up to Kiều's first meeting with Kim Trọng.",
    superpower: "Compassion and musical language.",
    watchOut: "Fate doing all the work. Let your characters choose, too.",
    exercise: "Retell a story you know well in ten lines, from the point of view of the character who suffers most.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "remake", routine: "plan", mood: "fleeting", hero: "endure", humor: "serious",
      bigq: "fate", setting: "far", narrator: "bard", sentences: "rolling", audience: "crowd", job: "witness",
      life: "lostmoney", describe: "thoughts", rules: "strict", when: "before", began: "career", real: "real",
      ending: "happy", words: "music", seek: "society", fame: "handed", cast: "few", effect: "moved",
      time: "line",
      // long version only
      opening: "idea", enemy: "fate", length: "book", talk: "balanced", nature: "mirror", romance: "center",
      death: "quiet", child: "none", politics: "hidden", faith: "wrestle", home: "road", output: "one",
      hook: "language", strongest: "women", build: "straight", title: "name", sign: "real", peak: "late",
      pace: "steady", self: "disguised", outlook: "bittersweet", company: "loner", heard: "both",
      money: "plot", creature: "humans",
      // branch questions this writer belongs to
      versestory: "sacrifice"
    }
  },

  {
    id: "cao-xueqin",
    name: "Cao Xueqin",
    years: "c. 1715–c. 1763",
    from: "China",
    focus: "heart",
    approach: "reviser",
    tagline: "Truth becomes fiction when the fiction's true.",
    taglineFrom: "Dream of the Red Chamber",
    style: "Like Cao Xueqin, you write about a family and a house you can still see clearly. Dozens of characters, their meals, poems and quarrels, all come back as you revise.",
    trueStory: "Cao's family was rich and close to the emperor until its property was seized when he was a child. He wrote his novel in poverty, and it passed around in handwritten copies before it was printed in 1791, after his death.",
    about: "Dream of the Red Chamber follows the slow decline of a great household through the eyes of its young people. It is counted among the four great classical novels of China, and Cao is said to have worked on it for ten years.",
    works: ["Dream of the Red Chamber (The Story of the Stone)"],
    startWith: "The first five chapters, in David Hawkes's translation, The Story of the Stone.",
    superpower: "A huge cast in which every person feels real.",
    watchOut: "So many characters that a new reader gets lost.",
    exercise: "Describe a family meal with at least six people. Give each one a single line of speech that shows who they are.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "family", routine: "rewrite", mood: "fleeting", hero: "outsider", humor: "irony",
      bigq: "fate", setting: "court", narrator: "bard", sentences: "rolling", audience: "circle",
      job: "memory", life: "lostmoney", describe: "people", rules: "mix", when: "lived", began: "poet",
      real: "strange", ending: "tragic", words: "speech", seek: "beauty", fame: "handed", cast: "crowd",
      effect: "moved", time: "cycle",
      // long version only
      opening: "voice", enemy: "fate", length: "giant", talk: "balanced", nature: "mirror", romance: "center",
      death: "quiet", child: "hero", politics: "hidden", faith: "wrestle", home: "capital", output: "one",
      hook: "language", strongest: "women", build: "layers", title: "image", sign: "anon", peak: "middle",
      pace: "slow", self: "disguised", outlook: "bittersweet", company: "circle", heard: "silent",
      money: "plot", creature: "monsters",
      // branch questions this writer belongs to
      detour: "poetryclub", love: "cousins"
    }
  },

  {
    id: "goethe",
    name: "Johann Wolfgang von Goethe",
    years: "1749–1832",
    from: "Germany",
    focus: "spark",
    approach: "reviser",
    tagline: "Two souls, alas, dwell in my breast.",
    taglineFrom: "Faust",
    style: "Like Goethe, you can't stay in one form. Poems, plays, novels, science: each feeds the others, and your biggest project grows with you over the years.",
    trueStory: "Goethe worked on Faust, on and off, for about sixty years. He finished Part Two only months before he died.",
    about: "Goethe became famous across Europe in his twenties with The Sorrows of Young Werther. He spent most of his life in Weimar, where he was also a government minister and a scientist who studied plants and color.",
    works: ["Faust", "The Sorrows of Young Werther", "The Erlking"],
    startWith: "\"The Erlking\", a short, frightening poem about a night ride.",
    superpower: "Range. You can bring ideas from one field into another.",
    watchOut: "Starting ten things and finishing none.",
    exercise: "Take one idea and write it three ways: as a four-line poem, as a short dialogue and as a diary entry.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "remake", routine: "rewrite", mood: "stormy", hero: "rebel", humor: "irony",
      bigq: "meaning", setting: "court", narrator: "hidden", sentences: "intense", audience: "crowd",
      job: "shake", life: "books", describe: "nature", rules: "mix", when: "legend", began: "poet",
      real: "strange", ending: "happy", words: "music", seek: "beauty", fame: "famous", cast: "few",
      effect: "moral", time: "cycle",
      // long version only
      opening: "voice", enemy: "self", length: "book", talk: "balanced", nature: "sacred", romance: "ruin",
      death: "quiet", child: "none", politics: "background", faith: "wrestle", home: "home", output: "flood",
      hook: "ideas", strongest: "thinkers", build: "layers", title: "name", sign: "real", peak: "lifelong",
      pace: "steady", self: "disguised", outlook: "hopeful", company: "public", heard: "both",
      money: "hardly", creature: "monsters",
      // branch questions this writer belongs to
      versestory: "bargain"
    }
  },

  {
    id: "voltaire",
    name: "Voltaire",
    years: "1694–1778",
    from: "France",
    focus: "voice",
    approach: "explorer",
    tagline: "We must cultivate our garden.",
    taglineFrom: "Candide",
    style: "Like Voltaire, you are quick, clear and funny on purpose. You take a comfortable belief, push it through a string of disasters and let the reader see it fall apart.",
    trueStory: "As a young man Voltaire spent eleven months in the Bastille prison for his writing. Candide (1759) came out without his name, was banned, and sold anyway.",
    about: "Voltaire was the pen name of François-Marie Arouet. He wrote plays, histories, tales and thousands of letters, lived for years away from Paris to stay out of trouble, and argued for tolerance and free speech.",
    works: ["Candide", "Zadig", "Letters on the English"],
    startWith: "Candide. It is short, fast and still funny.",
    superpower: "Wit and clarity. Nobody is bored by your arguments.",
    watchOut: "Characters who are only there to prove a point.",
    exercise: "Pick a saying people repeat without thinking. Write a one-page story in which someone follows it exactly, and it goes wrong.",
    fit: {
      // questions for everyone
      form: "short", ideas: "remake", routine: "burst", mood: "fever", hero: "outsider", humor: "bitter",
      bigq: "power", setting: "far", narrator: "direct", sentences: "witty", audience: "wake", job: "shake",
      life: "wander", describe: "thoughts", rules: "clear", when: "now", began: "poet", real: "real",
      ending: "open", words: "exact", seek: "society", fame: "famous", cast: "few", effect: "laugh",
      time: "line",
      // long version only
      opening: "place", enemy: "society", length: "short", talk: "balanced", nature: "force", romance: "side",
      death: "light", child: "none", politics: "direct", faith: "mock", home: "abroad", output: "flood",
      hook: "laughter", strongest: "thinkers", build: "episodes", title: "name", sign: "pen", peak: "late",
      pace: "fast", self: "invented", outlook: "playful", company: "public", heard: "silent", money: "mocked",
      creature: "humans",
      // branch questions this writer belongs to
      warning: "optimist", exile: "bastille"
    }
  },

  {
    id: "moliere",
    name: "Molière",
    years: "1622–1673",
    from: "France",
    focus: "spark",
    approach: "planner",
    tagline: "One should eat to live, not live to eat.",
    taglineFrom: "The Miser",
    style: "Like Molière, you build comedy around one person's obsession: the miser, the hypocrite, the man sure he is ill. You know exactly when the audience will laugh, because you have stood on the stage.",
    trueStory: "Molière's first theater company went bankrupt and he was briefly jailed for debt. Years later his play Tartuffe was banned, and it took him about five years to get it back on stage.",
    about: "Molière was the stage name of Jean-Baptiste Poquelin, who gave up his family's upholstery business for the theater. He toured the provinces for more than a decade, then became the king's favorite playwright. He acted the lead in his own plays until the end.",
    works: ["Tartuffe", "The Misanthrope", "The Miser", "The Imaginary Invalid"],
    startWith: "The Miser, especially the scene where he loses his money box.",
    superpower: "Timing and comic characters.",
    watchOut: "Making fun of someone without understanding them.",
    exercise: "Invent a character with one obsession. Write a scene in which three different people try, and fail, to talk them out of it.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "family", routine: "stolen", mood: "calm", hero: "polite", humor: "comic",
      bigq: "power", setting: "court", narrator: "hidden", sentences: "witty", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "people", rules: "strict", when: "legend",
      began: "reporter", real: "real", ending: "happy", words: "music", seek: "beauty", fame: "hidden",
      cast: "few", effect: "laugh", time: "moment",
      // long version only
      opening: "action", enemy: "person", length: "short", talk: "mostly", nature: "backdrop", romance: "side",
      death: "light", child: "none", politics: "hidden", faith: "mock", home: "road", output: "steady",
      hook: "laughter", strongest: "ordinary", build: "straight", title: "idea", sign: "pen", peak: "middle",
      pace: "fast", self: "disguised", outlook: "playful", company: "circle", heard: "performed",
      money: "mocked", creature: "humans",
      // branch questions this writer belongs to
      stage: "hypocrite"
    }
  },

  {
    id: "mary-shelley",
    name: "Mary Shelley",
    years: "1797–1851",
    from: "England",
    focus: "world",
    approach: "reviser",
    tagline: "Beware; for I am fearless, and therefore powerful.",
    taglineFrom: "Frankenstein",
    style: "Like Mary Shelley, you start from one bold idea and take its consequences seriously. Your monsters have feelings, and your real question is who is responsible.",
    trueStory: "Frankenstein began in 1816 as her entry in a ghost-story contest among friends at Lake Geneva. She was 18. It was published two years later without her name.",
    about: "Mary Shelley was the daughter of two famous thinkers, Mary Wollstonecraft and William Godwin. Frankenstein is often called one of the first science fiction novels. She kept writing all her life, including The Last Man, about the end of humanity.",
    works: ["Frankenstein", "The Last Man"],
    startWith: "Frankenstein, especially the creature's own story in the middle of the book.",
    superpower: "Big ideas with real feeling behind them.",
    watchOut: "Letting the idea crowd out the people.",
    exercise: "Invent something that doesn't exist yet. Write one page from the point of view of the invention.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "remake", routine: "rewrite", mood: "stormy", hero: "outsider", humor: "serious",
      bigq: "meaning", setting: "remote", narrator: "inside", sentences: "rolling", audience: "wake",
      job: "shake", life: "books", describe: "nature", rules: "break", when: "now", began: "words",
      real: "strange", ending: "tragic", words: "music", seek: "mind", fame: "hidden", cast: "few",
      effect: "chill", time: "memory",
      // long version only
      opening: "voice", enemy: "self", length: "book", talk: "little", nature: "force", romance: "side",
      death: "violent", child: "none", politics: "background", faith: "wrestle", home: "abroad",
      output: "one", hook: "ideas", strongest: "thinkers", build: "layers", title: "name", sign: "anon",
      peak: "young", pace: "steady", self: "invented", outlook: "dark", company: "circle", heard: "aloud",
      money: "hardly", creature: "monsters",
      // branch questions this writer belongs to
      strange: "creature"
    }
  },

  {
    id: "charlotte-bronte",
    name: "Charlotte Brontë",
    years: "1816–1855",
    from: "England",
    focus: "heart",
    approach: "explorer",
    tagline: "I am no bird; and no net ensnares me.",
    taglineFrom: "Jane Eyre",
    style: "Like Charlotte Brontë, you write in a strong first-person voice. Your heroine is poor and plain and refuses to be small, and she tells the reader exactly what she feels.",
    trueStory: "Charlotte published Jane Eyre in 1847 under the name Currer Bell. As children, she and her brother and sisters wrote tiny handmade books about imaginary kingdoms.",
    about: "Charlotte Brontë grew up in a parsonage on the Yorkshire moors and worked as a teacher and governess. Her sisters Emily and Anne were novelists too. Jane Eyre was an immediate success, and readers argued about who the mysterious author was.",
    works: ["Jane Eyre", "Villette", "Shirley"],
    startWith: "Jane Eyre. The first ten chapters, about her childhood, grip quickly.",
    superpower: "A voice readers trust and follow anywhere.",
    watchOut: "A narrator who is always right.",
    exercise: "Write a page in first person in which your narrator disagrees with someone more powerful, and says so.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "hardship", routine: "burst", mood: "stormy", hero: "outsider", humor: "serious",
      bigq: "love", setting: "remote", narrator: "direct", sentences: "intense", audience: "unsaid",
      job: "shake", life: "books", describe: "thoughts", rules: "break", when: "now", began: "poet",
      real: "strange", ending: "happy", words: "music", seek: "mind", fame: "hidden", cast: "few",
      effect: "moved", time: "line",
      // long version only
      opening: "voice", enemy: "society", length: "book", talk: "balanced", nature: "mirror", romance: "center",
      death: "quiet", child: "hero", politics: "background", faith: "wrestle", home: "home", output: "few",
      hook: "thrills", strongest: "women", build: "straight", title: "name", sign: "pen", peak: "middle",
      pace: "steady", self: "disguised", outlook: "hopeful", company: "circle", heard: "aloud", money: "plot",
      creature: "humans",
      // branch questions this writer belongs to
      mind: "governess", secret: "attic"
    }
  },

  {
    id: "poe",
    name: "Edgar Allan Poe",
    years: "1809–1849",
    from: "United States",
    focus: "voice",
    approach: "planner",
    tagline: "All that we see or seem is but a dream within a dream.",
    taglineFrom: "A Dream Within a Dream",
    style: "Like Poe, you plan the effect first and then build toward it. Rhythm, repetition and a narrator who can't be trusted all work together to unsettle the reader.",
    trueStory: "In his essay \"The Philosophy of Composition\", Poe claimed he built \"The Raven\" step by step, choosing the word \"Nevermore\" for its sound before writing the rest.",
    about: "Poe was orphaned young and raised by a foster family in Virginia. He worked as a magazine editor and critic and was short of money most of his life. He is often credited with inventing the detective story in 1841.",
    works: ["The Raven", "The Tell-Tale Heart", "The Fall of the House of Usher", "The Murders in the Rue Morgue"],
    startWith: "\"The Tell-Tale Heart\", only a few pages long.",
    superpower: "Control of mood. Your best lines stick in people's heads.",
    watchOut: "Writing so controlled it feels stiff.",
    exercise: "Write one page in which the narrator keeps insisting that everything is fine. Let the details say otherwise.",
    fit: {
      // questions for everyone
      form: "short", ideas: "hardship", routine: "plan", mood: "fever", hero: "rebel", humor: "serious",
      bigq: "fate", setting: "remote", narrator: "inside", sentences: "intense", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "thoughts", rules: "strict", when: "legend",
      began: "poet", real: "dream", ending: "twist", words: "music", seek: "beauty", fame: "famous",
      cast: "one", effect: "chill", time: "moment",
      // long version only
      opening: "voice", enemy: "self", length: "short", talk: "none", nature: "mirror", romance: "ruin",
      death: "center", child: "none", politics: "none", faith: "absent", home: "capital", output: "steady",
      hook: "thrills", strongest: "thinkers", build: "straight", title: "image", sign: "real", peak: "middle",
      pace: "fast", self: "invented", outlook: "dark", company: "loner", heard: "both", money: "hardly",
      creature: "monsters",
      // branch questions this writer belongs to
      strange: "heartbeat"
    }
  },

  {
    id: "dickinson",
    name: "Emily Dickinson",
    years: "1830–1886",
    from: "United States",
    focus: "voice",
    approach: "reviser",
    tagline: "Tell all the truth but tell it slant.",
    taglineFrom: "Poem 1263",
    style: "Like Dickinson, you compress. A few short lines, an unexpected word, a dash where others would explain, and a huge subject like death or hope fits in the palm of a hand.",
    trueStory: "Dickinson wrote nearly 1,800 poems, and only about ten were printed while she was alive. After she died, her sister found them, many sewn by hand into small booklets.",
    about: "Emily Dickinson lived almost all her life in her family's house in Amherst, Massachusetts, and in later years rarely left it. She kept up friendships through letters. Her odd punctuation and slanted rhymes were \"corrected\" by early editors and restored much later.",
    works: ["Because I could not stop for Death", "\"Hope\" is the thing with feathers", "I'm Nobody! Who are you?"],
    startWith: "\"I'm Nobody! Who are you?\", eight playful lines.",
    superpower: "Originality. Nobody else would choose your words.",
    watchOut: "Being so private that the reader can't get in.",
    exercise: "Write eight short lines about a big word (hope, time, fear) without using that word after the first line.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "stolen", mood: "calm", hero: "endure", humor: "irony",
      bigq: "fate", setting: "remote", narrator: "bard", sentences: "plain", audience: "unsaid", job: "shake",
      life: "books", describe: "thoughts", rules: "break", when: "now", began: "poet", real: "real",
      ending: "open", words: "exact", seek: "mind", fame: "hidden", cast: "one", effect: "moral",
      time: "moment",
      // long version only
      opening: "idea", enemy: "fate", length: "tiny", talk: "none", nature: "sacred", romance: "ideal",
      death: "center", child: "none", politics: "none", faith: "wrestle", home: "home", output: "flood",
      hook: "language", strongest: "thinkers", build: "pieces", title: "image", sign: "anon", peak: "middle",
      pace: "still", self: "disguised", outlook: "bittersweet", company: "loner", heard: "silent",
      money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      poem: "dashes"
    }
  },

  {
    id: "whitman",
    name: "Walt Whitman",
    years: "1819–1892",
    from: "United States",
    focus: "voice",
    approach: "reviser",
    tagline: "I am large, I contain multitudes.",
    taglineFrom: "Song of Myself",
    style: "Like Whitman, you write long, open lines and lists that keep going. You celebrate ordinary people and you say \"I\" in a way that means everybody.",
    trueStory: "Whitman published Leaves of Grass himself in 1855 with twelve poems, and set some of the type with his own hands. He kept revising and enlarging it for the rest of his life.",
    about: "Whitman worked as a printer, teacher and newspaperman in New York. During the American Civil War he volunteered in army hospitals. His free verse, without regular rhyme or meter, shocked many readers and changed poetry.",
    works: ["Leaves of Grass", "Song of Myself", "O Captain! My Captain!"],
    startWith: "\"O Captain! My Captain!\", then the first section of \"Song of Myself\".",
    superpower: "Generosity and energy.",
    watchOut: "Lists that go on after the point is made.",
    exercise: "Write a poem that is one long list of people you saw today. Give each one a single line and a single action.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "rewrite", mood: "stormy", hero: "rebel", humor: "serious",
      bigq: "meaning", setting: "city", narrator: "bard", sentences: "rolling", audience: "crowd",
      job: "shake", life: "war", describe: "people", rules: "break", when: "now", began: "reporter",
      real: "real", ending: "happy", words: "exact", seek: "spirit", fame: "hidden", cast: "crowd",
      effect: "moved", time: "cycle",
      // long version only
      opening: "voice", enemy: "society", length: "book", talk: "none", nature: "sacred", romance: "ideal",
      death: "light", child: "none", politics: "direct", faith: "wrestle", home: "capital", output: "one",
      hook: "language", strongest: "ordinary", build: "pieces", title: "image", sign: "real", peak: "middle",
      pace: "steady", self: "auto", outlook: "hopeful", company: "public", heard: "both", money: "hardly",
      creature: "observed",
      // branch questions this writer belongs to
      poem: "longlines"
    }
  },

  {
    id: "twain",
    name: "Mark Twain",
    years: "1835–1910",
    from: "United States",
    focus: "voice",
    approach: "explorer",
    tagline: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    taglineFrom: "Pudd'nhead Wilson",
    style: "Like Twain, you have an ear. Your narrator sounds like a real kid from a real place, and you use jokes to say serious things about how people treat each other.",
    trueStory: "\"Mark Twain\" was a riverboat call meaning the water was two fathoms deep. He started Huckleberry Finn in 1876, put it away for years, and finished it in 1883.",
    about: "Samuel Clemens grew up in Hannibal, Missouri, on the Mississippi River. He was a printer, a riverboat pilot and a newspaper reporter before his humor made him one of the most famous Americans of his time.",
    works: ["The Adventures of Tom Sawyer", "Adventures of Huckleberry Finn", "The Prince and the Pauper"],
    startWith: "The Adventures of Tom Sawyer, starting with the fence-painting chapter.",
    superpower: "Voice and humor. Your dialogue sounds alive.",
    watchOut: "Jokes that take over when the story needs to be serious.",
    exercise: "Write half a page in the exact voice of someone you know, telling a small lie.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "family", routine: "rewrite", mood: "calm", hero: "outsider", humor: "comic",
      bigq: "power", setting: "remote", narrator: "inside", sentences: "plain", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "nature", rules: "strict", when: "before",
      began: "career", real: "real", ending: "happy", words: "exact", seek: "spirit", fame: "hidden",
      cast: "few", effect: "laugh", time: "line",
      // long version only
      opening: "voice", enemy: "society", length: "book", talk: "mostly", nature: "force", romance: "side",
      death: "light", child: "hero", politics: "hidden", faith: "mock", home: "road", output: "flood",
      hook: "laughter", strongest: "ordinary", build: "episodes", title: "name", sign: "pen", peak: "middle",
      pace: "steady", self: "disguised", outlook: "playful", company: "public", heard: "both", money: "plot",
      creature: "humans",
      // branch questions this writer belongs to
      adventure: "raft", tales: "fence"
    }
  },

  {
    id: "andersen",
    name: "Hans Christian Andersen",
    years: "1805–1875",
    from: "Denmark",
    focus: "heart",
    approach: "explorer",
    tagline: "One must have sunshine, freedom, and a little flower.",
    taglineFrom: "The Butterfly",
    style: "Like Andersen, you write simply, as if speaking aloud to a child, but the feeling underneath is grown-up. Your outsiders, such as a duckling, a tin soldier or a mermaid, carry real sadness.",
    trueStory: "Andersen was the son of a shoemaker and a washerwoman. At 14 he left home alone for Copenhagen, hoping to become an actor.",
    about: "Andersen wrote novels, plays and travel books, but he is remembered for more than 150 fairy tales. Unlike the Brothers Grimm, who collected old stories, he invented most of his own. He traveled constantly and never had a settled home.",
    works: ["The Little Mermaid", "The Ugly Duckling", "The Emperor's New Clothes", "The Snow Queen"],
    startWith: "\"The Emperor's New Clothes\", short and funny.",
    superpower: "Simple words with deep feeling.",
    watchOut: "Sadness with no way out.",
    exercise: "Choose an everyday object and write its story as a fairy tale that starts with \"There was once\".",
    fit: {
      // questions for everyone
      form: "short", ideas: "hardship", routine: "burst", mood: "fleeting", hero: "outsider", humor: "irony",
      bigq: "love", setting: "court", narrator: "direct", sentences: "plain", audience: "crowd",
      job: "entertain", life: "wander", describe: "nature", rules: "break", when: "legend", began: "words",
      real: "strange", ending: "tragic", words: "speech", seek: "spirit", fame: "famous", cast: "few",
      effect: "moved", time: "line",
      // long version only
      opening: "voice", enemy: "society", length: "short", talk: "balanced", nature: "mirror", romance: "ruin",
      death: "center", child: "audience", politics: "hidden", faith: "devout", home: "road", output: "steady",
      hook: "language", strongest: "ordinary", build: "pieces", title: "name", sign: "real", peak: "middle",
      pace: "steady", self: "disguised", outlook: "bittersweet", company: "loner", heard: "aloud",
      money: "poverty", creature: "talking",
      // branch questions this writer belongs to
      tales: "duckling"
    }
  },

  {
    id: "carroll",
    name: "Lewis Carroll",
    years: "1832–1898",
    from: "England",
    focus: "world",
    approach: "explorer",
    tagline: "Curiouser and curiouser!",
    taglineFrom: "Alice's Adventures in Wonderland",
    style: "Like Carroll, you play. You invent words, turn rules upside down and let a curious child argue with creatures who are sure they are right.",
    trueStory: "Alice's Adventures in Wonderland began as a story Carroll made up on the spot for three young sisters during a boat trip in 1862.",
    about: "Lewis Carroll was the pen name of Charles Lutwidge Dodgson, who taught mathematics at Oxford. He loved puzzles and logic games. Words he invented in \"Jabberwocky\", such as \"chortle\", are still used.",
    works: ["Alice's Adventures in Wonderland", "Through the Looking-Glass", "Jabberwocky"],
    startWith: "Alice's Adventures in Wonderland, then \"Jabberwocky\" read aloud.",
    superpower: "Invention and play.",
    watchOut: "Clever scenes that don't add up to a story.",
    exercise: "Write a conversation in which one speaker takes everything the other says completely literally.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "burst", mood: "fleeting", hero: "polite", humor: "comic",
      bigq: "meaning", setting: "court", narrator: "direct", sentences: "witty", audience: "circle",
      job: "entertain", life: "books", describe: "thoughts", rules: "break", when: "legend", began: "career",
      real: "dream", ending: "twist", words: "play", seek: "mind", fame: "famous", cast: "few",
      effect: "laugh", time: "moment",
      // long version only
      opening: "action", enemy: "society", length: "short", talk: "mostly", nature: "backdrop", romance: "side",
      death: "light", child: "hero", politics: "none", faith: "absent", home: "home", output: "few",
      hook: "laughter", strongest: "women", build: "episodes", title: "name", sign: "pen", peak: "middle",
      pace: "fast", self: "invented", outlook: "playful", company: "loner", heard: "aloud", money: "hardly",
      creature: "talking",
      // branch questions this writer belongs to
      strange: "rabbithole", tales: "boat"
    }
  },

  {
    id: "verne",
    name: "Jules Verne",
    years: "1828–1905",
    from: "France",
    focus: "world",
    approach: "planner",
    tagline: "We may brave human laws, but we cannot resist natural ones.",
    taglineFrom: "Twenty Thousand Leagues Under the Seas",
    style: "Like Verne, you do the research. Your adventures are packed with real facts and careful calculations, so the reader believes the submarine and the trip to the moon.",
    trueStory: "Verne studied law to please his father but wanted to write. Working with the publisher Hetzel, he produced a long series called the Extraordinary Voyages.",
    about: "Verne grew up in the port city of Nantes, watching ships. His novels first ran in magazines, part by part. He is one of the most translated authors in the world and is often called a father of science fiction.",
    works: ["Twenty Thousand Leagues Under the Seas", "Around the World in Eighty Days", "Journey to the Center of the Earth"],
    startWith: "Around the World in Eighty Days, a race against the clock.",
    superpower: "Convincing detail. Readers trust your world.",
    watchOut: "Pages of facts that stop the adventure.",
    exercise: "Plan a journey to a place nobody has been. List five real problems the travelers would face and how they solve each.",
    fit: {
      // questions for everyone
      form: "serial", ideas: "history", routine: "plan", mood: "stormy", hero: "rebel", humor: "irony",
      bigq: "fate", setting: "far", narrator: "direct", sentences: "plain", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "thoughts", rules: "clear", when: "lived",
      began: "reporter", real: "dream", ending: "tragic", words: "speech", seek: "beauty", fame: "hidden",
      cast: "one", effect: "moved", time: "line",
      // long version only
      opening: "action", enemy: "fate", length: "book", talk: "balanced", nature: "force", romance: "side",
      death: "quiet", child: "audience", politics: "background", faith: "absent", home: "home",
      output: "flood", hook: "thrills", strongest: "action", build: "episodes", title: "place", sign: "real",
      peak: "middle", pace: "fast", self: "researched", outlook: "hopeful", company: "loner", heard: "silent",
      money: "plot", creature: "monsters",
      // branch questions this writer belongs to
      adventure: "submarine"
    }
  },

  {
    id: "dumas",
    name: "Alexandre Dumas",
    years: "1802–1870",
    from: "France",
    focus: "spark",
    approach: "explorer",
    tagline: "All for one and one for all.",
    taglineFrom: "The Three Musketeers",
    style: "Like Dumas, you love adventure, friendship and big dramatic turns. You throw your heroes into trouble and chase the story as fast as it runs.",
    trueStory: "The Three Musketeers and The Count of Monte Cristo first came out in newspapers, a piece at a time, so each part had to end with a hook.",
    about: "Dumas's father was a general in the French army, born in Saint-Domingue (now Haiti) to a French nobleman and an enslaved woman of African descent. Alexandre began as a playwright and often worked with a collaborator, Auguste Maquet.",
    works: ["The Three Musketeers", "The Count of Monte Cristo", "The Man in the Iron Mask"],
    startWith: "The Three Musketeers: sword fights and friendship.",
    superpower: "Energy, momentum and cliffhangers.",
    watchOut: "Endings. A story that starts strong can stall when the excitement runs out.",
    exercise: "Write your last scene now, even roughly. Then you are racing toward something.",
    fit: {
      // questions for everyone
      form: "serial", ideas: "history", routine: "burst", mood: "stormy", hero: "rebel", humor: "comic",
      bigq: "fate", setting: "court", narrator: "direct", sentences: "plain", audience: "crowd",
      job: "entertain", life: "lostmoney", describe: "battles", rules: "clear", when: "before",
      began: "words", real: "real", ending: "happy", words: "speech", seek: "society", fame: "famous",
      cast: "crowd", effect: "moved", time: "line",
      // long version only
      opening: "action", enemy: "person", length: "giant", talk: "mostly", nature: "backdrop", romance: "side",
      death: "violent", child: "none", politics: "background", faith: "absent", home: "capital",
      output: "flood", hook: "thrills", strongest: "action", build: "episodes", title: "name", sign: "real",
      peak: "middle", pace: "fast", self: "researched", outlook: "hopeful", company: "circle",
      heard: "silent", money: "plot", creature: "humans",
      // branch questions this writer belongs to
      adventure: "swords"
    }
  },

  {
    id: "flaubert",
    name: "Gustave Flaubert",
    years: "1821–1880",
    from: "France",
    focus: "voice",
    approach: "reviser",
    tagline: "Human speech is like a cracked kettle on which we tap crude rhythms.",
    taglineFrom: "Madame Bovary",
    style: "Like Flaubert, you would trade ten words for the perfect one. You keep yourself out of the story and let exact details do the judging.",
    trueStory: "Flaubert spent about five years writing Madame Bovary and read his sentences aloud to test them. When the novel appeared he was put on trial for offending public morals, and he was acquitted.",
    about: "Flaubert was a surgeon's son from Rouen who gave up law to write. He worked slowly at his family home near the city. Later writers have called him a master of style and of the realistic novel.",
    works: ["Madame Bovary", "Sentimental Education", "Three Tales"],
    startWith: "\"A Simple Heart\", a short story in Three Tales.",
    superpower: "Precise word choice and a clear eye.",
    watchOut: "Polishing one paragraph while the rest of the story waits.",
    exercise: "Set a 20-minute timer and draft without fixing anything. Polish only when the whole scene exists.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "family", routine: "rewrite", mood: "calm", hero: "polite", humor: "irony",
      bigq: "love", setting: "remote", narrator: "hidden", sentences: "witty", audience: "circle",
      job: "witness", life: "books", describe: "people", rules: "strict", when: "now", began: "career",
      real: "real", ending: "tragic", words: "exact", seek: "beauty", fame: "banned", cast: "few",
      effect: "moral", time: "line",
      // long version only
      opening: "place", enemy: "society", length: "book", talk: "little", nature: "backdrop", romance: "ruin",
      death: "violent", child: "none", politics: "background", faith: "mock", home: "home", output: "few",
      hook: "language", strongest: "women", build: "straight", title: "name", sign: "real", peak: "middle",
      pace: "slow", self: "researched", outlook: "dark", company: "circle", heard: "silent", money: "plot",
      creature: "humans",
      // branch questions this writer belongs to
      mind: "daydreams"
    }
  },

  {
    id: "chekhov",
    name: "Anton Chekhov",
    years: "1860–1904",
    from: "Russia",
    focus: "heart",
    approach: "explorer",
    tagline: "All Russia is our garden.",
    taglineFrom: "The Cherry Orchard",
    style: "Like Chekhov, you don't explain or judge. Ordinary people talk about the weather while their hearts break, and you end the story before anything is solved.",
    trueStory: "Chekhov trained as a doctor and wrote comic sketches for magazines to support his family. He said medicine was his lawful wife and literature his mistress.",
    about: "Chekhov was the grandson of a serf and grew up in a family that went bankrupt. He kept practicing medicine while writing hundreds of stories and four great plays. In 1890 he crossed Siberia to study conditions on the prison island of Sakhalin.",
    works: ["The Lady with the Dog", "The Seagull", "Uncle Vanya", "The Cherry Orchard"],
    startWith: "\"The Bet\" or \"Vanka\", both very short.",
    superpower: "Honesty and restraint.",
    watchOut: "Stories so quiet that nothing seems to happen.",
    exercise: "Write a scene in which two people talk about something unimportant while something important goes unsaid.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "stolen", mood: "fleeting", hero: "endure", humor: "irony",
      bigq: "meaning", setting: "remote", narrator: "hidden", sentences: "plain", audience: "unsaid",
      job: "witness", life: "lostmoney", describe: "people", rules: "break", when: "now", began: "career",
      real: "real", ending: "open", words: "exact", seek: "mind", fame: "famous", cast: "few",
      effect: "moved", time: "moment",
      // long version only
      opening: "action", enemy: "fate", length: "short", talk: "balanced", nature: "mirror", romance: "side",
      death: "quiet", child: "none", politics: "background", faith: "absent", home: "capital",
      output: "flood", hook: "ideas", strongest: "ordinary", build: "pieces", title: "image", sign: "real",
      peak: "middle", pace: "slow", self: "researched", outlook: "bittersweet", company: "circle",
      heard: "both", money: "plot", creature: "humans",
      // branch questions this writer belongs to
      stage: "quiet"
    }
  },

  {
    id: "pushkin",
    name: "Alexander Pushkin",
    years: "1799–1837",
    from: "Russia",
    focus: "voice",
    approach: "explorer",
    tagline: "Habit is heaven's own redress: it takes the place of happiness.",
    taglineFrom: "Eugene Onegin",
    style: "Like Pushkin, you write with speed and grace. Your narrator chats with the reader, jokes, changes the subject, and still breaks their heart by the end.",
    trueStory: "In the autumn of 1830 a cholera outbreak kept Pushkin stuck at his family's estate at Boldino. In three months he finished Eugene Onegin and wrote stories, plays and poems.",
    about: "Pushkin is called the founder of modern Russian literature. His great-grandfather, Abram Gannibal, was born in Africa and rose to become a general in Russia. Pushkin was sent away from the capital for his poems and watched by censors all his life.",
    works: ["Eugene Onegin", "The Captain's Daughter", "The Bronze Horseman", "The Tale of Tsar Saltan"],
    startWith: "The Captain's Daughter, a short adventure novel.",
    superpower: "Lightness and charm with real feeling underneath.",
    watchOut: "Staying on the surface because it comes so easily.",
    exercise: "Tell a sad story in a cheerful, chatty voice. Keep the sadness for the last two lines.",
    fit: {
      // questions for everyone
      form: "short", ideas: "remake", routine: "burst", mood: "fleeting", hero: "polite", humor: "irony",
      bigq: "love", setting: "court", narrator: "direct", sentences: "witty", audience: "circle",
      job: "entertain", life: "books", describe: "people", rules: "strict", when: "now", began: "poet",
      real: "real", ending: "open", words: "speech", seek: "beauty", fame: "banned", cast: "few",
      effect: "moved", time: "line",
      // long version only
      opening: "voice", enemy: "self", length: "short", talk: "balanced", nature: "mirror", romance: "center",
      death: "violent", child: "none", politics: "hidden", faith: "absent", home: "road", output: "steady",
      hook: "language", strongest: "thinkers", build: "straight", title: "name", sign: "real", peak: "young",
      pace: "fast", self: "disguised", outlook: "playful", company: "circle", heard: "both", money: "plot",
      creature: "talking",
      // branch questions this writer belongs to
      versestory: "regret", exile: "south"
    }
  },

  {
    id: "wilde",
    name: "Oscar Wilde",
    years: "1854–1900",
    from: "Ireland",
    focus: "voice",
    approach: "explorer",
    tagline: "We are all in the gutter, but some of us are looking at the stars.",
    taglineFrom: "Lady Windermere's Fan",
    style: "Like Wilde, you love a line that flips an idea on its head. Your characters are elegant, your plots are full of secrets, and you treat serious things lightly and light things seriously.",
    trueStory: "Wilde's comedy The Importance of Being Earnest opened in London in February 1895 to huge applause. A few months later he was sent to prison for two years.",
    about: "Wilde grew up in Dublin, the son of a surgeon and a poet, and became famous in London for his wit before he had written much. He wrote fairy tales, one novel and a run of hit comedies in just a few years.",
    works: ["The Importance of Being Earnest", "The Picture of Dorian Gray", "The Happy Prince"],
    startWith: "\"The Happy Prince\", then The Importance of Being Earnest.",
    superpower: "Wit. People quote your lines.",
    watchOut: "Cleverness with no heart behind it.",
    exercise: "Take three pieces of common advice and rewrite each so it says the opposite and still sounds wise.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "remake", routine: "burst", mood: "fleeting", hero: "polite", humor: "comic",
      bigq: "meaning", setting: "court", narrator: "hidden", sentences: "witty", audience: "crowd",
      job: "entertain", life: "books", describe: "people", rules: "break", when: "now", began: "poet",
      real: "real", ending: "happy", words: "play", seek: "mind", fame: "banned", cast: "few",
      effect: "laugh", time: "line",
      // long version only
      opening: "idea", enemy: "society", length: "short", talk: "mostly", nature: "backdrop", romance: "side",
      death: "light", child: "audience", politics: "none", faith: "absent", home: "capital", output: "few",
      hook: "laughter", strongest: "thinkers", build: "straight", title: "name", sign: "real", peak: "middle",
      pace: "fast", self: "disguised", outlook: "playful", company: "public", heard: "performed",
      money: "hardly", creature: "talking",
      // branch questions this writer belongs to
      stage: "paradox", secret: "portrait"
    }
  },

  {
    id: "kafka",
    name: "Franz Kafka",
    years: "1883–1924",
    from: "Prague (now Czech Republic)",
    focus: "world",
    approach: "explorer",
    tagline: "A book must be the axe for the frozen sea within us.",
    taglineFrom: "a letter to Oskar Pollak, 1904",
    style: "Like Kafka, you start with something impossible and report it plainly. Nobody in your story is surprised, the rules can't be found, and the reader feels the trap closing.",
    trueStory: "Kafka asked his friend Max Brod to burn his unpublished manuscripts after his death. Brod refused, which is why we have The Trial and The Castle.",
    about: "Kafka wrote in German and worked by day at an insurance institute in Prague, writing at night. He wrote his story \"The Judgment\" in a single night in 1912. Very little of his work was published while he lived.",
    works: ["The Metamorphosis", "The Trial", "The Castle"],
    startWith: "The Metamorphosis, about a man who wakes up as an insect.",
    superpower: "A strange idea treated with complete seriousness.",
    watchOut: "No way out for the character or the reader.",
    exercise: "Write a page that begins with something impossible happening at breakfast. Nobody in the scene is allowed to be surprised.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "stolen", mood: "fever", hero: "outsider", humor: "bitter",
      bigq: "power", setting: "city", narrator: "inside", sentences: "plain", audience: "unsaid",
      job: "shake", life: "books", describe: "thoughts", rules: "break", when: "now", began: "career",
      real: "dream", ending: "open", words: "exact", seek: "mind", fame: "hidden", cast: "one",
      effect: "chill", time: "line",
      // long version only
      opening: "action", enemy: "society", length: "short", talk: "little", nature: "backdrop", romance: "side",
      death: "quiet", child: "none", politics: "hidden", faith: "wrestle", home: "home", output: "few",
      hook: "ideas", strongest: "ordinary", build: "straight", title: "idea", sign: "real", peak: "middle",
      pace: "steady", self: "disguised", outlook: "dark", company: "loner", heard: "aloud", money: "hardly",
      creature: "monsters",
      // branch questions this writer belongs to
      strange: "insect"
    }
  },

  {
    id: "woolf",
    name: "Virginia Woolf",
    years: "1882–1941",
    from: "England",
    focus: "voice",
    approach: "reviser",
    tagline: "I am rooted, but I flow.",
    taglineFrom: "The Waves",
    style: "Like Woolf, you care less about what happens than about how it feels from inside. Your sentences drift from one mind to another, and a single day can hold a lifetime.",
    trueStory: "In 1917 Woolf and her husband Leonard bought a small printing press and started the Hogarth Press at home, setting the type by hand. It published her novels.",
    about: "Virginia Woolf grew up in a London house full of books and taught herself from her father's library. She was at the center of a circle of writers and artists called the Bloomsbury Group. Her essay A Room of One's Own argues that a woman needs money and a room of her own to write.",
    works: ["Mrs Dalloway", "To the Lighthouse", "Orlando", "A Room of One's Own"],
    startWith: "The first pages of Mrs Dalloway, or the short story \"Kew Gardens\".",
    superpower: "Inner life. Readers recognize their own thoughts in your pages.",
    watchOut: "Losing the reader when nothing outside the mind happens.",
    exercise: "Follow one character's thoughts for the two minutes it takes to walk down a street. Let what they see interrupt what they think.",
    fit: {
      // questions for everyone
      form: "voices", ideas: "family", routine: "rewrite", mood: "fleeting", hero: "polite", humor: "irony",
      bigq: "meaning", setting: "city", narrator: "inside", sentences: "rolling", audience: "circle",
      job: "witness", life: "wander", describe: "thoughts", rules: "mix", when: "before", began: "reporter",
      real: "real", ending: "happy", words: "exact", seek: "society", fame: "handed", cast: "few",
      effect: "moved", time: "moment",
      // long version only
      opening: "action", enemy: "fate", length: "book", talk: "little", nature: "mirror", romance: "side",
      death: "quiet", child: "memory", politics: "background", faith: "absent", home: "capital",
      output: "steady", hook: "language", strongest: "women", build: "layers", title: "name", sign: "real",
      peak: "middle", pace: "slow", self: "disguised", outlook: "bittersweet", company: "circle",
      heard: "silent", money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      mind: "oneday"
    }
  },

  {
    id: "joyce",
    name: "James Joyce",
    years: "1882–1941",
    from: "Ireland",
    focus: "voice",
    approach: "reviser",
    tagline: "History is a nightmare from which I am trying to awake.",
    taglineFrom: "Ulysses",
    style: "Like Joyce, you treat style as an adventure. You pack one ordinary day with jokes, songs, memories and puzzles, and you expect the reader to keep up.",
    trueStory: "All of Ulysses takes place on one day in Dublin, 16 June 1904. Joyce spent about seven years writing it, and it was banned in the United States until 1933.",
    about: "Joyce left Ireland as a young man and lived in Trieste, Zurich and Paris, but he wrote only about Dublin. He struggled with poor eyesight and with publishers who were afraid of his books.",
    works: ["Dubliners", "A Portrait of the Artist as a Young Man", "Ulysses"],
    startWith: "\"Araby\", a short story in Dubliners.",
    superpower: "Daring with language.",
    watchOut: "Puzzles that shut the reader out.",
    exercise: "Write the same short scene twice in two completely different styles, such as a news report and a fairy tale.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "remake", routine: "rewrite", mood: "fever", hero: "outsider", humor: "comic",
      bigq: "meaning", setting: "city", narrator: "inside", sentences: "intense", audience: "circle",
      job: "shake", life: "wander", describe: "thoughts", rules: "break", when: "lived", began: "poet",
      real: "real", ending: "open", words: "play", seek: "mind", fame: "banned", cast: "crowd",
      effect: "laugh", time: "moment",
      // long version only
      opening: "action", enemy: "society", length: "giant", talk: "little", nature: "backdrop", romance: "side",
      death: "quiet", child: "memory", politics: "background", faith: "wrestle", home: "abroad",
      output: "few", hook: "language", strongest: "ordinary", build: "layers", title: "name", sign: "real",
      peak: "middle", pace: "slow", self: "disguised", outlook: "playful", company: "circle", heard: "both",
      money: "poverty", creature: "humans",
      // branch questions this writer belongs to
      mind: "styles"
    }
  },

  {
    id: "proust",
    name: "Marcel Proust",
    years: "1871–1922",
    from: "France",
    focus: "heart",
    approach: "reviser",
    tagline: "The true paradises are the paradises that we have lost.",
    taglineFrom: "Time Regained",
    style: "Like Proust, you write from memory. A smell, a tune or a piece of cake opens a door, and you follow it through long, winding sentences until a whole lost world returns.",
    trueStory: "Proust wrote much of In Search of Lost Time at night, in bed, in a room lined with cork to keep out noise. After publishers turned down the first volume, he paid to have it printed.",
    about: "Proust grew up in Paris in a wealthy family and was often ill. His novel runs to seven volumes. In 1919 its second volume won France's top literary prize, the Prix Goncourt.",
    works: ["Swann's Way", "In Search of Lost Time"],
    startWith: "The \"madeleine\" passage near the start of Swann's Way.",
    superpower: "Memory and feeling in rich detail.",
    watchOut: "Sentences so long that the reader forgets where they began.",
    exercise: "Pick a taste or smell from when you were small. Write everything it brings back, without stopping, for ten minutes.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "family", routine: "rewrite", mood: "fleeting", hero: "polite", humor: "irony",
      bigq: "love", setting: "court", narrator: "inside", sentences: "rolling", audience: "unsaid",
      job: "memory", life: "books", describe: "thoughts", rules: "mix", when: "lived", began: "words",
      real: "real", ending: "twist", words: "music", seek: "beauty", fame: "famous", cast: "crowd",
      effect: "moved", time: "memory",
      // long version only
      opening: "voice", enemy: "fate", length: "giant", talk: "little", nature: "mirror", romance: "ruin",
      death: "quiet", child: "memory", politics: "background", faith: "absent", home: "capital",
      output: "one", hook: "language", strongest: "thinkers", build: "layers", title: "idea", sign: "real",
      peak: "late", pace: "slow", self: "disguised", outlook: "bittersweet", company: "circle",
      heard: "silent", money: "hardly", creature: "humans",
      // branch questions this writer belongs to
      mind: "cake"
    }
  },

  {
    id: "orwell",
    name: "George Orwell",
    years: "1903–1950",
    from: "England (born in India)",
    focus: "spark",
    approach: "planner",
    tagline: "All animals are equal, but some animals are more equal than others.",
    taglineFrom: "Animal Farm",
    style: "Like Orwell, you write to expose something. Your sentences are plain on purpose, your story is a warning, and you want the reader to finish it angry enough to notice the real thing.",
    trueStory: "Orwell fought in the Spanish Civil War and was shot through the throat in 1937. Several publishers turned down Animal Farm before it came out in 1945.",
    about: "George Orwell was the pen name of Eric Blair. He served as a police officer in Burma, then lived among poor workers in Paris and London to write about them. He wrote Nineteen Eighty-Four on the Scottish island of Jura while seriously ill.",
    works: ["Animal Farm", "Nineteen Eighty-Four", "Homage to Catalonia"],
    startWith: "Animal Farm, a short fable about a farm revolution.",
    superpower: "Clarity and purpose.",
    watchOut: "A message so loud that the story feels like a lecture.",
    exercise: "Describe an unfair rule at school or at home as a short fable with animals. Don't state the moral.",
    fit: {
      // questions for everyone
      form: "short", ideas: "hardship", routine: "plan", mood: "calm", hero: "outsider", humor: "bitter",
      bigq: "power", setting: "city", narrator: "hidden", sentences: "plain", audience: "wake",
      job: "witness", life: "war", describe: "people", rules: "clear", when: "now", began: "reporter",
      real: "invented", ending: "tragic", words: "exact", seek: "society", fame: "banned", cast: "few",
      effect: "chill", time: "line",
      // long version only
      opening: "place", enemy: "society", length: "book", talk: "balanced", nature: "backdrop", romance: "side",
      death: "violent", child: "none", politics: "hidden", faith: "absent", home: "road", output: "steady",
      hook: "ideas", strongest: "ordinary", build: "straight", title: "place", sign: "pen", peak: "late",
      pace: "steady", self: "auto", outlook: "dark", company: "loner", heard: "silent", money: "poverty",
      creature: "talking",
      // branch questions this writer belongs to
      warning: "farm"
    }
  },

  {
    id: "christie",
    name: "Agatha Christie",
    years: "1890–1976",
    from: "England",
    focus: "spark",
    approach: "planner",
    tagline: "Very few of us are what we seem.",
    taglineFrom: "The Man in the Mist",
    style: "Like Christie, you plot backwards from the big reveal. You know who did it, how and why, and which tiny hint early on will make readers gasp at the end.",
    trueStory: "Christie filled dozens of notebooks with plot ideas, lists of suspects and clues, and tried out different culprits before she chose one.",
    about: "Christie worked in a hospital dispensary during the First World War, where she learned about poisons. She created the detectives Hercule Poirot and Miss Marple, and her play The Mousetrap has run in London since 1952.",
    works: ["And Then There Were None", "Murder on the Orient Express", "The Murder of Roger Ackroyd"],
    startWith: "And Then There Were None: ten strangers on an island.",
    superpower: "Tight structure and satisfying payoffs.",
    watchOut: "Characters who are only pieces in a puzzle.",
    exercise: "Write the solution to a small mystery first. Then write the scene where the first clue appears and nobody notices.",
    fit: {
      // questions for everyone
      form: "serial", ideas: "family", routine: "plan", mood: "calm", hero: "polite", humor: "irony",
      bigq: "fate", setting: "remote", narrator: "hidden", sentences: "plain", audience: "crowd",
      job: "entertain", life: "war", describe: "people", rules: "strict", when: "now", began: "career",
      real: "real", ending: "twist", words: "speech", seek: "mind", fame: "famous", cast: "crowd",
      effect: "chill", time: "memory",
      // long version only
      opening: "place", enemy: "person", length: "book", talk: "mostly", nature: "backdrop", romance: "side",
      death: "center", child: "none", politics: "none", faith: "absent", home: "road", output: "flood",
      hook: "thrills", strongest: "thinkers", build: "layers", title: "place", sign: "real", peak: "middle",
      pace: "steady", self: "invented", outlook: "hopeful", company: "loner", heard: "silent", money: "plot",
      creature: "humans",
      // branch questions this writer belongs to
      secret: "gathering"
    }
  },

  {
    id: "tolkien",
    name: "J.R.R. Tolkien",
    years: "1892–1973",
    from: "England (born in South Africa)",
    focus: "world",
    approach: "reviser",
    tagline: "Not all those who wander are lost.",
    taglineFrom: "The Fellowship of the Ring",
    style: "Like Tolkien, you love languages, maps and deep history. Your world has its own logic, and readers can feel that someone built it with care over many years.",
    trueStory: "Tolkien invented languages for years before Middle-earth had a story. He began The Hobbit by scribbling its first line on a blank exam paper he was marking.",
    about: "Tolkien fought at the Battle of the Somme in the First World War and later became a professor of Old English at Oxford. He shared drafts with a group of writer friends, the Inklings, which included C.S. Lewis.",
    works: ["The Hobbit", "The Lord of the Rings", "The Silmarillion"],
    startWith: "The Hobbit, first told as a story for his own children.",
    superpower: "Immersive, consistent worlds.",
    watchOut: "Explaining the whole history before the story starts.",
    exercise: "Describe a place using only what one character would notice in a hurry. Five sentences maximum.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "remake", routine: "rewrite", mood: "fleeting", hero: "endure", humor: "serious",
      bigq: "power", setting: "far", narrator: "bard", sentences: "rolling", audience: "circle",
      job: "memory", life: "war", describe: "nature", rules: "mix", when: "legend", began: "career",
      real: "invented", ending: "open", words: "speech", seek: "mind", fame: "banned", cast: "one",
      effect: "moved", time: "cycle",
      // long version only
      opening: "place", enemy: "person", length: "giant", talk: "balanced", nature: "sacred", romance: "side",
      death: "violent", child: "audience", politics: "none", faith: "devout", home: "home", output: "few",
      hook: "thrills", strongest: "ordinary", build: "episodes", title: "name", sign: "real", peak: "late",
      pace: "slow", self: "invented", outlook: "bittersweet", company: "circle", heard: "aloud",
      money: "mocked", creature: "monsters",
      // branch questions this writer belongs to
      adventure: "quest", tales: "dragon"
    }
  },

  {
    id: "tagore",
    name: "Rabindranath Tagore",
    years: "1861–1941",
    from: "India (Bengal)",
    focus: "heart",
    approach: "explorer",
    tagline: "Where the mind is without fear and the head is held high.",
    taglineFrom: "Gitanjali",
    style: "Like Tagore, you move easily between poem, song and story. You write about rivers, seasons and ordinary village people with tenderness, and your lines want to be set to music.",
    trueStory: "In 1913 Tagore became the first writer from outside Europe to win the Nobel Prize in Literature. He wrote more than 2,000 songs, and the national anthems of India and Bangladesh use his words.",
    about: "Tagore grew up in a large, gifted family in Calcutta and was mostly taught at home. He wrote poems, novels, plays and stories in Bengali, painted late in life, and founded a school at Santiniketan where classes were held outdoors.",
    works: ["Gitanjali", "The Home and the World", "Kabuliwala"],
    startWith: "\"Kabuliwala\", a short story about a fruit seller and a little girl.",
    superpower: "Lyrical language and warmth.",
    watchOut: "Sweetness that avoids conflict.",
    exercise: "Write a short scene by a river or a road, and end it with four lines that could be sung.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "burst", mood: "calm", hero: "endure", humor: "serious",
      bigq: "love", setting: "remote", narrator: "bard", sentences: "rolling", audience: "crowd",
      job: "memory", life: "books", describe: "nature", rules: "break", when: "now", began: "poet",
      real: "real", ending: "happy", words: "exact", seek: "society", fame: "famous", cast: "few",
      effect: "moved", time: "cycle",
      // long version only
      opening: "voice", enemy: "society", length: "short", talk: "little", nature: "sacred", romance: "ideal",
      death: "quiet", child: "hero", politics: "direct", faith: "devout", home: "home", output: "flood",
      hook: "language", strongest: "ordinary", build: "pieces", title: "image", sign: "real",
      peak: "lifelong", pace: "slow", self: "disguised", outlook: "hopeful", company: "teacher",
      heard: "performed", money: "hardly", creature: "observed",
      // branch questions this writer belongs to
      poem: "hymn"
    }
  },

  {
    id: "borges",
    name: "Jorge Luis Borges",
    years: "1899–1986",
    from: "Argentina",
    focus: "spark",
    approach: "planner",
    tagline: "I have always imagined that Paradise will be a kind of library.",
    taglineFrom: "Poem of the Gifts",
    style: "Like Borges, you build short stories out of thought experiments: an endless library, a map as large as the country. You mix invented books with real ones until the reader can't tell which is which.",
    trueStory: "Borges worked for years in a small city library. In 1955 he was made director of Argentina's National Library, at about the time he lost his sight.",
    about: "Borges grew up in Buenos Aires reading in his father's English library. He started as a poet and never wrote a novel. His short stories made him one of the most influential writers of the twentieth century.",
    works: ["Ficciones", "The Aleph", "The Library of Babel", "The Garden of Forking Paths"],
    startWith: "\"The Library of Babel\", a few pages about an infinite library.",
    superpower: "Ideas that stay with the reader for years.",
    watchOut: "Stories with a puzzle but no person.",
    exercise: "Describe an impossible object, such as a book with no last page, as if you were writing its encyclopedia entry.",
    fit: {
      // questions for everyone
      form: "short", ideas: "remake", routine: "plan", mood: "calm", hero: "rebel", humor: "irony",
      bigq: "fate", setting: "city", narrator: "direct", sentences: "witty", audience: "circle", job: "shake",
      life: "books", describe: "thoughts", rules: "mix", when: "legend", began: "poet", real: "strange",
      ending: "twist", words: "exact", seek: "mind", fame: "famous", cast: "few", effect: "moral",
      time: "cycle",
      // long version only
      opening: "idea", enemy: "fate", length: "short", talk: "little", nature: "backdrop", romance: "side",
      death: "violent", child: "none", politics: "none", faith: "wrestle", home: "capital", output: "few",
      hook: "ideas", strongest: "thinkers", build: "layers", title: "idea", sign: "real", peak: "middle",
      pace: "steady", self: "invented", outlook: "playful", company: "circle", heard: "silent",
      money: "hardly", creature: "monsters",
      // branch questions this writer belongs to
      strange: "library"
    }
  },

  {
    id: "neruda",
    name: "Pablo Neruda",
    years: "1904–1973",
    from: "Chile",
    focus: "voice",
    approach: "explorer",
    tagline: "Tonight I can write the saddest lines.",
    taglineFrom: "Twenty Love Poems and a Song of Despair",
    style: "Like Neruda, you write with appetite. Love, the sea, a tomato, a pair of socks: you praise them all in images that are easy to feel and hard to forget.",
    trueStory: "In 1949, wanted by his government, Neruda escaped from Chile by riding on horseback across the Andes mountains.",
    about: "Pablo Neruda was the pen name of Ricardo Neftalí Reyes Basoalto. He published Twenty Love Poems and a Song of Despair at 19, worked as a diplomat, and won the Nobel Prize in 1971. He liked to write in green ink.",
    works: ["Twenty Love Poems and a Song of Despair", "Canto General", "Elemental Odes"],
    startWith: "\"Ode to My Socks\" or \"Ode to the Tomato\".",
    superpower: "Vivid images and open feeling.",
    watchOut: "Too many images for one poem.",
    exercise: "Write an ode to the most ordinary thing in your bag. Praise it in at least five different ways.",
    fit: {
      // questions for everyone
      form: "short", ideas: "family", routine: "burst", mood: "stormy", hero: "endure", humor: "serious",
      bigq: "love", setting: "far", narrator: "bard", sentences: "intense", audience: "crowd", job: "witness",
      life: "wander", describe: "nature", rules: "break", when: "now", began: "poet", real: "real",
      ending: "open", words: "music", seek: "society", fame: "famous", cast: "people", effect: "moved",
      time: "moment",
      // long version only
      opening: "voice", enemy: "society", length: "tiny", talk: "none", nature: "mirror", romance: "center",
      death: "quiet", child: "none", politics: "direct", faith: "absent", home: "abroad", output: "flood",
      hook: "language", strongest: "ordinary", build: "pieces", title: "image", sign: "pen", peak: "young",
      pace: "steady", self: "auto", outlook: "hopeful", company: "public", heard: "both", money: "hardly",
      creature: "observed",
      // branch questions this writer belongs to
      poem: "ode", exile: "andes"
    }
  },

  {
    id: "achebe",
    name: "Chinua Achebe",
    years: "1930–2013",
    from: "Nigeria",
    focus: "world",
    approach: "planner",
    tagline: "Proverbs are the palm-oil with which words are eaten.",
    taglineFrom: "Things Fall Apart",
    style: "Like Achebe, you write to set the record straight. You show a whole community, with its proverbs, laws and quarrels, in clear and steady prose, and you let the reader watch it change.",
    trueStory: "Achebe nearly lost Things Fall Apart. He mailed his only handwritten copy to a typing agency in London, which left it sitting for months until a colleague went there in person to ask about it.",
    about: "Achebe grew up in an Igbo town in Nigeria and worked in radio before his first novel appeared in 1958. Things Fall Apart, which tells of the arrival of colonial rule from an African point of view, has been translated into dozens of languages.",
    works: ["Things Fall Apart", "No Longer at Ease", "Arrow of God"],
    startWith: "Things Fall Apart, a short novel in short chapters.",
    superpower: "A whole society made clear and real.",
    watchOut: "Explaining customs when showing them would do.",
    exercise: "Write a scene in which an elder uses a proverb to settle an argument. Invent the proverb.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "history", routine: "plan", mood: "calm", hero: "rebel", humor: "irony",
      bigq: "fate", setting: "remote", narrator: "bard", sentences: "plain", audience: "wake", job: "memory",
      life: "books", describe: "people", rules: "mix", when: "before", began: "reporter", real: "real",
      ending: "happy", words: "music", seek: "spirit", fame: "hidden", cast: "people", effect: "moral",
      time: "line",
      // long version only
      opening: "voice", enemy: "society", length: "book", talk: "balanced", nature: "sacred", romance: "side",
      death: "violent", child: "none", politics: "direct", faith: "wrestle", home: "home", output: "few",
      hook: "ideas", strongest: "action", build: "straight", title: "image", sign: "real", peak: "young",
      pace: "steady", self: "researched", outlook: "bittersweet", company: "public", heard: "both",
      money: "plot", creature: "talking",
      // branch questions this writer belongs to
      warning: "village"
    }
  },

  {
    id: "morrison",
    name: "Toni Morrison",
    years: "1931–2019",
    from: "United States",
    focus: "heart",
    approach: "reviser",
    tagline: "Definitions belong to the definers, not the defined.",
    taglineFrom: "Beloved",
    style: "Like Morrison, you write about memory and what families carry. Your language is close to music, the past walks into the present, and you trust the reader to stay with hard things.",
    trueStory: "Morrison wrote her first novel, The Bluest Eye, by getting up before dawn while raising two sons and working as a book editor.",
    about: "Toni Morrison grew up in Ohio in a family that told stories and ghost tales. She was an editor in New York before she became known as a novelist. In 1993 she became the first Black woman to win the Nobel Prize in Literature.",
    works: ["Beloved", "Song of Solomon", "The Bluest Eye"],
    startWith: "Her picture-book-length speech, the Nobel Lecture. Her novels are best for older teens.",
    superpower: "Powerful language and deep feeling.",
    watchOut: "Leaving readers behind when the story jumps in time.",
    exercise: "Write about a family object that has been passed down. Let it tell one thing the family doesn't talk about.",
    fit: {
      // questions for everyone
      form: "epic", ideas: "family", routine: "stolen", mood: "stormy", hero: "endure", humor: "serious",
      bigq: "fate", setting: "remote", narrator: "bard", sentences: "intense", audience: "unsaid",
      job: "memory", life: "wander", describe: "thoughts", rules: "strict", when: "before", began: "poet",
      real: "invented", ending: "tragic", words: "exact", seek: "society", fame: "handed", cast: "few",
      effect: "moved", time: "memory",
      // long version only
      opening: "place", enemy: "fate", length: "book", talk: "balanced", nature: "mirror", romance: "ruin",
      death: "center", child: "hero", politics: "direct", faith: "wrestle", home: "capital", output: "few",
      hook: "language", strongest: "women", build: "layers", title: "name", sign: "pen", peak: "late",
      pace: "slow", self: "researched", outlook: "bittersweet", company: "public", heard: "both",
      money: "poverty", creature: "monsters",
      // branch questions this writer belongs to
      warning: "haunted"
    }
  }

];
