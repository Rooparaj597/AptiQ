import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaLightbulb, FaCode, FaRedo, FaBolt } from "react-icons/fa";

const Calendar = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8 text-center">    
          <Link
        to="/learn"
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition"
      >
        ⬅ Back to Topics
      </Link>
        <h1 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-2">
          <FaCalendarAlt /> Calendar
        </h1>
      </div> 


      {/* Introduction */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaLightbulb className="text-yellow-500" /> Introduction
        </h2>
        <p className="mt-2 text-gray-700">
          Calendar problems test your ability to calculate days, dates, weeks, and relationships among them. These questions are common in aptitude tests and can be solved quickly using patterns and formulas.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaLightbulb className="text-green-500" /> Key Concepts
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
          <li><strong>Odd Days:</strong> Number of days more than complete weeks. E.g., 10 days = 1 week + <strong>3 odd days</strong></li>
          <li><strong>Leap Year:</strong> Divisible by 4, not by 100 unless divisible by 400. 366 days = <strong>2 odd days</strong></li>
          <li><strong>Normal Year:</strong> 365 days = <strong>1 odd day</strong></li>
          <li><strong>Day Codes:</strong> Sunday = 0, Monday = 1, ..., Saturday = 6</li>
          <li><strong>Month Codes (Non-Leap):</strong> Jan: 0, Feb: 3, Mar: 3, Apr: 6, May: 1, Jun: 4, Jul: 6, Aug: 2, Sep: 5, Oct: 0, Nov: 3, Dec: 5</li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaBolt className="text-purple-500" /> Shortcuts
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
          <li><strong>Leap Year Test:</strong> Divisible by 4 and not 100, or divisible by 400</li>
          <li><strong>Finding Day of a Date:</strong> Break into parts and use odd days + modulo 7</li>
          <li><strong>1 Jan Trick:</strong> Know base years like 1900 (Mon), 2000 (Sat) for reference</li>
        </ul>
      </section>

      {/* Code */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaCode className="text-red-500" /> Code Example
        </h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`import datetime

def find_day(date_str):
    day_name = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    day, month, year = map(int, date_str.split('/'))
    date_obj = datetime.date(year, month, day)
    return day_name[date_obj.weekday()]

print(find_day("15/08/2025"))  # Output: Friday`}
        </pre>
      </section>

      {/* Recap */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <FaRedo className="text-teal-500" /> Recap
        </h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-2">
          <li>Use <strong>odd days</strong> to calculate weekdays</li>
          <li>Understand <strong>leap years</strong> and month codes</li>
          <li>Practice real questions for better speed and accuracy</li>
          <li>Remember base dates like 01 Jan 1900 or 2000</li>
        </ul>
      </section>

      {/* Back to Topics Button */}
     
    </div>
  );
};

export default Calendar;
