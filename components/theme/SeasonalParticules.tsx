/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useRef, useEffect, useState } from "react";
import { Season } from "@/utils/themes";

interface Particle {
  id: string;
  left: number;
  top: number;
  animationDuration: number;
  size: number;
}

interface SeasonalParticlesProps {
  season: Season;
  count?: number;
}

export default function SeasonalParticles({
  season,
  count = 30,
}: SeasonalParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const generatedRef = useRef(false);

  useEffect(() => {
    if (!generatedRef.current) {
      const newParticles = Array.from({ length: count }, (_, i) => ({
        id: `${season}-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: 15 + Math.random() * 15,
        size: 0.5 + Math.random() * 1.5,
      }));
      setParticles(newParticles);
      generatedRef.current = true;
    }
  }, [count, season]);

  // Reset quand la saison change
  useEffect(() => {
    generatedRef.current = false;
  }, [season]);

  const getParticleContent = () => {
    switch (season) {
      case "spring":
        return "🌸";
      case "summer":
        return "🫧";
      case "autumn":
        return "🍂";
      case "winter":
        return "❄️";
      default:
        return "";
    }
  };

  const getAnimationClass = () => {
    switch (season) {
      case "spring":
        return "animate-float-petals";
      case "summer":
        return "animate-float-bubbles";
      case "autumn":
        return "animate-float-leaves";
      case "winter":
        return "animate-fall-snow";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${getAnimationClass()}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            fontSize: `${particle.size}rem`,
            animationDuration: `${particle.animationDuration}s`,
            opacity: 0.6,
          }}
        >
          {getParticleContent()}
        </div>
      ))}
    </div>
  );
}
