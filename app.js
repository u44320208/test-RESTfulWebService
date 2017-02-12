// call the packages we need
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 7777;		// set our port

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES FOR OUR API
// =============================================================================
var users = require('./routes/users');

app.get('/', function (req, res) {
    res.redirect('/api');
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', users);


// START THE SERVER
// =============================================================================
var server = app.listen(port, function() {

	 var host = server.address().address
	 var port = server.address().port

	 console.log("Application listening at http://%s:%s", host, port)
});