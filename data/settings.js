/*
  QUIZ SETTINGS
  =============
  The numbers that tune the quiz. Change a number, save, then open check.html
  to see what the change does to accuracy and quiz length.
*/
var QUIZ_SETTINGS = {
  scoring: "editorial", // matches / administered opportunities; never a probability
  linear: true,          // true  = every student gets the same questions in the same order (branch questions are not used)
                         // false = the quiz adapts: the next question depends on the answers so far
  // The next five numbers are used only when linear is false.
  minQuestions: 8,       // every student answers at least this many questions
  maxQuestions: 20,      // and never more than this
  confidence: 0.85,      // stop early once one writer is this likely (0.85 = 85%)
  branchOpensAt: 0.4,    // a branch question can appear once its writers are, together, this likely
  noise: 0.4,            // how often we expect a student to pick an answer that does NOT fit "their" writer
  noneRate: 0.3,         // how often we expect a student outside a branch to pick the "none of these" answer
  noneText: "None of these sounds like me",   // used when a branch question has no "none" text of its own

  // What draws a writer in. Each writer has one "focus"; it sets the color of the result.
  styles: {
    heart: { name: "Heart", color: "#e0567a", about: "characters & feelings" },
    spark: { name: "Spark", color: "#f0a12a", about: "plot & twists" },
    world: { name: "World", color: "#1f9e8f", about: "places & atmosphere" },
    voice: { name: "Voice", color: "#7a5cd6", about: "words & style" }
  },

  // How a writer works. Each writer has one "approach".
  approaches: {
    planner:  { name: "Planner",  about: "plans before writing" },
    explorer: { name: "Explorer", about: "discovers while writing" },
    reviser:  { name: "Reviser",  about: "finds it in rewriting" }
  }
};

