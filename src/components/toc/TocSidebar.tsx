"use client";

import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { tocSections, allTocIds, childToParentMap } from "@/data/toc";

export function TocSidebar() {
  const activeId = useScrollSpy(allTocIds);
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  if (!isDesktop) return null;

  const activeParent = childToParentMap.get(activeId) ?? activeId;

  return (
    <nav className="fixed left-[calc(50%+480px)] top-1/2 z-40 -translate-y-1/2" aria-label="목차">
      <ul className="flex flex-col gap-1.5">
        {tocSections.map((section) => {
          const isSectionActive = activeParent === section.id;
          const isExactActive = activeId === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block text-xs transition-colors ${
                  isExactActive
                    ? "font-semibold text-accent-primary"
                    : isSectionActive
                      ? "font-medium text-text"
                      : "text-text-secondary hover:text-text"
                }`}
              >
                {section.label}
              </a>

              {/* 하위 프로젝트 목록 */}
              {section.children && (
                <ul className="mt-1 flex flex-col gap-1 border-l border-border pl-2.5">
                  {section.children.map((child) => (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className={`block text-[11px] transition-colors ${
                          activeId === child.id
                            ? "font-semibold text-accent-primary"
                            : "text-text-secondary hover:text-text"
                        }`}
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
