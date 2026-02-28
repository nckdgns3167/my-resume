import { Section } from "@/components/ui/Section";
import { companies } from "@/data/experience";
import { CompanyCard } from "@/components/experience/CompanyCard";
import { ProjectCard } from "@/components/experience/ProjectCard";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-10">
        {companies.map((company) => (
          <CompanyCard key={company.name} company={company}>
            <div className="flex flex-col gap-6">
              {company.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </CompanyCard>
        ))}
      </div>
    </Section>
  );
}
