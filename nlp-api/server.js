// Author: Bogdan Pshonyak

var restify = require('restify');

// Custom modules ---------------------------
var flesch = require('./flesch-test.js'); // Depends on nlp_compromise
var pt = require('./process-text.js'); // Depends on nlp_compromise

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

  var result = pt.process(text);
  var test = flesch.test(result.sentences, result.total_words, result.syllables);
  res.send(test);
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
