"use client";

import { ZeroEvidenceItemRow } from "@/components/eliminate/ZeroEvidenceItemRow";
import { zeroEvidenceStages } from "@/data/zeroEvidenceChecklist";
import { cn } from "@/lib/cn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ZeroEvidenceStepperProps {
  checkedIds: string[];
  onToggle: (id: string) => void;
}

/** Walks through zeroEvidenceStages one stage at a time instead of listing all of them at once —
 * this replaces the speed-bucket input in the compact top filter bar, so it needs to stay short. */
export function ZeroEvidenceStepper({ checkedIds, onToggle }: ZeroEvidenceStepperProps) {
  const [stageIndex, setStageIndex] = useState(0);
  const stage = zeroEvidenceStages[stageIndex];
  const isFirst = stageIndex === 0;
  const isLast = stageIndex === zeroEvidenceStages.length - 1;

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted">
          Checklist &middot; Stage {stageIndex + 1}/{zeroEvidenceStages.length}
        </span>
        {checkedIds.length > 0 && (
          <span className="rounded-full bg-accent-strong px-1.5 py-0.5 text-[10px] font-semibold text-white">
            {checkedIds.length} checked
          </span>
        )}
      </div>

      <div className="min-h-[15rem] overflow-y-auto rounded-lg border border-surface-border bg-surface-2/50 p-3">
        <h3 className="mb-2 text-sm font-semibold text-foreground">{stage.heading}</h3>
        <ul className="flex flex-col gap-2">
          {stage.items.map((item) => (
            <ZeroEvidenceItemRow
              key={item.id}
              item={item}
              checked={checkedIds.includes(item.id)}
              onToggle={() => onToggle(item.id)}
            />
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button
          onClick={() => setStageIndex((i) => Math.max(0, i - 1))}
          disabled={isFirst}
          className={cn(
            "flex min-h-8 items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium transition",
            isFirst
              ? "cursor-not-allowed border-surface-border text-muted/50"
              : "border-surface-border bg-surface-2 text-foreground hover:border-accent/40"
          )}
        >
          <ChevronLeft className="size-3.5" />
          Back
        </button>

        <div className="flex gap-1">
          {zeroEvidenceStages.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setStageIndex(i)}
              title={s.heading}
              aria-label={`Go to stage: ${s.heading}`}
              className={cn(
                "size-1.5 rounded-full transition",
                i === stageIndex ? "bg-accent-strong" : "bg-surface-border hover:bg-muted"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => setStageIndex((i) => Math.min(zeroEvidenceStages.length - 1, i + 1))}
          disabled={isLast}
          className={cn(
            "flex min-h-8 items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium transition",
            isLast
              ? "cursor-not-allowed border-surface-border text-muted/50"
              : "border-surface-border bg-surface-2 text-foreground hover:border-accent/40"
          )}
        >
          Next
          <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
