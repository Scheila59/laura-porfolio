"use client";

import { useTheme } from "@/hooks/useTheme";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Github",
      icon: FaGithub,
      url: "https://github.com/Scheila59",
      label: "Scheila59",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/laura-beaugrand",
      label: "Laura Beaugrand",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:l.beaugrand@hotmail.com",
      label: "l.beaugrand@hotmail.com",
    },
  ];

  return (
    <footer
      className="py-8 px-4 transition-colors duration-500"
      style={{
        background: theme.gradient,
        borderTop: `2px solid ${theme.colors.secondary}`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Texte copyright */}
          <p
            className="text-sm md:text-base"
            style={{ color: theme.colors.text }}
          >
            © {currentYear} Laura Beaugrand. Tous droits réservés.
          </p>

          {/* Liens sociaux */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="transition-all duration-300 hover:scale-110"
                  style={{ color: theme.colors.primary }}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <p
            className="text-sm italic opacity-70 text-center md:text-right"
            style={{ color: theme.colors.text }}
          >
            Fait avec passion 💜
          </p>
        </div>
      </div>
    </footer>
  );
}
