"use client";

import { useSnackbar } from "@/context/SnackbarContext";

export function Snackbar() {
  const { message, visible } = useSnackbar();

  return (
    <div
      className={`fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 rounded-lg bg-text px-4 py-2.5 text-sm text-bg shadow-lg transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
