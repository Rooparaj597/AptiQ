// /pages/learn/profit-loss.jsx

export default function ProfitLoss() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 Profit & Loss</h1>

      <p className="text-gray-700 mb-4">
        Profit and Loss is used to determine how much gain or loss is made in a transaction.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">📘 Key Terms:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li><strong>Cost Price (CP):</strong> The price at which an item is bought</li>
        <li><strong>Selling Price (SP):</strong> The price at which an item is sold</li>
        <li><strong>Profit:</strong> SP - CP (when SP &gt; CP)</li>
        <li><strong>Loss:</strong> CP - SP (when CP &gt; SP)</li>

      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">📊 Formulas:</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>Profit % = (Profit / CP) × 100</li>
        <li>Loss % = (Loss / CP) × 100</li>
        <li>SP = CP × (1 + Profit%)</li>
        <li>SP = CP × (1 - Loss%)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">🧠 Example:</h2>
      <p className="text-gray-700">
        If CP = ₹100 and SP = ₹120, then Profit = ₹20<br />
        Profit % = (20 / 100) × 100 = <strong>20%</strong>
      </p>
    </div>
  );
}
