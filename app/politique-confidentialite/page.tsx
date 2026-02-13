"use client";

import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";

export default function PolitiqueConfidentialite() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen py-20 px-4 transition-colors duration-500"
      style={{ background: theme.gradient }}
    >
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 hover:opacity-80 transition-opacity"
          style={{ color: theme.colors.primary }}
        >
          ← Retour à l&apos;accueil
        </Link>

        <h1
          className="text-4xl font-bold mb-8"
          style={{ color: theme.colors.primary }}
        >
          Politique de Confidentialité
        </h1>

        <div
          className="prose prose-lg max-w-none space-y-6"
          style={{ color: theme.colors.text }}
        >
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              1. Responsable du traitement
            </h2>
            <p>
              Le site laura-beaugrand.vercel.app est édité par Laura Beaugrand.
            </p>
            <p>
              <strong>Contact :</strong>{" "}
              <a
                href="mailto:l.beaugrand@hotmail.com"
                style={{ color: theme.colors.primary }}
              >
                l.beaugrand@hotmail.com
              </a>
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              2. Données collectées
            </h2>
            <p>
              Ce site utilise Google Tag Manager pour analyser le trafic et
              améliorer l&apos;expérience utilisateur. Les données collectées
              sont :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Adresse IP (anonymisée)</li>
              <li>Type de navigateur et version</li>
              <li>Système d&apos;exploitation</li>
              <li>Pages visitées et temps passé sur le site</li>
              <li>Source de référence (site d&apos;origine)</li>
              <li>Résolution d&apos;écran et langue du navigateur</li>
            </ul>
            <p className="mt-4">
              <strong>Aucune donnée personnelle identifiable</strong> (nom,
              email, adresse) n&apos;est collectée sans votre consentement
              explicite.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              3. Finalité du traitement
            </h2>
            <p>Les données sont collectées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyser le trafic du site</li>
              <li>Comprendre le comportement des visiteurs</li>
              <li>Améliorer le contenu et l&apos;expérience utilisateur</li>
              <li>Mesurer l&apos;efficacité du portfolio</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              4. Base légale
            </h2>
            <p>
              Le traitement des données repose sur votre{" "}
              <strong>consentement explicite</strong>, conformément à
              l&apos;article 6.1.a du RGPD. Vous pouvez retirer ce consentement
              à tout moment via le gestionnaire de cookies.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              5. Destinataires des données
            </h2>
            <p>Les données collectées sont transmises à :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google LLC</strong> (Google Tag Manager / Google
                Analytics) - Hébergement aux États-Unis avec clauses
                contractuelles types (CCT)
              </li>
            </ul>
            <p className="mt-4">
              Aucune donnée n&apos;est vendue ou partagée avec des tiers à des
              fins commerciales.
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              6. Durée de conservation
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cookies de consentement :</strong> 12 mois
              </li>
              <li>
                <strong>Données Google Analytics :</strong> 26 mois
                (conformément à la recommandation CNIL)
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              7. Vos droits
            </h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Droit d&apos;accès :</strong> Obtenir une copie de vos
                données
              </li>
              <li>
                <strong>Droit de rectification :</strong> Corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit à l&apos;effacement :</strong> Supprimer vos
                données
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> Vous opposer au
                traitement
              </li>
              <li>
                <strong>Droit à la limitation :</strong> Limiter le traitement
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> Récupérer vos données
              </li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-moi à :{" "}
              <a
                href="mailto:l.beaugrand@hotmail.com"
                style={{ color: theme.colors.primary }}
              >
                l.beaugrand@hotmail.com
              </a>
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              8. Cookies
            </h2>
            <p>
              Ce site utilise le gestionnaire de consentement{" "}
              <strong>Tarteaucitron.js</strong> pour gérer les cookies de
              manière conforme au RGPD.
            </p>
            <p className="mt-4">
              Vous pouvez à tout moment modifier vos préférences en cliquant sur
              l&apos;icône en bas à droite de la page ou en accédant à{" "}
              <a
                href="#tarteaucitron"
                style={{ color: theme.colors.primary }}
                className="underline"
              >
                ce lien
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              9. Réclamation
            </h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez
              introduire une réclamation auprès de la CNIL (Commission Nationale
              de l&apos;Informatique et des Libertés) :
            </p>
            <p className="mt-2">
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.colors.primary }}
                className="underline"
              >
                www.cnil.fr
              </a>
            </p>
          </section>

          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: theme.colors.secondary }}
            >
              10. Modification de la politique
            </h2>
            <p>
              Cette politique de confidentialité peut être mise à jour pour
              refléter les évolutions légales ou techniques. La dernière version
              sera toujours disponible sur cette page.
            </p>
            <p className="mt-4">
              <strong>Dernière mise à jour :</strong>{" "}
              {new Date().toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: theme.colors.primary,
              color: "#fff",
            }}
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
