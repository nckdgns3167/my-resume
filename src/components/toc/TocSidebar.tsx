"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "skills", label: "Skills" },
  { id: "side-projects", label: "Side Projects" },
  { id: "experience", label: "Experience" },
  { id: "strengths", label: "Strengths" },
];

const sectionIds = sections.map((s) => s.id);

export function TocSidebar() {
  const activeId = useScrollSpy(sectionIds);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  if (!isDesktop) return null;

  return (
    <nav
      className="fixed left-[calc(50%+480px)] top-1/2 z-40 -translate-y-1/2"
      aria-label="목차"
    >
      <ul className="flex flex-col gap-2">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block text-xs transition-colors ${
                activeId === section.id
                  ? "font-semibold text-accent-primary"
                  : "text-text-secondary hover:text-text"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
