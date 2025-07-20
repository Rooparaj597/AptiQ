import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Percentages from "./pages/Percentages";
import ProfitLoss from "./pages/ProfitLoss";
import TimeWork from "./pages/TimeWork";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />

        {/* Learn Topics */}
        <Route path="/learn/percentages" element={<Percentages />} />
        <Route path="/learn/profit-loss" element={<ProfitLoss />} />
        <Route path="/learn/time-work" element={<TimeWork />} />

        {/* Practice Levels */}
        <Route path="/practice/easy" element={<Easy />} />
        <Route path="/practice/medium" element={<Medium />} />
        <Route path="/practice/hard" element={<Hard />} />
        <Route path="/practice/medium" element={<Medium />} />
        <Route path="/practice/hard" element={<Hard />} />
      </Routes>
    </Router>
  );
}

export default App;

