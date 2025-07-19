import React from "react";
import { useNavigate } from "react-router-dom";

export default function Practice() {
  const navigate = useNavigate();

  const handleStart = (level) => {
    navigate(`/practice/${level.toLowerCase()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🧠 Practice Zone</h1>
      <p className="text-gray-700 mb-6">
        Select a difficulty level to begin practicing aptitude questions. Each level comes with a timer and scoring system.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <button
          onClick={() => handleStart("Easy")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          🟢 Easy
        </button>
        <button
          onClick={() => handleStart("Medium")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          🟡 Medium
        </button>
        <button
          onClick={() => handleStart("Hard")}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200"
        >
          🔴 Hard
        </button>
      </div>
    </div>
  );
}
