import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const requestProducts = async () => {
  const { data } = await api.get("/products");
  console.log(data)
  return data;
};

export const requestProductsURL = async (dataset) => {
  const config = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await api.post("/products/url", dataset, config);
  return response;
};
