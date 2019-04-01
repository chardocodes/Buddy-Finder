var path = require('path');

module.exports = function (app) {
	app.get('/survey', function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

//this will send the user here if they type in anything other than reserve or tables
	app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}