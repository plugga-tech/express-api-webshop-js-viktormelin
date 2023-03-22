import { Router } from 'express';
import protect from '../middlewares/auth.middleware';
import { createOrder, getOrder, getOrders } from '../controllers/order.controller';

const orderRouter = Router();

orderRouter.get('/all/:token', getOrders);
orderRouter.get('/user', protect, getOrder);
orderRouter.post('/add', createOrder);

export default orderRouter;
