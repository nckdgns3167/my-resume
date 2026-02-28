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
    <div id={project.id} className="relative scroll-mt-20">
      {/* 타임라인 작은 도트 */}
      <div className="absolute -left-7 top-[6px] flex h-[15px] w-[15px] items-center justify-center">
        <div className="h-[7px] w-[7px] rounded-full bg-border" />
      </div>

      {/* 프로젝트 제목 */}
      <h4 className="mb-3 text-base font-bold text-text">{project.name}</h4>

      {/* 메타 정보 */}
      <dl className="mb-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
        <dt className="text-text-secondary">발주처</dt>
        <dd className="text-text">{project.client}</dd>
        <dt className="text-text-secondary">기간</dt>
        <dd className="text-text">{project.period}</dd>
        <dt className="text-text-secondary">역할</dt>
        <dd className="text-text">{project.role}</dd>
      </dl>

      {/* 기술 스택 */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border bg-bg-secondary px-2 py-0.5 text-xs text-text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* 설명 */}
      {project.description && (
        <p className="mb-3 text-sm leading-6 text-text-secondary">
          {parseRichText(project.description)}
        </p>
      )}

      {/* 성과 */}
      <ProjectAchievements achievements={project.achievements} />

      {/* 하이라이트 박스 */}
      {project.highlightBox && (
        <div className="mt-4">
          <HighlightBox box={project.highlightBox} />
        </div>
      )}

      {/* 갤러리 */}
      {project.gallery.length > 0 && (
        <div className="mt-5 border-t border-border pt-4 print:hidden">
          <ProjectGallery grids={project.gallery} projectName={project.name} />
        </div>
      )}
    </div>
  );
}
