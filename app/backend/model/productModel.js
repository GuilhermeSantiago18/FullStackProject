const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  searchInput: String,
  searchCompany: String,
  searchProducts: String,
  searchResult: [{
    title: String,
    price: String,
    image: String,
    link: String,
  }],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
