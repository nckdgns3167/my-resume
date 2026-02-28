"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface LightboxSlide {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
}

interface LightboxContextValue {
  slides: LightboxSlide[];
  index: number;
  isOpen: boolean;
  open: (slides: LightboxSlide[], index: number) => void;
  close: () => void;
  setIndex: (index: number) => void;
}

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [slides, setSlides] = useState<LightboxSlide[]>([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((newSlides: LightboxSlide[], startIndex: number) => {
    setSlides(newSlides);
    setIndex(startIndex);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <LightboxContext.Provider value={{ slides, index, isOpen, open, close, setIndex }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return context;
}
