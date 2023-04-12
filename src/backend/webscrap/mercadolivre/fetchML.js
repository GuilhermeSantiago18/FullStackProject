const axios = require("axios");
const cheerio = require("cheerio");

// const urlMobile = `https://lista.mercadolivre.com.br/celular#D[A:celular]`;

const urlRefrigerador = 'https://lista.mercadolivre.com.br/geladeira#D[A:geladeira]';

const urlTV = 'https://lista.mercadolivre.com.br/tv#D[A:tv]';


async function getProductsMercadoLivre() {
  try {
    const { data } = await axios.get(urlRefrigerador);
    const $ = cheerio.load(data);
    const products = [];
    $('li.ui-search-layout__item').each((i, el) => {
      const title = $(el).find('h2.ui-search-item__title').text().trim();
      const price = $(el).find('span.price-tag-amount').text().trim().split('R$').at(1)
      const image = $(el).find('img.ui-search-result-image__element').attr('data-src');
      const link = $(el).find('a.ui-search-link').attr('href');
      const category = {}
      products.push({ title, price, image, link, category });
    });
    console.log(products);
  } catch (error) {
    console.error(error);
  }
}
getProductsMercadoLivre()
