const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = mongoose.Schema({
  type: { type: String, enum: ['séminaire', 'formation'], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true, unique: true},
  endDate: { type: String, required: true, unique: true },
  price: { type: Number, required: true }
});

productSchema.plugin(uniqueValidator);
module.exports = mongoose.model('product', productSchema);