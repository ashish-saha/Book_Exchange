// Setting up middleware
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var security = require('../created_modules/security');

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

	// Render the home.handlebars file while passing in an object.
	// Only one object can be thrown to the frontend  but we can throw in many instances.
	// Whatever instance that's being thrown in, for example in this case, name, where ever {{name}} appears in the home.handlebars file, the passed in value from here, data.name will appear there.
	res.render('home', {name: data.name, password: "Whatever"});
});

router.get('/about', function(req, res){
	res.render('about');
});

router.get('/login', function(req, res){
	res.render('login');
});

router.get('/reader_dashboard', function(req, res){
	res.render('reader_dashboard');
});



router.get('/register', function(req, res){
	res.render('register');
});

//===================POST ROUTES===================//
router.post('/login', passport.authenticate('local',{
		successRedirect: '/user/dashboard',
		failureRedirect: '/failedLogin'
	}), function(req,res){});

router.post('/register', function(req,res){

	var new_profile = new model.profile({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		state: req.body.state,
		city: req.body.city,
		neighborhood: req.body.neighborhood
	});

	new_profile.save();

	var new_user = new model.user({
		email: req.body.email,
		iv: security.generateIV(),
		password: security.encrypt(req.body.password, iv),
		profile: new_profile._id
	});

	new_user.save();

	res.render('register_complete', {first_name: req.body.first_name});
});


// Have directory recognized by outside code
module.exports = router;