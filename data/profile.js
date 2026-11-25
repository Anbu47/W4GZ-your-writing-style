/*
  QUIZ PROFILE (complete quiz)
  ============================
  The complete quiz has two parts.
  Part 1: 58 sliders. "like" items ask how much you would enjoy a form, kind of story or theme
  (Not for me .. I would love it); "pair" items place you between two sides of a style trait (Both in the middle).
  Each answer is -1..1; a dimension score is the average of its answers.
  Part 2: 10 questions from questions.js, chosen to split the 6 writers closest after part 1.

  dims     23 dimensions: 5 forms, 3 kinds of story, 3 themes, 12 style traits (left/right sides).
  vectors  each writer's position on the 23 dimensions, -1..1 (forms, kinds, themes: 1 = known for it, 0 = some, -1 = not).
  zones    analysis texts for the 4 newer style traits (the other 8 live in traits.js).
*/
var QUIZ_PROFILE = {
  "dims": [
    {"id":"poetry","group":"form","name":"Poetry"},
    {"id":"drama","group":"form","name":"Drama"},
    {"id":"novel","group":"form","name":"Novel"},
    {"id":"short","group":"form","name":"Short stories & tales"},
    {"id":"nonfiction","group":"form","name":"Non-fiction"},
    {"id":"speculative","group":"kind","name":"Fantasy & sci-fi"},
    {"id":"suspense","group":"kind","name":"Mystery, crime & horror"},
    {"id":"young","group":"kind","name":"Young readers & fairy tales"},
    {"id":"love","group":"theme","name":"Love & longing"},
    {"id":"nature","group":"theme","name":"Nature, places & journeys"},
    {"id":"faith","group":"theme","name":"Faith, the soul & meaning"},
    {"id":"S","group":"style","name":"Size of your story","left":"Close-up","right":"Wide-angle"},
    {"id":"L","group":"style","name":"Where you look","left":"Inner world","right":"Outer events"},
    {"id":"W","group":"style","name":"Your material","left":"Real life","right":"Invented worlds"},
    {"id":"D","group":"style","name":"What drives you","left":"Feeling-led","right":"Idea-led"},
    {"id":"T","group":"style","name":"Your tone","left":"Serious","right":"Playful"},
    {"id":"V","group":"style","name":"Your language","left":"Plain words","right":"Musical words"},
    {"id":"C","group":"style","name":"Your attitude","left":"Empathizer","right":"Challenger"},
    {"id":"P","group":"style","name":"Your time","left":"Here and now","right":"Memory and history"},
    {"id":"R","group":"style","name":"Your shape","left":"Free flow","right":"Set patterns"},
    {"id":"I","group":"style","name":"Your voice","left":"My own \"I\"","right":"Characters"},
    {"id":"A","group":"style","name":"What pulls readers","left":"Mood","right":"Plot"},
    {"id":"E","group":"style","name":"Your endings","left":"Dark","right":"Hopeful"}
  ],
  "items": [
    {"type":"like","d":"young","text":"Writing for children or teenagers"},
    {"type":"pair","d":"T","text":"I would rather make readers…","left":"feel the weight of things","right":"laugh or smile"},
    {"type":"pair","d":"R","text":"My ideal piece would have…","left":"a loose, free shape","right":"a careful, planned shape"},
    {"type":"like","d":"love","text":"Writing about love and longing"},
    {"type":"pair","d":"L","text":"My characters would show who they are through…","left":"their thoughts","right":"their actions"},
    {"type":"pair","d":"A","text":"What matters more to me is…","left":"the mood and feeling","right":"what happens next"},
    {"type":"like","d":"faith","text":"Writing about faith, the soul and the meaning of life"},
    {"type":"pair","d":"W","text":"My stories would feel…","left":"true to everyday life","right":"strange, magical or impossible"},
    {"type":"pair","d":"T","text":"My writing would be closer to…","left":"a quiet drama","right":"a comedy"},
    {"type":"like","d":"love","text":"Writing about falling in love, missing someone or heartbreak"},
    {"type":"pair","d":"R","text":"Patterns and formulas feel…","left":"like a cage","right":"like a helpful frame"},
    {"type":"pair","d":"V","text":"I would rather my writing sounds like…","left":"everyday speech","right":"a song"},
    {"type":"like","d":"novel","text":"Writing a long novel"},
    {"type":"pair","d":"W","text":"I would rather write about…","left":"the world as it is","right":"worlds that don't exist"},
    {"type":"pair","d":"S","text":"I would rather write about…","left":"one person's single day","right":"many lives across many years"},
    {"type":"like","d":"speculative","text":"Writing fantasy or science fiction"},
    {"type":"pair","d":"R","text":"I would rather write…","left":"freely, without rules","right":"with rules like rhyme or a set structure"},
    {"type":"pair","d":"P","text":"My stories would happen…","left":"now","right":"long ago, or in memory"},
    {"type":"like","d":"poetry","text":"Writing poetry"},
    {"type":"pair","d":"D","text":"I want readers to finish my work…","left":"moved","right":"thinking"},
    {"type":"pair","d":"S","text":"My stories would focus on…","left":"one small moment","right":"a whole family, city or era"},
    {"type":"like","d":"suspense","text":"Writing mystery, crime or horror"},
    {"type":"pair","d":"I","text":"I would rather share…","left":"my own thoughts","right":"other people's stories"},
    {"type":"pair","d":"P","text":"I would rather write about…","left":"today's world","right":"the past and memory"},
    {"type":"like","d":"short","text":"Writing short stories or tales"},
    {"type":"pair","d":"V","text":"I care most that my sentences…","left":"are easy to understand","right":"sound beautiful"},
    {"type":"pair","d":"L","text":"I would rather show…","left":"what people think and feel inside","right":"what people say and do"},
    {"type":"like","d":"drama","text":"Writing a play for the stage"},
    {"type":"pair","d":"I","text":"My writing would speak…","left":"as myself, \"I\"","right":"through invented characters"},
    {"type":"pair","d":"P","text":"My ideas come more from…","left":"what is happening around me now","right":"memories and history"},
    {"type":"like","d":"nature","text":"Describing landscapes, seasons or a long journey"},
    {"type":"pair","d":"V","text":"My words would be…","left":"plain and clear","right":"rich and musical"},
    {"type":"pair","d":"A","text":"I would rather write stories with…","left":"quiet moments where little happens","right":"lots of events and twists"},
    {"type":"like","d":"novel","text":"Working on one big story for months, chapter by chapter"},
    {"type":"pair","d":"L","text":"My favourite scenes would be…","left":"quiet moments inside someone's head","right":"moments full of action and talk"},
    {"type":"pair","d":"C","text":"My writing would mostly…","left":"comfort and connect people","right":"question and challenge"},
    {"type":"like","d":"young","text":"Writing a fairy tale or an adventure for young readers"},
    {"type":"pair","d":"W","text":"I am more drawn to…","left":"ordinary people and places","right":"the impossible and the unknown"},
    {"type":"pair","d":"A","text":"Readers would keep reading for…","left":"the atmosphere","right":"the story"},
    {"type":"like","d":"nonfiction","text":"Writing about real people, real events or your own life"},
    {"type":"pair","d":"E","text":"At the end, I would rather readers feel…","left":"sad, or left with questions","right":"warm and hopeful"},
    {"type":"pair","d":"C","text":"Faced with something unfair, my writing would…","left":"help people understand each other","right":"speak out against it"},
    {"type":"like","d":"faith","text":"Exploring big questions: why we are here and what matters"},
    {"type":"pair","d":"I","text":"In my writing, readers would mostly hear…","left":"my own voice","right":"the voices of characters"},
    {"type":"pair","d":"D","text":"When I write, I am mostly trying to…","left":"share a feeling","right":"explore an idea"},
    {"type":"like","d":"nature","text":"Writing about nature, places and journeys"},
    {"type":"pair","d":"S","text":"I would rather zoom…","left":"in, on tiny details","right":"out, to the big picture"},
    {"type":"pair","d":"E","text":"I would rather leave readers…","left":"unsettled","right":"with hope"},
    {"type":"like","d":"drama","text":"Writing scenes and dialogue for actors to perform"},
    {"type":"pair","d":"T","text":"My writing would mostly be…","left":"serious","right":"funny"},
    {"type":"pair","d":"D","text":"I usually start from…","left":"a feeling","right":"an idea or a question"},
    {"type":"like","d":"nonfiction","text":"Writing non-fiction: essays, articles or memoir"},
    {"type":"pair","d":"C","text":"I would rather…","left":"understand people","right":"criticise unfair rules and power"},
    {"type":"pair","d":"E","text":"My endings would be…","left":"sad or open","right":"hopeful"},
    {"type":"like","d":"poetry","text":"Spending an afternoon shaping one short poem"},
    {"type":"like","d":"suspense","text":"Keeping readers guessing with secrets, clues or fear"},
    {"type":"like","d":"short","text":"Finishing a complete story in just a few pages"},
    {"type":"like","d":"speculative","text":"Inventing magic, future worlds or creatures that don't exist"}
  ],
  "vectors": {
    "dickens": [-1,-1,1,0,0,-1,-1,-1,0,-1,-1,0.87,0.01,-0.4,0.27,-0.06,0.37,0.81,-0.79,-0.25,0.6,0.52,0.59],
    "murasaki": [0,-1,1,-1,0,-1,-1,-1,1,0,0,-0.55,0.11,-0.58,-0.11,0.61,0.94,0.3,0.3,-0.25,0.05,-0.58,-0.6],
    "austen": [-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,-0.79,-0.69,-0.83,0.27,0.77,-0.75,-0.38,-0.79,0.44,0.6,-0.05,0.87],
    "shakespeare": [1,1,-1,-1,-1,0,-1,-1,1,0,0,0.49,-0.55,0.9,0.83,0.54,0.64,0.19,0.82,0.83,0.6,0.52,-0.01],
    "dostoevsky": [-1,-1,1,0,0,-1,0,-1,0,-1,1,0.33,-0.92,-0.83,0.92,-0.8,-0.2,-0.88,-0.28,-0.76,0.6,-0.05,-0.01],
    "hemingway": [-1,-1,1,1,0,-1,-1,-1,0,1,-1,0.05,0.49,-0.48,-0.84,-0.74,-0.58,-0.63,-0.42,-0.76,0.05,-0.05,-0.88],
    "tolstoy": [-1,-1,1,0,1,-1,-1,-1,1,1,1,0.9,-0.21,-0.4,0.84,-0.62,-0.75,-0.69,-0.03,-0.76,0.6,-0.05,-0.01],
    "garcia-marquez": [-1,-1,1,0,0,0,-1,-1,1,0,-1,0.79,0.33,0.29,0.06,-0.92,-0.75,0.05,0.94,-0.76,0.05,-0.58,-0.6],
    "hugo": [1,0,1,-1,0,-1,-1,-1,0,0,1,0.59,-0.21,0.15,-0.38,0.26,0.94,0.44,0.3,0.44,0.6,0.52,-0.01],
    "lu-xun": [-1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,-0.96,-0.55,-0.83,0.33,0.13,0.37,0.91,-0.79,-0.76,0.05,-0.05,-0.88],
    "nietzsche": [0,-1,-1,-1,1,-1,-1,-1,-1,1,1,-0.84,-0.41,-0.83,0.92,0.13,0.23,0.96,-0.79,-0.94,-0.95,-0.86,-0.01],
    "du-fu": [1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,0.55,0.55,-0.85,0,-0.85,0.55,0.85,0.55,0.85,-0.55,-0.55,-0.85],
    "homer": [1,-1,-1,-1,-1,0,-1,-1,0,1,0,0.68,0.91,0.15,-0.87,-0.74,-0.75,0.19,-0.18,0.83,0.6,0.83,-0.01],
    "sappho": [1,-1,-1,-1,-1,-1,-1,-1,1,0,0,-0.85,-0.85,-0.55,-0.85,-0.55,0.85,-0.55,0,0.85,-0.85,-0.85,-0.55],
    "dante": [1,-1,-1,-1,0,0,-1,-1,1,-1,1,0.79,0.87,-0.12,-0.49,0.44,-0.29,-0.63,0.45,0.83,-0.84,0.52,0.87],
    "cervantes": [0,0,1,1,-1,-1,-1,-1,0,1,-1,-0.17,0.19,0.58,0.9,0.78,0.12,0.47,-0.28,-0.76,0.6,0.52,-0.01],
    "li-bai": [1,-1,-1,-1,-1,0,-1,-1,0,1,0,0.55,0.55,0.55,-0.55,0.85,0.85,0.55,-0.55,0,-0.85,-0.55,0.55],
    "basho": [1,-1,-1,-1,1,-1,-1,-1,-1,1,0,-0.85,0.55,-0.85,-0.55,0,-0.55,-0.55,-0.85,0.85,-0.55,-0.85,0],
    "rumi": [1,-1,-1,-1,0,-1,-1,-1,1,0,1,0,-0.85,0,-0.55,0.55,0.85,-0.85,0,0.55,-0.55,-0.85,0.85],
    "nguyen-du": [1,-1,0,-1,-1,-1,-1,-1,1,0,1,-0.67,-0.09,0.15,-0.95,-0.48,0.69,0.05,0.3,0.83,0.6,0.52,-0.01],
    "cao-xueqin": [0,-1,1,-1,-1,0,-1,-1,1,0,1,0.47,-0.41,0.05,-0.03,0.95,0.58,0.05,0.7,-0.25,0.6,-0.58,-0.88],
    "goethe": [1,1,1,-1,0,0,-1,-1,1,1,1,0.21,-0.74,0.78,-0.24,-0.48,0.63,0.19,-0.03,0.44,-0.53,-0.58,-0.01],
    "voltaire": [0,0,0,1,1,-1,-1,-1,-1,-1,0,0.43,0.83,-0.83,0.64,0.8,-0.07,0.92,-0.79,-0.25,0.05,0.52,0.59],
    "moliere": [0,1,-1,-1,-1,-1,-1,-1,0,-1,0,0.05,0.76,0.15,-0.4,0.91,0.94,0.81,0.17,0.83,0.6,0.52,0.87],
    "mary-shelley": [-1,-1,1,0,0,1,0,-1,0,1,0,0.57,0.33,0.76,0.89,-0.92,-0.75,-0.83,-0.28,-0.25,0.05,0.52,-0.88],
    "charlotte-bronte": [0,-1,1,-1,-1,-1,-1,-1,1,0,0,-0.34,-0.98,-0.58,-0.53,-0.6,-0.75,-0.37,-0.79,-0.25,-0.53,0.52,0.59],
    "poe": [1,-1,-1,1,0,0,1,-1,1,-1,-1,-0.55,-0.79,-0.83,0.76,-0.37,0.94,-0.71,0.06,0.83,-0.53,-0.05,-0.88],
    "dickinson": [1,-1,-1,-1,-1,-1,-1,-1,0,1,1,-0.85,-0.85,-0.55,0.55,-0.55,0.55,0,0,0.55,-0.85,-0.85,-0.55],
    "whitman": [1,-1,-1,-1,0,-1,-1,-1,0,1,0,0.85,0.55,-0.85,-0.55,0.55,0.55,0.55,-0.85,-0.85,-0.85,-0.85,0.85],
    "twain": [-1,-1,1,1,1,-1,-1,0,-1,1,-1,-0.17,-0.21,-0.83,-0.4,-0.21,-0.75,-0.09,-0.79,-0.76,0.05,0.52,-0.01],
    "andersen": [0,-1,-1,1,0,0,-1,1,0,0,0,-0.79,0.76,0.9,-0.4,0.61,0.58,0.34,-0.79,0.44,0.6,-0.05,-0.01],
    "carroll": [0,-1,1,-1,-1,1,-1,1,-1,-1,-1,-0.4,0.72,0.82,-0.05,0.84,0.23,-0.31,-0.79,0.44,0.6,0.52,0.59],
    "verne": [-1,-1,1,-1,-1,1,-1,0,-1,1,-1,0.83,0.87,0.71,-0.44,0.95,-0.75,-0.95,-0.03,0.44,0.6,0.83,0.87],
    "dumas": [-1,0,1,-1,0,-1,-1,-1,1,0,-1,0.86,0.84,-0.83,0.06,0.3,-0.75,-0.71,0.97,0.44,0.6,0.83,0.59],
    "chekhov": [-1,1,-1,1,-1,-1,-1,-1,0,0,-1,-0.67,-0.94,-0.83,0.17,0.13,-0.07,0.4,-0.44,-0.76,0.6,-0.86,-0.6],
    "pushkin": [1,0,1,1,-1,0,-1,0,1,0,-1,-0.46,-0.44,-0.83,0.3,0.88,-0.75,-0.43,0.82,0.83,-0.53,0.52,-0.01],
    "wilde": [0,1,1,1,0,0,-1,0,1,-1,-1,0.33,0.37,0.29,-0.32,0.95,0.37,0.28,-0.18,0.44,0.6,-0.05,-0.01],
    "kafka": [-1,-1,1,1,-1,0,-1,-1,-1,-1,0,0.43,-0.32,0.8,0.37,-0.92,-0.75,0.92,-0.79,-0.76,0.6,-0.58,-0.88],
    "woolf": [-1,-1,1,0,1,-1,-1,-1,0,0,-1,0.12,-0.98,-0.48,-0.32,-0.54,0.5,-0.71,-0.28,-0.94,0.05,-0.86,-0.6],
    "joyce": [0,-1,1,1,-1,-1,-1,-1,1,-1,0,-0.7,-0.77,-0.29,-0.65,0.26,0.69,0.19,0.7,-0.94,0.05,-0.86,-0.01],
    "proust": [-1,-1,1,-1,0,-1,-1,-1,1,0,-1,0.31,-0.86,0.15,-0.05,-0.71,0.23,0.05,0.97,-0.94,-0.84,-0.86,-0.01],
    "orwell": [-1,-1,1,-1,1,0,-1,-1,-1,-1,-1,0.05,0.43,0.53,-0.21,0.13,-0.75,0.93,-0.79,-0.25,-0.53,0.52,-0.88],
    "christie": [-1,0,1,1,-1,-1,1,-1,-1,-1,-1,-0.26,0.91,0.15,0.65,0.44,-0.75,-0.21,-0.79,0.83,0.6,0.83,0.87],
    "tolkien": [0,-1,1,0,0,1,-1,0,0,1,1,0.7,0.35,0.83,0.67,-0.74,-0.07,0.3,0.45,0.44,0.6,0.83,0.59],
    "tagore": [1,1,1,1,1,-1,-1,-1,1,1,1,0,-0.55,-0.55,-0.55,-0.55,0.85,0,0,0.55,-0.55,-0.85,0.55],
    "borges": [1,-1,-1,1,1,1,0,-1,-1,-1,0,-0.34,0.11,0.9,0.88,0.26,-0.36,0.19,-0.79,0.44,-0.53,-0.58,-0.6],
    "neruda": [1,-1,-1,-1,0,-1,-1,-1,1,1,-1,0,0,-0.55,-0.55,0,0.85,0.85,0,-0.85,-0.85,-0.85,0.55],
    "achebe": [0,-1,1,0,1,-1,-1,-1,-1,0,0,0.92,0.43,-0.83,-0.32,-0.58,0.37,0.71,0.87,-0.25,0.6,0.52,-0.88],
    "morrison": [-1,-1,1,-1,0,0,-1,-1,1,-1,0,0.24,-0.38,-0.83,-0.69,-0.57,-0.75,0,0.96,-0.76,0.6,-0.58,-0.6],
    "rowling": [-1,-1,1,-1,-1,1,0,1,0,-1,-1,0.15,0.58,0.62,0.17,0.7,-0.29,-0.39,-0.18,0.44,0.6,0.83,0.87],
    "king": [-1,-1,1,1,0,1,1,-1,-1,-1,-1,0.43,0.29,0.29,0.42,-0.81,-0.75,0.82,-0.42,-0.25,0.6,0.83,-0.6],
    "fitzgerald": [-1,-1,1,1,0,-1,-1,-1,1,-1,-1,-0.17,-0.46,-0.12,-0.85,-0.8,-0.75,0.33,0.91,-0.25,0.05,-0.58,-0.88],
    "grimm": [-1,-1,-1,1,0,1,-1,1,0,1,-1,0.05,-0.21,0.53,-0.32,0.44,-0.29,-0.31,0.87,0.83,0.6,0.83,0.59],
    "conan-doyle": [-1,-1,1,1,0,0,1,-1,-1,0,-1,0.43,0.82,-0.83,0.78,0.44,-0.75,0.05,-0.79,0.83,0.6,0.83,0.87],
    "harper-lee": [-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-0.62,-0.21,-0.83,-0.05,-0.21,0.37,-0.91,-0.42,-0.25,0.05,-0.05,-0.01],
    "coelho": [-1,-1,1,-1,0,0,-1,-1,1,1,1,0.57,0.43,0.15,-0.42,0.95,0.69,-0.52,0.3,-0.25,0.05,-0.05,0.87],
    "murakami": [-1,-1,1,1,0,0,-1,-1,1,-1,-1,-0.96,-0.68,0.71,0.15,0.13,-0.75,-0.21,-0.79,-0.76,-0.53,-0.86,-0.6],
    "steinbeck": [-1,0,1,0,1,-1,-1,-1,0,1,-1,0.71,0.43,-0.12,-0.03,-0.68,-0.75,0.05,0.84,-0.25,0.6,0.52,-0.6],
    "cs-lewis": [0,-1,1,-1,1,1,-1,1,0,0,1,0.05,0.67,0.74,0.71,0.44,0.69,-0.21,0.3,0.44,0.6,0.83,0.87],
    "emily-bronte": [1,-1,1,-1,-1,-1,-1,-1,1,1,0,-0.07,0.26,0.53,-0.68,-0.29,-0.75,-0.63,0.82,-0.76,0.6,-0.05,-0.6],
    "stoker": [-1,-1,1,0,-1,1,1,-1,0,-1,0,0.62,0.37,-0.83,0.84,-0.92,0,0.05,0.17,0.44,0.6,0.83,0.59],
    "wells": [-1,-1,1,1,1,1,-1,-1,-1,-1,-1,0.05,0.67,0.68,0.92,0.13,-0.75,-0.21,-0.28,-0.25,0.6,0.83,-0.6],
    "asimov": [-1,-1,1,1,1,1,0,-1,-1,-1,-1,0.89,-0.21,0.83,0.8,-0.92,-0.75,-0.95,0.54,0.44,0.6,0.52,0.59],
    "bradbury": [0,0,1,1,-1,1,0,-1,-1,0,-1,-0.96,-0.41,0.8,0.84,0.26,0.5,0.79,0.17,-0.25,0.05,-0.58,-0.01],
    "huxley": [0,-1,1,-1,1,1,-1,-1,0,-1,1,0.05,0.95,0.47,0.35,-0.21,-0.2,0.92,-0.79,-0.25,0.05,-0.05,-0.88],
    "dan-brown": [-1,-1,1,-1,-1,-1,1,-1,-1,-1,1,-0.4,0.75,-0.83,0.71,-0.21,-0.75,0.75,-0.03,0.83,0.6,0.83,0.59],
    "sophocles": [0,1,-1,-1,-1,0,1,-1,-1,-1,1,0,0.55,0,0.55,-0.85,0.85,0.55,0.85,0.85,0.85,0.55,-0.85],
    "ibsen": [0,1,-1,-1,-1,-1,0,-1,0,-1,0,-0.55,0,-0.85,0.85,-0.85,-0.55,0.85,0,0.55,0.85,0.55,-0.55],
    "jm-barrie": [-1,1,0,-1,-1,1,-1,1,0,0,-1,0,0.55,0.85,-0.55,0.55,0,-0.55,0.55,0,0.85,0.55,0],
    "anne-frank": [-1,-1,-1,0,1,-1,-1,1,0,-1,0,-0.85,-0.85,-0.85,-0.55,0,-0.55,0,-0.85,-0.55,-0.85,-0.55,0.55],
    "angelou": [1,0,-1,-1,1,-1,-1,0,0,-1,0,0,-0.55,-0.85,-0.55,-0.55,0.85,0.85,0.55,0,-0.85,-0.55,0.85],
    "saint-exupery": [-1,-1,0,1,0,1,-1,1,0,1,1,-0.55,-0.55,0.55,0,0,0.55,-0.85,0,0,-0.55,-0.55,0],
    "dr-seuss": [1,-1,-1,1,-1,1,-1,1,-1,0,-1,-0.55,0.85,0.85,0.55,0.85,0.85,0.55,-0.85,0.85,0.85,0.55,0.85],
    "dahl": [0,-1,1,1,0,1,1,1,-1,-1,-1,-0.55,0.85,0.55,-0.55,0.85,0.55,0.55,-0.55,0,0.85,0.85,0],
    "o-henry": [-1,-1,-1,1,-1,-1,0,-1,1,-1,-1,-0.55,0.55,-0.85,-0.55,0.55,0,-0.55,-0.85,0.85,0.85,0.85,0.55],
    "jack-london": [-1,-1,1,1,0,-1,-1,0,-1,1,-1,0,0.85,-0.55,0,-0.85,-0.55,0.55,-0.55,0,0.85,0.85,-0.55],
    "harari": [-1,-1,-1,-1,1,0,-1,0,-1,0,1,0.85,0,-0.85,0.85,0,-0.85,0.85,0.55,0,-0.55,0,0]
  },
  "zones": {
    "R": {
      "left": {
        "title": "You write in free flow",
        "text": "You let the writing find its own shape. Rules about rhyme, line length or chapter plans feel like a cage to you, so you follow the thought, the feeling or the voice wherever it goes. Your best pieces feel alive and surprising, as if they were happening on the page. Many modern poets and novelists work this way, from Whitman's long lines to Woolf's drifting chapters.",
        "strength": "Freshness. Your writing rarely feels forced or predictable.",
        "watch": "Without any shape, a piece can wander and lose the reader.",
        "try": "Write freely first, then read it back and find the one shape hidden in it. Cut everything that does not fit."
      },
      "mid": {
        "title": "You use form when it helps",
        "text": "You are happy to write freely, and also happy to use a structure when it serves the piece: a rhyme for a song, a clear plan for a story, a fixed length for a challenge. You don't see rules as good or bad, just as tools. This makes you adaptable, and you can learn from both free-verse poets and careful craftsmen.",
        "strength": "Range. You can pick the right tool for each piece.",
        "watch": "You may switch between free and fixed forms without deciding which one this piece needs.",
        "try": "Rewrite one draft twice: once with no rules, once in a strict form. Keep the better one."
      },
      "right": {
        "title": "You love a clear shape",
        "text": "You like writing with a frame: rhyme and rhythm, a set number of lines, a planned structure, a mystery that plays fair with its clues. Rules don't trap you; they push you to be clever inside them. Readers feel the care in your work, the way everything clicks into place at the end, like a well-made puzzle or a song they can't stop humming.",
        "strength": "Craft. Your work feels finished and satisfying.",
        "watch": "A form followed too closely can make writing feel stiff or predictable.",
        "try": "Write in your favourite form, then break one rule on purpose at the most important moment."
      }
    },
    "I": {
      "left": {
        "title": "You write in your own voice",
        "text": "You want to speak as yourself. Your writing comes from your own life, thoughts and feelings, the way a diary, a personal essay or a lyric poem does. Readers feel they are hearing a real person, close up and honest. That closeness is your power: people trust a voice that clearly means what it says.",
        "strength": "Honesty. Readers feel they know you.",
        "watch": "Writing only about yourself can feel narrow, or too private for others to enter.",
        "try": "Write about one moment from your life, then rewrite it from the point of view of someone else who was there."
      },
      "mid": {
        "title": "You move between your voice and others'",
        "text": "Sometimes you want to say \"I\" and speak from your own life; sometimes you want to disappear into a character. You can do both: a personal essay one day, a short story the next, or a story told by a character who sounds a lot like you. Many writers start this way, putting a bit of themselves into every character.",
        "strength": "Range of voice. You can be both personal and inventive.",
        "watch": "Your characters may all start to sound like you.",
        "try": "Give a character one opinion you strongly disagree with, and let them argue it well."
      },
      "right": {
        "title": "You speak through characters",
        "text": "You would rather invent people than talk about yourself. You enjoy giving voices to characters who are very different from you: older, younger, kinder, crueller, from another time or place. Your own views are there, but hidden inside the story. Readers meet a whole cast of people, and each one feels real.",
        "strength": "Empathy in action. You make readers understand people unlike themselves.",
        "watch": "Hiding behind characters can make your own point of view hard to find.",
        "try": "Write a short piece where you step out and speak to the reader directly, just once."
      }
    },
    "A": {
      "left": {
        "title": "You write for mood and feeling",
        "text": "For you, what matters is how a piece feels: the light in a room, the silence between two people, the ache of a memory. Not much needs to happen. Readers stay with your work for the atmosphere, the way they stay with a song. Writers like Chekhov, Woolf and Murakami are loved for exactly this.",
        "strength": "Atmosphere. Readers remember how your work made them feel.",
        "watch": "Some readers may lose patience if nothing seems to move.",
        "try": "Keep your mood, but add one small question the reader wants answered by the end."
      },
      "mid": {
        "title": "You balance mood and plot",
        "text": "You want things to happen, and you also want readers to feel the world they are moving through. You can slow down for a quiet moment, then speed up when the story needs it. Many readers love this most: a story that is gripping and still leaves a feeling behind.",
        "strength": "Balance. You can hold readers' attention and their hearts.",
        "watch": "Trying to do both can leave a piece neither tense nor atmospheric.",
        "try": "Mark each scene as \"mood\" or \"plot\" and check that you have a good mix."
      },
      "right": {
        "title": "You build strong plots",
        "text": "You want readers turning pages. You love setting up a question, raising the stakes, adding a twist and paying it off at the end. Mysteries, adventures and big dramatic stories excite you. Readers come back to your work because they need to know what happens next.",
        "strength": "Momentum. People can't put your work down.",
        "watch": "A fast plot can leave characters thin or feelings rushed.",
        "try": "In your next story, stop once in the middle for a quiet scene where nothing happens but something is felt."
      }
    },
    "E": {
      "left": {
        "title": "You are not afraid of the dark",
        "text": "You don't believe every story should end well. Loss, failure and open questions feel more honest to you, because life often ends that way too. Your endings stay with readers long after they finish, the way a sad song does. Writers from Sophocles to Kafka have shown how much a dark ending can say.",
        "strength": "Truthfulness. Your endings feel earned and real.",
        "watch": "Too much darkness can make readers feel hopeless and stop reading.",
        "try": "Keep a dark ending, but give one character a small act of kindness before it."
      },
      "mid": {
        "title": "Your endings are bittersweet",
        "text": "You like endings that are neither fully happy nor fully sad. Something is lost and something is found; a character grows, but pays a price. This bittersweet tone feels close to real life, and it is one of the hardest and most rewarding things to write well.",
        "strength": "Depth. Your endings hold more than one feeling.",
        "watch": "An ending that is too balanced can feel unclear.",
        "try": "Before you write the ending, decide the one feeling you want readers to leave with."
      },
      "right": {
        "title": "You write toward hope",
        "text": "Even when your stories go through dark places, you want readers to leave with hope. You believe in people's ability to change, to forgive and to start again. Your work can comfort and encourage readers, especially young ones, which is a real gift. Writers like Anne Frank and Paulo Coelho are loved for this light.",
        "strength": "Warmth. Your writing gives readers strength.",
        "watch": "A happy ending that comes too easily can feel unreal.",
        "try": "Make your characters pay a real cost before they reach the hopeful ending."
      }
    }
  }
};
