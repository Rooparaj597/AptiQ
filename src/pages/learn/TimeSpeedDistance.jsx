import { Link } from "react-router-dom";

export default function TimeSpeedDistance() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <div className="fixed top-4 right-4">
        <Link to="/learn" className="bg-blue-600 text-white px-3 py-1 rounded-full shadow hover:bg-blue-700">
          🔙 Back to Topics
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">🛣️ Time, Speed & Distance</h1>

      {/* INTRODUCTION */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🔍 Introduction</h2>
        <p>
          Time, Speed and Distance questions assess your ability to calculate time taken, speed, or distance traveled under various conditions including average speed, relative speed, and conversions.
        </p>
      </section>

      {/* KEY CONCEPTS */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🧠 Key Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Speed = Distance / Time</strong></li>
          <li><strong>Time = Distance / Speed</strong></li>
          <li><strong>Distance = Speed × Time</strong></li>
          <li>Convert km/hr to m/s: Multiply by 5/18</li>
          <li>Convert m/s to km/hr: Multiply by 18/5</li>
        </ul>
      </section>

      {/* SHORTCUTS */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">⚡ Shortcut Tricks</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Average Speed =</strong> 2xy / (x + y) when distance is same</li>
          <li><strong>Relative speed:</strong> Add speeds if in opposite direction, subtract if same direction</li>
        </ul>
      </section>

      {/* CODE EXAMPLES */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">💻 Code Example</h2>
        <pre className="bg-gray-100 p-4 rounded">
{`def average_speed(x, y):
    return (2 * x * y) / (x + y)

print(average_speed(60, 40))  # Output: 48.0`}
        </pre>
      </section>

      {/* SUMMARY */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Recap</h2>
        <ul className="list-disc pl-5">
          <li>Always check units before calculation (convert when needed)</li>
          <li>Use formulas for average speed and relative speed smartly</li>
        </ul>
      </section>
    </div>
  );
}
