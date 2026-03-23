import type { Strength } from "./types";

export const strengths: Strength[] = [
	{
		title: "제약을 설계 기회로 전환하는 아키텍처 엔지니어",
		description:
			"폐쇄망에서 [metric]500+ 업무 화면[/metric]을 운영하는 태블릿 시스템의 프론트엔드 아키텍처를 설계했습니다. npm/번들러 없이 [tip=iife]IIFE 기반 모듈 스코핑[/tip]과 [tip=scriptloader]Promise 기반 ScriptLoader[/tip]로 화면별 JS를 동적 로드하는 [tip=islands,metric]Islands Architecture[/tip]를 구현하여, 초기 로딩 시간을 [metric]약 50% 단축[/metric]했습니다.\n\n이 아키텍처를 Android 오프라인 앱으로 확장하여, 내장 [tip=nanohttp]LocalWebServer(NanoHTTPD)[/tip] 위에서 동일한 웹 프론트엔드를 구동하고 [tip=oracle-sqlite,metric]128개 테이블[/tip]의 Oracle→SQLite 자동 변환 레이어를 설계했습니다. 하나의 아키텍처가 웹과 앱 두 플랫폼을 관통하는 [metric]재사용 가능한 설계 자산[/metric]으로 확장된 사례입니다.\n\n[tip=meta-routing]메타데이터 기반 자동 라우팅[/tip]으로 새 메뉴 추가 시 [metric]프론트엔드 코드 수정 제로[/metric]를 달성하여, 제약 환경에서도 확장성을 확보하는 아키텍처를 설계합니다.",
		tipPopovers: [
			{
				id: "iife",
				title: "IIFE 모듈 패턴",
				content:
					"Immediately Invoked Function Expression — npm/webpack 없는 폐쇄망에서 전역 스코프 오염을 방지하기 위해 각 화면의 JS를 즉시실행함수로 격리한 패턴. (function() { ... })() 형태로 모듈 스코프를 생성합니다.",
			},
			{
				id: "scriptloader",
				title: "Promise 기반 ScriptLoader",
				content:
					"화면 진입 시 해당 JS 파일만 동적으로 <script> 태그를 삽입하고, 로드 완료를 Promise로 추적하는 커스텀 로더. 의존성 순서를 보장하면서 필요한 시점에만 코드를 가져옵니다.",
			},
			{
				id: "islands",
				title: "Islands Architecture",
				content:
					"페이지 전체를 SPA로 구성하지 않고, 셸(mainPage.html)이 탭을 관리하면서 각 업무 화면을 독립적인 Vue 앱 인스턴스('섬')로 마운트하는 아키텍처. Astro 프레임워크의 Islands 개념과 유사합니다.",
			},
			{
				id: "nanohttp",
				title: "NanoHTTPD 내장 웹서버",
				content:
					"Android 앱 내부에서 구동되는 경량 Java HTTP 서버. 인터넷/VPN 없이도 WebView가 localhost로 접속하여 기존 웹 프론트엔드를 그대로 실행할 수 있게 합니다.",
			},
			{
				id: "oracle-sqlite",
				title: "Oracle→SQLite 자동 변환",
				content:
					"Oracle DDL을 SQLite 호환 DDL로 자동 변환하는 레이어. 데이터 타입 매핑(NUMBER→REAL, VARCHAR2→TEXT 등), 시퀀스→AUTOINCREMENT 변환, 트리거 생성까지 AI로 자동화했습니다.",
			},
			{
				id: "meta-routing",
				title: "메타데이터 기반 자동 라우팅",
				content:
					"DB 메뉴 테이블(MENU_INFO)에서 화면 ID·JS 경로·권한 정보를 읽어, 프론트엔드 코드 수정 없이 메뉴를 동적으로 생성하는 구조. 새 화면 추가 시 DB에 메뉴 레코드만 INSERT하면 자동 반영됩니다.",
			},
		],
	},
	{
		title: "팀 전체의 개발 속도를 구조로 끌어올리는 엔지니어",
		description:
			"[metric]500+ 업무 화면[/metric]을 4명의 주니어 개발자가 일관되게 개발할 수 있는 구조를 설계했습니다. Vue UI 프레임워크(PrimeVue)를 프로젝트에 맞게 래핑한 디자인 시스템 PrimeBridge를 [tip=primebridge,metric]DI 컨테이너 패턴[/tip]으로 설계하여, 팀 전체가 동일한 컴포넌트·스타일·동작 규칙 위에서 개발하는 환경을 만들었습니다.\n\n핵심인 [tip=pedit]P-Edit-DataTable[/tip]은 행 단위 [tip=dirty-tracking]Dirty Tracking[/tip]·필수값 검증·저장 페이로드 자동 분류를 내장하여, CRUD 개발 시 [metric]중복 코드를 약 80% 감소[/metric]시키고 주니어 개발자 [metric]온보딩 1일 이내[/metric]를 달성했습니다.\n\n탭 관리 시스템도 [tip=deferred-load]지연 로딩[/tip]·검색조건 자동 복원·동시성 가드를 내장한 [tip=tab-arch,metric]다계층 아키텍처[/tip]로 설계하여, 개별 기능보다 [metric]팀 전체 생산성을 높이는 구조[/metric]에 집중합니다.",
		tipPopovers: [
			{
				id: "primebridge",
				title: "PrimeBridge — DI 컨테이너 패턴",
				content:
					"공유 컨텍스트(App._PrimeBridgeCtx)에 8개 위성 모듈(Core, Directives, Inputs, Datepicker, Dialog, DataTable, EditGrid, InnerTabs)이 우선순위 기반으로 자동 초기화되는 플러그인 시스템. 각 Islands 앱에 동일한 UI 생태계를 일괄 주입합니다.",
			},
			{
				id: "pedit",
				title: "P-Edit-DataTable",
				content:
					"인라인 편집 전용 데이터 그리드 컴포넌트. 행 추가/수정/삭제 상태를 자동 추적하고, 저장 시 변경된 행만 상태별(INSERT/UPDATE/DELETE)로 분류하여 서버에 전송합니다.",
			},
			{
				id: "dirty-tracking",
				title: "Dirty Tracking",
				content:
					"셀 단위로 원본값과 현재값을 비교하여 변경 여부를 감지하는 메커니즘. 수정된 셀은 시각적으로 강조되고, 행 단위 CRUD 상태(C/U/D)가 자동으로 갱신됩니다.",
			},
			{
				id: "deferred-load",
				title: "Deferred Loading",
				content:
					"비활성 탭은 메타데이터(화면 ID, 검색조건)만 유지하고 DOM/컴포넌트는 언마운트. 탭 활성화 시 ContentPanel이 Vue 앱을 다시 마운트하여 메모리를 절약합니다.",
			},
			{
				id: "tab-arch",
				title: "탭 관리 6계층 아키텍처",
				content:
					"Template → State Management → Orchestration → Component Mounting → Server Sync → Styling 6계층으로 분리. 각 계층이 독립적으로 동작하여 탭 전환·드래그 정렬·서버 동기화를 구조적으로 처리합니다.",
			},
		],
	},
	{
		title: "프론트엔드에서 DB까지, 전 계층을 설계하는 엔지니어",
		description:
			"프론트엔드 전문이지만, 필요한 경우 [tip=fullstack,metric]Controller→Service→Mapper→SQL 전 계층[/tip]을 직접 설계하고 구현합니다. 스마트공장 PMS에서는 Spring Boot + MyBatis 백엔드를, AI 신약개발 플랫폼에서는 [tip=django-flask,metric]Django + Flask 이중 구조[/tip]와 Python multiprocessing 병렬 처리 파이프라인을 설계했습니다.\n\nAPI 설계에서 N+1 문제를 구조적으로 방지합니다. MyBatis [tip=resultmap,metric]3단계 ResultMap[/tip](중첩 collection)으로 단일 호출에 트리 데이터를 반환하는 구조를 설계했고, LIME-DQM에서는 Elasticsearch 인덱스 분리와 [tip=es-paging]search_after 딥 페이징[/tip]으로 [metric]100만 건 이상의 품질 데이터를 수 초 내로 조회[/metric]합니다.\n\nOracle·MySQL·SQLite·Elasticsearch 등 [tip=four-db,metric]4종 데이터베이스[/tip] 실무 경험을 바탕으로, 프론트엔드가 소비하기 최적인 데이터 구조를 API 설계 단계에서부터 고려합니다.",
		tipPopovers: [
			{
				id: "fullstack",
				title: "Spring MVC 풀스택 레이어",
				content:
					"Controller(HTTP 엔드포인트) → Service(비즈니스 로직) → Mapper(MyBatis SQL 매핑) → SQL(Oracle/MySQL 쿼리)로 이어지는 4계층 구조를 프론트엔드 개발자로서 직접 설계·구현한 경험입니다.",
			},
			{
				id: "django-flask",
				title: "Django + Flask 이중 프레임워크",
				content:
					"Django가 웹 UI와 프로젝트 관리를 담당하고, Flask가 15개 이상의 AI 분석 모듈을 REST API로 서빙하는 분리 아키텍처. Python multiprocessing으로 복수 분석을 병렬 실행합니다.",
			},
			{
				id: "resultmap",
				title: "MyBatis 3단계 ResultMap",
				content:
					"중첩 collection 매핑(예: SectionDTO → BandDTO → DetailDTO)으로 JOIN 결과를 자동으로 트리 구조 객체에 매핑. 단일 SQL 호출로 계층형 데이터를 반환하여 N+1 문제를 원천 방지합니다.",
			},
			{
				id: "es-paging",
				title: "Elasticsearch search_after",
				content:
					"기존 from+size 페이징은 10,000건 이상에서 성능이 급격히 저하됩니다. search_after는 이전 페이지의 마지막 정렬값을 기준으로 다음 페이지를 조회하여 대용량 딥 페이징을 효율적으로 처리합니다.",
			},
			{
				id: "four-db",
				title: "4종 데이터베이스 실무 경험",
				content:
					"Oracle(스마트온·PMS 메인 DB), MySQL(PMS 일부), SQLite(오프라인 앱 로컬 DB), Elasticsearch(LIME-DQM 품질 데이터 검색·집계) — 각 DB의 특성에 맞는 스키마 설계와 쿼리 최적화 경험입니다.",
			},
		],
	},
	{
		title: "AI 에이전트를 설계·운용하는 개발 인프라 엔지니어",
		description:
			"Claude Code를 개인 코드 생성 도구가 아닌 [metric]팀 개발 인프라[/metric]로 운용합니다. [tip=claude-md]CLAUDE.md[/tip] 기반 프로젝트 컨텍스트 설계, [tip=mcp]MCP 서버 연동[/tip](DB 스키마 조회·SVN 커밋 자동화 등)으로 에이전트 작업 범위 확장, 커스텀 스킬 등록으로 [metric]반복 워크플로우 자동화[/metric] — 이 세 가지를 조합하여 AI가 프로젝트 맥락 위에서 동작하는 환경을 구축합니다.\n\n스마트온 오프라인 프로젝트에서 아키텍처·포팅 가이드·코딩 컨벤션 등 [tip=ai-context,metric]30+개 AI 컨텍스트 문서[/tip]를 체계적으로 구축하여 팀원 3명 전원이 Claude Code로 일관된 컨텍스트 위에서 개발. Oracle→SQLite 쿼리 포팅·스키마 변환 등 [tip=table-migration,metric]128개 테이블 마이그레이션[/tip]을 AI로 자동화하고, [tip=api-boilerplate,metric]150+ REST API[/tip] 엔드포인트의 보일러플레이트를 Gradle 플러그인 + AI로 생성했습니다.\n\n업무 성격에 따라 AI 도구를 선별합니다: 코드 생성·리팩토링은 Claude Code, 기술 문서 분석·인수인계는 NotebookLM, 도메인 Q&A는 Google Gems — [tip=tool-select,metric]용도별 최적 도구를 조합[/tip]하여 개발 외 영역까지 AI 활용을 체계화합니다.",
		tipPopovers: [
			{
				id: "claude-md",
				title: "CLAUDE.md 프로젝트 컨텍스트",
				content:
					"프로젝트 구조·코딩 컨벤션·기술 스택·Git 워크플로우 등을 정리한 마크다운 문서. Claude Code가 대화 시작 시 자동으로 읽어 프로젝트 맥락을 이해한 상태에서 작업합니다.",
			},
			{
				id: "mcp",
				title: "MCP (Model Context Protocol)",
				content:
					"AI 에이전트가 외부 도구(DB, 파일 시스템, API 등)에 접근할 수 있게 하는 프로토콜. 스마트온에서는 Oracle DB 스키마 조회, SVN 커밋·이력 확인 등을 MCP 서버로 연동하여 에이전트의 작업 범위를 확장했습니다.",
			},
			{
				id: "ai-context",
				title: "AI 컨텍스트 문서 체계",
				content:
					"아키텍처 설계서, Oracle→SQLite 포팅 가이드, 코딩 컨벤션, API 설계 규칙 등 32개 마크다운 문서를 체계적으로 구축. 팀원 누구나 Claude Code 실행 시 동일한 프로젝트 맥락을 공유합니다.",
			},
			{
				id: "table-migration",
				title: "AI 기반 128 테이블 마이그레이션",
				content:
					"Oracle DDL→SQLite DDL 변환, 데이터 타입 매핑, 인덱스·시퀀스·트리거 생성을 AI 컨텍스트 문서 기반으로 자동화. 수작업 대비 대부분의 마이그레이션을 자동 처리했습니다.",
			},
			{
				id: "api-boilerplate",
				title: "150+ REST API 보일러플레이트 생성",
				content:
					"Gradle 플러그인이 테이블 스키마를 읽어 Controller/Service 템플릿을 자동 생성하고, AI가 비즈니스 로직을 채우는 2단계 파이프라인. 150개 이상의 API 엔드포인트를 빠르게 구축했습니다.",
			},
			{
				id: "tool-select",
				title: "AI 도구 선별 전략",
				content:
					"Claude Code는 코드 생성·리팩토링·디버깅에 최적, NotebookLM은 긴 기술 문서 요약·인수인계 자료 정리에 강점, Google Gems는 커스텀 페르소나 기반 도메인 Q&A에 활용. 각 도구의 강점에 맞게 조합합니다.",
			},
		],
	},
	{
		title: "요구사항 너머의 UX를 설계하는 엔지니어",
		description:
			"SI 환경에서 주어진 요구사항만 구현하지 않습니다. 스마트온 2.0에서 탭의 오터치·되돌리기 불가 문제를 고객 요구 이전에 식별하고, [tip=tab-edit,metric]iOS 홈 화면 앱 정리 UX에서 착안한 Tab Edit Mode[/tip]를 자발적으로 제안·구현했습니다. 롱프레스 시간 분기(빠른 탭→전환, 롱프레스+드래그→정렬, 롱프레스+릴리스→편집모드)를 [tip=threshold,metric]500ms 임계값[/tip]으로 정밀 설계했습니다.\n\n입사 첫 프로젝트(LabelOn)부터 SSR 환경의 새로고침 문제에 의문을 품고 [tip=labelon-ajax]AJAX 부분 갱신 패턴[/tip]을 스스로 학습·적용했고, 스마트공장 PMS에서는 협약 변경 시 [tip=change-vis,metric]연노랑 배경 강조 + 원본값 팝오버[/tip]를 띄우는 공간 효율적 전후 비교 UX를 독자 설계했습니다.\n\n동료들이 [metric]'솔루션을 개발해야 한다'[/metric]고 평가할 만큼, 사용자 인지 부하를 줄이는 데 집착하며 요구사항 이면의 실제 문제를 찾아 해결합니다.",
		tipPopovers: [
			{
				id: "tab-edit",
				title: "Tab Edit Mode",
				content:
					"iOS 홈 화면에서 앱 아이콘을 롱프레스하면 위글 모드로 진입하는 UX에서 착안. 탭 바를 롱프레스하면 편집 모드로 전환되어, 탭 드래그 정렬·삭제 마킹·일괄 적용/롤백이 가능한 In-place Edit Layout입니다.",
			},
			{
				id: "threshold",
				title: "500ms 롱프레스 임계값",
				content:
					"빠른 탭(300ms 이내)은 탭 전환, 500ms 이상 누르면 편집 모드 진입으로 분기. 드래그 시작 감지와 결합하여 '롱프레스+드래그→정렬', '롱프레스+릴리스→편집모드' 3가지 제스처를 하나의 터치 이벤트로 처리합니다.",
			},
			{
				id: "labelon-ajax",
				title: "LabelOn AJAX 부분 갱신",
				content:
					"Node.js(Express) + EJS 기반 SSR 환경에서 매번 전체 페이지를 새로고침하는 문제를 식별. jQuery AJAX로 테이블 영역만 부분 갱신하는 패턴을 자체 학습·적용하여 UX를 개선한 입사 첫 프로젝트의 자발적 개선 사례입니다.",
			},
			{
				id: "change-vis",
				title: "협약변경 시각화 UX",
				content:
					"기존 협약과 변경 협약을 나란히 보여주면 화면 공간을 많이 차지하므로, 변경된 셀만 연노랑 배경으로 강조하고 hover 시 원본값을 팝오버로 표시하는 공간 효율적 비교 UX를 독자 설계했습니다.",
			},
		],
	},
];
