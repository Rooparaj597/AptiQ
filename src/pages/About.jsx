// src/pages/About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About AptiQ</h1>
        <p className="intro">
          AptiQ is your smart companion for mastering aptitude skills. 
          We provide structured lessons, shortcuts, and practice problems to help you ace competitive exams.
        </p>

        <div className="about-cards">
          <div className="card">
            <h2>📚 Learn</h2>
            <p>Interactive lessons that explain concepts clearly, with examples and code snippets.</p>
          </div>
          <div className="card">
            <h2>⚡ Shortcuts</h2>
            <p>Boost your speed with proven mental math tricks and time-saving techniques.</p>
          </div>
          <div className="card">
            <h2>📝 Practice</h2>
            <p>Test your skills with quizzes, track your progress, and focus on improvement areas.</p>
          </div>
        </div>

        <div className="fun-fact">
          <button 
            onClick={() => alert("Fun fact: Aptitude tests go back to 400 B.C. in Ancient China!")}
          >
            🎯 Click for a Fun Fact
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
