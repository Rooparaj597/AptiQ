import React from 'react';

export default function TimeWork() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🧮 Time & Work</h1>

      {/* Concept */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">📘 Concept</h2>
        <p>
          Time and Work is a concept based on how much work a person (or group) can complete in a given time.
        </p>
      </section>

      {/* Shortcut */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">⚡ Shortcut Trick</h2>
        <p>
          If A can do a job in <strong>X</strong> days, then A's one day work = <strong>1/X</strong>.
        </p>
      </section>

      {/* Sample Question */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">🧠 Sample Question</h2>
        <p>Q. A can do a job in 10 days. B can do the same in 15 days. How long will they take together?</p>
        <p className="mt-2 text-green-700 font-semibold">
          ➤ Solution: 1/10 + 1/15 = (3 + 2)/30 = 5/30 ⇒ <strong>6 days</strong>
        </p>
      </section>

      {/* Code Example */}
      <section className="mb-6 bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-2">💻 JavaScript Code</h2>
        <pre className="bg-gray-900 text-white font-mono p-4 rounded-md overflow-x-auto text-sm">
{`function combinedWork(a, b) {
  return 1 / ((1/a) + (1/b));
}

console.log(combinedWork(10, 15)); // 6`}
        </pre>
      </section>

      {/* Visual Placeholder */}
      <section className="bg-blue-100 text-blue-700 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">📊 Visual Explanation (Coming Soon)</h2>
        <p>📈 A timeline or animated flow of combined work will go here.</p>
      </section>
    </div>
  );
}
