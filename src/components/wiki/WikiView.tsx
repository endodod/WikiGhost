"use client";

import { GhostCard } from "@/components/wiki/GhostCard";
import { GhostDetail } from "@/components/wiki/GhostDetail";
import { GhostTable } from "@/components/wiki/GhostTable";
import { SearchBar } from "@/components/wiki/SearchBar";
import { getGhostById, ghosts } from "@/data/ghosts";
import { searchGhosts } from "@/lib/search";
import type { Ghost } from "@/lib/types";
import { LayoutGrid, Table2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ViewMode = "grid" | "table";

interface WikiViewProps {
  /** When set (e.g. from "View in Ghost Wiki" in Find My Ghost), opens that ghost's detail. */
  focusGhostId?: string | null;
  onFocusHandled?: () => void;
}

export function WikiView({ focusGhostId, onFocusHandled }: WikiViewProps = {}) {
  const [query, setQuery] = useState("");
  const [view, setView] = useState<ViewMode>("grid");
  const [selected, setSelected] = useState<Ghost | null>(null);

  const filtered = useMemo(() => searchGhosts(ghosts, query), [query]);

  // Adjust our own state in response to a new focus request during render
  // (React's recommended pattern) — but notifying the parent has to wait
  // until after commit, via an effect, since updating a different
  // component's state mid-render is not allowed.
  const [lastFocusId, setLastFocusId] = useState<string | null | undefined>(undefined);
  if (focusGhostId && focusGhostId !== lastFocusId) {
    setLastFocusId(focusGhostId);
    const ghost = getGhostById(focusGhostId);
    if (ghost) setSelected(ghost);
  }

  useEffect(() => {
    if (focusGhostId) onFocusHandled?.();
  }, [focusGhostId, onFocusHandled]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
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
            <GhostCard key={ghost.id} ghost={ghost} onSelect={setSelected} />
          ))}
        </div>
      ) : (
        <GhostTable ghosts={filtered} onSelect={setSelected} />
      )}

      {selected && <GhostDetail ghost={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
