const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
//const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true},
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
  created_at: {type: String, required: true }
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);