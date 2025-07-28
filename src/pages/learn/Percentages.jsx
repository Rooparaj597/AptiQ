export default function Percentages() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🔢 Percentages</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📄 What You'll Learn</h2>
        <p>Understand how percentages work, convert between values, and apply them in various contexts like profit, discounts, and more.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Key Concepts</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Percentage = (Part / Whole) × 100</li>
          <li>Increase/Decrease by %</li>
          <li>Converting fractions to percentages</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚡ Shortcuts</h2>
        <p>Use 10% of a value by shifting decimal once to left, and multiply for other % values.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧮 Formulae</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Value = (Percentage × Total) / 100</li>
          <li>Percentage Change = ((New - Old)/Old) × 100</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧠 Example</h2>
        <p>If a student scores 45 out of 60, what is the percentage?</p>
        <p><strong>Answer:</strong> (45 / 60) × 100 = 75%</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💻 Code Example (Optional)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`const percentage = (scored, total) => (scored / total) * 100;
console.log(percentage(45, 60)); // 75`}
        </pre>
      </section>

      <section className="mt-8 border-t pt-4">
        <h2 className="text-lg font-bold text-green-600">✅ Recap</h2>
        <p>Always remember percentage means “per hundred”. Be careful with increase/decrease calculations!</p>
      </section>
    </div>
  );
}
