"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import SeasonalParticles from "@/components/theme/SeasonalParticles";
import { FaArrowLeft, FaLock } from "react-icons/fa";
import NavigationLink from "@/components/ui/NavigationLink";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Mobile  - Architecture Multi-Apps",
  description:
    "Application mobile React Native avec API Symfony centralisée. Architecture scalable permettant la communication entre plusieurs applications via JWT.",
  openGraph: {
    title: "Application Mobile  | Laura Beaugrand",
    description:
      "Architecture multi-applications avec API REST centralisée. React Native, TypeScript, Symfony.",
    images: ["/projects/appSecret-og.jpg"],
  },
};

export default function AppMobilePage() {
  const { theme, currentSeason } = useTheme();

  return (
    <div
      className="min-h-screen py-20 px-4 transition-colors duration-500"
      style={{ background: theme.gradient }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ background: theme.gradient }}
      >
        <SeasonalParticles season={currentSeason} count={30} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Bouton Retour */}
        <NavigationLink
          href="/#projets"
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.primary}`,
            color: theme.colors.primary,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          }}
        >
          <FaArrowLeft />
          <span className="font-semibold">Retour aux projets</span>
        </NavigationLink>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: theme.colors.primary }}
        >
          Application Mobile de Gestion d&apos;une session de travail
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
          style={{ color: theme.colors.text }}
        >
          Architecture mutli-applications avec API centralisée
        </motion.p>

        {/* Bannière confidentialité */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 rounded-xl p-6 flex items-start gap-4"
          style={{
            backgroundColor: "rgba(255, 200, 100, 0.15)",
            border: `2px solid ${theme.colors.accent}`,
            boxShadow: `0 4px 16px rgba(0, 0, 0, 0.08)`,
          }}
        >
          <FaLock
            size={24}
            style={{
              color: theme.colors.accent,
              flexShrink: 0,
              marginTop: "4px",
            }}
          />
          <div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: theme.colors.accent }}
            >
              Confidentialité du projet
            </h3>
            <p style={{ color: theme.colors.text }}>
              Pour des raisons de confidentialité, aucun visuel de
              l&apos;application ne peut être partagé. La description ci-dessous
              se concentre sur l&apos;architecture technique et les défis
              relevés.
            </p>
          </div>
        </motion.div>

        {/* Contexte du projet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-xl p-8 mb-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Contexte du projet
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <p>
              Application mobile développée en <strong>React Native </strong>
              avec une API backend <strong>Symfony</strong> pour répondre à un
              besoin de gestion multi-applications dans un contexte
              professionnel.
            </p>

            <p>
              Le défi principal était de concevoir une{" "}
              <strong style={{ color: theme.colors.primary }}>
                architecture scalable
              </strong>{" "}
              permettant à plusieurs applications mobiles de communiquer avec
              une API centralisée, tout en maintenant la cohérence des données
              et la sécurité des échanges.
            </p>

            <p
              className="text-base italic"
              style={{ color: theme.colors.text }}
            >
              <strong>Projet réalisé en novembre 2025</strong> durant ma
              formation CDA (Concepteur Développeur d&apos;Applications),
              mettant en pratique les concepts d&apos;architecture logicielle et
              d&apos;API REST.
            </p>
          </div>
        </motion.div>
        {/* Architecture Technique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="rounded-xl p-8 mb-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Architecture Technique
          </h2>

          {/* Schéma ASCII simplifié */}
          <div
            className="mb-8 p-6 rounded-lg font-mono text-sm overflow-x-auto"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              border: `1px solid ${theme.colors.secondary}40`,
            }}
          >
            <pre style={{ color: theme.colors.text }}>
              {`┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Application   │     │   Application   │     │   Application   │
│    Mobile #1    │     │    Mobile #2    │     │    Mobile #3    │
│  (React Native) │     │  (React Native) │     │  (React Native) │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         │         HTTP/REST     │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │     API Centralisée     │
                    │   (Symfony + API REST)  │
                    │   - Authentification    │
                    │   - Gestion sessions    │
                    │   - Business Logic      │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │   Base de Données       │
                    │   (MySQL/MariaDB)       │
                    └─────────────────────────┘`}
            </pre>
          </div>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <h3
              className="text-xl font-bold"
              style={{ color: theme.colors.primary }}
            >
              Principe de fonctionnement :
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                <strong>API REST centralisée</strong> développée en Symfony
                servant de point d&apos;entrée unique
              </li>
              <li>
                <strong>Applications mobiles indépendantes</strong> en React
                Native consommant l&apos;API
              </li>
              <li>
                <strong>Authentification JWT</strong> pour sécuriser les
                échanges entre mobile et backend
              </li>
              <li>
                <strong>Base de données partagée</strong> avec gestion des
                relations entre entités
              </li>
              <li>
                <strong>Endpoints RESTful</strong> respectant les standards HTTP
                (GET, POST, PUT, DELETE)
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Stack Technique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="rounded-xl p-8 mb-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Stack Technique
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Mobile */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.primary }}
              >
                Frontend Mobile
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "TypeScript",
                  "Expo",
                  "AsyncStorage",
                  "Axios",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: theme.colors.primary + "20",
                      color: theme.colors.primary,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend API */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.secondary }}
              >
                Backend API
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Symfony", "PHP", "API Platform", "Doctrine ORM", "JWT"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: theme.colors.secondary + "20",
                        color: theme.colors.secondary,
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Base de données */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.accent }}
              >
                Base de données
              </h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: theme.colors.accent + "20",
                      color: theme.colors.accent,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outils & Design */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.accent }}
              >
                Outils & Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Postman", "DBeaver", "Git", "Notion"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: theme.colors.accent + "20",
                        color: theme.colors.accent,
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
        {/* Défis relevés */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="rounded-xl p-8 mb-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Défis relevés
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: theme.colors.primary }}
              >
                Architecture backend :
              </h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  Conception d&apos;une <strong>API REST scalable</strong>{" "}
                  permettant de gérer plusieurs applications clientes
                  simultanément
                </li>
                <li>
                  Mise en place d&apos;un{" "}
                  <strong>système d&apos;authentification JWT</strong> sécurisé
                  avec gestion des tokens et refresh tokens
                </li>
                <li>
                  Gestion de la <strong>cohérence des données</strong> entre
                  plusieurs applications accédant à la même base
                </li>
                <li>
                  <strong>Communication inter-applications</strong> :
                  architecture permettant à une application principale de
                  communiquer avec deux autres applications distinctes via
                  l&apos;API centralisée
                </li>
              </ul>
            </div>

            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: theme.colors.primary }}
              >
                Développement mobile :
              </h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  Gestion de l&apos;<strong>état applicatif</strong> et
                  synchronisation avec le backend
                </li>
                <li>
                  Implémentation du <strong>stockage local</strong>{" "}
                  (AsyncStorage) pour la persistance des données hors ligne
                </li>
                <li>
                  Gestion des <strong>erreurs réseau</strong> et des timeouts
                  pour une expérience utilisateur fluide
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Apprentissages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="rounded-xl p-8 mb-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Apprentissages
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: theme.colors.primary }}
            >
              Ce que j&apos;ai appris :
            </h3>
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                Développer une application mobile complète avec{" "}
                <strong>React Native et Expo</strong>
              </li>
              <li>
                Concevoir et développer une{" "}
                <strong>API REST avec Symfony</strong> respectant les standards
              </li>
              <li>
                Gérer l&apos;<strong>authentification JWT</strong> côté backend
                et mobile
              </li>
              <li>
                Utiliser <strong>TypeScript</strong> pour un code plus robuste
                et maintenable
              </li>
              <li>
                Tester et documenter une API avec <strong>Postman</strong>
              </li>
              <li>
                Gérer le{" "}
                <strong>cycle de vie d&apos;une application mobile</strong>{" "}
                (état, navigation, stockage)
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Points d'amélioration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="rounded-xl p-8 mb-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: theme.colors.primary }}
          >
            Points d&apos;amélioration identifiés
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <ul className="space-y-2 ml-6 list-disc">
              <li>
                Mise en place de <strong>tests unitaires</strong> (PHPUnit côté
                API, Jest côté mobile)
              </li>

              <li>
                Optimisation de la <strong>gestion du cache</strong> et des
                performances réseau
              </li>
              <li>
                Amélioration de l&apos;<strong>expérience utilisateur</strong>{" "}
                avec feedback visuel plus riche
              </li>
              <li>
                Documentation technique plus complète avec{" "}
                <strong>Swagger/OpenAPI</strong>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Badge Code Privé */}
          <div
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg"
            style={{
              backgroundColor: "rgba(100, 100, 100, 0.1)",
              color: theme.colors.text,
              border: `2px solid ${theme.colors.secondary}`,
            }}
          >
            <FaLock size={20} />
            <span>Code source confidentiel</span>
          </div>

          {/* Bouton Retour */}
          <NavigationLink
            href="/#projets"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: `2px solid ${theme.colors.primary}`,
              color: theme.colors.primary,
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaArrowLeft />
            <span className="font-semibold">Retour aux projets</span>
          </NavigationLink>
        </motion.div>
      </div>
    </div>
  );
}
