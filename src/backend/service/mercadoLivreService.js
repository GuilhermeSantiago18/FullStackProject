const Product = require("../model/productModel");
const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://lista.mercadolivre.com.br/";

const urlRefrigerador = `${URL}geladeira#D[A:geladeira]`;
const urlMobile = `${URL}celular#D[A:celular]`;
const urlTV = `${URL}tv#D[A:tv]`;

const getWebScrap = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const products = [];
    $("li.ui-search-layout__item").each((i, el) => {
      const title = $(el).find("h2.ui-search-item__title").text().trim();
      const price = $(el).find("span.price-tag-amount").text().trim().split("R$").at(1);
      const image = $(el).find("img.ui-search-result-image__element").attr("data-src");
      const link = $(el).find("a.ui-search-link").attr("href");
      const category = {};
      products.push({ title, price, image, link, category });
    });
    return Product.create(products);
  } catch (error) {
    console.error(error);
  }
};

const getAll = async () => {
  const allProducts = await Product.find();
  if (!allProducts) return await getWebScrap()
  return allProducts
};

// const getProductsURL = async (query, category, url) => {
//   let newUrl = "";
//   switch (category) {
//     case "refrigerator":
//       newUrl = `${url}geladeira#D[A:geladeira]`;
//       break;
//     case "mobile":
//       newUrl = `${url}celular#D[A:celular]`;
//       break;
//     case "tv":
//       newUrl = `${url}tv#D[A:tv]`;
//       break;
//     default:
//       return [];
//   }

//   const allProducts = await Product.find();
//   if (allProducts.length === 0) {
//     await getWebScrap(newUrl);
//   }

//   return allProducts;
// }


module.exports = {
  getAll,
};
