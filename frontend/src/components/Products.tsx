import { Category, Product } from '../types/typings';
import ProductCard from './ProductCard';

const Products = ({ categories, products }: { categories: Category[]; products: Product[] }) => {
  return (
    <div className='category'>
      {categories.map((category) => (
        <>
          <div className='category__header'>
            <h2>{category.name}</h2>
          </div>
          <div className='category__products'>
            {products
              .filter((product) => product.category === category._id)
              .map((product) => (
                <ProductCard product={product} />
              ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Products;
