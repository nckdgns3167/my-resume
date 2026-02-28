"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLocale, useUiStrings } from "@/context/LocaleContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { PrintButton } from "@/components/ui/PrintButton";

export function FabStack() {
  const { showButton, scrollToTop } = useScrollTop();
  const isDesktop = useMediaQuery("(min-width: 1100px)");
  const { locale, toggleLocale } = useLocale();
  const ui = useUiStrings();

  if (!isDesktop) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 print:hidden">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/70 text-white shadow-md transition-colors hover:bg-accent-primary"
          aria-label={ui.scrollToTop}
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
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
      <button
        onClick={toggleLocale}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/70 text-xs font-bold text-white shadow-md transition-colors hover:bg-accent-primary"
        aria-label={locale === "ko" ? ui.switchToEn : ui.switchToKo}
        title={locale === "ko" ? ui.switchToEn : ui.switchToKo}
      >
        {locale === "ko" ? "EN" : "KO"}
      </button>
      <PrintButton />
      <ThemeToggle />
    </div>
  );
}
