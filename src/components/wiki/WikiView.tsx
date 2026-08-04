"use client";

import { GhostCard } from "@/components/wiki/GhostCard";
import { GhostDetail } from "@/components/wiki/GhostDetail";
import { GhostTable } from "@/components/wiki/GhostTable";
import { SearchBar } from "@/components/wiki/SearchBar";
import { getGhostById, ghosts } from "@/data/ghosts";
import { searchGhosts } from "@/lib/search";
import type { Ghost } from "@/lib/types";
import { useUrlParams } from "@/lib/useUrlParams";
import { LayoutGrid, Table2 } from "lucide-react";
import { useMemo, useState } from "react";

type ViewMode = "grid" | "table";

export function WikiView() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<ViewMode>("grid");
  const { values, push } = useUrlParams(["wghost"]);
  const selected = values.wghost ? getGhostById(values.wghost) ?? null : null;

  const filtered = useMemo(() => searchGhosts(ghosts, query), [query]);

  function selectGhost(ghost: Ghost) {
    push({ wghost: ghost.id });
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Ghost Wiki</h1>
        <p className="text-sm text-muted">
          All 30 ghost types with their evidence, tells, and behavior — browse the grid or table, or search by name.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex shrink-0 items-center gap-1 rounded-lg border border-surface-border bg-surface-2 p-1">
          <button
            onClick={() => setView("grid")}
            className={`rounded-md p-1.5 transition ${
              view === "grid" ? "bg-accent-strong text-white" : "text-muted hover:text-foreground"
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="size-4" />
          </button>
          <button
            onClick={() => setView("table")}
            className={`rounded-md p-1.5 transition ${
              view === "table" ? "bg-accent-strong text-white" : "text-muted hover:text-foreground"
            }`}
            aria-label="Table view"
          >
            <Table2 className="size-4" />
          </button>
        </div>
      </div>

      <p className="text-xs text-muted">
        {filtered.length} of {ghosts.length} ghosts
      </p>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted">
          No ghosts match &ldquo;{query}&rdquo;.
        </p>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((ghost) => (
            <GhostCard key={ghost.id} ghost={ghost} onSelect={selectGhost} />
          ))}
        </div>
      ) : (
        <GhostTable ghosts={filtered} onSelect={selectGhost} />
      )}

      {selected && <GhostDetail ghost={selected} onClose={() => window.history.back()} />}
    </div>
  );
}
