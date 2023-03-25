import { useState } from 'react';
import { Product } from '../types/typings';
import useCart from '../hooks/useCart';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    if (count - 1 < 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addToCart(product, count);
    }
  };

  return (
    <div className='category__products_product' key={product._id}>
      <img src='http://via.placeholder.com/170x120' alt='' />
      <p>{product.name}</p>
      <p>{product._id}</p>
      <div>
        <button onClick={decreaseCount}>-</button>
        <input type='number' value={count} onChange={(e) => setCount(Number(e.currentTarget.value))} />
        <button onClick={increaseCount}>+</button>
      </div>
      <button onClick={handleAddToCart}>Lägg till i kundvagn</button>
    </div>
  );
};

export default ProductCard;
