import type { Achievement } from "@/data/types";
import { isAchievementDetail } from "@/data/types";
import { parseRichText } from "@/lib/rich-text";

interface ProjectAchievementsProps {
  achievements: Achievement[];
}

export function ProjectAchievements({ achievements }: ProjectAchievementsProps) {
  if (achievements.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {achievements.map((achievement, idx) => {
        if (!isAchievementDetail(achievement)) {
          return (
            <p
              key={idx}
              className="relative pl-4 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:text-accent-primary before:content-['•']"
            >
              {parseRichText(achievement)}
            </p>
          );
        }

        return (
          <div key={idx}>
            <h5 className="mb-1 text-sm font-semibold text-text">
              {parseRichText(achievement.title)}
            </h5>
            {achievement.description && (
              <p className="mb-2 text-sm leading-6 text-text-secondary">
                {parseRichText(achievement.description)}
              </p>
            )}
            <ul className="flex flex-col gap-1 pl-1">
              {achievement.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="relative pl-4 text-sm leading-6 text-text-secondary before:absolute before:left-0 before:text-accent-primary before:content-['•']"
                >
                  {parseRichText(item)}
                </li>
              ))}
            </ul>
            {achievement.metrics && achievement.metrics.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {achievement.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className="rounded-full bg-accent-primary/10 px-2.5 py-0.5 text-xs font-medium text-accent-primary"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
