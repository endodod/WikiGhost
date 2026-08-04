"use client";

import { EvidenceBadge } from "@/components/shared/EvidenceBadge";
import type { Ghost } from "@/lib/types";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useMemo, useState } from "react";

interface GhostTableProps {
  ghosts: Ghost[];
  onSelect: (ghost: Ghost) => void;
}

type SortKey = "name" | "minSpeed" | "maxSpeed" | "minSanity" | "maxSanity";

const columns: { key: SortKey; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "minSpeed", label: "Min Speed" },
  { key: "maxSpeed", label: "Max Speed" },
  { key: "minSanity", label: "Min Sanity" },
  { key: "maxSanity", label: "Max Sanity" },
];

export function GhostTable({ ghosts, onSelect }: GhostTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [asc, setAsc] = useState(true);

  const rows = useMemo(() => {
    return ghosts.map((g) => {
      const speeds = g.hunt.speeds.map((s) => s.value);
      const sanities = g.hunt.sanityThresholds.map((s) => s.value);
      return {
        ghost: g,
        minSpeed: Math.min(...speeds),
        maxSpeed: Math.max(...speeds),
        minSanity: Math.min(...sanities),
        maxSanity: Math.max(...sanities),
      };
    });
  }, [ghosts]);

  const sorted = useMemo(() => {
    const copy = [...rows];
    copy.sort((a, b) => {
      let cmp: number;
      if (sortKey === "name") {
        cmp = a.ghost.name.localeCompare(b.ghost.name);
      } else {
        cmp = a[sortKey] - b[sortKey];
      }
      return asc ? cmp : -cmp;
    });
    return copy;
  }, [rows, sortKey, asc]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setAsc((a) => !a);
    } else {
      setSortKey(key);
      setAsc(true);
    }
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-surface-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-surface-2 text-xs uppercase tracking-wide text-muted">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-3 py-2.5 font-semibold">
                <button
                  onClick={() => handleSort(col.key)}
                  className="flex items-center gap-1 hover:text-foreground"
                >
                  {col.label}
                  {sortKey === col.key &&
                    (asc ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />)}
                </button>
              </th>
            ))}
            <th className="px-3 py-2.5 font-semibold">Evidence</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-surface-border">
          {sorted.map(({ ghost, minSpeed, maxSpeed, minSanity, maxSanity }) => (
            <tr
              key={ghost.id}
              onClick={() => onSelect(ghost)}
              className="cursor-pointer bg-surface transition hover:bg-surface-2"
            >
              <td className="px-3 py-2.5 font-medium text-foreground">{ghost.name}</td>
              <td className="px-3 py-2.5 font-mono text-muted">{minSpeed} m/s</td>
              <td className="px-3 py-2.5 font-mono text-muted">{maxSpeed} m/s</td>
              <td className="px-3 py-2.5 font-mono text-muted">&le;{minSanity}%</td>
              <td className="px-3 py-2.5 font-mono text-muted">&le;{maxSanity}%</td>
              <td className="px-3 py-2.5">
                <div className="flex gap-1">
                  {ghost.evidences.map((ev) => (
                    <EvidenceBadge key={ev} evidence={ev} size="sm" />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
