"use client";

import { useEffect, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const STORAGE_KEY = "coachmark-dismissed";

export function CoachMark() {
  const hasTriggered = useRef(false);

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
                    title: "갤러리 열기",
                    description:
                      "클릭하면 프로젝트 스크린샷을 볼 수 있어요.",
                    side: "top",
                    align: "start",
                  },
                },
                {
                  element: ".project-gallery",
                  popover: {
                    title: "이미지 클릭",
                    description:
                      "이미지를 클릭하면 라이트박스로 크게 볼 수 있어요.",
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
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return null;
}
