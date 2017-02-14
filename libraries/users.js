var fs = require("fs");

var myFile = 'users.json'; 

//********* Support ES5 (IE9+) *********
// If you can't , you could also use the jQuery (http://api.jquery.com/jQuery.map/) 
// or Underscore.js (http://underscorejs.org/#map) implementations.
// type : 'max' or 'min'
// data : 
function getMinMax(type, data, key) {
	var propValues;
	propValues = data.map(function(node) {
		return node[key];
	  });
	if(type !== 'min'){
		return Math.max.apply(null, propValues);
	}else{
		return Math.min.apply(null, propValues);
	}
}
//*************************************

//********* Find for all User *********
exports.findAll = function(callbackError,callbackSuccess) {
	fs.readFile(myFile, 'utf8', function (err, data) {
		if (err) {
			callbackError(error);
		}else{
			data = JSON.parse(data);
			callbackSuccess(data);
		}
   });
};

//********* Find User By ID *********
exports.findById = function (id, callbackError, callbackSuccess) {
    fs.readFile(myFile, 'utf8', function (err, data) {
	    if (err) {
			callbackError(err);
		}else{
			var foundData;
			data = JSON.parse(data);
			foundData = data.find(d => d.id == id);
			callbackSuccess(foundData);
		}
   });
};

//********* Add new User *********
exports.newUser = function(newuser, callbackError, callbackSuccess) {
	fs.readFile(myFile, 'utf8', function (err, data) {
	    if (err) {
			callbackError(err);
		}else{
			data = JSON.parse(data);
			var maxId = getMinMax('max', data, 'id');
			newuser.id = maxId + 1;
			data.push(newuser);
			fs.writeFile(myFile, JSON.stringify(data), function(err){
			  if (err){
				  callbackError(err);
			  }else{
				  console.log('Success Add new User ID : '+newuser.id);
				  callbackSuccess(newuser);
			  }
			});
		}
   });
};

//********* Edit User *********
exports.editUser = function(id, edituser, callbackError, callbackSuccess) {
	fs.readFile(myFile, 'utf8', function (err, data) {
	    if (err) {
			callbackError(err);
		}else{
			data = JSON.parse(data);
			foundData = data.find(d => d.id == id);
			// add code here

		}
   });
};

//********* Drop User *********
exports.dropUser = function (id, callbackError, callbackSuccess) {
    fs.readFile(myFile, 'utf8', function (err, data) {
	    if (err) {
			callbackError(err);
		}else{
			var foundData;
			data = JSON.parse(data);
			foundData = data.find(d => d.id == id);
			// add code to drop user by id here

		}
   });
};