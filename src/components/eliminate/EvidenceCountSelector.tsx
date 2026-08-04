"use client";

import { cn } from "@/lib/cn";
import { EVIDENCE_COUNTS, type EvidenceCount } from "@/lib/types";

interface EvidenceCountSelectorProps {
  value: EvidenceCount;
  onChange: (n: EvidenceCount) => void;
}

/** How many evidence types this contract's difficulty actually shows (0-3). */
export function EvidenceCountSelector({ value, onChange }: EvidenceCountSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        Given Evidence
      </span>
      <div className="flex flex-wrap gap-1.5">
        {EVIDENCE_COUNTS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            title={`${n} evidence type${n === 1 ? "" : "s"} shown this contract`}
            className={cn(
              "size-7 rounded-full text-xs font-semibold ring-1 transition",
              value === n
                ? "bg-accent-strong text-white ring-accent-strong"
                : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
            )}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
