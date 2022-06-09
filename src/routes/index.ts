import { Router } from 'express';
import productController from '../controllers/productController';

const router = Router();

router.get('/products', productController.getProductsAll);

export default router; 