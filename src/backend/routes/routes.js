const express = require('express');
const getAllProducts = require('../controller/mercadoLivreController')


const routes = express.Router();
routes.get('/products', getAllProducts.getAll);

module.exports = routes;