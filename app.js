// Setting up middleware
var express = require('express');
var path = require('path');
var session = require('express-session');
var routes = require('./routes/index');
var mongoose = require('mongoose');
var handlebars = require('express-handlebars');

var model = require('./created_modules/models');

var security = require('./created_modules/security');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var http  = require('http');
var https = require('https');
var fs = require('fs');

// Express for ease
var app = express();

// Public directory for scripts, css, images, etc
app.use(express.static('public'));

// Have app use the routes folder by default
app.use('/', routes);

// Handlebars setup
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(session({path: '/', httpOnly: true,resave: false, secure: false, maxAge: null, saveUninitialized: false,secret:"somesecretstringjusttokeepthingssecret" }));

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

passport.use(new LocalStrategy({usernameField: 'email'},
  	function(username, password, done) {
    	model.findOne({ email: email }, function (err, user) {
      		if (err) { 
      			return done(err); 
      		}
      		if (!user) {
       			return done(null, false, { message: 'Incorrect username.' });
      		}
      		if (password != security.decrypt(password, user.iv)) {
        		return done(null, false, { message: 'Incorrect password.' });
      		}
      	return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  	db.findById(id, function(err, user) {
    	done(err, user);
  	});
});

app.use(function(req, res, next) {
  	var err = new Error('Not Found');
  	err.status = 404;
  	next(err);
});


// error handlers
//development error handler
//will print stacktrace
if (app.get('env') === 'development') {
  	app.use(function(err, req, res, next) {
    	res.status(err.status || 500);
    	console.log(err);
    
	    if(err.status != 404){
	      	var error = new model.bug({
	      		description: err,
	      		found: new Date(),
	      	});
		    error.save();
	  	}

	   	if(err.status != 404){
	      	err.message = "";
	      	err.message = "Sorry, there seems to be a problem loading this page, please refresh or try again later.";
	    }

	    else {
	      	res.render('error', {
	        	message: err.message,
	        	error: err
	      	});
	    }
  	});
}

// Listening to port 8000, localhost:8000
app.listen(8000, function(){
	console.log('WORKING ON 8000');
});

// Export
module.exports = app;