import React from "react";
import { Link } from "react-router-dom";

const Practice = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-yellow-300">🧠 Practice Center</h1>

      <p className="mb-4 text-lg">
        Choose your level or try a topic-specific quiz to test your skills!
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Link
          to="/practice/easy"
          className="bg-green-600 hover:bg-green-500 p-5 rounded-2xl shadow-md text-center"
        >
          🔹 Easy
        </Link>

        <Link
          to="/practice/medium"
          className="bg-yellow-600 hover:bg-yellow-500 p-5 rounded-2xl shadow-md text-center"
        >
          🔸 Medium
        </Link>

        <Link
          to="/practice/hard"
          className="bg-red-600 hover:bg-red-500 p-5 rounded-2xl shadow-md text-center"
        >
          🔺 Hard
        </Link>

        <Link
          to="/practice/cuberoots"
          className="bg-blue-700 hover:bg-blue-600 p-5 rounded-2xl shadow-md text-center col-span-full"
        >
          🧊 Cube Roots Quiz
        </Link>
      </div>
    </div>
  );
};

export default Practice;
