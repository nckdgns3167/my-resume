import type { Strength } from "./types";

export const strengths: Strength[] = [
	{
		title: "An Architect Who Turns Constraints into Design Opportunities",
		description:
			"I designed the frontend architecture for a tablet system running [metric]500+ business screens[/metric] in an air-gapped network. Without npm or bundlers, I implemented an [tip=islands,metric]Islands Architecture[/tip] using [tip=iife]IIFE-based module scoping[/tip] and [tip=scriptloader]Promise-based ScriptLoader[/tip] for on-demand JS loading per screen, [metric]reducing initial load time by ~50%[/metric].\n\nI extended this architecture to an Android offline app, running the same web frontend on an embedded [tip=nanohttp]LocalWebServer (NanoHTTPD)[/tip] and designing an Oracle→SQLite auto-translation layer for [tip=oracle-sqlite,metric]128 tables[/tip]. Achieved app initial load [metric]9.9MB → ~2.5MB (~75% reduction)[/metric] through Gzip + lazy loading + Defer strategy. A single architectural decision became a [metric]reusable design asset[/metric] spanning both web and app platforms.\n\n[tip=meta-routing]Metadata-driven auto-routing[/tip] achieves [metric]zero frontend code changes[/metric] when adding new menus — designing for extensibility even under constraints.",
		tipPopovers: [
			{
				id: "iife",
				title: "IIFE Module Pattern",
				content:
					"Immediately Invoked Function Expression — isolates each screen's JS in a self-executing function to prevent global scope pollution in air-gapped environments without npm/webpack.",
			},
			{
				id: "scriptloader",
				title: "Promise-based ScriptLoader",
				content:
					"A custom loader that dynamically injects <script> tags on screen entry and tracks load completion via Promises. Ensures dependency order while loading code only when needed.",
			},
			{
				id: "islands",
				title: "Islands Architecture",
				content:
					"Instead of a monolithic SPA, the shell (mainPage.html) manages tabs while each business screen is mounted as an independent Vue app instance ('island'). Similar to Astro's Islands concept.",
			},
			{
				id: "nanohttp",
				title: "NanoHTTPD Embedded Web Server",
				content:
					"A lightweight Java HTTP server running inside the Android app. Allows the WebView to connect via localhost and run the existing web frontend without internet/VPN.",
			},
			{
				id: "oracle-sqlite",
				title: "Oracle→SQLite Auto Translation",
				content:
					"An automatic translation layer converting Oracle DDL to SQLite-compatible DDL. Handles data type mapping (NUMBER→REAL, VARCHAR2→TEXT, etc.), sequence→AUTOINCREMENT conversion, and trigger generation, all automated with AI.",
			},
			{
				id: "meta-routing",
				title: "Metadata-driven Auto Routing",
				content:
					"Reads screen ID, JS path, and permission info from the DB menu table (MENU_INFO) to dynamically generate menus without frontend code changes. Adding a new screen only requires an INSERT into the DB.",
			},
		],
	},
	{
		title: "An Engineer Who Elevates Team Velocity Through Structure",
		description:
			"I designed a structure enabling 4 junior developers to consistently build [metric]500+ business screens[/metric]. PrimeBridge — a design system wrapping the Vue UI framework (PrimeVue) for the project — was built on a [tip=primebridge,metric]DI container pattern[/tip], ensuring the entire team develops on unified components, styles, and behavior rules.\n\nThe core [tip=pedit]P-Edit-DataTable[/tip] embeds row-level [tip=dirty-tracking]dirty tracking[/tip], required-field validation, and auto-classified save payloads, [metric]reducing duplicate code by ~80%[/metric] in CRUD development and achieving junior developer [metric]onboarding within 1 day[/metric].\n\nThe tab management system was also designed as a [tip=tab-arch,metric]multi-layered architecture[/tip] with built-in [tip=deferred-load]deferred loading[/tip], search condition auto-restore, and concurrency guards — focusing on [metric]structures that elevate overall team productivity[/metric].",
		tipPopovers: [
			{
				id: "primebridge",
				title: "PrimeBridge — DI Container Pattern",
				content:
					"A plugin system where 8 satellite modules (Core, Directives, Inputs, Datepicker, Dialog, DataTable, EditGrid, InnerTabs) auto-initialize on a shared context (App._PrimeBridgeCtx) in priority order. Injects the full UI ecosystem into each Islands app instance.",
			},
			{
				id: "pedit",
				title: "P-Edit-DataTable",
				content:
					"An inline-editing data grid component. Automatically tracks row add/update/delete states and classifies changed rows by status (INSERT/UPDATE/DELETE) for server submission on save.",
			},
			{
				id: "dirty-tracking",
				title: "Dirty Tracking",
				content:
					"A mechanism that compares original and current values at the cell level to detect changes. Modified cells are visually highlighted, and row-level CRUD status (C/U/D) is automatically updated.",
			},
			{
				id: "deferred-load",
				title: "Deferred Loading",
				content:
					"Inactive tabs retain only metadata (screen ID, search conditions) while DOM/components are unmounted. ContentPanel re-mounts the Vue app on tab activation, saving memory.",
			},
			{
				id: "tab-arch",
				title: "6-Layer Tab Architecture",
				content:
					"Template → State Management → Orchestration → Component Mounting → Server Sync → Styling — 6 layers operating independently, structurally handling tab switching, drag reordering, and server synchronization.",
			},
		],
	},
	{
		title: "An Engineer Who Designs Across All Layers, from Frontend to DB",
		description:
			"While specializing in frontend, I directly design and implement [tip=fullstack,metric]the full stack — Controller → Service → Mapper → SQL[/tip] — when needed. I built Spring Boot + MyBatis backends for Smart Factory PMS, and designed a [tip=django-flask,metric]Django + Flask dual architecture[/tip] with Python multiprocessing parallel pipelines for an AI Drug Discovery platform.\n\nI ensure the frontend can get all needed data in a single API call by structurally preventing the [tip=n-plus-one]N+1 problem[/tip]. Using MyBatis [tip=resultmap,metric]3-level ResultMap[/tip], a single SQL automatically assembles parent → child → grandchild data into a tree structure. In LIME-DQM, Elasticsearch index separation with [tip=es-paging]search_after deep pagination[/tip] enables [metric]querying 1M+ quality data records within seconds[/metric].\n\nWith hands-on experience across [tip=four-db,metric]4 database systems[/tip] — Oracle, MySQL, SQLite, and Elasticsearch — I consider optimal data structures for frontend consumption from the API design stage.",
		tipPopovers: [
			{
				id: "fullstack",
				title: "Spring MVC Full Stack Layers",
				content:
					"Controller (HTTP endpoints) → Service (business logic) → Mapper (MyBatis SQL mapping) → SQL (Oracle/MySQL queries) — experience designing and implementing all 4 layers as a frontend developer.",
			},
			{
				id: "django-flask",
				title: "Django + Flask Dual Framework",
				content:
					"Django handles web UI and project management, while Flask serves 15+ AI analysis modules as REST APIs. Python multiprocessing enables parallel execution of multiple analyses.",
			},
			{
				id: "n-plus-one",
				title: "N+1 Problem",
				content:
					"An inefficient query pattern where a list is fetched once (1), then each item's details are fetched individually (N times). Example: fetch 6 bands (1 query) → fetch details for each band (6 queries) = 7 total. Query count explodes as data grows.",
			},
			{
				id: "resultmap",
				title: "MyBatis 3-Level ResultMap",
				content:
					"A MyBatis mapping feature that automatically assembles flat JOIN results into a parent → child → grandchild tree structure. Example: ReleaseSection → Band → BandDetail in a single SQL call, eliminating N+1 at the root.",
			},
			{
				id: "es-paging",
				title: "Elasticsearch search_after",
				content:
					"Traditional from+size pagination degrades sharply beyond 10,000 records. search_after uses the last sort value from the previous page to fetch the next, enabling efficient deep pagination over large datasets.",
			},
			{
				id: "four-db",
				title: "4 Database Systems Experience",
				content:
					"Oracle (SmartOn/PMS main DB), MySQL (PMS partial), SQLite (offline app local DB), Elasticsearch (LIME-DQM quality data search/aggregation) — schema design and query optimization experience tailored to each DB's characteristics.",
			},
		],
	},
	{
		title: "A Dev Infrastructure Engineer Who Designs & Operates AI Agents",
		description:
			"I operate Claude Code not as a personal code generator but as [metric]team development infrastructure[/metric]. Project context design via [tip=claude-md]CLAUDE.md[/tip], extending agent scope through [tip=mcp]MCP server integration[/tip] (DB schema queries, SVN commit automation, etc.), and automating [metric]repetitive workflows with custom skills[/metric] — combining these three to build an environment where AI operates on full project context.\n\nIn the SmartOn Offline project, I systematically built [tip=ai-context,metric]30+ AI context documents[/tip] (architecture, porting guides, coding conventions) enabling all 3 team members to develop on consistent context via Claude Code. I automated Oracle→SQLite query porting and schema translation for [tip=table-migration,metric]128-table migration[/tip] with AI, and generated boilerplate for [tip=api-boilerplate,metric]150+ REST API[/tip] endpoints using Gradle plugins + AI.\n\nI select AI tools by task: Claude Code for code generation/refactoring, NotebookLM for technical document analysis/handover, Google Gems for domain Q&A — [tip=tool-select,metric]combining optimal tools by purpose[/tip] to systematize AI usage beyond development.",
		tipPopovers: [
			{
				id: "claude-md",
				title: "CLAUDE.md Project Context",
				content:
					"A markdown document summarizing project structure, coding conventions, tech stack, and Git workflow. Claude Code automatically reads it at conversation start, operating with full project understanding.",
			},
			{
				id: "mcp",
				title: "MCP (Model Context Protocol)",
				content:
					"A protocol enabling AI agents to access external tools (DB, file system, APIs, etc.). In SmartOn, MCP servers were integrated for Oracle DB schema queries, SVN commit/history checks, extending agent capabilities.",
			},
			{
				id: "ai-context",
				title: "AI Context Document System",
				content:
					"32 markdown documents systematically covering architecture design, Oracle→SQLite porting guides, coding conventions, and API design rules. Any team member shares the same project context when running Claude Code.",
			},
			{
				id: "table-migration",
				title: "AI-powered 128 Table Migration",
				content:
					"Oracle DDL→SQLite DDL conversion, data type mapping, index/sequence/trigger generation automated through AI context documents. Most migration work was handled automatically compared to manual approaches.",
			},
			{
				id: "api-boilerplate",
				title: "150+ REST API Boilerplate Generation",
				content:
					"A 2-stage pipeline where Gradle plugins read table schemas to auto-generate Controller/Service templates, then AI fills in business logic. Rapidly built 150+ API endpoints.",
			},
			{
				id: "tool-select",
				title: "AI Tool Selection Strategy",
				content:
					"Claude Code excels at code generation/refactoring/debugging, NotebookLM at summarizing long technical documents/handover materials, Google Gems at custom persona-based domain Q&A. Each tool is combined based on its strengths.",
			},
		],
	},
	{
		title: "An Engineer Who Designs UX Beyond Requirements",
		description:
			"I don't just implement given requirements in SI environments. In SmartOn 2.0, I identified tab mis-touch and irreversible-close issues before client requests, and voluntarily proposed and implemented [tip=tab-edit,metric]Tab Edit Mode inspired by iOS home screen app management UX[/tip]. I precisely designed long-press time branching (quick tap→switch, long-press+drag→reorder, long-press+release→edit mode) with a [tip=threshold,metric]500ms threshold[/tip].\n\nFrom my very first project (LabelOn), I questioned SSR environment refresh issues and self-taught [tip=labelon-ajax]AJAX partial rendering patterns[/tip]. In Smart Factory PMS, I independently designed a space-efficient before/after comparison UX with [tip=change-vis,metric]light-yellow background highlighting + original-value popovers[/tip] for agreement changes.\n\nIn the SmartOn offline app, I voluntarily designed a [metric]4-layer visual feedback[/metric] system for field workers (body background color, badge, SpeedDial, disabled menus) to instantly convey online/offline status, and a [metric]3-state machine floating timer[/metric] that progressively warns of session expiration.\n\nColleagues have said I [metric]'should be building products, not project work'[/metric] — I obsess over reducing user cognitive load and solving the real problems behind requirements.",
		tipPopovers: [
			{
				id: "tab-edit",
				title: "Tab Edit Mode",
				content:
					"Inspired by long-pressing app icons on iOS home screen to enter wiggle mode. Long-pressing the tab bar enters edit mode, enabling tab drag reorder, delete marking, and batch apply/rollback via an In-place Edit Layout.",
			},
			{
				id: "threshold",
				title: "500ms Long-press Threshold",
				content:
					"Quick taps (under 300ms) trigger tab switching; holding 500ms+ enters edit mode. Combined with drag-start detection to handle 3 gestures — 'long-press+drag→reorder', 'long-press+release→edit mode' — from a single touch event.",
			},
			{
				id: "labelon-ajax",
				title: "LabelOn AJAX Partial Rendering",
				content:
					"In a Node.js (Express) + EJS SSR environment, identified the full-page refresh problem. Self-taught and applied jQuery AJAX partial rendering for table areas only, improving UX — a voluntary improvement in my very first project.",
			},
			{
				id: "change-vis",
				title: "Agreement Change Visualization UX",
				content:
					"Instead of showing old and new agreements side-by-side (consuming too much screen space), highlights only changed cells with a light-yellow background and shows original values via hover popovers — a space-efficient comparison UX I designed independently.",
			},
		],
	},
];
