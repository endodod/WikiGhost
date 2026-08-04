"use client";

import { cn } from "@/lib/cn";
import { Ghost, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface GameTab {
  id: string;
  label: string;
  icon: LucideIcon;
  content: React.ReactNode;
}

interface GameShellProps {
  tabs: GameTab[];
  defaultTabId?: string;
}

/** Shared header + tab layout for the WikiGhost app. */
export function GameShell({ tabs, defaultTabId }: GameShellProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);
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
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-foreground">
          <Ghost className="size-5 text-accent" />
          <span className="hidden sm:inline">WikiGhost</span>
        </Link>

        <nav className="flex min-w-0 items-center gap-0.5 overflow-x-auto rounded-full border border-surface-border bg-surface-2 p-0.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
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
      </header>

      <main className="flex flex-1 flex-col">{active?.content}</main>
    </div>
  );
}
