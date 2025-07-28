export default function TimeSpeedDistance() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">⏱️ Time, Speed & Distance</h1>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Speed = Distance / Time</strong></li>
        <li><strong>Distance = Speed × Time</strong></li>
        <li>Use km/hr or m/s accordingly</li>
        <li>Convert: 1 km/hr = 5/18 m/s</li>
      </ul>
    </div>
  );
}
