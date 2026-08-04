import { EVIDENCE_META } from "@/data/evidence";
import { cn } from "@/lib/cn";
import type { Evidence } from "@/lib/types";

interface EvidenceBadgeProps {
  evidence: Evidence;
  size?: "sm" | "md";
  dimmed?: boolean;
}

export function EvidenceBadge({ evidence, size = "md", dimmed = false }: EvidenceBadgeProps) {
  const meta = EVIDENCE_META[evidence];
  const Icon = meta.icon;
  return (
    <span
      title={meta.label}
      className={cn(
        "inline-flex items-center gap-1 rounded-full ring-1 font-medium",
        meta.className,
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
        dimmed && "opacity-40 grayscale"
      )}
    >
      <Icon className={size === "sm" ? "size-3" : "size-3.5"} strokeWidth={2.25} />
      {meta.short}
    </span>
  );
}
