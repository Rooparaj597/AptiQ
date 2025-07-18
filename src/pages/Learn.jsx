
import TopicCard from "../components/TopicCard";
import { topics } from "../data/topics";
import { Link } from "react-router-dom";

{topics.map((t) => (
  <TopicCard key={t.id} title={t.title} path={t.path} />
))}

{topics.map((topic) => (
  <Link to={topic.path} key={topic.id}>
    <div className="p-4 m-2 rounded bg-blue-100 hover:bg-blue-200">
      {topic.title}
    </div>
  </Link>
))}


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
        <li className="bg-white shadow-md p-4 rounded-md hover:bg-blue-50">
          🔢 Percentages
        </li>
      </ul>
      <Link to="/learn/time-work" className="...">🧮 Time & Work</Link>
    </div>
  );
}







