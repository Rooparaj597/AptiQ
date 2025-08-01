import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaBolt, FaCode, FaRedo } from "react-icons/fa";

const Clock = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">      
    <div className="fixed bottom-6 right-6">
        <Link to="/learn" className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition">
          ← Back to Topics
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Clock</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaLightbulb /> Introduction
        </h2>
        <p className="mt-2 text-gray-700">
          Clock problems involve calculating angles, overlaps, and timing between hour, minute, and second hands of a clock. These are common in aptitude tests.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaBolt /> Key Concepts
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
          <li>360° in 12 hours = 30° per hour</li>
          <li>360° in 60 minutes = 6° per minute</li>
          <li>Relative speed of hour and minute hands = 5.5°/min</li>
          <li>Clock gains/loses time problems</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaBolt /> Shortcuts
        </h2>
        <ul className="list-disc ml-6 mt-2 space-y-2 text-gray-700">
          <li>Angle = |30×hour - (11/2)×minutes|</li>
          <li>Hands overlap every 65 5⁄11 minutes</li>
          <li>Hands are at right angle every 15 minutes approx.</li>
        </ul>
      </section>

      {/* Code Example */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaCode /> Code Example
        </h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Python: Calculate angle between hour and minute hands
def clock_angle(h, m):
    angle = abs(30*h - 5.5*m)
    return min(angle, 360 - angle)

print(clock_angle(3, 15))  # 7.5°`}
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaRedo /> Recap
        </h2>
        <p className="mt-2 text-gray-700">
          Mastering clock problems requires quick calculations of angles and overlap times. Use standard formulas and practice visualizing clock hands.
        </p>
      </section>

      {/* Back Button */}

    </div>
  );
};

export default Clock;
