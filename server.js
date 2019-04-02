var express = require("express");
var bodyParser = require("body-parser");
//path is built into node and not a npm required install
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
//commented this out
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/app/public')); 


//from npm body-parser
// parse application/json
app.use(bodyParser.json());

//require the html-routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);



// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});