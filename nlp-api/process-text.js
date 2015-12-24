// Author: Bogdan Pshonyak

var nlp = require('nlp_compromise');

var process = function(text){

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
    return {
        sentences: s_length,
        total_words: words,
        syllables: syllables,
        tokens: tokens
    }
};

exports.process = process;
