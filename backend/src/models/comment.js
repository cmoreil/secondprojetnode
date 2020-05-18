const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  title: { type: String, required: true },
  username: { type: String, required: true },
  content: { type: String, required: true },
  date: {type: String, required: true},
  recomment:{type: String, require: false}
});

module.exports = mongoose.model('Comment', commentSchema);