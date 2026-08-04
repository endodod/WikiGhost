"use client";

import { cn } from "@/lib/cn";

interface SanityFilterProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

/** Representative sanity % for each band — all four are real "Always" hunt thresholds that
 * appear in the ghost roster (Demon/Yokai-style highs down to Shade's 35%), evenly spaced so
 * each button produces a genuinely different split instead of an arbitrary round number. */
const SANITY_PRESETS: { value: number; label: string; hint: string }[] = [
  { value: 80, label: "Very Early", hint: "Hunted very early — sanity was still ~80%+" },
  { value: 65, label: "Early", hint: "Hunted while sanity was still fairly high — ~65%" },
  { value: 50, label: "Average", hint: "Hunted around the typical default — ~50%" },
  { value: 35, label: "Late", hint: "Hunted late — sanity had already dropped to ~35% or lower" },
];

export function SanityFilter({ value, onChange }: SanityFilterProps) {
  return (
    <div className="w-full sm:flex-1">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        Sanity When It Hunted
      </span>
      <div className="flex flex-wrap gap-1.5">
        {SANITY_PRESETS.map((p) => (
          <button
            key={p.value}
            onClick={() => onChange(value === p.value ? null : p.value)}
            title={p.hint}
            className={cn(
              "min-h-9 rounded-full px-3 py-2 text-xs font-medium ring-1 transition sm:min-h-0 sm:py-1.5",
              value === p.value
                ? "bg-accent-strong text-white ring-accent-strong"
                : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
            )}
          >
            {p.label}
          </button>
        ))}
      </div>
    </div>
  );
}
