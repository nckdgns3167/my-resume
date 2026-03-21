"use client";

import { useCallback, useEffect, useRef } from "react";

interface FileViewerDialogProps {
	open: boolean;
	onClose: () => void;
	src: string;
	title: string;
	type: "pdf" | "image";
	closeLabel: string;
}

export function FileViewerDialog({
	open,
	onClose,
	src,
	title,
	type,
	closeLabel,
}: FileViewerDialogProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (open && !dialog.open) {
			dialog.showModal();
		} else if (!open && dialog.open) {
			dialog.close();
		}
	}, [open]);

	const handleClose = useCallback(() => {
		dialogRef.current?.close();
		onClose();
	}, [onClose]);

	// backdrop 클릭으로 닫기
	const handleBackdropClick = useCallback(
		(e: React.MouseEvent<HTMLDialogElement>) => {
			if (e.target === dialogRef.current) {
				handleClose();
			}
		},
		[handleClose],
	);

	// 네이티브 dialog close 이벤트 (Escape 키 등)
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
			className="m-auto h-[85vh] w-[95vw] max-w-5xl rounded-2xl border border-border bg-bg p-0 shadow-2xl backdrop:bg-black/60 print:hidden open:flex open:flex-col open:items-stretch"
		>
			{/* Header */}
			<div className="flex items-center justify-between border-b border-border px-5 py-3">
				<h3 className="truncate text-sm font-semibold text-text">
					{title}
				</h3>
				<button
					type="button"
					onClick={handleClose}
					className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-bg-secondary hover:text-text"
					aria-label={closeLabel}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="h-5 w-5"
						aria-hidden="true"
					>
						<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
					</svg>
				</button>
			</div>

			{/* Content */}
			<div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4">
				{type === "pdf" ? (
					<iframe
						src={src}
						title={title}
						className="h-full w-full rounded-lg border-0"
					/>
				) : (
					<img
						src={src}
						alt={title}
						className="max-h-full max-w-full rounded-lg object-contain"
					/>
				)}
			</div>
		</dialog>
	);
}
