var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

// Setting up body-parser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.get('/', function(req, res){
	res.render('home');
});

// Have directory recognized by outside code
module.exports = router;