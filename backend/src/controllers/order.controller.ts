import asyncHandler from 'express-async-handler';
import Order from '../models/order.model';
import authenticate from '../utils/authenticate';
import Product from '../models/product.model';
import { Types } from 'mongoose';

interface ProductType {
  productId: Types.ObjectId;
  quantity: number;
}

export const getOrders = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const response = await authenticate(token);

  if (!response.success) {
    res.status(response.status as number);
    throw new Error(response.message as string);
  }

  const orders = await Order.find();

  if (!orders) {
    res.status(500);
    throw new Error('Failed to fetch orders from server');
  }

  res.status(200).json(orders);
});

export const getOrder = asyncHandler(async (req, res) => {
  const { user } = req.body;

  if (!user) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const orders = await Order.find({ user });

  if (!orders) {
    res.status(500);
    throw new Error('Failed to fetch orders from server');
  }

  res.status(200).json(orders);
});

export const createOrder = asyncHandler(async (req, res) => {
  const { user, products }: { user: Types.ObjectId; products: ProductType[] } = req.body;

  if (!user || !products) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const order = await Order.create({ user, products });

  if (!order) {
    res.status(500);
    throw new Error('Failed to create order from server');
  }

  for (const product of products) {
    await Product.findByIdAndUpdate(product.productId, {
      $inc: { lager: -product.quantity },
    });
  }

  res.status(200).json(order);
});
