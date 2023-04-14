const Product = require("../model/productModel");
const axios = require("axios");
const cheerio = require("cheerio");
const sharp = require('sharp');




async function getWebScrapBuscape(url) {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const products = [];
    $('[data-testid="product-card"]').each((i, el) => {
      const title = $(el).find('[data-testid="product-card::name"]').text().trim();
      const price = $(el).find('[data-testid="product-card::price"]').text().trim();
      let image = $(el).find('div[data-testid="product-card::image"]').children().eq(0).find('noscript').html()
      if (typeof image !== 'object') {
          image = image.split(' ').filter((e) => e.startsWith('src')).join('').slice(5, -1);
      } else {
        image = $(el).find('div[data-testid="product-card::image"]').find('img').attr('src');
      }
      const requireLink =  $(el).find('.SearchCard_ProductCard_Inner__7JhKb').attr('href');
      const category = {}
      if (requireLink.startsWith('/')) {
        const link = 'https://buscape.com.br' + requireLink
        products.push({ title, price, image, link, category });
      } else {
        products.push({ title, price, image, requireLink, category });
      }
     
    });
    return Product.create(products)
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  getWebScrapBuscape,
}