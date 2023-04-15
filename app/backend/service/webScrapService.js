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
      let price = $(el).find("span.price-tag-amount").children().text();
      price.split('R$').length === 4 ? price = price.split('R$').at(2) : price = price.split('R$').at(1);
      const image = $(el).find("img.ui-search-result-image__element").attr("data-src");
      const link = $(el).find("a.ui-search-link").attr("href");
      const market = 'Mercado Livre'
      products.push({ title, price, image, link, market });
    });
    return products;
  } catch (error) {
    console.error(error);
  }
};

async function getWebScrapBuscape(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const products = [];
    $('[data-testid="product-card"]').each((i, el) => {
      const title = $(el).find('[data-testid="product-card::name"]').text().trim();
      const price = $(el).find('[data-testid="product-card::price"]').text().trim();
      const market = 'Buscapé'
      let image = $(el).find('div[data-testid="product-card::image"]').children().eq(0).find("noscript").html();
      if (typeof image !== "object") {
        image = image.split(" ").filter((e) => e.startsWith("src")).join("").slice(5, -1);
      } else {
        image = $(el).find('div[data-testid="product-card::image"]').find("img").attr("src");
      }
      const requireLink = $(el).find(".SearchCard_ProductCard_Inner__7JhKb").attr("href");
      if (requireLink.startsWith("/")) {
        const link = "https://buscape.com.br" + requireLink;
        products.push({ title, price, image, link });
      } else {
        products.push({ title, price, image, requireLink, market });
      }
    });
    return products;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getWebScrapMeli,
  getWebScrapBuscape,
};
