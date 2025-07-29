import { Link } from "react-router-dom";

export default function TimeWork() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <div className="fixed top-4 right-4">
        <Link to="/learn" className="bg-blue-600 text-white px-3 py-1 rounded-full shadow hover:bg-blue-700">
          🔙 Back to Topics
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-700 mb-4">⏳ Time and Work</h1>

      {/* INTRODUCTION */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🔍 Introduction</h2>
        <p>
          Time and Work problems involve calculating the time taken by one or more persons/machines to complete a task. They're common in aptitude exams and test efficiency-based reasoning.
        </p>
      </section>

      {/* KEY CONCEPTS */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">🧠 Key Concepts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Work:</strong> Considered as 1 unit (e.g. a job or task).</li>
          <li><strong>Efficiency:</strong> Amount of work done per day/hour.</li>
          <li><strong>If A can do a work in X days,</strong> then A's 1 day work = 1/X</li>
          <li><strong>If A is X times as efficient as B,</strong> then A takes 1/X of the time B takes.</li>
        </ul>
      </section>

      {/* SHORTCUTS */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">⚡ Shortcut Tricks</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Total work = LCM of individual times</li>
          <li>If A and B together can do a work in X days: (A + B)'s 1 day work = 1/X</li>
          <li>Work = Time × Rate (efficiency)</li>
        </ul>
      </section>

      {/* CODE EXAMPLES */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">💻 Code Example</h2>
        <pre className="bg-gray-100 p-4 rounded">
{`def work_days(a_days, b_days):
    a_eff = 1 / a_days
    b_eff = 1 / b_days
    combined_eff = a_eff + b_eff
    return 1 / combined_eff

print(work_days(10, 15))  # Output: 6.0 days to complete work together`}
        </pre>
      </section>

      {/* SUMMARY */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">📝 Recap</h2>
        <ul className="list-disc pl-5">
          <li>Use unit work method (1 day's work)</li>
          <li>Remember that total work = LCM helps in complex multi-worker problems</li>
        </ul>
      </section>
    </div>
  );
}
