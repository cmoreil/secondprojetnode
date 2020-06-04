const mongoose = require('mongoose');

const orderSchema = new Schema({
  totaloforder: {type: Number, required: true},
  lastname: {
    type: String,
    required: true
  },
  firstname: {
      type: String,
      required: true
    },
  adress: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  phone: {
      type: String,
      required: true
  },
  creditcart: {type: Number, required: true}
},
{ timestamps: { createdAt: "created_at" }}
);

module.exports = mongoose.model('Order', orderSchema);