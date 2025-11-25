"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Season, seasonThemes, SeasonTheme } from "@/utils/themes";

interface ThemeContextType {
  currentSeason: Season;
  setCurrentSeason: (season: Season) => void;
  theme: SeasonTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getCurrentSeason(): Season {
  const month = new Date().getMonth() + 1; // +1 puisque commence a 0 pour janvier

  if (month >= 3 && month <= 5) return "spring"; // mars, avril, mai
  if (month >= 6 && month <= 8) return "summer"; // juin, juillet, août
  if (month >= 9 && month <= 11) return "autumn"; // septembre, octobre, novembre
  return "winter"; // décembre, janvier, février
}

function getInitialSeason(): Season {
  if (typeof window === "undefined") return "spring";

  const saved = localStorage.getItem("selectedSeason");
  if (
    saved &&
    (saved === "spring" ||
      saved === "summer" ||
      saved === "autumn" ||
      saved === "winter")
  ) {
    return saved as Season;
  }
  return getCurrentSeason(); // si pas de préférence, on utilise la saison actuelle
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentSeason, setCurrentSeason] = useState<Season>(
    getInitialSeason()
  );

  useEffect(() => {
    localStorage.setItem("selectedSeason", currentSeason);
  }, [currentSeason]);

  const theme = seasonThemes[currentSeason];

  return (
    <ThemeContext.Provider value={{ currentSeason, setCurrentSeason, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
