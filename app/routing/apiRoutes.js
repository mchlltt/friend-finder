var friendData = require('../data/friends.js');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function(req, res) {
        var thisUser = req.body;
        var differences = [];

        if (friendData.length > 1) {
            friendData.forEach(function(user) {
                var totalDifference = 0;

                for (var i = 0; i < thisUser.answers.length; i++) {
                    var otherAnswer = user.answers[i];
                    var thisAnswer = thisUser.answers[i];
                    var difference = +otherAnswer - +thisAnswer;
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });

            var minimumDifference = Math.min.apply(null, differences);

            var bestMatches = [];

            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(friendData[i]);
                }
            }

            res.json(bestMatches);
        } else {
            res.json(friendData);
        }

        friendData.push(thisUser);

    });
};