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
