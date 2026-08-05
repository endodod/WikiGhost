import type { WikiDoc } from "@/lib/wikiContent";

export const tosEvidenceWiki: WikiDoc = {
  title: "Evidence Wiki",
  summary:
    "What each evidence type is, how it's detected, and what counts as confirmed — not the elimination tool (that's Find My Ghost), just the mechanics themselves.",
  sections: [
    {
      heading: "How It Works",
      body: "Every ghost is assigned exactly **3 evidence types** from a pool of **6**: EMF, Freezing, Ultraviolet (UV), Writing, Audio, Radiation. Finding all 3 confirms the ghost type.",
      bullets: [
        "**Novice/Intermediate:** all 3 shown evidence types are real.",
        "**Expert:** 2 real + 1 false. False evidence appears as the strongest-looking reading first, then degrades over time — don't lock in on an early strong reading.",
        "**Master:** 1 real + 2 false, on top of removing Tarot revival entirely.",
        "**Custom \"Zero Evidence\" setting:** removes the normal safety net that guarantees every ghost keeps at least one evidence type — identification becomes 100% behavioural.",
      ],
    },
    {
      heading: "EMF",
      body: "Generated when the ghost interacts with objects. Detected via the EMF-V Generic ($34.99, budget) or the KII EMF Detector ($74.99, the only EMF model with audio feedback). Only **Level 5** (20+ mG) counts as confirmed evidence.",
      table: {
        headers: ["Level", "Reading"],
        rows: [
          ["1 — Background Noise", "0–5 mG"],
          ["2 — Minor Activity", "5–10 mG"],
          ["3 — Moderate Activity", "10–15 mG"],
          ["4 — Strong Activity", "15–20 mG"],
          ["5 — Evidence", "20+ mG"],
        ],
        highlightRows: [4],
      },
      warning:
        "An active FLX-POD nearby produces a false EMF 4 reading — discount EMF 4 near one. A genuine EMF 5 reading still overrides the false signal and counts normally.",
    },
    {
      heading: "Freezing",
      body: "The ghost's favourite room is the coldest room on the map. Detected via the DPT-1000X Thermometer ($34.99, slow to settle), GT-13X Laser Thermometer ($84.99, instant readings at range), or R2 Remote Temperature Sensor ($90.00, placeable, faster updates). **Any reading below 0°C/32°F counts as confirmed evidence** — this is the one exception to the \"only the top level counts\" rule that applies to EMF.",
      table: {
        headers: ["Level", "Reading"],
        rows: [
          ["1 — Cool (not evidence)", "0°C to 5°C / 32°F to 41°F"],
          ["2 — Cold", "−0.1°C to −7°C / 31.8°F to 19.4°F"],
          ["3 — Very Cold", "−7.1°C to −13.8°C / 19.2°F to 6.8°F"],
          ["4 — Frigid", "−13.9°C to −20.5°C / 6.9°F to −4.9°F"],
        ],
        highlightRows: [1, 2, 3],
      },
    },
    {
      heading: "Ultraviolet (UV)",
      body: "Fluorescent fingerprints/traces appear on touched surfaces. Detected via the UV Glowstick ($14.99, single-use) or the UV-13X LED Flashlight ($64.99, reusable, wider beam). Only the clearest reading counts as confirmed evidence.",
      table: {
        headers: ["Level", "Reading"],
        rows: [
          ["1 — Faint", "Barely visible traces"],
          ["2 — Clear", "Spray/puddle patterns"],
          ["3 — Distinct", "Handprints or full patterns"],
        ],
        highlightRows: [2],
        media: [
          { type: "image", src: "/images/tos/evidence/uv-1.webp" },
          { type: "image", src: "/images/tos/evidence/uv-2.webp" },
          { type: "image", src: "/images/tos/evidence/uv-3.webp" },
        ],
      },
    },
    {
      heading: "Writing",
      body: "Appears in a Blank Book ($49.99) or on a Drawing Easel ($209.99, larger surface area), placed in the ghost's active area. Only the clearest reading counts as confirmed evidence.",
      table: {
        headers: ["Level", "Reading"],
        rows: [
          ["1 — Scribbles", "Incomprehensible"],
          ["2 — Partial", "Partially legible"],
          ["3 — Clear", "Hostile messages"],
        ],
        highlightRows: [2],
        media: [
          { type: "image", src: "/images/tos/evidence/writing-1.webp" },
          { type: "image", src: "/images/tos/evidence/writing-2.webp" },
          { type: "image", src: "/images/tos/evidence/writing-3.webp" },
        ],
      },
    },
    {
      heading: "Audio",
      body: "Two distinct devices with different mechanics:",
      bullets: [
        "**SB7 Spirit Box** ($109.99) — radio-frequency sweeps, real-time back-and-forth responses.",
        "**Infrasound Receiver** ($349.99) — must be placed inside the favourite room specifically; records audio that can be replayed later.",
        "If both devices are active in the same room, the Spirit Box takes priority over the Infrasound Receiver.",
      ],
      table: {
        headers: ["Level", "Reading"],
        rows: [
          ["1 — Garbled", "Barely audible noise"],
          ["2 — Partial", "Partially intelligible phrases"],
          ["3 — Clear", "Full intelligible phrases"],
        ],
        highlightRows: [2],
        media: [
          { type: "audio", src: "/audio/tos/evidence/audio-1-garbled.mp3" },
          { type: "audio", src: "/audio/tos/evidence/audio-2-partial.mp3" },
          { type: "audio", src: "/audio/tos/evidence/audio-3-clear.mp3" },
        ],
      },
    },
    {
      heading: "Radiation",
      body: "Detected via the Analog Geiger Counter or SG-2000 Geiger Counter ($144.99), reading CPM (counts per minute). Only the top reading counts as confirmed evidence.",
      table: {
        headers: ["Level", "Reading"],
        rows: [
          ["1 — Low Radiation", "100–500 CPM"],
          ["2 — Moderate Radiation", "501–1000 CPM"],
          ["3 — High Radiation", "1001–2000 CPM"],
        ],
        highlightRows: [2],
      },
    },
    {
      heading: "Confirmation Cheat Sheet",
      table: {
        headers: ["Evidence", "Counts as confirmed when..."],
        rows: [
          ["EMF", "Reading hits Level 5 (20+ mG) specifically"],
          ["Freezing", "Reading is Level 2, 3, or 4 — any reading below 0°C/32°F"],
          ["UV", "Reading hits Level 3 (Distinct/handprints)"],
          ["Writing", "Reading hits Level 3 (Clear/hostile messages)"],
          ["Audio", "Reading hits Level 3 (Clear/full intelligible phrases)"],
          ["Radiation", "Reading hits Level 3 (1001–2000 CPM)"],
        ],
      },
    },
    {
      heading: "Cleanse-Mode Evidence",
      body: "Cleanse contracts require reading the intensity level of all 6 evidence types (not just presence/absence) and entering them into the Spectral Affixer to run a scan. On Expert/Master, every entered characteristic must be correct or the scan fails and immediately triggers a hunt — don't input all 6 types on high difficulties if you're not fully confident in each reading, since a single wrong one risks the fail state.",
    },
  ],
};
