import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-black shadow-md">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">SoleX</h1>
      <button onClick={() => setDark(!dark)} className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full">
        {dark ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}