var mongoose = require('mongoose');
var db = {};
var Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

db.user_schema = new Schema({
	id: ObjectId,
	name: String
});


db.user = mongoose.model('user', db.user_schema);

module.exports = db;