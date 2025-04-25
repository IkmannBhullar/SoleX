import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductGrid() {
  return (
    <div className="px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}