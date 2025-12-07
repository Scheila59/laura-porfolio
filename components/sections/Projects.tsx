"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AMG Location -Site de location d'engins",
    description:
      "Plateforme complète de location avec gestion de back-office, système de catalogue, et base de données.",
    technologies: ["Symfony", "PHP", "TWIG", "MySQL"],
    image: "/projects/engins.jpg", // TODO: changer l'image
    link: "https://github.com/Scheila59",
  },
  {
    id: 2,
    title: "Application mobile de gestion de session de travail",
    description:
      "Application mobile développée en React Native avec API Symfony pour la gestion multi-applications.",
    technologies: ["React Native", "Symfony API", "TypeScript", "Expo"],
    image: "/projects/engins.jpg", // TODO: changer l'image
    link: "https://github.com/Scheila59",
  },
  {
    id: 3,
    title: "Portfolio Personnel",
    description:
      "Portfolio interactif avec système de thèmes saisonniers et animations fluides.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.jpg", // TODO: changer l'image
    link: "https://github.com/Scheila59",
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number(entry.target.getAttribute("data-card-id"));
            setVisibleCards((prev) => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-card-id]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projets"
      className="min-h-screen py-20 px-4 transition-colors duration-500"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: theme.colors.primary }}
        >
          Mes projets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              data-card-id={project.id}
              initial={{ opacity: 0, y: 100 }}
              animate={
                visibleCards.includes(project.id)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 100 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.primary,
                border: "2px solid",
              }}
            >
              <div className="p-6">
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: theme.colors.secondary }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-4 leading-relaxed"
                  style={{ color: theme.colors.text }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: theme.colors.primary + "20",
                        color: theme.colors.primary,
                      }}
                    >
                      {" "}
                      {tech}{" "}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: theme.colors.primary,
                    color: theme.colors.background,
                  }}
                >
                  Voir sur GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
