import React, { useState, useEffect } from "react";
import questions from "../data/mediumQuestions";

export default function Medium() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);

  const q = questions[current];

  // ⏱ Timer logic
  useEffect(() => {
    if (showScore || showAnswer) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          setShowAnswer(true); // Time's up, reveal answer
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current, showAnswer, showScore]);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === q.answer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setTimeLeft(15); // Reset timer
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowAnswer(false);
    setShowScore(false);
    setTimeLeft(15); // Reset timer
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-yellow-600 mb-4">🟡 Medium Practice</h1>

      {showScore ? (
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">
            🎉 You scored {score} out of {questions.length}!
          </p>
          <button
            onClick={handleReset}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
          >
            🔁 Reset
          </button>
        </div>
      ) : (
        <div>
          <p className="text-gray-700 font-medium mb-2">
            Question {current + 1} of {questions.length}
          </p>

          <h2 className="text-lg font-semibold mb-2">{q.question}</h2>

          {/* ⏱ Timer Display */}
          <p
            className={`text-sm font-semibold mb-4 ${
              timeLeft <= 5 ? "text-red-700" : "text-red-600"
            }`}
          >
            ⏱ Time Left: {timeLeft}s
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {q.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                disabled={selected}
                className={`py-2 px-4 rounded border text-left ${
                  selected
                    ? option === q.answer
                      ? "bg-green-300 border-green-600"
                      : option === selected
                      ? "bg-red-300 border-red-600"
                      : "bg-gray-100"
                    : "hover:bg-blue-100 border-gray-300"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showAnswer && (
            <div className="mb-4">
              ✅ Correct Answer:{" "}
              <span className="font-semibold text-green-600">{q.answer}</span>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={handleNext}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
              disabled={!selected && !showAnswer}
            >
              Next
            </button>
            <button
              onClick={handleReset}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Reset Quiz
            </button>
          </div>

          <div className="mt-4 text-gray-600">
            Score: <span className="font-semibold">{score}</span>
          </div>
        </div>
      )}
    </div>
  );
}
