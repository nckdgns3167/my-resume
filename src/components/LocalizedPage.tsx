"use client";

import { useLocale, useUiStrings } from "@/context/LocaleContext";
import { getLocalizedData, profile } from "@/data/locale-data";
import { allTocIds, childToParentMap } from "@/data/toc";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { FabStack } from "@/components/layout/FabStack";
import { IntroSection } from "@/components/sections/IntroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SideProjectsSection } from "@/components/sections/SideProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { TocSidebar } from "@/components/toc/TocSidebar";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { Snackbar } from "@/components/ui/Snackbar";
import { Lightbox } from "@/components/lightbox/Lightbox";
import { CoachMark } from "@/components/ui/CoachMark";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function LocalizedPage() {
	const { locale } = useLocale();
	const ui = useUiStrings();
	const data = getLocalizedData(locale);

	return (
		<div className="min-h-screen bg-bg">
			<ScrollProgressBar />
			<StickyHeader />

			<main className="mx-auto max-w-[860px] px-5 py-12 sm:px-8 md:py-16">
				<div className="flex flex-col gap-16">
					<SectionReveal>
						<Header profile={profile} ui={ui} />
					</SectionReveal>
					<SectionReveal delay={0.1}>
						<IntroSection introduction={data.introduction} />
					</SectionReveal>
					<SectionReveal delay={0.05}>
						<SkillsSection
							skillGroups={data.skillGroups}
							ui={ui}
						/>
					</SectionReveal>
					<SectionReveal>
						<SideProjectsSection
							sideProjects={data.sideProjects}
							ui={ui}
						/>
					</SectionReveal>
					<SectionReveal>
						<ExperienceSection
							companies={data.companies}
							ui={ui}
						/>
					</SectionReveal>
					<SectionReveal>
						<StrengthsSection strengths={data.strengths} />
					</SectionReveal>
					<SectionReveal>
						<Footer ui={ui} />
					</SectionReveal>
				</div>
			</main>

			<TocSidebar
				tocSections={data.tocSections}
				allTocIds={allTocIds}
				childToParentMap={childToParentMap}
			/>
			<MobileDrawer
				tocSections={data.tocSections}
				allTocIds={allTocIds}
				childToParentMap={childToParentMap}
			/>
			<FabStack />
			<Snackbar />
			<Lightbox />
			<CoachMark />
		</div>
	);
}
