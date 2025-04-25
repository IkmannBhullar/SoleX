import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-center py-20 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900">
      <motion.h1 
        className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Step Into The Hype
      </motion.h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Buy & Sell Authentic Sneakers</p>
    </div>
  );
}