const ProductService = require('../service/mercadoLivreService');

const getAll = async (req, res) => {
  try {
    const products = await ProductService.getAll();
    return res.status(201).json(products);
  } catch (error) {
   return res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  getAll,
};