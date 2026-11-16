/*
  THE QUESTIONS
  =============
  There are three kinds of question:

    start: true       OPENING ROUND. Everyone gets these first, in the order written here.

    long: true        LONG VERSION ONLY. Asked in the long quiz, skipped in the short one.

    (no label)        FOR EVERYONE. The quiz asks one of these only when it helps to tell
                      apart the writers who are in the lead for that student.

    branch: "Name"    BRANCH QUESTION. It is about one group of writers only, and it appears
                      only when that group is in the lead. The quiz adds a "none of these"
                      answer by itself, so a student who does not belong can leave the branch.
                      Write your own wording for it with   none: "..."

  Every answer has a key (a short name with no spaces) and the text students see.
  The keys are what data/writers.js uses to say which answer fits which writer.

  Optional: put   next: "question id"   on an answer to make that question come straight after.

  After any change, open check.html.
*/
var QUIZ_QUESTIONS = [

  /* ---------- Opening round: everyone, in this order ---------- */

  {
    id: "form",
    start: true,
    text: "Which kind of work do you love most?",
    answers: [
      { key: "epic",   text: "A huge novel that holds a whole society or many generations" },
      { key: "short",  text: "Short, sharp pieces: stories, essays or poems" },
      { key: "serial", text: "A long story that comes out part by part, so you can't wait for the next piece" },
      { key: "voices", text: "Scenes full of voices: plays, dialogues and speeches" }
    ]
  },

  {
    id: "ideas",
    start: true,
    text: "If you told a story, where would it come from?",
    answers: [
      { key: "hardship", text: "Hard things I've lived through myself" },
      { key: "history",  text: "Big moments in history" },
      { key: "family",   text: "Family stories and the people around me" },
      { key: "remake",   text: "Old stories and beliefs I want to remake or challenge" }
    ]
  },

  {
    id: "routine",
    start: true,
    text: "When you take on a big project, how do you work?",
    answers: [
      { key: "plan",    text: "Make a plan or borrow a structure, then build on it" },
      { key: "burst",   text: "In an intense burst once the idea grabs me" },
      { key: "rewrite", text: "I redo it again and again, for months if I have to" },
      { key: "stolen",  text: "I fit it into moments I steal from a busy life" }
    ]
  },

  {
    id: "mood",
    start: true,
    text: "Which mood do you love most in a story?",
    answers: [
      { key: "fleeting", text: "Gentle sadness that nothing lasts forever" },
      { key: "fever",    text: "Fever and tension, like someone on the edge" },
      { key: "calm",     text: "Calm on the surface, strong feeling underneath" },
      { key: "stormy",   text: "Big, stormy and passionate" }
    ]
  },

  {
    id: "hero",
    start: true,
    text: "Which main character do you care about most?",
    answers: [
      { key: "outsider", text: "A poor outsider or someone society laughs at" },
      { key: "polite",   text: "A clever or noble person inside a polite society" },
      { key: "rebel",    text: "A tortured thinker or rebel who can't stop questioning" },
      { key: "endure",   text: "An ordinary person quietly enduring hard times" }
    ]
  },


  /* ---------- For everyone: asked when it helps ---------- */

  {
    id: "humor",
    text: "What kind of humor do you enjoy?",
    answers: [
      { key: "comic",   text: "Big comic characters and ridiculous situations" },
      { key: "irony",   text: "Quiet, dry irony that some readers might miss" },
      { key: "bitter",  text: "Bitter mockery of how people really behave" },
      { key: "serious", text: "Hardly any. I like things serious." }
    ]
  },

  {
    id: "bigq",
    text: "Which big question matters most to you?",
    answers: [
      { key: "meaning", text: "How should a person live, and what makes life meaningful?" },
      { key: "power",   text: "Why do the powerful get away with crushing the weak?" },
      { key: "love",    text: "What do love and longing do to us?" },
      { key: "fate",    text: "Can anyone escape their fate, their family or their traditions?" }
    ]
  },

  {
    id: "setting",
    text: "Which setting pulls you into a story?",
    answers: [
      { key: "city",   text: "Busy city streets: crowded, dirty and alive" },
      { key: "court",  text: "Palaces, courts or elegant drawing rooms" },
      { key: "far",    text: "Battlefields, the sea or roads far from home" },
      { key: "remote", text: "A small town or a lonely mountain, far from the center" }
    ]
  },

  {
    id: "narrator",
    text: "Which storyteller's voice do you like best?",
    answers: [
      { key: "direct", text: "One that talks to you directly, with opinions of its own" },
      { key: "inside", text: "One that lives inside a character's racing or ironic thoughts" },
      { key: "hidden", text: "One that stays in the background and lets silences carry the feeling" },
      { key: "bard",   text: "One that sounds like a poet, a prophet or a teller of legends" }
    ]
  },

  {
    id: "sentences",
    text: "Which kind of sentences do you like to read?",
    answers: [
      { key: "plain",   text: "Short and plain, every word doing work" },
      { key: "rolling", text: "Long and rolling, full of detail" },
      { key: "witty",   text: "Elegant and witty, with perfect balance" },
      { key: "intense", text: "Bursting with emotion, repeating for effect" }
    ]
  },

  {
    id: "audience",
    text: "If you had something to say, who would you say it to?",
    answers: [
      { key: "crowd",  text: "Everyone: big crowds, from the cheapest seats up" },
      { key: "circle", text: "A small circle who will catch every hint" },
      { key: "wake",   text: "People who need to wake up and change" },
      { key: "unsaid", text: "People who can feel what's left unsaid" }
    ]
  },

  {
    id: "job",
    text: "What is a writer's job?",
    answers: [
      { key: "entertain", text: "To entertain people and make them care" },
      { key: "witness",   text: "To tell the truth about war and history" },
      { key: "shake",     text: "To shake people out of comfortable beliefs" },
      { key: "memory",    text: "To keep memory and beauty from disappearing" }
    ]
  },

  {
    id: "life",
    text: "Which of these would shape you the most?",
    answers: [
      { key: "lostmoney", text: "My family loses its money, and I have to grow up fast" },
      { key: "war",       text: "Coming face to face with war or death" },
      { key: "books",     text: "Growing up in a house full of books and stories" },
      { key: "wander",    text: "Wandering far from home, in exile or on the road" }
    ]
  },

  {
    id: "describe",
    text: "What do you notice most?",
    answers: [
      { key: "people",   text: "People's faces, habits and funny quirks" },
      { key: "battles",  text: "Crowds, big events and history in motion" },
      { key: "thoughts", text: "Thoughts, arguments and inner struggles" },
      { key: "nature",   text: "Nature: seasons, mountains, rivers and the sea" }
    ]
  },

  {
    id: "rules",
    text: "How do you feel about rules?",
    answers: [
      { key: "strict", text: "Master them until I can work beautifully inside them" },
      { key: "break",  text: "Break the old rules and start something new" },
      { key: "mix",    text: "Ignore the boxes and mix everything together" },
      { key: "clear",  text: "Keep things clear and simple so anyone can follow" }
    ]
  },

  {
    id: "when",
    text: "Which time would you most like to read about?",
    answers: [
      { key: "now",    text: "My own time and my own neighborhood" },
      { key: "before", text: "A generation or two before I was born" },
      { key: "lived",  text: "Hard times I've lived through myself" },
      { key: "legend", text: "A distant or legendary past" }
    ]
  },

  {
    id: "began",
    text: "If you became a writer, how would it start?",
    answers: [
      { key: "reporter", text: "As a reporter, writing news for a paper" },
      { key: "poet",     text: "As a poet, long before any novel" },
      { key: "career",   text: "Training for a completely different career first" },
      { key: "words",    text: "Close to words in another way: acting, teaching or writing for my family" }
    ]
  },

  {
    id: "real",
    text: "Which kind of world do you like to get lost in?",
    answers: [
      { key: "real",     text: "Everyday life, exactly as it is" },
      { key: "strange",  text: "The real world, with something strange leaking in" },
      { key: "invented", text: "A world of gods, legends or places nobody has seen" },
      { key: "dream",    text: "A dream or a nightmare with its own odd logic" }
    ]
  },

  {
    id: "ending",
    text: "Which kind of ending do you like best?",
    answers: [
      { key: "happy",  text: "Things are put right, and someone gets what they hoped for" },
      { key: "tragic", text: "With a loss that can't be undone" },
      { key: "open",   text: "It just stops, and the reader has to decide" },
      { key: "twist",  text: "With a reveal that changes everything before it" }
    ]
  },

  {
    id: "words",
    text: "When you talk or write, how do you choose your words?",
    answers: [
      { key: "speech", text: "The way people really talk, slang and all" },
      { key: "music",  text: "For their sound: rich and musical" },
      { key: "exact",  text: "The fewest and most exact words I can find" },
      { key: "play",   text: "For fun: puns, riddles and words I make up" }
    ]
  },

  {
    id: "seek",
    text: "What are you really searching for?",
    answers: [
      { key: "spirit",  text: "Something sacred, bigger than all of us" },
      { key: "society", text: "A fairer world" },
      { key: "beauty",  text: "Beauty, before it disappears" },
      { key: "mind",    text: "The truth about how people think and feel" }
    ]
  },

  {
    id: "fame",
    text: "If you wrote a book, what would happen to it in your lifetime?",
    answers: [
      { key: "famous", text: "It's a hit, and strangers know my name" },
      { key: "hidden", text: "Almost nobody reads it until after I'm gone" },
      { key: "banned", text: "It gets banned, attacked or lands me in court" },
      { key: "handed", text: "It's copied or recited from person to person long before it's printed" }
    ]
  },

  {
    id: "cast",
    text: "How many characters do you like a story to have?",
    answers: [
      { key: "one",    text: "Just one voice, speaking to me" },
      { key: "few",    text: "Two or three people, seen up close" },
      { key: "crowd",  text: "Dozens, each with a name and a story" },
      { key: "people", text: "A whole people, across generations" }
    ]
  },

  {
    id: "effect",
    text: "What do you want to feel on the last page?",
    answers: [
      { key: "moral", text: "That I need to rethink something" },
      { key: "laugh", text: "That I've been laughing the whole way" },
      { key: "chill", text: "A chill they can't shake off" },
      { key: "moved", text: "Moved, maybe close to tears" }
    ]
  },

  {
    id: "time",
    text: "How do you like time to move in a story?",
    answers: [
      { key: "line",   text: "Straight ahead, one event after another" },
      { key: "moment", text: "It all happens in a single day or a single moment" },
      { key: "memory", text: "Backward, through memories" },
      { key: "cycle",  text: "In circles: seasons, years and generations" }
    ]
  },


  /* ---------- Long version only (long: true): 25 extra questions ---------- */

  {
    id: "opening",
    long: true,
    text: "Which opening grabs you?",
    answers: [
      { key: "action", text: "In the middle of the action" },
      { key: "place",  text: "With a slow look at a place" },
      { key: "voice",  text: "With a voice saying \"I\"" },
      { key: "idea",   text: "With a bold statement or idea" }
    ]
  },

  {
    id: "enemy",
    long: true,
    text: "What makes the best enemy in a story?",
    answers: [
      { key: "person",  text: "A villain you can name" },
      { key: "society", text: "Unfair rules and the people who enforce them" },
      { key: "self",    text: "The hero's own mind or flaws" },
      { key: "fate",    text: "Time, death, nature or the gods" }
    ]
  },

  {
    id: "length",
    long: true,
    text: "How long do you like your reading?",
    answers: [
      { key: "tiny",  text: "A page or less" },
      { key: "short", text: "Short enough to read in one sitting" },
      { key: "book",  text: "A book of a few hundred pages" },
      { key: "giant", text: "A giant: a thousand pages or many volumes" }
    ]
  },

  {
    id: "talk",
    long: true,
    text: "How much should characters talk?",
    answers: [
      { key: "mostly",   text: "Almost all of it is talk" },
      { key: "balanced", text: "About half talk, half telling" },
      { key: "little",   text: "Very little; mostly description and thought" },
      { key: "none",     text: "Nobody talks; there is one voice speaking" }
    ]
  },

  {
    id: "nature",
    long: true,
    text: "What should nature be in a story?",
    answers: [
      { key: "mirror",   text: "A mirror for the characters' feelings" },
      { key: "force",    text: "A dangerous force to survive" },
      { key: "backdrop", text: "Just the background; people matter more" },
      { key: "sacred",   text: "Something sacred, almost a teacher" }
    ]
  },

  {
    id: "romance",
    long: true,
    text: "What part should love play in a story?",
    answers: [
      { key: "center", text: "It is the whole story" },
      { key: "ruin",   text: "It is a passion that wrecks lives" },
      { key: "side",   text: "A small part; other things matter more" },
      { key: "ideal",  text: "It points to something higher: God, humanity, an ideal" }
    ]
  },

  {
    id: "death",
    long: true,
    text: "How should a story handle death?",
    answers: [
      { key: "center",  text: "It is at the center of the work" },
      { key: "violent", text: "It comes suddenly: battles, duels, murders" },
      { key: "quiet",   text: "Quietly, often offstage" },
      { key: "light",   text: "Lightly, even as a joke" }
    ]
  },

  {
    id: "child",
    long: true,
    text: "What part do children play in the stories you love?",
    answers: [
      { key: "hero",     text: "A child is the main character" },
      { key: "memory",   text: "Remembering childhood" },
      { key: "audience", text: "They're written for children" },
      { key: "none",     text: "Hardly any" }
    ]
  },

  {
    id: "politics",
    long: true,
    text: "How political do you like a story to be?",
    answers: [
      { key: "direct",     text: "Very: name what is wrong, openly" },
      { key: "hidden",     text: "It is there, but hidden in a fable or a code" },
      { key: "background", text: "Politics is only in the background" },
      { key: "none",       text: "Keep politics out of it" }
    ]
  },

  {
    id: "faith",
    long: true,
    text: "What about religion and faith?",
    answers: [
      { key: "devout",  text: "Faith is at the heart of it" },
      { key: "wrestle", text: "I wrestle with belief and doubt" },
      { key: "mock",    text: "I question or mock religion" },
      { key: "absent",  text: "It hardly comes up" }
    ]
  },

  {
    id: "home",
    long: true,
    text: "Where would you most like to live?",
    answers: [
      { key: "home",    text: "In one place nearly all my life" },
      { key: "capital", text: "In the big city, in the middle of things" },
      { key: "road",    text: "On the road, always moving" },
      { key: "abroad",  text: "Far from my homeland" }
    ]
  },

  {
    id: "output",
    long: true,
    text: "If you were a writer, how much would you write in a lifetime?",
    answers: [
      { key: "one",    text: "One great work" },
      { key: "few",    text: "A handful of carefully finished works" },
      { key: "steady", text: "A steady shelf of books" },
      { key: "flood",  text: "An enormous flood of writing" }
    ]
  },

  {
    id: "hook",
    long: true,
    text: "Why do you pick up a book?",
    answers: [
      { key: "thrills",  text: "For the story: I need to know what happens" },
      { key: "laughter", text: "To laugh" },
      { key: "language", text: "For the beauty of the language" },
      { key: "ideas",    text: "For the ideas" }
    ]
  },

  {
    id: "strongest",
    long: true,
    text: "Whose stories do you most want to hear?",
    answers: [
      { key: "women",    text: "Women and girls" },
      { key: "action",   text: "Fighters and people of action" },
      { key: "thinkers", text: "Thinkers, artists and dreamers" },
      { key: "ordinary", text: "Ordinary and poor people" }
    ]
  },

  {
    id: "build",
    long: true,
    text: "Which shape of book do you enjoy most?",
    answers: [
      { key: "straight", text: "Chapters in a straight line" },
      { key: "episodes", text: "A journey: one episode after another" },
      { key: "pieces",   text: "A collection of separate pieces" },
      { key: "layers",   text: "Layers: stories inside stories, letters, puzzles" }
    ]
  },

  {
    id: "title",
    long: true,
    text: "Which kind of title draws you to a book?",
    answers: [
      { key: "name",  text: "The main character's name" },
      { key: "place", text: "A place or a journey" },
      { key: "idea",  text: "An idea or a group of people" },
      { key: "image", text: "An image or a phrase" }
    ]
  },

  {
    id: "sign",
    long: true,
    text: "If you published a book, whose name would go on the cover?",
    answers: [
      { key: "real",      text: "My real name" },
      { key: "pen",       text: "A pen name" },
      { key: "anon",      text: "No name, or my work stays hidden" },
      { key: "tradition", text: "It hardly matters; I am one voice in a long tradition" }
    ]
  },

  {
    id: "peak",
    long: true,
    text: "When do you think you'll do your best work?",
    answers: [
      { key: "young",    text: "Young, before thirty" },
      { key: "middle",   text: "In the middle of my life" },
      { key: "late",     text: "Late in life" },
      { key: "lifelong", text: "All my life long" }
    ]
  },

  {
    id: "pace",
    long: true,
    text: "How fast do you like a story to move?",
    answers: [
      { key: "fast",   text: "Fast" },
      { key: "steady", text: "At a steady walk" },
      { key: "slow",   text: "Slowly, lingering" },
      { key: "still",  text: "It stands still on one image" }
    ]
  },

  {
    id: "self",
    long: true,
    text: "If you wrote a book, how much of it would be your own life?",
    answers: [
      { key: "auto",       text: "Nearly all of it" },
      { key: "disguised",  text: "A lot, in disguise" },
      { key: "researched", text: "Little; I'd study other people's lives" },
      { key: "invented",   text: "None; I'd invent everything" }
    ]
  },

  {
    id: "outlook",
    long: true,
    text: "How do you see the world?",
    answers: [
      { key: "hopeful",     text: "With hope" },
      { key: "dark",        text: "Darkly" },
      { key: "bittersweet", text: "Bittersweet: beauty and loss together" },
      { key: "playful",     text: "As a game to play" }
    ]
  },

  {
    id: "company",
    long: true,
    text: "Who do you like to have around you?",
    answers: [
      { key: "loner",   text: "Nobody; I work alone" },
      { key: "circle",  text: "A close circle of creative friends" },
      { key: "public",  text: "A big public; I like being known" },
      { key: "teacher", text: "Students or followers who learn from me" }
    ]
  },

  {
    id: "heard",
    long: true,
    text: "How do you like to take in a story?",
    answers: [
      { key: "performed", text: "Watching it performed, sung or staged" },
      { key: "aloud",     text: "Listening to it read aloud with a few others" },
      { key: "silent",    text: "Reading it silently, alone" },
      { key: "both",      text: "Both on the page and out loud" }
    ]
  },

  {
    id: "money",
    long: true,
    text: "What part should money play in a story?",
    answers: [
      { key: "plot",    text: "It drives the plot: debts, inheritances, treasure" },
      { key: "poverty", text: "Poverty is the world the characters live in" },
      { key: "hardly",  text: "It is hardly mentioned" },
      { key: "mocked",  text: "Greed is mocked or punished" }
    ]
  },

  {
    id: "creature",
    long: true,
    text: "Which creatures do you like to meet in a story?",
    answers: [
      { key: "monsters", text: "Monsters, ghosts or magical beings" },
      { key: "talking",  text: "Animals that talk or teach a lesson" },
      { key: "observed", text: "Real animals and insects, closely watched" },
      { key: "humans",   text: "Only humans" }
    ]
  },


  /* ---------- Branch questions: used only when linear is false ---------- */

  {
    id: "detour",
    branch: "Big novels",
    none: "My stories never stop for detours",
    text: "Your long novel stops the plot for a whole chapter. What is that chapter about?",
    answers: [
      { key: "history",    text: "How history really works, and why the generals don't control it" },
      { key: "city",       text: "The hidden side of the city: its sewers, its slang, its old streets" },
      { key: "sidekick",   text: "A comic side character who steals the whole show" },
      { key: "argument",   text: "A long, feverish argument about God, guilt and freedom" },
      { key: "plague",     text: "Something impossible that the whole town accepts, like a plague of forgetting" },
      { key: "poetryclub", text: "A poetry contest held by the young cousins in the family garden" }
    ]
  },

  {
    id: "onepage",
    branch: "Short forms",
    none: "One page is never enough for me",
    text: "You have one page to fill. What do you put on it?",
    answers: [
      { key: "iceberg", text: "A scene where the most important thing is never said out loud" },
      { key: "fool",    text: "A portrait of a fool who thinks he's winning, to show what's wrong with everyone" },
      { key: "eight",   text: "Eight carefully matched lines about a ruined city in spring" },
      { key: "sayings", text: "A handful of bold sayings that turn a common belief upside down" }
    ]
  },

  {
    id: "love",
    branch: "Love stories",
    none: "I'd rather leave the love story out",
    text: "Two of your characters are falling for each other. How does it happen?",
    answers: [
      { key: "poems",    text: "They send each other short poems, and the handwriting matters as much as the words" },
      { key: "sparring", text: "They trade sharp remarks at a dance, both too proud to admit anything" },
      { key: "masks",    text: "They meet at a party in disguise, and their first words together form a poem" },
      { key: "station",  text: "One look at a train station, and society makes them pay for it" },
      { key: "waiting",  text: "One of them waits more than fifty years for a second chance" },
      { key: "cousins",  text: "They are cousins who grew up in the same garden, tied together since a former life" }
    ]
  },

  {
    id: "trouble",
    branch: "Writers in trouble",
    none: "My writing keeps me out of trouble",
    text: "Your writing gets you into trouble. What happens?",
    answers: [
      { key: "exile",    text: "I attack the ruler in print and spend years in exile on an island" },
      { key: "prison",   text: "I'm arrested for joining a secret discussion group and sent to a prison camp" },
      { key: "pennames", text: "My essays get banned, so I keep publishing under new pen names" },
      { key: "ignored",  text: "Hardly anyone buys my books, so I pay to print them myself" },
      { key: "demoted",  text: "I speak up for a friend at court and lose my post" }
    ]
  },

  {
    id: "reach",
    branch: "First audience",
    text: "How does your story reach its first audience?",
    answers: [
      { key: "readings",  text: "In monthly parts, and I perform the best scenes on stage myself" },
      { key: "actors",    text: "Live in a theater, with parts written for actors I know" },
      { key: "aloud",     text: "Read aloud to a small circle, one chapter at a time" },
      { key: "anonymous", text: "In print, but without my name on the cover" }
    ]
  },

  {
    id: "war",
    branch: "War on the page",
    none: "War stays out of my stories",
    text: "War comes into your story. What do you show?",
    answers: [
      { key: "chaos",     text: "A huge battle where nobody, not even the generals, knows what is going on" },
      { key: "retreat",   text: "One soldier walking away from it all, told in plain words with no big speeches" },
      { key: "village",   text: "Officers arriving in a village at night to take whoever is left" },
      { key: "field",     text: "A famous lost battle, retraced step by step across the field" },
      { key: "uprisings", text: "A colonel who starts thirty-two uprisings and loses them all" }
    ]
  },

  {
    id: "poem",
    branch: "Poets",
    none: "I don't write poems",
    text: "You write a poem. What shape does it take?",
    answers: [
      { key: "haiku",     text: "Three short lines about one moment on the road" },
      { key: "dashes",    text: "A few short lines full of dashes, kept in a drawer" },
      { key: "longlines", text: "Long, free lines that try to hold a whole country" },
      { key: "ode",       text: "An ode to something ordinary, like an onion or a pair of socks" },
      { key: "hymn",      text: "A song offered like a prayer, which I set to music myself" }
    ]
  },

  {
    id: "song",
    branch: "Ancient songs",
    none: "My words are for the page, not for singing",
    text: "Your words are meant to be sung. What is the song?",
    answers: [
      { key: "moon",   text: "A song to the moon, written with a cup of wine in my hand" },
      { key: "lyre",   text: "A love song for one voice and a lyre" },
      { key: "reed",   text: "Rhyming couplets about longing to return to where the soul came from" },
      { key: "heroes", text: "A long tale of heroes, performed from memory over many nights" }
    ]
  },

  {
    id: "versestory",
    branch: "Stories in verse",
    none: "I wouldn't tell a story in verse",
    text: "You tell a long story in verse. What is it about?",
    answers: [
      { key: "voyage",    text: "A soldier's ten-year journey home from a war" },
      { key: "afterlife", text: "My own journey through hell, purgatory and heaven" },
      { key: "sacrifice", text: "A gifted young woman who gives up her own happiness to save her family" },
      { key: "regret",    text: "A bored young nobleman who turns down a girl's love and regrets it" },
      { key: "bargain",   text: "A scholar who makes a deal with the devil" }
    ]
  },

  {
    id: "stage",
    branch: "On stage",
    none: "I don't write for the stage",
    text: "Your play opens tonight. What will the audience see?",
    answers: [
      { key: "hypocrite", text: "A comedy that mocks a hypocrite, with me in the leading role" },
      { key: "paradox",   text: "A drawing-room comedy in which every line is a witty paradox" },
      { key: "quiet",     text: "A play in which almost nothing happens, and hearts break quietly" },
      { key: "kings",     text: "Kings, clowns and a battle, all in one evening" }
    ]
  },

  {
    id: "strange",
    branch: "Strange stories",
    none: "Nothing impossible happens in my stories",
    text: "Something impossible happens in your story. What is it?",
    answers: [
      { key: "insect",     text: "A man wakes up as a giant insect, and his family is mostly annoyed" },
      { key: "library",    text: "A library that contains every book that could ever be written" },
      { key: "rabbithole", text: "A girl falls down a rabbit hole into a world of nonsense" },
      { key: "heartbeat",  text: "A dead man's heart keeps beating under the floor, louder and louder" },
      { key: "creature",   text: "A scientist brings a creature to life, then runs away from it" }
    ]
  },

  {
    id: "adventure",
    branch: "Adventures",
    none: "My characters mostly stay at home",
    text: "Your heroes set out on an adventure. What kind?",
    answers: [
      { key: "submarine", text: "A voyage in a submarine, with the science worked out" },
      { key: "swords",    text: "Sword fights, loyal friends and a long revenge" },
      { key: "quest",     text: "A quest across a world with its own maps and languages" },
      { key: "knight",    text: "An old man who has read too many adventure books rides out as a knight" },
      { key: "raft",      text: "A boy and a runaway slave on a raft down a great river" }
    ]
  },

  {
    id: "mind",
    branch: "Inside the mind",
    none: "I'd rather show what people do than what they think",
    text: "Your novel goes deep inside one mind. How?",
    answers: [
      { key: "oneday",    text: "One day in a woman's life, told through her drifting thoughts" },
      { key: "styles",    text: "One day in one city, with every chapter in a different style" },
      { key: "cake",      text: "The taste of a small cake brings back a whole childhood" },
      { key: "daydreams", text: "A bored wife's daydreams, in sentences polished for days" },
      { key: "governess", text: "A poor governess tells her own story and speaks straight to the reader" }
    ]
  },

  {
    id: "warning",
    branch: "Stories that warn",
    none: "My stories aren't warnings",
    text: "Your story is a warning. What does it show?",
    answers: [
      { key: "farm",     text: "Farm animals drive out the farmer, and then the pigs take charge" },
      { key: "optimist", text: "A cheerful young man is told all is for the best while disasters pile up" },
      { key: "village",  text: "A village's way of life breaks when outsiders arrive to rule it" },
      { key: "haunted",  text: "A mother haunted by the child she lost to slavery" }
    ]
  },

  {
    id: "secret",
    branch: "Secrets",
    none: "My stories have no secrets",
    text: "Your story hides a secret. How does it come out?",
    answers: [
      { key: "gathering",  text: "The detective gathers everyone in one room and names the culprit" },
      { key: "attic",      text: "A locked room at the top of the great house finally opens" },
      { key: "benefactor", text: "A mysterious gift of money turns out to come from an escaped convict" },
      { key: "portrait",   text: "A hidden painting grows old while its owner stays young" }
    ]
  },

  {
    id: "tales",
    branch: "Stories for children",
    none: "I don't write for children",
    text: "You write a story for children. What is it?",
    answers: [
      { key: "duckling", text: "A fairy tale that is secretly about being an outsider" },
      { key: "boat",     text: "A story made up on the spot for three sisters on a boat trip" },
      { key: "fence",    text: "A boy in a river town who tricks his friends into painting a fence" },
      { key: "dragon",   text: "A bedtime story for my own children about a small creature and a dragon" }
    ]
  },

  {
    id: "exile",
    branch: "Far from home",
    none: "I never have to leave",
    text: "You have to leave your home. Why?",
    answers: [
      { key: "banished", text: "My city banishes me for life over politics" },
      { key: "bastille", text: "I am locked up for my jokes about the powerful, then go abroad" },
      { key: "andes",    text: "The government wants me arrested, so I cross the mountains on horseback" },
      { key: "south",    text: "The ruler dislikes my poems and sends me to the far south" }
    ]
  }

];
