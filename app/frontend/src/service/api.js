import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});


export const requestProductsURL = async (dataset) => {
  const response = await api.post(`/products/url`, dataset);
  return response;
};
