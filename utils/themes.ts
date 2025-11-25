export type Season = "spring" | "summer" | "autumn" | "winter";

export interface SeasonColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface SeasonTheme {
  name: string;
  icon: string;
  colors: SeasonColors;
  particles: string;
}

export const seasonThemes: Record<Season, SeasonTheme> = {
  spring: {
    name: "Printemps",
    icon: "🌸",
    colors: {
      primary: "#FF69B4",
      secondary: "#90EE90",
      accent: "#FFD700",
      background: "#F0FFF0",
      text: "#2D5016",
    },
    particles: "petals",
  },
  summer: {
    name: "Été",
    icon: "☀️",
    colors: {
      primary: "#ffa07a",
      secondary: "#3cb371",
      accent: "#FFD700",
      background: "#FFF5E1",
      text: "#2E2E2E",
    },
    particles: "bubbles",
  },
  autumn: {
    name: "Automne",
    icon: "🍂",
    colors: {
      primary: "#DC143C",
      secondary: "#D2691E",
      accent: "#B8860B",
      background: "#FFF8DC",
      text: "#8B4513",
    },
    particles: "leaves",
  },
  winter: {
    name: "Hiver",
    icon: "❄️",
    colors: {
      primary: "#9370DB",
      secondary: "#87CEEB",
      accent: "#5454A1",
      background: "#F0F8FF",
      text: "#2F2F4F",
    },
    particles: "snowflakes",
  },
};
