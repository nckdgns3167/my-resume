"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed bottom-0 left-0 z-[100] h-0.5 w-full print:hidden">
      <div
        className="h-full bg-accent-primary transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
