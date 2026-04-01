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
      "금융 차트 도메인에서 바이비트 수준의 차트 드로잉·기술 지표 모듈과 Claude Code/ChatGPT 스타일의 세션별 대화 관리를 결합한 AI 암호화폐 분석 플랫폼. " +
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
    learningPoints: [
      {
        topic: "커스텀 Canvas 드로잉 시스템 — 바이비트 수준의 20+ 도구 구현",
        paragraphs: [
          "TradingView Lightweight Charts v5의 ISeriesPrimitive 위에 바이비트 수준의 드로잉 도구 시스템을 구축하고 있다. 현재 수평선·추세선·자유곡선·피보나치 4개 도구를 완성했고, 레이·평행 채널·간 도구 등 16+개를 추가할 예정이다.",
          "가장 큰 도전은 Canvas 위에서의 [metric]히트 테스트[/metric](6px 임계값으로 마우스 근처 드로잉 감지)와 [metric]시간/논리 좌표↔스크린 픽셀 간 좌표 변환[/metric]이다. 자유곡선은 원시 마우스 포인트가 지그재그로 보이는 문제를 베지어 곡선 보간으로 해결했고, Factory Pattern으로 도구별 설정을 추상화하여 새 도구 추가 시 설정 파일 하나만 작성하면 되는 구조를 만들었다.",
        ],
      },
      {
        topic: "AI + 통계 하이브리드 예측 — LLM 환각 방지 아키텍처",
        paragraphs: [
          "GPT-4o는 \"비트코인 3일 뒤 가격\"같은 수치 예측에서 환각이 심하다. 금융 QA 벤치마크에서 LLM 단독 정확도가 19%에 불과하다는 연구 결과를 바탕으로, LLM은 [metric]정성적 분석[/metric](\"왜 오를 수 있는가\")만 담당하고 수치 예측은 [metric]통계 모델에 위임[/metric]하는 하이브리드 아키텍처를 설계했다.",
          "[metric]Monte Carlo 시뮬레이션(경로 생성) + Transformer(패턴 인식) + Prophet(계절성)[/metric] 앙상블을 구현할 예정이다. LLM이 10%, 통계 모델이 90%의 예측 가중치를 갖는 구조로, [metric]AI의 강점(설명)과 통계의 강점(수치)을 분리[/metric]하여 신뢰할 수 있는 예측 시스템을 만드는 것이 목표다.",
        ],
      },
      {
        topic: "실시간 WebSocket + 다중 레이어 Canvas 렌더링 최적화",
        paragraphs: [
          "Binance WebSocket으로 실시간 캔들 데이터를 수신하면서, 드로잉 도구·기술 지표·예측 시나리오가 동시에 하나의 Canvas 위에 렌더링된다. 요소가 늘어날수록 렌더링 병목이 발생할 수 있어, 이벤트 디바운싱과 [metric]단일 패스 렌더링[/metric](한 번의 Canvas draw 호출에 모든 드로잉을 처리)으로 성능을 관리하고 있다.",
          "WebSocket 연결 끊김·재연결 시 캔들 데이터 누락, 다중 타임프레임 전환 시 경쟁 상태(race condition) 등 실시간 금융 데이터 특유의 엣지케이스를 하나씩 해결해나가고 있다.",
        ],
      },
      {
        topic: "5개 Zustand 스토어 간 세션 동기화",
        paragraphs: [
          "chart·drawing·analysis·session·onboarding 5개 독립 Zustand 스토어가 각자의 관심사를 담당한다. 가장 복잡한 부분은 세션 전환이다. 사용자가 세션을 바꾸면 차트 심볼·드로잉 목록·대화 히스토리·예측 시나리오를 모든 스토어에서 [metric]원자적으로 복원[/metric]해야 한다.",
          "드로잉 변경 → 세션 스토어 자동 동기화 → localStorage 영속화까지 [metric]단방향 데이터 흐름[/metric]을 설계했고, Undo/Redo 히스토리는 devtools 오염을 방지하기 위해 스토어 외부에서 별도 관리한다. Supabase로 서버 영속화를 도입하면 동기화 복잡도가 한 단계 더 올라갈 예정이다.",
        ],
      },
      {
        topic: "예측 시나리오 시각화 — 미래 가격 경로 애니메이션",
        paragraphs: [
          "AI 분석 결과로 강세·중립·약세 3개 시나리오를 캔들스틱으로 시각화한다. 현재는 와이어프레임 캔들 스타일로 정적 렌더링하고 있지만, 목표는 캔들이 하나씩 자라나는 애니메이션으로 예측 과정을 직관적으로 보여주는 것이다.",
          "각 시나리오를 클릭하면 상세 리포트 모달(7개 섹션)이 열리고, [metric]확률 가중치 기반으로 경로의 투명도를 차등 적용[/metric]하여 신뢰도를 시각적으로 전달하는 것이 최종 목표다.",
        ],
      },
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
