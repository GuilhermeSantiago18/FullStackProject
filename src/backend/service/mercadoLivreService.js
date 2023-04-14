const Product = require("../model/productModel");
const axios = require("axios");
const cheerio = require("cheerio");


const getWebScrapMeli = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const products = [];
    $("li.ui-search-layout__item").each((i, el) => {
      const title = $(el).find("h2.ui-search-item__title").text().trim();
      const price = 'R$ ' + $(el).find("span.price-tag-amount").children().eq(1).text()
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


module.exports = {
  getWebScrapMeli,
};
