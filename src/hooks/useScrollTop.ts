"use client";

import { useState, useEffect, useCallback } from "react";

export function useScrollTop(threshold = 400) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { showButton, scrollToTop };
}
