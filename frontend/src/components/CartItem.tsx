import { useState } from 'react';
import { Cart, Product } from '../types/typings';
import useCart from '../hooks/useCart';
import { internationlizeCurrency } from '../utils/helpers';

const CartItem = ({ product }: { product: Cart }) => {
  const { updateCountInCart, removeFromCart } = useCart();
  const [count, setCount] = useState(product.count);

  const decreaseCount = () => {
    let newCount;
    if (count - 1 < 0) {
      newCount = 0;
      setCount(newCount);
    } else {
      newCount = count - 1;
      setCount(newCount);
    }

    updateCountInCart(product, newCount);
  };

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateCountInCart(product, newCount);
  };

  return (
    <div className='category__products_product' key={product._id}>
      <img src='http://via.placeholder.com/170x120' alt='' />
      <p>{product.name}</p>
      <p>{internationlizeCurrency(product.price)}</p>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input type='number' value={count} onChange={(e) => setCount(Number(e.currentTarget.value))} />
        <button onClick={increaseCount}>+</button>
      </div>
      <button onClick={() => removeFromCart(product, count)}>Ta bort från kundvagnen</button>
    </div>
  );
};

export default CartItem;
