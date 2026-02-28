import type { Strength } from "./types";

export const strengths: Strength[] = [
  {
    title: "기술적 제약 → 아키텍처 혁신",
    description:
      "Node.js·npm·번들러가 없는 폐쇄망 환경에서 IIFE 모듈 시스템과 Promise 기반 ScriptLoader를 설계하여 초기 로딩 50% 단축. 태블릿 전용 터치 제스처(롱프레스·스와이프)와 iOS 위글 UX를 구현하며 '제약 = 불가능'이 아닌 '제약 = 차별화된 설계'로 전환합니다.",
  },
  {
    title: "자기주도적 문제 발굴",
    description:
      "요구사항 이전에 개선점을 먼저 발견합니다. PMS에서 팀 전체에 필요한 공통 컴포넌트 4종을 자체 발굴·단독 개발하고, 스마트온에서 Tab Edit Mode·드래그 삭제 등 차별화 UX를 자발적으로 제안·구현했습니다. LIME-DQM에서는 사내 최초로 Elasticsearch 도입을 주도하여 조회 속도 10배 이상 개선을 이끌어냈습니다.",
  },
  {
    title: "팀 생산성 극대화",
    description:
      "스마트온 프로젝트에서 4명 주니어 개발자가 일관된 방식으로 500+ 화면을 개발할 수 있도록 P-Edit-DataTable 그리드 시스템과 디자인 시스템(PrimeBridge)을 설계. 업무 개발자의 CRUD 구현 코드량 80% 감소, 신규 개발자 온보딩 1일 이내를 달성했습니다.",
  },
  {
    title: "풀스택 관점의 프론트엔드",
    description:
      "Spring Boot·Django·Node.js 백엔드와 Oracle·MySQL·Elasticsearch DB를 직접 설계·구현한 경험으로, 프론트-백엔드 간 최적의 데이터 흐름을 설계합니다. MyBatis 3단계 중첩 ResultMap으로 단일 API 호출에 차트 전체 트리를 반환하는 등, API 설계 단계에서 프론트엔드 성능을 고려합니다.",
  },
  {
    title: "AI 도구 기반 개발 생산성",
    description:
      "Cursor AI·Claude Code·Antigravity 등 AI 코딩 도구를 실무와 사이드 프로젝트에 적극 활용합니다. MCP(Model Context Protocol) 서버 연동으로 AI 에이전트의 작업 범위를 확장하고, CLAUDE.md 등 컨텍스트 문서를 체계적으로 작성하여 AI와의 협업 품질을 높이는 워크플로우를 갖추고 있습니다.",
  },
  {
    title: "1인 풀사이클 개발",
    description:
      "사이드 프로젝트에서 기획·설계·프론트엔드 개발·인프라(Supabase·Vercel)까지 전 과정을 주도합니다. React 19 + Vite 6 + Zustand 아키텍처 설계, Biome·Vitest·GitHub Flow 기반 DX 환경 구축, 해커톤 MVP 제출까지 완수하며 개인 프로젝트에서도 프로덕션 수준의 품질을 추구합니다.",
  },
];
