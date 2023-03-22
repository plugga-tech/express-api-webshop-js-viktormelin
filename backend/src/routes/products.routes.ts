import { Router } from 'express';
import { createProduct, getProduct, getProducts, getProductsById } from '../controllers/products.controller';
import protect from '../middlewares/auth.middleware';

const productRouter = Router();

productRouter.get('/', getProducts);
productRouter.get('/:productId', getProduct);
productRouter.post('/add', protect, createProduct);
productRouter.get('/category/:categoryId', getProductsById);

export default productRouter;
