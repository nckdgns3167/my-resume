import type { Locale } from "@/context/LocaleContext";
import type {
	Certification,
	Company,
	Education,
	Introduction,
	MilitaryService,
	SideProject,
	SkillGroup,
	Strength,
	TocSection,
	Training,
} from "./types";

// Korean (default)
import { certifications as certificationsKo } from "./certifications";
import { education as educationKo } from "./education";
import { companies as companiesKo } from "./experience";
import { introduction as introductionKo } from "./introduction";
import { militaryService as militaryServiceKo } from "./military";
import { sideProjects as sideProjectsKo } from "./side-projects";
import { skillGroups as skillGroupsKo } from "./skills";
import { strengths as strengthsKo } from "./strengths";
import { tocSections as tocSectionsKo } from "./toc";
import { training as trainingKo } from "./training";

// English
import { certifications as certificationsEn } from "./certifications.en";
import { education as educationEn } from "./education.en";
import { companies as companiesEn } from "./experience.en";
import { introduction as introductionEn } from "./introduction.en";
import { militaryService as militaryServiceEn } from "./military.en";
import { sideProjects as sideProjectsEn } from "./side-projects.en";
import { skillGroups as skillGroupsEn } from "./skills.en";
import { strengths as strengthsEn } from "./strengths.en";
import { tocSections as tocSectionsEn } from "./toc.en";
import { training as trainingEn } from "./training.en";

export interface LocalizedData {
	companies: Company[];
	introduction: Introduction;
	sideProjects: SideProject[];
	skillGroups: SkillGroup[];
	strengths: Strength[];
	tocSections: TocSection[];
	education: Education[];
	training: { online: Training[]; offline: Training[] };
	certifications: Certification[];
	militaryService: MilitaryService;
}

const dataMap: Record<Locale, LocalizedData> = {
	ko: {
		companies: companiesKo,
		introduction: introductionKo,
		sideProjects: sideProjectsKo,
		skillGroups: skillGroupsKo,
		strengths: strengthsKo,
		tocSections: tocSectionsKo,
		education: educationKo,
		training: trainingKo,
		certifications: certificationsKo,
		militaryService: militaryServiceKo,
	},
	en: {
		companies: companiesEn,
		introduction: introductionEn,
		sideProjects: sideProjectsEn,
		skillGroups: skillGroupsEn,
		strengths: strengthsEn,
		tocSections: tocSectionsEn,
		education: educationEn,
		training: trainingEn,
		certifications: certificationsEn,
		militaryService: militaryServiceEn,
	},
};

export function getLocalizedData(locale: Locale): LocalizedData {
	return dataMap[locale];
}

// Re-export non-localized data
export { profile } from "./profile";
