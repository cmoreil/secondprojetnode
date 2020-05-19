const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const commentSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  content: { type: String, required: true, unique: true },
  created_at: {type: Date, required: true, default: Date.now },
  recomment:{type: String, require: false }
});

commentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Comment', commentSchema);