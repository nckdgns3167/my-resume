import { Section } from "@/components/ui/Section";
import type { Training } from "@/data/types";

interface TrainingSectionProps {
  training: Training[];
}

export function TrainingSection({ training }: TrainingSectionProps) {
  return (
    <Section id="training" title="Training">
      <div className="relative ml-3 border-l-2 border-border pl-6">
        {training.map((t, i) => (
          <div
            key={`${t.name}-${t.period}`}
            className={`relative ${i < training.length - 1 ? "pb-8" : ""}`}
          >
            {/* Timeline dot */}
            <div className="absolute -left-7.75 top-1 h-3 w-3 rounded-full border-2 border-accent-primary bg-bg" />

            <div className="flex flex-col gap-0.5">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-base font-semibold text-text">{t.name}</h3>
                <span className="text-sm text-text-secondary">{t.institution}</span>
              </div>
              <p className="text-sm text-text-secondary">{t.period}</p>
              {t.details && t.details.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {t.details.map((detail) => (
                    <li
                      key={detail.slice(0, 40)}
                      className="text-sm leading-6 text-text-secondary before:mr-2 before:text-border before:content-['-']"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              {t.posterFileName && (
                <a
                  href={`/images/trainings/${t.posterFileName}`}
                  download
                  className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-accent-primary transition-colors hover:bg-bg-secondary print:hidden"
                >
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
                  포스터
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
