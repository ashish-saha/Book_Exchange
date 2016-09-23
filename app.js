var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var handlebars = require('express-handlebars');

var app = express();
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

app.use('/static', express.static(__dirname + '/public'));
// app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/Book_Exchange', function(err,res){
	if(!err){
		console.log("Connected to database!");
	}
	else{
		throw err;
	}
});

app.get('/', function(req, res){
	res.send('Hello World');
});

module.exports = app;

app.listen(8000, function(){
	console.log('WORKING ON 8000');
});