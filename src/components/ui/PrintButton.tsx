"use client";

import { useUiStrings } from "@/context/LocaleContext";

export function PrintButton() {
  const ui = useUiStrings();

  return (
    <button
      onClick={() => window.print()}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/70 text-white shadow-md transition-colors hover:bg-accent-primary print:hidden"
      aria-label={ui.saveAsPdf}
      title={ui.saveAsPdf}
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
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
      </svg>
    </button>
  );
}
