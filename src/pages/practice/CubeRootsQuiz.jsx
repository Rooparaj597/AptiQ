// File: src/pages/practice/CubeRootsQuiz.jsx

import React, { useState } from "react";

const cubeRootsQuestions = [
  {
    question: "What is the cube root of 27000?",
    options: ["27", "30", "33", "45"],
    answer: "30",
  },
  {
    question: "What is the unit digit of cube root of 74088?",
    options: ["2", "4", "6", "8"],
    answer: "2",
  },
  {
    question: "Which of the following is a perfect cube?",
    options: ["125", "150", "200", "225"],
    answer: "125",
  },
  {
    question: "If ∛x = 19, then x = ?",
    options: ["361", "6859", "343", "1728"],
    answer: "6859",
  },
  {
    question: "Estimate the cube root of 97336.",
    options: ["43", "44", "46", "47"],
    answer: "46",
  }
];

const CubeRootsQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);
    if (option === cubeRootsQuestions[current].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (current < cubeRootsQuestions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-6 text-white max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-yellow-400 mb-4">🧮 Cube Roots Quiz</h1>

      {showScore ? (
        <div className="text-center">
          <p className="text-xl mb-4">🎉 You scored <span className="text-green-400">{score}</span> out of {cubeRootsQuestions.length}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Q{current + 1}. {cubeRootsQuestions[current].question}
          </h2>
          <div className="space-y-2 mb-4">
            {cubeRootsQuestions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`block w-full text-left px-4 py-2 rounded-lg border ${
                  selected === option
                    ? option === cubeRootsQuestions[current].answer
                      ? "bg-green-500 border-green-700"
                      : "bg-red-500 border-red-700"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                disabled={selected !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
          >
            {current === cubeRootsQuestions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CubeRootsQuiz;
