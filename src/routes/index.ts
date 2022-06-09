import { Router } from 'express';
import productController from '../controllers/productController';
import validateProduct from '../middlewares/validateProduct';

const router = Router();

router.get('/products', productController.getProductsAll);
router.post('/products', validateProduct, productController.getProductsAll);

export default router; 