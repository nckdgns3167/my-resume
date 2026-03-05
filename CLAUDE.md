# my-resume — Next.js 경력기술서 사이트

> **정창훈**의 온라인 경력기술서 (한/영 지원)
> 다른 세션에서 이어 작업할 수 있도록 프로젝트 전체 컨텍스트를 정리한 문서입니다.

---

## 기본 정보

```yaml
project: my-resume
path: C:\Users\jch\my-resume\
github: https://github.com/nckdgns3167/my-resume.git
branch: master
deploy_url: https://resume-changhoon.vercel.app
deploy_platform: Vercel (git push origin master → 자동 배포)
```

---

## 기술 스택

| 카테고리 | 기술 | 버전 |
|---------|------|------|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript (strict) | 5.x |
| UI Library | React | 19.2.3 |
| Styling | Tailwind CSS v4 (`@theme inline`) | 4.x |
| Animation | Framer Motion | 12.34.3 |
| Lightbox | yet-another-react-lightbox | 3.29.1 |
| Onboarding | driver.js | 1.4.0 |
| Classnames | clsx + tailwind-merge | 2.1.1 / 3.5.0 |
| Linter/Formatter | Biome | 2.4.4 |
| PostCSS | @tailwindcss/postcss | 4.x |
| Font (한글) | Pretendard Variable (CDN) | - |
| Font (코드) | JetBrains Mono (next/font/google) | - |
| Font (Serif) | Playfair Display (Google Fonts) | - |

---

## 스크립트

```bash
npm run dev        # 개발 서버 (http://localhost:3000)
npm run build      # 프로덕션 빌드 (정적 사이트 생성)
npm run start      # 프로덕션 서버 실행
npm run lint       # Biome 검사
npm run lint:fix   # Biome 자동 수정
npm run format     # Biome 포맷팅
```

---

## Git 워크플로우

```bash
# 커밋 & 배포 (Vercel 자동 배포)
git add <files>
git commit -m "type: 메시지"
git push origin master
```

- `master` 브랜치에 push하면 Vercel이 자동 빌드 & 배포
- 커밋 메시지 타입: `feat`, `fix`, `style`, `chore`, `refactor`, `docs`
- Co-Author: `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`

### 주의사항
- Windows 환경에서 `cd C:\Users\jch\my-resume` 가 bash에서 작동하지 않을 수 있음
- Task agent (Bash 타입)를 사용하여 git 명령어 실행 권장

---

## 디렉터리 구조

```
src/
├── app/
│   ├── globals.css            # Pretendard CDN, @theme inline, 다크모드, 프린트 스타일
│   ├── layout.tsx             # Root Layout: Providers, FOUC 방지 스크립트, JSON-LD, OG메타
│   └── page.tsx               # → <LocalizedPage /> 래퍼
│
├── components/
│   ├── LocalizedPage.tsx      # 메인 오케스트레이터 (데이터 로딩 → 전체 섹션 렌더링)
│   ├── layout/
│   │   ├── Header.tsx         # 프로필 카드 (사진, 이름, 연락처)
│   │   ├── StickyHeader.tsx   # 스크롤 시 나타나는 고정 헤더
│   │   ├── ScrollProgressBar.tsx  # 하단 진행률 바
│   │   ├── FabStack.tsx       # 데스크톱 FAB (xl:1100px 이상만 표시)
│   │   ├── MobileDrawer.tsx   # 모바일 통합 메뉴 (햄버거 FAB → 바텀시트)
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── IntroSection.tsx       # 자기소개
│   │   ├── SkillsSection.tsx      # 기술 스택
│   │   ├── SideProjectsSection.tsx # 사이드 프로젝트 (ChartSage)
│   │   ├── ExperienceSection.tsx  # 경력 (회사 → 프로젝트)
│   │   └── StrengthsSection.tsx   # 핵심 역량
│   ├── experience/
│   │   ├── CompanyCard.tsx        # 회사 헤더 카드
│   │   ├── ProjectCard.tsx        # 프로젝트 카드 (타임라인 도트)
│   │   ├── ProjectAchievements.tsx # 성과 목록
│   │   ├── ProjectGallery.tsx     # 갤러리 그리드 + 라이트박스 연동
│   │   └── HighlightBox.tsx       # 강조 박스
│   ├── toc/
│   │   └── TocSidebar.tsx     # 데스크톱 우측 TOC (스크롤 스파이)
│   ├── lightbox/
│   │   └── Lightbox.tsx       # yet-another-react-lightbox 래퍼
│   ├── ui/
│   │   ├── ThemeToggle.tsx    # 다크모드 토글 (View Transition API)
│   │   ├── PrintButton.tsx    # PDF 저장 (window.print)
│   │   ├── CopyButton.tsx     # 클립보드 복사 + Snackbar
│   │   ├── Section.tsx        # 공통 섹션 래퍼 (좌측 보더)
│   │   ├── SectionReveal.tsx  # Framer Motion 스크롤 등장 애니메이션
│   │   ├── Snackbar.tsx       # 토스트 알림
│   │   └── CoachMark.tsx      # driver.js 온보딩 오버레이
│   └── skills/
│       └── SkillTag.tsx       # 스킬 뱃지
│
├── context/
│   ├── ThemeContext.tsx        # light/dark 테마 (localStorage + View Transition)
│   ├── LocaleContext.tsx       # ko/en 언어 (localStorage + document.lang)
│   ├── SnackbarContext.tsx     # 토스트 메시지 (auto-dismiss 2.5s)
│   └── LightboxContext.tsx    # 갤러리 상태 (slides, index, open/close)
│
├── hooks/
│   ├── useScrollProgress.ts   # 페이지 스크롤 진행률 (0-1)
│   ├── useScrollSpy.ts        # 활성 섹션 감지 (IntersectionObserver)
│   ├── useStickyHeader.ts     # 스티키 헤더 표시 여부
│   ├── useMediaQuery.ts       # 반응형 미디어쿼리
│   ├── useClipboard.ts        # 클립보드 복사
│   └── useScrollTop.ts        # 맨 위로 스크롤 버튼 상태
│
├── data/
│   ├── types.ts               # 모든 TypeScript 인터페이스
│   ├── profile.ts             # 프로필 (비로컬라이즈, 이름·연락처·사진)
│   ├── ui-strings.ts          # UI 문자열 (ko/en)
│   ├── locale-data.ts         # 로컬라이제이션 라우터
│   ├── toc.ts / toc.en.ts     # TOC 구조
│   ├── experience.ts / .en.ts # 회사 + 프로젝트
│   ├── introduction.ts / .en.ts
│   ├── skills.ts / .en.ts
│   ├── side-projects.ts / .en.ts
│   └── strengths.ts / .en.ts
│
├── lib/
│   ├── cn.ts                  # clsx + twMerge 유틸리티
│   ├── career-calculator.ts   # 경력 년수 자동 계산
│   └── rich-text.tsx          # [metric]...[/metric] 파싱
│
└── view-transitions.d.ts      # View Transition API 타입 선언

public/
├── images/
│   ├── profile/photo.jpg      # 프로필 사진
│   ├── profile/thumb.jpg      # OG/Twitter 썸네일 (512x512)
│   └── projects/              # 프로젝트 스크린샷 62장
```

---

## 테마 시스템

### CSS 커스텀 프로퍼티 (globals.css)

```
Light                          Dark ([data-theme="dark"])
--bg: #faf9f5                  --bg: #141413
--bg-secondary: #e8e6dc        --bg-secondary: #1e1e1c
--text: #141413                --text: #faf9f5
--text-secondary: #7a7870      --text-secondary: #908e85
--border: #e8e6dc              --border: #2a2a28
--surface: #ffffff             --surface: #1e1e1c
--accent-primary: #d97757      (동일 — 오렌지)
--accent-secondary: #6a9bcc    (동일 — 블루)
--accent-tertiary: #788c5d     (동일 — 그린)
```

### Tailwind v4 토큰 (`@theme inline`)

```css
--color-bg, --color-bg-secondary, --color-surface, --color-border
--color-text, --color-text-secondary
--color-accent-primary, --color-accent-secondary, --color-accent-tertiary
--font-sans: "Pretendard Variable", sans-serif
--font-mono: var(--font-jetbrains-mono), monospace
--font-serif: "Playfair Display", serif
--breakpoint-sm: 480px
--breakpoint-md: 640px
--breakpoint-lg: 768px
--breakpoint-xl: 1100px
```

### 테마 토글 구현
- **View Transition API**: 클릭 지점에서 원형으로 확장되는 전환 애니메이션
- **Firefox 폴백**: 애니메이션 없이 즉시 전환
- **FOUC 방지**: `<head>`에 인라인 스크립트로 `localStorage` → `data-theme` 설정

---

## 다국어 (i18n) 시스템

### 구조
- 기본 언어: **English (en)**
- 지원 언어: `ko` (한국어), `en` (영어)
- 라이브러리 없이 **Context API** 기반 구현
- `localStorage("locale")` + `document.documentElement.dataset.locale` + `document.documentElement.lang`

### 로컬라이즈 데이터 파일 패턴
```
data/experience.ts    → 한국어
data/experience.en.ts → 영어
```

### 로컬라이제이션 라우터 (`locale-data.ts`)
```typescript
const dataMap: Record<Locale, LocalizedData> = { ko: {...}, en: {...} };
export function getLocalizedData(locale: Locale): LocalizedData;
```

### UI 문자열 (`ui-strings.ts`)
- `UiStrings` 인터페이스에 모든 UI 라벨 정의
- `uiStringsKo`, `uiStringsEn` 두 객체로 분리
- `useUiStrings()` 훅으로 현재 로케일의 문자열 가져오기

---

## 반응형 디자인

### 브레이크포인트
| 브레이크포인트 | px | 용도 |
|---------------|-----|------|
| sm | 480px | 작은 모바일 |
| md | 640px | 큰 모바일 |
| lg | 768px | 태블릿 |
| xl | 1100px | 데스크톱 (TOC, FABStack 표시 기준) |

### 모바일 vs 데스크톱 컴포넌트
| 컴포넌트 | 모바일 (<1100px) | 데스크톱 (≥1100px) |
|---------|------------------|-------------------|
| FAB | MobileDrawer (햄버거 1개 → 바텀시트) | FabStack (개별 FAB 4개) |
| TOC | MobileDrawer 내 TOC 목록 | TocSidebar (우측 고정) |
| 메인 컨텐츠 | `px-5`, full width | `px-8`, `max-w-[860px]` |

### MobileDrawer 상세
- 단일 햄버거 FAB (`h-11 w-11`, `bottom-6 right-6`)
- 바텀시트: 드래그 핸들 (50px 이상 → 닫기), 액션 버튼 행, TOC 네비게이션
- 네이티브 터치 이벤트 (`passive: false`로 페이지 스크롤 방지)
- `max-h-[70vh]`, 오버레이 `bg-black/40`

---

## 핵심 데이터 타입 (`types.ts`)

```typescript
interface Profile {
  name: string; nameEn: string; title: string;
  careerStartDate: string;     // "2019-08"
  careerPeriods: CareerPeriod[];
  phone: string; phoneRaw: string;
  email: string; github: string; linkedin: string;
  photo: string; thumbPhoto: string;
}

interface Company {
  name: string; nameEn?: string; period: string; role: string;
  projects: Project[];
}

interface Project {
  id: string; name: string; client: string;
  period: string; role: string; stack: string[];
  description?: string;           // [metric]...[/metric] 포함 가능
  achievements: Achievement[];    // string | AchievementDetail
  highlightBox?: HighlightBox;
  gallery: GalleryGrid[];
}

interface GalleryGrid {
  layout: "default" | "portrait" | "group";
  items: GalleryItem[];           // GalleryImage | GalleryImageGroup
}

type Achievement = string | AchievementDetail;
interface AchievementDetail {
  title: string;
  items?: string[];
  subGroups?: { title: string; items: string[] }[];
}
```

---

## Context Provider 구조

```
ThemeProvider          → theme: "light" | "dark", toggleTheme()
  └─ LocaleProvider   → locale: "ko" | "en", toggleLocale()
    └─ SnackbarProvider → show(message), visible, message
      └─ LightboxProvider → slides, index, isOpen, open(), close()
```

### FOUC 방지 (layout.tsx 인라인 스크립트)
```javascript
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = 'light';
    document.documentElement.dataset.theme = t;
    var l = localStorage.getItem('locale');
    if (!l) l = 'en';
    document.documentElement.dataset.locale = l;
    document.documentElement.lang = l;
  } catch(e) {}
})()
```

---

## 프린트/PDF 스타일

- `window.print()` 호출로 PDF 저장
- 색상 보존: `-webkit-print-color-adjust: exact; print-color-adjust: exact`
- 인터랙티브 요소 숨김: FAB, 스티키 헤더, 갤러리 등
- 페이지 여백: `8mm`
- 섹션 내 페이지 브레이크 방지: `break-inside: avoid`
- 빈 마지막 페이지 방지 처리

---

## 갤러리 시스템

### ProjectGallery 구성
- `<details>` HTML 요소로 접기/펼치기
- 그리드 레이아웃: `default` (2-3열), `portrait` (2-4열), `group` (2열)
- 닫기 FAB: 모바일 `right-2`, 데스크톱 `xl:-right-18` (sticky)
- 카드: `min-w-0 overflow-hidden` (CSS Grid 오버플로우 방지)
- 캡션: `break-words` (긴 텍스트 줄바꿈)

### Lightbox 연동
- `LightboxContext`로 전역 상태 관리
- `yet-another-react-lightbox` 래퍼
- 슬라이드 인덱스 추적, 캡션/타이틀 표시

---

## 주요 구현 패턴

### Server Component vs Client Component
- **기본: Server Component** (데이터 파일, 레이아웃)
- **Client Component**: `"use client"` 선언 필요한 경우만
  - Context 사용 컴포넌트
  - useState/useEffect/useRef 사용 컴포넌트
  - 이벤트 핸들러 사용 컴포넌트
  - Framer Motion 애니메이션

### Rich Text 파싱 (`rich-text.tsx`)
```tsx
// 입력: "약 [metric]30,000건[/metric] SR 처리"
// 출력: <>약 <span className="...accent...">30,000건</span> SR 처리</>
```

### 경력 년수 자동 계산 (`career-calculator.ts`)
- `profile.careerPeriods` 기반 자동 계산
- `Math.floor(totalDays / 365.25) + 1` 방식
- 메타데이터 (`layout.tsx`)에서 동적으로 사용

---

## 관련 프로젝트 & 참고 자료

### workspace_root (경력기술서 관리 시스템)
```yaml
path: C:\Users\jch\workspace_root\
projects_dir: projects/           # 프로젝트별 상세 기록 (*.md)
templates: projects/templates/    # 프로젝트/경력기술서 템플릿
resume_html: 경력기술서.html      # 바닐라 HTML 버전
```

### 바닐라 HTML 버전 (GitHub Pages)
```yaml
path: C:\Users\jch\resume\
deploy: https://nckdgns3167.github.io/resume/
```

### GitHub 프로필 README
```yaml
path: C:\Users\jch\nckdgns3167\README.md
branch: main
```

### ChartSage (사이드 프로젝트)
```yaml
path: C:\Users\jch\chartsage\
deploy: https://chartsage.vercel.app
resume_doc: workspace_root/projects/00_chartsage.md
```

---

## 알려진 이슈 & 해결 기록

| 이슈 | 원인 | 해결 |
|------|------|------|
| 테마/로케일 새로고침 시 초기화 | dataset에서 읽기 + state updater 내 side effect | localStorage 직접 읽기 + useRef + try/catch |
| 모바일 FAB 5개 겹침 | 개별 FAB이 좁은 화면에 쌓임 | MobileDrawer 통합 (햄버거 1개 → 바텀시트) |
| 갤러리 닫기 버튼 뷰포트 초과 | `-right-18` 고정 | `right-2 xl:-right-18` 반응형 |
| 갤러리 캡션 오버플로우 | CSS Grid `min-width: auto` | `min-w-0 overflow-hidden` + `break-words` |
| 바텀시트 드래그 시 페이지 스크롤 | React synthetic 이벤트 passive | 네이티브 리스너 `passive: false` + `preventDefault()` |

---

## Claude 작업 지침

### 코드 수정 시
1. 반드시 해당 파일을 먼저 **Read** 후 수정
2. Tailwind v4 문법 사용 (`@theme inline`, 커스텀 브레이크포인트)
3. Biome 포맷팅 규칙 준수 (탭 들여쓰기, 세미콜론 필수)
4. Server Component 기본, Client Component는 `"use client"` 명시

### 빌드 & 배포 시
1. `npm run build` 로 빌드 확인
2. `git add` → `git commit` → `git push origin master`
3. Vercel 자동 배포 확인
4. Windows bash에서 경로 문제 시 **Task agent** 사용

### 새 데이터 추가 시
1. `types.ts` 인터페이스 확인
2. 한국어(`.ts`) + 영어(`.en.ts`) 두 파일 모두 수정
3. `ui-strings.ts`에 새 UI 문자열 추가 시 `UiStrings` 인터페이스도 수정
4. TOC 변경 시 `toc.ts` + `toc.en.ts` 둘 다 수정

### 새 컴포넌트 추가 시
1. 적절한 디렉터리에 배치 (`sections/`, `ui/`, `experience/`, `layout/`)
2. 파일당 하나의 컴포넌트 원칙
3. Props 인터페이스 명시적 정의
4. 반응형 고려 (모바일 우선, xl:1100px 데스크톱 분기)

---

*마지막 업데이트: 2026-03-06*
