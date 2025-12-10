"use client";

import { useTheme } from "@/hooks/useTheme";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { theme } = useTheme();

  const contacts = [
    {
      name: "Github",
      icon: FaGithub,
      link: "https://github.com/Scheila59",
      label: "Scheila59",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/laura-beaugrand",
      label: "Laura Beaugrand",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      link: "mailto:l.beaugrand@hotmail.com",
      label: "l.beaugrand@hotmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 transition-color duration-500"
      style={{ background: theme.gradient }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: theme.colors.primary }}
        >
          Restons en contact
        </h2>

        <p
          className="text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: theme.colors.text }}
        >
          Vous avez un projet en tête ? Une question ? N&apos;hésitez pas à me
          contacter !
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.name}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full md:w-auto"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)", // Blanc semi-transparent
                  borderColor: theme.colors.primary,
                  border: "2px solid",
                  backgroundImage: `${theme.cardTexture}, linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92))`,
                  backgroundSize: "auto, cover",
                  backgroundRepeat: "repeat, no-repeat",
                }}
              >
                <Icon size={32} style={{ color: theme.colors.primary }} />
                <div className="text-left">
                  <p
                    className="font-semibold text-lg"
                    style={{ color: theme.colors.primary }}
                  >
                    {contact.name}
                  </p>
                  <p className="text-sm" style={{ color: theme.colors.text }}>
                    {contact.label}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
