import React from "react";
import { Link } from "react-router-dom";
import {
  FaCompass,
  FaLightbulb,
  FaBolt,
  FaCode,
  FaRedo,
} from "react-icons/fa";

const Directions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto relative">      
    <Link
        to="/learn"
        className="fixed bottom-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition"
      >
        🔙 Back to Topics
      </Link>
      <h1 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2">
        <FaCompass className="text-purple-500" />
        Directions
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Direction problems test your ability to visualize and interpret spatial movement. These problems involve cardinal directions (North, South, East, West) and require you to calculate final positions, distances, and angles of turns.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaLightbulb className="text-green-600" />
          Key Concepts
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>4 cardinal directions: North, South, East, West.</li>
          <li>Right turn from North → East → South → West → North (Clockwise).</li>
          <li>Left turn from North → West → South → East → North (Anti-clockwise).</li>
          <li>Distance between two points = Use Pythagoras theorem if movement forms a right-angled triangle.</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaBolt className="text-purple-600" />
          Shortcuts
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            After 2 turns (e.g. right + right), direction changes by 180° → original direction is reversed.
          </li>
          <li>
            If start and end positions are known, final distance = 
            <span className="font-mono ml-1">√(x² + y²)</span>.
          </li>
          <li>
            Always sketch the path — draw arrows for each movement.
          </li>
        </ul>
      </section>

      {/* Code Example */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaCode className="text-blue-600" />
          Code Example (in Python)
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-gray-800">
{`# A person walks 3km North, 4km East. What's the distance from start?
import math

x = 4  # East
y = 3  # North
distance = math.sqrt(x**2 + y**2)
print(distance)  # Output: 5.0`}
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaRedo className="text-red-500" />
          Recap
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Understand how directions change with right and left turns.</li>
          <li>Use diagrams or arrows to track position and direction.</li>
          <li>Apply the Pythagorean theorem to calculate direct distances.</li>
        </ul>
      </section>

      {/* Floating Back Button */}

    </div>
  );
};

export default Directions;
