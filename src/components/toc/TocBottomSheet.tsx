"use client";

import { useState } from "react";
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

export function TocBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  if (isDesktop) return null;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[90] bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 z-[91] w-full rounded-t-2xl border-t border-border bg-surface px-6 pb-8 pt-4 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-border" />
        <nav aria-label="목차">
          <ul className="flex flex-col gap-3">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                    activeId === section.id
                      ? "bg-accent-primary/10 font-semibold text-accent-primary"
                      : "text-text-secondary hover:bg-bg-secondary hover:text-text"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* TOC FAB Button — rendered via FabStack */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-[4.5rem] right-6 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-bg-secondary text-text-secondary shadow-md transition-colors hover:text-text"
          aria-label="목차 열기"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </button>
      )}
    </>
  );
}
