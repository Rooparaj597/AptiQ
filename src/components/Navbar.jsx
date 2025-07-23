import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", label: "Home 🏠" },
    { to: "/learn", label: "Learn 📘" },
    { to: "/practice", label: "Practice 🧠" },
  ];

  const navClass = ({ isActive }) =>
    isActive ? "text-yellow-300 font-semibold" : "text-white hover:text-yellow-300";

  return (
    <nav className="bg-blue-600 text-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">AptiQ</h1>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={navClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-blue-700 absolute w-full left-0 top-full z-40">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={navClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
