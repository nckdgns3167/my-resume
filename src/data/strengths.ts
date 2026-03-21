import type { Strength } from "./types";

export const strengths: Strength[] = [
  {
    title: "제약 환경에서도 아키텍처로 해결하는 엔지니어",
    description:
      "Node.js·npm·번들러를 사용할 수 없는 폐쇄망 환경에서 [metric]IIFE 기반 모듈 시스템과 Promise 기반 ScriptLoader 아키텍처를 설계[/metric]하여 프론트엔드 의존성을 해결했습니다.\n\n이를 통해 초기 로딩 시간을 [metric]약 50% 단축[/metric]하고, 외부 패키지 없이도 [metric]모듈 단위 설계가 가능한 구조[/metric]를 구축했습니다.\n\n기술 제약을 단순한 한계가 아니라 [metric]설계 차별화의 기회로 전환[/metric]하는 접근을 중요하게 생각합니다.",
  },
  {
    title: "팀 생산성을 시스템으로 개선하는 개발자",
    description:
      "반복적인 화면 개발 문제를 해결하기 위해 [metric]P-Edit-DataTable 기반 그리드 시스템과 디자인 시스템(PrimeBridge)[/metric]을 설계했습니다.\n\n이를 통해 CRUD 화면 개발 시 [metric]중복 코드를 약 80% 감소[/metric]시켰고, 주니어 개발자도 [metric]1일 이내 온보딩이 가능한 개발 환경[/metric]을 만들었습니다.\n\n개별 기능 구현보다 [metric]팀 전체 생산성을 높이는 구조 설계[/metric]에 집중합니다.",
  },
  {
    title: "데이터 흐름까지 이해하는 프론트엔드 개발",
    description:
      "Spring Boot·Django·Node.js 기반 백엔드와 [metric]Oracle·MySQL·Elasticsearch 데이터 구조를 직접 설계하며 개발[/metric]했습니다.\n\n특히 MyBatis 3단계 ResultMap 구조를 설계하여 [metric]단일 API 호출로 계층형 데이터를 처리[/metric]하고 N+1 문제를 방지했습니다.\n\n프론트엔드 구현뿐 아니라 [metric]API 구조와 데이터 흐름까지 고려한 시스템 설계[/metric]를 지향합니다.",
  },
  {
    title: "AI 에이전트를 팀 인프라로 설계하는 개발자",
    description:
      "Claude Code를 단순 코드 생성 도구가 아닌 개발 인프라로 활용합니다. [metric]CLAUDE.md 기반 프로젝트 컨텍스트 설계[/metric], [metric]MCP 서버 연동으로 에이전트 작업 범위 확장[/metric], [metric]커스텀 스킬 등록으로 반복 워크플로우 자동화[/metric] — 이 세 가지를 조합하여 AI가 프로젝트 맥락을 이해한 상태에서 동작하는 환경을 구축합니다.\n\n실제로 스마트온 오프라인 프로젝트에서 [metric]30개 AI 컨텍스트 문서[/metric]를 구축하여 팀원 3명 전원이 Claude Code로 일관된 컨텍스트 위에서 개발할 수 있는 체계를 설계했고, Oracle→SQLite 쿼리 포팅·스키마 변환 등 [metric]128개 테이블 마이그레이션[/metric]을 AI로 자동화했습니다.\n\nAI를 개인 생산성 도구에 머무르지 않고 [metric]팀 전체의 개발 품질과 일관성을 높이는 인프라[/metric]로 확장하는 데 집중합니다.",
  },
  {
    title: "기술 변화에 능동적으로 대응하는 개발자",
    description:
      "Google AI Professional Certificate 취득 등 [metric]업무 외 시간에도 자발적으로 학습[/metric]하며 기술 트렌드를 파악합니다.\n\nClaude Code로 개발 워크플로우를 자동화하고, Gemini·NotebookLM·Google Gems로 [metric]면접 준비·인수인계 문서 관리[/metric]를 체계화하는 등 AI 도구를 [metric]용도와 강점에 맞게 선별 조합[/metric]하여 활용합니다.\n\n기술 변화를 관망하지 않고 [metric]직접 학습하고 실무에 적용하며 역량을 확장[/metric]하는 데 집중합니다.",
  },
];
