import type { Strength } from "./types";

export const strengths: Strength[] = [
	{
		title: "Technical Constraints → Architectural Innovation",
		description:
			"Designed an IIFE module system and Promise-based ScriptLoader in an air-gapped environment without Node.js, npm, or bundlers, reducing initial load time by 50%. Implemented tablet-specific touch gestures (long-press, swipe) and iOS wiggle UX, transforming 'constraint = impossible' into 'constraint = differentiated design.'",
	},
	{
		title: "Self-Driven Problem Discovery",
		description:
			"I find improvements before they become requirements. In PMS, I independently identified and solo-developed 4 common components needed across the team. In SmartOn, I voluntarily proposed and implemented differentiated UX features like Tab Edit Mode and drag-to-delete. In LIME-DQM, I led the company's first Elasticsearch adoption, achieving 10x+ query speed improvement.",
	},
	{
		title: "Maximizing Team Productivity",
		description:
			"In the SmartOn project, I designed the P-Edit-DataTable grid system and design system (PrimeBridge) so that 4 junior developers could build 500+ screens in a consistent manner. Achieved 80% reduction in CRUD implementation code and onboarding new developers within 1 day.",
	},
	{
		title: "Full-Stack Perspective in Frontend",
		description:
			"With hands-on experience designing and implementing Spring Boot, Django, Node.js backends and Oracle, MySQL, Elasticsearch databases, I design optimal data flows between frontend and backend. For example, using MyBatis 3-level nested ResultMaps to return entire chart trees in a single API call, considering frontend performance at the API design stage.",
	},
	{
		title: "AI-Powered Development Productivity",
		description:
			"I actively leverage AI coding tools like Cursor AI, Claude Code, and Antigravity in both professional and side projects. I extend AI agent capabilities through MCP (Model Context Protocol) server integration and maintain a workflow that enhances AI collaboration quality through systematic context documents like CLAUDE.md.",
	},
	{
		title: "Solo Full-Cycle Development",
		description:
			"I drive the entire process from planning, design, frontend development, to infrastructure (Supabase, Vercel) in side projects. Designed React 19 + Vite 6 + Zustand architecture, built Biome, Vitest, and GitHub Flow-based DX environments, and completed hackathon MVP submissions — pursuing production-level quality even in personal projects.",
	},
];
