// Total words
// Total sentences
// Total syllables

var nlp = require('nlp_compromise');

var test = function(text){
  var sentences = nlp.tokenize(text);
  var s_length  = nlp.tokenize(text).length;
  var tokens = 0;
  var syllables = 0;
  // Count words
  for(var i = 0; i < s_length; i++){
    tokens += sentences[i].tokens.length;
    // Count syllabels
    for(var q = 0; q < sentences[i].tokens.length - 1; i++){
      // syllables += nlp.syllables(sentences[i].tokens[q]).length;
      syllables += 3;
    }
  }
  console.log("Sentences: " + s_length);
  console.log("Words: " + tokens);
  console.log("Syllables: " + syllables);
  return (206.835 - 1.015 * (tokens/s_length) - 84.6 * (syllables/tokens));
};

exports.test = test;
