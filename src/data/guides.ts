export interface GuideItem {
  title: string;
  /** May contain **bold** spans, rendered inline. */
  body: string;
  bullets?: string[];
}

export interface GuideStage {
  heading: string;
  intro?: string;
  items: GuideItem[];
}

export interface GuideClosing {
  heading: string;
  intro?: string;
  bullets: string[];
  outro?: string;
}

export interface GuideSources {
  heading: string;
  bullets: string[];
}

export interface Guide {
  id: string;
  title: string;
  summary: string;
  intro: string[];
  stages: GuideStage[];
  closing: GuideClosing;
  sources?: GuideSources;
}

export const guides: Guide[] = [
  {
    id: "zero-evidence-walkthrough",
    title: "Zero-Evidence Investigation Walkthrough",
    summary:
      "Zero-Evidence broken down step by step — the elimination order one experienced investigator uses when there's no evidence to lean on.",
    intro: [
      "This is the elimination *order* one experienced investigator uses — not the only valid order, but a solid default when you're not on a low-evidence difficulty and just need to read a single hunt for maximum information.",
    ],
    stages: [
      {
        heading: "Stage 1 — Read the first hunt",
        intro:
          "During the very first hunt, you're passively collecting four signals at once: **speed**, **blink pattern**, **throw behavior**, and **line-of-sight acceleration**. A single hunt can eliminate close to half the roster if you know what to watch for.",
        items: [
          {
            title: "1. Base speed",
            body: "If the ghost is moving at the standard 1.7 m/s the whole time (not visibly slow, not visibly fast), you can immediately rule out every ghost with a **non-standard base or conditional speed**:",
            bullets: [
              "**Deogen** — inverts entirely: ~3.0 m/s far away, slowing to ~0.4 m/s up close. Constant \"normal\" speed doesn't match either extreme.",
              "**Moroi** — 1.5 m/s at high sanity, up to 2.25 m/s (and up to ~3.71 m/s combined with LOS acceleration) as sanity drops toward 0%. At anything other than very specific sanity, its speed reads as \"off\" from standard.",
              "**Raiju** — jumps to 2.5 m/s only near *active* electronics (including gear in your own hands, like a flashlight). If it doesn't speed up while you're holding on active flashlight nearby, that's a direct test against Raiju.",
              "**Revenant** — a stark binary: 1.0 m/s with no line of sight/detection, 3.0 m/s once it detects you or your electronics. Neither of those is \"normal,\" so a steady 1.7 m/s rules it out immediately.",
            ],
          },
          {
            title: "2. The Jinn test (distance + LOS)",
            body: "Jinn only speeds up to 2.5 m/s when it has line of sight on a player **more than 3 meters away** *and* the breaker is on. If you were >3m away, in its sight, breaker on, and it didn't accelerate — not a Jinn.",
          },
          {
            title: "3. Salt",
            body: "Wraith is the only ghost in the game that **never disturbs salt** — it walks through without leaving a footprint or getting slowed. If the ghost stepped in salt and disturbed it, that's a clean elimination of Wraith.",
          },
          {
            title: "4. The standard line-of-sight acceleration check",
            body: "This is the detail worth knowing cold: **most ghosts** gradually accelerate while holding continuous line of sight on a player, reaching roughly 1.65× base speed (~2.805 m/s) after about 13 seconds. This is a *universal* mechanic layered under everything else — but there are exactly **three confirmed exceptions that never get this acceleration**: **Hantu**, **Thaye**, and **Deogen** (Deogen instead slows down as it closes in). If you clocked a standard LOS speed-up happening, you've ruled out Hantu specifically (Thaye and Deogen are usually already excluded by their own distinctive speed signatures above).",
          },
          {
            title: "5. Blink pattern",
            body: "Ghosts flicker in and out of visibility during hunts at a fairly consistent rate. Two ghosts break from that baseline in opposite directions:",
            bullets: [
              "**Phantom** blinks slower, with longer gaps of invisibility.",
              "**Oni** blinks faster and more frequently.",
            ],
          },
          {
            title: "6. Model shapeshifting",
            body: "**Obake** is the only ghost that swaps its model mid-hunt, on a fixed schedule of specific blink counts. If the model stayed the same the whole hunt (and the hunt ran long enough to plausibly hit those trigger points), that's an elimination.",
          },
          {
            title: "7. Throw force",
            body: "**Poltergeist** throws items far more often (roughly every 0.5 seconds when objects are in range) and with noticeably more force than any other ghost. Ordinary, infrequent object interaction rules it out.",
          },
        ],
      },
      {
        heading: "Stage 2 — Active room tests",
        intro: "With the field narrowed, head to the ghost's favorite room and run a couple of setups at once.",
        items: [
          {
            title: "8. Crucifix + firelight test (Onryo vs. Shade)",
            body: "Place a **crucifix** and a **lit firelight** in the same room. **Onryo** is built around extinguishing flames as part of its hunt-trigger logic — if a nearby lit flame is within range when it would otherwise start a hunt, it prioritizes blowing that flame out *instead of* triggering the hunt. So: if the crucifix burns (meaning a hunt was attempted and blocked) *while the firelight is still lit*, that's inconsistent with Onryo's known behavior — rule it out. While you're waiting in the room, if the ghost **hunts while you're physically inside its favorite room**, that rules out **Shade** — it's specifically restricted from hunting, doing events, or most EMF-tier interactions while a player shares its room. *Caveat: watch room boundaries carefully on small maps — a Shade can step just outside its room to interact and create a false positive, so don't rule it out from a borderline case.*",
          },
          {
            title: "9. Orb check",
            body: "While in the room, check for ghost orbs. **The Mimic's** ability spawns an orb in its favorite room as an unofficial \"extra\" piece of evidence — one that shows up even outside its official evidence set, and even on zero/low-evidence difficulties, since it isn't officially tied to the evidence system. Seeing an orb here is a solid Mimic tell.",
          },
        ],
      },
      {
        heading: "Stage 3 — Sound and light-based tests",
        items: [
          {
            title: "10. Myling",
            body: "Myling's hunt-audio range is reduced — footsteps and vocals cut off around 12m instead of the normal ~20m. If you can hear it clearly from further away than that, it's not a Myling.",
          },
          {
            title: "11. Yokai",
            body: "Yokai has a drastically reduced detection range (roughly 2.5m for electronics vs. the normal 7.5m/9m). Walk away, then turn on an electronic item (like a flashlight) from well outside that range. If it reacts and comes straight back, that's inconsistent with Yokai's short detection radius — rule it out.",
          },
          {
            title: "12. Smudge test (Demon vs. Spirit)",
            body: "Smudge the ghost and time the next hunt:",
            bullets: [
              "**Demon** needs only ~60 seconds after a smudge before it can hunt again (vs. the normal 90s).",
              "**Spirit** is the opposite extreme — it needs a full 180 seconds (3 minutes) before it can hunt again.",
              "A hunt landing well outside either window rules out both.",
            ],
          },
        ],
      },
      {
        heading: "Stage 4 — The stragglers",
        items: [
          {
            title: "13. Twins",
            body: "Twins randomly roll one of two fixed hunt speeds each time (slower ~1.5 m/s or faster ~1.9 m/s) — the point is that repeated hunts should show visible *speed variance* between them. If every hunt has come in at the same consistent speed across multiple hunts, that's a mark against Twins.",
          },
          {
            title: "14. Yurei",
            body: "Yurei must fully open or fully close any door it interacts with — leaving a door at any half-open state is impossible for it. If the ghost's room has no doors to observe, this test simply can't run, and Yurei stays on the table until you can test it another way (e.g. tracking with motion sensors whether it gets trapped in-room for ~90 seconds after a smudge, another documented Yurei trait).",
          },
          {
            title: "15. Banshee",
            body: "By this stage, you're watching whether the ghost seems to be actively roaming toward you specifically, the way a Banshee stalks its one chosen target. If you're unsure, listen for the distinct wail on a parabolic mic or sound recorder — it has roughly a 1-in-3 chance of producing it on a given response. After several non-scream responses in a row, the odds swing hard against Banshee, though — being probability-based — this isn't an absolute proof the way a salt-and-Wraith test is.",
          },
        ],
      },
    ],
    closing: {
      heading: "The Unholy Trinity: Mare, Demon, Goryo",
      intro:
        "If you've run this whole flow and you're still stuck, there's a good chance you've landed on one of the ghosts the wider Phasmophobia community broadly agrees are the hardest to pin down with zero evidence:",
      bullets: [
        "**Mare** — its only real tell (preferring darkness, killing lights right after they're turned on, never turning lights *on*) is something any ghost can coincidentally do; you need to see the pattern repeat before it means anything.",
        "**Demon** — without incense/smudges left to test its short hunt-cooldown, and without a Ouija board or crucifix interaction to watch, it has very little that separates it from a \"generic\" fast, aggressive ghost.",
        "**Goryo** — its defining trait (never changing its favorite room) is a non-event you can only confirm by absence over time; it gives you nothing active to test for.",
      ],
      outro:
        "Community discussion frequently lists Yurei, Spirit, and Shade alongside this group too — but by this point in the flow those three have already been handled by earlier tests (the door test, the smudge-cooldown test, and the same-room-hunt test respectively). What's left standing after all of that really is close to a coin flip. At that point: pick one, and treat it as an educated guess rather than a certainty.",
    },
  },
];

export function getGuideById(id: string): Guide | undefined {
  return guides.find((g) => g.id === id);
}
