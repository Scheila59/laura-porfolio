import type { Metadata } from "next";
import AppMobileClient from "./AppMobileClient";

export const metadata: Metadata = {
  title: "Application Mobile  - Architecture Multi-Apps",
  description:
    "Application mobile React Native avec API Symfony centralisée. Architecture scalable permettant la communication entre plusieurs applications via JWT.",
  openGraph: {
    title: "Application Mobile  | Laura Beaugrand",
    description:
      "Architecture multi-applications avec API REST centralisée. React Native, TypeScript, Symfony.",
    images: ["/projects/app-mobile-og.jpg"],
  },
};

export default function AppMobilePage() {
  return <AppMobileClient />;
}
