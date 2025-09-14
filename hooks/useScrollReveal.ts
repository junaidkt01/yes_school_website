"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal(key: string, threshold: number = 0.3) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(
    sessionStorage.getItem(key) === "true"
  );

  useEffect(() => {
    // If already revealed in this session → skip observer
    if (isVisible) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          sessionStorage.setItem(key, "true");
          observer.unobserve(element); // run once
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, key, threshold]);

  return { elementRef, isVisible };
}
