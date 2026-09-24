import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  hover = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hover?: boolean }) {
  return (
    <div
      className={cn(
        "bg-bg-surface border border-border-default rounded-[var(--radius-lg)] p-[var(--spacing-6)]",
        hover &&
          "transition-all duration-200 hover:border-border-strong hover:shadow-lg hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
