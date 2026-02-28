import type { Locale } from "@/context/LocaleContext";
import type {
	Company,
	Introduction,
	SideProject,
	SkillGroup,
	Strength,
	TocSection,
} from "./types";

// Korean (default)
import { companies as companiesKo } from "./experience";
import { introduction as introductionKo } from "./introduction";
import { sideProjects as sideProjectsKo } from "./side-projects";
import { skillGroups as skillGroupsKo } from "./skills";
import { strengths as strengthsKo } from "./strengths";
import { tocSections as tocSectionsKo } from "./toc";

// English
import { companies as companiesEn } from "./experience.en";
import { introduction as introductionEn } from "./introduction.en";
import { sideProjects as sideProjectsEn } from "./side-projects.en";
import { skillGroups as skillGroupsEn } from "./skills.en";
import { strengths as strengthsEn } from "./strengths.en";
import { tocSections as tocSectionsEn } from "./toc.en";

export interface LocalizedData {
	companies: Company[];
	introduction: Introduction;
	sideProjects: SideProject[];
	skillGroups: SkillGroup[];
	strengths: Strength[];
	tocSections: TocSection[];
}

const dataMap: Record<Locale, LocalizedData> = {
	ko: {
		companies: companiesKo,
		introduction: introductionKo,
		sideProjects: sideProjectsKo,
		skillGroups: skillGroupsKo,
		strengths: strengthsKo,
		tocSections: tocSectionsKo,
	},
	en: {
		companies: companiesEn,
		introduction: introductionEn,
		sideProjects: sideProjectsEn,
		skillGroups: skillGroupsEn,
		strengths: strengthsEn,
		tocSections: tocSectionsEn,
	},
};

export function getLocalizedData(locale: Locale): LocalizedData {
	return dataMap[locale];
}

// Re-export non-localized data
export { profile } from "./profile";
