"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof CSS === "undefined") {
      return;
    }

    // Use native scroll-driven animations if supported.
    if (
      CSS.supports(
        "(animation-timeline: view()) and (animation-range: entry)"
      )
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const observeTargets = () => {
      document.querySelectorAll(".scroll-reveal").forEach((el) => {
        if (!el.classList.contains("in-view")) {
          observer.observe(el);
        }
      });
    };

    // Observe existing elements.
    observeTargets();

    // Observe newly added elements.
    const mutationObserver = new MutationObserver(observeTargets);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}