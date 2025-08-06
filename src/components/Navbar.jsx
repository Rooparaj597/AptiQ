import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

export default function Navbar() {
  const navItems = [
    { to: "/", label: "Home 🏠" },
    { to: "/learn", label: "Learn 📘" },
    { to: "/practice", label: "Practice 🧠" },
  ];

  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h1>AptiQ</h1>
      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
        <button
          className={`toggle-btn ${darkMode ? "dark" : ""}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}
