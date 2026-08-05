"use client";

import { tosGuides, type TosGuide, type TosGuideSection } from "@/data/tos/guides";
import { cn } from "@/lib/cn";
import { renderInline } from "@/lib/markdownLite";
import { useUrlParams } from "@/lib/useUrlParams";
import { AlertTriangle, BookOpen, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

function sectionId(index: number) {
  return `tos-guide-section-${index}`;
}

function GuideSectionBlock({ section, index }: { section: TosGuideSection; index: number }) {
  return (
    <section id={sectionId(index)} className="flex scroll-mt-[calc(var(--app-header-h)+16px)] flex-col gap-2">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{section.heading}</h2>

      {section.warning ? (
        <div className="flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/5 p-3">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-400" />
          <p className="text-sm text-foreground/90">{renderInline(section.warning)}</p>
        </div>
      ) : (
        section.body && <p className="text-sm text-foreground/90">{renderInline(section.body)}</p>
      )}

      {section.bullets && (
        <ul className="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
          {section.bullets.map((b, i) => (
            <li key={i}>{renderInline(b)}</li>
          ))}
        </ul>
      )}

      {section.table && (
        <div className="overflow-x-auto rounded-lg border border-surface-border">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-surface-2 text-xs uppercase tracking-wide text-muted">
              <tr>
                {section.table.headers.map((h) => (
                  <th key={h} className="px-3 py-2 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {section.table.rows.map((row, i) => (
                <tr key={i} className="bg-surface">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 align-top text-foreground/90">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function GuideContent({ guide }: { guide: TosGuide }) {
  return (
    <article className="flex flex-col gap-6">
      <header className="flex flex-col gap-2 border-b border-surface-border pb-4">
        <h1 className="text-xl font-bold text-foreground">{guide.title}</h1>
        <p className="text-sm text-muted">{guide.summary}</p>
      </header>

      {guide.sections.map((section, i) => (
        <GuideSectionBlock key={i} section={section} index={i} />
      ))}
    </article>
  );
}

export function GuidesView() {
  const { values, push } = useUrlParams(["tguide", "tchapter"]);
  const active = tosGuides.find((g) => g.id === values.tguide) ?? tosGuides[0];

  // Strict single-open accordion: exactly one guide's chapter list is ever shown. `null` means
  // "no manual override — follow whichever guide is active" (derived fresh each render, so it
  // never fights the active guide changing underneath it); "" means "explicitly collapsed, even
  // though a guide is active"; any other value is a specific guide peeked via its chevron without
  // navigating to it — either way, opening/peeking a guide always closes every other one.
  const [expandOverride, setExpandOverride] = useState<string | null>(null);
  const expandedGuideId = expandOverride === null ? active.id : expandOverride || null;

  useEffect(() => {
    if (!values.tchapter) return;
    document.getElementById(sectionId(Number(values.tchapter)))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [values.tchapter]);

  function toggleGuideExpanded(id: string) {
    setExpandOverride(expandedGuideId === id ? "" : id);
  }

  function selectGuide(id: string) {
    push({ tguide: id, tchapter: null });
    setExpandOverride(null);
  }

  function selectChapterOf(guideId: string, index: number) {
    push({ tguide: guideId, tchapter: String(index) });
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
        <p className="text-sm text-muted">Hunt mechanics, contract walkthroughs, and reference guides.</p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex shrink-0 flex-col gap-4 lg:sticky lg:top-[calc(var(--app-header-h)+16px)] lg:max-h-[calc(100dvh-var(--app-header-h)-32px)] lg:w-56 lg:overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
              <BookOpen className="size-3.5" />
              Guides
            </span>
            {tosGuides.map((g) => {
              const expanded = expandedGuideId === g.id;
              return (
                <div key={g.id} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => selectGuide(g.id)}
                      className={cn(
                        "flex min-h-11 flex-1 items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition sm:min-h-0 sm:items-start",
                        g.id === active.id
                          ? "bg-accent-strong text-white"
                          : "text-muted hover:bg-surface-2 hover:text-foreground"
                      )}
                    >
                      <BookOpen className="mt-0.5 size-3.5 shrink-0" />
                      {g.title}
                    </button>
                    <button
                      onClick={() => toggleGuideExpanded(g.id)}
                      title={expanded ? "Collapse chapters" : "Expand chapters"}
                      className="flex size-8 shrink-0 items-center justify-center rounded-lg text-muted transition hover:bg-surface-2 hover:text-foreground"
                    >
                      <ChevronDown className={cn("size-3.5 transition-transform", expanded && "rotate-180")} />
                    </button>
                  </div>

                  {expanded && (
                    <div className="flex flex-col gap-1 py-1 pl-5">
                      {g.sections.map((section, i) => (
                        <button
                          key={i}
                          onClick={() => selectChapterOf(g.id, i)}
                          className="flex min-h-10 items-center rounded-lg px-3 py-1.5 text-left text-xs text-muted transition hover:bg-surface-2 hover:text-foreground sm:min-h-0"
                        >
                          {section.heading}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="min-w-0 flex-1 rounded-xl border border-surface-border bg-surface p-4 sm:p-6">
          <GuideContent guide={active} />
        </div>
      </div>
    </div>
  );
}
