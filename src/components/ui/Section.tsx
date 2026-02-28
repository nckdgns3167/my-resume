interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className ?? ""}`}>
      <h2 className="mb-8 border-l-[3px] border-accent-primary pl-3 text-xl font-bold text-text">
        {title}
      </h2>
      {children}
    </section>
  );
}
