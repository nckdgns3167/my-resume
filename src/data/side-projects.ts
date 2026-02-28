import type { SideProject } from "./types";

export const sideProjects: SideProject[] = [
  {
    id: "project-sage",
    name: "ChartSage",
    client: "1인 개발",
    period: "2025.02 ~ 진행 중",
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
      "Binance API",
      "Vercel",
      "driver.js",
    ],
    description:
      `"그려서 물어보고, 시나리오로 답한다." ` +
      "바이비트 수준의 차트 드로잉·기술 지표 모듈과 Claude Code/ChatGPT 스타일의 세션별 대화 관리를 결합한 AI 암호화폐 분석 플랫폼. " +
      "사용자가 차트 위에 직접 드로잉하고 AI와 함께 실시간으로 분석하며 투자 인사이트를 얻을 수 있으며, " +
      "향후 대시보드·속보·리포트 다운로드 등으로 확장 예정. 기획·설계·프론트엔드·서버리스 백엔드·배포까지 1인 풀사이클 개발.",
    achievements: [
      "조코딩 x OpenAI x Primer AI 해커톤 참여 및 MVP 제출 (2026.02)",
      "Feature-based Zustand 설계 — chart·drawing·session·analysis·onboarding 5개 독립 스토어로 관심사 분리, devtools 미들웨어로 상태 추적",
      "TradingView Lightweight Charts v5 커스텀 Primitive 구현 — Canvas 직접 렌더링 + hitTest 기반 드로잉 선택·호버 인터랙션",
      "Factory Pattern 드로잉 도구 시스템 — ToolConfig 인터페이스로 도구별 포인트 요구사항 추상화, 설정 추가만으로 새 도구 확장 가능",
      "Vercel API Routes + OpenAI GPT-4o 서버리스 백엔드 — 차트 OHLC + 사용자 드로잉 컨텍스트를 프롬프트에 자동 주입하여 AI 분석 정확도 향상",
      "Multi-session 아키텍처 — 세션별 드로잉·대화·예측 상태 격리, 세션 전환 시 스토어 간 단방향 동기화",
      "driver.js 27단계 인터랙티브 온보딩 — 데모 액션 시스템(드로잉 자동 주입·패널 열기·예측 애니메이션) + 스텝 간 상태 복원",
    ],
  },
];
