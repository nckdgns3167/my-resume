import type { SideProject } from "./types";

export const sideProjects: SideProject[] = [
	{
		id: "project-sage",
		name: "The Sage of Charts, 'ChartSage'",
		client: "Solo Development",
		period: "2025.02 ~ In Progress",
		role: "Planning · Design · Frontend Development · Full Infrastructure",
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
			{
				label: "Hackathon Entry",
				url: "https://hack.primer.kr/rounds/8/ideas/1601",
			},
		],
		description:
			'"Draw to ask, answer with scenarios." ' +
			"An AI cryptocurrency analysis platform combining Bybit-level chart drawing and technical indicator modules with Claude Code/ChatGPT-style session-based conversation management. " +
			"Self-studied and developed chart domains including candlestick, RSI, and MACD, and systematized reusable modules by solving real-world edge cases such as WebSocket race conditions, Canvas curve interpolation, and multi-timeframe switching. " +
			"Built an AI analysis pipeline combining user drawings with market data using OpenAI GPT-4o API, " +
			"and designed a Freemium subscription-based revenue model (Free/Pro), evolving it into a product with real business value. " +
			"Planning to expand with dashboards, breaking news, and report downloads. Solo full-cycle development from planning, design, frontend, serverless backend, to deployment.",
		hint: "Currently developing Drawing Tool module (feature/drawing-tools) and Technical Indicator module (feature/indicators) in parallel on separate feature branches",
		achievements: [
			"Participated in Jocoding x OpenAI x Primer AI Hackathon and submitted MVP (2026.02)",
			"Feature-based Zustand architecture — 5 independent stores (chart, drawing, session, analysis, onboarding) for separation of concerns, state tracking via devtools middleware",
			"TradingView Lightweight Charts v5 custom Primitive implementation — Direct Canvas rendering + hitTest-based drawing selection and hover interaction",
			"Factory Pattern drawing tool system — ToolConfig interface abstracting per-tool point requirements, new tools extensible by adding configuration only",
			"Technical indicator module design — Implementing RSI, MACD, Bollinger Bands as independent modules, rendered on a separate layer from chart Primitives",
			"Vercel API Routes + OpenAI GPT-4o serverless backend — Auto-injecting chart OHLC + user drawing context into prompts for enhanced AI analysis accuracy",
			"Multi-session architecture — Per-session drawing, conversation, and prediction state isolation, unidirectional synchronization between stores on session switch",
			"driver.js 27-step interactive onboarding — Demo action system (auto-injected drawings, panel opening, prediction animations) + state restoration between steps",
		],
		gallery: [
			{
				layout: "default",
				items: [
					{
						src: "/images/projects/00-chartsage/실제화면캡처.png",
						alt: "ChartSage MVP actual implementation screen",
						caption: "MVP Implementation Screen",
						subCaption: "BTC/USDT chart + AI analysis panel",
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
								alt: "Hackathon idea submission page - detailed description",
							},
							{
								src: "/images/projects/00-chartsage/해커톤 아이디어 지원 페이지 (2).png",
								alt: "Hackathon idea submission page - business model canvas",
							},
						],
						caption:
							"Jocoding x OpenAI x Primer AI Hackathon Entry Page",
						subCaption:
							"Detailed Description · Business Model Canvas",
					},
				],
			},
		],
	},
];
