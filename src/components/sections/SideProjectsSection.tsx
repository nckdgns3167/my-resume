import { Section } from "@/components/ui/Section";
import { ProjectGallery } from "@/components/experience/ProjectGallery";
import { sideProjects } from "@/data/side-projects";

export function SideProjectsSection() {
  return (
    <Section id="side-projects" title="Side Projects">
      <div className="flex flex-col gap-6">
        {sideProjects.map((project) => (
          <div
            key={project.name}
            id={project.id}
            className="scroll-mt-20 rounded-xl border border-border bg-surface p-6"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-text">{project.name}</h3>
              {project.progressTag && (
                <span className="rounded-full bg-accent-primary px-2.5 py-0.5 text-xs font-medium text-white">
                  {project.progressTag}
                </span>
              )}
            </div>

            <dl className="mb-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
              <dt className="text-text-secondary">기간</dt>
              <dd className="text-text">{project.period}</dd>
              <dt className="text-text-secondary">역할</dt>
              <dd className="text-text">{project.role}</dd>
              <dt className="text-text-secondary">규모</dt>
              <dd className="text-text">{project.client}</dd>
              {project.links && project.links.length > 0 && (
                <>
                  <dt className="text-text-secondary">링크</dt>
                  <dd className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-primary underline underline-offset-2 transition-colors hover:text-accent-primary/70"
                      >
                        {link.label}
                      </a>
                    ))}
                  </dd>
                </>
              )}
            </dl>

            <p className="mb-3 text-sm leading-6 text-text-secondary">{project.description}</p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-border bg-bg-secondary px-2 py-0.5 text-xs text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.notice && (
              <p className="text-sm italic text-text-secondary">{project.notice}</p>
            )}

            {project.hint && <p className="mt-1 text-sm text-text-secondary">{project.hint}</p>}

            {project.achievements.length > 0 && (
              <ul className="mt-3 flex flex-col gap-1">
                {project.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm text-text-secondary before:absolute before:left-0 before:text-accent-primary before:content-['•']"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            )}

            {/* 갤러리 */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-5 border-t border-border pt-4 print:hidden">
                <ProjectGallery grids={project.gallery} projectName={project.name} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
