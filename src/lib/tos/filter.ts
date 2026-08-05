import type { TosGhost, TosInteraction } from "@/lib/tos/types";
import type { TosEvidence } from "@/lib/tos/types";

export interface TosFilterState {
  selected: TosEvidence[];
  realCount: number;
  fakeCount: number;
  candles: boolean | null;
  flxPod: boolean | null;
  lights: TosInteraction | null;
  radio: TosInteraction | null;
  speed: number | null;
  losSpeed: number | null;
  holyWater: number | null;
  cooldown: number | null;
}

export interface TosGhostVerdict {
  ghost: TosGhost;
  eliminated: boolean;
  reasons: string[];
}

const INTERACTION_LABEL: Record<TosInteraction, string> = {
  both: "on & off",
  "on-only": "on only",
  "off-only": "off only",
  none: "never",
};

export function evaluateTosGhost(ghost: TosGhost, state: TosFilterState): TosGhostVerdict {
  const reasons: string[] = [];
  const totalShown = state.realCount + state.fakeCount;
  const needsFullSet = state.fakeCount > 0;

  if (state.selected.length > 0) {
    if (!needsFullSet) {
      for (const ev of state.selected) {
        if (!ghost.evidence.includes(ev)) {
          reasons.push(`Doesn't have ${ev} evidence`);
        }
      }
    } else if (state.selected.length >= totalShown) {
      const matchCount = state.selected.filter((ev) => ghost.evidence.includes(ev)).length;
      if (matchCount < state.realCount) {
        reasons.push(`Only shares ${matchCount} of the ${state.realCount} required real evidence types`);
      }
    }
  }

  if (state.candles !== null && ghost.blowsOutCandles !== state.candles) {
    reasons.push(ghost.blowsOutCandles ? "Can blow out candles" : "Never blows out candles");
  }

  if (state.flxPod !== null && ghost.flxPodTurnsOff !== state.flxPod) {
    reasons.push(ghost.flxPodTurnsOff ? "Can trigger + turn off the FLX-POD" : "Never interacts with the FLX-POD");
  }

  if (state.lights !== null && ghost.lights !== state.lights) {
    reasons.push(`Lights interaction is ${INTERACTION_LABEL[ghost.lights]}, not ${INTERACTION_LABEL[state.lights]}`);
  }

  if (state.radio !== null && ghost.radio !== state.radio) {
    reasons.push(`Radio interaction is ${INTERACTION_LABEL[ghost.radio]}, not ${INTERACTION_LABEL[state.radio]}`);
  }

  if (state.speed !== null && ghost.speed !== state.speed) {
    reasons.push(`Base speed is ${ghost.speed.toFixed(2)} m/s, not ${state.speed.toFixed(2)} m/s`);
  }

  if (state.losSpeed !== null && ghost.losSpeed !== state.losSpeed) {
    reasons.push(`Line-of-sight speed is ${ghost.losSpeed.toFixed(2)} m/s, not ${state.losSpeed.toFixed(2)} m/s`);
  }

  if (state.holyWater !== null && ghost.holyWaterStun !== state.holyWater) {
    reasons.push(`Holy Water stun is ${ghost.holyWaterStun}s, not ${state.holyWater}s`);
  }

  if (state.cooldown !== null && ghost.cooldown !== state.cooldown) {
    reasons.push(`Hunt cooldown is ${ghost.cooldown}s, not ${state.cooldown}s`);
  }

  return { ghost, eliminated: reasons.length > 0, reasons };
}

export function evaluateAllTosGhosts(ghosts: TosGhost[], state: TosFilterState): TosGhostVerdict[] {
  return ghosts.map((g) => evaluateTosGhost(g, state));
}
