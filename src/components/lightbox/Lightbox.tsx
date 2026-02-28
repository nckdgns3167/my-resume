"use client";

import LightboxLib from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useLightbox } from "@/context/LightboxContext";

export function Lightbox() {
  const { slides, index, isOpen, close, setIndex } = useLightbox();

  if (!isOpen) return null;

  return (
    <LightboxLib
      open={isOpen}
      close={close}
      index={index}
      on={{ view: ({ index: i }) => setIndex(i) }}
      slides={slides}
      plugins={[Zoom, Counter, Captions, Thumbnails]}
      carousel={{ finite: slides.length <= 5 }}
      zoom={{ maxZoomPixelRatio: 3 }}
      counter={{ container: { style: { top: 0, bottom: "unset" } } }}
      captions={{ descriptionTextAlign: "center" }}
      thumbnails={{ border: 0, borderRadius: 8, gap: 8 }}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
      }}
    />
  );
}
