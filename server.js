// express makes routing easy via nodejs
var express = require('express');
// body-parser allows us to receive info in json
var bodyParser = require('body-parser');
// path - built into node (no npm install required for this one)
var path = require('path');


var app = express();

var PORT = process.env.PORT || 8080;

// default route
app.get('/', function (req, res) {
    res.send('Hello World');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
});

app.listen(PORT, function(){
    console.log("listening on PORT: " + PORT);
});