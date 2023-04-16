import { useState } from "react";
import { requestProductsURL } from "../service/api";
import ProductsCard from "../components/ProductsCard";
import { Button, TextField, Select, MenuItem, FormControl } from "@mui/material";

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
    console.log(data);
    setProducts(data);
  };

  return (
    <div>
      <FormControl sx={{ width: '20ch' }}>
      <Select
        value={selectedCompany}
        onChange={handleChange}
      >
        <MenuItem value='all'>All</MenuItem>
        <MenuItem value='buscape'>Buscape</MenuItem>
        <MenuItem value='meli'>Meli</MenuItem>
      </Select>
      </FormControl>
      <FormControl sx={{ width: '25ch' }}>
      <Select
        value={selectedProduct}
        onChange={handleChangeProduct}
      >
        <MenuItem value='tv'>TV</MenuItem>
        <MenuItem value='geladeira'>Refrigerator</MenuItem>
        <MenuItem value='celular'>Mobile</MenuItem>
      </Select>
      </FormControl>
      <TextField id="outlined-basic" value={input}  onChange={handleChangeInput}/>

      <Button color="success" variant="contained" onClick={handleClick}>
        Search
      </Button>
      
      {products.map(({ title, price, image, link, market }, index) => (
        <ProductsCard
          key={index}
          title={title}
          price={price}
          image={image}
          link={link}
          market={market}
        />
      ))}
    </div>
  );
}

export default Home;
