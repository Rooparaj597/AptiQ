import { Link } from "react-router-dom";

export default function ProfitLoss() {
  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 text-gray-800 leading-relaxed relative">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">💰 Profit & Loss</h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📘 Introduction</h2>
        <p>
          Profit and Loss deals with evaluating the financial gains or losses made in a transaction.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Key Concepts</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Cost Price (CP):</strong> The price at which an item is bought.</li>
          <li><strong>Selling Price (SP):</strong> The price at which an item is sold.</li>
          <li><strong>Profit:</strong> SP - CP (when SP &gt; CP)</li>
          <li><strong>Loss:</strong> CP - SP (when CP &gt; SP)</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚡ Shortcuts</h2>
        <ul className="list-disc pl-6">
          <li>Profit% = (Profit / CP) × 100</li>
          <li>Loss% = (Loss / CP) × 100</li>
        </ul>
      </section>

      {/* Code Examples */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💻 Code (Python)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
          <code>
{`cp = 200
sp = 250
profit = sp - cp
profit_percent = (profit / cp) * 100
print("Profit%:", profit_percent)`}
          </code>
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🔁 Recap</h2>
        <p>
          Understand the terms CP, SP, Profit, and Loss. Practice calculating profit/loss percentage and reverse calculations.
        </p>
      </section>

      {/* Floating Back Button */}
      <Link
        to="/learn"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition"
      >
        ⬅️ Back to Topics
      </Link>
    </div>
  );
}
