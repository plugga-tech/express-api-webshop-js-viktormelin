import asyncHandler from 'express-async-handler';
import Product from '../models/product.model';
import { Types } from 'mongoose';

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  if (!products) {
    res.status(500);
    throw new Error('Failed to fetch products from server');
  }

  res.status(200).json(products);
});

export const getProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const id = new Types.ObjectId(productId);

  if (!id) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const product = await Product.findById(id);

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(404);
    throw new Error('No product found');
  }
});

export const getProductsById = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const id = new Types.ObjectId(categoryId);

  if (!id) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const products = await Product.find({ category: id });

  if (products) {
    res.status(201).json(products);
  } else {
    res.status(404);
    throw new Error('No products found');
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, lager, category } = req.body;

  if (!name || !description || !price || !lager || !category) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const categoryId = new Types.ObjectId(category);

  const createdProduct = await Product.create({
    name,
    description,
    price,
    lager,
    category: categoryId,
  });

  if (createdProduct) {
    res.status(201).json(createdProduct);
  } else {
    res.status(500);
    throw new Error('Failed to create new product');
  }
});
