import React from "react";
import { Link } from "react-router-dom";

const Learn = () => {
  const topics = [
    { name: "Calendar", path: "/learn/calendar" },
    { name: "Ratio", path: "/learn/ratio" },
    { name: "Directions", path: "/learn/directions" },
    { name: "Number System", path: "/learn/number-system" },
    { name: "Profit & Loss", path: "/learn/profit-loss" },
    { name: "Arrangements of Words", path: "/learn/arrangements" },
    { name: "Time-Speed-Distance", path: "/learn/tsd" },
    { name: "Percentage", path: "/learn/percentage" },
    { name: "Cube Roots", path: "/learn/cube-roots" },
    { name: "Clock", path: "/learn/clock" }
  ];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📚 Learn Topics</h1>
      <div className="space-y-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <Link
              to={topic.path}
              className="text-lg font-semibold text-blue-600 dark:text-blue-400"
            >
              {topic.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
