import { Link } from "react-router-dom";

export default function TopicCard({ title, path }) {
  return (
    <Link to={path}>
      <div className="p-4 m-2 rounded-lg bg-white shadow-md hover:bg-gray-100 transition">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </Link>
  );
}
