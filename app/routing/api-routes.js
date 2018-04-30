var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDiffernce: 1000
        };

        console.log(req.body);

        //take the result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        //this variable will calculate the difference between the user's scores and the scores of each user in the db//
        var totalDifference = 0;

        // loop through all the friend possibilities in the database//
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

            //then loop through all the scores of each friend//
            for (var j = 0; j < friends[i].scores[j]; j++) {

                //calculate the difference between the scores and sum them into the totalDifference//
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //if sum of difference is less than the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDiffernce) {

                    //reset the bestMatch to be the new friend//
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        //finally save the user's data to the db//
        friends.push(userData);

        //return a JSON with the user's bestMatch//
        res.json(bestMatch);

    });
}
