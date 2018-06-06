// express makes routing easy via nodejs
var express = require('express');
// body-parser allows us to receive info in json
var bodyParser = require('body-parser');
// path - built into node (no npm install required for this one)
var path = require('path');


var app = express();

var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// api routes first because we must pull data, add it to page, THEN display the page
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function(){
    console.log("listening on PORT: " + PORT);
});