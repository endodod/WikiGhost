import { TosEvidenceBadge } from "@/components/tos/TosEvidenceBadge";
import { cn } from "@/lib/cn";
import type { TosGhost } from "@/lib/tos/types";
import { Droplets, Gauge, Timer } from "lucide-react";

interface GhostCardProps {
  ghost: TosGhost;
  onSelect: (ghost: TosGhost) => void;
  highlighted?: boolean;
  /** When set, renders as a ruled-out card — strikethrough name, dimmed evidence, reasons list instead of stats. */
  reasons?: string[];
}

export function GhostCard({ ghost, onSelect, highlighted = false, reasons }: GhostCardProps) {
  const eliminated = reasons !== undefined && reasons.length > 0;

  return (
    <button
      onClick={() => onSelect(ghost)}
      className={cn(
        "group flex flex-col gap-3 rounded-xl border p-4 text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        eliminated
          ? "eliminated-ghost border-surface-border bg-surface/60"
          : highlighted
          ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--color-accent)]"
          : "border-surface-border bg-surface"
      )}
    >
      <h3
        className={cn(
          "text-base font-semibold transition-colors",
          eliminated ? "strike-line text-muted" : "text-foreground group-hover:text-accent"
        )}
      >
        {ghost.name}
      </h3>

      <div className="flex flex-wrap gap-1.5">
        {ghost.evidence.map((ev) => (
          <TosEvidenceBadge key={ev} evidence={ev} size="sm" dimmed={eliminated} />
        ))}
      </div>

      {eliminated ? (
        <ul className="space-y-0.5 text-[11px] text-red-400/80">
          {reasons.slice(0, 3).map((r, i) => (
            <li key={i}>&bull; {r}</li>
          ))}
          {reasons.length > 3 && <li>+{reasons.length - 3} more</li>}
        </ul>
      ) : (
        <>
          <p className="line-clamp-2 text-xs text-muted">{ghost.tell}</p>

          <div className="mt-auto flex items-center gap-3 pt-1 text-xs text-muted">
            <span className="flex items-center gap-1">
              <Gauge className="size-3.5" />
              {ghost.speed.toFixed(2)} m/s
            </span>
            <span className="flex items-center gap-1">
              <Droplets className="size-3.5" />
              {ghost.holyWaterStun}s stun
            </span>
            <span className="flex items-center gap-1">
              <Timer className="size-3.5" />
              {ghost.cooldown}s cooldown
            </span>
          </div>
        </>
      )}
    </button>
  );
}
