"use client";

import { useEffect, useState } from "react";
import { Season } from "@/utils/themes";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  rotation?: number;
  color?: string;
}

interface SeasonalParticulesProps {
  season: Season;
  count?: number;
}

export default function SeasonalParticules({
  season,
  count = 30,
}: SeasonalParticulesProps) {
  // winter
  const Snowflake = ({ size, opacity }: { size: number; opacity: number }) => {
    // Variation aléatoire pour rendre chaque flocon unique
    const variation = Math.random() * 0.3 + 0.85;
    const blur = Math.random() * 1 + 0.5;

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{
          opacity,
          filter: `blur(${blur}px)`,
        }}
      >
        {/* Cercle extérieur (un peu déformé) */}
        <ellipse
          cx="12"
          cy="12"
          rx={8 * variation}
          ry={8 * (2 - variation)}
          fill="white"
          opacity="0.6"
        />
        {/* Cercle intérieur (plus lumineux) */}
        <ellipse
          cx="12"
          cy="12"
          rx={4 * variation}
          ry={4 * (2 - variation)}
          fill="white"
          opacity="0.9"
        />
      </svg>
    );
  };

  // autumn
  // Composant feuille d'automne

  const Leaf = ({
    size,
    opacity,
    rotation,
    color,
  }: {
    size: number;
    opacity: number;
    rotation: number;
    color?: string;
  }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{
          opacity,
          transform: `rotate(${rotation}deg)`,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
        }}
      >
        <path
          d="M12 2 C8 6, 6 10, 6 14 C6 18, 8 20, 12 22 C16 20, 18 18, 18 14 C18 10, 16 6, 12 2 Z"
          fill={color || "#D2691E"}
        />
        <line x1="12" y1="4" x2="12" y2="20" stroke="#654321" strokeWidth="1" />
      </svg>
    );
  };
  // printemps
  // Composant papillon
  const Butterfly = ({
    size,
    opacity,
    rotation,
    color,
  }: {
    size: number;
    opacity: number;
    rotation: number;
    color?: string;
  }) => {
    const colors = [
      { wing: "#FFB7C5", body: "#E91E63", accent: "#FF69B4" },
      { wing: "#B39DDB", body: "#7E57C2", accent: "#9575CD" },
      { wing: "#81C784", body: "#4CAF50", accent: "#66BB6A" },
      { wing: "#FFD54F", body: "#FFA000", accent: "#FFCA28" },
    ];
    let colorIndex = 0;
    if (color) {
      const parsed = parseInt(color);
      if (!isNaN(parsed)) {
        colorIndex = parsed % 4;
      }
    }
    const colorSet = colors[colorIndex];

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        style={{
          opacity,
          transform: `rotate(${rotation}deg)`,
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
        }}
      >
        {/* Aile supérieure gauche */}
        <ellipse
          cx="9"
          cy="11"
          rx="7"
          ry="9"
          fill={colorSet.wing}
          opacity="0.9"
          transform="rotate(-20 9 11)"
        />
        <circle cx="8" cy="11" r="2.5" fill={colorSet.accent} opacity="0.5" />

        {/* Aile supérieure droite */}
        <ellipse
          cx="23"
          cy="11"
          rx="7"
          ry="9"
          fill={colorSet.wing}
          opacity="0.9"
          transform="rotate(20 23 11)"
        />
        <circle cx="24" cy="11" r="2.5" fill={colorSet.accent} opacity="0.5" />

        {/* Aile inférieure gauche */}
        <ellipse
          cx="11"
          cy="20"
          rx="5.5"
          ry="7"
          fill={colorSet.wing}
          opacity="0.8"
          transform="rotate(-10 11 20)"
        />

        {/* Aile inférieure droite */}
        <ellipse
          cx="21"
          cy="20"
          rx="5.5"
          ry="7"
          fill={colorSet.wing}
          opacity="0.8"
          transform="rotate(10 21 20)"
        />

        {/* Corps */}
        <ellipse cx="16" cy="16" rx="2" ry="10" fill={colorSet.body} />
        <circle cx="16" cy="10" r="2" fill={colorSet.body} />

        {/* Antennes courbées */}
        <line
          x1="16"
          y1="10"
          x2="14"
          y2="6"
          stroke={colorSet.body}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="14" cy="6" r="1" fill={colorSet.body} />
        <line
          x1="16"
          y1="10"
          x2="18"
          y2="6"
          stroke={colorSet.body}
          strokeWidth="1"
          strokeLinecap="round"
        />
        <circle cx="18" cy="6" r="1" fill={colorSet.body} />
      </svg>
    );
  };

  // Composant bulle d'eau
  const Bubble = ({ size, opacity }: { size: number; opacity: number }) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        style={{
          opacity,
        }}
      >
        {/* Cercle principal - fond semi-transparent */}
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="rgba(255, 255, 255, 0.25)"
          stroke="#00CED1"
          strokeWidth="1.2"
          opacity="0.8"
        />
        {/* Reflet lumineux principal */}
        <circle cx="9" cy="9" r="3.5" fill="#FFFFFF" opacity="0.9" />
        {/* Petit reflet secondaire */}
        <circle cx="15" cy="14" r="1.5" fill="#FFFFFF" opacity="0.7" />
      </svg>
    );
  };

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (
      season !== "winter" &&
      season !== "autumn" &&
      season !== "spring" &&
      season !== "summer"
    )
      return;

    // Delai pour éviter les problèmes d'hydratation ssr/client
    const timer = setTimeout(() => {
      // Nombre de particules selon la saison
      const actualCount =
        season === "spring"
          ? Math.floor(count * 0.5) // Moitié pour le printemps
          : season === "winter"
          ? Math.floor(count * 1.5) // 50% de plus pour l'hiver
          : count;
      const initialParticles = Array.from({ length: actualCount }, (_, i) => {
        // Couleurs selon la saison
        let color = "#FFFFFF";
        // couleurs aléatoires des feuilles d'automne
        if (season === "autumn") {
          const autumnColors = ["#D2691E", "#8B4513", "#CD853F", "#A0522D"];
          color = autumnColors[Math.floor(Math.random() * autumnColors.length)];
          // Numéro de variante de couleurs pour les papillons
        } else if (season === "spring") {
          color = String(Math.floor(Math.random() * 4));
        }

        return {
          id: i,
          x: Math.random() * 100,
          y:
            season === "spring"
              ? Math.random() * 100
              : season === "summer"
              ? Math.random() * 120
              : Math.random() * 100,
          size:
            season === "winter"
              ? Math.random() * 12 + 8
              : season === "spring"
              ? Math.random() * 15 + 10
              : season === "summer"
              ? Math.random() * 18 + 10
              : Math.random() * 20 + 15,
          speedY:
            season === "autumn"
              ? Math.random() * 0.4 + 0.2
              : season === "spring"
              ? (Math.random() - 0.5) * 0.3
              : season === "summer"
              ? -(Math.random() * 0.3 + 0.15)
              : Math.random() * 1 + 0.5,
          speedX:
            season === "autumn"
              ? Math.random() * 0.8 - 0.4
              : season === "spring"
              ? Math.random() * 0.8 - 0.4
              : Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.6 + 0.4,
          rotation: Math.random() * 360,
          color,
        };
      });

      setParticles(initialParticles);
    }, 0);

    const interval = setInterval(
      () => {
        setParticles((prev) =>
          prev.map((particle) => {
            let newY = particle.y + particle.speedY;
            let newX = particle.x + particle.speedX;

            // Mouvement ondulatoire pour les papillons
            if (season === "spring") {
              newY =
                particle.y +
                particle.speedY +
                Math.sin(Date.now() * 0.002 + particle.id) * 0.3;
              newX =
                particle.x +
                particle.speedX +
                Math.cos(Date.now() * 0.002 + particle.id) * 0.2;
            }

            // Repositionner selon la saison
            if (season === "summer") {
              if (newY < -10) {
                // Si la bulle sort en haut
                newY = 110; // Réapparaît en bas
                newX = Math.random() * 100;
              }
            } else {
              if (newY > 100) {
                // Si sort en bas
                newY = -10; // Réapparaît en haut
                newX = Math.random() * 100;
              }
            }

            if (newX < 0) newX = 100;
            if (newX > 100) newX = 0;

            return { ...particle, x: newX, y: newY };
          })
        );
      },
      season === "spring" ? 80 : 50
    );

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [season, count]);

  if (
    season !== "winter" &&
    season !== "autumn" &&
    season !== "spring" &&
    season !== "summer"
  )
    return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        >
          {season === "winter" && (
            <Snowflake size={particle.size} opacity={particle.opacity} />
          )}
          {season === "autumn" && (
            <Leaf
              size={particle.size}
              opacity={particle.opacity}
              rotation={particle.rotation || 0}
              color={particle.color}
            />
          )}
          {season === "spring" && (
            <Butterfly
              size={particle.size}
              opacity={particle.opacity}
              rotation={particle.rotation || 0}
              color={particle.color}
            />
          )}
          {season === "summer" && (
            <Bubble size={particle.size} opacity={particle.opacity} />
          )}
        </div>
      ))}
    </div>
  );
}
