"use client";

import { TosEvidenceBadge } from "@/components/tos/TosEvidenceBadge";
import { DetailModal, DetailSection } from "@/components/shared/DetailModal";
import { SpeedClipButton } from "@/components/shared/SpeedClipButton";
import type { TosGhost, TosInteraction } from "@/lib/tos/types";
import { Droplets } from "lucide-react";

interface GhostDetailProps {
  ghost: TosGhost;
  onClose: () => void;
}

const INTERACTION_LABEL: Record<TosInteraction, string> = {
  both: "Can turn on and off",
  "on-only": "Turns on only",
  "off-only": "Turns off only",
  none: "Never interacts",
};

export function GhostDetail({ ghost, onClose }: GhostDetailProps) {
  return (
    <DetailModal title={ghost.name} onClose={onClose}>
      <DetailSection title="Evidence (Novice / Intermediate)">
        <div className="flex flex-wrap gap-2">
          {ghost.evidence.map((ev) => (
            <TosEvidenceBadge key={ev} evidence={ev} />
          ))}
        </div>
        {ghost.forcedEvidence && (
          <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <span>Guaranteed</span>
            <TosEvidenceBadge evidence={ghost.forcedEvidence} size="sm" />
            <span>on any difficulty that gives at least 1 true evidence (Expert, Master, etc.)</span>
          </div>
        )}
      </DetailSection>

      <DetailSection title="Signature Tell">
        <p className="text-sm text-foreground/90">{ghost.tell}</p>
      </DetailSection>

      <DetailSection title="Hunt Stats">
        <ul className="space-y-1 text-sm text-foreground/90">
          <li className="flex items-center justify-between gap-3">
            <span className="text-muted">Base speed</span>
            <span className="flex shrink-0 items-center gap-1">
              <span className="font-mono font-medium">{ghost.speed.toFixed(2)} m/s</span>
              <SpeedClipButton speed={ghost.speed} />
            </span>
          </li>
          <li className="flex items-center justify-between gap-3">
            <span className="text-muted">Line-of-sight speed</span>
            <span className="flex shrink-0 items-center gap-1">
              <span className="font-mono font-medium">{ghost.losSpeed.toFixed(2)} m/s</span>
              <SpeedClipButton speed={ghost.losSpeed} />
            </span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="text-muted">Line-of-sight range</span>
            <span className="shrink-0 font-medium">{ghost.losRange}</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="text-muted">Hunt cooldown</span>
            <span className="shrink-0 font-mono font-medium">{ghost.cooldown}s</span>
          </li>
        </ul>
      </DetailSection>

      <DetailSection title="Environmental Interactions">
        <ul className="space-y-1 text-sm text-foreground/90">
          <li className="flex justify-between gap-3">
            <span className="text-muted">Candles</span>
            <span className="shrink-0 font-medium">{ghost.blowsOutCandles ? "Can blow out" : "Never touches"}</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="text-muted">Lights</span>
            <span className="shrink-0 font-medium">{INTERACTION_LABEL[ghost.lights]}</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="text-muted">Radio</span>
            <span className="shrink-0 font-medium">{INTERACTION_LABEL[ghost.radio]}</span>
          </li>
          <li className="flex justify-between gap-3">
            <span className="text-muted">FLX-POD</span>
            <span className="shrink-0 font-medium">
              {ghost.flxPodTurnsOff ? "Can trigger + turn off" : "Never interacts"}
            </span>
          </li>
        </ul>
      </DetailSection>

      <DetailSection title="Holy Water Sprayer">
        <div className="flex items-center gap-2 text-sm text-foreground/90">
          <Droplets className="size-4 text-sky-400" />
          <span className="font-medium">{ghost.holyWaterStun}s stun</span>
        </div>
        {ghost.holyWaterNote && <p className="mt-1.5 text-xs text-muted">{ghost.holyWaterNote}</p>}
      </DetailSection>
    </DetailModal>
  );
}
