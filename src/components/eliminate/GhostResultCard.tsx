import { EvidenceBadge } from "@/components/shared/EvidenceBadge";
import { cn } from "@/lib/cn";
import type { GhostVerdict } from "@/lib/filter";
import { Gauge, HeartPulse, Info } from "lucide-react";

interface GhostResultCardProps {
  verdict: GhostVerdict;
  highlighted: boolean;
  crossedOut: boolean;
  onSelect: () => void;
  onToggleHighlight: () => void;
  onToggleCrossOut: () => void;
}

export function GhostResultCard({
  verdict,
  highlighted,
  crossedOut,
  onSelect,
  onToggleHighlight,
  onToggleCrossOut,
}: GhostResultCardProps) {
  const { ghost, eliminated, reasons } = verdict;
  const struckThrough = eliminated || crossedOut;

  const speeds = ghost.hunt.speeds.map((s) => s.value);
  const minSpeed = Math.min(...speeds);
  const maxSpeed = Math.max(...speeds);
  const sanities = ghost.hunt.sanityThresholds.map((s) => s.value);
  const minSanity = Math.min(...sanities);
  const maxSanity = Math.max(...sanities);

  return (
    <div
      // Tap cycles plain -> highlighted -> hidden -> plain, so both states are reachable
      // with a single tap (no right-click needed on touch devices). Right-click stays as
      // a desktop shortcut straight to "hide".
      onClick={highlighted || crossedOut ? onToggleCrossOut : onToggleHighlight}
      onContextMenu={(e) => {
        e.preventDefault();
        onToggleCrossOut();
      }}
      title="Tap to cycle highlight/hide · Right-click to hide directly"
      className={cn(
        "flex w-full cursor-pointer flex-col gap-2 rounded-xl border p-3.5 text-left transition select-none",
        struckThrough
          ? "eliminated-ghost border-surface-border bg-surface/60"
          : highlighted
          ? "border-accent bg-accent/10 shadow-[0_0_0_1px_var(--color-accent)]"
          : "border-surface-border bg-surface hover:border-accent/40"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className={cn(
              "text-left text-sm font-semibold hover:underline",
              struckThrough ? "strike-line text-muted" : "text-foreground"
            )}
          >
            {ghost.name}
          </button>

          <div className="flex flex-wrap gap-1">
            {ghost.evidences.map((ev) => (
              <EvidenceBadge key={ev} evidence={ev} size="sm" dimmed={struckThrough} />
            ))}
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted",
              struckThrough && "opacity-50"
            )}
          >
            <span className="flex items-center gap-1">
              <Gauge className="size-3" />
              {minSpeed === maxSpeed ? `${minSpeed} m/s` : `${minSpeed}–${maxSpeed} m/s`}
            </span>
            <span className="flex items-center gap-1">
              <HeartPulse className="size-3" />
              {minSanity === maxSanity ? `≤${maxSanity}%` : `${minSanity}–${maxSanity}%`}
            </span>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          title="View details"
          className="shrink-0 rounded-md p-2 text-muted transition hover:bg-surface-2 hover:text-foreground"
        >
          <Info className="size-5" />
        </button>
      </div>

      {eliminated && reasons.length > 0 && (
        <ul className="mt-0.5 space-y-0.5 text-[11px] text-red-400/80">
          {reasons.slice(0, 3).map((r, i) => (
            <li key={i}>&bull; {r}</li>
          ))}
          {reasons.length > 3 && <li>+{reasons.length - 3} more</li>}
        </ul>
      )}
    </div>
  );
}
