"use client";

import { TOS_EVIDENCE_META } from "@/data/tos/evidence";
import { cn } from "@/lib/cn";
import { TOS_EVIDENCE_TYPES, type TosEvidence } from "@/lib/tos/types";
import { Ban, Check } from "lucide-react";

export type TosEvidenceState = "unknown" | "found" | "ruledOut";

interface TosEvidenceToggleGroupProps {
  states: Record<TosEvidence, TosEvidenceState>;
  onToggleFound: (ev: TosEvidence) => void;
  onToggleRuledOut: (ev: TosEvidence) => void;
}

export function TosEvidenceToggleGroup({ states, onToggleFound, onToggleRuledOut }: TosEvidenceToggleGroupProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {TOS_EVIDENCE_TYPES.map((ev) => {
        const meta = TOS_EVIDENCE_META[ev];
        const Icon = meta.icon;
        const state = states[ev];
        return (
          <button
            key={ev}
            // Tap cycles unknown -> found -> ruled out -> unknown, so the full
            // tri-state is reachable with a single tap (no right-click needed on
            // touch devices). Right-click stays as a desktop shortcut straight to
            // "ruled out".
            onClick={() => (state === "unknown" ? onToggleFound(ev) : onToggleRuledOut(ev))}
            onContextMenu={(e) => {
              e.preventDefault();
              onToggleRuledOut(ev);
            }}
            title="Tap to cycle found/ruled out · Right-click to rule out directly"
            className={cn(
              "relative inline-flex min-h-9 select-none items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium ring-1 transition sm:min-h-0 sm:py-1.5",
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
  );
}
