import React, { useState } from "react";
import mediumQuestions from "../data/mediumQuestions";

export default function Medium() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const question = mediumQuestions[index];

  const handleAnswer = (option) => {
    if (option === question.answer) setScore(score + 1);
    const next = index + 1;
    if (next < mediumQuestions.length) setIndex(next);
    else setShowScore(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-yellow-700 mb-4">🟡 Medium Level</h1>

      {showScore ? (
        <h2 className="text-lg font-semibold">Your Score: {score}/{mediumQuestions.length}</h2>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
          <div className="grid gap-2">
            {question.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
