import axios from "axios";

const URL = process.env.REACT_APP_API || 'http://localhost:3001'
const api = axios.create({
  baseURL: URL,
});


export const requestProductsURL = async (dataset) => {
  const response = await api.post(`/products/url`, dataset);
  return response;
};
