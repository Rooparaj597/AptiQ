import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Practice from "./pages/Practice";
import Percentages from "./pages/Percentages";
import ProfitLoss from "./pages/ProfitLoss";
import TimeWork from './pages/TimeWork';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/learn/percentages" element={<Percentages />} />
        <Route path="/learn/profit-loss" element={<ProfitLoss />} />
        <Route path="/learn/time-work" element={<TimeWork />} />
        <Route path="/learn/time-work" element={<TimeWork />} />
      </Routes>
    </Router>
  );
}

export default App;



