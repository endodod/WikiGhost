"use client";

import { DetailModal, DetailSection } from "@/components/shared/DetailModal";
import { EvidenceBadge } from "@/components/shared/EvidenceBadge";
import { SpeedClipButton } from "@/components/shared/SpeedClipButton";
import type { Ghost } from "@/lib/types";
import { BookOpen } from "lucide-react";

interface GhostDetailProps {
  ghost: Ghost;
  onClose: () => void;
  /** "compact" shows only evidence/hunt sanity/hunt speed plus the top 3 identifiers — used by Find My Ghost. */
  variant?: "full" | "compact";
  /** Compact-only: jumps to this ghost's full entry in the Ghost Wiki tab. */
  onViewInWiki?: () => void;
}

export function GhostDetail({ ghost, onClose, variant = "full", onViewInWiki }: GhostDetailProps) {
  const compact = variant === "compact";

  const behaviorMeta = [
    ghost.genderRestriction === "female" ? "Always a female ghost model/name." : null,
    ghost.smudgeBehavior,
    ghost.reHuntCooldown && ghost.reHuntCooldown !== "90s (default)" ? ghost.reHuntCooldown : null,
  ].filter((m): m is string => Boolean(m));

  return (
    <DetailModal
      title={ghost.name}
      onClose={onClose}
      headerExtra={
        compact && onViewInWiki ? (
          <button
            onClick={onViewInWiki}
            title="View this ghost's full entry in the Ghost Wiki"
            className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium text-muted transition hover:bg-surface-2 hover:text-foreground"
          >
            <BookOpen className="size-3.5" />
            Ghost Wiki
          </button>
        ) : undefined
      }
    >
      <DetailSection title="Evidence">
        <div className="flex flex-wrap gap-2">
          {ghost.evidences.map((ev) => (
            <EvidenceBadge key={ev} evidence={ev} />
          ))}
        </div>
      </DetailSection>

      <DetailSection title="Hunt Sanity Conditions">
        <ul className="space-y-1 text-sm text-foreground/90">
          {ghost.hunt.sanityThresholds.map((t, i) => (
            <li key={i} className="flex justify-between gap-3">
              <span className="text-muted">{t.condition}</span>
              <span className="shrink-0 font-mono font-medium">&le;{t.value}%</span>
            </li>
          ))}
        </ul>
      </DetailSection>

      <DetailSection title="Hunt Speed Conditions">
        <ul className="space-y-1 text-sm text-foreground/90">
          {ghost.hunt.speeds.map((s, i) => (
            <li key={i} className="flex items-center justify-between gap-3">
              <span className="text-muted">{s.condition}</span>
              <span className="flex shrink-0 items-center gap-1">
                <span className="font-mono font-medium">{s.value} m/s</span>
                <SpeedClipButton speed={s.value} />
              </span>
            </li>
          ))}
        </ul>
      </DetailSection>

      {compact ? (
        <DetailSection title="Top Ways to Identify">
          <ol className="list-decimal space-y-1.5 pl-4 text-sm text-foreground/90">
            {ghost.topIdentifiers.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </DetailSection>
      ) : (
        <>
          <DetailSection title="Behavior">
            {behaviorMeta.length > 0 && (
              <ul className="mb-2 space-y-1 text-xs text-muted">
                {behaviorMeta.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            )}
            {ghost.abilities.length > 0 ? (
              <ul className="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
                {ghost.abilities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted">No unique abilities beyond standard hunt behavior.</p>
            )}
          </DetailSection>

          <DetailSection title="Tells">
            <ul className="list-disc space-y-1.5 pl-4 text-sm text-foreground/90">
              {ghost.noEvidenceTells.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </DetailSection>

          {ghost.guaranteedEvidenceOnHighDifficulty && (
            <DetailSection title="High-Difficulty Forced Evidence">
              <div className="flex items-center gap-2 text-sm text-foreground/90">
                <EvidenceBadge evidence={ghost.guaranteedEvidenceOnHighDifficulty} size="sm" />
                <span>always shown on Nightmare/Insanity</span>
              </div>
            </DetailSection>
          )}
        </>
      )}
    </DetailModal>
  );
}
