import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  container?: boolean;
  padded?: boolean;
}

export function Section({
  as: Component = "section",
  container = true,
  padded = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        padded && "py-[var(--spacing-8)] md:py-[var(--spacing-9)]",
        className
      )}
      {...props}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-[var(--spacing-4)] md:px-[var(--spacing-6)]">
          {children}
        </div>
      ) : (
        children
      )}
    </Component>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-[var(--spacing-7)] max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="eyebrow text-action-primary mb-[var(--spacing-3)]">
          {eyebrow}
        </p>
      )}
      <h2 className="display-h2 text-text-primary">{title}</h2>
      {description && (
        <p className="mt-[var(--spacing-4)] text-lg text-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
