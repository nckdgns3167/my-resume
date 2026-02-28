"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { useLightbox } from "@/context/LightboxContext";
import { useUiStrings } from "@/context/LocaleContext";
import type { GalleryGrid, GalleryItem } from "@/data/types";
import { isGalleryImageGroup } from "@/data/types";

interface ProjectGalleryProps {
  grids: GalleryGrid[];
  projectName: string;
}

interface FlatSlide {
  src: string;
  alt: string;
  title: string;
  description: string;
}

function flattenToSlides(grids: GalleryGrid[]): FlatSlide[] {
  const slides: FlatSlide[] = [];
  for (const grid of grids) {
    for (const item of grid.items) {
      if (isGalleryImageGroup(item)) {
        for (const img of item.images) {
          slides.push({
            src: img.src,
            alt: img.alt,
            title: item.caption,
            description: item.subCaption ?? "",
          });
        }
      } else {
        slides.push({
          src: item.src,
          alt: item.alt,
          title: item.caption,
          description: item.subCaption ?? "",
        });
      }
    }
  }
  return slides;
}

export function ProjectGallery({ grids, projectName }: ProjectGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useLightbox();
  const summaryRef = useRef<HTMLElement>(null);
  const ui = useUiStrings();

  const allSlides = useMemo(() => flattenToSlides(grids), [grids]);

  const closeAndScroll = useCallback(() => {
    setIsOpen(false);
    summaryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  if (grids.length === 0) return null;

  const handleImageClick = (src: string) => {
    const idx = allSlides.findIndex((s) => s.src === src);
    open(allSlides, idx >= 0 ? idx : 0);
  };

  return (
    <div className="project-gallery print:hidden">
      <details open={isOpen} onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}>
        <summary
          ref={summaryRef}
          className="cursor-pointer select-none text-sm font-medium text-accent-secondary transition-colors hover:text-accent-secondary/80"
        >
          {isOpen ? ui.closeGallery : ui.viewGallery(allSlides.length)}
        </summary>

        <div className="relative mt-4">
          {/* 갤러리 오른쪽 sticky X 닫기 FAB */}
          <div className="pointer-events-none sticky top-[50vh] z-40 h-0">
            <button
              onClick={closeAndScroll}
              className="pointer-events-auto absolute -right-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-accent-primary/70 text-white shadow-lg transition-colors hover:bg-accent-primary xl:-right-18"
              aria-label={ui.closeGallery}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {grids.map((grid, gridIdx) => (
              <div key={gridIdx} className={getGridClassName(grid.layout)}>
                {grid.items.map((item, itemIdx) => (
                  <GalleryItemCard
                    key={itemIdx}
                    item={item}
                    layout={grid.layout}
                    projectName={projectName}
                    onImageClick={handleImageClick}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}

function getGridClassName(layout: GalleryGrid["layout"]): string {
  switch (layout) {
    case "portrait":
      return "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4";
    case "group":
      return "grid gap-4 sm:grid-cols-2";
    default:
      return "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";
  }
}

interface GalleryItemCardProps {
  item: GalleryItem;
  layout: GalleryGrid["layout"];
  projectName: string;
  onImageClick: (src: string) => void;
}

function GalleryItemCard({ item, layout, onImageClick }: GalleryItemCardProps) {
  if (isGalleryImageGroup(item)) {
    return (
      <div className="min-w-0 overflow-hidden rounded-lg border border-border bg-bg-secondary p-3">
        <div className="mb-2 grid grid-cols-2 gap-2">
          {item.images.map((img, i) => (
            <button
              key={i}
              onClick={() => onImageClick(img.src)}
              className="relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 40vw, 20vw"
              />
            </button>
          ))}
        </div>
        <p className="break-words text-xs font-medium text-text">{item.caption}</p>
        {item.subCaption && <p className="mt-0.5 break-words text-xs text-text-secondary">{item.subCaption}</p>}
      </div>
    );
  }

  const isPortrait = layout === "portrait";

  return (
    <div className="group min-w-0 overflow-hidden rounded-lg border border-border bg-bg-secondary p-2">
      <button
        onClick={() => onImageClick(item.src)}
        className={`relative w-full cursor-zoom-in overflow-hidden rounded ${
          isPortrait ? "aspect-[3/4]" : "aspect-video"
        }`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          sizes={
            isPortrait
              ? "(max-width: 640px) 45vw, (max-width: 768px) 30vw, 22vw"
              : "(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 30vw"
          }
        />
      </button>
      <p className="mt-2 break-words text-xs font-medium text-text">{item.caption}</p>
      {item.subCaption && <p className="mt-0.5 break-words text-xs text-text-secondary">{item.subCaption}</p>}
    </div>
  );
}
