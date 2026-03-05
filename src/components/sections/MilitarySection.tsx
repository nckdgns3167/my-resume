import { Section } from "@/components/ui/Section";
import type { MilitaryService } from "@/data/types";

interface MilitarySectionProps {
	militaryService: MilitaryService;
}

export function MilitarySection({ militaryService }: MilitarySectionProps) {
	return (
		<Section id="military" title="Military Service">
			<div className="rounded-xl border border-border bg-surface p-5">
				<div className="flex items-center gap-3">
					<span className="inline-block rounded-full bg-accent-tertiary/10 px-3 py-1 text-sm font-semibold text-accent-tertiary">
						{militaryService.status}
					</span>
					<span className="text-sm text-text-secondary">
						{militaryService.category}
					</span>
				</div>
			</div>
		</Section>
	);
}
