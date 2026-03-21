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
