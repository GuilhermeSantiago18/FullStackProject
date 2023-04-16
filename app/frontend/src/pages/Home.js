import { useState } from "react";
import { requestProductsURL } from "../service/api";
import ProductsCard from "../components/ProductsCard";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Stack,
  Container,
  CircularProgress,
} from "@mui/material";

function Home() {
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState("tv");
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusSearch, setStatusSearch] = useState(false);

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
    setIsLoading(true);
    const dataset = {
      company: selectedCompany,
      product: selectedProduct,
      search: input,
    };
    const { data } = await requestProductsURL(dataset);

    setProducts(data);
    setStatusSearch(true)
    setIsLoading(false);
  };

  return (
    <Container>
      <Stack
        spacing={1}
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        p={5}
      >
        <FormControl sx={{ width: "100%" }}>
          <Select value={selectedCompany} onChange={handleChange}>
            <MenuItem value="all">Todas</MenuItem>
            <MenuItem value="buscape">Buscape</MenuItem>
            <MenuItem value="meli">Meli</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "100%" }}>
          <Select value={selectedProduct} onChange={handleChangeProduct}>
            <MenuItem value="tv">TV</MenuItem>
            <MenuItem value="geladeira">Geladeira</MenuItem>
            <MenuItem value="celular">Celular</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Filtro de pesquisa"
          variant="outlined"
          fullWidth
          value={input}
          onChange={handleChangeInput}
        />
        <Button
          color="success"
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Pesquisar
        </Button>
      </Stack>
      {isLoading ? (
        <Grid container p={2} justifyContent="center" alignItems="center">
          <CircularProgress color="success" />
        </Grid>
      ) : products.length === 0 && statusSearch ? (
        <Grid
          container
          p={2}
          justifyContent="center"
          alignItems="center"
          sx={{ color: "white" }}
        >
          <p>Não há produtos disponíveis para esta pesquisa.</p>
        </Grid>
      ) : (
        <Grid
          container 
          p={2}
          rowGap={1}
          justifyContent="center"
          alignItems="center"
          sx={{ color: "black" }}
        >
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
        </Grid>
      )}
    </Container>
  );
}

export default Home;
