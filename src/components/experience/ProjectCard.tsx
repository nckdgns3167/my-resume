import type { Project } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";
import { ProjectAchievements } from "./ProjectAchievements";
import { HighlightBox } from "./HighlightBox";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h4 className="mb-4 text-base font-bold text-text">{project.name}</h4>

      <dl className="mb-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        <dt className="text-text-secondary">발주처</dt>
        <dd className="text-text">{project.client}</dd>
        <dt className="text-text-secondary">기간</dt>
        <dd className="text-text">{project.period}</dd>
        <dt className="text-text-secondary">역할</dt>
        <dd className="text-text">{project.role}</dd>
      </dl>

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

      {project.description && (
        <p className="mb-4 text-sm leading-6 text-text-secondary">
          {parseRichText(project.description)}
        </p>
      )}

      <ProjectAchievements achievements={project.achievements} />

      {project.highlightBox && (
        <div className="mt-4">
          <HighlightBox box={project.highlightBox} />
        </div>
      )}

      {project.gallery.length > 0 && (
        <div className="mt-5 border-t border-border pt-4">
          <ProjectGallery
            grids={project.gallery}
            projectName={project.name}
          />
        </div>
      )}
    </div>
  );
}
