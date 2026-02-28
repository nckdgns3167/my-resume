"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLocale, useUiStrings } from "@/context/LocaleContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import type { TocSection } from "@/data/types";

interface MobileDrawerProps {
	tocSections: TocSection[];
	allTocIds: string[];
	childToParentMap: Map<string, string>;
}

export function MobileDrawer({
	tocSections,
	allTocIds,
	childToParentMap,
}: MobileDrawerProps) {
	const [isOpen, setIsOpen] = useState(false);
	const activeId = useScrollSpy(allTocIds);
	const isDesktop = useMediaQuery("(min-width: 1100px)");
	const { showButton, scrollToTop } = useScrollTop();
	const { locale, toggleLocale } = useLocale();
	const ui = useUiStrings();

	// Drag-to-dismiss state
	const sheetRef = useRef<HTMLDivElement>(null);
	const handleRef = useRef<HTMLDivElement>(null);
	const dragStartY = useRef(0);
	const dragDelta = useRef(0);
	const isDragging = useRef(false);

	// Escape key to close
	useEffect(() => {
		if (!isOpen) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") setIsOpen(false);
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [isOpen]);

	// Native touch listeners on drag handle (passive: false to allow preventDefault)
	useEffect(() => {
		const handle = handleRef.current;
		const sheet = sheetRef.current;
		if (!handle || !sheet) return;

		const onTouchStart = (e: TouchEvent) => {
			isDragging.current = true;
			dragStartY.current = e.touches[0].clientY;
			dragDelta.current = 0;
			sheet.style.transition = "none";
		};

		const onTouchMove = (e: TouchEvent) => {
			if (!isDragging.current) return;
			e.preventDefault(); // 페이지 스크롤 방지
			const delta = e.touches[0].clientY - dragStartY.current;
			dragDelta.current = Math.max(0, delta);
			sheet.style.transform = `translateY(${dragDelta.current}px)`;
		};

		const onTouchEnd = () => {
			isDragging.current = false;
			sheet.style.transition = "";
			if (dragDelta.current > 50) {
				setIsOpen(false);
			}
			sheet.style.transform = "";
			dragDelta.current = 0;
		};

		handle.addEventListener("touchstart", onTouchStart, { passive: true });
		handle.addEventListener("touchmove", onTouchMove, { passive: false });
		handle.addEventListener("touchend", onTouchEnd);

		return () => {
			handle.removeEventListener("touchstart", onTouchStart);
			handle.removeEventListener("touchmove", onTouchMove);
			handle.removeEventListener("touchend", onTouchEnd);
		};
	}, []);

	if (isDesktop) return null;

	const activeParent = childToParentMap.get(activeId) ?? activeId;

	const handleScrollTop = () => {
		scrollToTop();
		setIsOpen(false);
	};

	return (
		<>
			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 z-[90] bg-black/40 print:hidden"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Bottom Drawer */}
			<div
				ref={sheetRef}
				className={`fixed bottom-0 left-0 z-[91] max-h-[70vh] w-full rounded-t-2xl border-t border-border bg-surface pb-8 pt-2 transition-transform duration-300 print:hidden ${
					isOpen ? "translate-y-0" : "translate-y-full"
				}`}
			>
				{/* Drag handle */}
				<div
					ref={handleRef}
					className="flex cursor-grab items-center justify-center pb-3 pt-1 active:cursor-grabbing"
				>
					<div className="h-1 w-10 rounded-full bg-border" />
				</div>

				{/* Action buttons row */}
				<div className="flex items-center justify-center gap-3 px-6 pb-4">
					{showButton && (
						<button
							onClick={handleScrollTop}
							className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/70 text-white shadow-md transition-colors hover:bg-accent-primary"
							aria-label={ui.scrollToTop}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="18 15 12 9 6 15" />
							</svg>
						</button>
					)}

					<button
						onClick={toggleLocale}
						className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/70 text-xs font-bold text-white shadow-md transition-colors hover:bg-accent-primary"
						aria-label={
							locale === "ko" ? ui.switchToEn : ui.switchToKo
						}
						title={
							locale === "ko" ? ui.switchToEn : ui.switchToKo
						}
					>
						{locale === "ko" ? "EN" : "KO"}
					</button>

					<button
						onClick={() => window.print()}
						className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-primary/70 text-white shadow-md transition-colors hover:bg-accent-primary"
						aria-label={ui.saveAsPdf}
						title={ui.saveAsPdf}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<polyline points="6 9 6 2 18 2 18 9" />
							<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
							<rect x="6" y="14" width="12" height="8" />
						</svg>
					</button>

					<ThemeToggle />
				</div>

				{/* Divider */}
				<div className="mx-6 border-t border-border" />

				{/* TOC Navigation */}
				<nav
					className="overflow-y-auto px-6 pt-4"
					style={{ maxHeight: "calc(70vh - 120px)" }}
					aria-label={ui.toc}
				>
					<ul className="flex flex-col gap-1">
						{tocSections.map((section) => {
							const isSectionActive =
								activeParent === section.id;
							const isExactActive = activeId === section.id;

							return (
								<li key={section.id}>
									<a
										href={`#${section.id}`}
										onClick={() => setIsOpen(false)}
										className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
											isExactActive
												? "bg-accent-primary/10 font-semibold text-accent-primary"
												: isSectionActive
													? "font-medium text-text"
													: "text-text-secondary hover:bg-bg-secondary hover:text-text"
										}`}
									>
										{section.label}
									</a>

									{section.children && (
										<ul className="ml-4 flex flex-col gap-0.5 border-l border-border pl-3">
											{section.children.map((child) => (
												<li key={child.id}>
													<a
														href={`#${child.id}`}
														onClick={() =>
															setIsOpen(false)
														}
														className={`block rounded-lg px-3 py-1.5 text-xs transition-colors ${
															activeId ===
															child.id
																? "bg-accent-primary/10 font-semibold text-accent-primary"
																: "text-text-secondary hover:bg-bg-secondary hover:text-text"
														}`}
													>
														{child.label}
													</a>
												</li>
											))}
										</ul>
									)}
								</li>
							);
						})}
					</ul>
				</nav>
			</div>

			{/* Hamburger FAB */}
			{!isOpen && (
				<button
					onClick={() => setIsOpen(true)}
					className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent-primary/70 text-white shadow-lg transition-colors hover:bg-accent-primary print:hidden"
					aria-label={ui.openMenu}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="3" y1="12" x2="21" y2="12" />
						<line x1="3" y1="6" x2="21" y2="6" />
						<line x1="3" y1="18" x2="21" y2="18" />
					</svg>
				</button>
			)}
		</>
	);
}
