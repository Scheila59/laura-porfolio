"use client";

import { useTheme } from "@/hooks/useTheme";
import SeasonSelector from "@/components/theme/SeasonSelector";
import NavigationLink from "@/components/ui/NavigationLink";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {/* tester Laura Beaugrand ou photo de profil en SVG */}
            Laura B.
          </NavigationLink>
          <nav className="hidden md:flex items-center gap-8">
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
          </nav>

          {/* Bouton hamburger - mobile only */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors duration-300"
            style={{ color: theme.colors.primary }}
            aria-label="Menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
          <div className="hidden md:block">
            <SeasonSelector />
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed top-0  right-0 h-full w-64 z-40 
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: theme.colors.card }}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          <nav className="flex flex-col space-y-6">
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
          </nav>
          <div
            className="pt-6 border-t"
            style={{ borderColor: theme.colors.primary }}
          >
            <p
              className="text-sm mb-4 opacity-70"
              style={{ color: theme.colors.text }}
            >
              {" "}
              Choisir un thème
            </p>
            <SeasonSelector />
          </div>
        </div>
      </div>
      {/* Overlay - ferme le menu en cliquant à côté */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
