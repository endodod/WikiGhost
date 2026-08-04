import type { Evidence } from "@/lib/types";
import {
  Activity,
  Flashlight,
  CircleDot,
  Radio,
  PenLine,
  Snowflake,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

export interface EvidenceMeta {
  id: Evidence;
  label: string;
  short: string;
  icon: LucideIcon;
  className: string; // text/bg color pairing
}

export const EVIDENCE_META: Record<Evidence, EvidenceMeta> = {
  EMF5: {
    id: "EMF5",
    label: "EMF Level 5",
    short: "EMF5",
    icon: Activity,
    className: "text-amber-400 bg-amber-400/10 ring-amber-400/30",
  },
  UV: {
    id: "UV",
    label: "UV (Fingerprints)",
    short: "UV",
    icon: Flashlight,
    className: "text-violet-400 bg-violet-400/10 ring-violet-400/30",
  },
  GhostOrbs: {
    id: "GhostOrbs",
    label: "Ghost Orbs",
    short: "Orbs",
    icon: CircleDot,
    className: "text-sky-400 bg-sky-400/10 ring-sky-400/30",
  },
  SpiritBox: {
    id: "SpiritBox",
    label: "Spirit Box",
    short: "Spirit Box",
    icon: Radio,
    className: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/30",
  },
  GhostWriting: {
    id: "GhostWriting",
    label: "Ghost Writing",
    short: "Writing",
    icon: PenLine,
    className: "text-rose-400 bg-rose-400/10 ring-rose-400/30",
  },
  Freezing: {
    id: "Freezing",
    label: "Freezing Temps",
    short: "Freezing",
    icon: Snowflake,
    className: "text-cyan-400 bg-cyan-400/10 ring-cyan-400/30",
  },
  DOTS: {
    id: "DOTS",
    label: "D.O.T.S. Projector",
    short: "DOTS",
    icon: ScanLine,
    className: "text-fuchsia-400 bg-fuchsia-400/10 ring-fuchsia-400/30",
  },
};
