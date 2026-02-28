"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
	type ReactNode,
} from "react";
import { uiStringsKo, uiStringsEn, type UiStrings } from "@/data/ui-strings";

export type Locale = "ko" | "en";

interface LocaleContextValue {
	locale: Locale;
	toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
	const [locale, setLocale] = useState<Locale>("ko");

	// Sync with actual DOM state (set by FOUC prevention script in layout.tsx)
	useEffect(() => {
		const current = document.documentElement.dataset.locale as
			| Locale
			| undefined;
		if (current === "ko" || current === "en") {
			setLocale(current);
		}
	}, []);

	const toggleLocale = useCallback(() => {
		setLocale((prev) => {
			const next = prev === "ko" ? "en" : "ko";
			document.documentElement.dataset.locale = next;
			document.documentElement.lang = next;
			localStorage.setItem("locale", next);
			return next;
		});
	}, []);

	return (
		<LocaleContext.Provider value={{ locale, toggleLocale }}>
			{children}
		</LocaleContext.Provider>
	);
}

export function useLocale() {
	const context = useContext(LocaleContext);
	if (!context) {
		throw new Error("useLocale must be used within LocaleProvider");
	}
	return context;
}

export function useUiStrings(): UiStrings {
	const { locale } = useLocale();
	return locale === "ko" ? uiStringsKo : uiStringsEn;
}
