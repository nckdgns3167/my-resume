import type { Company } from "@/data/types";

interface CompanyCardProps {
  company: Company;
  children: React.ReactNode;
}

export function CompanyCard({ company, children }: CompanyCardProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-xl border border-border bg-surface p-5">
        <h3 className="text-lg font-bold text-text">{company.name}</h3>
        <p className="mt-1 text-sm text-text-secondary">{company.period}</p>
        <p className="mt-1 text-sm text-text-secondary">
          {company.description}
        </p>
      </div>
      {children}
    </div>
  );
}
