export default function ProductCard({ product }) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transition hover:scale-105">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{product.price}</p>
        </div>
      </div>
    );
  }