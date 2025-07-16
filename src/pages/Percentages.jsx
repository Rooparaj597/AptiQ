import React from "react";

export default function Percentages() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🔢 Percentages</h1>

      {/* Concept */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📘 Concept</h2>
        <p>
          Percent means “per hundred.” It’s a way of expressing a number as a part of 100. 
          For example, 25% means 25 out of 100.
        </p>
      </section>

      {/* Shortcut */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚡ Shortcut Trick</h2>
        <p>
          <strong>X% of Y = (X × Y) / 100</strong><br />
          Example: 40% of 250 = (40 × 250) / 100 = 100
        </p>
      </section>

      {/* Sample Question */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧠 Sample Question</h2>
        <p>Q. What is 20% more than 80?</p>
        <p className="mt-2 text-green-700 font-semibold">
          ➤ Solution: (20% of 80 = 16), so Answer = 80 + 16 = <strong>96</strong>
        </p>
      </section>

      {/* Code Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💻 JavaScript Code</h2>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{`function percentageIncrease(base, percent) {
  return base + (base * percent / 100);
}

console.log(percentageIncrease(80, 20)); // 96`}
        </pre>
      </section>

      {/* Visual Placeholder */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📊 Visual Explanation (Coming Soon)</h2>
        <div className="bg-blue-100 text-blue-700 p-4 rounded">
          📈 A graph or animation for percentage growth will go here.
        </div>
      </section>
    </div>
  );
}
