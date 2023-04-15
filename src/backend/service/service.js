const webScrap = require('./webScrapService')
const productModel = require('../model/productModel')

const searchProducts = async (company, product, filter) => {
  const verifyDB = await productModel.findOne({searchInput: filter, searchCompany: company, searchProducts: product}).exec();
  console.log(verifyDB)
  if (verifyDB) {
    console.log('oi')
  return verifyDB.searchResult;
  }
  const urlMeli = `https://lista.mercadolivre.com.br/${product}#D[A:${product}]`;
  const urlBuscape = `https://www.buscape.com.br/${product}`;
  let result;
  switch (company) {
  case "all":
  const productsMeli = await webScrap.getWebScrapMeli(urlMeli);
  const productsBuscape = await webScrap.getWebScrapBuscape(urlBuscape);
  result = [...productsMeli, ...productsBuscape];
  break;
  case "meli":
  result = await webScrap.getWebScrapMeli(urlMeli);
  break;
  case "buscape":
  result = await webScrap.getWebScrapBuscape(urlBuscape);
  break;
  }
  const regex = new RegExp(filter, "i")
  result = result.filter((product) => regex.test(product.title))
  productModel.create({searchInput: filter, searchCompany: company, searchProducts: product, searchResult: result});
  return result;
  };

module.exports = {
  searchProducts,
}