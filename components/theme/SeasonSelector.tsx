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
              w-28 px-6 py-3 rounded-lg font-medium
              transition-all duration-300
              ${
                isActive
                  ? "scale-110 shadow-lg "
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }
            `}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.text,
            }}
          >
            {/* <span className="text-2xl mr-2">{theme.icon}</span> */}
            {theme.name}
          </button>
        );
      })}
    </div>
  );
}
