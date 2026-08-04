"use client";

import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

interface DetailModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
  /** Extra header controls (e.g. an "open on wiki" link) rendered before the close button. */
  headerExtra?: ReactNode;
  /** "md" (default) fits compact reference content; "xl" gives large media (e.g. maps) room to breathe. */
  size?: "md" | "xl";
}

/** Shared bottom-sheet/dialog shell used by every "click a card to see details" detail view. */
export function DetailModal({ title, onClose, children, headerExtra, size = "md" }: DetailModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-4">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div
        className={`relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl border border-surface-border bg-surface shadow-2xl sm:rounded-2xl ${
          size === "xl" ? "sm:max-w-4xl" : "sm:max-w-lg"
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-surface-border px-5 py-4">
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          <div className="flex shrink-0 items-center gap-1">
            {headerExtra}
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-muted transition hover:bg-surface-2 hover:text-foreground"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto px-5 py-2">{children}</div>
      </div>
    </div>
  );
}

export function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-surface-border py-4 first:border-t-0 first:pt-0">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{title}</h3>
      {children}
    </section>
  );
}
