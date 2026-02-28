import { Section } from "@/components/ui/Section";
import type { Introduction } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface IntroSectionProps {
  introduction: Introduction;
}

export function IntroSection({ introduction }: IntroSectionProps) {
  return (
    <Section id="introduction" title="Introduction">
      <div className="flex flex-col gap-4">
        {introduction.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-[15px] leading-7 text-text-secondary">
            {parseRichText(paragraph)}
          </p>
        ))}
      </div>
    </Section>
  );
}
