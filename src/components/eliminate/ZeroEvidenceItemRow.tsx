"use client";

import type { ZeroEvidenceItem } from "@/data/zeroEvidenceChecklist";
import { getGhostById } from "@/data/ghosts";

interface ZeroEvidenceItemRowProps {
  item: ZeroEvidenceItem;
  checked: boolean;
  onToggle: () => void;
}

/** Shared checkbox row for both the sequential checklist and the Instant Confirms list —
 * always names which ghost(s) the test is for, so that's never left implicit in prose alone. */
export function ZeroEvidenceItemRow({ item, checked, onToggle }: ZeroEvidenceItemRowProps) {
  const targetIds = item.eliminate ?? item.keep ?? [];
  const targetNames = targetIds.map((id) => getGhostById(id)?.name ?? id);
  const verb = item.keep ? "Confirms" : "Rules out";

  return (
    <li>
      <label className="flex cursor-pointer items-start gap-2 rounded-md px-1.5 py-1.5 text-sm text-foreground/90 hover:bg-surface-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="mt-0.5 size-4 shrink-0 accent-accent-strong"
        />
        <span className="flex flex-col gap-1">
          <span>{item.label}</span>
          {item.description && <span className="text-xs text-muted">{item.description}</span>}
          {targetNames.length > 0 && (
            <span className="text-[11px] font-medium text-accent-strong/90">
              {verb}: {targetNames.join(", ")}
            </span>
          )}
        </span>
      </label>
    </li>
  );
}
