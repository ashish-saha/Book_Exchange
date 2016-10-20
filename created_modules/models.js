// Setting up middleware.
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// db is the entire database.
var db = {};

// General information for all users
db.user_schema = new Schema({
	id: ObjectId,
	email: {type: String, lowercase: true, unique: true},
	created_date: {type: Date, default: Date.now()},
	// Use for recovering password, maybe have other uses
	random_URL: {type: ObjectId, default: mongoose.Types.ObjectId()},

	// Id reference
	profile_id: {type: ObjectId, rel: 'profile'}
});

// For users of our website, excluding admin which'll be implemented later
db.profile_schema = new Schema({
	id: ObjectId,
	first_name: String,
	last_name: String,
	state: String,
	city: String,
	neighborhood: String,
	profile_picture: String,

	// For API content, later use
	google_plus: Object,
	facebook: Object,
	twitter: Object,

	// Id references
	reader_id: {type: ObjectId, ref: 'reader'},
	bookstore_id: {type: ObjectId, ref: 'bookstore'},
	organization_id: {type: ObjectId, ref: 'organization'}
});

// The most common user  of our website
db.reader_schema = new Schema({
	id: ObjectId,

});

// Bookstore owner users
db.bookstore_schema = new Schema({
	id: ObjectId,
	bookstore_name: String,
	address: String
});

// Organization owner users
db.organization_schema = new Schema({
	id: ObjectId,
	organization_name: String
});



// Instatiate proper schema for creating data.
db.user = mongoose.model('user', db.user_schema);
db.profile = mongoose.model('profile', db.profile_schema);
db.reader = mongoose.model('reader', db.reader_schema);
db.bookstore = mongoose.model('bookstore', db.bookstore_schema);
db.organizaton = mongoose.model('organization', db.organization_schema);

// Export db to be recognized.
module.exports = db;