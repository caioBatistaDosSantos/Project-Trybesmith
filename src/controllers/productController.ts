import { Request, Response } from 'express';
import productService from '../services/productService';
import { HTTP_OK_STATUS } from '../utils/status-HTTP';

const getProductsAll = async (_req: Request, res: Response) => {
  const products = await productService.getProductsAll();
  
  return res.status(HTTP_OK_STATUS).json(products);
};

const productController = { getProductsAll };

export default productController;