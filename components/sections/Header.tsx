"use client";

import { useTheme } from "@/hooks/useTheme";
import SeasonSelector from "@/components/theme/SeasonSelector";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold transition-colors duration-300 hover:opacity-80"
            style={{ color: theme.colors.primary }}
          >
            {/* tester Laura Beaugrand ou photo de profil en SVG */}
            Laura B.
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#projets"
              className="font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
            >
              Projets
            </a>
            <a
              href="#contact"
              className="font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <SeasonSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
