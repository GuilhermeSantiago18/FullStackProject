const meliService = require("../service/mercadoLivreService");
const buscapeService = require("../service/buscapeService");


const searchProducts = async (req,res) => {
  const { company, product } = req.body;
  const urlMeli = `https://lista.mercadolivre.com.br/${product}#D[A:${product}]`;
  const urlBuscape = `https://www.buscape.com.br/${product}`;
  let result;
  switch (company) {
    case "all":
      const productsMeli = await meliService.getWebScrapMeli(urlMeli);
      const productsBuscape = await buscapeService.getWebScrapBuscape(urlBuscape);
      result = [...productsMeli, ...productsBuscape];
      break;
    case "meli":
      result = await meliService.getWebScrapMeli(urlMeli);
      break;
    case "buscape":
      result = await buscapeService.getWebScrapBuscape(urlBuscape);
      break;
  }
 const { filter } = req.query;
const regex = new RegExp(filter, "i")
 result = result.filter((product) =>  regex.test(product.title))

if (result) {
  return res.status(201).json(result);
}
  return res.status(500).json({ error: "Internal server error" });
};

module.exports = {
  searchProducts,
};
