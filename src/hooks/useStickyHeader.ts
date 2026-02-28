"use client";

import { useState, useEffect, useRef } from "react";

export function useStickyHeader(threshold = 300) {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastScrollY.current;

      if (currentY > threshold && isScrollingUp) {
        setVisible(true);
      } else if (currentY <= threshold || !isScrollingUp) {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return visible;
}
