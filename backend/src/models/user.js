const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true},
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  admin: { type: Boolean, required: true },
  created_at: {type: Date, required: true, default: Date.now }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);