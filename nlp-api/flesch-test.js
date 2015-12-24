// Author: Bogdan Pshonyak
// Flesch–Kincaid readability test | https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests

// Requires:
// Total words
// Total sentences
// Total syllables

// Results:
// 90.0 – 100.0  = easily understood by an average 11-year-old student (Target)
// 60.0 – 70.0   = easily understood by 13- to 15-year-old students
// 0.0 – 30.0    = best understood by university graduates

var test = function(sc, w, s){

  // Fields
  var s_count  = sc; // Number of sentences
  var words = w;     // Number of words
  var syllables = s; // Number of syllables

  var result = (206.835 - 1.015 * (words/s_count) - 84.6 * (syllables/words));
    var diff; // difficulty
    if (result >= 80.0){
        diff = "easy";
    } else if (result >= 60.0) {
        diff = "moderate";
    } else {
        diff = "hard";
    }
    return {
        "score": result,
        "difficulty": diff
    };
};

exports.test = test;
