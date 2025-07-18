import React from 'react';

export default function TimeWork() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">🧮 Time & Work</h1>
      <p className="mt-2">Time and Work is a concept based on how much work a person (or group) can complete in a given time.</p>

      <h2 className="font-semibold mt-4">⚡ Shortcut Trick</h2>
      <p>If A can do a job in X days, then A's one day work = 1/X.</p>

      <h2 className="font-semibold mt-4">🧠 Sample Question</h2>
      <p>Q. A can do a job in 10 days. B can do the same in 15 days. How long will they take together?</p>
      <p>➤ Solution: 1/10 + 1/15 = (3 + 2)/30 = 5/30 ⇒ 6 days</p>

      <h2 className="font-semibold mt-4">💻 JavaScript Code</h2>
      <pre className="bg-gray-100 p-2 rounded">
{`function combinedWork(a, b) {
  return 1 / ((1/a) + (1/b));
}
console.log(combinedWork(10, 15)); // 6`}
      </pre>

      <h2 className="font-semibold mt-4">📊 Visual Explanation</h2>
      <p>(Coming Soon – animations/graphs)</p>
    </div>
  );
}
