import { TosEvidenceBadge } from "@/components/tos/TosEvidenceBadge";
import { cn } from "@/lib/cn";
import type { TosGhost } from "@/lib/tos/types";
import { Droplets, Gauge, Info, Timer } from "lucide-react";

interface GhostCardProps {
  ghost: TosGhost;
  onSelect: (ghost: TosGhost) => void;
  highlighted?: boolean;
  crossedOut?: boolean;
  /** When provided (together with onToggleCrossOut), the whole card becomes a
   * left-click-to-highlight / right-click-to-cross-out control, mirroring Phasmophobia's
   * result cards — selecting the ghost then happens via the name or info button instead. */
  onToggleHighlight?: () => void;
  onToggleCrossOut?: () => void;
  /** When set, renders as a ruled-out card — strikethrough name, dimmed evidence, reasons list instead of stats. */
  reasons?: string[];
}

export function GhostCard({
  ghost,
  onSelect,
  highlighted = false,
  crossedOut = false,
  onToggleHighlight,
  onToggleCrossOut,
  reasons,
}: GhostCardProps) {
  const eliminated = reasons !== undefined && reasons.length > 0;
  const struckThrough = eliminated || crossedOut;
  const interactive = onToggleHighlight !== undefined && onToggleCrossOut !== undefined;

  return (
    <div
      onClick={interactive ? (highlighted || crossedOut ? onToggleCrossOut : onToggleHighlight) : () => onSelect(ghost)}
      onContextMenu={
        interactive
          ? (e) => {
              e.preventDefault();
              onToggleCrossOut?.();
            }
          : undefined
      }
      title={interactive ? "Tap to cycle highlight/hide · Right-click to hide directly" : undefined}
      className={cn(
        "group flex cursor-pointer flex-col gap-3 rounded-xl border p-4 text-left transition select-none",
        struckThrough
          ? "eliminated-ghost border-surface-border bg-surface/60"
          : highlighted
          ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--color-accent)]"
          : "border-surface-border bg-surface hover:border-accent/50 hover:bg-surface-2"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(ghost);
          }}
          className={cn(
            "text-left text-base font-semibold transition-colors hover:underline",
            struckThrough ? "strike-line text-muted" : "text-foreground group-hover:text-accent"
          )}
        >
          {ghost.name}
        </button>

        {interactive && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(ghost);
            }}
            title="View details"
            className="shrink-0 rounded-md p-1 text-muted transition hover:bg-surface-2 hover:text-foreground"
          >
            <Info className="size-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {ghost.evidence.map((ev) => (
          <TosEvidenceBadge key={ev} evidence={ev} size="sm" dimmed={struckThrough} />
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
    </div>
  );
}
