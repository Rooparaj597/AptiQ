// File: src/pages/learn/CubeRoots.jsx

import React from "react";

const CubeRoots = () => {
  return (
    <div className="p-6 md:p-10 text-white">
        <Link to="/learn" className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition">
          ← Back to Topics
        </Link>
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">🧊 Cube Roots</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-green-400 mb-2">📘 Introduction</h2>
        <p>
          Cube roots are the inverse of cubes. Finding cube roots of perfect cubes is a common
          aptitude problem and can often be solved mentally using patterns and shortcuts. It’s
          useful for speed maths and number-based reasoning.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">🔑 Key Concepts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Cube root (∛x) is a number that gives x when multiplied by itself three times.</li>
          <li>Perfect cubes up to 20: 1, 8, 27, 64, 125, ..., 8000</li>
          <li>Units digit of cube root can be found using patterns in cubes.</li>
          <li>Cube roots are unique for all real numbers (positive or negative).</li>
        </ul>
      </section>

      {/* Shortcuts & Tricks */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-pink-400 mb-2">⚡ Shortcuts & Tricks</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Look at the last digit to identify unit digit of cube root.</li>
          <li>Ignore last 3 digits of number to identify tens/hundreds digit from known cubes.</li>
          <li>Memorize cubes of 1–20 for speed.</li>
          <li>
            Example: ∛39304 → last digit 4 → cube root ends with 4; 39 lies between 27 (3³) and 64 (4³) → tens digit is 3 → ∛39304 = 34
          </li>
        </ul>
      </section>

      {/* Formulae */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-2">🧮 Formulae</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Cube Root:</strong> ∛x = x<sup>1/3</sup></li>
          <li><strong>If x = a³</strong>, then ∛x = a</li>
          <li>Use identity: (a + b)³ = a³ + 3a²b + 3ab² + b³ (for expansion, rarely used in basic aptitude)</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-orange-400 mb-2">📊 Examples</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Q:</strong> Find cube root of 79507 <br />
            <strong>Solution:</strong> Last digit is 7 → root ends with 3. Remove last 3 digits → 79 → between 64 (4³) and 125 (5³) → tens digit is 4. So, ∛79507 = <strong>43</strong>
          </li>
          <li>
            <strong>Q:</strong> Is 12167 a perfect cube? <br />
            <strong>Solution:</strong> ∛12167 = 23 → Yes, it's a perfect cube.
          </li>
        </ol>
      </section>

      {/* Code (Optional) */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-cyan-400 mb-2">💻 Code</h2>
        <pre className="bg-black p-4 rounded-lg overflow-x-auto text-sm">
{`# Python code to check cube root
def is_perfect_cube(n):
    root = round(n ** (1/3))
    return root if root ** 3 == n else -1

print(is_perfect_cube(12167))  # Output: 23`}
        </pre>
      </section>

      {/* Recap */}
      <section>
        <h2 className="text-xl font-semibold text-yellow-400 mb-2">🔁 Recap</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Cube root is the number multiplied three times to get the original number.</li>
          <li>Memorize cubes up to 20.</li>
          <li>Use unit digit pattern and estimation trick for fast calculation.</li>
        </ul>
      </section>
    </div>
  );
};

export default CubeRoots;
