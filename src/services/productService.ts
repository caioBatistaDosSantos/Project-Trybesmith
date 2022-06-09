import { getAllProductsModel } from '../models/productModel';

const getAllProductsService = async () => {
  const products = await getAllProductsModel();
  
  return products;
};

export default getAllProductsService;