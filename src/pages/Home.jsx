import React from "react";
import { Link } from "react-router-dom";
import { useStreak } from "../Context/StreakContext";

export default function Home() {
  const streak = useStreak();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 text-center">

      <h1 className="absolute top-20 text-5xl font-bold text-blue-700 dark:text-blue-400">
        Welcome to AptiQ 💡
      </h1>

      <p className="mt-40 text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6">
        Master Aptitude from A to Z — with clear concepts, shortcut tricks, and daily practice.
      </p>

      {/* 🔥 Streak Display */}
      <p className="text-yellow-600 font-medium text-sm mb-4">
        🔥 Your Current Streak: {streak} day{streak > 1 ? "s" : ""}
      </p>

      {/* Buttons */}
      <div className="flex gap-6 mb-10">
        <Link to="/learn">
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition text-lg">
            📘 Learn
          </button>
        </Link>
        <Link to="/practice">
          <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition text-lg">
            🧠 Practice
          </button>
        </Link>
      </div>

      <p className="mt-12 text-sm text-gray-500 dark:text-gray-400">
        Made for students. Built by Rooparaj.
      </p>
    </div>
  );
}
