// Author: Bogdan Pshonyak

// TODO: Process text before running algorithm (ex. check for quotes)

var nlp = require('nlp_compromise');
var _ = require('underscore');
var sw = require('./stop-words.js');

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

    // Remove stop words
    var p_tokens = _.difference(tokens, sw.stopWords);

    // Calculate the popularity of each token
    var counts = {};
    for (var i = 0; i < p_tokens.length; i++) {
        counts[p_tokens[i]] = 1 + (counts[p_tokens[i]] || 0);
    }

    return {
        sentences: s_length,
        total_words: words,
        syllables: syllables,
        tokens: tokens,
        popularity: counts
    }
};

exports.process = process;
