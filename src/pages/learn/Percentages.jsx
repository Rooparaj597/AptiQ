export default function Percentages() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🔢 Percentages</h2>
      <p className="text-gray-700 mb-4">
        Percent means “per hundred”. Learn how to calculate percentage increases, decreases, and solve aptitude problems with speed tricks.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">💡 Concepts</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>What is a percentage?</li>
        <li>Converting fraction to percent</li>
        <li>Shortcut tricks</li>
        <li>Basic formulas</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2">⚙️ Example Problem</h3>
      <p className="bg-gray-100 p-4 rounded mb-2">
        If 30% of a number is 120, what is the number?
      </p>
      <p className="text-green-600 font-medium">Solution: 120 ÷ 30% = 120 ÷ 0.3 = 400</p>
    </div>
  );
}
