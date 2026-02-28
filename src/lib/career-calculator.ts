const DEFAULT_START = "2019-08";

export function calculateCareerYears(startDate: string = DEFAULT_START): number {
  const [year, month] = startDate.split("-").map(Number);
  const now = new Date();
  const diff = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.ceil(diff / 12);
}

export function calculateCareerMonths(
  startDate: string = DEFAULT_START,
): number {
  const [year, month] = startDate.split("-").map(Number);
  const now = new Date();
  return (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
}

export function formatCareerDuration(
  startDate: string = DEFAULT_START,
): string {
  const months = calculateCareerMonths(startDate);
  const years = Math.floor(months / 12);
  const remaining = months % 12;
  if (remaining === 0) return `${years}년`;
  return `${years}년 ${remaining}개월`;
}
