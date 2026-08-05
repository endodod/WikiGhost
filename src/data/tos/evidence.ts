import type { TosEvidence } from "@/lib/tos/types";
import { Activity, Flashlight, PenLine, Radiation, Radio, Snowflake, type LucideIcon } from "lucide-react";

export interface TosEvidenceMeta {
  id: TosEvidence;
  label: string;
  short: string;
  icon: LucideIcon;
  className: string;
  /** Which equipment models can read this evidence, in id form (see data/tos/items.ts). */
  equipmentIds: string[];
}

export const TOS_EVIDENCE_META: Record<TosEvidence, TosEvidenceMeta> = {
  EMF: {
    id: "EMF",
    label: "EMF Level 5",
    short: "EMF",
    icon: Activity,
    className: "text-amber-400 bg-amber-400/10 ring-amber-400/30",
    equipmentIds: ["emf-v-generic", "kii-emf-detector"],
  },
  Freezing: {
    id: "Freezing",
    label: "Freezing Temps",
    short: "Freezing",
    icon: Snowflake,
    className: "text-cyan-400 bg-cyan-400/10 ring-cyan-400/30",
    equipmentIds: ["dpt-1000x-thermometer", "gt-13x-laser-thermometer", "r2-remote-temp-sensor"],
  },
  Radiation: {
    id: "Radiation",
    label: "Radiation",
    short: "Radiation",
    icon: Radiation,
    className: "text-lime-400 bg-lime-400/10 ring-lime-400/30",
    equipmentIds: ["analog-geiger-counter", "sg-2000-geiger-counter"],
  },
  UV: {
    id: "UV",
    label: "UV (Fingerprints)",
    short: "UV",
    icon: Flashlight,
    className: "text-violet-400 bg-violet-400/10 ring-violet-400/30",
    equipmentIds: ["uv-glowstick", "uv-13x-led-flashlight"],
  },
  Writing: {
    id: "Writing",
    label: "Ghost Writing",
    short: "Writing",
    icon: PenLine,
    className: "text-rose-400 bg-rose-400/10 ring-rose-400/30",
    equipmentIds: ["blank-book", "drawing-easel"],
  },
  Audio: {
    id: "Audio",
    label: "Audio Response",
    short: "Audio",
    icon: Radio,
    className: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
    equipmentIds: ["sb7-spirit-box", "infrasound-receiver"],
  },
};
