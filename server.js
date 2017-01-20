// Import dependencies.
var express = require('express');
// var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

// Initialize app.
var app = express();
var PORT = 3000;

// Set up middleware.
// app.use(favicon(path.join(__dirname, 'app/public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

// Import routes.
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT);