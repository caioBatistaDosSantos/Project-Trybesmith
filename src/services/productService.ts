import productModel from '../models/productModel';

const getProductsAll = async () => {
  const products = await productModel.getProductsAll();
  
  return products;
};

const createProduct = async (name: string, amount: string) => {
  const registeredProduct = await productModel.createProduct(name, amount);

  return registeredProduct;
};

const productService = {
  getProductsAll,
  createProduct,
};

export default productService;