// Setting up middleware.
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// db is the entire database.
var db = {};

db.user_schema = new Schema({
	id: ObjectId,
	email: {type: String, lowercase: true, unique: true},
	created_date: {type: Date, default: Date.now()},
	random_URL: {type: ObjectId, default: mongoose.Types.ObjectId()}
});

db.profile_schema = new Schema({
	id: ObjectId,
	first_name: String,
	last_name: String,
	state: String,
	city: String,
	neighborhood: String,
	profile_picture: String,
	google_plus: Object,
	facebook: Object,
	twitter: Object,
	reader_id: {type: ObjectId, ref: 'reader'},
	bookstore_id: {type: ObjectId, ref: 'bookstore'}
});

db.reader_schema = new Schema({
	id: ObjectId,

});

db.bookstore_schema = new Schema({
	id: ObjectId
});

// Instatiate proper schema for creating data.
db.user = mongoose.model('user', db.user_schema);
db.profile = mongoose.model('profile', db.profile_schema);
db.reader = mongoose.model('reader', db.reader_schema);
db.bookstore = mongoose.model('bookstore', db.bookstore_schema);

// Export db to be recognized.
module.exports = db;