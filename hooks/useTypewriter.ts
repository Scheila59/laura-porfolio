import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const typeNextChar = () => {
      if (currentIndex < text.length) {
        currentIndex++;
        setDisplayText(text.slice(0, currentIndex));
        timeoutId = setTimeout(typeNextChar, speed);
      } else {
        setIsTyping(false);
      }
    };

    // Démarrer l'animation
    timeoutId = setTimeout(typeNextChar, delay);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  const isComplete = !isTyping && displayText.length === text.length;

  return { displayText, isComplete };
}
