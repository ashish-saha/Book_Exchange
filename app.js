// Setting up middleware
var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var mongoose = require('mongoose');
var handlebars = require('express-handlebars');

// Express for ease
var app = express();

// Public directory for scripts, css, images, etc
app.use('/static', express.static(__dirname + '/public'));

// Have app use the routes folder by default
app.use('/', routes);

// Handlebars setup
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Relative to mongoose and MongoDB
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/Book_Exchange', function(err, res){
	if(!err){
		console.log("Connected to database!");
	}
	else{
		throw err;
	}
});

// First route but should be moved to its own directory
// app.get('/', function(req, res){
// 	res.render('home');
// });

// Listening to port 8000, localhost:8000
app.listen(8000, function(){
	console.log('WORKING ON 8000');
});

// Export
module.exports = app;