"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionIds: string[]) {
	const [activeId, setActiveId] = useState<string>("");
	const lockUntil = useRef(0);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (Date.now() < lockUntil.current) return;

				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
					);

				if (visible.length > 0) {
					setActiveId(visible[0].target.id);
				}
			},
			{ rootMargin: "-80px 0px -60% 0px", threshold: 0 },
		);

		const elements = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		for (const el of elements) {
			observer.observe(el);
		}

		// 페이지 끝 도달 시 마지막 보이는 섹션을 active로 설정
		const handleScroll = () => {
			if (Date.now() < lockUntil.current) return;

			const atBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 50;

			if (atBottom) {
				for (let i = sectionIds.length - 1; i >= 0; i--) {
					const el = document.getElementById(sectionIds[i]);
					if (el) {
						const rect = el.getBoundingClientRect();
						if (rect.top < window.innerHeight) {
							setActiveId(sectionIds[i]);
							return;
						}
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			observer.disconnect();
			window.removeEventListener("scroll", handleScroll);
		};
	}, [sectionIds]);

	const forceActive = useCallback((id: string) => {
		setActiveId(id);
		lockUntil.current = Date.now() + 800;
	}, []);

	return { activeId, forceActive };
}
