// Setting up middleware
var express = require('express');
var bodyParser = require('body-parser');

// Getting the schemas from the created_modules folder.
var model = require('../created_modules/models');

// Have routes noticed 
var router = express.Router();

// Setting up body-parser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

//===================GET ROUTES===================//

// Home route
router.get('/', function(req, res){

	// This is how easy it is to create data
	var data = model.user({
		name: "Raul"
	});

	// This is how easy it is to save data.
	data.save();

	// Render the home.handlebards file while passing in an object.
	// Only one object can be thrown to the frontend  but we can throw in many instances.
	// Whatever instance that's being thrown in, for example in this case, name, where ever {{name}} appears in the home.handlebars file, the passed in value from here, data.name will appear there.
	res.render('home', {name: data.name, password: "Whatever"});
});

router.get('/about', function(req, res){
	res.render('about');
});

router.get('/register', function(req, res){
	res.render('register');
});

//===================POST ROUTES===================//
router.post('/register', function(req,res){
	res.render('register_complete');
});


// Have directory recognized by outside code
module.exports = router;