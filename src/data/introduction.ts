import type { Introduction } from "./types";

export const introduction: Introduction = {
	quote: "화면 앞의 경험도, 화면 뒤의 구조도 타협하지 않는 개발자",
	paragraphs: [
		"사용자가 매일 마주하는 화면이기에, '이 정도면 됐다'에서 멈추지 않습니다. 눈에 보이는 경험도, 눈에 보이지 않는 코드 구조도 같은 무게로 다룹니다. 주어진 환경에서 안 되면 될 때까지, [metric]타협 없이 최선을 다하는 것[/metric]이 제가 개발하는 방식입니다.",
		"SI 환경에서 500+ 화면의 [metric]프론트엔드 아키텍처를 단독 설계[/metric]하고, 4명의 주니어 개발자가 일관된 품질로 개발할 수 있는 구조를 만들어왔습니다. 화면 구조부터 사용자 흐름, 필요하면 API와 DB 설계까지, [metric]전 계층을 관통하는 설계[/metric]를 지향합니다.",
		"사소해 보이는 UX 디테일에 [metric]집착[/metric]합니다. Dirty Tracking·자동 라벨링·저장 페이로드 분류를 내장한 인라인 편집 그리드를 설계하여 [metric]CRUD 코드를 80% 줄였고[/metric], iOS 홈 화면 UX에서 착안한 탭 편집 모드를 고객 요구 이전에 [metric]자발적으로 제안·구현[/metric]했습니다. 정보가 많은 화면에서 필요한 정보를 편하게 보여주되 과하지 않게, 그 균형을 찾을 때까지 다듬습니다.",
		"실무에서는 Claude Code로 [metric]30+개 AI 컨텍스트 문서[/metric]를 구축하여 팀 전원이 AI 기반 개발 워크플로우 위에서 일하는 환경을 만들었습니다. npm조차 쓸 수 없던 폐쇄망에서 모듈 시스템을 직접 설계했고, 사이드 프로젝트(ChartSage)에서는 React·Zustand·Vite를 자연스럽게 익혀 적용했습니다. 어떤 환경에서든 [metric]더 나은 경험과 더 나은 구조[/metric]를 고민하며, 그 결과를 [metric]팀과 제품에 녹여내는 것[/metric]에 집중합니다.",
	],
};
