import React, { useState } from "react";
import { requestProductsURL } from "./service/api";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState("All");
  const [input, setInput] = useState("");

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
      search: input
    };
    await requestProductsURL(dataset);
  };

  return (
    <div>
      <label htmlFor="select">Escolha uma opção:</label>
      <select id="select" value={selectedCompany} onChange={handleChange}>
        <option value="All">All</option>
        <option value="buscape">Buscape</option>
        <option value="meli">Mercado Livre</option>
      </select>

      <label htmlFor="select">Escolha uma opção:</label>
      <select
        id="select"
        value={selectedProduct}
        onChange={handleChangeProduct}
      >
        <option value="All">All</option>
        <option value="tv">TV</option>
        <option value="geladeira">Mobile</option>
        <option value="celular">Refrigerator</option>
      </select>

      <input type="text" onChange={handleChangeInput} value={input}></input>

      <button type="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default App;
