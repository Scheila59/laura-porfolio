"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 transition-colors duration-500"
      style={{ background: theme.gradient }}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ color: theme.colors.primary }}
        >
          À propos
        </h2>
        {/* Card principale */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 mb-12 shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px ${theme.colors.primary}15`,
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Développeuse Full Stack passionnée
          </h3>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <p>
              Après avoir dirigé une entreprise de couverture aux côtés de mon
              mari pendant 5 ans, j&apos;ai choisi de me reconvertir dans le
              développement web, un domaine qui allie créativité et technique.
            </p>
            <p>
              Diplômée <strong>Développeuse Web et Web Mobile (DWWM)</strong> et{" "}
              <strong>
                Conceptrice Développeuse d&apos;Applications (CDA)
              </strong>
              , je maîtrise aussi bien le frontend que le backend.
            </p>
            <p>
              Ce qui me caractérise ? Une passion pour{" "}
              <strong style={{ color: theme.colors.primary }}>
                les couleurs et leur pouvoir
              </strong>{" "}
              : attirer l&apos;œil sur un élément précis, susciter des émotions,
              guider l&apos;utilisateur... Je crée des interfaces où chaque
              nuance a un sens.
            </p>
            <p>
              <strong>Organisation et méthode :</strong> J&apos;utilise{" "}
              <strong style={{ color: theme.colors.primary }}>Notion</strong>{" "}
              comme hub central pour tous mes projets : tableaux Kanban,
              documentation technique, veille techno, et centralisation des
              ressources. Cette approche structurée me permet de rester efficace
              et de retrouver facilement toute information nécessaire.
            </p>
          </div>
        </motion.div>
        {/* Compétences */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px ${theme.colors.primary}15`,
            }}
          >
            <h4
              className="text-xl font-bold mb-4"
              style={{ color: theme.colors.primary }}
            >
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "React Native",
                "TypeScript",
                "Tailwind CSS",
                "Bootstrap",
                "Framer Motion",
                "Expo",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: theme.colors.primary + "20",
                    color: theme.colors.primary,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px ${theme.colors.primary}15`,
            }}
          >
            <h4
              className="text-xl font-bold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Symfony", "PHP", "Node.js", "MySQL", "API REST"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: theme.colors.secondary + "20",
                      color: theme.colors.secondary,
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl p-6 shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.65)",
              boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px ${theme.colors.primary}15`,
            }}
          >
            <h4
              className="text-xl font-bold mb-4"
              style={{ color: theme.colors.accent }}
            >
              Outils & Design
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Docker", "DBeaver", "Postman", "Notion"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: theme.colors.accent + "20",
                      color: theme.colors.accent,
                    }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
