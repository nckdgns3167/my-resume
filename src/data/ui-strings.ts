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

  // Welcome Dialog
  welcomeTitle: string;
  welcomeMessage: string;
  welcomeStartTour: string;
  welcomeSkip: string;
  welcomeDontShow: string;

  // Guide Tour Steps
  tourProfileTitle: string;
  tourProfileDesc: string;
  tourIntroTitle: string;
  tourIntroDesc: string;
  tourSkillsTitle: string;
  tourSkillsDesc: string;
  tourSideProjectsTitle: string;
  tourSideProjectsDesc: string;
  tourExperienceTitle: string;
  tourExperienceDesc: string;
  tourGalleryTitle: string;
  tourGalleryDesc: string;
  tourGalleryOpenTitle: string;
  tourGalleryOpenDesc: string;
  tourStrengthsTitle: string;
  tourStrengthsDesc: string;
  tourFabTitle: string;
  tourFabDesc: string;
  tourTocTitle: string;
  tourTocDesc: string;
  tourMobileDrawerTitle: string;
  tourMobileDrawerDesc: string;

  // ProjectGallery
  viewGallery: (count: number) => string;
  closeGallery: string;

  // TocSidebar / MobileDrawer
  toc: string;
  openToc: string;
  openMenu: string;
  closeMenu: string;

  // Print-only web notice
  printWebNotice: string;

  // Footer
  lastUpdated: string;

  // FabStack
  scrollToTop: string;

  // Certifications
  downloadCertificate: string;

  // Training
  trainingPlaceholder: string;
  downloadPoster: string;
  downloadTrainingCertificate: string;
  trainingOnline: string;
  trainingOffline: string;

  // Military
  downloadMilitaryCertificate: string;

  // FileViewer
  viewFile: string;
  closeViewer: string;

  // LearningPoint
  learningPointBadge: string;
  technicalGoalBadge: string;

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

  welcomeTitle: "환영합니다.",
  welcomeMessage: "정창훈의 경력기술서입니다.\n주요 섹션과 기능을 안내하는 가이드 투어를 제공하고 있어요.",
  welcomeStartTour: "가이드 투어로 둘러보기",
  welcomeSkip: "바로 보기",
  welcomeDontShow: "다시 보지 않기",

  tourProfileTitle: "프로필",
  tourProfileDesc: "이름, 연락처, GitHub/LinkedIn 링크를 확인할 수 있어요. 연락처를 클릭하면 바로 복사돼요.",
  tourIntroTitle: "자기소개",
  tourIntroDesc: "개발 철학과 강점을 요약한 섹션이에요.",
  tourSkillsTitle: "기술 스택",
  tourSkillsDesc: "다뤄온 기술 스택을 확인할 수 있어요.",
  tourSideProjectsTitle: "사이드 프로젝트",
  tourSideProjectsDesc: "개인적으로 진행 중인 프로젝트를 소개해요.",
  tourExperienceTitle: "경력 사항",
  tourExperienceDesc: "회사별 프로젝트 경험과 성과를 확인할 수 있어요.",
  tourGalleryTitle: "프로젝트 갤러리",
  tourGalleryDesc: "각 프로젝트마다 스크린샷 갤러리가 있어요. 클릭하면 열 수 있어요.",
  tourGalleryOpenTitle: "갤러리 미리보기",
  tourGalleryOpenDesc: "이미지를 클릭하면 라이트박스로 크게 볼 수 있어요.",
  tourStrengthsTitle: "핵심 역량",
  tourStrengthsDesc: "핵심 역량을 정리한 섹션이에요.",
  tourFabTitle: "빠른 도구",
  tourFabDesc: "다크모드 전환, 언어 변경, PDF 저장 등을 할 수 있어요.",
  tourTocTitle: "목차 네비게이션",
  tourTocDesc: "우측 목차로 원하는 섹션으로 빠르게 이동할 수 있어요.",
  tourMobileDrawerTitle: "메뉴",
  tourMobileDrawerDesc: "목차 이동, 다크모드, 언어 변경, PDF 저장 등 모든 기능을 이용할 수 있어요.",

  viewGallery: (count) => `갤러리 보기 (${count}장)`,
  closeGallery: "갤러리 닫기",

  toc: "목차",
  openToc: "목차 열기",
  openMenu: "메뉴 열기",
  closeMenu: "메뉴 닫기",

  printWebNotice:
    "각 프로젝트별 러닝 포인트·기술 목표 상세 내용과 스크린샷은 PDF에서 지원되지 않습니다.\n아래 웹 버전에서 확인해 주세요.",

  lastUpdated: "Last updated:",

  scrollToTop: "맨 위로",

  downloadCertificate: "자격증",
  trainingPlaceholder: "준비 중입니다.",
  downloadPoster: "포스터",
  downloadTrainingCertificate: "수료증",
  trainingOnline: "온라인",
  trainingOffline: "오프라인",

  downloadMilitaryCertificate: "증명서",

  viewFile: "뷰어",
  closeViewer: "닫기",

  learningPointBadge: "러닝 포인트",
  technicalGoalBadge: "기술 목표",
  present: "진행 중",
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

  welcomeTitle: "Welcome.",
  welcomeMessage: "This is Changhoon Jung's resume.\nA guided tour of the key sections and features is available.",
  welcomeStartTour: "Take a Guide Tour",
  welcomeSkip: "Go Directly",
  welcomeDontShow: "Don't show again",

  tourProfileTitle: "Profile",
  tourProfileDesc: "View name, contact info, and GitHub/LinkedIn links. Click contacts to copy instantly.",
  tourIntroTitle: "Introduction",
  tourIntroDesc: "A summary of my development philosophy and strengths.",
  tourSkillsTitle: "Skills",
  tourSkillsDesc: "Check out the tech stack I've worked with.",
  tourSideProjectsTitle: "Side Projects",
  tourSideProjectsDesc: "Personal projects I'm currently working on.",
  tourExperienceTitle: "Experience",
  tourExperienceDesc: "Project experiences and achievements by company.",
  tourGalleryTitle: "Project Gallery",
  tourGalleryDesc: "Each project has a screenshot gallery. Click to expand.",
  tourGalleryOpenTitle: "Gallery Preview",
  tourGalleryOpenDesc: "Click any image to view it in the lightbox.",
  tourStrengthsTitle: "Strengths",
  tourStrengthsDesc: "A summary of my core competencies.",
  tourFabTitle: "Quick Tools",
  tourFabDesc: "Toggle dark mode, switch language, save as PDF, and more.",
  tourTocTitle: "Table of Contents",
  tourTocDesc: "Jump to any section quickly using the sidebar navigation.",
  tourMobileDrawerTitle: "Menu",
  tourMobileDrawerDesc: "Access navigation, dark mode, language switch, PDF export, and all features.",

  viewGallery: (count) => `View gallery (${count})`,
  closeGallery: "Close gallery",

  toc: "Table of Contents",
  openToc: "Open TOC",
  openMenu: "Open menu",
  closeMenu: "Close menu",

  printWebNotice:
    "Project screenshots and detailed Learning Points / Technical Goals are not supported in PDF.\nPlease visit the web version below.",

  lastUpdated: "Last updated:",

  scrollToTop: "Scroll to top",

  downloadCertificate: "Download",
  trainingPlaceholder: "Coming soon.",
  downloadPoster: "Poster",
  downloadTrainingCertificate: "Certificate",
  trainingOnline: "Online",
  trainingOffline: "Offline",

  downloadMilitaryCertificate: "Certificate",

  viewFile: "Viewer",
  closeViewer: "Close",

  learningPointBadge: "Learning Point",
  technicalGoalBadge: "Technical Goal",
  present: "Present",
  inProgress: "In Progress",
};
