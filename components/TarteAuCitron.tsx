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
    };
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
