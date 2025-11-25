import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

export const metadata: Metadata = {
  title: "Laura Beaugrand - Développeuse Full Stack",
  description:
    "Portfolio de Laura Beaugrand - Développeuse Full Stack spécialisée en React, Next.js, Symfony et React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
