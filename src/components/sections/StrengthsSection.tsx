"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { TipPopover } from "@/components/ui/TipPopover";
import type { Strength, StrengthTipPopover } from "@/data/types";
import { parseRichText, parseTipText } from "@/lib/rich-text";

interface StrengthsSectionProps {
	strengths: Strength[];
}

export function StrengthsSection({ strengths }: StrengthsSectionProps) {
	const [activeTip, setActiveTip] = useState<{
		id: string;
		anchorEl: HTMLElement;
	} | null>(null);
	const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const allTips: StrengthTipPopover[] = strengths.flatMap(
		(s) => s.tipPopovers ?? [],
	);

	const clearHideTimeout = useCallback(() => {
		if (hideTimeoutRef.current) {
			clearTimeout(hideTimeoutRef.current);
			hideTimeoutRef.current = null;
		}
	}, []);

	const scheduleHide = useCallback(() => {
		clearHideTimeout();
		hideTimeoutRef.current = setTimeout(() => {
			setActiveTip(null);
		}, 150);
	}, [clearHideTimeout]);

	const handleTipEnter = useCallback(
		(id: string, el: HTMLElement) => {
			clearHideTimeout();
			setActiveTip({ id, anchorEl: el });
		},
		[clearHideTimeout],
	);

	const handleTipLeave = useCallback(() => {
		scheduleHide();
	}, [scheduleHide]);

	const handleTipTap = useCallback(
		(id: string, el: HTMLElement) => {
			clearHideTimeout();
			setActiveTip((prev) =>
				prev?.id === id ? null : { id, anchorEl: el },
			);
		},
		[clearHideTimeout],
	);

	const handlePopoverEnter = useCallback(() => {
		clearHideTimeout();
	}, [clearHideTimeout]);

	const handlePopoverLeave = useCallback(() => {
		scheduleHide();
	}, [scheduleHide]);

	// Close on outside click (mobile)
	useEffect(() => {
		if (!activeTip) return;
		function handlePointerDown(e: PointerEvent) {
			const target = e.target as HTMLElement;
			if (target.closest("[data-tip-popover]")) return;
			setActiveTip(null);
		}
		document.addEventListener("pointerdown", handlePointerDown);
		return () =>
			document.removeEventListener("pointerdown", handlePointerDown);
	}, [activeTip]);

	// Close on scroll
	useEffect(() => {
		if (!activeTip) return;
		function handleScroll() {
			setActiveTip(null);
		}
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [activeTip]);

	const currentTip = activeTip
		? allTips.find((t) => t.id === activeTip.id) ?? null
		: null;

	return (
		<Section id="strengths" title="Strengths">
			<div className="space-y-6">
				{strengths.map((s, i) => (
					<div
						key={s.title}
						className="rounded-xl border border-border bg-surface p-6"
					>
						<div className="mb-3 flex items-baseline gap-3">
							<span className="text-2xl font-bold text-accent-primary">
								{String(i + 1).padStart(2, "0")}
							</span>
							<h3 className="text-base font-semibold text-text">
								{s.title}
							</h3>
						</div>
						<div className="space-y-3 text-sm leading-6 text-text-secondary">
							{s.description.split("\n\n").map((paragraph) => (
								<p key={paragraph.slice(0, 40)}>
									{s.tipPopovers
										? parseTipText(
												paragraph,
												handleTipEnter,
												handleTipLeave,
												handleTipTap,
											)
										: parseRichText(paragraph)}
								</p>
							))}
						</div>
					</div>
				))}
			</div>

			{currentTip && activeTip && (
				<div data-tip-popover>
					<TipPopover
						tip={currentTip}
						anchorEl={activeTip.anchorEl}
						onMouseEnter={handlePopoverEnter}
						onMouseLeave={handlePopoverLeave}
					/>
				</div>
			)}
		</Section>
	);
}
