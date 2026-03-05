import { Section } from "@/components/ui/Section";
import type { Education } from "@/data/types";

interface EducationSectionProps {
	education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
	return (
		<Section id="education" title="Education">
			<div className="relative ml-3 border-l-2 border-border pl-6">
				{education.map((edu, i) => (
					<div
						key={`${edu.school}-${edu.period}`}
						className={`relative ${i < education.length - 1 ? "pb-8" : ""}`}
					>
						{/* Timeline dot */}
						<div className="absolute -left-7.75 top-1 h-3 w-3 rounded-full border-2 border-accent-primary bg-bg" />

						<div className="flex flex-col gap-0.5">
							<div className="flex items-baseline gap-2">
								<h3 className="text-base font-semibold text-text">
									{edu.school}
								</h3>
								{edu.location && (
									<span className="text-sm text-text-secondary">
										{edu.location}
									</span>
								)}
							</div>
							<p className="text-sm text-text-secondary">{edu.period}</p>
							{(edu.major || edu.degree) && (
								<p className="text-sm text-text-secondary">
									{[edu.major, edu.faculty, edu.degree]
										.filter(Boolean)
										.join(" · ")}
								</p>
							)}
							<span className="mt-1.5 inline-block w-fit rounded-full bg-bg-secondary px-2.5 py-0.5 text-xs font-medium text-text-secondary">
								{edu.status}
							</span>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
}
