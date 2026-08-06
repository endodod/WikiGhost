"use client";

import { ZeroEvidenceItemRow } from "@/components/eliminate/ZeroEvidenceItemRow";
import { zeroEvidenceConfirmTells } from "@/data/zeroEvidenceChecklist";
import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ZeroEvidenceConfirmTellsProps {
  checkedIds: string[];
  onToggle: (id: string) => void;
}

export function ZeroEvidenceConfirmTells({ checkedIds, onToggle }: ZeroEvidenceConfirmTellsProps) {
  const [open, setOpen] = useState(true);
  const activeCount = zeroEvidenceConfirmTells.filter((i) => checkedIds.includes(i.id)).length;

  return (
    <div className="rounded-xl border border-surface-border bg-surface">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          Instant Confirms
          {activeCount > 0 && (
            <span className="rounded-full bg-accent-strong px-1.5 py-0.5 text-[10px] font-semibold text-white">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDown className={cn("size-4 text-muted transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="flex flex-col gap-2 border-t border-surface-border p-4">
          <p className="text-xs text-muted">
            Rare, highly specific tells worth actively hunting for. Checking one confirms that
            ghost outright and rules out everything else.
          </p>
          <ul className="flex flex-col gap-2">
            {zeroEvidenceConfirmTells.map((item) => (
              <ZeroEvidenceItemRow
                key={item.id}
                item={item}
                checked={checkedIds.includes(item.id)}
                onToggle={() => onToggle(item.id)}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
