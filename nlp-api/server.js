var nlp = require('nlp_compromise');
// var _ = require('underscore');
var restify = require('restify');

// Custom modules ---------------------------
var sw = require('./stop-words.js');
var flesch = require('./flesch-test.js'); // Depends on nlp_compromise

// Default serve config
var server = restify.createServer({
  name: 'nlp-api',
  version: '0.0.1'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/nlp/:text', function (req, res, next) {
  // Store user provied text
  var text = req.params.text;

  // Remove stop words
  // tokens = _.difference(tokens, sw.stopWords);

  // Calculate the popularity of each tokens
  // var counts = {};
  // for (var i = 0; i < tokens.length; i++) {
  //     counts[tokens[i]] = 1 + (counts[tokens[i]] || 0);
  // }

  // Tokenzise sentence
  // nlp.tokenize(text)

  // Count sentences
  // nlp.tokenize(text).length

  console.log(flesch.test(text));
  res.send("completed");
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
