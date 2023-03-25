import asyncHandler from 'express-async-handler';
import * as argon2 from 'argon2';
import User from '../models/user.model';
import { signJWT } from '../utils/jwt';

export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');

  if (!users) {
    res.status(500);
    throw new Error('Failed to fetch users from server');
  }

  res.status(200).json(users);
});

export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const user = await User.findById(id).select('-password');

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('No user found');
  }
});

export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const doesUserExist = await User.findOne({ email });
  if (doesUserExist) {
    res.status(400);
    throw new Error('User already exists');
  }

  const hashedPassword = await argon2.hash(password);

  const createdUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (createdUser) {
    res.status(201).json({
      _id: createdUser.id,
      name: createdUser.name,
      token: await signJWT(createdUser._id),
    });
  } else {
    res.status(500);
    throw new Error('Failed to create user');
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Missing required fields');
  }

  const foundUser = await User.findOne({ email });

  if (!foundUser) {
    res.status(404);
    throw new Error('No user exists with that email');
  }

  try {
    if (await argon2.verify(foundUser.password, password)) {
      res.status(200).json({
        _id: foundUser.id,
        name: foundUser.name,
        token: await signJWT(foundUser._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    throw new Error(typeof error === 'string' ? error : 'Invalid credentials');
  }
});
