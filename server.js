var fs = require('fs');
var express = require('express');
var app = express();

var port = 8081;

// Define static server.
app.use(express.static(__dirname + '/public'));

// Define API route.
app.get('/api/member/list', function (req, res) {

  // Read local fine.
  fs.readFile(__dirname + '/data/members.json', "utf8", function(err, data) {
    
    if (err) throw err;
    
    // Response with JSON headers.
    res.json(JSON.parse(data));
  });
});

var server = app.listen(port);

console.log('running on port: ' + port);