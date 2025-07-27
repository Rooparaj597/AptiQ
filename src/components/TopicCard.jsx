import { Link } from "react-router-dom";

export default function TopicCard({ title, path, ready }) {
  const cardClasses = `p-4 m-2 rounded-lg shadow-md transition ${
    ready ? "bg-white hover:bg-gray-100 cursor-pointer" : "bg-gray-100 text-gray-400 cursor-not-allowed"
  }`;

  return ready ? (
    <Link to={path}>
      <div className={cardClasses}>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </Link>
  ) : (
    <div className={cardClasses}>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm mt-1 text-yellow-500">🚧 Coming Soon</p>
    </div>
  );
}
