"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import Hero from "@/components/sections/Hero";
import SeasonWelcome from "@/components/sections/SeasonWelcome";

function shouldShowWelcome(): boolean {
  if (typeof window === "undefined") return true;
  const hasVisited = localStorage.getItem("hasVisitedPortfolio");
  return !hasVisited;
}

export default function Home() {
  const { theme } = useTheme();
  const [showWelcome, setShowWelcome] = useState(shouldShowWelcome);

  const handleSeasonSelected = () => {
    localStorage.setItem("hasVisitedPortfolio", "true");
    setShowWelcome(false);
  };

  return (
    <main
      className="transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      {showWelcome ? (
        <SeasonWelcome onSeasonSelected={handleSeasonSelected} />
      ) : (
        <Hero />
      )}
    </main>
  );
}
