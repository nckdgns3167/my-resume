import type { Company } from "@/data/types";

interface CompanyCardProps {
  company: Company;
  children: React.ReactNode;
}

export function CompanyCard({ company, children }: CompanyCardProps) {
  return (
    <div className="relative pl-7">
      {/* 타임라인 세로 선 */}
      <div className="absolute left-[7px] top-[10px] bottom-0 w-px bg-border" />

      {/* 회사 헤더 — 타임라인 도트 */}
      <div className="relative mb-8">
        <div className="absolute -left-7 top-[6px] h-[15px] w-[15px] rounded-full border-[3px] border-accent-primary bg-bg" />
        <h3 className="text-lg font-bold text-text">{company.name}</h3>
        <p className="mt-0.5 text-sm text-text-secondary">{company.period}</p>
        <p className="text-sm text-text-secondary">{company.description}</p>
      </div>

      {/* 프로젝트 목록 */}
      <div className="flex flex-col gap-8">
        {children}
      </div>
    </div>
  );
}
