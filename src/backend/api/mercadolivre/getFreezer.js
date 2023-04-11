const axios = require("axios");
const cheerio = require("cheerio");

const url = `https://lista.mercadolivre.com.br/celular#D[A:celular]`;

async function getFreezer() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const products = [];
    $('li.ui-search-layout__item').each((i, el) => {
      const title = $(el).find('h2.ui-search-item__title').text().trim();
      const price = $(el).find('span.price-tag-amount').text()
      const image = $(el).find('img.ui-search-result-image__element').attr('data-src');
      const link = $(el).find('a.ui-search-link').attr('href')
      const category = 'Phones'
      products.push({ title, price, image, link, category });
    });
    console.log(products);
  } catch (error) {
    console.error(error);
  }
}

getFreezer();
