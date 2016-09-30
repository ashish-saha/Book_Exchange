// Setting up middleware.
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

// db is the entire database.
var db = {};

// Example of a table.
db.user_schema = new Schema({
	id: ObjectId,
	name: String
});

// Instatiate proper schema for creating data.
db.user = mongoose.model('user', db.user_schema);

// Export db to be recognized.
module.exports = db;