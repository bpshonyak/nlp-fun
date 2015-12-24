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

// TODO: Process text before running algorithm (ex. check for quotes)

var nlp = require('nlp_compromise');

var test = function(text){

  // Fields
  var sentences = nlp.tokenize(text);
  var s_length  = nlp.tokenize(text).length;
  var words = 0;
  var syllables = 0;
    var tokens = [];

  // Count words in each sentence
  for(var i = 0; i < s_length; i++){
    words += sentences[i].tokens.length;
    // console.log("Words in sentence " + i + ": " + sentences[i].tokens.length);
    // Count syllables in each word
    for(var q = 0; q < sentences[i].tokens.length; q++){
        syllables += nlp.syllables(sentences[i].tokens[q].normalised).length;
        tokens.push(sentences[i].tokens[q].normalised);
    }
}
  var result = (206.835 - 1.015 * (words/s_length) - 84.6 * (syllables/words));
    var diff;
    if (result >= 80.0){
        diff = "easy";
    } else if (result >= 60.0) {
        diff = "moderate";
    } else {
        diff = "hard";
    }
    return {
        score: result,
        difficulty: diff,
        sentences: s_length,
        total_words: words,
        syllables: syllables,
        tokens: tokens
    }
};

exports.test = test;
