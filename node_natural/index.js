var natural = require('natural');

var wordnet = new natural.WordNet();

wordnet.lookup('computer', function(results) {
    results.forEach(function(result) {
        console.log('------------------------------------');
        console.log("synset Offset:");
        console.log(result.synsetOffset);
        console.log("Part of Speech:");
        console.log(result.pos);
        console.log("Lemma:");
        console.log(result.lemma);
        console.log("synonyms: ");
        console.log(result.synonyms);
        console.log("defenition:");
        console.log(result.gloss);
    });
});
