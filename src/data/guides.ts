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
    intro: [],
    stages: [
      {
        heading: "Stage 1 — Read the first hunt",
        intro:
          "During the very first hunt, you're passively collecting several signals at once: **speed**, **blink pattern**, **throw behavior**, and **line-of-sight acceleration**. A single hunt can eliminate close to half the roster if you know what to watch for.",
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
            body: "Wraith is the only ghost in the game that **never disturbs salt** under any circumstance — it walks through without leaving a footprint or getting slowed. If the ghost stepped in salt and disturbed it at least once, that's a clean elimination of Wraith. **Gallu** is a different kind of salt tell: its behavior flips with its state — it won't disturb salt while **Enraged** (right after salt/incense/crucifix is used on it) but disturbs it normally once **Weakened** (right after a hunt ends). Salt disturbance that's inconsistent across multiple triggers, rather than a hard never/always, points at Gallu instead of a straight Wraith read.",
          },
          {
            title: "4. The standard line-of-sight acceleration check",
            body: "This is the detail worth knowing cold: **most ghosts** gradually accelerate while holding continuous line of sight on a player, reaching roughly 1.65× base speed (~2.805 m/s) after about 13 seconds. This is a *universal* mechanic layered under everything else — but there are exactly **four confirmed exceptions that never get this acceleration**: **Hantu**, **Thaye**, **Deogen** (which instead slows down as it closes in), and **Deildegast** (whose hunt speed is instead set entirely by how many unique objects have been interacted with since its last hunt — 3.0 m/s if nothing's been touched, grinding down to a floor of ~0.4 m/s after 26-30 interactions). **Aswang** is a fifth wrinkle worth watching separately: it *does* get the acceleration, just abnormally fast, off a lower starting speed — reaching full sprint in under 9 seconds of sustained line of sight instead of the usual ~13. If you clocked a standard ~13-second ramp-up, you've ruled out all four non-accelerators plus Aswang's fast-ramp variant at once — Deogen is usually already excluded by its own distinctive speed signature above, so the useful new information here is against Hantu, Thaye, Deildegast, and Aswang.",
          },
          {
            title: "4b. Hantu vs. Thaye vs. Deildegast",
            body: "If no LOS speed-up showed up, Hantu, Thaye, and Deildegast are all still live and need separating from each other: watch how speed trends across the investigation rather than within a single hunt. **Thaye** ages with the contract — it gets progressively slower the longer the investigation runs, so a hunt late in the round should be noticeably sluggish next to one from early on, and that slowdown never resets. **Hantu**, instead, tracks room temperature — faster in a cold room, closer to normal in a warm one — regardless of how much time has passed or how many hunts have happened. **Deildegast** resets to a fast 3.0 m/s at the start of every hunt and then grinds down purely off how many unique objects get interacted with before the *next* hunt — so a hunt that comes in fast again shortly after the last one (with little object interaction in between) points to Deildegast, while a slowdown that's tied to elapsed contract time points to Thaye and one tied to room temperature points to Hantu.",
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
            title: "6. Model",
            body: "**Obake** is the only ghost that swaps its model mid-hunt, on a fixed schedule of specific blink counts. If the model stayed the same the whole hunt (and the hunt ran long enough to plausibly hit those trigger points), that's an elimination of Obake. Separately, **Dayan** is always a female ghost model. **Banshee** is the only other ghost in the game locked to a female model — so this is a free, passive check for both: if the model reads as male, Dayan and Banshee are both ruled out immediately.",
          },
          {
            title: "7. Throw force",
            body: "**Poltergeist** throws items far more often (roughly every 0.5 seconds when objects are in range) and with noticeably more force than any other ghost. Ordinary, infrequent object interaction rules it out.",
          },
        ],
      },
      {
        heading: "Stage 2 — Detection range",
        intro:
          "Still during that same first hunt: three ghosts have hearing or detection ranges wildly different from normal, worth checking before you move on.",
        items: [
          {
            title: "8. Myling",
            body: "Myling's hunt-audio range is reduced — footsteps and vocals cut off around 12m instead of the normal ~20m. If you can hear it clearly from further away than that during the hunt, it's not a Myling.",
          },
          {
            title: "9. Yokai",
            body: "Yokai has a drastically reduced detection range during a hunt (roughly 2.5m for electronics vs. the normal 7.5m/9m). Walk away, then turn on an electronic item (like a flashlight) from well outside that range while it's hunting. If it reacts and comes straight back, that's inconsistent with Yokai's short detection radius — rule it out.",
          },
          {
            title: "10. Kormos",
            body: "Kormos is completely blind during hunts and tracks purely by sound, but with detection range far beyond normal — roughly 10m crouched, 15m walking, 30m sprinting, even through walls and doors. Staying crouched and silent lets you walk right past it in plain sight during a hunt; if it beelines for you anyway with no noise made, it's not a Kormos.",
          },
        ],
      },
      {
        heading: "Stage 3 — Active room tests",
        intro: "With the field narrowed, head to the ghost's favorite room and run a couple of setups at once.",
        items: [
          {
            title: "11. Crucifix + firelight test (Onryo vs. Shade)",
            body: "Place a **crucifix** and a **lit firelight** in the same room. **Onryo** is built around extinguishing flames as part of its hunt-trigger logic — if a nearby lit flame is within range when it would otherwise start a hunt, it prioritizes blowing that flame out *instead of* triggering the hunt. So: if the crucifix burns (meaning a hunt was attempted and blocked) *while the firelight is still lit*, that's inconsistent with Onryo's known behavior — rule it out. While you're waiting in the room, if the ghost **hunts while you're physically inside its favorite room**, that rules out **Shade** — it's specifically restricted from hunting, doing events, or most EMF-tier interactions while a player shares its room. *Caveat: watch room boundaries carefully on small maps — a Shade can step just outside its room to interact and create a false positive, so don't rule it out from a borderline case.*",
          },
          {
            title: "12. Orb check",
            body: "While in the room, check for ghost orbs. **The Mimic's** ability spawns an orb in its favorite room as an unofficial \"extra\" piece of evidence — one that shows up even outside its official evidence set, and even on zero/low-evidence difficulties, since it isn't officially tied to the evidence system. Seeing an orb here is a solid Mimic tell.",
          },
        ],
      },
      {
        heading: "Stage 4 — Smudge test (Demon vs. Spirit)",
        intro:
          "One more active test before falling back on passive reads: if you've still got a smudge stick, its hunt-cooldown side effect narrows two of the trickiest ghosts in one shot.",
        items: [
          {
            title: "13. Smudge test (Demon vs. Spirit)",
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
        heading: "Stage 5 — Varying speed",
        intro:
          "These ghosts don't have one fixed hunt speed — theirs shifts predictably, either on a timer or off an external trigger. Catching the pattern across more than one hunt (or one hunt with a state change) is the tell.",
        items: [
          {
            title: "14. Twins",
            body: "Twins randomly roll one of two fixed hunt speeds each time (slower ~1.5 m/s or faster ~1.9 m/s) — the point is that repeated hunts should show visible *speed variance* between them. If every hunt has come in at the same consistent speed across multiple hunts, that's a mark against Twins.",
          },
          {
            title: "15. Obambo",
            body: "Obambo alternates between two states roughly every 2 minutes: **Aggressive** (~1.96 m/s, hunts at ≤65% sanity, hunts run 20% shorter) and **Calm** (~1.45 m/s, hunts only at ≤10% sanity). It starts every contract Calm, first switching about a minute after the exit door is opened, and can even flip state mid-hunt — a hunt that visibly speeds up or slows down partway through is a strong Obambo tell.",
          },
          {
            title: "16. Gallu, again",
            body: "Gallu's three-state cycle also shows up as a raw speed change, not just the salt behavior from earlier: Normal (1.7 m/s) → Enraged (1.96 m/s, triggered by salt/incense/crucifix) → Weakened (1.36 m/s, right after a hunt ends) → back to Normal. A ghost that visibly speeds up right after you use salt/incense/crucifix on it, then visibly slows down right after a hunt ends, is about as confirmed as Gallu gets without evidence.",
          },
        ],
      },
      {
        heading: "Stage 6 — The stragglers",
        intro:
          "The rest of the roster comes down to behavior patterns rather than a single clean test — worth checking last since they lean on probability or absence rather than a hard rule.",
        items: [
          {
            title: "17. Yurei",
            body: "Yurei must fully open or fully close any door it interacts with — leaving a door at any half-open state is impossible for it. If the ghost's room has no doors to observe, this test simply can't run, and Yurei stays on the table until you can test it another way (e.g. tracking with motion sensors whether it gets trapped in-room for ~90 seconds after a smudge, another documented Yurei trait).",
          },
          {
            title: "18. Banshee",
            body: "By this stage, you're watching whether the ghost seems to be actively roaming toward you specifically, the way a Banshee stalks its one chosen target. If you're unsure, listen for the distinct wail on a parabolic mic or sound recorder — it has roughly a 1-in-3 chance of producing it on a given response. After several non-scream responses in a row, the odds swing hard against Banshee, though — being probability-based — this isn't an absolute proof the way a salt-and-Wraith test is.",
          },
        ],
      },
    ],
    closing: {
      heading: "The Hardest to Pin Down: Mare, Demon, Goryo, Yurei, Spirit, Shade",
      intro:
        "If you've run this whole flow and you're still stuck, there's a good chance you've landed on one of the ghosts the wider Phasmophobia community broadly agrees are the hardest to pin down with zero evidence:",
      bullets: [
        "**Mare** — its only real tell (preferring darkness, killing lights right after they're turned on, never turning lights *on*) is something any ghost can coincidentally do; you need to see the pattern repeat before it means anything.",
        "**Demon** — without incense/smudges left to test its short hunt-cooldown, and without a Ouija board or crucifix interaction to watch, it has very little that separates it from a \"generic\" fast, aggressive ghost.",
        "**Goryo** — its defining trait (never changing its favorite room) is a non-event you can only confirm by absence over time; it gives you nothing active to test for.",
        "**Yurei** — its door test needs an actual door in its favorite room to run at all; without one, you're left relying on the weaker, indirect smudge-trap sign instead of a clean test.",
        "**Spirit** — its only tell is a ~180s re-hunt after a smudge; burn your last smudge stick early or on the wrong ghost, and there's nothing left that separates it from a default one.",
        "**Shade** — ruled out only by catching it hunting while you share its room, which means being in the right place at the right time, and small-map room boundaries can produce a false positive either way.",
      ],
      outro:
        "If every test in this flow has come back neutral, whatever's left standing among these six really is close to a coin flip. At that point: pick one, and treat it as an educated guess rather than a certainty.",
    },
  },
  {
    id: "perfect-investigation",
    title: "Perfect Investigation",
    summary:
      "Every unique-media stamp, every objective, and the bone — the full checklist for the top payout on a contract.",
    intro: [
      "To land the full Perfect Investigation bonus (extra cash + 50 XP), you need all four of the following in the same contract: the correct ghost identified, all 3 optional objectives complete, the bone collected, and the journal filled with only Unique media.",
      "\"Unique\" means the first-ever capture of that specific evidence category in the contract — a second photo of the same category registers as a *Duplicate* and won't count toward the bonus.",
    ],
    stages: [
      {
        heading: "Stage 1 — The Four Requirements",
        items: [
          {
            title: "1. Correctly identify the ghost",
            body: "Circle the right ghost in the journal before the contract ends.",
          },
          {
            title: "2. Complete all 3 optional objectives",
            body: "Not just the mandatory \"find the ghost\" — all three randomly-picked objectives for the contract.",
          },
          {
            title: "3. Find and collect the Bone",
            body: "Every contract has exactly one — check garages, basements, and attics first. Picking it up and photographing it are two separate things — do both.",
          },
          {
            title: "4. Fill the journal with only Unique media",
            body: "5 Unique photos, 5 Unique videos, 3 Unique sounds — Duplicates don't count toward any of the three totals.",
          },
        ],
      },
      {
        heading: "Stage 2 — Media Checklist by Device",
        intro: "Aim for a spread across distinct categories rather than repeating the same easy shot:",
        items: [
          {
            title: "Photo Camera — need 5 Unique",
            body: "Good spread to target:",
            bullets: [
              "The Ghost (during an event/hunt) — best single-value shot",
              "The Bone",
              "The cursed possession that spawned",
              "A UV Fingerprint or Footprint",
              "An EMF Level 5 reading on the reader",
              "Ghost Writing in the book",
              "A burned Crucifix",
              "A Dead Body (if a teammate has died)",
              "An object mid-levitation (\"Interaction\")",
            ],
          },
          {
            title: "Video Camera — need 5 Unique",
            body: "Good spread to target:",
            bullets: [
              "The Ghost manifesting or hunting (biggest reward)",
              "Disturbed Salt",
              "A Door moving on its own",
              "Ghost Orbs",
              "A Motion Sensor being triggered",
              "A light flickering or exploding",
              "Ghost Writing in progress",
              "A burned Crucifix",
            ],
          },
          {
            title: "Sound Recorder — need 3 Unique",
            body: "Good spread to target:",
            bullets: [
              "A Spirit Box response",
              "A paranormal sound (groan/laugh/talk/whisper/scream)",
              "A burning Crucifix",
              "An EMF Level 5 reading",
              "Ghost Writing being written",
            ],
          },
        ],
      },
      {
        heading: "Stage 3 — Practical Run Order",
        items: [
          {
            title: "1. Sweep for the favourite room",
            body: "Do initial EMF/Spirit Box/DOTS sweeps to find the favourite room and lock in evidence.",
          },
          {
            title: "2. Bank the easy Unique trio first",
            body: "Grab the easy, low-risk Unique photo/video/sound trio (bone, cursed possession, EMF reading) before doing anything risky.",
          },
          {
            title: "3. Force a ghost event",
            body: "Force one with Tarot Cards / Music Box / Summoning Circle / low sanity to bank the Ghost photo, Ghost video, and a paranormal sound in one go.",
          },
          {
            title: "4. Set up a Crucifix + Incense chokepoint",
            body: "This can knock out \"prevent a hunt,\" \"cleanse with incense,\" \"repel with incense,\" and \"escape a hunt\" objectives together if they're in the pool.",
          },
          {
            title: "5. Sweep the remaining categories",
            body: "Pick up remaining Video/Sound categories (salt, doors, motion sensor, Spirit Box) opportunistically while doing the above.",
          },
        ],
      },
    ],
    closing: {
      heading: "Before You Call It",
      intro: "One last pass before ending the contract:",
      bullets: [
        "Double-check the journal tab — a full grid of Unique media, all objectives ticked, correct ghost circled, and the bone in your inventory.",
      ],
    },
  },
];

export function getGuideById(id: string): Guide | undefined {
  return guides.find((g) => g.id === id);
}
