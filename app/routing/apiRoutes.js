var friends = require("../data/friends");

module.exports = function(app) {


	app.get("/api/friends", function(req, res) {
		res.json(friends)
	});

	app.post("/api/friends", function(req, res) {

		var newUser = req.body;

		var newUserScores = newUser.scores;

		var diff = 100;

		var friendMatch;

		var counter = 0;

		for (var i = 0; i < friends.length; i ++) {

			var currentFriend = friends[i];

			var friendScore = friendsLoop(friends[i].scoresArray, newUserScores);

			if (friendScore < diff) {
				diff = friendScore;
				friendMatch = currentFriend;
				counter ++
			}

			else {
				counter ++
			}

		}

		if (counter = friends.length) {
			friendMatch.characterArray.push(newUser)
			res.send(friendMatch);

		}

	})
};

function friendsLoop(friendArray, userArray) {

	var friendDiff = 0;

	for (var i = 0; i < friendArray.length; i ++) {
		friendDiff += Math.abs(friendArray[i] - userArray[i]);
	}

	return friendDiff
}