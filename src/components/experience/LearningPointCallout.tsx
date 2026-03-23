import type { LearningPoint } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface LearningPointCalloutProps {
	learningPoints: LearningPoint[];
	badge: string;
}

export function LearningPointCallout({ learningPoints, badge }: LearningPointCalloutProps) {
	return (
		<div className="flex flex-col gap-3">
			{learningPoints.map((lp) => (
				<div
					key={lp.topic}
					className="rounded-lg border-l-4 border-accent-secondary/40 bg-accent-secondary/5 p-4"
				>
					<div className="mb-2 flex items-center gap-2">
						<span className="shrink-0 rounded bg-accent-secondary/15 px-2 py-0.5 text-xs font-medium text-accent-secondary">
							{badge}
						</span>
						<h5 className="text-sm font-semibold text-text">{lp.topic}</h5>
					</div>
					<div className="flex flex-col gap-2">
						{lp.paragraphs.map((paragraph) => (
							<p
								key={paragraph.slice(0, 40)}
								className="text-sm leading-6 text-text-secondary"
							>
								{parseRichText(paragraph)}
							</p>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
