import api from './api';

export async function getProducts() {
  const response = await api.get('/products');
  return response.data;
}

export async function searchProducts(name) {
  const response = await api.get(`/search/${name}`);
  return response.data;
}