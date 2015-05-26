var http = require('http');
var manifest = require('./manifest.js');
var server;


module.exports = function (done) {
  if (server) {
    return done();
  }

  server = http.createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(manifest));
  });

  server.listen(9005, '127.0.0.1', done);
};