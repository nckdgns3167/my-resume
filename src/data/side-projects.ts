import type { SideProject } from "./types";

export const sideProjects: SideProject[] = [
  {
    id: "project-sage",
    name: "(가제) Project 'Sage'",
    client: "1인 개발",
    period: "2025.02 ~ 진행 중",
    progressTag: "MVP",
    role: "기획 · 설계 · 프론트엔드 개발 · 인프라 전체",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "Tailwind CSS",
      "Radix UI",
      "TradingView Charts",
      "OpenAI",
      "Supabase",
      "Binance API",
      "Vercel",
    ],
    description:
      "React 19 + Vite 6 기반 풀스택 웹 플랫폼. 기획부터 설계·개발·배포까지 1인 풀사이클 개발.",
    notice:
      "현재 개발 진행 중인 개인 프로젝트로, MVP 배포 후 상세 내용을 공개할 예정입니다.",
    hint: "프로젝트 주제 관련 키워드: AI 대화형 분석, 실시간 시나리오 시각화, 데이터 기반 의사결정",
    achievements: [
      "조코딩 x OpenAI x Primer AI 해커톤 참여 및 MVP 제출 (2026.02)",
    ],
  },
];
