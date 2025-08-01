import React from "react";
import { Link } from "react-router-dom";
import {
  FaBalanceScale,
  FaLightbulb,
  FaBolt,
  FaCode,
  FaRedo,
} from "react-icons/fa";

const Ratio = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto relative">
    <Link
        to="/learn"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        🔙 Back to Topics
      </Link>
      <h1 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
        <FaBalanceScale className="text-blue-500" />
        Ratio
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" />
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Ratio is a comparison between two quantities showing how many times
          one value contains or is contained within the other. It’s commonly
          written as a:b and is used in problems involving comparisons,
          proportions, scaling, and distribution.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaLightbulb className="text-green-600" />
          Key Concepts
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>If a:b = 2:3, then a = 2x and b = 3x for some x.</li>
          <li>To find a common ratio among more than 2 values, convert all to the same base.</li>
          <li>If a/b = c/d, then ad = bc (cross multiplication).</li>
          <li>To divide an amount in a ratio a:b, split it as (a/(a+b)) and (b/(a+b)).</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaBolt className="text-purple-600" />
          Shortcuts
        </h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-2">
          <li>If A:B = 3:4 and B:C = 2:5 → A:B:C = 3×2 : 4×2 : 5×4 = 6:8:20</li>
          <li>To find the new ratio after an increase: Multiply each part accordingly and simplify.</li>
        </ul>
      </section>

      {/* Code Example (optional) */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaCode className="text-blue-600" />
          Code Example (in Python)
        </h2>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm text-gray-800">
{`# Dividing 3000 in the ratio 2:3
a = 2
b = 3
total = 3000
share_a = (a / (a + b)) * total
share_b = (b / (a + b)) * total
print(share_a, share_b)  # Output: 1200.0, 1800.0`}
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaRedo className="text-red-500" />
          Recap
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ratio shows proportional relationships between quantities.</li>
          <li>Helps in solving sharing, comparison, and scaling problems.</li>
          <li>Convert complex ratios using cross-multiplication or LCM methods.</li>
        </ul>
      </section>

      {/* Floating Back Button */}

    </div>
  );
};

export default Ratio;
