interface SkillTagProps {
  name: string;
}

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="inline-block rounded-md border border-border bg-bg-secondary px-2.5 py-1 text-sm text-text">
      {name}
    </span>
  );
}
