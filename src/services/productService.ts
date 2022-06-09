import productModel from '../models/productModel';

const getProductsAll = async () => {
  const products = await productModel.getProductsAll();
  
  return products;
};

const productService = { getProductsAll };

export default productService;