var path = require('path');

module.exports = function(app) {

    app.get('/survey', function(req, res) {
        res.sendFile('survey.html');
    });

    app.use(function (req, res) {
        res.sendFile('home.html');
    });

};
