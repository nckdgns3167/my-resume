"use client";

import { useStickyHeader } from "@/hooks/useStickyHeader";
import { profile } from "@/data/profile";

export function StickyHeader() {
  const visible = useStickyHeader();

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[860px] items-center justify-between px-5 py-3 sm:px-8">
        <span className="text-sm font-semibold text-text">
          {profile.name}
        </span>
        <span className="text-xs text-text-secondary">{profile.title}</span>
      </div>
    </div>
  );
}
