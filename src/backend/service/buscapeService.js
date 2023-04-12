const axios = require("axios");
const cheerio = require("cheerio");



const urlRefrigerador = 'https://lista.mercadolivre.com.br/geladeira#D[A:geladeira]';

const urlTV = 'https://lista.mercadolivre.com.br/tv#D[A:tv]';

const urlMobile = `https://www.buscape.com.br/geladeira`;

async function getProductsBuscape() {
  try {
    const { data } = await axios.get(urlMobile);
    const $ = cheerio.load(data);
    const products = [];
    $('[data-testid="product-card"]').each((i, el) => {
      const title = $(el).find('[data-testid="product-card::name"]').text().trim();
      const price = $(el).find('[data-testid="product-card::price"]').text().trim()
      const image = $(el).find('div[data-testid="product-card::image"]').find('img').attr('src')
      const link = 'https://www.buscape.com.br' + $(el).find('a.SearchCard_ProductCard_Inner__7JhKb').attr('href');
      const category = {}
      products.push({ title, price, image, link, category });
    });
  } catch (error) {
    console.error(error);
  }
}
getProductsBuscape()

