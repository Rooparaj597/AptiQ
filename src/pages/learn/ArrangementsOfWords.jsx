import React from "react";

const ArrangementsOfWords = () => {
  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      
      {/* Introduction */}
      <section>
        <h1 className="text-3xl font-bold text-blue-600 mb-3">Arrangements of Words</h1>
        <p className="text-gray-700">
          In aptitude tests, <b>Arrangements of Words</b> questions check your ability to arrange given words in
          alphabetical or dictionary order. Sometimes, the task may also involve finding the position of a specific
          word among the arranged list, or deciding the correct sequence quickly without writing all words out.
        </p>
      </section>

      {/* Key Concepts */}
      <section>
        <h2 className="text-2xl font-semibold text-green-600 mb-2">Key Concepts</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            **Dictionary Order** – The order in which words appear in a dictionary (A → Z).
          </li>
          <li>
            Compare words letter-by-letter from the leftmost character.
          </li>
          <li>
            Shorter words with the same prefix come before longer words (e.g., <i>bat</i> before <i>battery</i>).
          </li>
          <li>
            Capital letters are usually ignored in aptitude ordering unless stated otherwise.
          </li>
        </ul>
      </section>

      {/* Shortcuts */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-2">Shortcuts</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Focus on the first letter first – group words starting with the same letter together.</li>
          <li>If the first letters are the same, check the second letter, and so on.</li>
          <li>For speed, visualize A–Z sequence and mentally place words in the correct range.</li>
          <li>If finding a position, count how many words would come before it alphabetically.</li>
        </ul>
      </section>

      {/* Formulae */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 mb-2">Formulae</h2>
        <p className="text-gray-700">
          Usually, arrangements of words don’t require heavy formulas. However, if the question involves permutations:
        </p>
        <p className="mt-2 text-gray-700">
          <b>Number of arrangements</b> of <i>n</i> distinct words = <b>n!</b>
        </p>
        <p className="mt-2 text-gray-700">
          If there are repeated words/letters, divide by factorial of repetitions.
        </p>
      </section>

      {/* Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-600 mb-2">Examples</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-semibold">Example 1:</p>
          <p className="mt-1">
            Arrange the following words in dictionary order: <i>Apple, Ant, Ape, April</i>
          </p>
          <p className="mt-2">
            Step-by-step:
            <br/>First letters are all "A", so check the second letter:
            <br/>- "Ant" (n) comes after "Ape" (p)? No – 'n' comes before 'p'.
            <br/>Final order: <b>Ape, Apple, April, Ant</b>
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold">Example 2:</p>
          <p className="mt-1">
            Find the position of the word <i>RAT</i> if all possible 3-letter words using letters A, R, T are arranged in dictionary order.
          </p>
          <p className="mt-2">
            Step-by-step:
            <br/>Possible letters: A, R, T.
            <br/>Dictionary order: AAA, AAR, AAT, ..., RAA, RAR, RAT...
            <br/>Count all words before RAT.
            <br/>Position of RAT = 12<sup>th</sup> (calculated using permutation counting).
          </p>
        </div>
      </section>

      {/* Code */}
      <section>
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Code Example (Python)</h2>
        <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
{`words = ["Apple", "Ant", "Ape", "April"]
# Sort in dictionary order
sorted_words = sorted(words)
print("Dictionary Order:", sorted_words)`}
        </pre>
      </section>

      {/* Recap */}
      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">Recap</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Dictionary order = alphabetical order.</li>
          <li>Compare letter-by-letter from left to right.</li>
          <li>Shorter words with same prefix come first.</li>
          <li>Permutations formula only if asked for total arrangements.</li>
          <li>Practice to improve mental arrangement speed.</li>
        </ul>
      </section>

    </div>
  );
};

export default ArrangementsOfWords;
