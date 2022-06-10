import { Request, Response } from 'express';
import orderService from '../services/orderService';
import { HTTP_OK_STATUS } from '../utils/status-HTTP';

const getOrdersAll = async (_req: Request, res: Response) => {
  const products = await orderService.getOrdersAll();
  
  return res.status(HTTP_OK_STATUS).json(products);
};

const orderController = { getOrdersAll };

export default orderController;