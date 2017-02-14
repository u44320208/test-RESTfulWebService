var express = require('express');
var users = require('../libraries/users');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

router.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

//********* Show all User *********
router.get('/user', function (req, res) {
	users.findAll(function(errorMessage){
        console.log(errorMessage);
        res.end("Error");
    }, function(data){
        res.json(data);
    });
});

//********* Show User by ID *********
router.get('/user/:id', function (req, res) {
    var id = req.params.id;
    users.findById(id, function(errorMessage){
        console.log(errorMessage);
        res.end("Error");
    }, function(data){
        res.json(data);
    });
});

//********* Add new User *********
router.post('/newuser', function (req, res) {
    var newuser = req.body;
	users.newUser(newuser,function(errorMessage){
        console.log(errorMessage);
        res.end("Error");
    }, function(newuser){
        //res.send('<h1>Add new User '+newuser.name+' Success</h1>');
		res.redirect("user");
    });
});

//********* Edit User by post *********
router.post('/user/:id/edit', function (req, res) {
	var id = req.params.id;
	var editData = req.body;
	// add code here
	users.dropUser(id, editData, function(errorMessage){
        console.log(errorMessage);
        res.end("Error");
    }, function(data){
        res.redirect("user/"+id);
    });

});

//********* Drop User by get *********
router.get('/user/:id/drop', function (req, res) {
	var id = req.params.id;
	// add code here
	users.dropUser(id, function(errorMessage){
        console.log(errorMessage);
        res.end("Error");
    }, function(data){
		//res.send('<h1>Droup User '+data.name+' Success</h1>');
        res.redirect("user");
    });
});


module.exports = router;
