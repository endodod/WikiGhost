/** Types for "The Other Side" section — kept separate from lib/types.ts (Phasmophobia)
 * because the two games' evidence sets, hunt models, and item structures don't line up
 * (6 evidence types vs 7, heart-rate/BPM hunts vs sanity, named equipment models vs tiers). */

export type TosEvidence = "Audio" | "Radiation" | "EMF" | "Freezing" | "UV" | "Writing";

export const TOS_EVIDENCE_TYPES: TosEvidence[] = ["Audio", "Radiation", "EMF", "Freezing", "UV", "Writing"];

export type TosInteraction = "both" | "on-only" | "off-only" | "none";

export type TosLosRange = "Low" | "Medium" | "High" | "Very High";

export interface TosGhost {
  id: string;
  name: string;
  /** The 3 real evidence types on Novice/Intermediate. */
  evidence: TosEvidence[];
  /** Guaranteed-shown evidence type on difficulties that give at least 1 true evidence (Expert, Master, etc.), where documented. */
  forcedEvidence?: TosEvidence;
  tell: string;
  /** Every ghost that interacts with candles at all can only blow them out — no ghost lights one. */
  blowsOutCandles: boolean;
  lights: TosInteraction;
  radio: TosInteraction;
  /** Whether the ghost can trigger + turn off the FLX-POD. Ghosts that can't are documented as not interacting with it at all — there's no partial "interacts but can't turn off" state in current data. */
  flxPodTurnsOff: boolean;
  /** Base hunt speed, m/s. */
  speed: number;
  /** Speed while it has sustained line of sight on a player, m/s. */
  losSpeed: number;
  /** Qualitative range/proximity at which the line-of-sight speed boost kicks in. */
  losRange: TosLosRange;
  /** Hunt cooldown after a hunt ends, seconds. */
  cooldown: number;
  /** Holy Water Sprayer stun duration, seconds. */
  holyWaterStun: number;
  holyWaterNote?: string;
}

export function getTosGhostById(ghosts: TosGhost[], id: string): TosGhost | undefined {
  return ghosts.find((g) => g.id === id);
}
