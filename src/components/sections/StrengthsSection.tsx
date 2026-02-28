import { Section } from "@/components/ui/Section";
import { strengths } from "@/data/strengths";

export function StrengthsSection() {
  return (
    <Section id="strengths" title="Strengths">
      <div className="grid gap-4 sm:grid-cols-2">
        {strengths.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-surface p-5">
            <h3 className="mb-2 text-base font-semibold text-text">{s.title}</h3>
            <p className="text-sm leading-6 text-text-secondary">{s.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
