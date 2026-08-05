"use client";

import { cn } from "@/lib/cn";

interface StatFilterOption<T> {
  value: T;
  label: string;
  hint?: string;
}

interface StatFilterProps<T> {
  label: string;
  options: StatFilterOption<T>[];
  value: T | null;
  onChange: (value: T | null) => void;
}

/** Generic single-select button-group filter — mirrors Phasmophobia's SpeedFilter/SanityFilter shape. */
export function StatFilter<T extends string | number | boolean>({
  label,
  options,
  value,
  onChange,
}: StatFilterProps<T>) {
  return (
    <div className="w-full sm:flex-1">
      <span className="mb-1.5 block text-center text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      <div className="flex flex-wrap justify-center gap-1.5">
        {options.map((opt) => (
          <button
            key={String(opt.value)}
            onClick={() => onChange(value === opt.value ? null : opt.value)}
            title={opt.hint}
            className={cn(
              "min-h-9 rounded-full px-3 py-2 text-xs font-medium ring-1 transition sm:min-h-0 sm:py-1.5",
              value === opt.value
                ? "bg-accent-strong text-white ring-accent-strong"
                : "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
