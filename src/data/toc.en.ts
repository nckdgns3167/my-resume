import type { TocSection } from "./types";

export const tocSections: TocSection[] = [
	{ id: "introduction", label: "Introduction" },
	{ id: "skills", label: "Skills" },
	{
		id: "side-projects",
		label: "Side Projects",
		children: [{ id: "project-sage", label: "ChartSage" }],
	},
	{
		id: "experience",
		label: "Experience",
		children: [
			{ id: "project-smarton", label: "SmartOn 2.0" },
			{ id: "project-satellite", label: "Satellite Frequency" },
			{ id: "project-pms", label: "Smart Factory PMS" },
			{ id: "project-certificate", label: "Online Certificate" },
			{ id: "project-ai-drug", label: "AI Drug Discovery" },
			{ id: "project-lime-dqm", label: "LIME-DQM" },
			{ id: "project-labelon", label: "LabelOn Admin" },
			{ id: "project-etri", label: "ETRI Research" },
		],
	},
	{ id: "strengths", label: "Strengths" },
];
