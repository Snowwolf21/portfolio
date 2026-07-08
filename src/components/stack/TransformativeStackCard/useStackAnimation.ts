"use client";

import { useEffect, useState, useRef } from "react";

export function useStackAnimation() {
  const [isAnimated, setIsAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when the section is 40% visible in the viewport
        if (entry.isIntersecting) {
          setIsAnimated(true);
        } else {
          // Optional: Reset it when scrolling away so it flips again next time
          setIsAnimated(false); 
        }
      },
      { 
        threshold: 0.4 // Adjust this to control how far down they must scroll to flip
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isAnimated };
}