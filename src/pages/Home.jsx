import React from "react";
import { Link } from "react-router-dom";
import { useStreak } from "../Context/StreakContext";

export default function Home() {
  const streak = useStreak();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Welcome to AptiQ 💡</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Master Aptitude from A to Z — with clear concepts, shortcut tricks, and daily practice.
      </p>

      {/* 🔥 Only one streak display */}
      <p className="text-yellow-600 font-medium text-sm mb-4">
        🔥 Your Current Streak: {streak} day{streak > 1 ? "s" : ""}
      </p>

      <div className="flex gap-4 mb-10">
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
      </div>

      <p className="mt-12 text-sm text-gray-500">Made for students. Built by Rooparaj.</p>
    </div>
  );
}
