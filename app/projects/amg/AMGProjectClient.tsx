"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import SeasonalParticles from "@/components/theme/SeasonalParticles";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMG Location - Site de location d'engins",
  description:
    "Plateforme de location d'engins développée en autonomie avec Symfony, PHP, Twig et Docker. Premier projet fullstack complet avec back-office et système d'authentification.",
  openGraph: {
    title: "AMG Location | Laura Beaugrand",
    description:
      "Mon premier projet fullstack : plateforme de location d'engins avec Symfony, Docker et MariaDB.",
    images: ["/projects/amg-og.jpg"], // TODO: À créer plus tard
  },
};

export default function AMGProject() {
  const { theme, currentSeason } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: theme.colors.primary }}
        >
          AMG Location
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12"
          style={{ color: theme.colors.text }}
        >
          Plateforme de location d&apos;engins - Premier projet fullstack en
          autonomie
        </motion.p>

        {/* Vidéo du projet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto relative"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            border: `2px solid ${theme.colors.secondary}`,
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.12)`,
          }}
        >
          <video
            ref={videoRef}
            src="/videos/démonstration_AMG.mp4"
            controls
            playsInline
            className="w-full"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Overlay - affiché seulement si pas en lecture */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
              onClick={() => videoRef.current?.play()}
            >
              <div className="text-center text-white">
                <div className="text-6xl mb-2">▶️</div>
                <p className="text-lg font-semibold">
                  Cliquez pour voir la démo
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Description principale */}
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
            À propos du projet
          </h2>

          <div
            className="space-y-4 text-lg leading-relaxed"
            style={{ color: theme.colors.text }}
          >
            <p>
              <strong>AMG Location</strong> est une plateforme de location
              d&apos;engins née d&apos;un{" "}
              <strong style={{ color: theme.colors.primary }}>
                besoin client réel
              </strong>{" "}
              : présenter l&apos;entreprise, son catalogue et faciliter les
              prises de contact.
            </p>

            <p>
              Après plusieurs <strong>rendez-vous clients</strong>, j&apos;ai
              analysé les besoins (présentation entreprise, catalogue filtrable,
              système de devis/contact) et développé le projet{" "}
              <strong style={{ color: theme.colors.primary }}>
                en totale autonomie
              </strong>{" "}
              : design, architecture base de données (MCD/MLD), frontend,
              backend et back-office complet.
            </p>

            <div className="my-6">
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: theme.colors.primary }}
              >
                Fonctionnalités principales :
              </h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  <strong>Catalogue d&apos;engins</strong> avec filtres par
                  catégories, barre de recherche, PDF constructeurs et
                  formulaire de contact dédié par produit
                </li>
                <li>
                  <strong>Présentation entreprise</strong> (coordonnées,
                  horaires, identité visuelle) + section actualités/promotions
                  via système de blog administrable
                </li>
                <li>
                  <strong>Back-office complet</strong> : CRUD
                  produits/catégories/administrateurs (gestion des droits super
                  admin), gestion des articles de blog
                </li>
                <li>
                  <strong>Pages complètes</strong> : contact avec formulaire,
                  connexion sécurisée, CGV, politique de confidentialité, pages
                  d&apos;erreur customisées
                </li>
                <li>
                  <strong>Design responsive</strong> optimisé pour mobile et
                  tablette avec navigation adaptative
                </li>
              </ul>
            </div>

            <p
              className="font-semibold"
              style={{ color: theme.colors.primary }}
            >
              Mon premier projet fullstack complet (Symfony/Docker/MariaDB)
              démontrant ma capacité à résoudre des besoins business concrets en
              cycle de développement complet.
            </p>
            <p
              className="text-base italic"
              style={{ color: theme.colors.text }}
            >
              <strong>Projet réalisé en 2023-2024</strong> durant ma formation
              DWWM (Développeur Web et Web Mobile), dans le cadre de ma
              reconversion professionnelle vers le développement web.
            </p>
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
            {/* Backend */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.primary }}
              >
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Symfony", "PHP", "Twig", "Doctrine ORM"].map((tech) => (
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

            {/* Frontend */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.secondary }}
              >
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Twig", "CSS natif", "JavaScript", "Responsive Design"].map(
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
                {["MariaDB"].map((tech) => (
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

            {/* DevOps & Outils */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.accent }}
              >
                DevOps & Outils
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Docker Compose", "Git", "DBeaver"].map((tech) => (
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

            {/* Design & Gestion */}
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: theme.colors.accent }}
              >
                Design & Gestion
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Notion", "Méthode Agile", "Kanban"].map((tech) => (
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

        {/* Défis & Apprentissages */}
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
            Défis & Apprentissages
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
                Ce que j&apos;ai appris :
              </h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>
                  Structurer un projet Symfony de A à Z avec architecture MVC
                </li>
                <li>
                  Concevoir et gérer des relations complexes en base de données
                </li>
                <li>
                  Créer un système d&apos;authentification et de gestion des
                  droits
                </li>
                <li>
                  Développer une interface d&apos;administration complète (CRUD)
                </li>
                <li>Conteneuriser une application avec Docker</li>
                <li>Gérer un projet client avec méthode Agile et Kanban</li>
              </ul>
            </div>

            <div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: theme.colors.primary }}
              >
                Points d&apos;amélioration identifiés :
              </h3>
              <ul className="space-y-2 ml-6 list-disc">
                <li>Optimisation des performances (lazy loading, cache)</li>
                <li>
                  Amélioration globale de l&apos;expérience utilisateur
                  (navigation, formulaires, feedback visuel)
                </li>
                <li>Documentation technique plus détaillée</li>
                <li>Tests automatisés (PHPUnit)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Bouton GitHub */}
          <a
            href="https://github.com/Scheila59"
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
            <span>Voir mon profil GitHub</span>
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
