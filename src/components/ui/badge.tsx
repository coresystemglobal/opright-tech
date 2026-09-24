import { cn } from "@/lib/utils";

const statusStyles = {
  live: "bg-green-50 text-green-700 border-green-200",
  beta: "bg-cobalt-50 text-cobalt-700 border-cobalt-200",
  "coming-soon": "bg-neutral-100 text-neutral-500 border-neutral-200",
};

const statusLabels = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming Soon",
};

export function StatusBadge({
  status,
  className,
}: {
  status: "live" | "beta" | "coming-soon";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-[var(--radius-pill)] border",
        statusStyles[status],
        className
      )}
    >
      {status === "live" && (
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
      )}
      {statusLabels[status]}
    </span>
  );
}
