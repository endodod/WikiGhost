"use client";

import { clueCategories, clues } from "@/data/clues";
import { cn } from "@/lib/cn";
import { ChevronDown, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

interface TellsChecklistProps {
  activeIds: string[];
  onToggle: (id: string) => void;
}

export function TellsChecklist({ activeIds, onToggle }: TellsChecklistProps) {
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const searching = query.trim().length > 0;

  const filteredByCategory = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clueCategories
      .map((category) => ({
        category,
        items: clues.filter(
          (c) => c.category === category && (!q || c.label.toLowerCase().includes(q))
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <div className="rounded-xl border border-surface-border bg-surface">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          Behavioral Tells
          {activeIds.length > 0 && (
            <span className="rounded-full bg-accent-strong px-1.5 py-0.5 text-[10px] font-semibold text-white">
              {activeIds.length}
            </span>
          )}
        </span>
        <ChevronDown className={cn("size-4 text-muted transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="flex flex-col gap-3 border-t border-surface-border p-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tells (e.g. 'salt', 'breaker', 'door')…"
              className="w-full rounded-lg border border-surface-border bg-surface-2 py-2 pl-9 pr-9 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-muted hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {filteredByCategory.length === 0 ? (
            <p className="py-4 text-center text-sm text-muted">
              No tells match &ldquo;{query}&rdquo;.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {filteredByCategory.map(({ category, items }) => {
                const isOpen = searching || openCategory === category;
                const activeInCategory = items.filter((i) => activeIds.includes(i.id)).length;
                return (
                  <div
                    key={category}
                    className="rounded-lg border border-surface-border bg-surface-2/50"
                  >
                    <button
                      onClick={() => !searching && setOpenCategory(isOpen ? null : category)}
                      className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium text-foreground/90"
                    >
                      <span className="flex items-center gap-2">
                        {category}
                        {activeInCategory > 0 && (
                          <span className="rounded-full bg-accent-strong px-1.5 py-0.5 text-[10px] font-semibold text-white">
                            {activeInCategory}
                          </span>
                        )}
                      </span>
                      {!searching && (
                        <ChevronDown
                          className={cn("size-4 text-muted transition-transform", isOpen && "rotate-180")}
                        />
                      )}
                    </button>
                    {isOpen && (
                      <ul className="flex flex-col gap-1 px-3 pb-3">
                        {items.map((clue) => (
                          <li key={clue.id}>
                            <label className="flex cursor-pointer items-start gap-2 rounded-md px-1.5 py-1 text-sm text-foreground/90 hover:bg-surface-2">
                              <input
                                type="checkbox"
                                checked={activeIds.includes(clue.id)}
                                onChange={() => onToggle(clue.id)}
                                className="mt-0.5 size-4 shrink-0 accent-accent-strong"
                              />
                              <span>{clue.label}</span>
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
