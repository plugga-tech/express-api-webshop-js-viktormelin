import React, { useEffect, useState } from 'react';
import { Cart, Product } from '../types/typings';
import { useAtom } from 'jotai';
import { cartAtomPersistance } from '../utils/store';
import useProducts from './useProducts';

const useCart = () => {
  const { data } = useProducts();
  const [cartJSON, setCart] = useAtom(cartAtomPersistance);

  let cart: Cart[] = [];

  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }

  const updateStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = (product: Product, count: number) => {
    const tempCart = cart;
    tempCart.push({
      ...product,
      count,
    });

    setCart(tempCart);
    updateStorage();
  };

  const removeFromCart = (product: Product, count: number) => {
    const tempCart = cart;
    const index = tempCart.map((item) => item._id).indexOf(product._id);
    if (index > -1) {
      tempCart.splice(index, 1);
    }

    setCart(tempCart);
    updateStorage();
  };

  const updateCountInCart = (product: Product, newCount: number) => {
    const tempCart = cart;
    for (const item of cart) {
      if (item._id === product._id) {
        item.count = newCount;
      }
    }

    setCart(tempCart);
    updateStorage();
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  useEffect(() => {
    const storage = localStorage.getItem('cart');

    if (storage) {
      setCart(JSON.parse(storage));
    }
  }, []);

  return { cart, addToCart, removeFromCart, updateCountInCart, clearCart };
};

export default useCart;
