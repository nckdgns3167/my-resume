import type { CareerPeriod } from "@/data/types";

const DAY_MS = 86400000;

/**
 * 복수 경력 기간의 실제 근무 일수를 합산하여 N년차를 계산.
 * 바닐라 경력기술서와 동일한 로직: Math.floor(totalDays / 365.25) + 1
 */
export function calculateCareerYears(periods: CareerPeriod[]): number {
  const now = new Date();
  let totalDays = 0;

  for (const period of periods) {
    const [sy, sm] = period.start.split("-").map(Number);
    const start = new Date(sy, sm - 1, 1);

    let end: Date;
    if (period.end) {
      const [ey, em] = period.end.split("-").map(Number);
      // 해당 월 말일까지
      end = new Date(ey, em, 0);
    } else {
      end = now;
    }

    totalDays += Math.floor((end.getTime() - start.getTime()) / DAY_MS);
  }

  return Math.floor(totalDays / 365.25) + 1;
}

export function calculateCareerMonths(periods: CareerPeriod[]): number {
  const now = new Date();
  let totalMonths = 0;

  for (const period of periods) {
    const [sy, sm] = period.start.split("-").map(Number);
    if (period.end) {
      const [ey, em] = period.end.split("-").map(Number);
      totalMonths += (ey - sy) * 12 + (em - sm);
    } else {
      totalMonths += (now.getFullYear() - sy) * 12 + (now.getMonth() + 1 - sm);
    }
  }

  return totalMonths;
}

export function formatCareerDuration(periods: CareerPeriod[]): string {
  const months = calculateCareerMonths(periods);
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  if (remaining === 0) return `${years}년`;
  return `${years}년 ${remaining}개월`;
}
