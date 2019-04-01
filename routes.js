var friendsData = require('../data/friends.js');
console.log(friendsData);
module.exports = function(app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
		console.log("friendsData[0].scores[0]: " + friendsData[0].scores[0]);

	});

	app.post('/api/friends', function(req, res) {
		console.log(req.body);

		var bestMatch = {
      		name: "",
      		img: "",
      		difference: 20
    	};

		var newFriend = req.body;
	    var newImg = req.body.newImg;
	    var newName = req.body.newName;
	    var newScores = req.body.scores;

	    console.log(newFriend);
	    //console.log(newImg);
	    console.log(newName);
	    //this is coming up undefined -- this should work
	    //getting POST http://localhost:3000/api/friends 500 (Internal Server Error)
	    //once server.js got this changed to true: app.use(bodyParser.urlencoded({ extended: true }));
	    //and commented out: //app.use(bodyParser.json());
	    //the newScore started getting console.log
	    //still getting POST error though
	    console.log(newScores);
	    var friendCalc = 0;

	    //var friendMatch = [];
	    //want to loop through the scores of the new friend and each of the friends in the friendsArray
	    //for best match start by loopin through the first of the friends in the friendsArray

	    for (var i = 0; i < friendsData.length; i++) {
	    	console.log(friendsData[i].friendName);
	    	friendCalc = 0;
	    	//then need to loop through each of the scores and compare the new friend score to the friend from data
			for (var j = 0; j < friendsData[i].scores.length; j++) {
				//console.log("friendsData[i].scores[j] : " + friendsData[i].scores[j]);
				//console.log("newScores[j]: " + newScores[j]);
				//this takes the abolute difference between the two scores and adds it to friendCalc
				friendCalc += Math.abs(friendsData[i].scores[j] - newScores[j]);
				console.log("friendCalc: " + friendCalc);
				// friendMatch.push(friendCalc);

				if (friendCalc < bestMatch.difference) {
					bestMatch.name = friendsData[i].friendName;
					bestMatch.img = friendsData[i].friendImg;
					bestMatch.difference = friendCalc;
					console.log("bestMatch.name: " + bestMatch.name);
					console.log("bestMatch.difference: " + bestMatch.difference);

				}
				// console.log("bestMatch" + bestMatch.name);
				// console.log("bestMatch.difference: " + bestMatch.difference);

			}

			console.log("bestMatch" + bestMatch.name);
			//console.log("bestMatch.difference: " + bestMatch.difference);
			console.log("bestMatch.img: " + bestMatch.img);
			// var reducer = (accumulator, currentValue) => accumulator + currentValue;
			// friendMatch = friendMatch.reduce(reducer)
			// console.log("reduced friendMatch: " + friendMatch);
		}

		friendsData.push(newFriend);
		res.json(bestMatch);

		//I want to pull the newFriend.score and the first friend in friends.js
  		//then look at each of the numbers in the same index of the array and 
  		//take the absolute difference of the two arrays and put each of those 
  		//numbers into an array
  		//that array I want to add each of the numbers in the array to get the 
  		//difference total between the new friend and the first friend from friends.js
  		//it should do this for each of the friends in the api from friends.js
  		//whichever total difference is less than 5 submit that friend to the user
  		//as their perfect match

  	});
  	
}