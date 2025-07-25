import { Link } from "react-router-dom";

export default function TopicCard({ title, path, ready }) {
  if (!ready) {
    return (
      <div className="p-4 m-2 rounded-lg bg-gray-200 shadow text-gray-500 text-center cursor-not-allowed backdrop-blur-sm select-none">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm mt-1 italic">🚧 Coming Soon</p>
      </div>
    );
  }

  return (
    <Link to={path}>
      <div className="p-4 m-2 rounded-lg bg-white shadow hover:bg-blue-50 transition cursor-pointer">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
}
