var express = require('express');
var users = require('../library/users');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

router.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

router.get('/user', function (req, res) {
    res.json(users.findAll());
});

router.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

router.post('/newuser', function (req, res) {
    var json = req.body;
	console.log(json.name);
    res.send('Add new ' + json.name + ' Completed!');
});

module.exports = router;
