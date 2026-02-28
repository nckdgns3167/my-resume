import type { HighlightBox as HighlightBoxType } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface HighlightBoxProps {
  box: HighlightBoxType;
}

export function HighlightBox({ box }: HighlightBoxProps) {
  return (
    <div className="rounded-lg border border-accent-primary/30 bg-accent-primary/5 p-4">
      <h5 className="mb-2 text-sm font-semibold text-accent-primary">{box.title}</h5>
      <p className="text-sm leading-6 text-text-secondary">{parseRichText(box.content)}</p>
    </div>
  );
}
