"use client";

import type { TrainingDetailDialog } from "@/data/types";
import { useCallback, useEffect, useRef } from "react";

interface DetailDialogProps {
	detail: TrainingDetailDialog | null;
	onClose: () => void;
	closeLabel: string;
}

export function DetailDialog({ detail, onClose, closeLabel }: DetailDialogProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (detail && !dialog.open) {
			dialog.showModal();
		} else if (!detail && dialog.open) {
			dialog.close();
		}
	}, [detail]);

	const handleClose = useCallback(() => {
		dialogRef.current?.close();
		onClose();
	}, [onClose]);

	const handleBackdropClick = useCallback(
		(e: React.MouseEvent<HTMLDialogElement>) => {
			if (e.target === dialogRef.current) {
				handleClose();
			}
		},
		[handleClose],
	);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		const handler = () => onClose();
		dialog.addEventListener("close", handler);
		return () => dialog.removeEventListener("close", handler);
	}, [onClose]);

	return (
		<dialog
			ref={dialogRef}
			onClick={handleBackdropClick}
			className="m-auto w-[95vw] max-w-xl rounded-2xl border border-border bg-bg p-0 shadow-2xl backdrop:bg-black/60 print:hidden open:flex open:flex-col"
		>
			{detail && (
				<>
					{/* Header */}
					<div className="flex items-start justify-between gap-3 border-b border-border px-6 py-4">
						<div className="flex flex-col gap-1">
							<h3 className="text-base font-bold text-text">
								{detail.title}
							</h3>
							<p className="text-xs text-accent-primary">
								{detail.subtitle}
							</p>
						</div>
						<button
							type="button"
							onClick={handleClose}
							className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text"
							aria-label={closeLabel}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-4 w-4"
								aria-hidden="true"
							>
								<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
							</svg>
						</button>
					</div>

					{/* Content */}
					<div className="max-h-[70vh] overflow-y-auto px-6 py-5">
						<ul className="space-y-4">
							{detail.sections.map((section) => (
								<li key={section.term}>
									<p className="text-sm leading-relaxed text-text">
										<span className="font-semibold">
											{section.term}:
										</span>{" "}
										<span className="text-text-secondary">
											{section.desc}
										</span>
									</p>
									{section.subItems && section.subItems.length > 0 && (
										<ul className="mt-2 ml-4 space-y-2">
											{section.subItems.map((sub) => (
												<li
													key={sub.term}
													className="text-sm leading-relaxed text-text before:mr-2 before:text-border before:content-['•']"
												>
													<span className="font-medium">
														{sub.term}:
													</span>{" "}
													<span className="text-text-secondary">
														{sub.desc}
													</span>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</dialog>
	);
}
