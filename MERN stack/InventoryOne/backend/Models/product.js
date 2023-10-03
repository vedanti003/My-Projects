// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  gst: { type: Number, required: true }, 
  date: { type: Date, default: Date.now }
}); 
const Product = mongoose.model('Product', productSchema);

const salesSchema = new mongoose.Schema({
  name: { type: String, required: true},
  price: { type: Number, required: true },
  description: String,
  gst: { type: Number, required: true }, 
  date: { type: Date, default: Date.now }
})

const Sales = mongoose.model('Sales', salesSchema);

const purchaseSchema = new mongoose.Schema({
  name: { type: String, required: true},
  price: { type: Number, required: true },
  description: String,
  gst: { type: Number, required: true }, 
  date: { type: Date, default: Date.now }
})

const Purchase = mongoose.model('Purchase', purchaseSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = { Purchase, Sales , User };
