const express = require('express');
const productsController = require('../controller/controller')


const routes = express.Router();
routes.post('/products/url', productsController.searchProducts);

module.exports = routes;