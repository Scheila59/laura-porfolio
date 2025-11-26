"use client";

import { useTheme } from "@/hooks/useTheme";
import { seasonThemes, Season } from "@/utils/themes";

interface SeasonWelcomeProps {
  onSeasonSelected: () => void;
}

export default function SeasonWelcome({
  onSeasonSelected,
}: SeasonWelcomeProps) {
  const { currentSeason, setCurrentSeason, theme } = useTheme();

  const handleSeasonClick = (season: Season) => {
    setCurrentSeason(season);
    setTimeout(() => {
      onSeasonSelected();
    }, 800);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-colors duration-800"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-6xl font-bold transition-colors duration-500"
            style={{ color: theme.colors.primary }}
          >
            Bienvenue
          </h1>

          <p
            className="text-xl md:text-3xl font-light leading-relaxed transition-colors duration-500"
            style={{ color: theme.colors.text }}
          >
            Avant d&apos;apprendre qui je suis,
            <br />
            j&apos;ai une question pour toi...
          </p>
        </div>

        <h2
          className="text-3xl md:text-5xl font-semibold transition-colors duration-500"
          style={{ color: theme.colors.primary }}
        >
          Quelle est ta saison préférée ?
        </h2>

        <p
          className="text-lg md:text-xl opacity-80 transition-colors duration-500"
          style={{ color: theme.colors.text }}
        >
          Choisis celle qui te correspond le mieux, elle personnalisera ton
          expérience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          {Object.entries(seasonThemes).map(([key, seasonTheme]) => {
            const isSelected = currentSeason === key;

            return (
              <button
                key={key}
                onClick={() => handleSeasonClick(key as Season)}
                className={`
                  group relative overflow-hidden
                  p-8 rounded-2xl
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
                  <span className="text-2xl font-bold">{seasonTheme.name}</span>
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
    </section>
  );
}
