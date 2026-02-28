import type { Company } from "./types";

const IMG = "/images/projects";

export const companies: Company[] = [
  // ============================================================
  // 유클리드소프트
  // ============================================================
  {
    name: "유클리드소프트",
    period: "2020.09 ~ 현재",
    description: "공공·기업 시스템 개발 SI 기업 · 프론트엔드 개발",
    projects: [
      // ----------------------------------------------------------
      // 01. 스마트온 2.0
      // ----------------------------------------------------------
      {
        name: "스마트온 2.0 구축 — 가스 현장검사원 태블릿 업무 시스템",
        client: "한국가스안전공사(KGS)",
        period: "2025.03 ~ 2026.01",
        role: "프론트엔드 아키텍트 / 기술 리드 (4명 주니어 리딩)",
        stack: [
          "Vue 3",
          "PrimeVue 4.x",
          "Pinia",
          "Tailwind CSS 4",
          "Sortable.js",
          "Swiper.js",
          "Hammer.js",
          "Driver.js",
        ],
        description:
          "가스 현장검사원의 태블릿 업무 시스템을 전면 고도화하는 프로젝트. 기존 jQuery + Vue 1.x + jqGrid 레거시를 Vue 3 + PrimeVue 기반 현대적 아키텍처로 완전 재구축. 관공서 폐쇄망(Node.js 설치 불가, 외부 CDN 접근 차단) 환경에서 [metric]500+ 업무 화면[/metric]을 운영하는 태블릿 시스템.",
        achievements: [
          {
            title: "폐쇄망 프론트엔드 아키텍처 설계",
            items: [
              "Node.js·npm·Webpack/Vite 사용이 불가한 폐쇄망에서 IIFE 패턴 기반 모듈 시스템을 설계하여 private 스코프 확보 및 전역 오염 방지",
              "라이브러리를 UMD 빌드로 반입하고 의존성 그래프를 설계하여 로딩 순서 관리",
              "Promise 기반 ScriptLoader로 필요 시점에만 JS 파일을 동적 로드하여 초기 로딩 시간 [metric]50% 단축[/metric]",
            ],
          },
          {
            title: "메타데이터 기반 자동 라우팅 메뉴 시스템",
            items: [
              "서버에서 메뉴 메타데이터(menuId, compName, script 경로 등)를 수신하여 MenuRegistry가 캐싱하고, ScriptLoader가 동적 로드 후 ContentPanel이 Vue 컴포넌트를 자동 마운트하는 구조 설계",
              "새 메뉴 추가 시 프론트엔드 코드 수정 제로, 개발 시간 [metric]80% 감소[/metric]",
            ],
          },
          {
            title: "인라인 편집 그리드(P-Edit-DataTable) 독자 설계",
            items: [
              "PrimeVue DataTable 기반으로, 유료 솔루션(AG Grid 등) 없이 자체 설계한 3계층 아키텍처",
              "useEditGridFactory: 행 상태 머신 + 셀 단위 Dirty Tracking + 필수값·중복값 검증 + 일괄 저장 페이로드 자동 분류",
              "p-edit-datatable: VNode 변환 + 상태별 시각 피드백 + 변경 내역 팝오버",
              "p-edit-column: 선언적 required/unique/disabled prop",
              "데이터 편집 워크플로우 [metric]4단계→1단계[/metric] 단순화, 업무 개발자 CRUD 구현 코드량 [metric]80% 감소[/metric]",
            ],
          },
          {
            title: "디자인 시스템 및 PrimeBridge 모듈",
            items: [
              "PrimeVue 4.x의 definePreset API로 커스텀 프리셋(smartonPreset)을 구성하고, colorScheme: { light, dark } 구조로 라이트/다크 모드의 semantic 토큰을 분리 정의",
              "darkModeSelector 설정으로 CSS 클래스 토글만으로 26개 컴포넌트가 일괄 테마 전환, 컴포넌트 설정 코드 [metric]95% 감소[/metric]",
            ],
          },
          {
            title: "Stateful App Shell 탭 시스템",
            items: [
              "단순 내비게이션을 넘어 시스템 전체의 골격(App Shell)으로 동작하는 Workspace Navigator 설계",
              "탭별 독립 Vue 앱 인스턴스 생성으로 상태 격리, 이벤트 버스 기반 PopupService로 부모 탭 닫힘 시 자식 팝업 자동 정리",
              "WeakMap 활용 참조 순환 방지, [metric]100개 탭 스트레스 테스트[/metric] 메모리 누수 0건 통과",
            ],
          },
          {
            title:
              "Tab Edit Mode UX 혁신 — iOS 홈 화면 앱 정리 UX 착안, 4단계 점진적 발전",
            description:
              "검사원 1인당 5~10개 이상 탭을 동시 유지하는 환경에서, X 버튼 오터치·되돌리기 불가·일괄 정리 부재 문제를 해결하기 위해 고정형 탭 바를 In-place Edit Layout으로 혁신.",
            items: [
              "X 버튼을 제거하고 Trash Zone 드래그 삭제를 도입, SortableJS delay:500 + onChoose/onUnchoose/onStart 콜백 조합으로 빠른 탭(<500ms→전환) / 롱프레스+드래그(→정렬) / 롱프레스+릴리스(→편집모드 진입) 3가지 터치 제스처를 정밀 분기. 고객 요구 이전에 자발적으로 제안·구현.",
              '"다수 탭 일괄 삭제 시 개별 드래그는 피로도가 높다"는 현장 피드백을 반영하여 iOS 위글 애니메이션, ⊖ 버튼 삭제 마킹(Set 토글 + 롤백), 블러 오버레이, ConfirmPopup 저장/취소(스냅샷 롤백) 설계.',
              "개별 삭제 API N회 호출을 deleteBatchUserOpenMenu 단일 배치로 최적화.",
              "driver.js 코치마크 온보딩 도입, 스텝 전환 시 DOM 재생성으로 인한 체크 상태 소실을 클로저 변수로 해결.",
            ],
            metrics: ["피드백 2주 내 반영", "삭제 API N→1"],
          },
          {
            title: "태블릿 UX 최적화",
            items: [
              "Hammer.js — 스와이프 패널 열기/닫기·롱프레스 제스처",
              "OverlayScrollbars — 네이티브 대비 공간 절약 커스텀 스크롤, v-os-scroll 디렉티브 간편 적용",
              "Sortable.js·Swiper.js는 Tab Edit Mode에서 심층 활용",
            ],
          },
        ],
        highlightBox: {
          title: "기여 포인트",
          content:
            "프론트엔드 아키텍처 전체를 단독 설계하고, 4명 주니어 개발자가 일관된 방식으로 개발할 수 있는 환경을 구축. ESLint/Prettier 기반 코드 컨벤션 정립, 개발 가이드 문서 작성으로 신규 개발자 온보딩 1일 이내 달성. 고객 요구 이전에 Tab Edit Mode·드래그 삭제 등 차별화 UX를 자발적으로 제안·구현하여 시스템 정체성 확립.",
        },
        gallery: [
          {
            layout: "portrait",
            items: [
              {
                src: `${IMG}/01-smarton/dashboard-1.png`,
                alt: "대시보드 라이트 모드",
                caption: "대시보드 (라이트)",
                subCaption: "오늘의 목표 · WTD · 공지사항 · 즐겨찾기",
              },
              {
                src: `${IMG}/01-smarton/dashboard-2-favorites-dnd.png`,
                alt: "즐겨찾기 드래그 앤 드롭",
                caption: "대시보드 (즐겨찾기)",
                subCaption: "드래그 앤 드롭으로 즐겨찾기 순서 변경",
              },
              {
                src: `${IMG}/01-smarton/dashboard-3-darkmode.png`,
                alt: "대시보드 다크 모드",
                caption: "대시보드 (다크)",
                subCaption: "디자인 토큰 기반 1줄 코드 테마 전환",
              },
              {
                src: `${IMG}/01-smarton/edit-grid-1.png`,
                alt: "P-Edit-DataTable",
                caption: "P-Edit-DataTable",
                subCaption:
                  "행 상태(saved/added/modified/deleted) 시각 피드백",
              },
              {
                src: `${IMG}/01-smarton/edit-grid-2.png`,
                alt: "편집 그리드 상태 아이콘",
                caption: "편집 그리드 (상태)",
                subCaption: "셀 단위 Dirty Tracking + 변경 하이라이트",
              },
              {
                src: `${IMG}/01-smarton/edit-grid-3.png`,
                alt: "편집 그리드 변경 내역 팝오버",
                caption: "편집 그리드 (변경내역)",
                subCaption: "수정 행 클릭 시 변경 전→후 팝오버",
              },
              {
                src: `${IMG}/01-smarton/edit-grid-4-required-check.png`,
                alt: "필수값 검증 팝오버",
                caption: "편집 그리드 (필수값)",
                subCaption: "누락 셀 자동 포커스 + Popover 안내",
              },
              {
                src: `${IMG}/01-smarton/edit-grid-5-duplicate-check.png`,
                alt: "중복값 검증",
                caption: "편집 그리드 (중복검증)",
                subCaption: "uniqueFields 선언적 중복값 체크",
              },
              {
                src: `${IMG}/01-smarton/list-row-expand.png`,
                alt: "목록 행 확장",
                caption: "데이터 목록",
                subCaption: "행 확장으로 상세 정보 인라인 표시",
              },
              {
                src: `${IMG}/01-smarton/input-form.png`,
                alt: "입력 폼 화면",
                caption: "입력 폼",
                subCaption: "PrimeVue 컴포넌트 기반 검사 데이터 입력",
              },
              {
                src: `${IMG}/01-smarton/popup-inspector-assign.png`,
                alt: "검사원 일괄 배정 팝업",
                caption: "팝업 (검사원 배정)",
                subCaption: "PopupService 기반 독립 Vue 앱 인스턴스",
              },
              {
                src: `${IMG}/01-smarton/popup-approval.png`,
                alt: "결재 상신 팝업",
                caption: "팝업 (결재 상신)",
                subCaption: "드래그로 결재 행 순서를 변경하는 상신 팝업",
              },
            ],
          },
          {
            layout: "group",
            items: [
              {
                images: [
                  {
                    src: `${IMG}/01-smarton/single-tab-longpress-switch.png`,
                    alt: "롱프레스 드래그 스위칭",
                  },
                  {
                    src: `${IMG}/01-smarton/single-tab-longpress-delete.png`,
                    alt: "Trash Zone 드래그 삭제",
                  },
                ],
                caption: "단일 탭 제스처",
                subCaption: "롱프레스 드래그 스위칭 · Trash Zone 드래그 삭제",
              },
              {
                images: [
                  {
                    src: `${IMG}/01-smarton/tab-edit-coachmark-1.png`,
                    alt: "코치마크 Step 1",
                  },
                  {
                    src: `${IMG}/01-smarton/tab-edit-coachmark-2.png`,
                    alt: "코치마크 Step 2",
                  },
                ],
                caption: "코치마크 온보딩",
                subCaption:
                  "driver.js 2단계 투어 — 편집모드 진입 시 자동 표시",
              },
              {
                images: [
                  {
                    src: `${IMG}/01-smarton/tab-edit-delete-toggle.png`,
                    alt: "iOS 위글 삭제 토글",
                  },
                  {
                    src: `${IMG}/01-smarton/tab-edit-longpress-switch.png`,
                    alt: "편집모드 롱프레스 스위칭",
                  },
                  {
                    src: `${IMG}/01-smarton/tab-edit-batch-save.png`,
                    alt: "ConfirmPopup 일괄 저장",
                  },
                ],
                caption: "편집모드 조작",
                subCaption:
                  "⊖ 삭제 마킹 · 롱프레스 순서 변경 · ConfirmPopup 일괄 저장",
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------
      // 02. 위성망 이용 관리 시스템
      // ----------------------------------------------------------
      {
        name: "위성망 이용 관리 시스템 — Interactive 분배도표 차트",
        client: "한국방송통신전파진흥원(KCA)",
        period: "2024.12 ~ 2025.03",
        role: "Interactive 분배도표 차트 설계 및 단독 개발",
        stack: [
          "React",
          "TypeScript",
          "TanStack Query",
          "Context API",
          "Emotion",
          "Framer Motion",
        ],
        description:
          "위성 주파수 이용현황을 시각화한 Interactive 분배도표 차트를 직접 설계 및 단독 개발. 분배↔주파수↔용도↔이용 4행이 주파수 축으로 정렬·연결되는 복잡한 레이아웃 특성상 범용 차트 라이브러리(D3, Chart.js 등)로는 구현이 불가능하여, 차트 라이브러리 없이 순수 React + Emotion으로 자체 구현. 대외용/내부용으로 구분된 6개 밴드(L, S, C, X, Ku-V)별 데이터를 주파수 값 기반으로 위치·너비를 동적 계산하여 렌더링하는 [metric]프론트 33파일 3,669줄[/metric] 규모의 데이터 시각화 프로젝트.",
        achievements: [
          {
            title: "합성 컴포넌트 패턴으로 선언적 차트 구조 설계",
            items: [
              "Band > Band.Header / Band.Body / Band.Arrow 계층 구조로 컴포넌트 간 결합도 최소화",
              "Band.Body 내부에 BunBae·JuPaSu·YongDo·EYong 4행을 선언적으로 배치하여 협업 효율과 인수인계 용이성 확보",
            ],
          },
          {
            title: "서버-클라이언트 상태 이원화 — useReducer 상태 머신",
            items: [
              "React-Query(staleTime: Infinity)로 서버 상태를 캐싱",
              "Context API + useReducer로 클라이언트 상태(배율 0.3~1.75x, 실제 스케일 토글, 호버 하이라이팅)를 4가지 액션 디스패치 기반 상태 머신으로 관리",
              "MyBatis 계층적 ResultMap(ReleaseSectionDTO → BandDTO → BandDetailDTO 3단계 중첩 collection)으로 단일 API 호출에 전체 트리 데이터 반환",
            ],
          },
          {
            title: "주파수 좌표 계산 엔진 독자 설계",
            items: [
              "주파수 범위를 픽셀 너비로 변환하는 좌표 매핑 엔진 구현",
              "밴드별 가상 전체 너비(VIRTUAL_TOTAL_WIDTH)와 확대 계수(MAGNIFICATION_FACTOR) 상수 맵 6종으로 실제/기본 스케일 이중 모드 정밀 제어",
              "제너레이터 함수(mergeSortedArraysLazy)로 정렬된 배열 병합, 이벤트 기반 구간 분할 알고리즘으로 분배→주파수 구간 자동 매핑",
              "레이블 겹침 감지 + 적응형 폰트 사이즈 자동 축소 — [metric]utils.js 단일 모듈 944줄[/metric]",
            ],
          },
          {
            title: "React Portal + Framer Motion",
            items: [
              "Toolbar를 Portal로 분리하여 차트 스케일 변경에 영향받지 않는 독립 렌더링 확보",
              "Framer Motion 스프링 물리(stiffness:300, damping:30)로 실제 스케일 토글 애니메이션 구현",
              "Tippy.js Portal로 Tooltip 위치 정밀 제어",
            ],
          },
          {
            title: "Contextual UI + 스크롤 음영 + 호버 하이라이팅",
            items: [
              "마우스 오버 시에만 액션 버튼을 표시하는 사용자 행동 기반 UI로 화면 복잡도 감소",
              "가로 스크롤 밴드에 ScrollShadow를 적용하여 좌/우 끝 도달 여부를 그라데이션 음영으로 시각 힌트 제공",
              "이용(EYong) 요소 호버 시 Context 전파로 차트 전체에 걸쳐 연관 요소 하이라이팅",
            ],
          },
        ],
        gallery: [
          {
            layout: "default",
            items: [
              {
                src: `${IMG}/02-satellite/distribution-chart.png`,
                alt: "Interactive 분배도표 차트 전체 화면",
                caption: "Interactive 분배도표",
                subCaption:
                  "대외용/내부용 주파수 대역별 분배·용도·이용 현황 시각화",
              },
              {
                src: `${IMG}/02-satellite/chart-zoom-toggle.png`,
                alt: "스케일 조작 Toolbar",
                caption: "Contextual Toolbar",
                subCaption:
                  "확대/축소 버튼 + 실제 스케일 토글 (마우스 오버 시 노출)",
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------
      // 03. 스마트공장 PMS
      // ----------------------------------------------------------
      {
        name: "스마트공장 PMS 구축 및 유지운영",
        client: "중소벤처기업부 / 스마트제조혁신추진단",
        period: "2023.03 ~ 2024.11",
        role: "협약 영역 기능 개발 · 공통 컴포넌트 자체 발굴·단독 개발 · 상태 관리 설계 · 유지보수",
        stack: [
          "React",
          "Context API",
          "useReducer",
          "Ant Design",
          "Spring Boot",
          "MyBatis",
        ],
        description:
          "25명 규모 개발팀(사전/협약/평가/공통 4개 파트) 내 협약 파트 담당. 촉박한 일정 속에서 각자 화면 개발에 집중하느라 상태 관리 체계가 부재하고 코드 스타일이 중구난방이던 상황에서, React 상태 관리의 중요성을 인식하고 Context API 기반 전역 상태 관리 체계를 자체 설계. 업무(협약) 팀 소속이면서도 팀 전체에 필요한 공통 컴포넌트를 자체 발굴·단독 개발하여 코드 리뷰·사용법 안내로 팀 코드 일관성과 생산성에 기여.",
        achievements: [
          {
            title: "Context API + useReducer 기반 전역 상태 관리 체계 자체 설계",
            items: [
              "이미 개발이 진행 중이라 Redux 등 라이브러리 도입이 불가능한 상황에서, Context API + useReducer로 체계적 상태 관리 적용",
              "도메인별로 [metric]4개 독립 Context[/metric]를 분리 설계하고, State/Dispatch 분리 커스텀 훅으로 Props Drilling 해소",
            ],
          },
          {
            title:
              "공통 컴포넌트 4종 자체 발굴·단독 개발 → 코드 리뷰·팀 전파",
            items: [
              "공통팀이 아닌 업무(협약) 파트 소속이면서, 팀 전체에 반복되는 UI 패턴(목록·검색·팝업·탭 등)을 직접 식별하여 재사용 가능한 공통 컴포넌트로 설계·개발",
              "선언적 설정만으로 화면을 구성할 수 있도록 만들어, 새로운 화면 개발 시 빠르게 적용 가능한 온보딩 환경 조성",
              "코드 리뷰와 사용법 안내를 통해 팀 내 코드 일관성 확보",
            ],
          },
          {
            title: "협약변경 — 변경 시각화 UX 독자 설계",
            items: [
              "변경된 셀에 연노랑 배경 강조 + 입력 포커스 시 원본값 팝오버를 띄워 공간 효율적 전후 비교",
              "ChangePopover·ChangeCheckText 컴포넌트로 읽기/입력 모드 모두 변경 여부 즉시 파악",
              "공급기업 대표기관 추가/삭제 시 자동 선택 + 왕관 아이콘(파란색=변경후, 회색=변경전) 시각화",
              "사업비 S1↔S2 연차별·항목별 합계 자동 검증",
            ],
          },
          "Controller → Service → Mapper(MyBatis) → SQL 쿼리까지 전 계층 직접 개발",
          "개발 완성도에 대한 개인적 목표 달성을 위해 유지보수 프로젝트에 자발적 참여. SR 게시판 답변 작성 + 고객 전화 응대 [metric]약 30,000건[/metric] 처리",
        ],
        gallery: [
          {
            layout: "default",
            items: [
              {
                src: `${IMG}/03-pms/search-list.png`,
                alt: "PMS 검색 및 목록",
                caption: "협약변경 검색 · 목록",
                subCaption:
                  "공통 List 컴포넌트 — 검색조건 + 테이블 + 페이지네이션 자동 구성",
              },
              {
                src: `${IMG}/03-pms/before-after.png`,
                alt: "PMS 변경전후 확인",
                caption: "변경 정보 상세",
                subCaption:
                  "연노랑 배경 강조 + 왕관 아이콘 대표기관 시각화",
              },
              {
                src: `${IMG}/03-pms/crud-confirm.png`,
                alt: "PMS 추가삭제수정 확인",
                caption: "추가 · 삭제 · 수정 확인",
                subCaption:
                  "파란(추가)/빨간(삭제)/노란(수정) 행 색상 구분 + 사업비 테이블",
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------
      // 04. 온라인 검사서류
      // ----------------------------------------------------------
      {
        name: "온라인 검사서류 신청·접수 시스템 시범 구축",
        client: "한국가스안전공사(KGS)",
        period: "2022.09 ~ 2023.02",
        role: "신규 기능 추가 개발 · 모바일 화면 구현",
        stack: [
          "Spring",
          "JSP",
          "jQuery",
          "OZ Report",
          "MarkAny",
          "ePapyrus",
        ],
        achievements: [
          "레거시(Spring, JSP) 관공서 내부망 시스템에 모바일 환경 이수증 발급 기능 신규 개발",
          "OZ(문서 생성) → MarkAny(보안 적용) → ePapyrus(뷰어) 3개 솔루션 순차 파이프라인 구성",
        ],
        gallery: [
          {
            layout: "portrait",
            items: [
              {
                src: `${IMG}/04-certificate/certificate-1.png`,
                alt: "모바일 본인 인증 로그인",
                caption: "본인 인증 시스템",
                subCaption:
                  "KGS 사이버지사 모바일 로그인 + 본인 인증",
              },
              {
                src: `${IMG}/04-certificate/certificate-2.png`,
                alt: "모바일 교육이수증 조회",
                caption: "교육이수 이력 조회",
                subCaption:
                  "가스 안전 교육 이수 과정 조회 + PDF 이수증 발급",
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------
      // 05. AI 신약개발 플랫폼
      // ----------------------------------------------------------
      {
        name: "AI 신약개발 플랫폼 구축",
        client: "한국화학연구원(KRICT)",
        period: "2022.03 ~ 2022.06",
        role: "플랫폼 전체 구조 설계 및 개발 주도",
        stack: [
          "Django",
          "Flask",
          "Python",
          "multiprocessing",
          "Crontab",
          "Axios",
        ],
        achievements: [
          {
            title: "Django + Flask 이중 구조 플랫폼 설계",
            items: [
              "Django(메인 웹 + 사용자 관리)와 Flask(분석 모듈 API)를 분리한 이중 구조 설계",
              "SMILES 구조 입력 → 15개 이상의 AI 분석 모듈 실행 → 결과 시각화 + PDF/CSV 다운로드까지 전체 파이프라인을 단독 구현",
            ],
          },
          {
            title: "Python multiprocessing 기반 병렬 분석",
            items: [
              "기존 단일 모듈 순차 실행 구조를 Pool 기반 병렬 처리로 전환",
              "12개 모듈 동시 실행 시에도 모듈별 독립 프로세스로 안정적 처리, 분석 시간 대폭 단축 및 모듈 추가 시 확장성 확보",
            ],
          },
          {
            title: "실시간 Job 모니터링 UX",
            items: [
              "Axios polling 방식으로 모듈별 진행 상태(대기/실행중/완료)를 실시간 시각화",
              "SMILES 분자 구조 이미지와 함께 Job Status를 한 눈에 확인 가능, 일시정지(Pause)/재개 기능으로 사용자 제어권 확보",
            ],
          },
          {
            title: "Crontab 배치 자동화 + SMILES Editor 통합",
            items: [
              '"Waiting" 상태의 Job을 주기적으로 자동 실행하는 배치 스케줄러 구성',
              "분자 구조 편집기(SMILES Editor)를 작업 등록 화면에 통합하여, 시각적으로 분자를 그리고 SMILES 코드로 변환하는 직관적 입력 UX 제공",
            ],
          },
        ],
        gallery: [
          {
            layout: "default",
            items: [
              {
                src: `${IMG}/05-ai-drug/main.png`,
                alt: "AI 신약개발 플랫폼 메인화면",
                caption: "메인 랜딩 페이지",
                subCaption:
                  "Cardiotoxicity, BBB Permeability 등 분석 모듈 소개",
              },
              {
                src: `${IMG}/05-ai-drug/module-list.png`,
                alt: "분석 모듈 목록",
                caption: "Module List",
                subCaption:
                  "15개 AI 분석 모듈 관리 (API name, Level, 등록일)",
              },
              {
                src: `${IMG}/05-ai-drug/task-register.png`,
                alt: "작업 등록 화면",
                caption: "Register Job",
                subCaption:
                  "SMILES Editor로 분자 구조 시각적 편집 + SMILES 코드 목록 등록",
              },
              {
                src: `${IMG}/05-ai-drug/task-list.png`,
                alt: "작업 목록",
                caption: "Job List",
                subCaption:
                  "SMILES 입력값, 선택 모듈, 상태(PAUSE/COMPLETE), 재생/삭제 액션",
              },
              {
                src: `${IMG}/05-ai-drug/realtime-progress.png`,
                alt: "모듈별 실시간 진행상태",
                caption: "Job Detail",
                subCaption:
                  "분자 구조 시각화 + 12개 모듈별 실시간 진행 상태 모니터링",
              },
              {
                src: `${IMG}/05-ai-drug/result-view.png`,
                alt: "모듈 실행 결과 화면",
                caption: "Result Detail",
                subCaption:
                  "모듈별 예측 결과 + SMILES 물성 정보 + PDF/CSV 다운로드",
              },
              {
                src: `${IMG}/05-ai-drug/export-pdf-csv.png`,
                alt: "결과 PDF/CSV 다운로드",
                caption: "결과 내보내기",
                subCaption:
                  "PDF 리포트(분자 구조 + 분석 결과) 및 CSV 스프레드시트 다운로드",
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------
      // 06. LIME-DQM
      // ----------------------------------------------------------
      {
        name: "LIME-DQM AI 학습데이터 품질 검증 플랫폼",
        client: "자사 솔루션",
        period: "2021.03 ~ 2021.11",
        role: "플랫폼 전체 구조 설계 및 개발 주도",
        stack: ["Django", "JavaScript", "Elasticsearch", "Kibana"],
        description:
          "NIA AI학습용 데이터 구축사업에서 PMO 조직이 활용하는 AI 학습데이터 품질 자동 검증 플랫폼. 텍스트·이미지·영상·음성 등 정형/비정형 데이터를 [metric]100여 개의 품질측정 모듈[/metric]로 자동 검수하고, 데이터 프로파일링·육안검수·통계 대시보드·결과 보고서까지 품질 진단 전 과정을 단일 플랫폼에서 처리.",
        achievements: [
          {
            title:
              "6단계 품질 진단 워크플로우 전체 설계·구현 (프론트엔드 + 백엔드)",
            items: [
              "품질지표 정의 → 데이터 프로파일링 → 데이터 적재 → 품질 검수 → 결과 보고서까지, 새로고침 없는 단일 화면 비동기 UX 구현",
              "백엔드에서는 6단계 x 7상태 x 2역할(Auditor/Collector) 검토·승인 워크플로우를 2계층 상태 모델로 설계하여 다중 검토자 병렬 승인 지원",
            ],
          },
          {
            title: "대용량 비정형 데이터 적재·분석 알고리즘 직접 고안",
            items: [
              "무한 깊이 JSON 축약·재귀 탐색 알고리즘 설계",
              "JSON/CSV/XML/Excel 4개 포맷 자동 감지·변환 파이프라인 구축",
              "청크 단위 병행 처리를 결합하여 적재·분석 시간을 [metric]1/6 ~ 1/10으로 단축[/metric], 컬럼별 자동 프로파일링 산출",
            ],
          },
          {
            title: "사내 최초 Elasticsearch 도입 주도",
            items: [
              "용도별 인덱스 분리 설계(원본 데이터/검수 결과/배치 분석)",
              "search_after 딥 페이징, ES CRUD 전 과정 구현으로 데이터 조회 속도 [metric]10배 이상 개선[/metric]",
              "django-crontab 기반 배치 분석 자동화에서도 ES 파이프라인 활용",
            ],
          },
          {
            title: "대용량 미디어 파일 육안 검수 도구 설계",
            items: [
              "ES 연계 아이디어를 직접 건의하여 채택 — Zip 내부 미디어 메타데이터를 ES에 인덱싱하여 빠른 조회·추출",
              "Zip 대량 추출에서 3가지 방식(병렬처리/일괄추출/멀티프로세싱)을 시도·비교하여 최적 방식 확정",
              "검수 진행률을 ES aggregation으로 실시간 집계",
            ],
          },
          {
            title: "JS·Django 대량 중복 코드 리팩토링 건의·실행",
            items: [
              "팀장에게 직접 건의하여 양 레이어의 중복 코드를 체계적으로 모듈화",
              "JS에서는 중첩 모달 z-index 충돌 문제를 스택 카운터 기반 공식으로 해결, 검수 결과를 A4 규격 인쇄 최적화 보고서로 동적 생성",
            ],
          },
        ],
        gallery: [
          {
            layout: "portrait",
            items: [
              {
                src: `${IMG}/06-lime-dqm/data-load.png`,
                alt: "LIME-DQM 데이터 적재 및 구조 분석",
                caption: "데이터 적재 · 구조 분석",
                subCaption:
                  "JSON key별 Level·타입·매핑 자동 추출 + 프로파일링 항목 선택",
              },
              {
                src: `${IMG}/06-lime-dqm/quality-inspection.png`,
                alt: "LIME-DQM 품질지표정의서 기반 검수",
                caption: "품질지표 기반 검수 계획",
                subCaption:
                  "검증 계획서 버전 관리 + 데이터셋별 지표 항목·검수모듈 매핑 테이블",
              },
              {
                src: `${IMG}/06-lime-dqm/report-output.png`,
                alt: "LIME-DQM 검수 결과 보고서",
                caption: "검수 결과 보고서 출력",
                subCaption:
                  "A4 규격 인쇄 최적화 보고서 동적 생성 + Prev/Next 페이지 네비게이션",
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------
      // 07. LabelOn 어드민
      // ----------------------------------------------------------
      {
        name: "LabelOn 내부 어드민 페이지 구축",
        client: "자사 솔루션",
        period: "2020.09 ~ 2021.02",
        role: "백오피스 개발",
        stack: ["Django", "jQuery", "Ajax", "ORM", "Bootstrap"],
        description:
          "자사 AI 학습데이터 구축 플랫폼 LabelOn의 내부 관리 시스템. 클라우드워커·리뷰어의 라벨링 작업부터 프로젝트·데이터셋·회원·정산까지, [metric]수십만 건의 운영 데이터[/metric]를 관리하는 백오피스 개발.",
        achievements: [
          {
            title:
              "입사 첫 프로젝트 — 사수의 가이드 아래 7개 관리 모듈 개발",
            items: [
              "UI 설계부터 백엔드 API까지 대부분의 개발을 담당하며 6개월 내 완성",
              "회원·프로젝트·데이터셋·어노테이터·리뷰어 작업 관리 등 핵심 CRUD 모듈 구현",
            ],
          },
          {
            title:
              "신입 개발자로서 자발적으로 UX 개선 — 새로고침 없는 화면 전환 구현",
            items: [
              "SSR 환경에서 페이지 전환마다 새로고침이 발생하는 것에 의문을 품고, AJAX 개념을 스스로 학습하여 Django SSR 부분 갱신 패턴을 적용",
              "요구사항에 없었지만, [metric]수십만 건 테이블[/metric]의 검색·페이징·필터링을 새로고침 없이 처리하는 UX를 스스로 제안하고 구현",
            ],
          },
          {
            title: "DB 기반 동적 메뉴 + 역할별 접근 제어",
            items: [
              "Menu·MenuPermission 모델로 메뉴 구조를 DB에서 관리하고, 관리자 역할(Role)에 따라 접근 가능한 메뉴를 동적 생성",
              "OTP 2차 인증·SMS 발송·주소 검색 API 등 보안·부가 기능 구현",
            ],
          },
        ],
        gallery: [
          {
            layout: "default",
            items: [
              {
                src: `${IMG}/07-labelon/login-otp.png`,
                alt: "LabelOn Admin OTP 로그인",
                caption: "OTP 로그인",
                subCaption:
                  "이메일 + 비밀번호 + OTP 2차 인증(SMS 발송) 보안 로그인",
              },
              {
                src: `${IMG}/07-labelon/sidebar-menu.png`,
                alt: "LabelOn Admin DB 기반 동적 메뉴",
                caption: "DB 기반 동적 메뉴",
                subCaption:
                  "Menu·MenuPermission 모델 기반 역할별 접근 제어 + 다단계 메뉴 구조",
              },
              {
                src: `${IMG}/07-labelon/log-filter-excel.png`,
                alt: "LabelOn Admin 목록 필터링 및 엑셀 다운로드",
                caption: "목록 필터링 · 엑셀 내보내기",
                subCaption:
                  "필터링 설정/해제/재적용 상태 관리 + 엑셀 다운로드 툴바",
              },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================
  // 모두텍
  // ============================================================
  {
    name: "모두텍",
    period: "2019.08 ~ 2019.12",
    description: "웹 개발",
    projects: [
      {
        name: "연구 지원 시스템 웹 개발",
        client: "한국전자통신연구원(ETRI)",
        period: "2019.08 ~ 2019.12",
        role: "웹 프론트엔드 개발 전담",
        stack: ["Node.js", "Express", "EJS", "JavaScript ES6", "Swagger UI"],
        achievements: [
          "첫 실무 프로젝트 — Node.js(Express) + EJS 기반 웹 프론트엔드 개발 전담",
          "연구원(Python) RESTful API 연동, Swagger UI 활용 API 검증 및 테스트",
          "Slack 기반 연구원과의 커뮤니케이션 주도, 주 1회 연구소 방문 회의 참석",
        ],
        gallery: [],
      },
    ],
  },
];
