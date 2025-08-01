import React from "react";
import { Link } from "react-router-dom";
import { FaLightbulb, FaCode, FaBolt, FaRedo } from "react-icons/fa";

const NumberSystem = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">      
    <div className="fixed bottom-6 right-6">
        <Link to="/learn" className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition">
          ← Back to Topics
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Number System</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaLightbulb /> Introduction
        </h2>
        <p className="mt-2 text-gray-700">
          The Number System is the foundation of all arithmetic. It includes natural numbers, integers, rational and irrational numbers, and more.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaBolt /> Key Concepts
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
          <li>Natural Numbers, Whole Numbers, Integers</li>
          <li>Even/Odd Numbers, Prime & Composite Numbers</li>
          <li>Divisibility Rules, HCF and LCM</li>
          <li>Rational & Irrational Numbers</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaBolt /> Shortcuts
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
          <li>Use divisibility rules (2, 3, 5, 9, 11) for quick checks</li>
          <li>LCM × HCF = Product of Numbers (for two numbers)</li>
          <li>Sum of first n natural numbers = n(n+1)/2</li>
        </ul>
      </section>

      {/* Code */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaCode /> Code Example
        </h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Python: Find LCM and HCF
import math
a, b = 12, 18
hcf = math.gcd(a, b)
lcm = abs(a * b) // hcf
print("HCF:", hcf, "LCM:", lcm)`}
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <FaRedo /> Recap
        </h2>
        <p className="mt-2 text-gray-700">
          Number Systems cover a broad range of concepts from prime factorization to divisibility. Mastering them is key to many aptitude questions.
        </p>
      </section>

      {/* Back Link */}

    </div>
  );
};

export default NumberSystem;
