import type { Metadata } from "next";
import AMGProjectClient from "./AMGProjectClient";

export const metadata: Metadata = {
  title: "AMG Location - Site de location d'engins",
  description:
    "Plateforme de location d'engins développée en autonomie avec Symfony, PHP, Twig et Docker. Premier projet fullstack complet avec back-office et système d'authentification.",
  openGraph: {
    title: "AMG Location | Laura Beaugrand",
    description:
      "Mon premier projet fullstack : plateforme de location d'engins avec Symfony, Docker et MariaDB.",
    images: ["/projects/amg-og.jpg"],
  },
};

export default function AMGPage() {
  return <AMGProjectClient />;
}
