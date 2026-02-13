import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import TarteAuCitron from "@/components/TarteAuCitron";

export const metadata: Metadata = {
  title: {
    default: "Laura Beaugrand | Développeuse Web Full-Stack",
    template: "%s | Laura Beaugrand",
  },
  description:
    "Portfolio de Laura Beaugrand, développeuse web passionnée. Spécialisée en Symfony, React Native et Next.js. Diplômée CDA et DWWM, je crée des applications web et mobiles modernes et performantes.",
  keywords: [
    "laura beaugrand",
    "Laura Beaugrand",
    "développeuse web",
    "portfolio",
    "Symfony",
    "React Native",
    "Next.js",
    "TypeScript",
    "développeuse full-stack",
    "CDA",
    "DWWM",
  ],
  authors: [{ name: "Laura Beaugrand" }],
  creator: "Laura Beaugrand",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://laura-beaugrand.vercel.app/",
    title: "Laura Beaugrand | Développeuse Web Full-Stack",
    description:
      "Portfolio interactif avec système de thèmes saisonniers. Découvrez mes projets Symfony, React Native et Next.js.",
    siteName: "Laura Beaugrand Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laura Beaugrand - Développeuse Web Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Beaugrand | Développeuse Web Full-Stack",
    description:
      "Portfolio interactif avec système de thèmes saisonniers. Découvrez mes projets en développement web.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          {children}
          <TarteAuCitron />
        </ThemeProvider>
      </body>
    </html>
  );
}
