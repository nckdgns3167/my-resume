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
		learningPoints: [
			{
				topic: "Custom Canvas Drawing System — Building 20+ Bybit-level Tools",
				paragraphs: [
					"Building a Bybit-level drawing tool system on top of TradingView Lightweight Charts v5's ISeriesPrimitive. Currently completed 4 tools — horizontal line, trend line, freehand curve, and Fibonacci — with 16+ more planned including ray, parallel channel, and range tools.",
					"The biggest challenges are hit testing on Canvas (detecting drawings near mouse cursor with a 6px threshold) and coordinate transformation between time/logical coordinates and screen pixels. Solved the freehand curve's raw mouse point zigzag issue with Bézier curve interpolation, and abstracted per-tool configuration via Factory Pattern so adding a new tool only requires writing one config file.",
				],
			},
			{
				topic: "AI + Statistics Hybrid Prediction — Anti-hallucination Architecture",
				paragraphs: [
					"GPT-4o hallucinates severely on numeric predictions like \"Bitcoin price in 3 days.\" Based on research showing LLM-only accuracy at just 19% on financial QA benchmarks, designed a hybrid architecture where LLM handles only qualitative analysis (\"why it might rise\") while delegating numeric prediction to statistical models.",
					"Planning to implement a [metric]Monte Carlo simulation (path generation) + Transformer (pattern recognition) + Prophet (seasonality)[/metric] ensemble. The architecture gives LLM 10% and statistical models 90% of prediction weight, separating AI's strength (explanation) from statistics' strength (numbers) to build a trustworthy prediction system.",
				],
			},
			{
				topic: "Real-time WebSocket + Multi-layer Canvas Rendering Optimization",
				paragraphs: [
					"Receiving real-time candle data via Binance WebSocket while drawing tools, technical indicators, and prediction scenarios render simultaneously on a single Canvas. As elements grow, rendering bottlenecks can occur — managing performance through event debouncing and single-pass rendering (processing all drawings in one Canvas draw call).",
					"Solving real-time financial data edge cases one by one: candle data gaps during WebSocket disconnection/reconnection, race conditions during multi-timeframe switching, and more.",
				],
			},
			{
				topic: "Session Synchronization Across 5 Zustand Stores",
				paragraphs: [
					"Five independent Zustand stores — chart, drawing, analysis, session, onboarding — each own their concern. The most complex part is session switching: when a user switches sessions, chart symbol, drawing list, conversation history, and prediction scenarios must be atomically restored across all stores.",
					"Designed a unidirectional data flow from drawing changes → session store auto-sync → localStorage persistence. Undo/Redo history is managed outside stores to prevent devtools pollution. Introducing Supabase server persistence will add another layer of synchronization complexity.",
				],
			},
			{
				topic: "Prediction Scenario Visualization — Future Price Path Animation",
				paragraphs: [
					"Visualizing 3 scenarios (bullish, neutral, bearish) as candlesticks from AI analysis results. Currently rendering statically with wireframe candle style, but the goal is to show candles growing one by one as an animation, making the prediction process intuitively visible.",
					"The final goal is to open a detailed report modal (7 sections) on scenario click, and apply differential transparency to paths based on probability weights to visually convey confidence levels.",
				],
			},
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
