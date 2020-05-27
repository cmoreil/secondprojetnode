const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const commentSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  username: { type: String, required: true, lowercase: true },
  content: { type: String, required: true, unique: true },
  created_at: {type: String, required: true },
  recomments: [ {name: String, body: String, date: String}] ,
  votes: { Type: Number}
});

commentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Comment', commentSchema);