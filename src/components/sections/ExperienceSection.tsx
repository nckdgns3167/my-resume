import { Section } from "@/components/ui/Section";
import type { Company } from "@/data/types";
import type { UiStrings } from "@/data/ui-strings";
import { CompanyCard } from "@/components/experience/CompanyCard";
import { ProjectCard } from "@/components/experience/ProjectCard";

interface ExperienceSectionProps {
  companies: Company[];
  ui: UiStrings;
}

export function ExperienceSection({ companies, ui }: ExperienceSectionProps) {
  return (
    <Section id="experience" title="Experience">
      <div className="relative pl-7">
        {/* 전체 회사를 잇는 타임라인 세로 선 */}
        <div className="absolute left-[7px] top-[10px] bottom-0 w-px bg-border" />
        <div className="flex flex-col gap-10">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company}>
              <div className="flex flex-col gap-6">
                {company.projects.map((project) => (
                  <ProjectCard key={project.name} project={project} ui={ui} />
                ))}
              </div>
            </CompanyCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
