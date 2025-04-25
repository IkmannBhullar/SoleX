import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-all">
      <Navbar />
      <Hero />
      <ProductGrid />
    </div>
  );
}

export default App;