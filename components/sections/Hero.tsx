"use client";

import { useTheme } from "@/hooks/useTheme";
import SeasonSelector from "@/components/theme/SeasonSelector";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 transition-colors duration-500"
          style={{ color: theme.colors.primary }}
        >
          Laura Beaugrand
        </h1>

        <h2
          className="text-2xl md:text-4xl font-medium mb-6 transition-colors duration-500"
          style={{ color: theme.colors.text }}
        >
          Développeuse Full Stack
        </h2>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-colors duration-500"
          style={{ color: theme.colors.text }}
        >
          Passionnée par la création d&apos;expériences numériques élégantes et
          intuitives. Spécialisée en React, Next.js, Symfony et React Native.
        </p>
      </div>
      <div className="my-12">
        <SeasonSelector />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#projets"
          className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          }}
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-8 py-4 rounded-lg font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            borderColor: theme.colors.primary,
            color: theme.colors.primary,
          }}
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
