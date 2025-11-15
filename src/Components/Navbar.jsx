import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Remembering theme through refresh
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme instantly whenever it changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="glass-card flex justify-between items-center px-6 py-3 mb-6">
      
      {/* Logo + Branding */}
      <Link
        to="/"
        className="flex text-2xl font-bold text-sky-600 hover:text-sky-500 dark:text-sky-400 cursor-pointer"
      >
        TaskFlow <h1 className="mt-2 font-bold"><FiCheck /></h1>
      </Link>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-sky-100 dark:bg-sky-800 cursor-pointer transition hover:scale-105 active:scale-95"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
      </button>
    </nav>
  );
};

export default Navbar;
