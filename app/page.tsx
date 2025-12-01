"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

function shouldShowWelcome(): boolean {
  if (typeof window === "undefined") return true;
  const hasVisited = localStorage.getItem("hasVisitedPortfolio");
  return !hasVisited;
}

const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
});

const SeasonWelcome = dynamic(
  () => import("@/components/sections/SeasonWelcome"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(shouldShowWelcome);

  const handleSeasonSelected = () => {
    localStorage.setItem("hasVisitedPortfolio", "true");
    setShowWelcome(false);
  };

  return (
    <main className="min-h-screen">
      {showWelcome ? (
        <SeasonWelcome onSeasonSelected={handleSeasonSelected} />
      ) : (
        <Hero />
      )}
    </main>
  );
}
