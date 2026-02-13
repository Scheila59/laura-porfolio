"use client";

import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

interface TarteAuCitronConfig {
  privacyUrl: string;
  hashtag: string;
  cookieName: string;
  orientation: string;
  groupServices: boolean;
  showAlertSmall: boolean;
  cookieslist: boolean;
  closePopup: boolean;
  showIcon: boolean;
  iconPosition: string;
  highPrivacy: boolean;
  handleBrowserDNTRequest: boolean;
  removeCredit: boolean;
  moreInfoLink: boolean;
  DenyAllCta: boolean;
  AcceptAllCta: boolean;
  adblocker: boolean;
  useExternalCss: boolean;
  useExternalJs: boolean;
  readmoreLink: string;
}

declare global {
  interface Window {
    tarteaucitron: {
      init: (config: TarteAuCitronConfig) => void;
      user: Record<string, string>;
      job: string[];
      state: Record<string, boolean | string>;
    };
    dataLayer: Array<Record<string, unknown>>;
  }
}

export default function TarteAuCitron() {
  const { theme } = useTheme();

  useEffect(() => {
    // Définir les variables CSS pour le thème tarteaucitron
    document.documentElement.style.setProperty("--tac-primary", theme.colors.primary);
    document.documentElement.style.setProperty(
      "--tac-primary-shadow",
      `${theme.colors.primary}66`
    );
  }, [theme]);

  useEffect(() => {
    // Charger le script tarteaucitron depuis le dossier public
    const script = document.createElement("script");
    script.src = "/tarteaucitron/tarteaucitron.min.js";
    script.async = true;

    script.onload = () => {
      // Initialiser tarteaucitron une fois le script chargé
      if (window.tarteaucitron && window.tarteaucitron.init) {
        window.tarteaucitron.init({
          privacyUrl: "/politique-confidentialite",
          hashtag: "#tarteaucitron",
          cookieName: "tarteaucitron",
          orientation: "bottom",
          groupServices: false,
          showAlertSmall: false,
          cookieslist: false,
          closePopup: false,
          showIcon: true,
          iconPosition: "BottomRight",
          highPrivacy: true,
          handleBrowserDNTRequest: false,
          removeCredit: false,
          moreInfoLink: true,
          DenyAllCta: true,
          AcceptAllCta: true,
          adblocker: false,
          useExternalCss: false,
          useExternalJs: false,
          readmoreLink: "",
        });

        window.tarteaucitron.user.googletagmanagerId = "GTM-WWZ4Q52H";
        (window.tarteaucitron.job = window.tarteaucitron.job || []).push(
          "googletagmanager"
        );

        // Surveiller les changements d'état de tarteaucitron
        let lastGtmState: boolean | null = null;

        const updateGoogleConsent = () => {
          if (!window.tarteaucitron?.state) return;

          window.dataLayer = window.dataLayer || [];
          const gtmAccepted = window.tarteaucitron.state.googletagmanager === true;

          // Ne mettre à jour que si l'état a changé
          if (gtmAccepted === lastGtmState) return;
          lastGtmState = gtmAccepted;

          // Méthode pour Consent Mode v2
          function gtag(...args: unknown[]) {
            window.dataLayer.push(args);
          }
          gtag("consent", "update", {
            analytics_storage: gtmAccepted ? "granted" : "denied",
            ad_storage: gtmAccepted ? "granted" : "denied",
            ad_user_data: gtmAccepted ? "granted" : "denied",
            ad_personalization: gtmAccepted ? "granted" : "denied",
          });

          console.log(
            `🍪 Consentement Google mis à jour: ${gtmAccepted ? "✅ Accepté" : "❌ Refusé"}`
          );
        };

        // Vérifier régulièrement l'état (toutes les 500ms)
        const consentChecker = setInterval(updateGoogleConsent, 500);

        // Nettoyer après 30 secondes (l'utilisateur aura fait son choix)
        setTimeout(() => clearInterval(consentChecker), 30000);
      }
    };

    script.onerror = () => {
      console.error("Erreur lors du chargement de tarteaucitron.js");
    };

    document.head.appendChild(script);

    return () => {
      // Nettoyage
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
}
