import { Section } from "@/components/ui/Section";
import { introduction } from "@/data/introduction";
import { parseRichText } from "@/lib/rich-text";

export function IntroSection() {
  return (
    <Section id="introduction" title="Introduction">
      <div className="flex flex-col gap-4">
        {introduction.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-[15px] leading-7 text-text-secondary"
          >
            {parseRichText(paragraph)}
          </p>
        ))}
      </div>
    </Section>
  );
}
