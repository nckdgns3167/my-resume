export function Footer() {
  const now = new Date();
  const updated = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}`;

  return (
    <footer className="border-t border-border pt-8 text-center text-sm text-text-secondary print:hidden">
      <p>Last updated: {updated}</p>
    </footer>
  );
}
