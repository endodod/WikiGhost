"use client";

import { guides, type Guide } from "@/data/guides";
import { cn } from "@/lib/cn";
import { renderInline } from "@/lib/markdownLite";
import { BookOpen } from "lucide-react";
import { useState } from "react";

function GuideContent({ guide }: { guide: Guide }) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2 border-b border-surface-border pb-4">
        <h1 className="text-xl font-bold text-foreground">{guide.title}</h1>
        <p className="text-sm text-muted">{guide.summary}</p>
      </header>

      <div className="flex flex-col gap-2 text-sm text-foreground/90">
        {guide.intro.map((p, i) => (
          <p key={i}>{renderInline(p)}</p>
        ))}
      </div>

      {guide.stages.map((stage, i) => (
        <section key={i} className="flex flex-col gap-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{stage.heading}</h2>
          {stage.intro && <p className="text-sm text-foreground/90">{renderInline(stage.intro)}</p>}

          <div className="flex flex-col gap-4">
            {stage.items.map((item, j) => (
              <div key={j} className="rounded-lg border border-surface-border bg-surface p-3.5">
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-foreground/90">{renderInline(item.body)}</p>
                {item.bullets && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground/90">
                    {item.bullets.map((b, k) => (
                      <li key={k}>{renderInline(b)}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="flex flex-col gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
        <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{guide.closing.heading}</h2>
        {guide.closing.intro && <p className="text-sm text-foreground/90">{renderInline(guide.closing.intro)}</p>}
        <ul className="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
          {guide.closing.bullets.map((b, i) => (
            <li key={i}>{renderInline(b)}</li>
          ))}
        </ul>
        {guide.closing.outro && <p className="text-sm text-foreground/90">{renderInline(guide.closing.outro)}</p>}
      </section>

      {guide.sources && (
        <section className="flex flex-col gap-2 border-t border-surface-border pt-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">{guide.sources.heading}</h2>
          <ul className="list-disc space-y-1 pl-4 text-xs text-muted">
            {guide.sources.bullets.map((b, i) => (
              <li key={i}>{renderInline(b)}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export function GuidesView() {
  const [activeId, setActiveId] = useState(guides[0]?.id);
  const active = guides.find((g) => g.id === activeId) ?? guides[0];

  if (!active) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-3 px-4 py-16 text-center sm:px-6">
        <BookOpen className="size-6 text-muted" />
        <p className="text-sm text-muted">No guides yet — check back soon.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-4 sm:px-6 lg:flex-row lg:items-start">
      {guides.length > 1 && (
        <nav className="flex shrink-0 flex-col gap-1 lg:w-56">
          {guides.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveId(g.id)}
              className={cn(
                "flex items-start gap-2 rounded-lg px-3 py-2 text-left text-sm transition",
                g.id === active.id
                  ? "bg-accent-strong text-white"
                  : "text-muted hover:bg-surface-2 hover:text-foreground"
              )}
            >
              <BookOpen className="mt-0.5 size-3.5 shrink-0" />
              {g.title}
            </button>
          ))}
        </nav>
      )}

      <div className="min-w-0 flex-1 rounded-xl border border-surface-border bg-surface p-4 sm:p-6">
        <GuideContent guide={active} />
      </div>
    </div>
  );
}
