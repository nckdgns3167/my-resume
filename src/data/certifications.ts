import type { Certification } from "./types";

export const certifications: Certification[] = [
	{
		name: "정보처리기사",
		passDate: "2019.05.22",
		issuer: "한국산업인력공단",
		registrationNumber: "19201131250Y",
		pdfFileName: "engineer-information-processing.pdf",
	},
	{
		name: "SQL 개발자 (SQLD)",
		passDate: "2019.07.09",
		issuer: "한국데이터산업진흥원",
		registrationNumber: "SQLD-0332133",
		pdfFileName: "sqld.pdf",
	},
	{
		name: "한국사능력검정시험 2급",
		passDate: "2020.08.21",
		issuer: "국사편찬위원회",
		registrationNumber: "48-226287",
		examSession: "제48회",
		pdfFileName: "korean-history.pdf",
	},
];
