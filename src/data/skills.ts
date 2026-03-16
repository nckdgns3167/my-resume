import type { SkillGroup } from "./types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    skills: ["React", "Next.js", "Vue 3", "Svelte", "TypeScript", "JavaScript (ES6+)", "Vite"],
  },
  {
    title: "Frontend Architecture",
    skills: [
      "디자인 시스템 설계",
      "합성 컴포넌트 패턴",
      "선언적 UI 패턴",
      "모듈 컴포넌트 아키텍처",
      "SSR / SSG 아키텍처",
    ],
  },
  {
    title: "State Management",
    skills: ["Zustand", "Recoil", "Pinia", "Context API + useReducer", "TanStack Query"],
  },
  {
    title: "UI Engineering",
    skills: ["Tailwind CSS", "Emotion", "Vanilla Extract", "Radix UI", "Ant Design", "PrimeVue", "Framer Motion"],
  },
  {
    title: "Backend Integration",
    skills: ["Spring Boot", "Django", "Flask", "Node.js"],
  },
  {
    title: "Database & Search",
    skills: ["MySQL", "Oracle", "SQLite", "Supabase", "Elasticsearch", "MyBatis"],
  },
  {
    title: "DevOps & Deployment",
    skills: ["GitHub Actions", "Jenkins", "Vercel"],
  },
  {
    title: "Development Workflow",
    skills: ["Git", "SVN", "GitHub Flow", "GitHub Issues · Milestones · Kanban"],
  },
  {
    title: "Development Tools",
    skills: ["VSCode", "ESLint", "Biome", "Vitest", "Antigravity"],
  },
  {
    title: "AI Development",
    skills: ["Claude Code", "OpenAI API", "Claude API", "MCP", "Gemini", "GitHub Copilot"],
  },
];
