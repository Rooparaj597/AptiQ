import React from "react";

const ProfitLoss = () => {
  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">💰 Profit & Loss</h1>

      <h2 className="text-xl font-semibold mt-4">📘 Concept</h2>
      <p>
        Profit is the gain made when selling an item for more than its cost.
        Loss is the deficit when selling it for less.
      </p>

      <h2 className="text-xl font-semibold mt-4">⚡ Shortcut Trick</h2>
      <p>
        Profit% = (Profit / Cost Price) × 100
        <br />
        Loss% = (Loss / Cost Price) × 100
      </p>

      <h2 className="text-xl font-semibold mt-4">🧠 Sample Question</h2>
      <p>Q. A man buys a phone for ₹10,000 and sells it for ₹12,000. What is the profit percentage?</p>
      <p>➤ Profit = ₹2000 → Profit% = (2000 / 10000) × 100 = 20%</p>

      <h2 className="text-xl font-semibold mt-4">💻 JavaScript Code</h2>
      <pre className="bg-gray-100 p-3 rounded">
        {`function profitPercent(cp, sp) {
  return ((sp - cp) / cp) * 100;
}

console.log(profitPercent(10000, 12000)); // 20`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">📊 Visual Explanation (Coming Soon)</h2>
    </div>
  );
};

export default ProfitLoss;
