import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">AptiQ</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-yellow-300">Home → 🏠</Link></li>
          <li><Link to="/learn" className="hover:text-yellow-300">Learn → 📘</Link></li>
          <li><Link to="/practice" className="hover:text-yellow-300">Practice → 🧠</Link></li>
        </ul>
      </div>
    </nav>
  );
}
