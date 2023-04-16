const webScrap = require('./webScrapService')
const productModel = require('../model/productModel')

const searchAllProducts = async (company, product, search) => {
  const verifyDB = await productModel.findOne({searchInput: search, searchCompany: company, searchProducts: product}).exec();
  if (verifyDB) {
  return verifyDB.searchResult;
  }
  const urlMeli = `https://lista.mercadolivre.com.br/${product}/${search}`;
  const urlBuscape = `https://www.buscape.com.br/${product}/${search}`;
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

  productModel.create({searchInput: search, searchCompany: company, searchProducts: product, searchResult: result});
  return result;
  };

module.exports = {
  searchAllProducts,
}