export default function Practice() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">🧠 Practice Zone</h2>
      <p className="text-gray-600 mb-4">
        Choose a difficulty level and start practicing aptitude problems with timers and scoring.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600">Easy</button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded shadow hover:bg-yellow-600">Medium</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600">Hard</button>
      </div>
    </div>
  );
}

