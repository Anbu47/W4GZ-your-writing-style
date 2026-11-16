// Editorial question order and answer text. Writer mappings live in writers.js.
var QUIZ_QUESTIONS = [
  {
    "id": "q001",
    "number": 1,
    "text": "Which kind of writing would you most like to try?",
    "answers": [
      {
        "key": "a",
        "text": "A wide social novel"
      },
      {
        "key": "b",
        "text": "A short story with a strong effect"
      },
      {
        "key": "c",
        "text": "An intimate lyric poem"
      },
      {
        "key": "d",
        "text": "A play driven by speech and action"
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
        "text": "Family memory and inherited stories"
      },
      {
        "key": "b",
        "text": "A historical conflict"
      },
      {
        "key": "c",
        "text": "An old story I could transform"
      },
      {
        "key": "d",
        "text": "A small incident in ordinary life"
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
        "text": "Plant clues that fit together at the end"
      },
      {
        "key": "b",
        "text": "Follow one person's changing thoughts"
      },
      {
        "key": "c",
        "text": "Build a journey through a larger world"
      },
      {
        "key": "d",
        "text": "Make a brief image carry the meaning"
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
        "text": "Beauty touched by passing time"
      },
      {
        "key": "b",
        "text": "Guilt and mounting psychological pressure"
      },
      {
        "key": "c",
        "text": "Feeling held beneath a restrained surface"
      },
      {
        "key": "d",
        "text": "Wonder woven into everyday life"
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
        "text": "Someone pushed aside by society"
      },
      {
        "key": "b",
        "text": "Someone learning to judge others more fairly"
      },
      {
        "key": "c",
        "text": "Someone wrestling with conscience"
      },
      {
        "key": "d",
        "text": "Someone trying to live through historical upheaval"
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
        "text": "Social irony and polished conversation"
      },
      {
        "key": "b",
        "text": "Exaggerated habits and comic pretence"
      },
      {
        "key": "c",
        "text": "Satire that exposes accepted cruelty"
      },
      {
        "key": "d",
        "text": "Nonsense that makes familiar rules look strange"
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
        "text": "What do I owe other people?"
      },
      {
        "key": "b",
        "text": "How does power justify its harm?"
      },
      {
        "key": "c",
        "text": "What does longing do to a person?"
      },
      {
        "key": "d",
        "text": "What happens when a community's traditions are challenged?"
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
        "text": "A city full of intersecting lives"
      },
      {
        "key": "b",
        "text": "A household shaped by status and relationships"
      },
      {
        "key": "c",
        "text": "A road or sea journey"
      },
      {
        "key": "d",
        "text": "A landscape seen through a traveler's attention"
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
        "text": "A narrator who comments on the story"
      },
      {
        "key": "b",
        "text": "A first person voice whose judgment I might doubt"
      },
      {
        "key": "c",
        "text": "A voice close to the movement of thought"
      },
      {
        "key": "d",
        "text": "A voice carrying a community's memories"
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
        "text": "Restraint and clear physical detail"
      },
      {
        "key": "b",
        "text": "Long movements of thought and memory"
      },
      {
        "key": "c",
        "text": "Epigram and verbal balance"
      },
      {
        "key": "d",
        "text": "Rhythm, repetition and accumulating images"
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
        "text": "One beloved person"
      },
      {
        "key": "b",
        "text": "A broad human community"
      },
      {
        "key": "c",
        "text": "A reader willing to question inherited values"
      },
      {
        "key": "d",
        "text": "A reader willing to solve a literary puzzle"
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
        "text": "Make social suffering visible"
      },
      {
        "key": "b",
        "text": "Expose hypocrisy"
      },
      {
        "key": "c",
        "text": "Preserve and examine historical memory"
      },
      {
        "key": "d",
        "text": "Explore consciousness itself"
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
        "text": "Debt, inheritance or unequal wealth"
      },
      {
        "key": "b",
        "text": "War or displacement"
      },
      {
        "key": "c",
        "text": "Family duty that conflicts with desire"
      },
      {
        "key": "d",
        "text": "Responsibility for something they created"
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
        "text": "A social gesture that gives someone away"
      },
      {
        "key": "b",
        "text": "A mind arguing with itself"
      },
      {
        "key": "c",
        "text": "A seasonal detail"
      },
      {
        "key": "d",
        "text": "An ordinary object suddenly worth a poem"
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
        "text": "Work within a demanding verse form"
      },
      {
        "key": "b",
        "text": "Stretch the freedom of the poetic line"
      },
      {
        "key": "c",
        "text": "Turn a familiar genre against itself"
      },
      {
        "key": "d",
        "text": "Change style to fit each part of the work"
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
        "text": "A society remembered across generations"
      },
      {
        "key": "b",
        "text": "An earlier historical period recreated in detail"
      },
      {
        "key": "c",
        "text": "A legendary world with its own history"
      },
      {
        "key": "d",
        "text": "A recent past recovered through memory"
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
        "text": "Conversation and social observation"
      },
      {
        "key": "b",
        "text": "Myths and older literature"
      },
      {
        "key": "c",
        "text": "A scientific possibility and its consequences"
      },
      {
        "key": "d",
        "text": "A vivid image or emotional moment"
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
        "text": "An impossible event told in a matter of fact voice"
      },
      {
        "key": "b",
        "text": "A carefully developed secondary world"
      },
      {
        "key": "c",
        "text": "A dream with playful but unsettling logic"
      },
      {
        "key": "d",
        "text": "A haunting tied to unresolved human harm"
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
        "text": "A relationship changes after better self-understanding"
      },
      {
        "key": "b",
        "text": "The mystery is explained"
      },
      {
        "key": "c",
        "text": "A loss exposes the cost of earlier choices"
      },
      {
        "key": "d",
        "text": "Life continues beyond an unresolved encounter"
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
        "text": "Use a recognizable spoken voice"
      },
      {
        "key": "b",
        "text": "Make the sounds part of the effect"
      },
      {
        "key": "c",
        "text": "Compress thought into a few charged words"
      },
      {
        "key": "d",
        "text": "Play with puns and unexpected meanings"
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
        "text": "A way to face moral responsibility"
      },
      {
        "key": "b",
        "text": "A language for spiritual longing"
      },
      {
        "key": "c",
        "text": "A way to understand memory"
      },
      {
        "key": "d",
        "text": "A way to question what counts as knowledge"
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
        "text": "Through performance on a stage"
      },
      {
        "key": "b",
        "text": "Through a carefully constructed short tale"
      },
      {
        "key": "c",
        "text": "Through a long, immersive narrative"
      },
      {
        "key": "d",
        "text": "Through poems that reward rereading"
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
        "text": "One lyric speaker addressing someone"
      },
      {
        "key": "b",
        "text": "A small circle under close observation"
      },
      {
        "key": "c",
        "text": "Many connected people in a social world"
      },
      {
        "key": "d",
        "text": "A family whose history crosses generations"
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
        "text": "A doubt about something they took for granted"
      },
      {
        "key": "b",
        "text": "A sharper sense of social pretence"
      },
      {
        "key": "c",
        "text": "An unsettling question about guilt or identity"
      },
      {
        "key": "d",
        "text": "Compassion for people history has wounded"
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
        "text": "Follow a journey from departure onward"
      },
      {
        "key": "b",
        "text": "Expand a single day's experience"
      },
      {
        "key": "c",
        "text": "Move through recollection and association"
      },
      {
        "key": "d",
        "text": "Return to patterns across generations"
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
        "text": "An ironic general claim about social life"
      },
      {
        "key": "b",
        "text": "An impossible event stated without fuss"
      },
      {
        "key": "c",
        "text": "A voice confessing or defending itself"
      },
      {
        "key": "d",
        "text": "A remembered moment that points toward a larger history"
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
        "text": "A corrupt institution or inaccessible authority"
      },
      {
        "key": "b",
        "text": "A person's own self-deception"
      },
      {
        "key": "c",
        "text": "A dangerous journey or physical ordeal"
      },
      {
        "key": "d",
        "text": "A seductive power that tests moral choices"
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
        "text": "A few lines that reward close attention"
      },
      {
        "key": "b",
        "text": "A short tale built around one discovery"
      },
      {
        "key": "c",
        "text": "A self-contained novel"
      },
      {
        "key": "d",
        "text": "An expansive narrative or sequence"
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
        "text": "Reveal what people avoid saying"
      },
      {
        "key": "b",
        "text": "Become a contest of wit and social performance"
      },
      {
        "key": "c",
        "text": "Give competing moral positions a voice"
      },
      {
        "key": "d",
        "text": "Let a distinctive spoken idiom shape the narration"
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
        "text": "Hold a fleeting seasonal perception"
      },
      {
        "key": "b",
        "text": "Test endurance without promising comfort"
      },
      {
        "key": "c",
        "text": "Carry memory, desire or solitude"
      },
      {
        "key": "d",
        "text": "Belong to a world threatened by domination"
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
        "text": "As intimate desire and absence"
      },
      {
        "key": "b",
        "text": "As a relationship shaped by money and judgment"
      },
      {
        "key": "c",
        "text": "As passion entangled with illusion or jealousy"
      },
      {
        "key": "d",
        "text": "As longing that opens toward the divine"
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
        "text": "Make mortality a direct philosophical encounter"
      },
      {
        "key": "b",
        "text": "Show its cost in war and heroic conflict"
      },
      {
        "key": "c",
        "text": "Build a mystery around a killing"
      },
      {
        "key": "d",
        "text": "Let the dead press on the lives of the living"
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
        "text": "A child confronts an unequal adult world"
      },
      {
        "key": "b",
        "text": "A child's adventure overturns ordinary logic"
      },
      {
        "key": "c",
        "text": "Memory follows the formation of a self"
      },
      {
        "key": "d",
        "text": "A fairy tale speaks across age groups"
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
        "text": "Through an invented regime or political fable"
      },
      {
        "key": "b",
        "text": "Through a community facing colonial intrusion"
      },
      {
        "key": "c",
        "text": "Through historical suffering and collective memory"
      },
      {
        "key": "d",
        "text": "Through satire of oppressive assumptions"
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
        "text": "As a journey toward spiritual understanding"
      },
      {
        "key": "b",
        "text": "As a struggle involving doubt and moral responsibility"
      },
      {
        "key": "c",
        "text": "As a target when belief becomes hypocrisy"
      },
      {
        "key": "d",
        "text": "As a set of values to question radically"
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
        "text": "A city mapped through ordinary lives"
      },
      {
        "key": "b",
        "text": "A household with a complex social order"
      },
      {
        "key": "c",
        "text": "A road linking unfamiliar encounters"
      },
      {
        "key": "d",
        "text": "An invented land with deep linguistic history"
      }
    ],
    "long": true
  },
  {
    "id": "q037",
    "number": 37,
    "text": "What shape would you give a larger body of work?",
    "answers": [
      {
        "key": "a",
        "text": "Return to and expand a poetic collection"
      },
      {
        "key": "b",
        "text": "Build a linked sequence around memory and time"
      },
      {
        "key": "c",
        "text": "Develop recurring detectives across separate mysteries"
      },
      {
        "key": "d",
        "text": "Try poetry, drama and fiction"
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
        "text": "To follow an ingenious plot"
      },
      {
        "key": "b",
        "text": "To enjoy verbal comedy"
      },
      {
        "key": "c",
        "text": "To enter a distinctive poetic voice"
      },
      {
        "key": "d",
        "text": "To wrestle with a difficult idea"
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
        "text": "A woman claiming authority over her own life"
      },
      {
        "key": "b",
        "text": "A community described from within its own traditions"
      },
      {
        "key": "c",
        "text": "A person burdened by enslavement and its aftermath"
      },
      {
        "key": "d",
        "text": "A socially excluded child or young person"
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
        "text": "A journey made of successive encounters"
      },
      {
        "key": "b",
        "text": "Stories nested inside other people's accounts"
      },
      {
        "key": "c",
        "text": "A poem sequence or collection of short pieces"
      },
      {
        "key": "d",
        "text": "A novel woven from memory and shifting viewpoints"
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
        "text": "A character's name"
      },
      {
        "key": "b",
        "text": "A journey or destination"
      },
      {
        "key": "c",
        "text": "An image that gathers meaning as the work unfolds"
      },
      {
        "key": "d",
        "text": "A conceptual space or paradox"
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
        "text": "Let a fictional voice sound convincingly personal"
      },
      {
        "key": "b",
        "text": "Keep the storyteller's reliability uncertain"
      },
      {
        "key": "c",
        "text": "Make the narrator comment on storytelling itself"
      },
      {
        "key": "d",
        "text": "Use more than one voice to contest the story"
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
        "text": "Youth leads toward an uncertain adult identity"
      },
      {
        "key": "b",
        "text": "A long family history reveals recurring patterns"
      },
      {
        "key": "c",
        "text": "A crisis forces a reckoning with mortality"
      },
      {
        "key": "d",
        "text": "A quest changes the meaning of home"
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
        "text": "Suspense built through plans and reversals"
      },
      {
        "key": "b",
        "text": "A sustained inward movement"
      },
      {
        "key": "c",
        "text": "A pause around one perception"
      },
      {
        "key": "d",
        "text": "An energetic sequence of discoveries"
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
        "text": "Reshape remembered experience through fiction"
      },
      {
        "key": "b",
        "text": "Use a lyric speaker to explore feeling"
      },
      {
        "key": "c",
        "text": "Transform travel into reflective prose and verse"
      },
      {
        "key": "d",
        "text": "Use observed social life to build invented characters"
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
        "text": "Beauty exists alongside impermanence"
      },
      {
        "key": "b",
        "text": "Human sympathy clashes with accepted social rules"
      },
      {
        "key": "c",
        "text": "Ambition or desire undermines judgment"
      },
      {
        "key": "d",
        "text": "Ordinary people face an incomprehensible system"
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
        "text": "Their conversations expose status and self-deception"
      },
      {
        "key": "b",
        "text": "Their conflicting arguments deepen moral uncertainty"
      },
      {
        "key": "c",
        "text": "Their shared customs give the story its social logic"
      },
      {
        "key": "d",
        "text": "Their memories complicate one person's account"
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
        "text": "Write speech designed for actors"
      },
      {
        "key": "b",
        "text": "Use rhythmic catalogues and a public poetic voice"
      },
      {
        "key": "c",
        "text": "Make a short lyric intimate and songlike"
      },
      {
        "key": "d",
        "text": "Let repeated sounds intensify unease"
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
        "text": "Marriage and inheritance limit people's choices"
      },
      {
        "key": "b",
        "text": "Debt and consumption expose destructive illusions"
      },
      {
        "key": "c",
        "text": "Greed becomes the engine of comedy"
      },
      {
        "key": "d",
        "text": "Poverty exposes failures of social justice"
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
        "text": "A created being asking for recognition"
      },
      {
        "key": "b",
        "text": "Animals used to examine political power"
      },
      {
        "key": "c",
        "text": "Talking creatures that disrupt human logic"
      },
      {
        "key": "d",
        "text": "Fantastic beings in a world with its own mythology"
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
        "text": "Follow its logic until it exposes its own absurdity"
      },
      {
        "key": "b",
        "text": "Turn it into a clash of competing voices"
      },
      {
        "key": "c",
        "text": "Imagine a fictional book that makes it seem plausible"
      },
      {
        "key": "d",
        "text": "Show how institutions make people accept it"
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
        "text": "A taste or sensation that brings the past back"
      },
      {
        "key": "b",
        "text": "A small clue everyone overlooked"
      },
      {
        "key": "c",
        "text": "A family name that keeps returning"
      },
      {
        "key": "d",
        "text": "A proverb whose meaning changes in a crisis"
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
        "text": "Describe an impossible transformation as routine"
      },
      {
        "key": "b",
        "text": "Look at language through a child's logic"
      },
      {
        "key": "c",
        "text": "Give a common object a generous poetic attention"
      },
      {
        "key": "d",
        "text": "Let a brief natural image shift perception"
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
        "text": "Success cannot restore everything that was lost"
      },
      {
        "key": "b",
        "text": "Social approval conflicts with conscience"
      },
      {
        "key": "c",
        "text": "A plan for revenge changes the avenger"
      },
      {
        "key": "d",
        "text": "A great ambition carries a moral cost"
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
        "text": "Let her insist on moral and emotional independence"
      },
      {
        "key": "b",
        "text": "Show the constraints of marriage and property"
      },
      {
        "key": "c",
        "text": "Place her suffering within family duty and exploitation"
      },
      {
        "key": "d",
        "text": "Trace how racist ideals of beauty damage self-perception"
      }
    ],
    "long": true
  },
  {
    "id": "q056",
    "number": 56,
    "text": "What would you do with a borrowed story?",
    "answers": [
      {
        "key": "a",
        "text": "Retell it in a different cultural and poetic form"
      },
      {
        "key": "b",
        "text": "Use an ancient epic as a pattern for modern city life"
      },
      {
        "key": "c",
        "text": "Parody its heroic conventions"
      },
      {
        "key": "d",
        "text": "Reshape a known plot for the stage"
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
        "text": "A vast historical event and an intimate private life"
      },
      {
        "key": "b",
        "text": "A polished social surface and a concealed motive"
      },
      {
        "key": "c",
        "text": "A comic appearance and a painful exclusion"
      },
      {
        "key": "d",
        "text": "An official account and a community's own story"
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
        "text": "Let a fable reveal how power corrupts"
      },
      {
        "key": "b",
        "text": "Use a comic impostor to expose false virtue"
      },
      {
        "key": "c",
        "text": "Ask who bears responsibility rather than supply an easy answer"
      },
      {
        "key": "d",
        "text": "Let a journey test a philosophy against suffering"
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
        "text": "Whether a narrator understands their own motives"
      },
      {
        "key": "b",
        "text": "Whether an ordinary event contains a deeper revelation"
      },
      {
        "key": "c",
        "text": "Whether a fictional world can be distinguished from a text"
      },
      {
        "key": "d",
        "text": "Whether a painful memory can ever have one final account"
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
        "text": "A restrained surface with strong feeling beneath"
      },
      {
        "key": "b",
        "text": "A compressed lyric with disruptive pauses"
      },
      {
        "key": "c",
        "text": "A broad, inclusive voice built from rhythmic lists"
      },
      {
        "key": "d",
        "text": "A densely imagined world shaped by names and languages"
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
        "text": "A declaration of love that arrives at the wrong moment"
      },
      {
        "key": "b",
        "text": "An increasingly consuming emotional attachment"
      },
      {
        "key": "c",
        "text": "Testimony passed through several narrators"
      },
      {
        "key": "d",
        "text": "Information that makes someone revise an earlier judgment"
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
        "text": "A playful aside about the narrator's tastes and memories"
      },
      {
        "key": "b",
        "text": "A historical or social explanation"
      },
      {
        "key": "c",
        "text": "A teaching story that opens into a spiritual reflection"
      },
      {
        "key": "d",
        "text": "A doubt about who really wrote the account"
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
        "text": "A gifted woman's performance carries feelings she cannot freely express"
      },
      {
        "key": "b",
        "text": "Song and lyric become forms of devotional address"
      },
      {
        "key": "c",
        "text": "A repeated sound deepens mourning"
      },
      {
        "key": "d",
        "text": "Verse is exchanged as part of courtship"
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
        "text": "A bargain that tests the limits of human ambition"
      },
      {
        "key": "b",
        "text": "An oath of friendship tested by danger"
      },
      {
        "key": "c",
        "text": "A family obligation that demands personal sacrifice"
      },
      {
        "key": "d",
        "text": "A commitment to carry a burden whose cost keeps growing"
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
        "text": "Frame a household's worldly life within a larger sense of illusion"
      },
      {
        "key": "b",
        "text": "Give a child's adventure a shifting, playful reality"
      },
      {
        "key": "c",
        "text": "Expose a guilty person's moral horror"
      },
      {
        "key": "d",
        "text": "Make a dead beloved seem briefly present to a grieving hero"
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
        "text": "The patient construction of revenge through a new identity"
      },
      {
        "key": "b",
        "text": "The gap between chivalric fantasy and ordinary reality"
      },
      {
        "key": "c",
        "text": "A comic confusion about names and respectability"
      },
      {
        "key": "d",
        "text": "A returning traveler's ability to test loyalty"
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
        "text": "A speaker widens private distress into concern for others"
      },
      {
        "key": "b",
        "text": "An act of mercy unsettles a life governed by punishment"
      },
      {
        "key": "c",
        "text": "Compassion crosses the boundary between a prince and the poor"
      },
      {
        "key": "d",
        "text": "An offer of hospitality reveals the customs of a community"
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
        "text": "Let an absurd ideal coexist with courage and dignity"
      },
      {
        "key": "b",
        "text": "Expose the excuses they use to protect their pride"
      },
      {
        "key": "c",
        "text": "Show how the crowd's judgment can be mistaken"
      },
      {
        "key": "d",
        "text": "Allow the reader to enjoy the narrator's affectionate irony"
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
        "text": "A richly detailed household space for poetry and relationships"
      },
      {
        "key": "b",
        "text": "A practical activity that answers grand philosophical claims"
      },
      {
        "key": "c",
        "text": "A place where childhood recollection and spiritual attention meet"
      },
      {
        "key": "d",
        "text": "A miniature image that opens onto death or uncertainty"
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
        "text": "Protecting a parent at the expense of personal happiness"
      },
      {
        "key": "b",
        "text": "Refusing a powerful attachment because of an existing commitment"
      },
      {
        "key": "c",
        "text": "Preserving self-respect when love demands moral compromise"
      },
      {
        "key": "d",
        "text": "Trying to reconcile erotic desire with family and social expectations"
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
        "text": "Their attention to places, seasons and earlier poets"
      },
      {
        "key": "b",
        "text": "Their ideals repeatedly colliding with what is actually there"
      },
      {
        "key": "c",
        "text": "Their reliance on planning, technology and timetables"
      },
      {
        "key": "d",
        "text": "Their growing need to question a reassuring philosophy"
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
        "text": "Address it as a companion in a generous ode"
      },
      {
        "key": "b",
        "text": "Give it speech and a place in a fairy tale"
      },
      {
        "key": "c",
        "text": "Let it become an image in a spiritual teaching story"
      },
      {
        "key": "d",
        "text": "Let a portrait bear the consequences its subject conceals"
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
        "text": "Streets and businesses connect strangers through hidden histories"
      },
      {
        "key": "b",
        "text": "A single day's routes connect several private consciousnesses"
      },
      {
        "key": "c",
        "text": "Ordinary places acquire correspondences with an ancient epic"
      },
      {
        "key": "d",
        "text": "Offices and courtrooms become parts of an inaccessible system"
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
        "text": "Test it against repeated disasters"
      },
      {
        "key": "b",
        "text": "Present it as a brief, provocative challenge"
      },
      {
        "key": "c",
        "text": "Let passionate characters argue over its consequences"
      },
      {
        "key": "d",
        "text": "Invent a fictional institution or text that takes it to an extreme"
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
        "text": "Names and events return across family generations"
      },
      {
        "key": "b",
        "text": "A refrain intensifies grief and obsession"
      },
      {
        "key": "c",
        "text": "Parallel phrases accumulate into an expansive poetic voice"
      },
      {
        "key": "d",
        "text": "Repeated encounters deepen a spiritual lesson"
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
        "text": "Let manners and small remarks reveal social ambition"
      },
      {
        "key": "b",
        "text": "Make the gathering part of a refined court world"
      },
      {
        "key": "c",
        "text": "Turn conversation into a display of sparkling social pretence"
      },
      {
        "key": "d",
        "text": "Let private grief coexist with the public occasion"
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
        "text": "A bird's call or a frog's movement can transform a brief perception"
      },
      {
        "key": "b",
        "text": "A creature can carry a lesson in a mystical narrative"
      },
      {
        "key": "c",
        "text": "A humanized animal can expose the machinery of power"
      },
      {
        "key": "d",
        "text": "A large fish can be both a worthy opponent and a test of endurance"
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
        "text": "A damaged roof opens into concern for others without shelter"
      },
      {
        "key": "b",
        "text": "A moonlit night awakens homesickness"
      },
      {
        "key": "c",
        "text": "A storm intensifies an encounter with a feared creation"
      },
      {
        "key": "d",
        "text": "Seasonal change gives emotional nuance to court life"
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
        "text": "They discover that social success has concealed an unlived life"
      },
      {
        "key": "b",
        "text": "Their public charm depends on keeping moral damage invisible"
      },
      {
        "key": "c",
        "text": "Their restored wealth allows them to pursue an elaborate reckoning"
      },
      {
        "key": "d",
        "text": "Their practiced sophistication fails when love becomes urgent"
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
        "text": "A person is judged before anyone listens to their story"
      },
      {
        "key": "b",
        "text": "A young person is treated as unworthy because of appearance"
      },
      {
        "key": "c",
        "text": "Racialized beauty standards turn a child's gaze against herself"
      },
      {
        "key": "d",
        "text": "A poet speaks of hardship intensified by war and displacement"
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
        "text": "A promise of secret knowledge tempts someone into destructive gambling"
      },
      {
        "key": "b",
        "text": "A precisely timed journey becomes vulnerable to delays and surprises"
      },
      {
        "key": "c",
        "text": "A small overlooked circumstance eventually unlocks the crime"
      },
      {
        "key": "d",
        "text": "An encounter gives a spiritual teacher a new story to unfold"
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
        "text": "A supposed source that complicates the narrator's authority"
      },
      {
        "key": "b",
        "text": "An imaginary work that changes how reality is understood"
      },
      {
        "key": "c",
        "text": "An ancient epic whose pattern shadows a modern day"
      },
      {
        "key": "d",
        "text": "A reading experience that feeds a character's romantic illusions"
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
        "text": "Let a short lyric make absence intensely present"
      },
      {
        "key": "b",
        "text": "Let homesickness emerge from a familiar natural image"
      },
      {
        "key": "c",
        "text": "Let separation deepen spiritual longing"
      },
      {
        "key": "d",
        "text": "Let time reverse who loves and who refuses"
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
        "text": "The fragility of wealth in a declining household"
      },
      {
        "key": "b",
        "text": "An obsession with possessing and protecting money"
      },
      {
        "key": "c",
        "text": "A costly ornament whose loss becomes an act of compassion"
      },
      {
        "key": "d",
        "text": "An inheritance that changes the choices available to women"
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
        "text": "A child's plain observation punctures collective pretence"
      },
      {
        "key": "b",
        "text": "A stage impostor's false virtue becomes visible"
      },
      {
        "key": "c",
        "text": "A proud person learns that their judgment was mistaken"
      },
      {
        "key": "d",
        "text": "An apparent fool protects his self-image with a private fiction"
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
        "text": "As a brief moment held in seasonal imagery"
      },
      {
        "key": "b",
        "text": "As an intimate address charged with desire and absence"
      },
      {
        "key": "c",
        "text": "As a refusal that reveals how much time has changed"
      },
      {
        "key": "d",
        "text": "As a departure that leaves an old way of life behind"
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
        "text": "Names, languages and histories fit together"
      },
      {
        "key": "b",
        "text": "Technical details make an extraordinary voyage feel possible"
      },
      {
        "key": "c",
        "text": "A town's family stories make marvels feel locally familiar"
      },
      {
        "key": "d",
        "text": "Daily rituals reveal the social order of a court"
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
        "text": "Through a story whose concrete events open into another meaning"
      },
      {
        "key": "b",
        "text": "Through an ordered journey with guides and moral encounters"
      },
      {
        "key": "c",
        "text": "Through a lyric offered as an act of devotion"
      },
      {
        "key": "d",
        "text": "Through a crisis that exposes the emptiness of an earlier life"
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
        "text": "Make musical and poetic gifts vulnerable to exploitation"
      },
      {
        "key": "b",
        "text": "Let artistic aspiration shape the formation of a young self"
      },
      {
        "key": "c",
        "text": "Make an exceptionally gifted mind restless with ordinary limits"
      },
      {
        "key": "d",
        "text": "Show how learning and sensitivity matter in a court's relationships"
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
        "text": "Loyalty survives intrigue, rivalry and danger"
      },
      {
        "key": "b",
        "text": "Companions support each other under the pressure of a quest"
      },
      {
        "key": "c",
        "text": "An unequal pair keeps arguing about the meaning of their adventures"
      },
      {
        "key": "d",
        "text": "Companionship is imaginatively found with the moon and one's shadow"
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
        "text": "Let a guilty mind reveal its excuses and torment"
      },
      {
        "key": "b",
        "text": "Show the appeal and moral danger of long-planned revenge"
      },
      {
        "key": "c",
        "text": "Let a first person defense reveal more than it intends"
      },
      {
        "key": "d",
        "text": "Place a destructive choice within a clash of personal fear and communal change"
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
        "text": "A creature dismissed as ugly is not what others assume"
      },
      {
        "key": "b",
        "text": "Wealth and social position are unreliable guides to character"
      },
      {
        "key": "c",
        "text": "A polished surface can conceal moral corruption"
      },
      {
        "key": "d",
        "text": "A supposedly inferior person exposes society's failure of compassion"
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
        "text": "Let poetry or a musical performance carry the feeling"
      },
      {
        "key": "b",
        "text": "Make pauses and evasions carry the conflict"
      },
      {
        "key": "c",
        "text": "Show how political power restricts the available words"
      },
      {
        "key": "d",
        "text": "Let an interior voice reveal what public behavior conceals"
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
        "text": "A bargain offers experience beyond ordinary human limits"
      },
      {
        "key": "b",
        "text": "A secret about winning at cards promises mastery over chance"
      },
      {
        "key": "c",
        "text": "An instrument of power offers an apparently useful shortcut"
      },
      {
        "key": "d",
        "text": "Romantic fantasies make consumption and escape seem irresistible"
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
        "text": "Move from one damaged home toward compassion for many others"
      },
      {
        "key": "b",
        "text": "Let one woman's suffering expose exploitation and social judgment"
      },
      {
        "key": "c",
        "text": "Connect an intimate story to the history of a continent"
      },
      {
        "key": "d",
        "text": "Let personal memory reveal the lasting harm of enslavement"
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
        "text": "Whether heroic stories offer a reliable map for life"
      },
      {
        "key": "b",
        "text": "Whether society's comforting account conceals cruelty"
      },
      {
        "key": "c",
        "text": "Whether an inherited moral vocabulary deserves obedience"
      },
      {
        "key": "d",
        "text": "Whether the same words mean the same thing in another historical setting"
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
        "text": "To guide a traveler through moral and spiritual consequences"
      },
      {
        "key": "b",
        "text": "To make unresolved historical violence present in a household"
      },
      {
        "key": "c",
        "text": "To turn grief into an obsessive conversation with an absence"
      },
      {
        "key": "d",
        "text": "To show an epic traveler meeting the limits of heroic life"
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
        "text": "It reveals a shift in social understanding"
      },
      {
        "key": "b",
        "text": "It suggests a feeling the dialogue never states"
      },
      {
        "key": "c",
        "text": "It captures the emotional precision of courtly relationships"
      },
      {
        "key": "d",
        "text": "It suddenly brings an earlier life back into consciousness"
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
        "text": "An avenger discovers that his plans harm people beyond their intended targets"
      },
      {
        "key": "b",
        "text": "A timetable is disrupted by distance, weather and accident"
      },
      {
        "key": "c",
        "text": "A legal process proceeds without becoming comprehensible to its accused"
      },
      {
        "key": "d",
        "text": "A woman's choices are repeatedly constrained by others' power"
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
        "text": "A traveler pausing before a small sign of the season"
      },
      {
        "key": "b",
        "text": "A person returning to practical work after philosophical disillusionment"
      },
      {
        "key": "c",
        "text": "A rejected declaration that shows how love has changed over time"
      },
      {
        "key": "d",
        "text": "An image of longing that opens beyond the individual self"
      }
    ],
    "long": true
  }
];

