export default function Learn() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">📘 Learn Aptitude Topics</h2>
      <p className="text-gray-600 mb-4">
        Select a topic to learn concepts, shortcuts, and see visual explanations with code examples.
      </p>

      <ul className="space-y-2">
        <li className="bg-white shadow p-4 rounded hover:bg-blue-50 cursor-pointer">
          🔢 Percentages
        </li>
        <li className="bg-white shadow p-4 rounded hover:bg-blue-50 cursor-pointer">
          📊 Profit & Loss
        </li>
        <li className="bg-white shadow p-4 rounded hover:bg-blue-50 cursor-pointer">
          🧮 Time & Work
        </li>
        <li className="bg-white shadow p-4 rounded hover:bg-blue-50 cursor-pointer">
          ⏱️ Time, Speed & Distance
        </li>
      </ul>
    </div>
  );
}
