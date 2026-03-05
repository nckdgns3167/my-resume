import { Section } from "@/components/ui/Section";
import type { Strength } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface StrengthsSectionProps {
  strengths: Strength[];
}

export function StrengthsSection({ strengths }: StrengthsSectionProps) {
  return (
    <Section id="strengths" title="Strengths">
      <div className="space-y-6">
        {strengths.map((s, i) => (
          <div
            key={s.title}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <div className="mb-3 flex items-baseline gap-3">
              <span className="text-2xl font-bold text-accent-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold text-text">{s.title}</h3>
            </div>
            <div className="space-y-3 text-sm leading-6 text-text-secondary">
              {s.description.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{parseRichText(paragraph)}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
