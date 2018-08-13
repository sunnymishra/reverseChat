'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

/**
 * User Schema
 */
const ChatSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	facebook : {
		name: String,
		photo: String
	},
	chatCount: Number
}, {
  collection: 'chat'
});

// userId: String,
// user: {
// 		type: Schema.ObjectId,
// 		ref: 'User'
// 	}

module.exports = mongoose.model('Chat', ChatSchema);