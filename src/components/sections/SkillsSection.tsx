import { Section } from "@/components/ui/Section";
import { SkillTag } from "@/components/skills/SkillTag";
import type { SkillGroup } from "@/data/types";
import type { UiStrings } from "@/data/ui-strings";

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
  ui: UiStrings;
}

export function SkillsSection({ skillGroups, ui }: SkillsSectionProps) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-sm font-semibold text-accent-primary">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PDF 전용 — 웹 버전 안내 (Skills 페이지 하단에 표시) */}
      <div className="mt-8 hidden rounded-lg border-2 border-dashed border-accent-primary/40 bg-bg-secondary px-5 py-4 text-center text-sm text-text-secondary print:block">
        {ui.screenshotWebNotice}
        <br />
        <span className="font-medium text-accent-primary">
          https://resume-changhoon.vercel.app
        </span>
      </div>
    </Section>
  );
}
