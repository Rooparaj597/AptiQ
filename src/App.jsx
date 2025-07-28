import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Percentages from "./pages/learn/Percentages";
import ProfitLoss from "./pages/learn/ProfitLoss";
import TimeWork from "./pages/learn/TimeWork";
import TimeSpeedDistance from "./pages/learn/TimeSpeedDistance";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";
import { useStreak, StreakProvider } from "./Context/StreakContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <StreakProvider>
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
          <Route path="/learn/time-speed-distance" element={<TimeSpeedDistance/>} />

          {/* Practice Levels */}
          <Route path="/practice/easy" element={<Easy />} />
          <Route path="/practice/medium" element={<Medium />} />
          <Route path="/practice/hard" element={<Hard />} />
        </Routes>
      </StreakProvider>
    </Router>
  );
}

export default App;
