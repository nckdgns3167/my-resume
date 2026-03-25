"use client";

import { useState } from "react";
import type { LearningPoint } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface LearningPointCalloutProps {
	learningPoints: LearningPoint[];
	title: string;
}

export function LearningPointCallout({ learningPoints, title }: LearningPointCalloutProps) {
	const [openSet, setOpenSet] = useState<Set<number>>(new Set());

	const toggle = (i: number) => {
		setOpenSet((prev) => {
			const next = new Set(prev);
			if (next.has(i)) next.delete(i);
			else next.add(i);
			return next;
		});
	};

	return (
		<div className="rounded-lg border border-accent-secondary/30 bg-accent-secondary/5 p-4">
			{/* 패널 제목 */}
			<h5 className="mb-3 text-sm font-semibold text-accent-secondary">{title}</h5>

			{/* 웹 전용 — 아코디언 */}
			<div className="flex flex-col gap-2 print:hidden">
				{learningPoints.map((lp, i) => {
					const isOpen = openSet.has(i);
					return (
						<div key={lp.topic}>
							<button
								type="button"
								onClick={() => toggle(i)}
								className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-accent-secondary/10"
							>
								<svg
									className={`h-3.5 w-3.5 shrink-0 text-accent-secondary transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2.5}
									aria-hidden="true"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
								</svg>
								<span className="flex-1 text-sm font-medium text-text">
									{lp.topic}
								</span>
							</button>
							{isOpen && (
								<div className="mt-1 flex flex-col gap-2 pl-7 pr-2 pb-2">
									{lp.paragraphs.map((paragraph) => (
										<p
											key={paragraph.slice(0, 40)}
											className="text-sm leading-6 text-text-secondary"
										>
											{parseRichText(paragraph)}
										</p>
									))}
								</div>
							)}
						</div>
					);
				})}
			</div>

			{/* PDF 전용 — 제목만 나열 */}
			<ul className="hidden flex-col gap-1 print:flex">
				{learningPoints.map((lp) => (
					<li
						key={lp.topic}
						className="flex items-center gap-2 text-sm text-text"
					>
						<svg
							className="h-3 w-3 shrink-0 text-accent-secondary"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2.5}
							aria-hidden="true"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
						</svg>
						{lp.topic}
					</li>
				))}
			</ul>
		</div>
	);
}
