import { Section } from "@/components/ui/Section";
import type { Certification } from "@/data/types";
import type { UiStrings } from "@/data/ui-strings";

interface CertificationsSectionProps {
	certifications: Certification[];
	ui: UiStrings;
}

export function CertificationsSection({
	certifications,
	ui,
}: CertificationsSectionProps) {
	return (
		<Section id="certifications" title="Certifications">
			<div className="grid gap-4 sm:grid-cols-3">
				{certifications.map((cert) => (
					<div
						key={cert.registrationNumber}
						className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5"
					>
						<div className="flex flex-col gap-1">
							<h3 className="text-base font-semibold text-text">
								{cert.name}
							</h3>
							<p className="text-sm text-text-secondary">{cert.issuer}</p>
							<p className="text-sm text-text-secondary">
								{cert.passDate}
								{cert.examSession && ` · ${cert.examSession}`}
							</p>
							<span className="mt-1.5 inline-block w-fit rounded-md bg-bg-secondary px-2 py-0.5 font-mono text-xs text-text-secondary">
								{cert.registrationNumber}
							</span>
						</div>
						{cert.pdfFileName && (
							<a
								href={`/certificates/${cert.pdfFileName}`}
								download
								className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-accent-primary transition-colors hover:bg-bg-secondary print:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-3.5 w-3.5"
									aria-hidden="true"
								>
									<path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
									<path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
								</svg>
								{ui.downloadCertificate}
							</a>
						)}
					</div>
				))}
			</div>
		</Section>
	);
}
