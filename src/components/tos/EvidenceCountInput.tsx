"use client";

import { cn } from "@/lib/cn";

const COUNTS = [0, 1, 2, 3] as const;

interface EvidenceCountInputProps {
  label: string;
  value: number;
  onChange: (n: number) => void;
}

/** Circular 0-3 count picker — same shape as Phasmophobia's EvidenceCountSelector. */
export function EvidenceCountInput({ label, value, onChange }: EvidenceCountInputProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {COUNTS.map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={cn(
              "rounded-full px-3 py-2 text-xs font-semibold ring-1 transition sm:px-2.5 sm:py-1",
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
