"use client";

import {
	createContext,
	useContext,
	useEffect,
	useRef,
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
	const [locale, setLocale] = useState<Locale>("en");
	const localeRef = useRef<Locale>("en");

	// On mount: restore persisted locale from localStorage
	useEffect(() => {
		try {
			const stored = localStorage.getItem("locale");
			if (stored === "ko" || stored === "en") {
				localeRef.current = stored;
				setLocale(stored);
				document.documentElement.dataset.locale = stored;
				document.documentElement.lang = stored;
			}
		} catch {}
	}, []);

	const toggleLocale = useCallback(() => {
		const next: Locale = localeRef.current === "ko" ? "en" : "ko";
		localeRef.current = next;
		setLocale(next);
		document.documentElement.dataset.locale = next;
		document.documentElement.lang = next;
		try {
			localStorage.setItem("locale", next);
		} catch {}
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
