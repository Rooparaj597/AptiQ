import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-300";

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">AptiQ</h1>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6">
          <li><NavLink to="/" className={navClass}>Home 🏠</NavLink></li>
          <li><NavLink to="/learn" className={navClass}>Learn 📘</NavLink></li>
          <li><NavLink to="/practice" className={navClass}>Practice 🧠</NavLink></li>
        </ul>
      </div>

      {isOpen && (
        <ul className="flex flex-col gap-4 px-6 pb-4 md:hidden bg-blue-700">
          <li><NavLink to="/" className={navClass} onClick={toggleMenu}>Home 🏠</NavLink></li>
          <li><NavLink to="/learn" className={navClass} onClick={toggleMenu}>Learn 📘</NavLink></li>
          <li><NavLink to="/practice" className={navClass} onClick={toggleMenu}>Practice 🧠</NavLink></li>
        </ul>
      )}
    </nav>
  );
}
