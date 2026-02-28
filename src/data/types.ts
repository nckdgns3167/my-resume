// ==============================
// Data Layer Type Definitions
// ==============================

// --- Profile ---
export interface CareerPeriod {
  start: string; // "YYYY-MM" format
  end: string | null; // null = 현재 재직 중
}

export interface TocChild {
  id: string;
  label: string;
}

export interface TocSection {
  id: string;
  label: string;
  children?: TocChild[];
}

export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  careerStartDate: string; // "2019-08" format (첫 경력 시작일, 메타데이터용)
  careerPeriods: CareerPeriod[]; // 실제 근무 기간 목록 (공백 제외)
  phone: string;
  phoneRaw: string;
  email: string;
  github: string;
  linkedin: string;
  photo: string;
  thumbPhoto: string;
}

// --- Introduction ---
export interface Introduction {
  paragraphs: string[];
}

// --- Skills ---
export interface SkillGroup {
  title: string;
  skills: string[];
}

// --- Side Projects ---
export interface SideProjectLink {
  label: string;
  url: string;
}

export interface SideProject {
  id: string;
  name: string;
  client: string;
  period: string;
  progressTag?: string;
  role: string;
  stack: string[];
  description: string;
  links?: SideProjectLink[];
  notice?: string;
  hint?: string;
  achievements: string[];
  gallery?: GalleryGrid[];
}

// --- Experience ---
export interface AchievementDetail {
  title: string;
  description?: string;
  items: string[];
  metrics?: string[];
}

export type Achievement = AchievementDetail | string;

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  subCaption?: string;
}

export interface GalleryImageGroup {
  images: { src: string; alt: string }[];
  caption: string;
  subCaption?: string;
}

export type GalleryItem = GalleryImage | GalleryImageGroup;

export interface GalleryGrid {
  layout: "default" | "portrait" | "group";
  items: GalleryItem[];
}

export interface HighlightBox {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  period: string;
  role: string;
  stack: string[];
  description?: string;
  achievements: Achievement[];
  highlightBox?: HighlightBox;
  gallery: GalleryGrid[];
}

export interface Company {
  name: string;
  period: string;
  description: string;
  projects: Project[];
}

// --- Strengths ---
export interface Strength {
  title: string;
  description: string;
}

// --- Type Guards ---
export function isGalleryImageGroup(item: GalleryItem): item is GalleryImageGroup {
  return "images" in item;
}

export function isAchievementDetail(item: Achievement): item is AchievementDetail {
  return typeof item !== "string";
}
