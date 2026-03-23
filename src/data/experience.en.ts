import type { Company } from "./types";

const IMG = "/images/projects";

export const companies: Company[] = [
	// ============================================================
	// Euclid Soft
	// ============================================================
	{
		name: "Euclid Soft",
		period: "2020.09 ~ Present",
		description:
			"Public/Enterprise System Development SI Company · Frontend Development",
		projects: [
			// ----------------------------------------------------------
			// 00. SmartOn 2.0 APP (Offline)
			// ----------------------------------------------------------
			{
				id: "project-smarton-offline",
				name: "SmartOn 2.0 APP — Gas Inspection Offline Tablet App",
				client: "Korea Gas Safety Corporation (KGS)",
				period: "2026.02 ~ 2026.04",
				role: "App Development Lead (Leading 3 Developers)",
				stack: [
					"Android (Java/Kotlin)",
					"Vue 3 (IIFE)",
					"NanoHTTPD",
					"SQLite 3",
					"Claude Code",
					"MCP",
				],
				description:
					"Building an Android tablet app based on the SmartOn 2.0 web system that operates independently without VPN/internet in the field. Locally replicates [metric]128 tables[/metric] via embedded LocalWebServer (NanoHTTPD) + SQLite offline DB, serving [metric]150+ REST API[/metric] endpoints within the app. Built [metric]30 AI context documents[/metric] (CLAUDE.md, architecture, porting guides) enabling the entire team to develop on a consistent context via Claude Code. Automatically switches between online/offline modes based on VPN connection state, and synchronizes inspection forms and PDF markups created offline to the server upon reconnection.",
				achievements: [
					{
						title: "Hybrid Online/Offline Architecture Design",
						items: [
							"Self-implemented Spring-style annotation framework (@RestController, @PostMapping, etc.) in embedded LocalWebServer, reusing 80% of web service layer",
							"Auto-generated Controller/Service boilerplate via Gradle plugin, serving [metric]150+ REST API[/metric] endpoints within the app",
						],
					},
					{
						title: "Online/Offline Mode Switching & Network Handling",
						items: [
							"Real-time VPN connection monitoring via NetworkManager; on disconnection, custom error page with auto-retry countdown (10s) and offline mode button after 3 failures",
							"Offline mode entry with locally stored credential authentication; on reconnection, cookie reset + server reconnection + automatic upload of queued data",
						],
					},
					{
						title: "Offline Data Synchronization Engine",
						items: [
							"OfflineDataSyncManager orchestrating [metric]18+[/metric] sync services, SyncQueueHelper ensuring atomic transactions for inspection result saving and upload queue registration",
							"Three-phase auto-upload on reconnection (SYNC_QUEUE → Canvas → PDF) with exponential backoff retry on failure",
							"Incremental sync downloading only changed data, with facility-scoped batching of [metric]50+ tables[/metric] of related data for offline field access",
						],
					},
					{
						title: "Oracle→SQLite Auto-Translation Layer",
						items: [
							"Custom MyBatis-style SqlMapper ORM (Spring-independent), dynamic SQL building + parameter binding",
							"Auto-translating NVL→COALESCE, DECODE→CASE WHEN, ROW_NUMBER, MERGE, etc., auto-generating SQLite schema from [metric]128-table[/metric] DDL",
						],
					},
					{
						title: "Offline PDF Markup Editing & Synchronization",
						items: [
							"Tracking edit status and sync state when PDF signatures/annotations are edited offline, with automatic server sync on reconnection",
							"Dual upload pipeline for Canvas JSON and markup PDF separately, with image compression to reduce upload traffic",
							"Persistent download tracking for PDF and scan images in local DB, restoring download status after app restart",
						],
					},
					{
						title: "Team AI Collaboration Framework",
						items: [
							"Built [metric]30 AI context documents[/metric] (CLAUDE.md, architecture, porting guides) enabling the entire team to develop on a consistent context via Claude Code",
							"Registered custom skills (front-sync, scm, svn-commit-msg) to automate repetitive tasks, extended AI agent capabilities through MCP server integration",
						],
					},
					{
						title: "AI-Driven Development Process",
						items: [
							"Automated Oracle→SQLite query porting and schema translation via Claude Code + MCP, maximizing productivity for [metric]128-table[/metric] migration",
							"Designed offline app structure, delegated domain-specific tasks to team members, and maintained quality through code reviews. Covering [metric]150+ APIs[/metric] and [metric]8 business domains[/metric]",
						],
					},
				],
				learningPoints: [
					{
						topic:
							"Web→Native Architecture Porting — \"Same Codebase, Different Runtime\" Strategy",
						paragraphs: [
							"Ported the IIFE + Islands Architecture designed for the web directly onto Android WebView + NanoHTTPD. Being able to reuse 80% of frontend code was possible because the architecture was never coupled to a specific runtime (browser) from the start.",
							"This experience demonstrated that [metric]architecture portability[/metric] goes beyond simple code reuse — it dramatically reduces platform transition costs. The fact that a structure validated on the web works identically on a native app shows how much difference separating runtime dependencies at the design stage can make.",
						],
					},
					{
						topic:
							"Offline-First Sync Design — \"Conflict Resolution Policy\" Is the Real Challenge",
						paragraphs: [
							"While implementing 18+ sync services, SYNC_QUEUE, and exponential backoff retry, the key realization was that the real difficulty of offline apps is not 'storing data locally' but [metric]how to resolve conflicts when going back online[/metric].",
							"By wrapping inspection result saving and upload queue registration in a single transaction, and sequentially uploading dependent data in Canvas→PDF order, 'partial success' states were structurally eliminated. Offline synchronization is ultimately a data consistency problem — a miniature version of distributed systems.",
						],
					},
					{
						topic:
							"Oracle→SQLite Auto-Translation — Give AI \"Context\" and Repetitive Work Disappears",
						paragraphs: [
							"Automated Oracle DDL→SQLite conversion for 128 tables with AI, but it didn't work well from the start. Simply asking AI to 'convert this' resulted in poor handling of Oracle-specific syntax like NVL, DECODE, and sequences.",
							"The turning point was systematically building [metric]30 AI context documents[/metric]. Once porting guides, type mapping rules, and function translation tables were created — documents that 'teach the project to AI' — conversion accuracy improved dramatically. This project convinced me that the key to AI utilization is not prompt engineering but context design.",
						],
					},
					{
						topic:
							"Spring Without Spring — The Essence of a Framework Is \"Convention\"",
						paragraphs: [
							"Since Spring dependencies couldn't be brought into the Android app, I self-implemented an annotation-based routing framework (@RestController, @PostMapping, etc.) on top of NanoHTTPD. Built a lightweight framework that maintains the existing web project's Controller/Service structure while operating without Spring.",
							"Through this process, I realized Spring's real value lies not in its libraries or features but in [metric]conventions developers are already familiar with[/metric]. Because team members could leverage their existing Spring experience without learning new patterns, they could be deployed to 150+ API development with zero onboarding cost.",
						],
					},
					{
						topic:
							"Leading 3 Developers + AI Collaboration — Designing Human-AI Role Division",
						paragraphs: [
							"Distributed domain-specific tasks to 3 team members while simultaneously operating Claude Code as the entire team's development infrastructure. The key was designing AI not as 'an individual's code generation tool' but as [metric]team-level development infrastructure[/metric].",
							"By building CLAUDE.md and porting guides as shared team context, and automating repetitive tasks with custom skills (front-sync, svn-commit-msg), all team members could produce code of consistent quality regardless of experience differences. Future team leadership requires designing not only 'what to assign to people' but also 'what to delegate to AI and what people should focus on.'",
						],
					},
				],
				highlightBox: {
					title: "Key Contribution",
					content:
						"Successfully ported the frontend architecture designed in the web project (IIFE modules, metadata routing, P-Edit-DataTable, etc.) to the Android app. Led a team of 3 developers by building 30 AI context documents enabling consistent development via Claude Code, and automated Oracle→SQLite query porting and other repetitive tasks with AI. Designed VPN-based online/offline mode switching and bidirectional data flow for offline inspection forms and PDF markup synchronization.",
				},
				gallery: [],
			},

			// ----------------------------------------------------------
			// 01. SmartOn 2.0
			// ----------------------------------------------------------
			{
				id: "project-smarton",
				name: "SmartOn 2.0 — Gas Inspector Tablet Work System",
				client: "Korea Gas Safety Corporation (KGS)",
				period: "2025.03 ~ 2026.01",
				role: "Frontend Architect / Tech Lead (Leading 4 Juniors)",
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
					"A project to fully modernize the gas inspector tablet work system. Completely rebuilt from legacy jQuery + Vue 1.x + jqGrid to a modern Vue 3 + PrimeVue architecture. A tablet system operating [metric]500+ work screens[/metric] in a government air-gapped network (no Node.js installation, no external CDN access).",
				achievements: [
					{
						title: "Air-Gapped Frontend Architecture Design",
						items: [
							"Designed an IIFE pattern-based module system in an air-gapped network where Node.js, npm, Webpack/Vite were unavailable, securing private scope and preventing global pollution",
							"Imported libraries as UMD builds and designed a dependency graph for load order management",
							"Implemented a Promise-based ScriptLoader for on-demand JS file loading, reducing initial load time by [metric]50%[/metric]",
						],
					},
					{
						title: "Metadata-Driven Auto-Routing Menu System",
						items: [
							"Designed a structure where MenuRegistry caches menu metadata (menuId, compName, script path, etc.) from the server, ScriptLoader dynamically loads them, and ContentPanel auto-mounts Vue components",
							"Zero frontend code changes when adding new menus, reducing development time by [metric]80%[/metric]",
						],
					},
					{
						title:
							"Inline Edit Grid (P-Edit-DataTable) — Proprietary Design",
						items: [
							"A 3-layer architecture self-designed on PrimeVue DataTable, without paid solutions like AG Grid",
							"useEditGridFactory: Row state machine + cell-level dirty tracking + required/duplicate validation + batch save payload auto-classification",
							"p-edit-datatable: VNode transformation + state-based visual feedback + change history popover",
							"p-edit-column: Declarative required/unique/disabled props",
							"Data editing workflow simplified from [metric]4 steps → 1 step[/metric], business developer CRUD code reduced by [metric]80%[/metric]",
						],
					},
					{
						title: "Design System & PrimeBridge Module",
						items: [
							"Configured a custom preset (smartonPreset) using PrimeVue 4.x's definePreset API, defining semantic tokens for light/dark mode via colorScheme: { light, dark } structure",
							"darkModeSelector configuration enabled 26 components to switch themes with a single CSS class toggle, reducing component config code by [metric]95%[/metric]",
						],
					},
					{
						title: "Stateful App Shell Tab System",
						items: [
							"Designed a Workspace Navigator that functions as the entire system's App Shell beyond simple navigation",
							"Independent Vue app instances per tab for state isolation, event bus-based PopupService for automatic child popup cleanup when parent tab closes",
							"WeakMap-based circular reference prevention, passed [metric]100-tab stress test[/metric] with 0 memory leaks",
						],
					},
					{
						title:
							"Tab Edit Mode UX Innovation — Inspired by iOS Home Screen App Management, 4-Phase Progressive Evolution",
						description:
							"In an environment where each inspector maintains 5-10+ tabs simultaneously, innovated the fixed tab bar into an In-place Edit Layout to solve accidental X-button taps, inability to undo, and lack of batch cleanup.",
						items: [
							"Removed X buttons and introduced Trash Zone drag-delete. Combined SortableJS delay:500 + onChoose/onUnchoose/onStart callbacks for precise gesture branching: quick tap (<500ms → switch) / long-press+drag (→ reorder) / long-press+release (→ enter edit mode). Voluntarily proposed and implemented before client request.",
							"Reflected field feedback that 'individual dragging is fatiguing for bulk tab deletion' by implementing iOS wiggle animation, ⊖ button delete marking (Set toggle + rollback), blur overlay, and ConfirmPopup save/cancel (snapshot rollback) design.",
							"Optimized individual delete API N calls to a single deleteBatchUserOpenMenu batch call.",
							"Introduced driver.js coachmark onboarding, resolving check state loss during step transitions caused by DOM recreation using closure variables.",
						],
						metrics: ["Feedback reflected within 2 weeks", "Delete API N → 1"],
					},
					{
						title: "Tablet UX Optimization",
						items: [
							"Hammer.js — Swipe panel open/close, long-press gestures",
							"OverlayScrollbars — Space-saving custom scroll over native, v-os-scroll directive for easy integration",
							"Sortable.js & Swiper.js extensively used in Tab Edit Mode",
						],
					},
				],
				learningPoints: [
					{
						topic: "Air-Gapped IIFE Module System = Micro Frontend Principles",
						paragraphs: [
							"In a government closed network with no access to Node.js/npm/bundlers, I needed to modularize 500+ screens. Looking back, the IIFE-based architecture I designed was essentially an implementation of [metric]Islands Architecture / Micro Frontend principles[/metric] through browser-native mechanisms.",
							"Each screen operates as an independent Vue app instance, managed by a common shell (mainPage.html) — structurally identical to Webpack Module Federation. This project taught me that architecture patterns like MFA and Islands are concepts, not tool dependencies. Understanding the principles allows applying them even in extreme constraint environments.",
						],
					},
					{
						topic: "P-Edit-DataTable — Component Design That Elevated Team-Wide Productivity",
						paragraphs: [
							"With 500+ screens sharing repetitive CRUD patterns but no budget for commercial solutions like AG Grid, I designed a custom 3-layer architecture (useEditGridFactory hook + p-edit-datatable wrapper + p-edit-column directive). The most important consideration wasn't technical sophistication but [metric]developer experience (DX)[/metric].",
							"By hiding complexity behind a declarative API and letting junior developers focus solely on CRUD implementation, we achieved an [metric]80% code reduction[/metric]. I learned that a component's true impact is measured not by one person's technical excellence, but by how much redundant work it eliminates across the entire team.",
						],
					},
				],
				highlightBox: {
					title: "Key Contributions",
					content:
						"Independently designed the entire frontend architecture and built an environment where 4 junior developers could work consistently. Established code conventions based on ESLint/Prettier, achieved new developer onboarding within 1 day through development guide documentation. Voluntarily proposed and implemented differentiated UX features like Tab Edit Mode and drag-delete before client requests, establishing system identity.",
				},
				gallery: [
					{
						layout: "portrait",
						items: [
							{
								src: `${IMG}/01-smarton/dashboard-1.png`,
								alt: "Dashboard light mode",
								caption: "Dashboard (Light)",
								subCaption:
									"Today's goals · WTD · Notices · Favorites",
							},
							{
								src: `${IMG}/01-smarton/dashboard-2-favorites-dnd.png`,
								alt: "Favorites drag and drop",
								caption: "Dashboard (Favorites)",
								subCaption: "Reorder favorites via drag and drop",
							},
							{
								src: `${IMG}/01-smarton/dashboard-3-darkmode.png`,
								alt: "Dashboard dark mode",
								caption: "Dashboard (Dark)",
								subCaption:
									"1-line theme switch via design tokens",
							},
							{
								src: `${IMG}/01-smarton/edit-grid-1.png`,
								alt: "P-Edit-DataTable",
								caption: "P-Edit-DataTable",
								subCaption:
									"Row state (saved/added/modified/deleted) visual feedback",
							},
							{
								src: `${IMG}/01-smarton/edit-grid-2.png`,
								alt: "Edit grid state icons",
								caption: "Edit Grid (State)",
								subCaption:
									"Cell-level dirty tracking + change highlighting",
							},
							{
								src: `${IMG}/01-smarton/edit-grid-3.png`,
								alt: "Edit grid change history popover",
								caption: "Edit Grid (Change History)",
								subCaption:
									"Before → after popover on modified row click",
							},
							{
								src: `${IMG}/01-smarton/edit-grid-4-required-check.png`,
								alt: "Required validation popover",
								caption: "Edit Grid (Required)",
								subCaption:
									"Auto-focus on missing cell + Popover guidance",
							},
							{
								src: `${IMG}/01-smarton/edit-grid-5-duplicate-check.png`,
								alt: "Duplicate validation",
								caption: "Edit Grid (Duplicate Check)",
								subCaption:
									"Declarative uniqueFields duplicate detection",
							},
							{
								src: `${IMG}/01-smarton/list-row-expand.png`,
								alt: "List row expansion",
								caption: "Data List",
								subCaption:
									"Inline detail display via row expansion",
							},
							{
								src: `${IMG}/01-smarton/input-form.png`,
								alt: "Input form screen",
								caption: "Input Form",
								subCaption:
									"PrimeVue component-based inspection data input",
							},
							{
								src: `${IMG}/01-smarton/popup-inspector-assign.png`,
								alt: "Inspector batch assignment popup",
								caption: "Popup (Inspector Assignment)",
								subCaption:
									"PopupService-based independent Vue app instance",
							},
							{
								src: `${IMG}/01-smarton/popup-approval.png`,
								alt: "Approval submission popup",
								caption: "Popup (Approval)",
								subCaption:
									"Drag-reorderable approval line submission popup",
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
										alt: "Long-press drag switching",
									},
									{
										src: `${IMG}/01-smarton/single-tab-longpress-delete.png`,
										alt: "Trash Zone drag delete",
									},
								],
								caption: "Single Tab Gestures",
								subCaption:
									"Long-press drag switching · Trash Zone drag delete",
							},
							{
								images: [
									{
										src: `${IMG}/01-smarton/tab-edit-coachmark-1.png`,
										alt: "Coachmark Step 1",
									},
									{
										src: `${IMG}/01-smarton/tab-edit-coachmark-2.png`,
										alt: "Coachmark Step 2",
									},
								],
								caption: "Coachmark Onboarding",
								subCaption:
									"driver.js 2-step tour — Auto-display on edit mode entry",
							},
							{
								images: [
									{
										src: `${IMG}/01-smarton/tab-edit-delete-toggle.png`,
										alt: "iOS wiggle delete toggle",
									},
									{
										src: `${IMG}/01-smarton/tab-edit-longpress-switch.png`,
										alt: "Edit mode long-press switching",
									},
									{
										src: `${IMG}/01-smarton/tab-edit-batch-save.png`,
										alt: "ConfirmPopup batch save",
									},
								],
								caption: "Edit Mode Controls",
								subCaption:
									"⊖ Delete marking · Long-press reorder · ConfirmPopup batch save",
							},
						],
					},
				],
			},

			// ----------------------------------------------------------
			// 02. Satellite Frequency Management System
			// ----------------------------------------------------------
			{
				id: "project-satellite",
				name: "Satellite Frequency Management System — Interactive Distribution Chart",
				client: "Korea Communications Agency (KCA)",
				period: "2024.12 ~ 2025.03",
				role: "Interactive Distribution Chart Design & Solo Development",
				stack: [
					"React",
					"TypeScript",
					"TanStack Query",
					"Context API",
					"Emotion",
					"Framer Motion",
				],
				description:
					"Independently designed and developed an Interactive distribution chart visualizing satellite frequency usage. Due to the complex layout where 4 rows (Distribution, Frequency, Purpose, Usage) align and connect along the frequency axis, general chart libraries (D3, Chart.js, etc.) were insufficient, so I built a custom implementation using pure React + Emotion without any chart library. A data visualization project rendering 6 bands (L, S, C, X, Ku-V) for public/internal use with dynamically calculated positions and widths based on frequency values.",
				achievements: [
					{
						title:
							"Declarative Chart Structure via Compound Component Pattern",
						items: [
							"Minimized coupling between components using Band > Band.Header / Band.Body / Band.Arrow hierarchy",
							"Declaratively placed 4 rows (BunBae, JuPaSu, YongDo, EYong) inside Band.Body for collaboration efficiency and handover readiness",
						],
					},
					{
						title:
							"Server-Client State Separation — useReducer State Machine",
						items: [
							"Cached server state with React-Query (staleTime: Infinity)",
							"Managed client state (scale 0.3~1.75x, actual scale toggle, hover highlighting) via Context API + useReducer with 4-action dispatch-based state machine",
							"MyBatis hierarchical ResultMap (ReleaseSectionDTO → BandDTO → BandDetailDTO 3-level nested collection) returning entire tree data in a single API call",
						],
					},
					{
						title:
							"Frequency Coordinate Calculation Engine — Proprietary Design",
						items: [
							"Implemented a coordinate mapping engine converting frequency ranges to pixel widths",
							"Precision control with VIRTUAL_TOTAL_WIDTH and MAGNIFICATION_FACTOR constant maps for 6 bands supporting dual actual/default scale modes",
							"Generator function (mergeSortedArraysLazy) for sorted array merging, event-based interval splitting algorithm for automatic distribution → frequency interval mapping",
							"Label overlap detection + adaptive font size auto-reduction",
						],
					},
					{
						title: "React Portal + Framer Motion",
						items: [
							"Separated Toolbar via Portal for independent rendering unaffected by chart scale changes",
							"Framer Motion spring physics (stiffness: 300, damping: 30) for actual scale toggle animation",
							"Tippy.js Portal for precise Tooltip positioning",
						],
					},
					{
						title:
							"Contextual UI + Scroll Shadow + Hover Highlighting",
						items: [
							"Behavior-driven UI showing action buttons only on mouse hover, reducing screen complexity",
							"ScrollShadow on horizontal-scroll bands providing gradient shadow visual hints for left/right edge detection",
							"Context propagation on Usage (EYong) element hover for cross-chart related element highlighting",
						],
					},
				],
				learningPoints: [
					{
						topic: "CSS-in-JS Technology Choice — Emotion vs Vanilla Extract",
						paragraphs: [
							"Emotion was chosen for this project because positions and widths had to be dynamically calculated from frequency values. While Vanilla Extract is superior in performance with zero runtime overhead, the nature of chart development demands careful consideration of dynamic styling limitations.",
							"Vanilla Extract generates static CSS entirely at build time, so injecting geometric values like width or left that change at runtime based on data is constrained. Emotion, on the other hand, computes and injects styles at render time, making it well-suited for coordinate-based dynamic layouts.",
							"In retrospect, a [metric]hybrid approach[/metric] would have been optimal. Static styles like colors, fonts, and base layouts could have been handled by Vanilla Extract to eliminate rendering overhead, while dynamic styles computed from real-time data — chart positions and widths — could be separated into inline styles, capturing the best of both technologies.",
						],
					},
					{
						topic: "Custom Chart Engine vs Library",
						paragraphs: [
							"D3, Chart.js, and Recharts were evaluated, but the structure where distribution, frequency, usage, and utilization rows align and connect along a shared frequency axis was impossible to implement with general-purpose chart libraries' X-Y axis models. Fighting a library's abstractions would have taken more time than building from primitives, so I built a custom implementation with React + Emotion.",
							"By minimizing coupling through the Compound Component pattern (Band > Header/Body/Arrow) and achieving [metric]full control[/metric] over the coordinate mapping engine, zoom levels, and cross-row hover highlighting, I learned that building from scratch is the right decision when the visualization domain is truly unique.",
						],
					},
				],
				gallery: [
					{
						layout: "default",
						items: [
							{
								src: `${IMG}/02-satellite/distribution-chart.png`,
								alt: "Interactive distribution chart full screen",
								caption: "Interactive Distribution Chart",
								subCaption:
									"Public/Internal frequency band distribution, purpose, and usage visualization",
							},
							{
								src: `${IMG}/02-satellite/chart-zoom-toggle.png`,
								alt: "Scale control toolbar",
								caption: "Contextual Toolbar",
								subCaption:
									"Zoom in/out buttons + actual scale toggle (visible on mouse over)",
							},
						],
					},
				],
			},

			// ----------------------------------------------------------
			// 03. Smart Factory PMS
			// ----------------------------------------------------------
			{
				id: "project-pms",
				name: "Smart Factory PMS Development & Maintenance",
				client:
					"Ministry of SMEs and Startups / Smart Manufacturing Innovation Promotion Agency",
				period: "2023.03 ~ 2024.11",
				role: "Agreement Module Development · Common Components Self-Discovery & Solo Development · State Management Design · Maintenance",
				stack: [
					"React",
					"Context API",
					"useReducer",
					"Ant Design",
					"Spring Boot",
					"MyBatis",
				],
				description:
					"Responsible for the Agreement module in a 25-member dev team (4 parts: Pre-review/Agreement/Evaluation/Common). In a rush schedule where everyone focused on building their screens with no state management system and inconsistent code styles, I recognized the importance of React state management and self-designed a Context API-based global state management system. While belonging to the business (Agreement) team, I self-discovered, solo-developed common components needed across the entire team, and contributed to team code consistency and productivity through code reviews and usage guides.",
				achievements: [
					{
						title:
							"Self-Designed Global State Management via Context API + useReducer",
						items: [
							"Applied systematic state management using Context API + useReducer when Redux adoption was impossible mid-development",
							"Designed [metric]4 independent Contexts[/metric] separated by domain, with State/Dispatch split custom hooks to eliminate Props Drilling",
						],
					},
					{
						title:
							"4 Common Components Self-Discovered & Solo-Developed → Code Review & Team Distribution",
						items: [
							"While belonging to the business (Agreement) part rather than the common team, identified repeating UI patterns (list, search, popup, tabs) across the team and designed reusable common components",
							"Built to configure screens with declarative settings only, creating a quick-apply onboarding environment for new screen development",
							"Ensured team code consistency through code reviews and usage guides",
						],
					},
					{
						title:
							"Agreement Changes — Change Visualization UX Proprietary Design",
						items: [
							"Light yellow background highlighting on changed cells + original value popover on input focus for space-efficient before/after comparison",
							"ChangePopover & ChangeCheckText components for instant change detection in both read and input modes",
							"Auto-selection + crown icon (blue = after change, gray = before change) visualization when adding/removing supply company representatives",
							"Automatic annual/item-level budget total validation for S1↔S2",
						],
					},
					"Full-stack development across Controller → Service → Mapper (MyBatis) → SQL queries",
					"Voluntarily joined the maintenance project to achieve personal goals for development completeness. Processed [metric]approximately 30,000[/metric] SR tickets including board responses and customer phone support",
				],
				learningPoints: [
					{
						topic: "Mid-Development State Management Adoption — A Pragmatic Architecture Decision",
						paragraphs: [
							"I joined a 25-person team where development was already underway. With no state management system in place and prop drilling everywhere, introducing Redux at this stage would have been too disruptive. I chose Context API + useReducer as the [metric]least disruptive improvement[/metric].",
							"By separating 4 domain-specific independent Contexts and structuring them with State/Dispatch split custom hooks, I established order. The trade-off of broader re-render scope compared to Redux selectors was acceptable — for an admin-panel use case, the organizational improvement far outweighed the performance cost. The best state management solution isn't the technically optimal one, but the one the existing team can adopt without stopping development.",
						],
					},
				],
				gallery: [
					{
						layout: "default",
						items: [
							{
								src: `${IMG}/03-pms/search-list.png`,
								alt: "PMS search and list",
								caption: "Agreement Change Search · List",
								subCaption:
									"Common List component — Auto-configured search criteria + table + pagination",
							},
							{
								src: `${IMG}/03-pms/before-after.png`,
								alt: "PMS before/after comparison",
								caption: "Change Info Detail",
								subCaption:
									"Light yellow background highlighting + crown icon for representative visualization",
							},
							{
								src: `${IMG}/03-pms/crud-confirm.png`,
								alt: "PMS add/delete/modify confirmation",
								caption: "Add · Delete · Modify Confirmation",
								subCaption:
									"Blue (add) / Red (delete) / Yellow (modify) row color coding + budget table",
							},
						],
					},
				],
			},

			// ----------------------------------------------------------
			// 04. Online Certificate System
			// ----------------------------------------------------------
			{
				id: "project-certificate",
				name: "Online Certificate Application & Reception System Pilot",
				client: "Korea Gas Safety Corporation (KGS)",
				period: "2022.09 ~ 2023.02",
				role: "New Feature Development · Mobile Screen Implementation",
				stack: [
					"Spring",
					"JSP",
					"jQuery",
					"OZ Report",
					"MarkAny",
					"ePapyrus",
				],
				achievements: [
					"Developed mobile training certificate issuance feature for a legacy (Spring, JSP) government intranet system",
					"Configured OZ (document generation) → MarkAny (security) → ePapyrus (viewer) 3-solution sequential pipeline",
				],
				gallery: [
					{
						layout: "portrait",
						items: [
							{
								src: `${IMG}/04-certificate/certificate-1.png`,
								alt: "Mobile identity verification login",
								caption: "Identity Verification System",
								subCaption:
									"KGS Cyber Branch mobile login + identity verification",
							},
							{
								src: `${IMG}/04-certificate/certificate-2.png`,
								alt: "Mobile training certificate inquiry",
								caption: "Training History Inquiry",
								subCaption:
									"Gas safety training completion inquiry + PDF certificate issuance",
							},
						],
					},
				],
			},

			// ----------------------------------------------------------
			// 05. AI Drug Discovery Platform
			// ----------------------------------------------------------
			{
				id: "project-ai-drug",
				name: "AI Drug Discovery Platform Development",
				client:
					"Korea Research Institute of Chemical Technology (KRICT)",
				period: "2022.03 ~ 2022.06",
				role: "Led Overall Platform Design & Development",
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
						title: "Django + Flask Dual-Architecture Platform Design",
						items: [
							"Designed a dual architecture separating Django (main web + user management) and Flask (analysis module API)",
							"Solo-implemented the entire pipeline from SMILES structure input → 15+ AI analysis module execution → result visualization + PDF/CSV download",
						],
					},
					{
						title:
							"Python multiprocessing-Based Parallel Analysis",
						items: [
							"Migrated from sequential single-module execution to Pool-based parallel processing",
							"Stable processing with independent processes per module even when running 12 modules simultaneously, significantly reducing analysis time and ensuring scalability for module additions",
						],
					},
					{
						title: "Real-Time Job Monitoring UX",
						items: [
							"Real-time visualization of per-module status (waiting/running/completed) via Axios polling",
							"One-glance Job Status with SMILES molecule structure images, user control with Pause/Resume functionality",
						],
					},
					{
						title:
							"Crontab Batch Automation + SMILES Editor Integration",
						items: [
							"Configured a batch scheduler to periodically auto-execute jobs in 'Waiting' status",
							"Integrated a molecular structure editor (SMILES Editor) into the job registration screen for intuitive input UX — visually draw molecules and convert to SMILES code",
						],
					},
				],
				gallery: [
					{
						layout: "default",
						items: [
							{
								src: `${IMG}/05-ai-drug/main.png`,
								alt: "AI Drug Discovery Platform main screen",
								caption: "Main Landing Page",
								subCaption:
									"Cardiotoxicity, BBB Permeability, and other analysis module introductions",
							},
							{
								src: `${IMG}/05-ai-drug/module-list.png`,
								alt: "Analysis module list",
								caption: "Module List",
								subCaption:
									"15 AI analysis module management (API name, Level, registration date)",
							},
							{
								src: `${IMG}/05-ai-drug/task-register.png`,
								alt: "Job registration screen",
								caption: "Register Job",
								subCaption:
									"Visual molecular structure editing via SMILES Editor + SMILES code list registration",
							},
							{
								src: `${IMG}/05-ai-drug/task-list.png`,
								alt: "Job list",
								caption: "Job List",
								subCaption:
									"SMILES input values, selected modules, status (PAUSE/COMPLETE), play/delete actions",
							},
							{
								src: `${IMG}/05-ai-drug/realtime-progress.png`,
								alt: "Per-module real-time progress",
								caption: "Job Detail",
								subCaption:
									"Molecule structure visualization + 12-module real-time progress monitoring",
							},
							{
								src: `${IMG}/05-ai-drug/result-view.png`,
								alt: "Module execution result screen",
								caption: "Result Detail",
								subCaption:
									"Per-module prediction results + SMILES property info + PDF/CSV download",
							},
							{
								src: `${IMG}/05-ai-drug/export-pdf-csv.png`,
								alt: "Result PDF/CSV download",
								caption: "Export Results",
								subCaption:
									"PDF report (molecular structure + analysis results) and CSV spreadsheet download",
							},
						],
					},
				],
			},

			// ----------------------------------------------------------
			// 06. LIME-DQM
			// ----------------------------------------------------------
			{
				id: "project-lime-dqm",
				name: "LIME-DQM AI Training Data Quality Verification Platform",
				client: "In-house Solution",
				period: "2021.03 ~ 2021.11",
				role: "Led Overall Platform Design & Development",
				stack: ["Django", "JavaScript", "Elasticsearch", "Kibana"],
				description:
					"An AI training data quality auto-verification platform used by PMO organizations in NIA AI Training Data Construction projects. Automatically inspects structured/unstructured data including text, image, video, and audio through [metric]100+ quality measurement modules[/metric], handling the entire quality diagnosis process from data profiling, visual inspection, statistics dashboard, to result reports in a single platform.",
				achievements: [
					{
						title:
							"6-Stage Quality Diagnosis Workflow — Full Design & Implementation (Frontend + Backend)",
						items: [
							"Implemented a refresh-free single-page async UX covering quality metric definition → data profiling → data loading → quality inspection → result report",
							"On the backend, designed a 6-stage × 7-state × 2-role (Auditor/Collector) review/approval workflow as a 2-layer state model supporting multi-reviewer parallel approval",
						],
					},
					{
						title:
							"Large-Scale Unstructured Data Loading & Analysis Algorithm — Original Design",
						items: [
							"Designed an infinite-depth JSON abbreviation/recursive traversal algorithm",
							"Built an auto-detection/conversion pipeline for JSON/CSV/XML/Excel (4 formats)",
							"Combined chunk-based parallel processing to reduce loading/analysis time by [metric]6x to 10x[/metric], with automatic per-column profiling computation",
						],
					},
					{
						title:
							"Led Company's First Elasticsearch Adoption",
						items: [
							"Designed purpose-specific index separation (source data/inspection results/batch analysis)",
							"Implemented search_after deep paging and full ES CRUD, improving data query speed by [metric]10x+[/metric]",
							"Utilized ES pipeline in django-crontab-based batch analysis automation",
						],
					},
					{
						title:
							"Large-Scale Media File Visual Inspection Tool Design",
						items: [
							"Personally proposed and got approved the ES integration idea — indexed media metadata inside Zips to ES for fast querying/extraction",
							"Tried and compared 3 approaches for bulk Zip extraction (parallel processing/bulk extraction/multiprocessing) to determine the optimal method",
							"Real-time inspection progress aggregation via ES aggregation",
						],
					},
					{
						title:
							"JS/Django Large-Scale Duplicate Code Refactoring — Proposed & Executed",
						items: [
							"Directly proposed to the team lead and systematically modularized duplicate code across both layers",
							"In JS, resolved nested modal z-index collision issues with a stack counter formula, dynamically generated A4-formatted print-optimized reports for inspection results",
						],
					},
				],
				gallery: [
					{
						layout: "portrait",
						items: [
							{
								src: `${IMG}/06-lime-dqm/data-load.png`,
								alt: "LIME-DQM data loading and structure analysis",
								caption: "Data Loading · Structure Analysis",
								subCaption:
									"Auto-extraction of JSON key Level, type, mapping + profiling item selection",
							},
							{
								src: `${IMG}/06-lime-dqm/quality-inspection.png`,
								alt: "LIME-DQM quality metric-based inspection",
								caption: "Quality Metric-Based Inspection Plan",
								subCaption:
									"Verification plan version control + per-dataset metric/inspection module mapping table",
							},
							{
								src: `${IMG}/06-lime-dqm/report-output.png`,
								alt: "LIME-DQM inspection result report",
								caption: "Inspection Result Report Output",
								subCaption:
									"A4-formatted print-optimized dynamic report + Prev/Next page navigation",
							},
						],
					},
				],
			},

			// ----------------------------------------------------------
			// 07. LabelOn Admin
			// ----------------------------------------------------------
			{
				id: "project-labelon",
				name: "LabelOn Internal Admin Page Development",
				client: "In-house Solution",
				period: "2020.09 ~ 2021.02",
				role: "Back-office Development",
				stack: ["Django", "jQuery", "Ajax", "ORM", "Bootstrap"],
				description:
					"Internal management system for the company's AI training data construction platform LabelOn. Back-office development managing [metric]hundreds of thousands of operational data records[/metric] from cloud worker/reviewer labeling tasks to project, dataset, member, and settlement management.",
				achievements: [
					{
						title:
							"First Company Project — Developed 7 Management Modules Under Mentor Guidance",
						items: [
							"Handled most development from UI design to backend API, completing within 6 months",
							"Implemented core CRUD modules for member, project, dataset, annotator, and reviewer task management",
						],
					},
					{
						title:
							"Voluntarily Improved UX as a Junior Developer — Implemented Refresh-Free Page Transitions",
						items: [
							"Questioned the page refreshes on every transition in the SSR environment, self-studied AJAX concepts and applied Django SSR partial update patterns",
							"Without it being a requirement, proposed and implemented refresh-free search, paging, and filtering UX for [metric]hundreds of thousands of table records[/metric]",
						],
					},
					{
						title:
							"DB-Driven Dynamic Menu + Role-Based Access Control",
						items: [
							"Managed menu structure from DB via Menu/MenuPermission models, dynamically generating accessible menus based on admin Role",
							"Implemented OTP 2FA, SMS sending, and address search API for security and auxiliary features",
						],
					},
				],
				gallery: [
					{
						layout: "default",
						items: [
							{
								src: `${IMG}/07-labelon/login-otp.png`,
								alt: "LabelOn Admin OTP login",
								caption: "OTP Login",
								subCaption:
									"Email + password + OTP 2FA (SMS) secure login",
							},
							{
								src: `${IMG}/07-labelon/sidebar-menu.png`,
								alt: "LabelOn Admin DB-driven dynamic menu",
								caption: "DB-Driven Dynamic Menu",
								subCaption:
									"Menu/MenuPermission model-based role access control + multi-level menu structure",
							},
							{
								src: `${IMG}/07-labelon/log-filter-excel.png`,
								alt: "LabelOn Admin list filtering and Excel download",
								caption: "List Filtering · Excel Export",
								subCaption:
									"Filter set/clear/reapply state management + Excel download toolbar",
							},
						],
					},
				],
			},
		],
	},

	// ============================================================
	// Modutek
	// ============================================================
	{
		name: "Modutek",
		period: "2019.08 ~ 2019.12",
		description: "Web Development",
		projects: [
			{
				id: "project-etri",
				name: "Research Support System Web Development",
				client:
					"Electronics and Telecommunications Research Institute (ETRI)",
				period: "2019.08 ~ 2019.12",
				role: "Web Frontend Development Lead",
				stack: [
					"Node.js",
					"Express",
					"EJS",
					"JavaScript ES6",
					"Swagger UI",
				],
				achievements: [
					"First professional project — Led web frontend development using Node.js (Express) + EJS",
					"Integrated with researcher (Python) RESTful APIs, utilized Swagger UI for API verification and testing",
					"Led communication with researchers via Slack, attended weekly on-site meetings at the research institute",
				],
				gallery: [],
			},
		],
	},
];
