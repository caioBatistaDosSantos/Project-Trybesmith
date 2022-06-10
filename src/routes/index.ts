import { Router } from 'express';
import productController from '../controllers/productController';
import userController from '../controllers/userController';
import validateProduct from '../middlewares/validateProduct';
import validateUser from '../middlewares/validateUser';

const router = Router();

router.get('/products', productController.getProductsAll);
router.post('/products', validateProduct, productController.createProduct);

router.post('/users', validateUser, userController.createUser);

export default router;