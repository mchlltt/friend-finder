module.exports = function(app) {
    var path = require('path');

    app.get('/survey', function(req, res) {
        res.sendFile(path.resolve('app/public/survey.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.resolve('app/public/home.html'));
    });

};