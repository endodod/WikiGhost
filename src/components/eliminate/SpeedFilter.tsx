"use client";

import { cn } from "@/lib/cn";
import { SPEED_BUCKETS, type SpeedBucket } from "@/lib/types";

interface SpeedFilterProps {
  value: SpeedBucket | null;
  onChange: (value: SpeedBucket | null) => void;
}

export function SpeedFilter({ value, onChange }: SpeedFilterProps) {
  return (
    <div className="w-full sm:flex-1">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        Observed Hunt Speed
      </span>
      <div className="flex flex-wrap gap-1.5">
        {SPEED_BUCKETS.map((b) => (
          <button
            key={b.id}
            onClick={() => onChange(value === b.id ? null : b.id)}
            className={cn(
              "min-h-9 rounded-full px-3 py-2 text-xs font-medium ring-1 transition sm:min-h-0 sm:py-1.5",
              value === b.id
                ? "bg-accent-strong text-white ring-accent-strong"
                : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
            )}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
}
