"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { StrengthTipPopover } from "@/data/types";

interface TipPopoverProps {
	tip: StrengthTipPopover;
	anchorEl: HTMLElement;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export function TipPopover({
	tip,
	anchorEl,
	onMouseEnter,
	onMouseLeave,
}: TipPopoverProps) {
	const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
	const [placement, setPlacement] = useState<"below" | "above">("below");

	useEffect(() => {
		const rect = anchorEl.getBoundingClientRect();
		const gap = 6;
		const popoverHeight = 120;

		const spaceBelow = window.innerHeight - rect.bottom;
		const placeAbove = spaceBelow < popoverHeight + gap;
		setPlacement(placeAbove ? "above" : "below");

		const top = placeAbove
			? rect.top - gap
			: rect.bottom + gap;

		const left = Math.min(
			Math.max(rect.left, 8),
			window.innerWidth - 340,
		);

		setPos({ top, left });
	}, [anchorEl]);

	if (!pos) return null;

	return (
		<AnimatePresence>
			<motion.div
				key={tip.id}
				initial={{ opacity: 0, y: placement === "below" ? -4 : 4 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: placement === "below" ? -4 : 4 }}
				transition={{ duration: 0.15 }}
				style={{
					position: "fixed",
					top: placement === "above" ? undefined : pos.top,
					bottom: placement === "above" ? window.innerHeight - pos.top : undefined,
					left: pos.left,
				}}
				className="z-50 w-80 max-w-[calc(100vw-16px)] rounded-xl border border-border bg-surface p-4 shadow-lg print:hidden"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<p className="mb-1.5 text-sm font-semibold text-text">{tip.title}</p>
				<p className="text-xs leading-5 text-text-secondary">{tip.content}</p>
			</motion.div>
		</AnimatePresence>
	);
}
