import { useState } from 'react';
import CartItem from '../components/CartItem';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import useCart from '../hooks/useCart';
import useOrders from '../hooks/useOrders';
import useUser from '../hooks/useUser';

const Cart = () => {
  const { cart, clearCart } = useCart();
  const { createOrder } = useOrders();
  const { getUser } = useUser();
  const user = getUser();

  const [text, setText] = useState('');

  const onCreateOrder = async () => {
    let orderItems = [];
    for (const temp of cart) {
      orderItems.push({
        productId: temp._id,
        quantity: temp.count,
      });
    }

    const response = await createOrder(orderItems);

    if (typeof response === 'object') {
      clearCart();
      setText(`Tack för din beställning, en order med id ${response._id} har skapats`);
    } else {
      setText(response);
    }
  };

  return (
    <div>
      <Navbar showCart={true} />
      {cart && cart.length > 0 && cart.map((item) => <CartItem product={item} />)}
      <button disabled={!user || cart.length <= 0} onClick={onCreateOrder}>
        Skapa beställning
      </button>
      <p>{text}</p>
    </div>
  );
};

export default Cart;
