import type { SideProject } from "./types";

export const sideProjects: SideProject[] = [
  {
    id: "project-sage",
    name: "차트의 현자, 'ChartSage'",
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
    links: [
      { label: "Live Demo", url: "https://chartsage.vercel.app/" },
      { label: "해커톤 지원", url: "https://hack.primer.kr/rounds/8/ideas/1601" },
    ],
    description:
      `"그려서 물어보고, 시나리오로 답한다." ` +
      "바이비트 수준의 차트 드로잉·기술 지표 모듈과 Claude Code/ChatGPT 스타일의 세션별 대화 관리를 결합한 AI 암호화폐 분석 플랫폼. " +
      "캔들스틱·RSI·MACD 등 차트 도메인을 직접 학습하며 개발하고, WebSocket 경쟁 상태·Canvas 곡선 보간·다중 타임프레임 전환 등 " +
      "실전 엣지케이스를 해결하며 재사용 가능한 모듈로 체계화. " +
      "OpenAI GPT-4o API를 활용해 사용자 드로잉과 시장 데이터를 결합한 AI 분석 파이프라인을 구축하고, " +
      "Freemium 구독 기반 수익모델(Free/Pro)까지 설계하여 실제 비즈니스 가치를 갖춘 프로덕트로 발전시키는 중. " +
      "향후 대시보드·속보·리포트 다운로드 등으로 확장 예정. 기획·설계·프론트엔드·서버리스 백엔드·배포까지 1인 풀사이클 개발.",
    hint: "현재 드로잉 도구 모듈(feature/drawing-tools), 기술 지표 모듈(feature/indicators) 각 기능 브랜치에서 병렬 개발 중",
    achievements: [
      "조코딩 x OpenAI x Primer AI 해커톤 참여 및 MVP 제출 (2026.02)",
      "Feature-based Zustand 설계 — chart·drawing·session·analysis·onboarding 5개 독립 스토어로 관심사 분리, devtools 미들웨어로 상태 추적",
      "TradingView Lightweight Charts v5 커스텀 Primitive 구현 — Canvas 직접 렌더링 + hitTest 기반 드로잉 선택·호버 인터랙션",
      "Factory Pattern 드로잉 도구 시스템 — ToolConfig 인터페이스로 도구별 포인트 요구사항 추상화, 설정 추가만으로 새 도구 확장 가능",
      "기술 지표 모듈 설계 — RSI·MACD·볼린저 밴드 등 기술 지표를 독립 모듈로 구현, 차트 Primitive와 분리된 레이어에서 렌더링",
      "Vercel API Routes + OpenAI GPT-4o 서버리스 백엔드 — 차트 OHLC + 사용자 드로잉 컨텍스트를 프롬프트에 자동 주입하여 AI 분석 정확도 향상",
      "Multi-session 아키텍처 — 세션별 드로잉·대화·예측 상태 격리, 세션 전환 시 스토어 간 단방향 동기화",
      "driver.js 27단계 인터랙티브 온보딩 — 데모 액션 시스템(드로잉 자동 주입·패널 열기·예측 애니메이션) + 스텝 간 상태 복원",
    ],
    gallery: [
      {
        layout: "default",
        items: [
          {
            src: "/images/projects/00-chartsage/실제화면캡처.png",
            alt: "ChartSage MVP 실제 구현 화면",
            caption: "MVP 실제 구현 화면",
            subCaption: "BTC/USDT 차트 + AI 분석 패널",
          },
        ],
      },
      {
        layout: "group",
        items: [
          {
            images: [
              {
                src: "/images/projects/00-chartsage/해커톤 아이디어 지원 페이지 (1).png",
                alt: "해커톤 아이디어 지원 페이지 - 상세설명",
              },
              {
                src: "/images/projects/00-chartsage/해커톤 아이디어 지원 페이지 (2).png",
                alt: "해커톤 아이디어 지원 페이지 - 비즈니스 모델 캔버스",
              },
            ],
            caption: "조코딩 x OpenAI x Primer AI 해커톤 지원 페이지",
            subCaption: "상세설명 · 비즈니스 모델 캔버스",
          },
        ],
      },
    ],
  },
];
