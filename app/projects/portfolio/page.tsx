import type { Metadata } from "next";
import PortfolioProjectClient from "./PortfolioProjectClient";

export const metadata: Metadata = {
  title: "Portfolio Personnel - Projet Méta",
  description:
    "Portfolio interactif avec système de thèmes saisonniers, particules animées et animations Framer Motion. Développé avec Next.js 14, TypeScript et Tailwind CSS.",
  openGraph: {
    title: "Portfolio Personnel | Laura Beaugrand",
    description:
      "Vous êtes actuellement sur ce projet ! Portfolio avec thèmes saisonniers et animations fluides.",
    images: ["/og-image.jpg"],
  },
};

export default function PortfolioPage() {
  return <PortfolioProjectClient />;
}
