// Editorial question order and answer text. Writer mappings live in writers.js.
var QUIZ_QUESTIONS = [
  {
    "id": "q001",
    "number": 1,
    "text": "Which kind of writing would you most like to try?",
    "answers": [
      {
        "key": "a",
        "text": "A long piece connecting different lives and experiences"
      },
      {
        "key": "b",
        "text": "A brief piece built around one strong impression"
      },
      {
        "key": "c",
        "text": "A personal piece focused on a feeling or moment"
      },
      {
        "key": "d",
        "text": "A piece that unfolds through conversation and action"
      }
    ],
    "long": false
  },
  {
    "id": "q002",
    "number": 2,
    "text": "Where would you look first for a story?",
    "answers": [
      {
        "key": "a",
        "text": "Stories passed down through a family"
      },
      {
        "key": "b",
        "text": "A conflict from history"
      },
      {
        "key": "c",
        "text": "An older story I could make my own"
      },
      {
        "key": "d",
        "text": "Something small that happens in everyday life"
      }
    ],
    "long": false
  },
  {
    "id": "q003",
    "number": 3,
    "text": "How would you build a piece of writing?",
    "answers": [
      {
        "key": "a",
        "text": "Arrange small details so their connections become clear later"
      },
      {
        "key": "b",
        "text": "Follow someone's thoughts as they change"
      },
      {
        "key": "c",
        "text": "Let each new experience open up a wider picture"
      },
      {
        "key": "d",
        "text": "Build the piece around one meaningful image"
      }
    ],
    "long": false
  },
  {
    "id": "q004",
    "number": 4,
    "text": "Which emotional atmosphere draws you in?",
    "answers": [
      {
        "key": "a",
        "text": "Beauty mixed with the sadness of change"
      },
      {
        "key": "b",
        "text": "Guilt and growing tension"
      },
      {
        "key": "c",
        "text": "Strong feelings that remain mostly unspoken"
      },
      {
        "key": "d",
        "text": "A sense of wonder in ordinary life"
      }
    ],
    "long": false
  },
  {
    "id": "q005",
    "number": 5,
    "text": "Whose experience would you put at the center?",
    "answers": [
      {
        "key": "a",
        "text": "Someone treated unfairly or left out"
      },
      {
        "key": "b",
        "text": "Someone learning to understand others better"
      },
      {
        "key": "c",
        "text": "Someone struggling to do what is right"
      },
      {
        "key": "d",
        "text": "Someone living through major changes in society"
      }
    ],
    "long": false
  },
  {
    "id": "q006",
    "number": 6,
    "text": "What kind of humor would you write?",
    "answers": [
      {
        "key": "a",
        "text": "Subtle jokes about manners and relationships"
      },
      {
        "key": "b",
        "text": "Exaggerated characters and ridiculous behavior"
      },
      {
        "key": "c",
        "text": "Sharp humor about unfair or cruel behavior"
      },
      {
        "key": "d",
        "text": "Playful surprises that make familiar rules seem less certain"
      }
    ],
    "long": false
  },
  {
    "id": "q007",
    "number": 7,
    "text": "Which question would drive your work?",
    "answers": [
      {
        "key": "a",
        "text": "What responsibilities do we have toward others?"
      },
      {
        "key": "b",
        "text": "Why do powerful people harm others and get away with it?"
      },
      {
        "key": "c",
        "text": "How does wanting someone or something change us?"
      },
      {
        "key": "d",
        "text": "What happens when people question their community's traditions?"
      }
    ],
    "long": false
  },
  {
    "id": "q008",
    "number": 8,
    "text": "Which setting would you explore?",
    "answers": [
      {
        "key": "a",
        "text": "A busy city where different lives cross paths"
      },
      {
        "key": "b",
        "text": "A familiar place shaped by relationships and expectations"
      },
      {
        "key": "c",
        "text": "A journey across unfamiliar places"
      },
      {
        "key": "d",
        "text": "A landscape discovered by someone passing through"
      }
    ],
    "long": false
  },
  {
    "id": "q009",
    "number": 9,
    "text": "Which narrative voice would you choose?",
    "answers": [
      {
        "key": "a",
        "text": "A storyteller who shares opinions along the way"
      },
      {
        "key": "b",
        "text": "Someone telling their own story who may not be reliable"
      },
      {
        "key": "c",
        "text": "A voice that follows a person's private thoughts"
      },
      {
        "key": "d",
        "text": "A voice that brings a community's shared past to life"
      }
    ],
    "long": false
  },
  {
    "id": "q010",
    "number": 10,
    "text": "What would your sentences aim for?",
    "answers": [
      {
        "key": "a",
        "text": "Clear language with carefully chosen details"
      },
      {
        "key": "b",
        "text": "Flowing sentences that follow thoughts and memories"
      },
      {
        "key": "c",
        "text": "Clever, neatly balanced expressions"
      },
      {
        "key": "d",
        "text": "Rhythm and repeated images that build a feeling"
      }
    ],
    "long": false
  },
  {
    "id": "q011",
    "number": 11,
    "text": "Who would you imagine addressing?",
    "answers": [
      {
        "key": "a",
        "text": "Someone I love or miss"
      },
      {
        "key": "b",
        "text": "People from many different walks of life"
      },
      {
        "key": "c",
        "text": "Someone willing to question familiar beliefs"
      },
      {
        "key": "d",
        "text": "Someone who enjoys discovering connections for themselves"
      }
    ],
    "long": false
  },
  {
    "id": "q012",
    "number": 12,
    "text": "What would you most want your writing to do?",
    "answers": [
      {
        "key": "a",
        "text": "Help people notice suffering and unfairness"
      },
      {
        "key": "b",
        "text": "Show the gap between what people preach and what they do"
      },
      {
        "key": "c",
        "text": "Keep the past alive and explore what it means"
      },
      {
        "key": "d",
        "text": "Explore how people think and experience life"
      }
    ],
    "long": false
  },
  {
    "id": "q013",
    "number": 13,
    "text": "Which pressure would you give your characters?",
    "answers": [
      {
        "key": "a",
        "text": "Money problems and unequal opportunities"
      },
      {
        "key": "b",
        "text": "Conflict or being forced to leave home"
      },
      {
        "key": "c",
        "text": "A clash between family expectations and personal wishes"
      },
      {
        "key": "d",
        "text": "The consequences of something they brought into the world"
      }
    ],
    "long": false
  },
  {
    "id": "q014",
    "number": 14,
    "text": "What would you notice first in a scene?",
    "answers": [
      {
        "key": "a",
        "text": "A small action that reveals someone's character"
      },
      {
        "key": "b",
        "text": "A person struggling with their own thoughts"
      },
      {
        "key": "c",
        "text": "A sign that the season is changing"
      },
      {
        "key": "d",
        "text": "Something ordinary that suddenly seems meaningful"
      }
    ],
    "long": false
  },
  {
    "id": "q015",
    "number": 15,
    "text": "How would you use literary conventions?",
    "answers": [
      {
        "key": "a",
        "text": "Use established forms with care"
      },
      {
        "key": "b",
        "text": "Allow the shape of the writing to follow the thought"
      },
      {
        "key": "c",
        "text": "Play with the rules of a familiar kind of story"
      },
      {
        "key": "d",
        "text": "Use different styles for different parts"
      }
    ],
    "long": false
  },
  {
    "id": "q016",
    "number": 16,
    "text": "Which relationship to the past interests you?",
    "answers": [
      {
        "key": "a",
        "text": "How earlier generations still shape the present"
      },
      {
        "key": "b",
        "text": "What life was like in another period"
      },
      {
        "key": "c",
        "text": "How a distant past gives the present a larger meaning"
      },
      {
        "key": "d",
        "text": "How people remember their own past"
      }
    ],
    "long": false
  },
  {
    "id": "q017",
    "number": 17,
    "text": "What would be your starting material?",
    "answers": [
      {
        "key": "a",
        "text": "Things people say and do around me"
      },
      {
        "key": "b",
        "text": "Ideas and stories that people have passed down over time"
      },
      {
        "key": "c",
        "text": "An unfamiliar possibility and the consequences of exploring it"
      },
      {
        "key": "d",
        "text": "A striking image or a strong feeling"
      }
    ],
    "long": false
  },
  {
    "id": "q018",
    "number": 18,
    "text": "How would the unusual enter your work?",
    "answers": [
      {
        "key": "a",
        "text": "An unexpected event quietly changes what feels normal"
      },
      {
        "key": "b",
        "text": "Unfamiliar experiences belong to a world that feels consistent"
      },
      {
        "key": "c",
        "text": "Events make emotional sense even when they seem unlikely"
      },
      {
        "key": "d",
        "text": "Something from the past returns to trouble the present"
      }
    ],
    "long": false
  },
  {
    "id": "q019",
    "number": 19,
    "text": "Which ending would satisfy your story?",
    "answers": [
      {
        "key": "a",
        "text": "People understand themselves and each other better"
      },
      {
        "key": "b",
        "text": "The reader finally understands what happened"
      },
      {
        "key": "c",
        "text": "A painful loss reveals the consequences of earlier choices"
      },
      {
        "key": "d",
        "text": "Some questions remain open as life goes on"
      }
    ],
    "long": false
  },
  {
    "id": "q020",
    "number": 20,
    "text": "How would you choose your words?",
    "answers": [
      {
        "key": "a",
        "text": "Choose words that sound like everyday speech"
      },
      {
        "key": "b",
        "text": "Choose words partly for how they sound"
      },
      {
        "key": "c",
        "text": "Say a lot with very few words"
      },
      {
        "key": "d",
        "text": "Play with words that have surprising meanings"
      }
    ],
    "long": false
  },
  {
    "id": "q021",
    "number": 21,
    "text": "What would you be searching for on the page?",
    "answers": [
      {
        "key": "a",
        "text": "An understanding of what we owe others"
      },
      {
        "key": "b",
        "text": "A way to express a longing for something beyond everyday life"
      },
      {
        "key": "c",
        "text": "A better understanding of how the past stays with us"
      },
      {
        "key": "d",
        "text": "A reason to question what we think we know"
      }
    ],
    "long": false
  },
  {
    "id": "q022",
    "number": 22,
    "text": "How would you want a work to reach readers?",
    "answers": [
      {
        "key": "a",
        "text": "Through words that gain energy when shared aloud"
      },
      {
        "key": "b",
        "text": "Through a focused experience that holds their attention"
      },
      {
        "key": "c",
        "text": "Through something they can spend time getting absorbed in"
      },
      {
        "key": "d",
        "text": "Through brief passages that reveal more each time they return"
      }
    ],
    "long": false
  },
  {
    "id": "q023",
    "number": 23,
    "text": "How large would your cast be?",
    "answers": [
      {
        "key": "a",
        "text": "One person expressing a feeling to someone"
      },
      {
        "key": "b",
        "text": "A few people explored in depth"
      },
      {
        "key": "c",
        "text": "Many people whose lives connect"
      },
      {
        "key": "d",
        "text": "People whose lives are connected across a long stretch of time"
      }
    ],
    "long": false
  },
  {
    "id": "q024",
    "number": 24,
    "text": "What would you want readers to carry away?",
    "answers": [
      {
        "key": "a",
        "text": "A reason to rethink a familiar belief"
      },
      {
        "key": "b",
        "text": "A better eye for the roles people play in society"
      },
      {
        "key": "c",
        "text": "An uneasy question about who someone really is"
      },
      {
        "key": "d",
        "text": "More compassion for people shaped by painful history"
      }
    ],
    "long": false
  },
  {
    "id": "q025",
    "number": 25,
    "text": "How would time move through your story?",
    "answers": [
      {
        "key": "a",
        "text": "Move forward as the journey unfolds"
      },
      {
        "key": "b",
        "text": "Slow down to explore a short stretch of time"
      },
      {
        "key": "c",
        "text": "Move between the present and remembered moments"
      },
      {
        "key": "d",
        "text": "Show familiar patterns returning as circumstances change"
      }
    ],
    "long": false
  },
  {
    "id": "q026",
    "number": 26,
    "text": "Which opening would you try?",
    "answers": [
      {
        "key": "a",
        "text": "A witty observation about how people behave"
      },
      {
        "key": "b",
        "text": "An unexpected situation presented without much explanation"
      },
      {
        "key": "c",
        "text": "Someone trying to explain or defend their actions"
      },
      {
        "key": "d",
        "text": "A memory that hints at a much bigger story"
      }
    ],
    "long": true
  },
  {
    "id": "q027",
    "number": 27,
    "text": "What kind of opposition would drive the plot?",
    "answers": [
      {
        "key": "a",
        "text": "Unfair rules or people who are difficult to challenge"
      },
      {
        "key": "b",
        "text": "A person refusing to see the truth about themselves"
      },
      {
        "key": "c",
        "text": "Physical danger and difficult conditions"
      },
      {
        "key": "d",
        "text": "An offer of power that makes doing the right thing harder"
      }
    ],
    "long": true
  },
  {
    "id": "q028",
    "number": 28,
    "text": "What size of work appeals to you?",
    "answers": [
      {
        "key": "a",
        "text": "Something brief enough to take in slowly and reflect on"
      },
      {
        "key": "b",
        "text": "Something focused enough to experience in one sitting"
      },
      {
        "key": "c",
        "text": "Something substantial that feels complete on its own"
      },
      {
        "key": "d",
        "text": "Something expansive that develops over a longer stretch"
      }
    ],
    "long": true
  },
  {
    "id": "q029",
    "number": 29,
    "text": "What should dialogue do?",
    "answers": [
      {
        "key": "a",
        "text": "Hint at feelings people cannot say directly"
      },
      {
        "key": "b",
        "text": "Reveal character through wit and social maneuvering"
      },
      {
        "key": "c",
        "text": "Let people argue about what is right"
      },
      {
        "key": "d",
        "text": "Give the story a recognizable everyday voice"
      }
    ],
    "long": true
  },
  {
    "id": "q030",
    "number": 30,
    "text": "What role would nature play?",
    "answers": [
      {
        "key": "a",
        "text": "Draw attention to a brief moment in the natural world"
      },
      {
        "key": "b",
        "text": "Challenge people's strength and patience"
      },
      {
        "key": "c",
        "text": "Bring out memories, longing or loneliness"
      },
      {
        "key": "d",
        "text": "Show what is at risk when people seek too much control"
      }
    ],
    "long": true
  },
  {
    "id": "q031",
    "number": 31,
    "text": "How would you write about love?",
    "answers": [
      {
        "key": "a",
        "text": "Through desire and the feeling of missing someone"
      },
      {
        "key": "b",
        "text": "Through the practical pressures around a relationship"
      },
      {
        "key": "c",
        "text": "Through strong feelings mixed with jealousy or false expectations"
      },
      {
        "key": "d",
        "text": "As a longing for a deeper spiritual connection"
      }
    ],
    "long": true
  },
  {
    "id": "q032",
    "number": 32,
    "text": "How would you approach death?",
    "answers": [
      {
        "key": "a",
        "text": "Explore what the end of life makes people realize"
      },
      {
        "key": "b",
        "text": "Show the human cost of violent conflict"
      },
      {
        "key": "c",
        "text": "Explore an unanswered question that makes people reconsider events"
      },
      {
        "key": "d",
        "text": "Show how the dead still affect the living"
      }
    ],
    "long": true
  },
  {
    "id": "q033",
    "number": 33,
    "text": "How would childhood enter your work?",
    "answers": [
      {
        "key": "a",
        "text": "A young person faces unfairness in the adult world"
      },
      {
        "key": "b",
        "text": "An unfamiliar experience makes everyday rules seem questionable"
      },
      {
        "key": "c",
        "text": "Looking back shows how a person came to be who they are"
      },
      {
        "key": "d",
        "text": "An imaginative tale offers something to readers of different ages"
      }
    ],
    "long": true
  },
  {
    "id": "q034",
    "number": 34,
    "text": "How would politics enter your writing?",
    "answers": [
      {
        "key": "a",
        "text": "Let the relationships within a group reveal how power works"
      },
      {
        "key": "b",
        "text": "Show a community facing outside rule"
      },
      {
        "key": "c",
        "text": "Connect personal suffering with shared history"
      },
      {
        "key": "d",
        "text": "Use humor to question harmful beliefs and customs"
      }
    ],
    "long": true
  },
  {
    "id": "q035",
    "number": 35,
    "text": "How would you handle faith?",
    "answers": [
      {
        "key": "a",
        "text": "As a search for a deeper sense of meaning"
      },
      {
        "key": "b",
        "text": "As a struggle between belief, doubt and responsibility"
      },
      {
        "key": "c",
        "text": "By exposing people who use belief to hide bad behavior"
      },
      {
        "key": "d",
        "text": "By questioning values that people accept without thinking"
      }
    ],
    "long": true
  },
  {
    "id": "q036",
    "number": 36,
    "text": "What kind of place could sustain a whole book?",
    "answers": [
      {
        "key": "a",
        "text": "A city brought to life through ordinary people's routines"
      },
      {
        "key": "b",
        "text": "A shared place where relationships follow complicated rules"
      },
      {
        "key": "c",
        "text": "A route that brings different people and experiences together"
      },
      {
        "key": "d",
        "text": "An unfamiliar place with a convincing sense of identity and history"
      }
    ],
    "long": true
  },
  {
    "id": "q037",
    "number": 37,
    "text": "How would you organize your writing across multiple books or collections?",
    "answers": [
      {
        "key": "a",
        "text": "Keep developing one project as my ideas grow"
      },
      {
        "key": "b",
        "text": "Create connected pieces that explore how experience changes over time"
      },
      {
        "key": "c",
        "text": "Return to familiar characters as they face different situations"
      },
      {
        "key": "d",
        "text": "Try different forms to see what each one lets me express"
      }
    ],
    "long": true
  },
  {
    "id": "q038",
    "number": 38,
    "text": "Why would you want someone to read your work?",
    "answers": [
      {
        "key": "a",
        "text": "To find out what happens next"
      },
      {
        "key": "b",
        "text": "To enjoy clever and funny language"
      },
      {
        "key": "c",
        "text": "To experience a distinctive way of expressing feelings"
      },
      {
        "key": "d",
        "text": "To think through a challenging idea"
      }
    ],
    "long": true
  },
  {
    "id": "q039",
    "number": 39,
    "text": "Whose perspective would you bring forward?",
    "answers": [
      {
        "key": "a",
        "text": "Someone seeking more control over her own life"
      },
      {
        "key": "b",
        "text": "People telling their community's story from within"
      },
      {
        "key": "c",
        "text": "Someone whose freedom and sense of self have been deeply harmed"
      },
      {
        "key": "d",
        "text": "A young person who is excluded or underestimated"
      }
    ],
    "long": true
  },
  {
    "id": "q040",
    "number": 40,
    "text": "Which structure would you choose?",
    "answers": [
      {
        "key": "a",
        "text": "A journey shaped by one encounter after another"
      },
      {
        "key": "b",
        "text": "Different people telling stories within the main story"
      },
      {
        "key": "c",
        "text": "Separate short pieces that form a larger whole"
      },
      {
        "key": "d",
        "text": "A longer story moving between memories and viewpoints"
      }
    ],
    "long": true
  },
  {
    "id": "q041",
    "number": 41,
    "text": "Which title would suit a piece you want to write?",
    "answers": [
      {
        "key": "a",
        "text": "The name of an important character"
      },
      {
        "key": "b",
        "text": "A place or a journey"
      },
      {
        "key": "c",
        "text": "An image whose meaning grows during the story"
      },
      {
        "key": "d",
        "text": "An intriguing idea that invites more than one interpretation"
      }
    ],
    "long": true
  },
  {
    "id": "q042",
    "number": 42,
    "text": "How would you handle the identity of your narrator?",
    "answers": [
      {
        "key": "a",
        "text": "Make the voice feel intimate and personal"
      },
      {
        "key": "b",
        "text": "Let readers wonder whether to trust the storyteller"
      },
      {
        "key": "c",
        "text": "Let the storyteller reflect on how stories are told"
      },
      {
        "key": "d",
        "text": "Let different voices challenge each other's version"
      }
    ],
    "long": true
  },
  {
    "id": "q043",
    "number": 43,
    "text": "How would a character's life unfold?",
    "answers": [
      {
        "key": "a",
        "text": "They grow up while searching for who they want to become"
      },
      {
        "key": "b",
        "text": "Their life forms part of a longer family pattern"
      },
      {
        "key": "c",
        "text": "A crisis makes them reconsider how they have lived"
      },
      {
        "key": "d",
        "text": "A journey changes what home means to them"
      }
    ],
    "long": true
  },
  {
    "id": "q044",
    "number": 44,
    "text": "What pace would suit your work?",
    "answers": [
      {
        "key": "a",
        "text": "Build tension through plans, surprises and setbacks"
      },
      {
        "key": "b",
        "text": "Take time to explore thoughts and feelings"
      },
      {
        "key": "c",
        "text": "Pause over one meaningful moment"
      },
      {
        "key": "d",
        "text": "Keep moving through new events and discoveries"
      }
    ],
    "long": true
  },
  {
    "id": "q045",
    "number": 45,
    "text": "How would personal experience become literature?",
    "answers": [
      {
        "key": "a",
        "text": "Turn memories into an invented story"
      },
      {
        "key": "b",
        "text": "Let a personal voice explore the feeling behind an experience"
      },
      {
        "key": "c",
        "text": "Turn a journey into observations and reflections"
      },
      {
        "key": "d",
        "text": "Build fictional characters from things I notice in real life"
      }
    ],
    "long": true
  },
  {
    "id": "q046",
    "number": 46,
    "text": "Which tension would define your vision?",
    "answers": [
      {
        "key": "a",
        "text": "Beautiful things do not last forever"
      },
      {
        "key": "b",
        "text": "Caring for others can conflict with social expectations"
      },
      {
        "key": "c",
        "text": "Wanting something too much can cloud judgment"
      },
      {
        "key": "d",
        "text": "Ordinary people cannot make sense of the system around them"
      }
    ],
    "long": true
  },
  {
    "id": "q047",
    "number": 47,
    "text": "How would people around a character affect the story?",
    "answers": [
      {
        "key": "a",
        "text": "Their conversations reveal status and hidden assumptions"
      },
      {
        "key": "b",
        "text": "Their disagreements make right and wrong harder to separate"
      },
      {
        "key": "c",
        "text": "Their customs shape what feels normal or acceptable"
      },
      {
        "key": "d",
        "text": "Their memories complicate the main character's version of events"
      }
    ],
    "long": true
  },
  {
    "id": "q048",
    "number": 48,
    "text": "How would you use the sound of language?",
    "answers": [
      {
        "key": "a",
        "text": "Make the words work well when spoken aloud"
      },
      {
        "key": "b",
        "text": "Build momentum through repeating and expanding patterns"
      },
      {
        "key": "c",
        "text": "Make a brief passage feel intimate and musical"
      },
      {
        "key": "d",
        "text": "Repeat sounds to create tension or unease"
      }
    ],
    "long": true
  },
  {
    "id": "q049",
    "number": 49,
    "text": "How would money matter in your story?",
    "answers": [
      {
        "key": "a",
        "text": "It affects who people can marry and how freely they can live"
      },
      {
        "key": "b",
        "text": "It feeds dreams that become costly and disappointing"
      },
      {
        "key": "c",
        "text": "It brings out greed in ways that are funny"
      },
      {
        "key": "d",
        "text": "It reveals how society fails people with very little"
      }
    ],
    "long": true
  },
  {
    "id": "q050",
    "number": 50,
    "text": "Which nonhuman presence would you explore?",
    "answers": [
      {
        "key": "a",
        "text": "An unfamiliar being trying to find acceptance"
      },
      {
        "key": "b",
        "text": "Creatures whose relationships reflect human behavior"
      },
      {
        "key": "c",
        "text": "Creatures whose unexpected behavior challenges familiar assumptions"
      },
      {
        "key": "d",
        "text": "Unfamiliar beings that feel at home in a convincing world"
      }
    ],
    "long": true
  },
  {
    "id": "q051",
    "number": 51,
    "text": "Someone makes an outrageous claim. How would you respond in writing?",
    "answers": [
      {
        "key": "a",
        "text": "Take the claim seriously until its problems become obvious"
      },
      {
        "key": "b",
        "text": "Let people with different views argue about it"
      },
      {
        "key": "c",
        "text": "Explore an invented example in which the claim seems possible"
      },
      {
        "key": "d",
        "text": "Show how pressure from those in power makes people accept it"
      }
    ],
    "long": true
  },
  {
    "id": "q052",
    "number": 52,
    "text": "Which detail could unlock a larger story?",
    "answers": [
      {
        "key": "a",
        "text": "A familiar sensation that brings back a memory"
      },
      {
        "key": "b",
        "text": "An overlooked detail that changes how events fit together"
      },
      {
        "key": "c",
        "text": "A small pattern that seems to repeat over time"
      },
      {
        "key": "d",
        "text": "A familiar saying that takes on new meaning during a crisis"
      }
    ],
    "long": true
  },
  {
    "id": "q053",
    "number": 53,
    "text": "How would you make the familiar feel strange?",
    "answers": [
      {
        "key": "a",
        "text": "Describe a startling change in a calm, ordinary way"
      },
      {
        "key": "b",
        "text": "See familiar words and rules through a child's eyes"
      },
      {
        "key": "c",
        "text": "Look closely at an everyday object until it feels special"
      },
      {
        "key": "d",
        "text": "Use a small detail in nature to change how we see things"
      }
    ],
    "long": true
  },
  {
    "id": "q054",
    "number": 54,
    "text": "What would make a hero's victory complicated?",
    "answers": [
      {
        "key": "a",
        "text": "Winning cannot bring back everything they lost"
      },
      {
        "key": "b",
        "text": "Doing what is right costs them other people's approval"
      },
      {
        "key": "c",
        "text": "Getting revenge changes them in ways they did not expect"
      },
      {
        "key": "d",
        "text": "Reaching their goal has a serious moral cost"
      }
    ],
    "long": true
  },
  {
    "id": "q055",
    "number": 55,
    "text": "How would you portray a woman under social pressure?",
    "answers": [
      {
        "key": "a",
        "text": "Show her holding on to her independence and self-respect"
      },
      {
        "key": "b",
        "text": "Show how security and social expectations limit her options"
      },
      {
        "key": "c",
        "text": "Show the cost of family duty and being used by others"
      },
      {
        "key": "d",
        "text": "Show how unfair standards of beauty damage her sense of worth"
      }
    ],
    "long": true
  },
  {
    "id": "q056",
    "number": 56,
    "text": "What happens when your character's beliefs are tested?",
    "answers": [
      {
        "key": "a",
        "text": "They put family duty ahead of personal happiness"
      },
      {
        "key": "b",
        "text": "They question old beliefs while seeking independence"
      },
      {
        "key": "c",
        "text": "They hold on to noble ideals despite repeated setbacks"
      },
      {
        "key": "d",
        "text": "Their wish for power conflicts with their sense of right and wrong"
      }
    ],
    "long": true
  },
  {
    "id": "q057",
    "number": 57,
    "text": "Which contrast would create meaning in your work?",
    "answers": [
      {
        "key": "a",
        "text": "Large public events and small private moments"
      },
      {
        "key": "b",
        "text": "Polite behavior and hidden intentions"
      },
      {
        "key": "c",
        "text": "Something funny on the surface and painful underneath"
      },
      {
        "key": "d",
        "text": "The official version of events and the community's experience"
      }
    ],
    "long": true
  },
  {
    "id": "q058",
    "number": 58,
    "text": "How would you handle a moral lesson?",
    "answers": [
      {
        "key": "a",
        "text": "Use an imagined tale to show how power changes people"
      },
      {
        "key": "b",
        "text": "Use a funny character to expose false goodness"
      },
      {
        "key": "c",
        "text": "Leave readers thinking about who should take responsibility"
      },
      {
        "key": "d",
        "text": "Let difficult experiences challenge a comforting belief"
      }
    ],
    "long": true
  },
  {
    "id": "q059",
    "number": 59,
    "text": "What kind of ambiguity interests you?",
    "answers": [
      {
        "key": "a",
        "text": "Whether someone understands their own reasons for acting"
      },
      {
        "key": "b",
        "text": "Whether a small event holds a larger meaning"
      },
      {
        "key": "c",
        "text": "Whether a story can change what people accept as real"
      },
      {
        "key": "d",
        "text": "Whether anyone can tell the whole truth about a painful memory"
      }
    ],
    "long": true
  },
  {
    "id": "q060",
    "number": 60,
    "text": "What would make a reader recognize your voice?",
    "answers": [
      {
        "key": "a",
        "text": "Simple language with strong feeling underneath"
      },
      {
        "key": "b",
        "text": "Concentrated language with pauses that leave room for thought"
      },
      {
        "key": "c",
        "text": "An open, welcoming voice that builds a sense of connection"
      },
      {
        "key": "d",
        "text": "Careful details that make unfamiliar experiences feel fully real"
      }
    ],
    "long": true
  },
  {
    "id": "q061",
    "number": 61,
    "text": "What could a letter reveal that a conversation cannot?",
    "answers": [
      {
        "key": "a",
        "text": "Feelings someone finds easier to write than say"
      },
      {
        "key": "b",
        "text": "An attachment that grows harder to manage"
      },
      {
        "key": "c",
        "text": "An account that adds a new perspective to the story"
      },
      {
        "key": "d",
        "text": "Information that changes how someone sees another person"
      }
    ],
    "long": true
  },
  {
    "id": "q062",
    "number": 62,
    "text": "If you interrupted your own story, what would you add?",
    "answers": [
      {
        "key": "a",
        "text": "A personal aside that brings the storyteller closer to the reader"
      },
      {
        "key": "b",
        "text": "Some background that helps explain the wider situation"
      },
      {
        "key": "c",
        "text": "A short example that invites reflection on life's meaning"
      },
      {
        "key": "d",
        "text": "A question about where the story came from and whether to trust it"
      }
    ],
    "long": true
  },
  {
    "id": "q063",
    "number": 63,
    "text": "How would music matter in a scene?",
    "answers": [
      {
        "key": "a",
        "text": "It expresses feelings someone cannot easily say aloud"
      },
      {
        "key": "b",
        "text": "It gives people a way to express trust, gratitude or hope"
      },
      {
        "key": "c",
        "text": "It brings back a feeling of grief or loss"
      },
      {
        "key": "d",
        "text": "It helps people express affection without speaking directly"
      }
    ],
    "long": true
  },
  {
    "id": "q064",
    "number": 64,
    "text": "Which kind of promise could set your plot in motion?",
    "answers": [
      {
        "key": "a",
        "text": "An agreement that offers more than someone can safely handle"
      },
      {
        "key": "b",
        "text": "A promise to stand by a friend during difficult times"
      },
      {
        "key": "c",
        "text": "A duty to family that comes at a personal cost"
      },
      {
        "key": "d",
        "text": "A responsibility that becomes harder to carry over time"
      }
    ],
    "long": true
  },
  {
    "id": "q065",
    "number": 65,
    "text": "How would you use a dream?",
    "answers": [
      {
        "key": "a",
        "text": "Make people question what they value in waking life"
      },
      {
        "key": "b",
        "text": "Let familiar rules turn strange and unpredictable"
      },
      {
        "key": "c",
        "text": "Bring hidden guilt or fear to the surface"
      },
      {
        "key": "d",
        "text": "Let someone feel close to a person they have lost"
      }
    ],
    "long": true
  },
  {
    "id": "q066",
    "number": 66,
    "text": "What might a disguise allow your story to explore?",
    "answers": [
      {
        "key": "a",
        "text": "The chance to rebuild a life while hiding a plan"
      },
      {
        "key": "b",
        "text": "The gap between who someone imagines they are and who they are"
      },
      {
        "key": "c",
        "text": "The misunderstandings that arise when people make assumptions"
      },
      {
        "key": "d",
        "text": "The chance to find out whom someone can really trust"
      }
    ],
    "long": true
  },
  {
    "id": "q067",
    "number": 67,
    "text": "What would a quiet act of generosity mean in your work?",
    "answers": [
      {
        "key": "a",
        "text": "Personal hardship leads to greater concern for others"
      },
      {
        "key": "b",
        "text": "Being shown mercy changes how someone lives"
      },
      {
        "key": "c",
        "text": "Kindness brings people together across social differences"
      },
      {
        "key": "d",
        "text": "Welcoming someone reveals what a community values"
      }
    ],
    "long": true
  },
  {
    "id": "q068",
    "number": 68,
    "text": "How would you treat a character who looks foolish?",
    "answers": [
      {
        "key": "a",
        "text": "Show that an unrealistic dream can still contain courage"
      },
      {
        "key": "b",
        "text": "Show how they explain away things that hurt their pride"
      },
      {
        "key": "c",
        "text": "Show that other people may have judged them unfairly"
      },
      {
        "key": "d",
        "text": "Use gentle humor without taking away their humanity"
      }
    ],
    "long": true
  },
  {
    "id": "q069",
    "number": 69,
    "text": "What would a garden contribute to your writing?",
    "answers": [
      {
        "key": "a",
        "text": "A place where relationships and creative life develop"
      },
      {
        "key": "b",
        "text": "A reminder that everyday action can matter more than grand ideas"
      },
      {
        "key": "c",
        "text": "A place for memory, reflection and a sense of connection"
      },
      {
        "key": "d",
        "text": "A small living space that raises bigger questions about life and loss"
      }
    ],
    "long": true
  },
  {
    "id": "q070",
    "number": 70,
    "text": "Which conflict between duty and feeling would you explore?",
    "answers": [
      {
        "key": "a",
        "text": "Choosing between a loved one's needs and personal happiness"
      },
      {
        "key": "b",
        "text": "Honoring an existing commitment despite new feelings"
      },
      {
        "key": "c",
        "text": "Keeping self-respect when a relationship asks too much"
      },
      {
        "key": "d",
        "text": "Wanting something that conflicts with family and social expectations"
      }
    ],
    "long": true
  },
  {
    "id": "q071",
    "number": 71,
    "text": "What would travel reveal about your traveler?",
    "answers": [
      {
        "key": "a",
        "text": "How carefully they notice places and changes in nature"
      },
      {
        "key": "b",
        "text": "How they respond when reality challenges their ideals"
      },
      {
        "key": "c",
        "text": "How they solve problems and adapt their plans"
      },
      {
        "key": "d",
        "text": "How new experiences change what they believe"
      }
    ],
    "long": true
  },
  {
    "id": "q072",
    "number": 72,
    "text": "How would you make an object feel alive?",
    "answers": [
      {
        "key": "a",
        "text": "Speak to it as if it were a familiar companion"
      },
      {
        "key": "b",
        "text": "Give it a voice and feelings of its own"
      },
      {
        "key": "c",
        "text": "Use it to help explore a deeper question about life"
      },
      {
        "key": "d",
        "text": "Let it reveal something its owner tries to hide"
      }
    ],
    "long": true
  },
  {
    "id": "q073",
    "number": 73,
    "text": "How would a city change the shape of your story?",
    "answers": [
      {
        "key": "a",
        "text": "Bring people with hidden connections into each other's lives"
      },
      {
        "key": "b",
        "text": "Let different people's inner lives cross in a short time"
      },
      {
        "key": "c",
        "text": "Connect everyday experiences with larger, familiar story patterns"
      },
      {
        "key": "d",
        "text": "Make ordinary places part of a system people cannot understand"
      }
    ],
    "long": true
  },
  {
    "id": "q074",
    "number": 74,
    "text": "What would you do with a philosophical claim?",
    "answers": [
      {
        "key": "a",
        "text": "Show what happens when people try to live by it"
      },
      {
        "key": "b",
        "text": "Turn it into a short, challenging statement"
      },
      {
        "key": "c",
        "text": "Let different characters debate what it means"
      },
      {
        "key": "d",
        "text": "Imagine a world where it is taken to its furthest conclusion"
      }
    ],
    "long": true
  },
  {
    "id": "q075",
    "number": 75,
    "text": "Which use of repetition would you choose?",
    "answers": [
      {
        "key": "a",
        "text": "Let similar situations return under different circumstances"
      },
      {
        "key": "b",
        "text": "Repeat a phrase to deepen a strong feeling"
      },
      {
        "key": "c",
        "text": "Build a sense of connection through similar phrases"
      },
      {
        "key": "d",
        "text": "Return to an experience until its deeper meaning becomes clearer"
      }
    ],
    "long": true
  },
  {
    "id": "q076",
    "number": 76,
    "text": "How would you write a gathering of guests?",
    "answers": [
      {
        "key": "a",
        "text": "Let small remarks reveal what people want from each other"
      },
      {
        "key": "b",
        "text": "Show how customs and expectations shape their behavior"
      },
      {
        "key": "c",
        "text": "Use witty conversation to reveal the roles they are playing"
      },
      {
        "key": "d",
        "text": "Show private feelings beneath a public celebration"
      }
    ],
    "long": true
  },
  {
    "id": "q077",
    "number": 77,
    "text": "What would an animal help you say?",
    "answers": [
      {
        "key": "a",
        "text": "A small encounter with nature can change how we see a moment"
      },
      {
        "key": "b",
        "text": "A creature's story can help us reflect on life"
      },
      {
        "key": "c",
        "text": "Relationships between creatures can reveal familiar human weaknesses"
      },
      {
        "key": "d",
        "text": "An encounter with nature can teach both endurance and respect"
      }
    ],
    "long": true
  },
  {
    "id": "q078",
    "number": 78,
    "text": "How would weather enter a poem or scene?",
    "answers": [
      {
        "key": "a",
        "text": "Bad weather reveals how vulnerable people are"
      },
      {
        "key": "b",
        "text": "The atmosphere outside brings back feelings of missing home"
      },
      {
        "key": "c",
        "text": "A storm heightens fear and emotional tension"
      },
      {
        "key": "d",
        "text": "Changes outside quietly reflect changes between people"
      }
    ],
    "long": true
  },
  {
    "id": "q079",
    "number": 79,
    "text": "What would make an outwardly successful person interesting?",
    "answers": [
      {
        "key": "a",
        "text": "They begin to wonder whether they have lived meaningfully"
      },
      {
        "key": "b",
        "text": "Their attractive public image hides troubling choices"
      },
      {
        "key": "c",
        "text": "Their new opportunities bring unfinished feelings back to the surface"
      },
      {
        "key": "d",
        "text": "Their confidence falls apart when they become emotionally vulnerable"
      }
    ],
    "long": true
  },
  {
    "id": "q080",
    "number": 80,
    "text": "How would you show exclusion?",
    "answers": [
      {
        "key": "a",
        "text": "People judge someone before trying to understand them"
      },
      {
        "key": "b",
        "text": "Someone is left out because others dislike how they look"
      },
      {
        "key": "c",
        "text": "Social ideals make someone feel unworthy of being loved"
      },
      {
        "key": "d",
        "text": "Difficult times leave people without a secure place to belong"
      }
    ],
    "long": true
  },
  {
    "id": "q081",
    "number": 81,
    "text": "What would chance do in your plot?",
    "answers": [
      {
        "key": "a",
        "text": "It tempts someone to believe they can control the outcome"
      },
      {
        "key": "b",
        "text": "It disrupts a careful plan and forces people to adapt"
      },
      {
        "key": "c",
        "text": "It brings attention to a detail that changes everything"
      },
      {
        "key": "d",
        "text": "It brings an unexpected encounter that invites deeper reflection"
      }
    ],
    "long": true
  },
  {
    "id": "q082",
    "number": 82,
    "text": "How would other books enter your story?",
    "answers": [
      {
        "key": "a",
        "text": "As a source that makes readers question whose version to trust"
      },
      {
        "key": "b",
        "text": "As an invented example that changes what seems possible"
      },
      {
        "key": "c",
        "text": "As a familiar pattern that gives everyday events another layer"
      },
      {
        "key": "d",
        "text": "As something a character reads that shapes their expectations"
      }
    ],
    "long": true
  },
  {
    "id": "q083",
    "number": 83,
    "text": "How would you write the distance between two people?",
    "answers": [
      {
        "key": "a",
        "text": "Express the strong feeling of someone's absence"
      },
      {
        "key": "b",
        "text": "Let familiar surroundings bring out the feeling of missing someone"
      },
      {
        "key": "c",
        "text": "Let separation become a search for deeper connection"
      },
      {
        "key": "d",
        "text": "Show how time can reverse what two people want from each other"
      }
    ],
    "long": true
  },
  {
    "id": "q084",
    "number": 84,
    "text": "What would a family heirloom or valuable object expose?",
    "answers": [
      {
        "key": "a",
        "text": "How easily a family's security and status can change"
      },
      {
        "key": "b",
        "text": "How strongly someone needs to possess and control things"
      },
      {
        "key": "c",
        "text": "What someone is willing to give up to help others"
      },
      {
        "key": "d",
        "text": "How material security affects the choices people can make"
      }
    ],
    "long": true
  },
  {
    "id": "q085",
    "number": 85,
    "text": "What would you want from a scene of public embarrassment?",
    "answers": [
      {
        "key": "a",
        "text": "Someone says what others have been unwilling to admit"
      },
      {
        "key": "b",
        "text": "A person's claim to goodness is exposed as false"
      },
      {
        "key": "c",
        "text": "Someone realizes they have misjudged another person"
      },
      {
        "key": "d",
        "text": "Someone invents a comforting explanation to protect their pride"
      }
    ],
    "long": true
  },
  {
    "id": "q086",
    "number": 86,
    "text": "How would you write a farewell?",
    "answers": [
      {
        "key": "a",
        "text": "Focus on one small detail that makes the moment memorable"
      },
      {
        "key": "b",
        "text": "Let a personal voice express longing and absence"
      },
      {
        "key": "c",
        "text": "Show how people's feelings and circumstances have changed"
      },
      {
        "key": "d",
        "text": "Suggest that a familiar way of life is coming to an end"
      }
    ],
    "long": true
  },
  {
    "id": "q087",
    "number": 87,
    "text": "What makes an invented place convincing to you?",
    "answers": [
      {
        "key": "a",
        "text": "Its details fit together and suggest a life beyond the page"
      },
      {
        "key": "b",
        "text": "Its practical details make unusual events believable"
      },
      {
        "key": "c",
        "text": "The people who live there make unusual things feel familiar"
      },
      {
        "key": "d",
        "text": "Its everyday habits make relationships and expectations believable"
      }
    ],
    "long": true
  },
  {
    "id": "q088",
    "number": 88,
    "text": "How would a spiritual insight reach the reader?",
    "answers": [
      {
        "key": "a",
        "text": "Through an everyday story that suggests a deeper meaning"
      },
      {
        "key": "b",
        "text": "Through a journey that makes someone reconsider their choices"
      },
      {
        "key": "c",
        "text": "Through an intimate expression of trust, gratitude or hope"
      },
      {
        "key": "d",
        "text": "Through a crisis that changes what someone thinks matters"
      }
    ],
    "long": true
  },
  {
    "id": "q089",
    "number": 89,
    "text": "How would you use a character's talent?",
    "answers": [
      {
        "key": "a",
        "text": "Show how other people may take advantage of it"
      },
      {
        "key": "b",
        "text": "Let it guide their search for an identity"
      },
      {
        "key": "c",
        "text": "Make it drive them to push beyond ordinary limits"
      },
      {
        "key": "d",
        "text": "Show how it affects their place in a social group"
      }
    ],
    "long": true
  },
  {
    "id": "q090",
    "number": 90,
    "text": "What would make a friendship worth writing about?",
    "answers": [
      {
        "key": "a",
        "text": "They remain loyal through conflict and danger"
      },
      {
        "key": "b",
        "text": "They help each other carry a difficult responsibility"
      },
      {
        "key": "c",
        "text": "They challenge each other's way of seeing the world"
      },
      {
        "key": "d",
        "text": "Someone discovers they can feel connected even when alone"
      }
    ],
    "long": true
  },
  {
    "id": "q091",
    "number": 91,
    "text": "How would you handle the reader's sympathy for a wrongdoer?",
    "answers": [
      {
        "key": "a",
        "text": "Show their guilt and the reasons they use to defend themselves"
      },
      {
        "key": "b",
        "text": "Show how an understandable wish for justice can go too far"
      },
      {
        "key": "c",
        "text": "Let their own explanation reveal what they try to hide"
      },
      {
        "key": "d",
        "text": "Show how personal fears and social pressures shape their choices"
      }
    ],
    "long": true
  },
  {
    "id": "q092",
    "number": 92,
    "text": "What would a contrast between appearance and value reveal?",
    "answers": [
      {
        "key": "a",
        "text": "Someone dismissed by others deserves a second look"
      },
      {
        "key": "b",
        "text": "Money and status do not tell us what a person is like"
      },
      {
        "key": "c",
        "text": "An attractive surface can hide harmful behavior"
      },
      {
        "key": "d",
        "text": "The way someone is treated reveals other people's lack of compassion"
      }
    ],
    "long": true
  },
  {
    "id": "q093",
    "number": 93,
    "text": "What would you do when a character cannot speak freely?",
    "answers": [
      {
        "key": "a",
        "text": "Let a creative performance express what they cannot say"
      },
      {
        "key": "b",
        "text": "Let pauses and avoided topics carry the tension"
      },
      {
        "key": "c",
        "text": "Show how those in power limit what can be said"
      },
      {
        "key": "d",
        "text": "Let the reader hear thoughts that remain hidden from others"
      }
    ],
    "long": true
  },
  {
    "id": "q094",
    "number": 94,
    "text": "How would you write a scene of temptation?",
    "answers": [
      {
        "key": "a",
        "text": "Someone is offered a chance to escape ordinary limits"
      },
      {
        "key": "b",
        "text": "Someone believes they have found a shortcut to success"
      },
      {
        "key": "c",
        "text": "Someone is offered power that could solve an immediate problem"
      },
      {
        "key": "d",
        "text": "Someone is drawn toward a more glamorous and satisfying life"
      }
    ],
    "long": true
  },
  {
    "id": "q095",
    "number": 95,
    "text": "How would you place a private sorrow beside the wider world?",
    "answers": [
      {
        "key": "a",
        "text": "Let one person's hardship lead to concern for many others"
      },
      {
        "key": "b",
        "text": "Use a personal struggle to reveal unfair social expectations"
      },
      {
        "key": "c",
        "text": "Connect someone's experience with a much larger shared history"
      },
      {
        "key": "d",
        "text": "Show how an unresolved past continues to shape private lives"
      }
    ],
    "long": true
  },
  {
    "id": "q096",
    "number": 96,
    "text": "What would a skeptical narrator question?",
    "answers": [
      {
        "key": "a",
        "text": "Whether inspiring stories prepare people for real life"
      },
      {
        "key": "b",
        "text": "Whether familiar explanations hide harm or unfairness"
      },
      {
        "key": "c",
        "text": "Whether accepted rules deserve to be followed"
      },
      {
        "key": "d",
        "text": "Whether words mean the same thing in different times and situations"
      }
    ],
    "long": true
  },
  {
    "id": "q097",
    "number": 97,
    "text": "How would you use an encounter with the dead?",
    "answers": [
      {
        "key": "a",
        "text": "To make someone reflect on how they have lived"
      },
      {
        "key": "b",
        "text": "To show that old harm has not been resolved"
      },
      {
        "key": "c",
        "text": "To explore grief that someone cannot let go of"
      },
      {
        "key": "d",
        "text": "To remind someone that strength cannot overcome every limit"
      }
    ],
    "long": true
  },
  {
    "id": "q098",
    "number": 98,
    "text": "What would make a small gesture important?",
    "answers": [
      {
        "key": "a",
        "text": "It shows that someone now understands another person differently"
      },
      {
        "key": "b",
        "text": "It hints at a feeling that remains unspoken"
      },
      {
        "key": "c",
        "text": "It reveals closeness or distance within a social relationship"
      },
      {
        "key": "d",
        "text": "It unexpectedly brings back an earlier experience"
      }
    ],
    "long": true
  },
  {
    "id": "q099",
    "number": 99,
    "text": "How would you show the limits of control?",
    "answers": [
      {
        "key": "a",
        "text": "Someone's plan has consequences they did not intend"
      },
      {
        "key": "b",
        "text": "Unexpected events disrupt a carefully arranged schedule"
      },
      {
        "key": "c",
        "text": "Someone cannot get clear answers from the system controlling their life"
      },
      {
        "key": "d",
        "text": "Other people's power keeps narrowing someone's choices"
      }
    ],
    "long": true
  },
  {
    "id": "q100",
    "number": 100,
    "text": "Which final image would you choose for a piece of your own?",
    "answers": [
      {
        "key": "a",
        "text": "A quiet detail that captures a passing moment"
      },
      {
        "key": "b",
        "text": "Someone choosing useful action over comforting theories"
      },
      {
        "key": "c",
        "text": "An exchange that shows how feelings have changed with time"
      },
      {
        "key": "d",
        "text": "A feeling of longing that suggests a connection beyond the self"
      }
    ],
    "long": true
  }
];
