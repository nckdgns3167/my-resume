import { Fragment, type ReactNode } from "react";

/**
 * Parses [metric]...[/metric] tokens in text and renders them as
 * highlighted spans with accent-primary color.
 */
export function parseRichText(text: string): ReactNode {
	const parts = text.split(/\[metric\](.*?)\[\/metric\]/g);
	if (parts.length === 1) return text;

	return (
		<>
			{parts.map((part, i) =>
				i % 2 === 0 ? (
					<Fragment key={i}>{part}</Fragment>
				) : (
					<span key={i} className="font-semibold text-accent-primary">
						{part}
					</span>
				),
			)}
		</>
	);
}

/**
 * Parses [detail=id]...[/detail] tokens in text and renders them as
 * clickable inline buttons with a subtle underline.
 * Hidden in print mode (underline removed, looks like normal text).
 */
export function parseDetailText(
	text: string,
	onDetailClick: (id: string) => void,
): ReactNode {
	const regex = /\[detail=(\w+)\](.*?)\[\/detail\]/g;
	const parts: ReactNode[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;
	let key = 0;

	match = regex.exec(text);
	while (match !== null) {
		if (match.index > lastIndex) {
			parts.push(
				<Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>,
			);
		}
		const id = match[1];
		const label = match[2];
		parts.push(
			<button
				key={key++}
				type="button"
				onClick={() => onDetailClick(id)}
				className="cursor-pointer border-b border-dashed border-accent-primary/40 pb-px text-inherit transition-colors hover:border-accent-primary hover:text-accent-primary print:border-none"
			>
				{label}
			</button>,
		);
		lastIndex = regex.lastIndex;
		match = regex.exec(text);
	}

	if (lastIndex < text.length) {
		parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
	}

	if (parts.length === 0) return text;
	return <>{parts}</>;
}

/**
 * Parses [tip=id]...[/tip] and [tip=id,metric]...[/tip] tokens in text.
 * Creates hoverable spans that trigger popovers on interaction.
 * Non-tip segments are passed through parseRichText for [metric] handling.
 * Hidden decorations in print mode.
 */
export function parseTipText(
	text: string,
	onTipEnter: (id: string, el: HTMLElement) => void,
	onTipLeave: () => void,
	onTipTap: (id: string, el: HTMLElement) => void,
): ReactNode {
	const regex = /\[tip=([\w-]+)(?:,(metric))?\](.*?)\[\/tip\]/g;
	const parts: ReactNode[] = [];
	let lastIndex = 0;
	let match: RegExpExecArray | null;
	let key = 0;

	match = regex.exec(text);
	while (match !== null) {
		if (match.index > lastIndex) {
			parts.push(
				<Fragment key={key++}>
					{parseRichText(text.slice(lastIndex, match.index))}
				</Fragment>,
			);
		}
		const id = match[1];
		const isMetric = match[2] === "metric";
		const label = match[3];

		parts.push(
			<button
				key={key++}
				type="button"
				onMouseEnter={(e) => onTipEnter(id, e.currentTarget)}
				onMouseLeave={onTipLeave}
				onClick={(e) => onTipTap(id, e.currentTarget)}
				className={`cursor-help border-b border-dotted border-accent-secondary/50 pb-px transition-colors hover:border-accent-secondary hover:text-accent-secondary print:border-none${isMetric ? " font-semibold text-accent-primary" : " text-inherit"}`}
			>
				{label}
			</button>,
		);
		lastIndex = regex.lastIndex;
		match = regex.exec(text);
	}

	if (lastIndex < text.length) {
		parts.push(
			<Fragment key={key++}>
				{parseRichText(text.slice(lastIndex))}
			</Fragment>,
		);
	}

	if (parts.length === 0) return parseRichText(text);
	return <>{parts}</>;
}
