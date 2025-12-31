"use client";

import { useTheme } from "@/hooks/useTheme";
import { seasonThemes, Season } from "@/utils/themes";

export default function SeasonSelector() {
  const { currentSeason, setCurrentSeason } = useTheme();

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {Object.entries(seasonThemes).map(([key, theme]) => {
        const isActive = currentSeason === key;

        return (
          <button
            key={key}
            onClick={() => setCurrentSeason(key as Season)}
            className={`
  px-6 py-3 rounded-lg font-medium
  transition-all duration-300 whitespace-nowrap
  ${
    isActive
      ? "border-4"
      : "hover:scale-105 opacity-60 hover:opacity-100 border-2"
  }
`}
            style={{
              backgroundColor: isActive ? theme.colors.primary : "transparent",
              color: isActive ? theme.colors.background : theme.colors.text,
              borderColor: theme.colors.primary,
              backdropFilter: "blur(8px)",
            }}
          >
            {theme.name}
          </button>
        );
      })}
    </div>
  );
}
