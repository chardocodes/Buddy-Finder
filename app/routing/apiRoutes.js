var friendsData = require('../data/friends.js');
console.log(friendsData);
module.exports = function (app) {
	//whenever the user goes to the api/tables url go ahead and display the tableData in json format
	app.get('/api/friends', function (req, res) {
		res.json(friendsData);
		console.log("friendsData[0].scores[0]: " + friendsData[0].scores[0]);

	});

	app.post('/api/friends', function (req, res) {
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

		// console.log(newFriend);
		// console.log(newName);
	
		console.log(newScores);
		var friendCalc = 0;

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

	});

}