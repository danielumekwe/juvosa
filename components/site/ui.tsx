type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionLabel({ children, tone = "light", className = "" }: SectionLabelProps) {
  return (
    <p className={`label flex items-center gap-3 ${tone === "light" ? "text-brand" : "text-brand-bright"} ${className}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-3 px-6 text-sm font-semibold tracking-wide transition-colors duration-200";

export const buttonStyles = {
  primary: `${buttonBase} bg-brand text-white hover:bg-brand-deep`,
  dark: `${buttonBase} bg-ink text-paper hover:bg-ink-soft`,
  outlineLight: `${buttonBase} border border-white/60 text-white hover:bg-white hover:text-ink`,
  outlineDark: `${buttonBase} border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper`,
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={`size-4 ${className}`}>
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
