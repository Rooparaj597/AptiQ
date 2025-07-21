import React, { useState } from "react";
import hardQuestions from "../data/hardQuestions";

export default function Hard() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const question = hardQuestions[current];

  const handleOptionClick = (option) => {
    if (option === question.answer) setScore(score + 1);
    setCurrent(current + 1);
    setShowAnswer(false);
  };

  const handleReset = () => {
    setCurrent(0);
    setScore(0);
    setShowAnswer(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-gray-800">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">🔴 Hard Practice</h2>
      <p>Score: {score}</p>

      {current < hardQuestions.length ? (
        <>
          <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
          <ul className="mb-4">
            {question.options.map((option, i) => (
              <li key={i}>
                <button
                  className="bg-yellow-300 hover:bg-yellow-400 rounded px-4 py-2 mb-2"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-sm text-blue-600 underline"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
          {showAnswer && <p className="mt-2 text-green-700">Answer: {question.answer}</p>}
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold">✅ Finished!</h3>
          <p>Your score: {score} / {hardQuestions.length}</p>
          <button
            onClick={handleReset}
            className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
}
