"use client";

import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useUiStrings } from "@/context/LocaleContext";

const STORAGE_KEY = "coachmark-dismissed";

export function CoachMark() {
  const hasTriggered = useRef(false);
  const ui = useUiStrings();

  useEffect(() => {
    if (hasTriggered.current) return;
    if (localStorage.getItem(STORAGE_KEY) === "true") return;

    const el = document.querySelector(".project-gallery");
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          observer.disconnect();

          setTimeout(() => {
            const driverObj = driver({
              popoverClass: "coachmark-popover",
              showProgress: true,
              steps: [
                {
                  element: ".project-gallery summary",
                  popover: {
                    title: ui.coachGalleryTitle,
                    description: ui.coachGalleryDesc,
                    side: "top",
                    align: "start",
                  },
                },
                {
                  element: ".project-gallery",
                  popover: {
                    title: ui.coachImageTitle,
                    description: ui.coachImageDesc,
                    side: "top",
                    align: "start",
                  },
                },
              ],
              onDestroyed: () => {
                localStorage.setItem(STORAGE_KEY, "true");
              },
            });

            driverObj.drive();
          }, 500);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ui]);

  return null;
}
