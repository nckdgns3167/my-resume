// ==============================
// Data Layer Type Definitions
// ==============================

// --- Profile ---
export interface Profile {
  name: string;
  title: string;
  careerStartDate: string; // "2019-08" format
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
export interface SideProject {
  name: string;
  client: string;
  period: string;
  progressTag?: string;
  role: string;
  stack: string[];
  description: string;
  notice?: string;
  hint?: string;
  achievements: string[];
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
export function isGalleryImageGroup(
  item: GalleryItem,
): item is GalleryImageGroup {
  return "images" in item;
}

export function isAchievementDetail(
  item: Achievement,
): item is AchievementDetail {
  return typeof item !== "string";
}
