var path = require('path');

module.exports = function(app) {

    app.get('/api/friends', function(req, res) {
        // Placeholder.
        console.log('hi');
        // res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    app.post('/api/friends', function(req, res) {
        var survey = req.body;
        console.log(survey);
    });
};