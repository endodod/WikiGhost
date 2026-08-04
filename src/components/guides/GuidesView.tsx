"use client";

import { guides, type Guide } from "@/data/guides";
import { cn } from "@/lib/cn";
import { renderGuideText } from "@/lib/ghostLinker";
import { useUrlParams } from "@/lib/useUrlParams";
import { BookOpen } from "lucide-react";
import { useEffect } from "react";

function stageId(index: number) {
  return `guide-stage-${index}`;
}

const CLOSING_CHAPTER = "closing";

function chapterSectionId(chapter: string) {
  return chapter === CLOSING_CHAPTER ? "guide-closing" : stageId(Number(chapter));
}

function GuideContent({ guide, onViewGhost }: { guide: Guide; onViewGhost: (ghostId: string) => void }) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2 border-b border-surface-border pb-4">
        <h1 className="text-xl font-bold text-foreground">{guide.title}</h1>
        <p className="text-sm text-muted">{guide.summary}</p>
      </header>

      <div className="flex flex-col gap-2 text-sm text-foreground/90">
        {guide.intro.map((p, i) => (
          <p key={i}>{renderGuideText(p, onViewGhost)}</p>
        ))}
      </div>

      {guide.stages.map((stage, i) => (
        <section key={i} id={stageId(i)} className="flex scroll-mt-[calc(var(--app-header-h)+16px)] flex-col gap-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
            {renderGuideText(stage.heading, onViewGhost)}
          </h2>
          {stage.intro && (
            <p className="text-sm text-foreground/90">{renderGuideText(stage.intro, onViewGhost)}</p>
          )}

          <div className="flex flex-col gap-4">
            {stage.items.map((item, j) => (
              <div key={j} className="rounded-lg border border-surface-border bg-surface p-3.5">
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                  {renderGuideText(item.title, onViewGhost)}
                </h3>
                <p className="text-sm text-foreground/90">{renderGuideText(item.body, onViewGhost)}</p>
                {item.bullets && (
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground/90">
                    {item.bullets.map((b, k) => (
                      <li key={k}>{renderGuideText(b, onViewGhost)}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <section
        id="guide-closing"
        className="flex scroll-mt-[calc(var(--app-header-h)+16px)] flex-col gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4"
      >
        <h2 className="text-sm font-bold uppercase tracking-wide text-accent">
          {renderGuideText(guide.closing.heading, onViewGhost)}
        </h2>
        {guide.closing.intro && (
          <p className="text-sm text-foreground/90">{renderGuideText(guide.closing.intro, onViewGhost)}</p>
        )}
        <ul className="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
          {guide.closing.bullets.map((b, i) => (
            <li key={i}>{renderGuideText(b, onViewGhost)}</li>
          ))}
        </ul>
        {guide.closing.outro && (
          <p className="text-sm text-foreground/90">{renderGuideText(guide.closing.outro, onViewGhost)}</p>
        )}
      </section>

      {guide.sources && (
        <section className="flex flex-col gap-2 border-t border-surface-border pt-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted">{guide.sources.heading}</h2>
          <ul className="list-disc space-y-1 pl-4 text-xs text-muted">
            {guide.sources.bullets.map((b, i) => (
              <li key={i}>{renderGuideText(b, onViewGhost)}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}

export function GuidesView() {
  // Guide/chapter selection and cross-tab ghost links all push a history entry —
  // switching guides or chapters, or jumping to a ghost, are each an undoable step.
  const { values, push } = useUrlParams(["guide", "chapter", "tab"]);
  const active = guides.find((g) => g.id === values.guide) ?? guides[0];

  // A chapter link click already scrolls immediately; this also restores scroll
  // position when `chapter` changes via back/forward instead of a click.
  useEffect(() => {
    if (!values.chapter) return;
    document.getElementById(chapterSectionId(values.chapter))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [values.chapter]);

  function selectGuide(id: string) {
    push({ guide: id, chapter: null });
  }

  function selectChapter(chapter: string) {
    push({ chapter });
  }

  function viewGhost(ghostId: string) {
    push({ tab: "wiki", wghost: ghostId });
  }

  if (!active) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-3 px-4 py-16 text-center sm:px-6">
        <BookOpen className="size-6 text-muted" />
        <p className="text-sm text-muted">No guides yet — check back soon.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Guides</h1>
        <p className="text-sm text-muted">
          Step-by-step strategies and quick reference guides.
        </p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex shrink-0 flex-col gap-4 lg:sticky lg:top-[calc(var(--app-header-h)+16px)] lg:max-h-[calc(100dvh-var(--app-header-h)-32px)] lg:w-56 lg:overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {guides.length > 1 && (
              <span className="flex items-center gap-1.5 px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                <BookOpen className="size-3.5" />
                Guides
              </span>
            )}
            {guides.map((g) => (
              <div key={g.id} className="flex flex-col gap-1">
                {guides.length > 1 && (
                  <button
                    onClick={() => selectGuide(g.id)}
                    className={cn(
                      "flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition sm:min-h-0 sm:items-start",
                      g.id === active.id
                        ? "bg-accent-strong text-white"
                        : "text-muted hover:bg-surface-2 hover:text-foreground"
                    )}
                  >
                    <BookOpen className="mt-0.5 size-3.5 shrink-0" />
                    {g.title}
                  </button>
                )}

                {g.id === active.id && (
                  <div className="flex flex-col gap-1 py-1 pl-5">
                    {active.stages.map((stage, i) => (
                      <button
                        key={i}
                        onClick={() => selectChapter(String(i))}
                        className="flex min-h-10 items-center rounded-lg px-3 py-1.5 text-left text-xs text-muted transition hover:bg-surface-2 hover:text-foreground sm:min-h-0"
                      >
                        {stage.heading}
                      </button>
                    ))}
                    <button
                      onClick={() => selectChapter(CLOSING_CHAPTER)}
                      className="flex min-h-10 items-center rounded-lg px-3 py-1.5 text-left text-xs text-muted transition hover:bg-surface-2 hover:text-foreground sm:min-h-0"
                    >
                      {active.closing.heading}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="min-w-0 flex-1 rounded-xl border border-surface-border bg-surface p-4 sm:p-6">
          <GuideContent guide={active} onViewGhost={viewGhost} />
        </div>
      </div>
    </div>
  );
}
