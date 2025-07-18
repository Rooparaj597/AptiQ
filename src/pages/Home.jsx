import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to AptiQ 💡</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Master Aptitude from A to Z — with clear concepts, shortcut tricks, and daily practice.
      </p>

      <div className="flex gap-4">
        <Link to="/learn">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            📘 Start Learning
          </button>
        </Link>

        <Link to="/practice">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            🧠 Start Practice
          </button>
        </Link>
        <Link to="/learn/profit-loss" className="hover:text-blue-500">
            💰 Profit & Loss
        </Link>

      </div>

      <p className="mt-12 text-sm text-gray-500">Made for students. Built by Rooparaj.</p>
    </div>
  );
}
