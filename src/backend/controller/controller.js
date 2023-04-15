const searchService = require("../service/service");

const searchProducts = async (req, res) => {
  const { company, product } = req.body;
  const { filter } = req.query;
  try {
    const resultProducts = await searchService.searchProducts(company, product, filter);
    return res.status(201).json(resultProducts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  searchProducts,
};
