// Trait profile for the complete quiz. Each answer adds to 0-2 traits: "S+" moves toward the right side of trait S, "S-" toward the left.
// Traits: S size, L where you look, W material, D drive, T tone, V language, C attitude, P time.
var QUIZ_TRAITS = {
  "calibration": {"S":{"mean":-0.0046,"sd":0.1252},"L":{"mean":0.0057,"sd":0.1126},"W":{"mean":-0.0183,"sd":0.1695},"D":{"mean":-0.0014,"sd":0.1139},"T":{"mean":-0.0116,"sd":0.136},"V":{"mean":-0.05,"sd":0.2112},"C":{"mean":0.004,"sd":0.1273},"P":{"mean":-0.0374,"sd":0.155}},
  "order": [
    "S",
    "L",
    "W",
    "D",
    "T",
    "V",
    "C",
    "P"
  ],
  "traits": {
    "S": {
      "name": "Size of your story",
      "left": "Close-up",
      "right": "Wide-angle",
      "phrase": {
        "left": "short, focused pieces",
        "right": "big stories with many lives"
      },
      "clause": {
        "left": "zoom in on one small moment",
        "right": "pull back to show the whole picture"
      },
      "zones": {
        "left": {
          "title": "You are a close-up writer",
          "text": "You like to get very close to one person, one moment or one image. Instead of telling the story of a whole town, you would rather show one woman at one window on one evening, and make that moment feel huge. Readers remember your work because it is sharp and concentrated. You trust that a small thing, seen clearly, can say something big about life.",
          "strength": "Intensity. A few lines from you can hit harder than many pages.",
          "watch": "Your work can feel too small or too private if readers don't get any context.",
          "try": "Write one tiny scene, then add one short paragraph that shows the wider world around it."
        },
        "mid": {
          "title": "You move between close-up and wide-angle",
          "text": "You are comfortable at both distances. You can stay close to one character's moment, and you can also step back to show how many lives connect. This gives your writing a nice rhythm: an intimate scene, then a wider view, then back again. Many great novelists work this way, because readers need both a person to care about and a world to understand.",
          "strength": "Flexibility. You can choose the right distance for each scene.",
          "watch": "Without a clear plan, switching distance too often can make a piece feel unfocused.",
          "try": "Before each scene, decide on purpose: is this a close-up or a wide shot?"
        },
        "right": {
          "title": "You are a wide-angle writer",
          "text": "You think big. You like stories with many people, many places and long stretches of time, where you can show how one life touches another. You are interested in families, cities, societies and history, not just one person's day. Readers come to your work to get lost in a whole world, and they stay because everything turns out to be connected.",
          "strength": "Scope. You can build a world readers can live in for a long time.",
          "watch": "In a big story, readers can lose track of who they should care about.",
          "try": "Pick one character to be the reader's guide, and keep coming back to them."
        }
      }
    },
    "L": {
      "name": "Where you look",
      "left": "Inner world",
      "right": "Outer events",
      "phrase": {
        "left": "stories told from inside the mind",
        "right": "stories full of action and turning points"
      },
      "clause": {
        "left": "follow what people think and feel",
        "right": "keep things happening"
      },
      "zones": {
        "left": {
          "title": "You write from the inside",
          "text": "For you, the most interesting things happen inside people: their thoughts, memories, doubts and secret wishes. A character sitting quietly in a room can be a whole adventure, because you follow every change in their mind. Readers feel that they really know your characters, sometimes better than they know their friends.",
          "strength": "Depth. Your characters feel real and complex.",
          "watch": "If nothing happens on the outside, some readers may feel the story is not moving.",
          "try": "Give your character one outside event that forces a choice, and show how their thoughts react."
        },
        "mid": {
          "title": "You balance thoughts and events",
          "text": "You care about what happens and about how people feel about it. Your stories have events that move the plot, but you also take time to show what those events mean to the people inside them. This balance makes your work easy to follow and still emotionally rich.",
          "strength": "Readers get both a story to follow and people to care about.",
          "watch": "Sometimes the balance can turn into a habit: event, feeling, event, feeling. Break the pattern now and then.",
          "try": "Write one scene with only actions and dialogue, no thoughts, and see what the reader can guess."
        },
        "right": {
          "title": "You write from the outside",
          "text": "You love things to happen: journeys, plans, clues, dangers, surprises. You show character through what people do, not through long explanations of what they feel. Your stories move, and readers keep turning pages to find out what happens next.",
          "strength": "Momentum. Readers find it hard to put your work down.",
          "watch": "If characters only act, readers may not feel close to them.",
          "try": "At the most exciting moment, pause for three sentences inside your hero's head."
        }
      }
    },
    "W": {
      "name": "Your material",
      "left": "Real life",
      "right": "Invented worlds",
      "phrase": {
        "left": "true-to-life stories",
        "right": "stories that open strange doors"
      },
      "clause": {
        "left": "stay close to real life",
        "right": "invent what doesn't exist"
      },
      "zones": {
        "left": {
          "title": "You draw from real life",
          "text": "Your best material is the world around you: real people, real places, real history and the way people actually talk. You notice the small details that make a scene feel true, and you don't need dragons or spaceships to make it interesting. Readers often recognize themselves in your work.",
          "strength": "Truthfulness. Readers believe you.",
          "watch": "Real life can feel ordinary if you only copy it. You still have to choose and shape.",
          "try": "Take a real moment you saw this week and change one thing about it to make it a story."
        },
        "mid": {
          "title": "You mix the real and the strange",
          "text": "You like stories grounded in real life, with one door left open to something strange: a ghost, a coincidence, a dream, a small piece of magic. You make the unusual feel believable because everything around it is so normal. This is a powerful mix, used by writers from Shakespeare to García Márquez.",
          "strength": "Surprise that still feels believable.",
          "watch": "The strange part needs its own rules, even if you never explain them.",
          "try": "Write a normal day in which one impossible thing happens, and let only one person notice."
        },
        "right": {
          "title": "You build invented worlds",
          "text": "Your imagination wants room. You like worlds that don't exist yet: future cities, magic schools, strange creatures, other planets or rules that work differently from ours. You enjoy asking \"what if?\" and following the answer all the way. Readers come to you to escape, and to see their own world from a new angle.",
          "strength": "Originality. You can show readers things they have never imagined.",
          "watch": "A world can become more interesting to you than the people living in it.",
          "try": "Describe your invented world only through one character's ordinary morning."
        }
      }
    },
    "D": {
      "name": "What drives you",
      "left": "Feeling-led",
      "right": "Idea-led",
      "phrase": {
        "left": "emotional pieces",
        "right": "thought-provoking pieces"
      },
      "clause": {
        "left": "lead with feeling",
        "right": "chase a big question"
      },
      "zones": {
        "left": {
          "title": "You write from the heart",
          "text": "You start from a feeling: longing, love, grief, joy, loneliness. You want readers to feel something, not just think about it. Your writing often sounds personal and honest, as if you are speaking to one person you care about. People may forget your plot, but they remember how your words made them feel.",
          "strength": "Emotional power. Your words reach people.",
          "watch": "Strong feeling without shape can turn into vague or repeated emotion.",
          "try": "Name one feeling, then show it only through objects and actions, never by its name."
        },
        "mid": {
          "title": "You join feeling and thought",
          "text": "You care about emotions and about ideas. You might start with a feeling and discover a question inside it, or start with a question and find the human pain behind it. This makes your work moving and meaningful at the same time.",
          "strength": "Readers feel your work and also keep thinking about it.",
          "watch": "Make sure one of the two leads in each piece, so it has a clear center.",
          "try": "Write down the feeling and the question of your next piece in one sentence each."
        },
        "right": {
          "title": "You write from the mind",
          "text": "You are driven by questions: Why do people do this? What is right? What would happen if...? You like to test an idea by putting characters inside it. Your writing makes readers argue, wonder and see something familiar differently. You enjoy cleverness, logic and a good debate.",
          "strength": "Insight. You help readers think in new ways.",
          "watch": "Characters can turn into mouthpieces for ideas if they don't also want things for themselves.",
          "try": "Give the character who carries your big idea one small, very human weakness."
        }
      }
    },
    "T": {
      "name": "Your tone",
      "left": "Serious",
      "right": "Playful",
      "phrase": {
        "left": "serious, intense pieces",
        "right": "witty, playful pieces"
      },
      "clause": {
        "left": "take life's dark side seriously",
        "right": "use humor to tell the truth"
      },
      "zones": {
        "left": {
          "title": "Your tone is serious",
          "text": "You are drawn to weight: danger, guilt, loss, fear, storms, moral choices. You don't look away from hard things, and you give them the attention they deserve. Readers trust your work when they want something honest about the darker parts of life.",
          "strength": "Gravity. You make readers feel that things matter.",
          "watch": "Without any light moments, darkness can become heavy and tiring.",
          "try": "Add one moment of small, real kindness or humor to your darkest scene."
        },
        "mid": {
          "title": "You mix serious and light",
          "text": "You can be serious without being gloomy, and funny without being silly. You know that real life mixes laughter and pain, sometimes in the same minute. This mix makes your characters feel human and your stories feel true.",
          "strength": "Range. You can move readers to laugh and to care.",
          "watch": "Sudden jumps in tone can confuse readers if they come without a reason.",
          "try": "Write a funny scene where the reader slowly realizes something sad is underneath."
        },
        "right": {
          "title": "Your tone is playful",
          "text": "You love wit, irony and surprise. You enjoy funny characters, clever lines and turning the rules upside down. Humor is not just decoration for you: you use it to show what is silly, unfair or false in the world. Readers enjoy your work, and only later notice how much it said.",
          "strength": "Charm. People enjoy reading you and share your lines.",
          "watch": "Jokes can keep readers at a distance when a moment needs real feeling.",
          "try": "In your next funny piece, let one character be completely sincere for one paragraph."
        }
      }
    },
    "V": {
      "name": "Your language",
      "left": "Plain words",
      "right": "Musical words",
      "phrase": {
        "left": "clear, direct pieces",
        "right": "rich, musical pieces"
      },
      "clause": {
        "left": "say a lot with few words",
        "right": "make language sing"
      },
      "zones": {
        "left": {
          "title": "Your language is plain and clear",
          "text": "You like simple, everyday words and sentences that get to the point. You would rather cut a beautiful phrase than let it slow the reader down. Your strength is clarity: people understand you, and the feeling sits under the simple words instead of on top of them.",
          "strength": "Clarity. Every word earns its place.",
          "watch": "Too plain, and your writing can sound flat or all the same.",
          "try": "Allow yourself one striking image per page, and make it count."
        },
        "mid": {
          "title": "You mix plain and musical",
          "text": "You can write clearly when you need to explain, and let the language sing when a moment needs it. You notice how words sound, but you don't let sound take over the meaning. This gives your work a natural voice with moments of real beauty.",
          "strength": "Control. You choose the right style for each moment.",
          "watch": "Make sure your musical moments come at the most important places.",
          "try": "Read your last page aloud and mark the one sentence that should sound the most beautiful."
        },
        "right": {
          "title": "Your language is musical",
          "text": "You love the sound of words: rhythm, repetition, images and lines that work best read aloud. You often choose a word because of how it sounds, not only what it means. Your writing can feel like music or a spell, and readers want to read it twice.",
          "strength": "Beauty. Your words stay in people's heads.",
          "watch": "Beautiful language can hide a story that is not moving forward.",
          "try": "Rewrite one rich paragraph in half the words and see which version you prefer."
        }
      }
    },
    "C": {
      "name": "Your attitude",
      "left": "Empathizer",
      "right": "Challenger",
      "phrase": {
        "left": "warm, understanding pieces",
        "right": "bold pieces that question things"
      },
      "clause": {
        "left": "understand people",
        "right": "question the rules"
      },
      "zones": {
        "left": {
          "title": "You are an empathizer",
          "text": "You want to understand people, even difficult ones. You look for kindness, loyalty, mercy and the reasons behind people's choices. In your stories, the goal is often to see someone more clearly, forgive, or connect across differences. Readers feel less alone after reading you.",
          "strength": "Compassion. You make readers care about people they might ignore.",
          "watch": "Being too gentle can stop you from showing real harm or real conflict.",
          "try": "Give your kindest character one moment where they must say a hard truth."
        },
        "mid": {
          "title": "You understand and question",
          "text": "You care about people and you also question the world they live in. You can show why someone acts badly and still say clearly that it is wrong. This makes your writing fair: it criticizes systems without turning people into cartoons.",
          "strength": "Fairness. Readers trust your judgment.",
          "watch": "Balance can turn into avoiding a clear position. Sometimes you need to take a side.",
          "try": "Write a scene where a character you like makes a choice you disagree with, and don't excuse it."
        },
        "right": {
          "title": "You are a challenger",
          "text": "You notice what is unfair, false or hypocritical, and you want readers to notice it too. You question rules, power, traditions and comfortable beliefs. Your writing can be sharp, funny or angry, but it always asks: why do we accept this? Readers come away seeing the world differently.",
          "strength": "Courage. You say what others avoid.",
          "watch": "If every character is a target, readers may stop caring about anyone.",
          "try": "Give the person or group you criticize one moment where the reader understands them."
        }
      }
    },
    "P": {
      "name": "Your time",
      "left": "Here and now",
      "right": "Memory and history",
      "phrase": {
        "left": "pieces set in the living present",
        "right": "pieces haunted by the past"
      },
      "clause": {
        "left": "stay in the present moment",
        "right": "dig into memory and history"
      },
      "zones": {
        "left": {
          "title": "You live in the present",
          "text": "You are interested in what is happening now: today's people, today's streets, the way people talk and live right now. Your stories feel fresh and immediate, as if they could be happening outside the reader's window.",
          "strength": "Freshness. Your work feels alive and current.",
          "watch": "Without any past, characters can feel like they came from nowhere.",
          "try": "Give your main character one memory that changes how they act today."
        },
        "mid": {
          "title": "You connect past and present",
          "text": "You move easily between now and then. A smell, an object or a song can bring a character's past into the present scene. You understand that people carry their history with them, and you use it without getting lost in it.",
          "strength": "Depth of time. Your characters feel like they have whole lives.",
          "watch": "Flashbacks can slow the story if they come too often.",
          "try": "Limit yourself to one memory per scene, and make it change something."
        },
        "right": {
          "title": "You are drawn to memory and history",
          "text": "The past fascinates you: family stories, old wars, lost worlds, and the way memory changes over time. You believe the past is never really over; it shapes how people live and love today. Your writing often feels rich, layered and a little haunted.",
          "strength": "Meaning. You show how today grew out of yesterday.",
          "watch": "Too much backstory can bury the present-day story.",
          "try": "Tell one historical event only through what one ordinary person ate, wore and feared that day."
        }
      }
    }
  },
  "tags": {
    "q001": {
      "a": "S+",
      "b": "S-",
      "c": "D- S-",
      "d": "L+"
    },
    "q002": {
      "a": "P+",
      "b": "P+ S+",
      "c": "W+",
      "d": "P- S-"
    },
    "q003": {
      "a": "L+",
      "b": "L-",
      "c": "S+",
      "d": "V+ S-"
    },
    "q004": {
      "a": "D- P+",
      "b": "T- L-",
      "c": "L- D-",
      "d": "T+"
    },
    "q005": {
      "a": "C+",
      "b": "C-",
      "c": "D+",
      "d": "S+ P+"
    },
    "q006": {
      "a": "T+",
      "b": "T+",
      "c": "C+ T+",
      "d": "W+ T+"
    },
    "q007": {
      "a": "C- D+",
      "b": "C+",
      "c": "D-",
      "d": "C+ D+"
    },
    "q008": {
      "a": "S+",
      "b": "S-",
      "c": "L+",
      "d": "L+"
    },
    "q009": {
      "a": "T+",
      "b": "D+",
      "c": "L-",
      "d": "P+ S+"
    },
    "q010": {
      "a": "V-",
      "b": "L- V+",
      "c": "T+",
      "d": "V+"
    },
    "q011": {
      "a": "D- S-",
      "b": "S+ C-",
      "c": "C+ D+",
      "d": "D+"
    },
    "q012": {
      "a": "C+",
      "b": "C+ T+",
      "c": "P+",
      "d": "L- D+"
    },
    "q013": {
      "a": "C+ W-",
      "b": "L+ S+",
      "c": "S-",
      "d": "W+ D+"
    },
    "q014": {
      "a": "S-",
      "b": "L-",
      "c": "V+ S-",
      "d": "S- D-"
    },
    "q015": {
      "a": "V-",
      "b": "L-",
      "c": "T+ W+",
      "d": "V+"
    },
    "q016": {
      "a": "P+",
      "b": "P+ W-",
      "c": "P+ S+",
      "d": "P+ L-"
    },
    "q017": {
      "a": "W- P-",
      "b": "P+",
      "c": "W+ D+",
      "d": "D- V+"
    },
    "q018": {
      "a": "W+",
      "b": "W+",
      "c": "W+ D-",
      "d": "P+ W+"
    },
    "q019": {
      "a": "C-",
      "b": "L+",
      "c": "T-",
      "d": "D+"
    },
    "q020": {
      "a": "V-",
      "b": "V+",
      "c": "V- S-",
      "d": "T+"
    },
    "q021": {
      "a": "C- D+",
      "b": "D- V+",
      "c": "P+",
      "d": "C+ D+"
    },
    "q022": {
      "a": "V+",
      "b": "L+",
      "c": "S+",
      "d": "S- V+"
    },
    "q023": {
      "a": "S- D-",
      "b": "S- L-",
      "c": "S+",
      "d": "S+ P+"
    },
    "q024": {
      "a": "C+ D+",
      "b": "C+ T+",
      "c": "D+ L-",
      "d": "C- P+"
    },
    "q025": {
      "a": "L+",
      "b": "S- L-",
      "c": "P+ L-",
      "d": "P+ S+"
    },
    "q026": {
      "a": "T+",
      "b": "W+ L+",
      "c": "L-",
      "d": "P+"
    },
    "q027": {
      "a": "C+",
      "b": "L-",
      "c": "L+",
      "d": "D+"
    },
    "q028": {
      "a": "S-",
      "b": "S-",
      "d": "S+"
    },
    "q029": {
      "a": "L-",
      "b": "T+",
      "c": "D+",
      "d": "V- P-"
    },
    "q030": {
      "a": "S- V+",
      "b": "L+ T-",
      "c": "D- P+",
      "d": "C+ D+"
    },
    "q031": {
      "a": "D-",
      "b": "W-",
      "c": "D- T-",
      "d": "D- V+"
    },
    "q032": {
      "a": "D+",
      "b": "T- C+",
      "c": "D+",
      "d": "P+"
    },
    "q033": {
      "a": "C+",
      "b": "W+",
      "c": "P+ L-",
      "d": "W+ T+"
    },
    "q034": {
      "a": "C+",
      "b": "C+ S+",
      "c": "C- P+",
      "d": "T+ C+"
    },
    "q035": {
      "a": "D-",
      "b": "D+",
      "c": "C+",
      "d": "C+ D+"
    },
    "q036": {
      "a": "W- P-",
      "b": "S-",
      "c": "L+ S+",
      "d": "W+"
    },
    "q037": {
      "a": "S+",
      "b": "P+",
      "c": "L+",
      "d": "V+"
    },
    "q038": {
      "a": "L+",
      "b": "T+",
      "c": "D- V+",
      "d": "D+"
    },
    "q039": {
      "a": "C+",
      "b": "P+ S+",
      "c": "C+ T-",
      "d": "C+"
    },
    "q040": {
      "a": "L+",
      "b": "S+",
      "c": "S-",
      "d": "L- P+"
    },
    "q041": {
      "a": "L-",
      "b": "L+",
      "c": "V+",
      "d": "D+"
    },
    "q042": {
      "a": "L- D-",
      "b": "D+",
      "c": "D+",
      "d": "S+"
    },
    "q043": {
      "a": "L-",
      "b": "P+ S+",
      "c": "D+ L-",
      "d": "L+"
    },
    "q044": {
      "a": "L+",
      "b": "L-",
      "c": "S-",
      "d": "L+"
    },
    "q045": {
      "a": "P+",
      "b": "L- D-",
      "c": "L+",
      "d": "W- P-"
    },
    "q046": {
      "a": "D-",
      "b": "C-",
      "c": "D+",
      "d": "C+"
    },
    "q047": {
      "a": "T+",
      "b": "D+",
      "c": "S+",
      "d": "P+ L-"
    },
    "q048": {
      "a": "V+",
      "b": "V+ S+",
      "c": "V+ S-",
      "d": "V+ T-"
    },
    "q049": {
      "a": "W-",
      "b": "D- T-",
      "c": "T+",
      "d": "C+"
    },
    "q050": {
      "a": "W+ C-",
      "b": "W+ T+",
      "c": "W+",
      "d": "W+"
    },
    "q051": {
      "a": "T+",
      "b": "D+",
      "c": "W+",
      "d": "C+"
    },
    "q052": {
      "a": "P+ L-",
      "b": "L+",
      "c": "P+",
      "d": "S+"
    },
    "q053": {
      "a": "W+",
      "b": "W+ T+",
      "c": "S-",
      "d": "S- V+"
    },
    "q054": {
      "a": "T-",
      "b": "C-",
      "c": "L+ T-",
      "d": "D+"
    },
    "q055": {
      "a": "C-",
      "b": "C+",
      "c": "T-",
      "d": "C+"
    },
    "q056": {
      "a": "C-",
      "b": "C+",
      "c": "D+",
      "d": "D+"
    },
    "q057": {
      "a": "S+",
      "b": "T+",
      "c": "T+",
      "d": "C+ P+"
    },
    "q058": {
      "a": "W+",
      "b": "T+ C+",
      "c": "D+",
      "d": "C+"
    },
    "q059": {
      "a": "L- D+",
      "b": "S-",
      "c": "W+ D+",
      "d": "P+ T-"
    },
    "q060": {
      "a": "V- D-",
      "b": "V+ S-",
      "c": "C-",
      "d": "W+"
    },
    "q061": {
      "a": "D-",
      "b": "D-",
      "c": "L+",
      "d": "L+"
    },
    "q062": {
      "a": "T+",
      "b": "S+",
      "c": "D+",
      "d": "D+"
    },
    "q063": {
      "a": "D-",
      "b": "D-",
      "c": "P+ D-",
      "d": "D-"
    },
    "q064": {
      "a": "W+",
      "b": "C- L+",
      "c": "C-",
      "d": "L+ T-"
    },
    "q065": {
      "a": "D+",
      "b": "W+",
      "c": "L- T-",
      "d": "P+ D-"
    },
    "q066": {
      "a": "L+",
      "b": "D+",
      "c": "T+",
      "d": "L+"
    },
    "q067": {
      "a": "C-",
      "b": "C-",
      "c": "C- S+",
      "d": "S+"
    },
    "q068": {
      "a": "T+",
      "b": "L-",
      "c": "C-",
      "d": "T+ C-"
    },
    "q069": {
      "a": "C-",
      "b": "D+",
      "c": "P+",
      "d": "S- D+"
    },
    "q070": {
      "a": "D-",
      "b": "D-",
      "c": "C-",
      "d": "C+"
    },
    "q071": {
      "a": "S-",
      "b": "D+",
      "c": "L+",
      "d": "D+"
    },
    "q072": {
      "a": "D-",
      "b": "W+",
      "c": "D+",
      "d": "L-"
    },
    "q073": {
      "a": "S+",
      "b": "L-",
      "c": "P+",
      "d": "C+ W+"
    },
    "q074": {
      "a": "L+ D+",
      "b": "D+ S-",
      "c": "D+",
      "d": "W+ D+"
    },
    "q075": {
      "a": "P+",
      "b": "V+",
      "c": "V+",
      "d": "L- P+"
    },
    "q076": {
      "a": "L-",
      "b": "C+",
      "c": "T+",
      "d": "L- D-"
    },
    "q077": {
      "a": "S-",
      "b": "W+",
      "c": "T+ W+",
      "d": "L+"
    },
    "q078": {
      "a": "T-",
      "b": "P+ D-",
      "c": "T-",
      "d": "L-"
    },
    "q079": {
      "a": "D+",
      "b": "C+",
      "c": "P+",
      "d": "L-"
    },
    "q080": {
      "a": "C-",
      "b": "C+",
      "c": "C+ D-",
      "d": "S+"
    },
    "q081": {
      "a": "D+",
      "b": "L+",
      "c": "L+",
      "d": "D+"
    },
    "q082": {
      "a": "D+",
      "b": "W+",
      "c": "P+",
      "d": "L-"
    },
    "q083": {
      "a": "D-",
      "b": "D-",
      "c": "D-",
      "d": "P+"
    },
    "q084": {
      "a": "S+",
      "b": "T-",
      "c": "C-",
      "d": "W-"
    },
    "q085": {
      "a": "C+",
      "b": "C+ T+",
      "c": "C-",
      "d": "L-"
    },
    "q086": {
      "a": "S-",
      "b": "D- V+",
      "c": "P+",
      "d": "P+ S+"
    },
    "q087": {
      "a": "W+",
      "b": "W+",
      "c": "W+",
      "d": "W-"
    },
    "q088": {
      "a": "D+",
      "b": "L+",
      "c": "D-",
      "d": "T-"
    },
    "q089": {
      "a": "C+",
      "b": "L-",
      "c": "L+",
      "d": "S+"
    },
    "q090": {
      "a": "L+",
      "b": "L+ C-",
      "c": "D+",
      "d": "D-"
    },
    "q091": {
      "a": "L-",
      "b": "T-",
      "c": "L-",
      "d": "C+"
    },
    "q092": {
      "a": "C-",
      "b": "C+",
      "c": "C+",
      "d": "C-"
    },
    "q093": {
      "a": "V+",
      "b": "L-",
      "c": "C+",
      "d": "L-"
    },
    "q094": {
      "a": "W+",
      "b": "T+",
      "c": "W+ D+",
      "d": "D-"
    },
    "q095": {
      "a": "C- S+",
      "b": "C+",
      "c": "S+ P+",
      "d": "P+"
    },
    "q096": {
      "a": "T+",
      "b": "C+",
      "c": "C+",
      "d": "D+"
    },
    "q097": {
      "a": "D+",
      "b": "P+ C+",
      "c": "D-",
      "d": "T-"
    },
    "q098": {
      "a": "C-",
      "b": "D-",
      "c": "S-",
      "d": "P+"
    },
    "q099": {
      "a": "D+",
      "b": "L+ T+",
      "c": "C+ W+",
      "d": "C+"
    },
    "q100": {
      "a": "S-",
      "b": "D+",
      "c": "P+",
      "d": "D- V+"
    }
  }
};
