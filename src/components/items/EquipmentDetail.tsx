"use client";

import { DetailModal, DetailSection } from "@/components/shared/DetailModal";
import { WikiImage } from "@/components/shared/WikiImage";
import type { EquipmentItem } from "@/data/items";
import { renderInline } from "@/lib/markdownLite";
import { ExternalLink } from "lucide-react";

interface EquipmentDetailProps {
  item: EquipmentItem;
  onClose: () => void;
}

export function EquipmentDetail({ item, onClose }: EquipmentDetailProps) {
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
      <div className="mb-1 h-56 w-full rounded-lg bg-surface-2 p-4">
        <WikiImage
          src={item.image}
          alt={item.name}
          wikiUrl={item.wikiUrl}
          fit="contain"
          className="h-full w-full rounded-lg"
        />
      </div>

      {item.tiers && (
        <DetailSection title="Tiers">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="py-1 pr-3 font-semibold">Tier</th>
                  <th className="py-1 pr-3 font-semibold">Stats</th>
                  <th className="py-1 font-semibold">Unlock</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {item.tiers.map((t) => (
                  <tr key={t.tier}>
                    <td className="py-1.5 pr-3 align-top font-mono font-medium text-foreground">{t.tier}</td>
                    <td className="py-1.5 pr-3 align-top text-foreground/90">{t.stats}</td>
                    <td className="py-1.5 align-top text-muted">{t.unlock ?? "Not listed"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DetailSection>
      )}

      {item.note && (
        <DetailSection title="Note">
          <p className="text-sm text-foreground/90">{renderInline(item.note)}</p>
        </DetailSection>
      )}

      <DetailSection title="Best Pick">
        <p className="text-sm text-foreground/90">{renderInline(item.bestPick)}</p>
      </DetailSection>
    </DetailModal>
  );
}
