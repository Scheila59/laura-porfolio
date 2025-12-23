export type Season = "spring" | "summer" | "autumn" | "winter";

export interface SeasonColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  card: string;
}

export interface SeasonTheme {
  name: string;
  icon: string;
  colors: SeasonColors;
  particles: string;
  backgroundImage: string;
  gradient: string;
  cardTexture: string;
}

export const seasonThemes: Record<Season, SeasonTheme> = {
  spring: {
    name: "Printemps",
    icon: "🌸",
    colors: {
      primary: "#E91E63",
      secondary: "#4CAF50",
      accent: "#C2185B",
      background: "#FFF0F5",
      text: "#1B5E20",
      card: "#FFFFFF",
    },
    particles: "petals",
    backgroundImage:
      "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=1920",
    gradient: "linear-gradient(135deg, #FFF0F5 0%, #D4F1D4 100%)",
    cardTexture:
      // "url('https://www.toptal.com/designers/subtlepatterns/uploads/beige-tiles.png')",
      "url('/textures/beige-tiles.webp')",
  },
  summer: {
    name: "Été",
    icon: "☀️",
    colors: {
      primary: "#00CED1",
      secondary: "#FFB74D",
      accent: "#FF6B35",
      background: "#F0F8FF",
      text: "#1A237E",
      card: "#FFFFFF",
    },
    particles: "bubbles",
    backgroundImage:
      "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920",
    gradient: "linear-gradient(135deg, #E1F5FE 0%, #FFF8E1 50%, #B2EBF2 100%)",
    cardTexture:
      "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/textures/sand-beach.jpg')",
  },
  autumn: {
    name: "Automne",
    icon: "🍂",
    colors: {
      primary: "#D2691E",
      secondary: "#8B4513",
      accent: "#B8860B",
      background: "#FFF8F0",
      text: "#3E2723",
      card: "#FFFFFF",
    },
    particles: "leaves",
    backgroundImage:
      "https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1920",
    gradient: "linear-gradient(135deg, #FFF0E0 0%, #FFD8A8 50%, #F5DEB3 100%)",
    cardTexture:
      // "url('https://www.toptal.com/designers/subtlepatterns/uploads/light-veneer.png')",
      "url('textures/light-veneer.webp')",
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
      card: "#FFFFFF",
    },
    particles: "snowflakes",
    backgroundImage:
      "https://images.pexels.com/photos/235621/pexels-photo-235621.jpeg?auto=compress&cs=tinysrgb&w=1920",
    gradient: "linear-gradient(135deg, #EBF4FA 0%, #D5DEF5 100%)",
    // gradient: "linear-gradient(135deg, #E3F2FD 0%, #D1E3F5 50%, #C5D9F0 100%)",
    cardTexture: "url('textures/nice_snow.webp')",
  },
};
