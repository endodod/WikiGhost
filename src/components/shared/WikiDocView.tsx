"use client";

import { WikiImage } from "@/components/shared/WikiImage";
import { cn } from "@/lib/cn";
import { renderInline } from "@/lib/markdownLite";
import { useUrlParams } from "@/lib/useUrlParams";
import type { WikiDoc, WikiSection } from "@/lib/wikiContent";
import { AlertTriangle, BookOpen, Check } from "lucide-react";
import { useEffect } from "react";

function sectionId(idPrefix: string, index: number) {
  return `${idPrefix}-section-${index}`;
}

function SectionBlock({ section, id }: { section: WikiSection; id: string }) {
  return (
    <section id={id} className="flex scroll-mt-[calc(var(--app-header-h)+16px)] flex-col gap-2">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{section.heading}</h2>

      {section.body && <p className="text-sm text-foreground/90">{renderInline(section.body)}</p>}

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
                {section.table.media && <th className="px-3 py-2 font-semibold">Example</th>}
                {section.table.highlightRows && (
                  <th className="px-3 py-2 font-semibold">Counts as Evidence?</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border">
              {section.table.rows.map((row, i) => {
                const confirmed = section.table!.highlightRows?.includes(i) ?? false;
                const media = section.table!.media?.[i];
                return (
                  <tr key={i} className={cn(confirmed ? "bg-accent/10" : "bg-surface")}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={cn(
                          "px-3 py-2 align-top",
                          confirmed ? "font-medium text-foreground" : "text-foreground/90"
                        )}
                      >
                        {renderInline(cell)}
                      </td>
                    ))}
                    {section.table!.media && (
                      <td className="px-3 py-2 align-top">
                        {media?.type === "image" ? (
                          <WikiImage
                            src={media.src}
                            alt={`${row[0]} example`}
                            wikiUrl=""
                            fit="cover"
                            zoomable
                            hint={false}
                            className="h-16 w-16 rounded-lg"
                          />
                        ) : media?.type === "audio" ? (
                          <audio controls preload="none" src={media.src} className="h-8 w-44" />
                        ) : (
                          <span className="text-xs text-muted">—</span>
                        )}
                      </td>
                    )}
                    {section.table!.highlightRows && (
                      <td className="px-3 py-2 align-top">
                        {confirmed ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                            <Check className="size-3.5" />
                            Yes
                          </span>
                        ) : (
                          <span className="text-xs text-muted">No</span>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {section.warning && (
        <div className="flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/5 p-3">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-amber-400" />
          <p className="text-sm text-foreground/90">{renderInline(section.warning)}</p>
        </div>
      )}
    </section>
  );
}

interface WikiDocViewProps {
  doc: WikiDoc;
  /** Distinct per game/page so switching tabs doesn't collide with another page's deep-link param. */
  chapterParam: string;
  idPrefix: string;
}

/** Sidebar table-of-contents + single-document article — shared shape across the app's reference wikis (Guides, Evidence Wiki). */
export function WikiDocView({ doc, chapterParam, idPrefix }: WikiDocViewProps) {
  const { values, push } = useUrlParams([chapterParam]);
  const chapter = values[chapterParam];

  useEffect(() => {
    if (!chapter) return;
    document.getElementById(sectionId(idPrefix, Number(chapter)))?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [chapter, idPrefix]);

  function selectChapter(index: number) {
    push({ [chapterParam]: String(index) });
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">{doc.title}</h1>
        <p className="text-sm text-muted">{doc.summary}</p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
        <div className="flex shrink-0 flex-col gap-4 lg:sticky lg:top-[calc(var(--app-header-h)+16px)] lg:max-h-[calc(100dvh-var(--app-header-h)-32px)] lg:w-56 lg:overflow-y-auto">
          <nav className="flex flex-col gap-1">
            <span className="flex items-center gap-1.5 px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
              <BookOpen className="size-3.5" />
              On This Page
            </span>
            {doc.sections.map((section, i) => (
              <button
                key={i}
                onClick={() => selectChapter(i)}
                className="flex min-h-10 items-center rounded-lg px-3 py-1.5 text-left text-xs text-muted transition hover:bg-surface-2 hover:text-foreground sm:min-h-0"
              >
                {section.heading}
              </button>
            ))}
          </nav>
        </div>

        <div className="min-w-0 flex-1 rounded-xl border border-surface-border bg-surface p-4 sm:p-6">
          <article className="flex flex-col gap-6">
            {doc.sections.map((section, i) => (
              <SectionBlock key={i} section={section} id={sectionId(idPrefix, i)} />
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}
