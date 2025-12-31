"use client";

import { useTheme } from "@/hooks/useTheme";
import SeasonSelector from "@/components/theme/SeasonSelector";
import NavigationLink from "@/components/ui/NavigationLink";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { seasonThemes, Season } from "@/utils/themes";

export default function Header() {
  const { theme, currentSeason, setCurrentSeason } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReset = () => {
    localStorage.removeItem("hasVisitedPortfolio");
    window.location.reload();
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavigationLink
            href="#"
            className="text-2xl font-bold transition-colors duration-300 hover:opacity-80"
            style={{ color: theme.colors.primary }}
          >
            {/* // todo: tester avec une photo de profil en SVG */}
            Laura B.
          </NavigationLink>
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavigationLink
              href="#about"
              className="font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
            >
              À propos
            </NavigationLink>
            <NavigationLink
              href="#projets"
              className="font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
            >
              Projets
            </NavigationLink>
            <NavigationLink
              href="#contact"
              className="font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
            >
              Contact
            </NavigationLink>
            <button
              onClick={handleReset}
              className="text-xs opacity-50 hover:opacity-100 transition-opacity duration-300"
              style={{ color: theme.colors.text }}
              title="Retour à la sélection des saisons"
            >
              Réinitialiser
            </button>
          </nav>

          {/* Bouton hamburger - tablette et mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 transition-colors duration-300"
            style={{ color: theme.colors.primary }}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Sélecteur de saison - desktop uniquement */}
          <div className="hidden lg:block">
            <SeasonSelector />
          </div>
        </div>
      </div>

      {/* Menu mobile/tablette */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 
        transform transition-transform duration-300 ease-in-out
        lg:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: theme.colors.card }}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 transition-colors duration-300 hover:opacity-70"
          style={{ color: theme.colors.primary }}
          aria-label="Fermer le menu"
        >
          <FaTimes size={24} />
        </button>

        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          <nav className="flex flex-col space-y-6">
            <NavigationLink
              href="#about"
              className="text-lg font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </NavigationLink>
            <NavigationLink
              href="#projets"
              className="text-lg font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </NavigationLink>
            <NavigationLink
              href="#contact"
              className="text-lg font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: theme.colors.text }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavigationLink>

            <button
              onClick={() => {
                handleReset();
                setIsMenuOpen(false);
              }}
              className="text-sm opacity-50 hover:opacity-100 transition-opacity duration-300 text-left"
              style={{ color: theme.colors.text }}
            >
              Réinitialiser
            </button>
          </nav>

          {/* Sélecteur de saison dans le menu mobile */}
          <div
            className="pt-6 border-t"
            style={{ borderColor: theme.colors.accent }}
          >
            <p
              className="text-sm mb-4 opacity-70"
              style={{ color: theme.colors.text }}
            >
              Choisir un thème
            </p>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(seasonThemes).map(([key, seasonTheme]) => {
                const isActive = currentSeason === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentSeason(key as Season);
                      setIsMenuOpen(false);
                    }}
                    className={`
                      px-4 py-3 rounded-lg font-medium text-center
                      transition-all duration-300 whitespace-nowrap
                      ${
                        isActive
                          ? "border-4"
                          : "hover:scale-105 opacity-60 hover:opacity-100 border-2"
                      }
                    `}
                    style={{
                      backgroundColor: isActive
                        ? seasonTheme.colors.primary
                        : "transparent",
                      color: isActive
                        ? seasonTheme.colors.background
                        : seasonTheme.colors.text,
                      borderColor: seasonTheme.colors.primary,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {seasonTheme.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay - ferme le menu en cliquant à côté */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Ligne séparatrice */}
      <div
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${theme.colors.secondary} 50%, transparent 100%)`,
          opacity: 0.5,
        }}
      />
    </header>
  );
}
