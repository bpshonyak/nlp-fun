var natural = require('natural');
var _ = require('underscore');

var text = "There was a huge fire in my house this morning. Thanks to the fire fighter named John, I got out alive!";

// Tokenizer Example
var tokenizer = new natural.WordTokenizer();
var tokens = tokenizer.tokenize(text.toLowerCase());

// Remove stop words
var stopWords = ['a', 'the'];
tokens = _.difference(tokens, stopWords);

// Stemming Example
// natural.PorterStemmer.attach();
natural.LancasterStemmer.attach();
// Breaks the text into tokens and finds
// word stems while ingnoring stop words.

// Generate tokens and stem them
// var tokens = text.toLowerCase().tokenizeAndStem();

// Calculate popularity
var counts = {};
for (var i = 0; i < tokens.length; i++) {
    counts[tokens[i]] = 1 + (counts[tokens[i]] || 0);
}
// console.log(tokens);
// console.log("__________________________________________________");
console.log(counts);

// Classifiers Example
// classifier = new natural.BayesClassifier();
//
// classifier.addDocument('i am long qqqq', 'buy');
// classifier.addDocument('buy the q\'s', 'buy');
// classifier.addDocument('short gold', 'sell');
// classifier.addDocument('sell gold', 'sell');
//
// classifier.train();
//
// console.log(classifier.classify('i am short silver'));
// console.log(classifier.getClassifications('i am long copper'));

// WordNet Example
// var wordnet = new natural.WordNet();
// wordnet.lookup('Obama', function(results) {
//     results.forEach(function(result) {
//        console.log(result);
//         console.log('------------------------------------');
//         console.log("synset Offset:");
//         console.log(result.synsetOffset);
//         console.log("Part of Speech:");
//         console.log(result.pos);
//         console.log("Lemma:");
//         console.log(result.lemma);
//         console.log("synonyms: ");
//         console.log(result.synonyms);
//         console.log("defenition:");
//         console.log(result.gloss);
//     });
// });
