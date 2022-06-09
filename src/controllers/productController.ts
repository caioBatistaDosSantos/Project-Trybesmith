import { Request, Response } from 'express';
import productService from '../services/productService';
import { HTTP_OK_STATUS, HTTP_CREATED_STATUS } from '../utils/status-HTTP';

const getProductsAll = async (_req: Request, res: Response) => {
  const products = await productService.getProductsAll();
  
  return res.status(HTTP_OK_STATUS).json(products);
};

const createProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const newProduct = await productService.createProduct(name, amount);

  return res.status(HTTP_CREATED_STATUS).json(newProduct);
};

const productController = {
  getProductsAll,
  createProduct,
};

export default productController;