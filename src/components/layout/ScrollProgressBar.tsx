"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[100] h-0.5 w-full">
      <div
        className="h-full bg-accent-primary transition-[width] duration-75"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
