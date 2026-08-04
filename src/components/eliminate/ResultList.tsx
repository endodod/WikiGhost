"use client";

import { GhostResultCard } from "@/components/eliminate/GhostResultCard";
import type { GhostVerdict } from "@/lib/filter";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Ghost } from "@/lib/types";

interface ResultListProps {
  verdicts: GhostVerdict[];
  highlightedIds: string[];
  crossedOutIds: string[];
  onSelectGhost: (ghost: Ghost) => void;
  onToggleHighlight: (id: string) => void;
  onToggleCrossOut: (id: string) => void;
}

export function ResultList({
  verdicts,
  highlightedIds,
  crossedOutIds,
  onSelectGhost,
  onToggleHighlight,
  onToggleCrossOut,
}: ResultListProps) {
  const [showRuledOut, setShowRuledOut] = useState(false);

  const candidates = verdicts.filter((v) => !v.eliminated);
  const ruledOut = verdicts.filter((v) => v.eliminated);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Ghosts <span className="text-muted">({candidates.length})</span>
          </h2>
        </div>
        {candidates.length === 0 ? (
          <p className="rounded-lg border border-dashed border-surface-border p-4 text-center text-sm text-muted">
            No ghosts match every clue. Double-check your inputs, or undo a tap.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {candidates.map((v) => (
              <GhostResultCard
                key={v.ghost.id}
                verdict={v}
                highlighted={highlightedIds.includes(v.ghost.id)}
                crossedOut={crossedOutIds.includes(v.ghost.id)}
                onSelect={() => onSelectGhost(v.ghost)}
                onToggleHighlight={() => onToggleHighlight(v.ghost.id)}
                onToggleCrossOut={() => onToggleCrossOut(v.ghost.id)}
              />
            ))}
          </div>
        )}
      </div>

      {ruledOut.length > 0 && (
        <div>
          <button
            onClick={() => setShowRuledOut((s) => !s)}
            className="flex w-full items-center justify-between rounded-lg border border-surface-border bg-surface-2/50 px-3 py-2 text-sm font-medium text-muted transition hover:text-foreground"
          >
            Ruled Out ({ruledOut.length})
            <ChevronDown
              className={`size-4 transition-transform ${showRuledOut ? "rotate-180" : ""}`}
            />
          </button>
          {showRuledOut && (
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {ruledOut.map((v) => (
                <GhostResultCard
                  key={v.ghost.id}
                  verdict={v}
                  highlighted={highlightedIds.includes(v.ghost.id)}
                  crossedOut={crossedOutIds.includes(v.ghost.id)}
                  onSelect={() => onSelectGhost(v.ghost)}
                  onToggleHighlight={() => onToggleHighlight(v.ghost.id)}
                  onToggleCrossOut={() => onToggleCrossOut(v.ghost.id)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
