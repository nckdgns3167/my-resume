// ==============================
// UI Strings Dictionary (ko/en)
// ==============================

export interface UiStrings {
	// Header / StickyHeader
	resume: string;
	careerYearSuffix: string;
	phone: string;
	email: string;
	profilePhoto: string;

	// ProjectCard / SideProjectsSection meta labels
	client: string;
	period: string;
	role: string;
	scale: string;
	links: string;

	// CopyButton
	copySuccess: (label: string) => string;
	copyFail: string;
	copyAction: (label: string) => string;

	// PrintButton
	saveAsPdf: string;

	// ThemeToggle
	switchToDark: string;
	switchToLight: string;

	// LocaleToggle
	switchToEn: string;
	switchToKo: string;

	// CoachMark
	coachGalleryTitle: string;
	coachGalleryDesc: string;
	coachImageTitle: string;
	coachImageDesc: string;

	// ProjectGallery
	viewGallery: (count: number) => string;
	closeGallery: string;

	// TocSidebar / MobileDrawer
	toc: string;
	openToc: string;
	openMenu: string;
	closeMenu: string;

	// SkillsSection (print-only)
	screenshotWebNotice: string;

	// Footer
	lastUpdated: string;

	// FabStack
	scrollToTop: string;

	// Dates
	present: string;
	inProgress: string;
}

export const uiStringsKo: UiStrings = {
	resume: "Resume",
	careerYearSuffix: "년차",
	phone: "전화번호",
	email: "이메일",
	profilePhoto: "프로필 사진",

	client: "발주처",
	period: "기간",
	role: "역할",
	scale: "규모",
	links: "링크",

	copySuccess: (label) => `${label} 복사 완료`,
	copyFail: "복사에 실패했습니다",
	copyAction: (label) => `${label} 복사`,

	saveAsPdf: "PDF로 저장",

	switchToDark: "다크 모드로 전환",
	switchToLight: "라이트 모드로 전환",

	switchToEn: "Switch to English",
	switchToKo: "한국어로 전환",

	coachGalleryTitle: "갤러리 열기",
	coachGalleryDesc: "클릭하면 프로젝트 스크린샷을 볼 수 있어요.",
	coachImageTitle: "이미지 클릭",
	coachImageDesc: "이미지를 클릭하면 라이트박스로 크게 볼 수 있어요.",

	viewGallery: (count) => `갤러리 보기 (${count}장)`,
	closeGallery: "갤러리 닫기",

	toc: "목차",
	openToc: "목차 열기",
	openMenu: "메뉴 열기",
	closeMenu: "메뉴 닫기",

	screenshotWebNotice:
		"각 프로젝트별 스크린샷은 웹 버전에서 확인하실 수 있습니다.",

	lastUpdated: "Last updated:",

	scrollToTop: "맨 위로",

	present: "현재",
	inProgress: "진행 중",
};

export const uiStringsEn: UiStrings = {
	resume: "Resume",
	careerYearSuffix: "yr",
	phone: "Phone",
	email: "Email",
	profilePhoto: "Profile photo",

	client: "Client",
	period: "Period",
	role: "Role",
	scale: "Scale",
	links: "Links",

	copySuccess: (label) => `${label} copied`,
	copyFail: "Copy failed",
	copyAction: (label) => `Copy ${label}`,

	saveAsPdf: "Save as PDF",

	switchToDark: "Switch to dark mode",
	switchToLight: "Switch to light mode",

	switchToEn: "Switch to English",
	switchToKo: "한국어로 전환",

	coachGalleryTitle: "Open gallery",
	coachGalleryDesc: "Click to view project screenshots.",
	coachImageTitle: "Click image",
	coachImageDesc: "Click an image to view it in the lightbox.",

	viewGallery: (count) => `View gallery (${count})`,
	closeGallery: "Close gallery",

	toc: "Table of Contents",
	openToc: "Open TOC",
	openMenu: "Open menu",
	closeMenu: "Close menu",

	screenshotWebNotice:
		"Screenshots for each project are available in the web version.",

	lastUpdated: "Last updated:",

	scrollToTop: "Scroll to top",

	present: "Present",
	inProgress: "In Progress",
};
