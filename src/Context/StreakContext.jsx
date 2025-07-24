// src/context/StreakContext.js
import { createContext, useContext, useState, useEffect } from "react";

const StreakContext = createContext();

export function useStreak() {
  return useContext(StreakContext);
}

export function StreakProvider({ children }) {
  const today = new Date().toDateString();
  const stored = JSON.parse(localStorage.getItem("aptiq-streak")) || {
    count: 0,
    lastDate: null,
  };

  const [streak, setStreak] = useState(stored.count);

  useEffect(() => {
    if (stored.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (stored.lastDate === yesterday.toDateString()) {
        // Continue streak
        setStreak(stored.count + 1);
        localStorage.setItem(
          "aptiq-streak",
          JSON.stringify({ count: stored.count + 1, lastDate: today })
        );
      } else {
        // Reset streak
        setStreak(1);
        localStorage.setItem(
          "aptiq-streak",
          JSON.stringify({ count: 1, lastDate: today })
        );
      }
    }
  }, []);

  return (
    <StreakContext.Provider value={streak}>
      {children}
    </StreakContext.Provider>
  );
}
