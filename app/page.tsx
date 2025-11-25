"use client";

import { useTheme } from "@/hooks/useTheme";
import SeasonSelector from "@/components/theme/SeasonSelector";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main
      className="min-h-screen p-8 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-5xl font-bold text-center mb-4"
          style={{ color: theme.colors.text }}
        >
          Portfolio de Laura Beaugrand
        </h1>

        <p
          className="text-xl text-center mb-8"
          style={{ color: theme.colors.text }}
        >
          Développeuse Full Stack
        </p>

        <SeasonSelector />

        <div className="mt-12 text-center">
          <p
            className="text-2xl font-medium"
            style={{ color: theme.colors.text }}
          >
            🎨 Thème actuel : {theme.name} {theme.icon}
          </p>
        </div>
      </div>
    </main>
  );
}
