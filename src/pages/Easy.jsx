import React, { useState } from "react";
import easyQuestions from "../data/easyQuestions";

export default function Easy() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const question = easyQuestions[index];

  const handleAnswer = (option) => {
    if (option === question.answer) setScore(score + 1);
    const next = index + 1;
    if (next < easyQuestions.length) setIndex(next);
    else setShowScore(true);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">🟢 Easy Level</h1>

      {showScore ? (
        <h2 className="text-lg font-semibold">Your Score: {score}/{easyQuestions.length}</h2>
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
          <div className="grid gap-2">
            {question.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
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
