module.exports = function(app) {
    var path = require('path');

    app.get('/api/friends', function(req, res) {
        // Placeholder.
        res.sendFile(path.resolve('app/public/home.html'));
    });

    app.post('/api/friends', function(req, res) {
        var survey = req.body;
        console.log(survey);
    });
};