"use client";

import { DetailDialog } from "@/components/ui/DetailDialog";
import { FileViewerDialog } from "@/components/ui/FileViewerDialog";
import { Section } from "@/components/ui/Section";
import type { Training, TrainingDetailDialog } from "@/data/types";
import type { UiStrings } from "@/data/ui-strings";
import { parseDetailText } from "@/lib/rich-text";
import { useCallback, useState } from "react";

interface TrainingSectionProps {
	training: { online: Training[]; offline: Training[] };
	ui: UiStrings;
}

/* ── Download icon SVG (shared) ── */
const DownloadIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className="h-4 w-4"
		aria-hidden="true"
	>
		<path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
		<path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
	</svg>
);

/* ── Arrow-top-right-on-square icon SVG (viewer) ── */
const ViewIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className="h-4 w-4"
		aria-hidden="true"
	>
		<path
			fillRule="evenodd"
			d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
			clipRule="evenodd"
		/>
		<path
			fillRule="evenodd"
			d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
			clipRule="evenodd"
		/>
	</svg>
);

const btnClass =
	"inline-flex w-fit items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-accent-primary transition-colors hover:bg-bg-secondary print:hidden";

function TrainingItem({
	training: t,
	ui,
	category,
	isLast,
	onView,
	onDetailClick,
}: {
	training: Training;
	ui: UiStrings;
	category: string;
	isLast: boolean;
	onView: (src: string, title: string, type: "pdf" | "image") => void;
	onDetailClick: (id: string) => void;
}) {
	return (
		<div className={`relative ${isLast ? "" : "pb-8"}`}>
			{/* Timeline dot — aligned with title (below badge) */}
			<div className="absolute -left-7.75 top-5 h-3 w-3 rounded-full border-2 border-accent-primary bg-bg" />

			<div className="flex flex-col gap-0.5">
				{/* Badge */}
				<span className="w-fit rounded bg-accent-secondary/15 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-accent-secondary">
					{category}
				</span>

				<div className="flex flex-wrap items-center gap-2">
					<h3 className="text-base font-semibold text-text">{t.name}</h3>
					<span className="text-sm text-text-secondary">
						{t.institution}
					</span>
					{t.link && (
						<a
							href={t.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex text-text-secondary transition-colors hover:text-accent-primary print:hidden"
							title={t.name}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="h-3.5 w-3.5"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
									clipRule="evenodd"
								/>
								<path
									fillRule="evenodd"
									d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					)}
				</div>
				<p className="text-sm text-text-secondary">{t.period}</p>

				{t.details && t.details.length > 0 && (
					<ul className="mt-2 space-y-1">
						{t.details.map((detail) => (
							<li
								key={detail.slice(0, 40)}
								className="text-sm leading-6 text-text-secondary before:mr-2 before:text-border before:content-['-']"
							>
								{t.detailDialogs
									? parseDetailText(detail, onDetailClick)
									: detail}
							</li>
						))}
					</ul>
				)}

				<div className="mt-3 flex flex-wrap gap-2">
					{t.posterFileName && (
						<>
							<a
								href={`/images/trainings/${t.posterFileName}`}
								download
								className={btnClass}
							>
								<DownloadIcon />
								{ui.downloadPoster}
							</a>
							<button
								type="button"
								onClick={() =>
									onView(
										`/images/trainings/${t.posterFileName}`,
										`${t.name} — ${ui.downloadPoster}`,
										"image",
									)
								}
								className={btnClass}
							>
								<ViewIcon />
								{ui.viewFile}
							</button>
						</>
					)}
					{t.certificateFileName && (
						<>
							<a
								href={`/images/trainings/${t.certificateFileName}`}
								download
								className={btnClass}
							>
								<DownloadIcon />
								{ui.downloadTrainingCertificate}
							</a>
							<button
								type="button"
								onClick={() =>
									onView(
										`/images/trainings/${t.certificateFileName}`,
										`${t.name} — ${ui.downloadTrainingCertificate}`,
										t.certificateFileName!.endsWith(".pdf")
											? "pdf"
											: "image",
									)
								}
								className={btnClass}
							>
								<ViewIcon />
								{ui.viewFile}
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export function TrainingSection({ training, ui }: TrainingSectionProps) {
	const [viewer, setViewer] = useState<{
		src: string;
		title: string;
		type: "pdf" | "image";
	} | null>(null);

	const [activeDetail, setActiveDetail] =
		useState<TrainingDetailDialog | null>(null);

	// Collect all detailDialogs from all training items
	const allDialogs = [
		...training.online,
		...training.offline,
	].flatMap((t) => t.detailDialogs ?? []);

	const handleDetailClick = useCallback(
		(id: string) => {
			const found = allDialogs.find((d) => d.id === id);
			if (found) setActiveDetail(found);
		},
		[allDialogs],
	);

	const handleView = (src: string, title: string, type: "pdf" | "image") =>
		setViewer({ src, title, type });

	return (
		<Section id="training" title="Training">
			<div className="relative ml-3 border-l-2 border-border pl-6">
				{training.online.map((t, i) => (
					<TrainingItem
						key={`${t.name}-${t.period}`}
						training={t}
						ui={ui}
						category={ui.trainingOnline}
						isLast={
							i === training.online.length - 1 &&
							training.offline.length === 0
						}
						onView={handleView}
						onDetailClick={handleDetailClick}
					/>
				))}
				{training.offline.map((t, i) => (
					<TrainingItem
						key={`${t.name}-${t.period}`}
						training={t}
						ui={ui}
						category={ui.trainingOffline}
						isLast={i === training.offline.length - 1}
						onView={handleView}
						onDetailClick={handleDetailClick}
					/>
				))}
			</div>

			{viewer && (
				<FileViewerDialog
					open
					onClose={() => setViewer(null)}
					src={viewer.src}
					title={viewer.title}
					type={viewer.type}
					closeLabel={ui.closeViewer}
				/>
			)}

			<DetailDialog
				detail={activeDetail}
				onClose={() => setActiveDetail(null)}
				closeLabel={ui.closeViewer}
			/>
		</Section>
	);
}
