const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  price: String,
  image: String,
  link: String,
  category: Object
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
