"use client";

import { DetailModal, DetailSection } from "@/components/shared/DetailModal";
import { WikiImage } from "@/components/shared/WikiImage";
import type { CursedPossession } from "@/data/items";
import { renderInline } from "@/lib/markdownLite";
import { ExternalLink } from "lucide-react";

interface CursedPossessionDetailProps {
  item: CursedPossession;
  onClose: () => void;
}

export function CursedPossessionDetail({ item, onClose }: CursedPossessionDetailProps) {
  return (
    <DetailModal
      title={item.name}
      onClose={onClose}
      headerExtra={
        <a
          href={item.wikiUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View on the official wiki"
          className="rounded-full p-1.5 text-muted transition hover:bg-surface-2 hover:text-foreground"
        >
          <ExternalLink className="size-4" />
        </a>
      }
    >
      <WikiImage src={item.image} alt={item.name} wikiUrl={item.wikiUrl} className="mb-1 h-40 w-full rounded-lg" />

      {item.sections.map((section, i) => (
        <DetailSection key={i} title={section.heading}>
          {section.body && <p className="text-sm text-foreground/90">{renderInline(section.body)}</p>}

          {section.bullets && (
            <ul className={`list-disc space-y-1.5 pl-4 text-sm text-foreground/90 ${section.body ? "mt-2" : ""}`}>
              {section.bullets.map((b, j) => (
                <li key={j}>{renderInline(b)}</li>
              ))}
            </ul>
          )}

          {section.table && (
            <div className={`overflow-x-auto ${section.body ? "mt-2" : ""}`}>
              <table className="w-full text-left text-xs">
                <thead className="uppercase tracking-wide text-muted">
                  <tr>
                    {section.table.headers.map((h, k) => (
                      <th key={k} className="py-1 pr-3 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {section.table.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c} className="py-1.5 pr-3 align-top text-foreground/90">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </DetailSection>
      ))}
    </DetailModal>
  );
}
