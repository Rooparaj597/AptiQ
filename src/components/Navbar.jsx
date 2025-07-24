import { NavLink } from "react-router-dom";

export default function Navbar() {
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

        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
