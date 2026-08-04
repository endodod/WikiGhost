import { EvidenceBadge } from "@/components/shared/EvidenceBadge";
import type { Ghost } from "@/lib/types";
import { Gauge, HeartPulse } from "lucide-react";

interface GhostCardProps {
  ghost: Ghost;
  onSelect: (ghost: Ghost) => void;
}

export function GhostCard({ ghost, onSelect }: GhostCardProps) {
  const speeds = ghost.hunt.speeds.map((s) => s.value);
  const sanities = ghost.hunt.sanityThresholds.map((s) => s.value);
  const minSpeed = Math.min(...speeds);
  const maxSpeed = Math.max(...speeds);
  const maxSanity = Math.max(...sanities);

  return (
    <button
      onClick={() => onSelect(ghost)}
      className="group flex flex-col gap-3 rounded-xl border border-surface-border bg-surface p-4 text-left transition hover:border-accent/50 hover:bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
        {ghost.name}
      </h3>

      <div className="flex flex-wrap gap-1.5">
        {ghost.evidences.map((ev) => (
          <EvidenceBadge key={ev} evidence={ev} size="sm" />
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-1 text-xs text-muted">
        <span className="flex items-center gap-1">
          <Gauge className="size-3.5" />
          {minSpeed === maxSpeed ? `${minSpeed} m/s` : `${minSpeed}–${maxSpeed} m/s`}
        </span>
        <span className="flex items-center gap-1">
          <HeartPulse className="size-3.5" />
          &le;{maxSanity}%
        </span>
      </div>
    </button>
  );
}
