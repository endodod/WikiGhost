export interface TosGuideSection {
  heading: string;
  /** May contain **bold** spans, rendered inline. */
  body?: string;
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  /** Renders as a flagged callout instead of plain body text — for conflicts/gaps worth calling out. */
  warning?: string;
}

export interface TosGuide {
  id: string;
  title: string;
  summary: string;
  sections: TosGuideSection[];
}

export const tosGuides: TosGuide[] = [
  {
    id: "hunt-mechanics",
    title: "Hunt Mechanics (Heart Rate System)",
    summary:
      "The v0.9.8.0 rework replaced the old sanity model with a 60-160 BPM heart-rate range split into four named tiers.",
    sections: [
      {
        heading: "BPM Tiers",
        body: "The **team's average heart rate** (players actually inside the location — anyone outside with a low heart rate doesn't pull the average down) determines who can hunt and how likely a hunt is:",
        table: {
          headers: ["Tier", "Anxiety %", "BPM Range", "Who Can Hunt", "Hunt Chance"],
          rows: [
            ["Normal", "0–17%", "60–76", "Nobody", "0%"],
            ["Anxious", "17–40%", "77–99", "Demon only", "33%"],
            ["Panicked", "40–70%", "100–129", "All ghosts", "33–50%"],
            ["Distressed", "70–100%", "130–160", "All ghosts", "50–66%"],
          ],
        },
      },
      {
        heading: "Hunt Thresholds",
        bullets: [
          "**Hunt threshold for every ghost except Demon is 100 BPM** — the Panicked tier onset.",
          "**Demon's threshold is 77 BPM** — the Anxious tier onset. This is the mechanical reason it can \"hunt the moment you walk in.\"",
          "**Strigoi** sits at the standard 100 BPM threshold, but has a special trait that can spike heart rate and trigger earlier-than-normal hunts near it.",
        ],
      },
      {
        heading: "Hunt Sequence",
        body: "Front door/gate slams shut → a brief window opens before the ghost can kill (find a closet) → lights flicker and whispering starts → the ghost roams. **Hearing a heartbeat during a hunt means the ghost currently sees you** — run and break line of sight immediately.",
      },
      {
        heading: "Cooldowns",
        body: "Hunt cooldown after a hunt ends is 40s (short), 60s (normal), or 90s (long), and varies by ghost. Exact per-ghost values below are pulled from the live ghost database behind the community \"Unofficial TOS Cheat Sheet\" (tybayn.github.io/tos-cheat-sheet, backed by zero-network.net):",
        table: {
          headers: ["Cooldown", "Ghosts"],
          rows: [
            ["40s (short)", "Demon, Shura, Wewe Gombel"],
            ["60s (standard)", "All other ghosts except Bhoot and Skia"],
            ["90s (long)", "Bhoot, Skia"],
          ],
        },
      },
      {
        heading: "Favourite Room Relocation",
        body: "On Intermediate+, a ghost can relocate its favourite room mid-investigation (low chance on Intermediate, medium on Expert, high on Master). The old room doesn't instantly reset to ambient temperature — it warms up slowly over several minutes, so re-check a cold reading rather than trusting one early result.",
      },
      {
        heading: "Death & Revival",
        body: "One Tarot-card revival chance exists; a second death is permanent. **Master difficulty removes Tarot revival entirely.**",
      },
      {
        heading: "Stamina",
        body: "Full stamina gives roughly 11 sprint steps. Don't burn it all at once — sprinting 10 steps, pausing 3-4s, then sprinting again regenerates faster than running it dry.",
      },
      {
        heading: "Hiding",
        body: "Ghosts can detect electronics and will check enclosed hiding spots if they see you entering them. Your phone (including its flashlight) stays usable through a hunt — drop or turn off any other electronics you're carrying.",
      },
    ],
  },
  {
    id: "identify-contracts",
    title: "Identify Contracts",
    summary: "Find the ghost type via evidence readings and behaviour, complete objectives, survive, and extract.",
    sections: [
      {
        heading: "Goal",
        body: "Find the ghost type via 3 evidence readings (or behaviour), complete objectives, survive, and extract via the green box near the vehicle.",
      },
      {
        heading: "Step by Step",
        bullets: [
          "HQ laptop → Shop → \"Spectral Tech\" to buy gear, or take the free Loaner Package.",
          "Select map + confirm contract type (Identify) + difficulty.",
          "Grab gear from the Equipment Stash (orange box near the vehicle) — 4 items + 1 voluminous item per trip.",
          "Explore the **whole location, not just the favourite room** — the ghost can leave evidence anywhere.",
          "Mark confirmed evidence on the Identifier app.",
          "All players lock in their guess, then extract via the green box.",
        ],
      },
      {
        heading: "Difficulty Tiers",
        body: "Every ghost has exactly 3 real evidence types on Novice/Intermediate — no false readings. Higher difficulties swap in fake evidence that reads as the strongest signal first, then degrades, so **don't lock in on a single first-look strong reading**:",
        table: {
          headers: ["Difficulty", "Real Evidence", "False Evidence", "Tarot Revival"],
          rows: [
            ["Novice / Intermediate", "3", "0", "Yes"],
            ["Expert", "2", "1", "Yes"],
            ["Master", "1", "2", "No"],
          ],
        },
      },
      {
        heading: "Custom Difficulty & Zero Evidence",
        body: "The Custom Difficulty System allows tuning ghost behaviour, hunt settings, evidence availability, player limits, and rewards, with up to 13 saveable presets. **Zero Evidence** configurations specifically remove the normal \"every ghost keeps one guaranteed evidence type\" safety net — treat zero-evidence contracts as pure behavioural IDs.",
      },
    ],
  },
  {
    id: "cleanse-contracts",
    title: "Cleanse Contracts",
    summary:
      "Full spectral scan of all 6 evidence types' intensity levels, then find and remove every Ethereal Artifact to banish the ghost.",
    sections: [
      {
        heading: "Spectral Affixer",
        body: "Carry it with two hands and place it (F key) in the favourite room — confirm the room first via a Sanctified Cross flip, or Infrasound Receiver audio. It has a battery that drains per scan attempt; recharge at the vehicle when it's too low. Console commands:",
        table: {
          headers: ["Command", "Effect"],
          rows: [
            ["ADD <evidence> <level>", "e.g. ADD EMF 3 — also used to correct a level already entered"],
            ["REMOVE <evidence>", "No level needed"],
            ["INFO <evidence>", "No level needed"],
            ["SCAN", "Begins the scan"],
            ["HELP", "Usage info"],
          ],
        },
      },
      {
        heading: "Scan Status Colors",
        bullets: [
          "**Blue (stationary)** — idle",
          "**Blue (rotating)** — scanning",
          "**Yellow** — a team member has left the 16ft/5m proximity range; check your positioning",
          "**Red** — failed scan, and it **immediately starts a hunt**",
          "**Green** — success",
        ],
      },
      {
        heading: "How Many Characteristics to Enter",
        body: "On Novice/Intermediate, entering more evidence than the minimum is forgiving — the scan can still succeed even with some wrong inputs, as long as the minimum correct characteristics are met. On **Expert/Master, every inputted characteristic must be correct or the scan fails** — don't input all 6 on these difficulties, since it only raises the odds one is wrong and triggers a hunt. A separate community source (theotherguide.co.uk) puts a rough floor on how many characteristics you need entered at minimum before attempting a scan:",
        table: {
          headers: ["Difficulty", "Evidence Characteristics to Enter"],
          rows: [
            ["Novice", "2"],
            ["Intermediate", "3"],
            ["Expert", "4"],
            ["Master", "5"],
          ],
        },
      },
      {
        heading: "Ethereal Artifact Locator (\"Buzz-Stick\")",
        body: "Used after a successful scan — glows brighter near an artifact and flashes when very close. It can detect artifacts through walls.",
      },
      {
        heading: "Artifact Counts by Difficulty",
        body: "This is a different number from the scan characteristics above — it's how many Ethereal Artifacts you need to physically find afterward:",
        table: {
          headers: ["Difficulty", "Artifacts to Find"],
          rows: [
            ["Novice", "2"],
            ["Intermediate", "3"],
            ["Expert", "6"],
            ["Master", "10"],
          ],
        },
      },
      {
        heading: "Map-Specific Artifact Pairs",
        body: "Artifacts come in map-themed pairs — see each map's entry on the Map Wiki for the pair confirmed for that location (e.g. Ravenwood's are Venetian masks and juggling balls, tying back to its birthday-party lore).",
      },
      {
        heading: "Completion",
        body: "Find every artifact to fully cleanse the location, or take the Optional Exit after a successful scan for a partial reward instead.",
      },
    ],
  },
  {
    id: "holy-water-sprayer",
    title: "Holy Water Sprayer",
    summary:
      "Stun duration and the delayed-hunt mechanic on specific ghosts — reconciled from three previously conflicting community sources.",
    sections: [
      {
        heading: "Resolved",
        body: "Earlier drafts of this wiki flagged three community sources that disagreed on how Holy Water behaves. theotherguide.co.uk's Hunt Mechanics page and the live ghost database behind the community \"Unofficial TOS Cheat Sheet\" (tybayn.github.io/tos-cheat-sheet, backed by zero-network.net) agree and reconcile all three into one consistent picture: **the stun-duration numbers and the delayed-hunt mechanic are two separate, simultaneous effects, not competing theories.**",
      },
      {
        heading: "Stun Duration",
        body: "Spraying a hunting ghost disorients it, breaking line of sight. Exact per-ghost duration is also filterable on the Find My Ghost tab:",
        table: {
          headers: ["Ghost", "Stun Duration"],
          rows: [
            ["Demon, Wewe Gombel, Wisp, Wraith", "5 seconds"],
            ["All other ghosts (14 of 18)", "3 seconds"],
          ],
        },
      },
      {
        heading: "Delayed Forced Hunt",
        body: "On top of the stun, three specific ghosts schedule a delayed forced hunt once the stun effect ends — don't assume you're safe just because the disorientation wore off. Notably, this is **not** the same set of ghosts as the 5s-stun group above: Wewe Gombel and Wraith get the longer 5s stun but no documented delayed-hunt quirk, while Tariaksuq gets the delayed hunt despite only a standard 3s stun.",
        bullets: [
          "**Demon** — forces a hunt exactly 120 seconds after the stun ends.",
          "**Wisp** — forces a hunt exactly 120 seconds after the stun ends.",
          "**Tariaksuq** — forces a hunt exactly 90 seconds after the stun ends.",
        ],
      },
      {
        heading: "Practical Takeaway",
        body: "The bottle holds **2 uses**. Spraying any of Demon, Wewe Gombel, Wisp, or Wraith buys the longest immediate window (5s) to break line of sight and hide — but if the ghost is Demon, Wisp, or Tariaksuq, treat that safety as temporary and be ready for another hunt shortly after.",
      },
      {
        heading: "Sources",
        body: "Previously conflicting accounts, now reconciled by the above: the Steam \"Complete Guide\" (binary 5s/3s split) supplied the stun-duration numbers; p8riot's P.M.S. Tracker (fandom-sourced) supplied the original delayed-forced-hunt lead for Demon/Wisp/Tariaksuq, and the live zero-network.net ghost database independently confirms the exact same three ghosts with precise second counts. squidzillanft's three-tier cheat sheet (3s/5s/8s) does not match either current source and is likely describing an older patch — treat it as outdated rather than a live alternative.",
      },
    ],
  },
];

export function getTosGuideById(id: string): TosGuide | undefined {
  return tosGuides.find((g) => g.id === id);
}
