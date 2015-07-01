var express = require('express'),
  path = require('path'),
  app = express();

port = process.env.PORT || 3000;

app
  .use('/static', express.static(__dirname + '/static'))
  .get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  })
  .listen(port, function() {
    console.log("Listening on " + port + ".");
    console.log("Go to <http://localhost:" + port + "> in your browser.");
  });
