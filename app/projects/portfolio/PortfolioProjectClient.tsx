"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import SeasonalParticles from "@/components/theme/SeasonalParticles";
import { FaArrowLeft, FaGithub, FaPalette } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

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

export default function PortfolioProjectPage() {
  const { theme, currentSeason } = useTheme();
  const router = useRouter();

  return (
    <div
      className="min-h-screen py-20 px-4 transition-colors duration-500"
      style={{ background: theme.gradient }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: 1, zIndex: 0 }}
      >
        <SeasonalParticles season={currentSeason} count={30} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Bouton retour */}
        <Link href="/#projets">
          <motion.button
            onClick={() => {
              router.push("/#projets");
              setTimeout(() => {
                document
                  .getElementById("projets")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              border: `2px solid ${theme.colors.primary}`,
              color: theme.colors.primary,
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaArrowLeft />
            <span className="font-semibold">Retour aux projets</span>
          </motion.button>
        </Link>

        {/* Titre  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <FaPalette size={40} style={{ color: theme.colors.primary }} />
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: theme.colors.primary }}
          >
            Portfolio Personnel
          </h1>
        </motion.div>

        {/* Introduction  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
            Vous y êtes déjà !
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <p>
              Ce portfolio <strong>que vous consultez actuellement</strong> est
              lui-même un projet à part entière. Plutôt que de créer un site
              vitrine classique, j&apos;ai voulu concevoir une{" "}
              <strong style={{ color: theme.colors.primary }}>
                expérience interactive et saisonnière
              </strong>{" "}
              qui reflète ma passion pour les couleurs, les animations et un
              design soigné, pensé dans les moindres détails.
            </p>

            <p>
              Chaque détail a été pensé pour créer une expérience unique : les{" "}
              <strong>particules animées</strong> qui changent selon la saison,
              les <strong>dégradés de couleurs</strong> harmonieux, les{" "}
              <strong>animations fluides</strong> au scroll... Tout est là pour
              démontrer mes compétences tout en offrant une navigation agréable.
            </p>

            <p
              className="text-base italic"
              style={{ color: theme.colors.text }}
            >
              <strong>Projet réalisé en décembre 2025</strong>, ce portfolio
              représente l&apos;aboutissement de ma formation et ma vision du
              développement web moderne.
            </p>
          </div>
        </motion.div>
        {/* Fonctionnalités clés */}
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
            Fonctionnalités clés
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Système de thèmes saisonniers
                </strong>{" "}
                : 4 palettes complètes (Printemps, Été, Automne, Hiver) avec
                couleurs, dégradés et textures uniques
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Particules animées en SVG
                </strong>{" "}
                : Pétales, bulles, feuilles et flocons générés dynamiquement
                avec physique réaliste
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Animations Framer Motion
                </strong>{" "}
                : Transitions fluides, animations au scroll avec
                IntersectionObserver
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Design responsive
                </strong>{" "}
                : Optimisé pour mobile, tablette et desktop avec navigation
                adaptative
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Navigation fluide
                </strong>{" "}
                : Scroll automatique vers les sections, retour intelligent aux
                projets
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Persistance du thème
                </strong>{" "}
                : Le thème choisi est sauvegardé dans le localStorage
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Stack Technique */}
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
            Stack Technique
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend Framework */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.primary }}
              >
                Framework & Core
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js 14", "React", "TypeScript", "App Router"].map(
                  (tech) => (
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
                  )
                )}
              </div>
            </div>

            {/* Styling & Animations */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.secondary }}
              >
                Styling & Animations
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Tailwind CSS", "Framer Motion", "CSS Custom", "SVG"].map(
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

            {/* State & Architecture */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.accent }}
              >
                State & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React Context", "LocalStorage", "Custom Hooks"].map(
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

            {/* Outils */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.accent }}
              >
                Outils & Design
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Git", "Notion", "Vercel"].map((tech) => (
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
          </div>
        </motion.div>
        {/* Défis techniques */}
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
            Défis techniques relevés
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Hydratation client/serveur
                </strong>{" "}
                : Gestion correcte du Context API avec Next.js pour éviter les
                différences entre rendu serveur et client, notamment pour le
                thème
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Particules SVG performantes
                </strong>{" "}
                : Création de systèmes de particules avec physique réaliste
                (gravité, vent) sans impacter significativement les performances
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Animations optimisées
                </strong>{" "}
                : Utilisation de IntersectionObserver pour déclencher les
                animations uniquement quand les éléments sont visibles
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Gestion d&apos;état complexe
                </strong>{" "}
                : Synchronisation du thème entre multiple composants via Context
                API et localStorage
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Textures dynamiques
                </strong>{" "}
                : Création de textures mixtes (SVG inline + images optimisées)
              </li>
              <li>
                <strong style={{ color: theme.colors.primary }}>
                  Navigation fluide
                </strong>{" "}
                : Scroll programmatique vers les sections avec gestion des
                ancres et du routage Next.js
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Apprentissages */}
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
            Ce que j&apos;ai appris
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                Maîtriser <strong>Next.js 14 avec App Router</strong> et
                comprendre les différences avec Pages Router
              </li>
              <li>
                Approfondir <strong>TypeScript</strong> avec types avancés,
                génériques et interfaces complexes
              </li>
              <li>
                Utiliser <strong>Framer Motion</strong> pour créer des
                animations fluides et performantes
              </li>
              <li>
                Concevoir une <strong>architecture de thèmes scalable</strong>{" "}
                avec React Context
              </li>
              <li>
                Créer des <strong>animations SVG complexes</strong> avec
                physique et randomisation
              </li>
              <li>
                Optimiser les <strong>performances frontend</strong> (lazy
                loading, IntersectionObserver, etc.)
              </li>
              <li>
                Gérer l&apos;<strong>hydratation SSR/CSR</strong> dans Next.js
                pour éviter les bugs visuels
              </li>
              <li>
                Concevoir une <strong>expérience utilisateur cohérente</strong>{" "}
                sur tous les supports
              </li>
            </ul>
          </div>
        </motion.div>
        {/* Évolutions futures */}
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
            Évolutions futures
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                Ajout d&apos;une <strong>section blog</strong> pour partager mes
                apprentissages et projets
              </li>

              <li>
                <strong>Internationalisation (i18n)</strong> pour proposer le
                portfolio en français et anglais
              </li>
              <li>
                <strong>Formulaire de contact</strong> fonctionnel avec backend
                (Resend ou EmailJS)
              </li>

              <li>
                Création d&apos;une <strong>galerie de mini-projets</strong>{" "}
                avec filtres par technologie
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Bouton GitHub */}
          <a
            href="https://github.com/Scheila59/laura-porfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
              boxShadow: `0 8px 24px ${theme.colors.primary}40`,
            }}
          >
            <FaGithub size={24} />
            <span>Voir le code source</span>
          </a>

          {/* Bouton Retour */}
          <Link href="/#projets">
            <button
              onClick={() => {
                router.push("/#projets");
                setTimeout(() => {
                  document
                    .getElementById("projets")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                border: `2px solid ${theme.colors.primary}`,
                color: theme.colors.primary,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <FaArrowLeft />
              <span>Retour aux projets</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
