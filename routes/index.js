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
	var data = model.user({
		name: "Raul"
	});

	res.render('home', {name: data.name});
});

//===================POST ROUTES===================//



// Have directory recognized by outside code
module.exports = router;