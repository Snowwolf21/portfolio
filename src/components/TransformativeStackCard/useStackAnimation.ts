import { useEffect, useRef, useState } from "react";

export function useStackAnimation() {
  const [isFlipped, setIsFlipped] = useState(false);
  const isAnimating = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);

const playAnimation = () => {
  if (isAnimating.current) return;

  isAnimating.current = true;

  setIsFlipped(true);

  // Keep the back visible
  setTimeout(() => {
    setIsFlipped(false);

    // Wait until the flip-back animation finishes
    setTimeout(() => {
      isAnimating.current = false;
    }, 3000);
  }, 3000);
};

  useEffect(() => {
    const showBack = setTimeout(() => {
      setIsFlipped(true);
    }, 3000);

    const showFront = setTimeout(() => {
      setIsFlipped(false);
    }, 7000);

    return () => {
      clearTimeout(showBack);
      clearTimeout(showFront);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playAnimation();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return {
    cardRef,
    isFlipped,
  };
}