"use client";

import { cn } from "@/lib/cn";
import { Ghost, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

export interface GameTab {
  id: string;
  label: string;
  /** Shorter label for the mobile bottom tab bar's tight columns; falls back to `label`. */
  shortLabel?: string;
  icon: LucideIcon;
  content: ReactNode;
}

interface GameShellProps {
  tabs: GameTab[];
  activeId: string;
  onActiveIdChange: (id: string) => void;
  /** Extra control rendered after the tab nav, e.g. a game selector. */
  headerEnd?: ReactNode;
  /** When provided, replaces the active tab's own content (used for cross-game "coming soon" states). */
  content?: ReactNode;
}

/** Shared header + tab layout for the WikiGhost app. */
export function GameShell({ tabs, activeId, onActiveIdChange, headerEnd, content }: GameShellProps) {
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setVar = () =>
      document.documentElement.style.setProperty("--app-header-h", `${el.offsetHeight}px`);
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <header
        ref={headerRef}
        className="sticky top-0 z-30 flex h-[52px] items-center justify-between gap-2 border-b border-surface-border bg-background/95 px-4 backdrop-blur sm:px-6"
      >
        <div className="flex min-w-0 items-center gap-2">
          <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-foreground">
            <Ghost className="size-5 text-accent" />
            <span className="hidden sm:inline">WikiGhost</span>
          </Link>

          {headerEnd && <div className="shrink-0">{headerEnd}</div>}
        </div>

        <div className="flex min-w-0 items-center justify-end gap-2 overflow-x-auto">
          {tabs.length > 0 && (
            <nav className="hidden shrink-0 items-center gap-0.5 rounded-full border border-surface-border bg-surface-2 p-0.5 sm:flex">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onActiveIdChange(tab.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold transition",
                      tab.id === active?.id
                        ? "bg-accent-strong text-white"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="size-3" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          )}
        </div>
      </header>

      <main className="flex flex-1 flex-col pb-[calc(60px+env(safe-area-inset-bottom))] sm:pb-0">
        {content ??
          tabs.map((tab) => (
            <div key={tab.id} className={cn("flex flex-1 flex-col", tab.id !== active?.id && "hidden")}>
              {tab.content}
            </div>
          ))}
      </main>

      {tabs.length > 0 && (
        <nav
          className="fixed inset-x-0 bottom-0 z-30 grid border-t border-surface-border bg-background/95 backdrop-blur sm:hidden"
          style={{
            gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active?.id;
            return (
              <button
                key={tab.id}
                onClick={() => onActiveIdChange(tab.id)}
                className={cn(
                  "flex min-w-0 flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-semibold transition",
                  isActive ? "text-accent" : "text-muted"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="size-5" strokeWidth={isActive ? 2.5 : 2} />
                <span className="truncate px-0.5 leading-none">{tab.shortLabel ?? tab.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
