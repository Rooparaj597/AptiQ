import React from "react";

export default function ProfitLoss() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">💰 Profit & Loss</h1>

      {/* Concept */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">📘 Concept</h2>
        <p>
          <strong>Profit</strong> is the gain made when selling an item for more than its cost. <br />
          <strong>Loss</strong> is the deficit when selling it for less than its cost.
        </p>
      </section>

      {/* Shortcut */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">⚡ Shortcut Trick</h2>
        <p>
          <strong>Profit%</strong> = (Profit / Cost Price) × 100 <br />
          <strong>Loss%</strong> = (Loss / Cost Price) × 100
        </p>
      </section>

      {/* Sample Question */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">🧠 Sample Question</h2>
        <p>Q. A man buys a phone for ₹10,000 and sells it for ₹12,000. What is the profit percentage?</p>
        <p className="mt-2 text-green-700 font-semibold">
          ➤ Profit = ₹2000 → Profit% = (2000 / 10000) × 100 = <strong>20%</strong>
        </p>
      </section>

      {/* Code Example */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">💻 JavaScript Code</h2>
        <pre className="bg-gray-900 text-white font-mono p-4 rounded-md overflow-x-auto text-sm">
{`function profitPercent(cp, sp) {
  return ((sp - cp) / cp) * 100;
}

console.log(profitPercent(10000, 12000)); // 20`}
        </pre>
      </section>

      {/* Visual Placeholder */}
      <section className="bg-blue-100 text-blue-700 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">📊 Visual Explanation (Coming Soon)</h2>
        <p>📈 A graph or animation showing profit/loss will go here.</p>
      </section>
    </div>
  );
}
