import { topics } from "../data/topics";
import TopicCard from "../components/TopicCard";

export default function Learn() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">📘 Learn Aptitude Topics</h2>
      <p className="text-gray-600 mb-6">
        Select a topic to learn concepts, shortcuts, and see visual explanations with code examples.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            path={topic.path}
            ready={topic.ready}
          />
        ))}
      </div>
    </div>
  );
}
