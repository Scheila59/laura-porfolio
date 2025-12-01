"use client";

import { useTheme } from "@/hooks/useTheme";
import { seasonThemes, Season } from "@/utils/themes";
import { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";
import SeasonalParticles from "@/components/theme/SeasonalParticules";

interface SeasonWelcomeProps {
  onSeasonSelected: () => void;
}

export default function SeasonWelcome({
  onSeasonSelected,
}: SeasonWelcomeProps) {
  const WelcomeText = useTypewriter({
    text: "Bienvenue",
    speed: 80,
    delay: 100,
  });
  const QuestionText = useTypewriter({
    text: "Avant d'apprendre qui je suis, j'ai une question pour toi...",
    speed: 40,
    delay: 1500,
  });
  const SeasonText = useTypewriter({
    text: "Quelle est ta saison préférée ?",
    speed: 100,
    delay: 5500,
  });

  const [showChoiceSeason, setShowChoiceSeason] = useState(false);
  useEffect(() => {
    if (SeasonText.isComplete) {
      const timer = setTimeout(() => {
        setShowChoiceSeason(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [SeasonText.isComplete]);
  const { currentSeason, setCurrentSeason } = useTheme();

  const [previewSeason, setPreviewSeason] = useState<Season | null>(null);
  const displayTheme = previewSeason
    ? seasonThemes[previewSeason]
    : seasonThemes[currentSeason];

  const handleSeasonClick = (season: Season) => {
    setCurrentSeason(season);
    setTimeout(() => {
      onSeasonSelected();
    }, 800);
  };

  return (
    <section
      key={previewSeason || currentSeason}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-colors duration-800"
      style={{ backgroundColor: displayTheme.colors.background }}
    >
      {/* Particules en arrière-plan */}
      <SeasonalParticles season={previewSeason || currentSeason} count={30} />
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-6xl font-bold transition-colors duration-500"
            style={{ color: displayTheme.colors.primary }}
          >
            {WelcomeText.displayText}
            {!WelcomeText.isComplete && (
              <span className="animate-pulse">|</span>
            )}
          </h1>

          <p
            className="text-xl md:text-3xl font-light leading-relaxed transition-colors duration-500"
            style={{ color: displayTheme.colors.text }}
          >
            {QuestionText.displayText}
            {!QuestionText.isComplete && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-semibold transition-colors duration-500 min-h-[4rem]:"
          style={{ color: displayTheme.colors.primary }}
        >
          {SeasonText.displayText}
          {!SeasonText.isComplete && <span className="animate-pulse">|</span>}
        </h2>

        {/* apparait apres la question terminée */}
        {showChoiceSeason && (
          <div className="animate-slide-up space-y-8">
            <p
              className="text-lg md:text-xl opacity-80 transition-colors duration-600"
              style={{ color: displayTheme.colors.text }}
            >
              Choisis celle qui te correspond le mieux, elle personnalisera ton
              expérience <br /> (
              <span
                className="font-bold"
                style={{ color: displayTheme.colors.primary }}
              >
                survole
              </span>{" "}
              pour prévisualiser,{" "}
              <span
                className="font-bold"
                style={{ color: displayTheme.colors.primary }}
              >
                clique
              </span>{" "}
              pour valider ton choix)
            </p>

            {previewSeason && (
              <p
                className="text-base italic opacity-70 transition-all duration-300"
                style={{ color: displayTheme.colors.primary }}
              >
                Prévisualisation : {seasonThemes[previewSeason].name}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {Object.entries(seasonThemes).map(([key, seasonTheme]) => {
                const isSelected = currentSeason === key;

                return (
                  <button
                    key={key}
                    onClick={() => handleSeasonClick(key as Season)}
                    onMouseEnter={() => setPreviewSeason(key as Season)}
                    onMouseLeave={() => setPreviewSeason(null)}
                    className={`
                  group relative overflow-hidden
                  p-8 lg:p-6 rounded-2xl
                  transition-all duration-500
                  ${
                    isSelected
                      ? "scale-105 shadow-2xl"
                      : "hover:scale-105 hover:shadow-xl opacity-90 hover:opacity-100"
                  }
                `}
                    style={{
                      backgroundColor: seasonTheme.colors.primary,
                      color: seasonTheme.colors.background,
                      boxShadow: isSelected
                        ? `0 0 0 4px ${seasonTheme.colors.accent}`
                        : "none",
                    }}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <span className="text-6xl">{seasonTheme.icon}</span>
                      <span className="text-2xl font-bold">
                        {seasonTheme.name}
                      </span>
                      <span className="text-sm opacity-80">
                        {key === "spring" && "Renouveau et douceur"}
                        {key === "summer" && "Énergie et chaleur"}
                        {key === "autumn" && "Sagesse et chaleur"}
                        {key === "winter" && "Élégance et sérénité"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
