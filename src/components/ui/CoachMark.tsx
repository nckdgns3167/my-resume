"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useUiStrings } from "@/context/LocaleContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const STORAGE_KEY = "welcome-dismissed";

export function CoachMark() {
	const [showDialog, setShowDialog] = useState(false);
	const [dontShowAgain, setDontShowAgain] = useState(false);
	const driverRef = useRef<ReturnType<typeof driver> | null>(null);
	const ui = useUiStrings();
	const isDesktop = useMediaQuery("(min-width: 1100px)");

	useEffect(() => {
		try {
			if (localStorage.getItem(STORAGE_KEY) !== "true") {
				setShowDialog(true);
			}
		} catch {
			// localStorage unavailable
		}
	}, []);

	const handleDismiss = useCallback(() => {
		if (dontShowAgain) {
			try {
				localStorage.setItem(STORAGE_KEY, "true");
			} catch {
				// localStorage unavailable
			}
		}
		setShowDialog(false);
	}, [dontShowAgain]);

	const startTour = useCallback(() => {
		if (dontShowAgain) {
			try {
				localStorage.setItem(STORAGE_KEY, "true");
			} catch {
				// localStorage unavailable
			}
		}
		setShowDialog(false);

		const steps = [
			{
				element: "header",
				popover: {
					title: ui.tourProfileTitle,
					description: ui.tourProfileDesc,
					side: "bottom" as const,
					align: "start" as const,
				},
			},
			{
				element: "#introduction",
				popover: {
					title: ui.tourIntroTitle,
					description: ui.tourIntroDesc,
					side: "bottom" as const,
					align: "start" as const,
				},
			},
			{
				element: "#skills",
				popover: {
					title: ui.tourSkillsTitle,
					description: ui.tourSkillsDesc,
					side: "bottom" as const,
					align: "start" as const,
				},
			},
			{
				element: "#side-projects",
				popover: {
					title: ui.tourSideProjectsTitle,
					description: ui.tourSideProjectsDesc,
					side: "bottom" as const,
					align: "start" as const,
				},
			},
			{
				element: "#experience",
				popover: {
					title: ui.tourExperienceTitle,
					description: ui.tourExperienceDesc,
					side: "bottom" as const,
					align: "start" as const,
				},
			},
			{
				element: '[data-gallery="project-smarton"] summary',
				popover: {
					title: ui.tourGalleryTitle,
					description: ui.tourGalleryDesc,
					side: "top" as const,
					align: "start" as const,
				},
			},
			{
				element: '[data-gallery="project-smarton"]',
				popover: {
					title: ui.tourGalleryOpenTitle,
					description: ui.tourGalleryOpenDesc,
					side: "top" as const,
					align: "start" as const,
					onNextClick: () => {
						// 갤러리 닫고 다음 스텝으로
						const details = document.querySelector(
							'[data-gallery="project-smarton"] details',
						) as HTMLDetailsElement | null;
						if (details) details.open = false;
						driverRef.current?.moveNext();
					},
				},
				onHighlightStarted: () => {
					// 갤러리 열기
					const details = document.querySelector(
						'[data-gallery="project-smarton"] details',
					) as HTMLDetailsElement | null;
					if (details) details.open = true;
				},
			},
			{
				element: "#strengths",
				popover: {
					title: ui.tourStrengthsTitle,
					description: ui.tourStrengthsDesc,
					side: "bottom" as const,
					align: "start" as const,
				},
			},
		];

		if (isDesktop) {
			steps.push(
				{
					element: '[data-tour="fab-stack"]',
					popover: {
						title: ui.tourFabTitle,
						description: ui.tourFabDesc,
						side: "top" as const,
						align: "start" as const,
					},
				},
				{
					element: '[data-tour="toc-sidebar"]',
					popover: {
						title: ui.tourTocTitle,
						description: ui.tourTocDesc,
						side: "top" as const,
						align: "start" as const,
					},
				},
			);
		} else {
			steps.push({
				element: '[data-tour="mobile-drawer"]',
				popover: {
					title: ui.tourMobileDrawerTitle,
					description: ui.tourMobileDrawerDesc,
					side: "top" as const,
					align: "start" as const,
				},
			});
		}

		setTimeout(() => {
			const driverObj = driver({
				popoverClass: "coachmark-popover",
				showProgress: true,
				steps,
				onDestroyed: () => {
					// 투어 종료 시 갤러리가 열려있으면 닫기
					const details = document.querySelector(
						'[data-gallery="project-smarton"] details',
					) as HTMLDetailsElement | null;
					if (details) details.open = false;
				},
			});
			driverRef.current = driverObj;
			driverObj.drive();
		}, 300);
	}, [ui, isDesktop, dontShowAgain]);

	if (!showDialog) return null;

	return (
		<div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 print:hidden">
			<div className="relative w-[90vw] max-w-sm rounded-2xl bg-surface p-6 shadow-xl">
				{/* Close button */}
				<button
					onClick={handleDismiss}
					className="absolute right-4 top-4 text-text-secondary transition-colors hover:text-text"
					aria-label="Close"
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
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				{/* Content */}
				<div className="flex flex-col items-center text-center">
					<h2 className="mb-1 font-serif text-xl font-bold text-text">
						{ui.welcomeTitle}
					</h2>
					<p className="mb-6 whitespace-pre-line text-sm leading-relaxed text-text-secondary">
						{ui.welcomeMessage}
					</p>

					{/* Buttons */}
					<div className="flex w-full flex-col gap-2.5">
						<button
							onClick={startTour}
							className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-primary/90"
						>
							{ui.welcomeStartTour}
						</button>
						<button
							onClick={handleDismiss}
							className="w-full rounded-xl border border-border py-3 text-sm font-medium text-text transition-colors hover:bg-bg-secondary"
						>
							{ui.welcomeSkip}
						</button>
					</div>

					{/* Don't show again */}
					<label className="mt-4 flex cursor-pointer items-center gap-2 text-xs text-text-secondary">
						<input
							type="checkbox"
							checked={dontShowAgain}
							onChange={(e) => setDontShowAgain(e.target.checked)}
							className="h-3.5 w-3.5 rounded border-border accent-accent-primary"
						/>
						{ui.welcomeDontShow}
					</label>
				</div>
			</div>
		</div>
	);
}
