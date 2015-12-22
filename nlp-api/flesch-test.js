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
  var tokens = 0;
  var syllables = 0;

  // Count words in each sentence
  for(var i = 0; i < s_length; i++){
    tokens += sentences[i].tokens.length;
    // console.log("Words in sentence " + i + ": " + sentences[i].tokens.length);
    // Count syllables in each word
    for(var q = 0; q < sentences[i].tokens.length; q++){
        syllables += nlp.syllables(sentences[i].tokens[q].normalised).length;
        // console.log(sentences[i].tokens[q].normalised + " has " + nlp.syllables(sentences[i].tokens[q].normalised).length + " syllabels.");
    }
}
  console.log("Sentences: " + s_length);
  console.log("Words: " + tokens);
  console.log("Syllables: " + syllables);
  return (206.835 - 1.015 * (tokens/s_length) - 84.6 * (syllables/tokens));
};

exports.test = test;
