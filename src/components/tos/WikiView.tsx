"use client";

import { GhostCard } from "@/components/tos/GhostCard";
import { GhostDetail } from "@/components/tos/GhostDetail";
import { SearchBar } from "@/components/shared/SearchBar";
import { getTosGhostById, tosGhosts } from "@/data/tos/ghosts";
import type { TosGhost } from "@/lib/tos/types";
import { useUrlParams } from "@/lib/useUrlParams";
import { useMemo, useState } from "react";

function searchBlob(g: TosGhost): string {
  return [g.name, g.tell, ...g.evidence].join(" ").toLowerCase();
}

export function WikiView() {
  const [query, setQuery] = useState("");
  const { values, push } = useUrlParams(["tghost"]);
  const selected = values.tghost ? getTosGhostById(values.tghost) ?? null : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tosGhosts;
    return tosGhosts.filter((g) => searchBlob(g).includes(q));
  }, [query]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Ghost Wiki</h1>
        <p className="text-sm text-muted">
          All 18 confirmed ghost types. Each has exactly 3 real evidence types on Novice/Intermediate — Expert swaps
          in 1 false reading, Master swaps in 2 (see Identify Contracts in Guides). False evidence shows as the
          strongest reading first, then degrades — don&rsquo;t lock in on a first-look strong reading.
        </p>
      </div>

      <SearchBar value={query} onChange={setQuery} placeholder="Search name, tell, or evidence…" />

      <p className="text-xs text-muted">
        {filtered.length} of {tosGhosts.length} ghosts
      </p>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted">No ghosts match &ldquo;{query}&rdquo;.</p>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ghost) => (
            <GhostCard key={ghost.id} ghost={ghost} onSelect={(g) => push({ tghost: g.id })} />
          ))}
        </div>
      )}

      {selected && <GhostDetail ghost={selected} onClose={() => window.history.back()} />}
    </div>
  );
}
