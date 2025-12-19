"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import dynamic from "next/dynamic";
import SeasonalParticles from "@/components/theme/SeasonalParticles";

const Header = dynamic(() => import("@/components/sections/Header"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/sections/Projects"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  ssr: false,
});
const About = dynamic(() => import("@/components/sections/About"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
});
const SeasonWelcome = dynamic(
  () => import("@/components/sections/SeasonWelcome"),
  {
    ssr: false,
  }
);
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
});

function shouldShowWelcome(): boolean {
  if (typeof window === "undefined") return true;
  const hasVisited = localStorage.getItem("hasVisitedPortfolio");
  return !hasVisited;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(shouldShowWelcome);
  const { theme: currentTheme, currentSeason } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleSeasonSelected = () => {
    localStorage.setItem("hasVisitedPortfolio", "true");
    setShowWelcome(false);
  };

  if (!mounted) return null;

  return (
    <>
      {!showWelcome && <Header />}
      <main className="min-h-screen relative">
        {!showWelcome && (
          <SeasonalParticles season={currentSeason} count={60} />
        )}
        {showWelcome ? (
          <SeasonWelcome onSeasonSelected={handleSeasonSelected} />
        ) : (
          <>
            <Hero />
            <div
              className="h-0.5 w-full"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${currentTheme.colors.primary} 50%, transparent 100%)`,
                opacity: 0.5,
              }}
            />
            <About />
            <div
              className="h-0.5 w-full"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${currentTheme.colors.primary} 50%, transparent 100%)`,
                opacity: 0.5,
              }}
            />
            <Projects />
            <div
              className="h-0.5 w-full"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${currentTheme.colors.primary} 50%, transparent 100%)`,
                opacity: 0.5,
              }}
            />
            <Contact />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
