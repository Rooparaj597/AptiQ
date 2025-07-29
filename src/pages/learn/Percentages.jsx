import { Link } from "react-router-dom";

export default function Percentages() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <div className="fixed top-4 right-4">
        <Link to="/learn" className="bg-blue-600 text-white px-3 py-1 rounded-full shadow hover:bg-blue-700">
          🔙 Back to Topics
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">🔢 Percentages</h1>

      {/* INTRODUCTION */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🔍 Introduction</h2>
        <p>
          Percentages represent a number as a fraction of 100. It's a fundamental concept used in profit/loss, data interpretation, and comparisons.
        </p>
      </section>

      {/* KEY CONCEPTS */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🧠 Key Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Percentage =</strong> (Part / Whole) × 100</li>
          <li><strong>Increase/Decrease % =</strong> (Difference / Original) × 100</li>
          <li><strong>Successive changes:</strong> A + B + (AB/100)</li>
        </ul>
      </section>

      {/* SHORTCUTS */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">⚡ Shortcut Tricks</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>x% of y =</strong> y% of x</li>
          <li>To increase a number by x%, multiply by (1 + x/100)</li>
          <li>To decrease a number by x%, multiply by (1 - x/100)</li>
        </ul>
      </section>

      {/* CODE EXAMPLES */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">💻 Code Example</h2>
        <pre className="bg-gray-100 p-4 rounded">
{`def increase_by_percent(value, percent):
    return value * (1 + percent / 100)

print(increase_by_percent(200, 10))  # Output: 220.0`}
        </pre>
      </section>

      {/* SUMMARY */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Recap</h2>
        <ul className="list-disc pl-5">
          <li>Percent = part out of 100</li>
          <li>Use shortcuts to save time on complex percentage calculations</li>
        </ul>
      </section>
    </div>
  );
}
<section className="mb-6">
  <h2 className="text-xl font-semibold text-gray-700 mb-4">🧪 Examples & Practice</h2>

  {/* Question 1 */}
  <div className="bg-white border p-4 rounded mb-4 shadow">
    <p className="font-medium">Q1. A shopkeeper buys an item for ₹200 and sells it for ₹250. What is the profit percentage?</p>
    <ul className="list-disc pl-6 mt-2 text-gray-700">
      <li>20%</li>
      <li className="text-green-600 font-semibold">25% ✅</li>
      <li>30%</li>
      <li>40%</li>
    </ul>
    <details className="mt-2">
      <summary className="text-blue-600 cursor-pointer">Show Answer</summary>
      <p className="text-sm text-gray-600 mt-1">Profit = 50, CP = 200 ⇒ (50/200)×100 = 25%</p>
    </details>
  </div>

  {/* Question 2 */}
  <div className="bg-white border p-4 rounded mb-4 shadow">
    <p className="font-medium">Q2. An article is sold at a loss of 10%. If the selling price is ₹450, what was the cost price?</p>
    <ul className="list-disc pl-6 mt-2 text-gray-700">
      <li className="text-green-600 font-semibold">₹500 ✅</li>
      <li>₹460</li>
      <li>₹480</li>
      <li>₹520</li>
    </ul>
    <details className="mt-2">
      <summary className="text-blue-600 cursor-pointer">Show Answer</summary>
      <p className="text-sm text-gray-600 mt-1">CP = SP / (1 - Loss%) = 450 / 0.9 = ₹500</p>
    </details>
  </div>
</section>
