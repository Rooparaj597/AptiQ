import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaLightbulb, FaCode, FaRedo, FaBolt } from "react-icons/fa";

const Calendar = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 flex items-center gap-2 mb-4">
        <FaCalendarAlt /> Calendar
      </h1>

      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaLightbulb /> Introduction
        </h2>
        <p>
          Calendar aptitude questions test your understanding of days, dates, leap years, odd days, and calendars.
          These problems often require quick mental math and a grasp of basic rules to find the day of the week for
          a given date or vice versa.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaBolt /> Key Concepts
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Odd Days: Days more than complete weeks (7 days).</li>
          <li>Leap Year: Occurs every 4 years, has 366 days (extra day in Feb).</li>
          <li>Non-Leap Year: Has 365 days = 1 odd day.</li>
          <li>Leap Year: 366 days = 2 odd days.</li>
          <li>100 years = 5 odd days; 400 years = 0 odd days.</li>
          <li>Reference base: 1st Jan 1900 was Monday.</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaRedo /> Shortcuts
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use divisibility of years to find total odd days quickly.</li>
          <li>To find day of a date: Calculate total odd days till that date.</li>
          <li>Know which years are leap years to adjust Feb's days.</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          📘 Examples
        </h2>
        <p className="mb-2 font-medium">Q: What day of the week was 15th August 1947?</p>
        <p className="mb-2">
          → Total years from 1900 to 1946 = 46 years  
          → Number of leap years = 11  
          → Total odd days = (46 + 11) = 57 = 1 odd day  
          → From 1st Jan to 15th Aug = 227 days = 3 odd days  
          → Total odd days = 1 + 3 = 4 → Thursday
        </p>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <FaCode /> Code (Day of Week Finder)
        </h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`function getDayOfWeek(dateStr) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateStr);
  return days[date.getDay()];
}

// Example
console.log(getDayOfWeek("1947-08-15")); // "Friday"`}
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
          ✅ Recap
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Odd days help us calculate weekdays.</li>
          <li>Leap years = extra odd day (2 instead of 1).</li>
          <li>Base reference: 1 Jan 1900 was a Monday.</li>
        </ul>
      </section>

      <Link
        to="/learn"
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all"
      >
        🔙 Back to Topics
      </Link>
    </div>
  );
};

export default Calendar;
