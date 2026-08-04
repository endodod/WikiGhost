"use client";

import { EVIDENCE_META } from "@/data/evidence";
import { cn } from "@/lib/cn";
import { EVIDENCE_TYPES, type Evidence } from "@/lib/types";
import { Ban, Check } from "lucide-react";

export type EvidenceState = "unknown" | "found" | "ruledOut";

interface EvidenceToggleGroupProps {
  states: Record<Evidence, EvidenceState>;
  onToggleFound: (ev: Evidence) => void;
  onToggleRuledOut: (ev: Evidence) => void;
}

export function EvidenceToggleGroup({
  states,
  onToggleFound,
  onToggleRuledOut,
}: EvidenceToggleGroupProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-1.5">
        {EVIDENCE_TYPES.map((ev) => {
          const meta = EVIDENCE_META[ev];
          const Icon = meta.icon;
          const state = states[ev];
          return (
            <button
              key={ev}
              onClick={() => onToggleFound(ev)}
              onContextMenu={(e) => {
                e.preventDefault();
                onToggleRuledOut(ev);
              }}
              title="Click to mark found · Right-click to rule out"
              className={cn(
                "relative inline-flex select-none items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition",
                state === "found" && meta.className.replace(/\/10/, "/20") + " ring-2",
                state === "ruledOut" &&
                  "bg-surface-2 text-muted ring-red-500/40 line-through decoration-red-500/70",
                state === "unknown" &&
                  "bg-surface-2 text-muted ring-surface-border hover:text-foreground"
              )}
            >
              <Icon className="size-3.5" strokeWidth={2.25} />
              {meta.short}
              {state === "found" && <Check className="size-3" />}
              {state === "ruledOut" && <Ban className="size-3" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
