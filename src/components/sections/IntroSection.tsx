import { Section } from "@/components/ui/Section";
import type { Introduction } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface IntroSectionProps {
  introduction: Introduction;
}

export function IntroSection({ introduction }: IntroSectionProps) {
  return (
    <Section id="introduction" title="Introduction">
      {/* Pull Quote */}
      <blockquote className="mb-2 flex items-start gap-3 py-4 md:gap-4">
        <span
          aria-hidden="true"
          className="shrink-0 font-serif text-6xl leading-none text-accent-primary select-none"
        >
          &ldquo;
        </span>
        <p className="font-serif text-lg leading-8 text-text italic md:text-xl md:leading-9">
          {introduction.quote}
          <span
            aria-hidden="true"
            className="ml-2 -translate-y-5 font-serif text-6xl text-accent-primary select-none md:-translate-y-6"
          >
            &rdquo;
          </span>
        </p>
      </blockquote>

      {/* Body Blocks with Subtitles */}
      <div className="flex flex-col gap-6">
        {introduction.blocks.map((block) => (
          <div key={block.subtitle ?? block.body.slice(0, 40)}>
            {block.subtitle && (
              <h3 className="mb-2 text-[15px] font-semibold text-text">
                {block.subtitle}
              </h3>
            )}
            <p className="text-[15px] leading-7 text-text-secondary">
              {parseRichText(block.body)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
