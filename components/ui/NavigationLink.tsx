"use client";

import { useRouter } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export default function NavigationLink({
  href,
  children,
  className,
  style,
  onClick,
}: NavigationLinkProps) {
  const router = useRouter();

  const ease = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const scrollToElement = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();

    // Séparer l'URL et l'ancre
    const [path, hash] = href.split("#");
    const targetId = hash || "";

    // Si changement de page (path existe et est différent de la page actuelle)
    if (path && path !== window.location.pathname) {
      router.push(href);
      // Attendre que la navigation soit terminée puis scroller
      setTimeout(() => {
        if (targetId) {
          scrollToElement(targetId);
        }
      }, 100);
      return;
    }

    // Scroll sur la même page
    if (targetId === "") {
      // Retour en haut
      const startPosition = window.pageYOffset;
      const distance = -startPosition;
      const duration = 1000;
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    } else {
      scrollToElement(targetId);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
