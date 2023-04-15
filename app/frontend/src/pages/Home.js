import { useState } from "react";
import { requestProductsURL } from "../service/api";
import ProductsCard from "../components/ProductsCard";

function Home() {
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState("tv");
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = ({ target }) => {
    setSelectedCompany(target.value);
  };

  const handleChangeProduct = ({ target }) => {
    setSelectedProduct(target.value);
  };

  const handleChangeInput = ({ target }) => {
    setInput(target.value);
  };

  const handleClick = async () => {
    const dataset = {
      company: selectedCompany,
      product: selectedProduct,
      search: input,
    };
    const { data } = await requestProductsURL(dataset);
    console.log(data)
    setProducts(data);
  };

  return (
    <div>
      <label htmlFor="select">Escolha uma opção:</label>
      <select id="select" value={selectedCompany} onChange={handleChange}>
        <option value="all">All</option>
        <option value="buscape">Buscape</option>
        <option value="meli">Mercado Livre</option>
      </select>

      <label htmlFor="select"></label>
      <select
        id="select"
        value={selectedProduct}
        onChange={handleChangeProduct}
      >
        <option value="tv">TV</option>
        <option value="geladeira">Refrigerator</option>
        <option value="celular">Mobile</option>
      </select>

      <input type="text" onChange={handleChangeInput} value={input}></input>

      <button type="button" onClick={handleClick}>
        Search
      </button>
      {products.map(({ title, price, image, link }, index) => (
        <ProductsCard
          key={index}
          title={title}
          price={price}
          image={image}
          link={link}
        />
      ))}
    </div>
  );
}

export default Home;
