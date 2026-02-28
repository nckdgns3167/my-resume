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
      { id: "project-smarton", label: "스마트온 2.0" },
      { id: "project-satellite", label: "위성망 분배도표" },
      { id: "project-pms", label: "스마트공장 PMS" },
      { id: "project-certificate", label: "온라인 검사서류" },
      { id: "project-ai-drug", label: "AI 신약개발" },
      { id: "project-lime-dqm", label: "LIME-DQM" },
      { id: "project-labelon", label: "LabelOn 어드민" },
      { id: "project-etri", label: "ETRI 연구 지원" },
    ],
  },
  { id: "strengths", label: "Strengths" },
];

/** 모든 TOC ID의 평탄화된 목록 (useScrollSpy용) */
export const allTocIds = tocSections.flatMap((s) =>
  s.children ? [s.id, ...s.children.map((c) => c.id)] : [s.id],
);

/** 자식 ID → 부모 섹션 ID 매핑 */
export const childToParentMap = new Map<string, string>();
tocSections.forEach((s) => {
  s.children?.forEach((c) => {
    childToParentMap.set(c.id, s.id);
  });
});
