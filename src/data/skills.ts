import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue 3", "TypeScript", "JavaScript ES6+", "Vite"],
  },
  {
    title: "State Management",
    skills: ["Zustand", "Pinia", "TanStack Query", "Context API + useReducer", "Recoil"],
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Framer Motion", "Emotion", "PrimeVue", "Radix UI", "Ant Design"],
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "합성 컴포넌트 패턴",
      "선언적 코드 스타일",
      "디자인 시스템 설계",
      "SSR / SSG (App Router)",
      "IIFE 모듈 시스템",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Spring Boot",
      "Django",
      "Flask",
      "Node.js",
      "Supabase",
      "Oracle",
      "MySQL",
      "Elasticsearch",
      "MyBatis",
    ],
  },
  {
    title: "DevTools & Infra",
    skills: [
      "Git",
      "Vercel",
      "ESLint",
      "Biome",
      "Vitest",
      "VSCode",
      "Cursor AI",
      "Claude Code",
      "Antigravity",
      "GitHub Flow",
    ],
  },
];
