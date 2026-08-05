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
    id: "basics",
    title: "Basics: Objective, Maps & Surviving Hunts",
    summary:
      "The foundational loop — what to actually do on a contract, how maps constrain you, and how to live through a hunt instead of guessing at it.",
    intro: [],
    stages: [
      {
        heading: "Objective, Evidence & How to Gather It",
        items: [
          {
            title: "Objective",
            body: "Each contract drops you at a haunted location with one goal: figure out which of the 27 ghost types is haunting it, survive long enough to do so, and get out. You do this by collecting evidence with equipment from the truck, logging it in your Journal, and cross-referencing against the ghost list. Optional side objectives (photos, tasks like \"get evidence with X device\") give bonus money/XP but aren't required to finish the contract.",
          },
          {
            title: "The 7 Evidence Types",
            body: "Every ghost has exactly 3 of these 7 fixed evidence types:",
            bullets: [
              "**EMF Level 5** — sweep with the EMF Reader near ghost interactions/objects; a level 5 spike is evidence.",
              "**D.O.T.S. Projector** — place it in a room the ghost frequents; watch for a silhouette passing through the light grid.",
              "**Ultraviolet (UV)** — shine the UV Light on doors, floors, light switches; look for glowing fingerprints/footprints.",
              "**Freezing Temperatures** — thermometer reads below 0°C/32°F in a room the ghost is active in.",
              "**Ghost Orb** — only visible through a Video Camera/Video Feed/Head Gear — floating orbs near the ghost.",
              "**Ghost Writing** — place a Ghost Writing Book and leave the room; the ghost may write in it.",
              "**Spirit Box** — ask a question in a dark room; a reply confirms this evidence.",
            ],
          },
          {
            title: "Difficulty & Evidence Availability",
            body: "On Amateur/Intermediate/Professional, all 3 of a ghost's evidence types are obtainable. On Nightmare, only 2 of the 3 are available (1 is randomly hidden). On Insanity, only 1 of the 3 is available. This is why higher difficulties force you to rely more on ghost behavior than pure evidence.",
          },
          {
            title: "Practical Gathering Order",
            body: "A sequence that works for most groups:",
            bullets: [
              "**Spirit Box first** — quick to test, immediately splits the ghost list into \"responds\" vs. \"doesn't.\"",
              "**EMF Reader sweep** — most ghosts interact with objects early in a contract.",
              "Set up a **camera + Ghost Writing Book** in the suspected ghost room and leave — passive evidence collection while you do other things.",
              "**UV sweep** on doors/light switches once you've narrowed down the ghost room.",
              "**Thermometer** — carry it around, especially into the suspected ghost room.",
            ],
          },
          {
            title: "Common Beginner Mistake",
            body: "Assuming one piece of evidence identifies the ghost. Multiple ghosts usually share any single evidence type — you need to actually narrow it down using all three, or use behavioral tells (speed, hunt sanity threshold, unique quirks) when evidence is hidden on higher difficulties.",
          },
        ],
      },
      {
        heading: "Maps: Hiding Spots, Cursed Possessions & Breaker/Light Limits",
        items: [
          {
            title: "Map Sizes (14 total)",
            body: "14 maps split across three sizes:",
            bullets: [
              "**Small (7):** 6 Tanglewood Drive, 42 Edgefield Road, 10 Ridgeview Court, Nell's Diner, Grafton Farmhouse, 13 Willow Street, Camp Woodwind.",
              "**Medium (5):** Point Hope, Bleasdale Farmhouse, Sunny Meadows Restricted, Prison, Maple Lodge Campsite.",
              "**Large (2):** Brownstone High School, Sunny Meadows (full).",
            ],
          },
          {
            title: "Light Limits Per Map Size (Breaker/Fuse Box)",
            body: "Every map has a maximum number of interactable lights that can be on simultaneously. Exceed it and the fuse box instantly trips, killing all lights and switches:",
            bullets: [
              "**Small:** 9 lights max.",
              "**Medium:** 8 lights max.",
              "**Large:** 7 lights max.",
            ],
          },
          {
            title: "Fuse Box (Breaker) Location",
            body: "The fuse box spawns in one of several fixed possible locations per map (varies by map — e.g. Point Hope has 4 possible spots along its vertical layout, Sunny Meadows has 5, Prison has one tied to the Infirmary Hallway sub-room). It's randomized per contract from that map's fixed pool, so check the known spots on your map's wiki page each contract. Turning the breaker on/off controls whether lights function and affects some ghost behaviors (e.g. Jinn only reaches its 2.5 m/s speed boost while the fuse box is on).",
          },
          {
            title: "Cursed Possessions",
            body: "On default difficulties (except Insanity), one Cursed Possession spawns per contract, drawn randomly from all 7 types (Ouija Board, Summoning Circle, Haunted Mirror, Music Box, Voodoo Doll, Monkey Paw, Tarot Cards).",
            bullets: [
              "Each possession has one dedicated, fixed spawn location per map — only which item shows up is random, not where. On most maps the 7 possible spots are scattered around the building; on Brownstone High School, Prison, and Sunny Meadows, all 7 are clustered in a single room/area (e.g. Sunny Meadows: the Chapel; Prison: the entrance hallway; Brownstone: the lobby).",
              "Using one is optional — no objective strictly requires it — but they're useful for forcing information (Ouija Board answers, Music Box location pings) at the risk of triggering a cursed hunt, which ignores sanity thresholds and hunt cooldowns entirely.",
            ],
          },
          {
            title: "Hiding Spots",
            body: "Two tiers of safety, plus a map-specific quirk worth knowing:",
            bullets: [
              "**Official hiding spots** (closets, lockers, mini-tents) are the only truly safe option — the ghost cannot physically enter them, and can only force the door open if it already detected you inside. On higher difficulties, some official spots get blocked by clutter or locked doors, so scout your route during setup.",
              "**Unofficial hiding spots** (behind furniture, in dead-end rooms) exist on maps like Prison but are riskier — they don't block the ghost, they just rely on breaking line of sight.",
              "Rooms not separated by visible walls are still treated as separate rooms mechanically on several maps (e.g. 10 Ridgeview Court's entrance area is actually 3 separate rooms: Foyer, Dining Room, Living Room) — this matters for the Ouija Board's room answers and for crucifix placement.",
            ],
          },
        ],
      },
      {
        heading: "Surviving Hunts",
        items: [
          {
            title: "Ghost Event vs. Hunt — How to Tell Them Apart",
            body: "Both can look similar at first (flickering lights, ghost sounds), but they differ in every meaningful way:",
            bullets: [
              "**Exit doors:** stay unlocked during a Ghost Event; lock immediately for a Hunt.",
              "**Ghost appearance:** can be shadow/mist/see-through during an Event; always the normal physical model during a Hunt.",
              "**Start:** a Ghost Event starts instantly with no delay; a Hunt has a grace period first (ghost invisible, motionless, cannot see/kill you).",
              "**Danger:** a Ghost Event cannot kill you; a Hunt can.",
              "**Activity Monitor:** may or may not spike for an Event; reads level 10 for a Hunt.",
              "**Doors during the event:** the ghost may slam/lock the room's own door during an Event, but cannot lock room doors that way during a Hunt.",
            ],
          },
          {
            title: "Grace Period Length",
            body: "Before the ghost can actually start chasing: Amateur 5s, Intermediate 4s, Professional/Nightmare/Insanity 2–3s, Cursed hunt only 1s. If all exits just locked, use that window to move — don't wait to \"confirm\" it's a hunt.",
          },
          {
            title: "Hunt Sanity Thresholds",
            body: "Most ghosts hunt once average team sanity (all alive players, inside or outside) drops to 50% or below, with a 10% chance to hunt after each idle-state check (rising to ~1/6 once sanity is 25 points below the threshold). Some ghosts differ significantly:",
            bullets: [
              "**Shade** — only 35% threshold (very passive), and never hunts while a player is in its room.",
              "**Demon** — 70% (hunts early and often).",
              "**Deogen** — 40%, but always knows every player's location via constant line-of-sight.",
              "**Yokai** — 80%, but only triggers off voice within 2.5 m of it.",
              "**Banshee** — uses its individually chosen target's sanity, not team average.",
            ],
          },
          {
            title: "Preventing a Hunt",
            body: "A handful of items can stop a hunt attempt outright:",
            bullets: [
              "**Crucifix** — stops a hunt attempt if the ghost is within its radius when it tries to hunt (Tier I blocks 1 attempt, Tiers II/III block 2).",
              "**Incense** — lit within 3–5 m of the ghost (tier-dependent) prevents hunting for 90 seconds (60s for Demon, 180s for Spirit).",
              "**Smudge sticks** — prevent hunting for 90 seconds after smudging (except cursed hunts).",
              "None of these work against a cursed hunt except a Tier III crucifix with 2 charges left.",
            ],
          },
          {
            title: "Detection During a Hunt — What Actually Gives You Away",
            body: "What the ghost actually tracks once a hunt is live:",
            bullets: [
              "**Line of sight (LoS)** — the ghost has 360° vision and can see up to 75 m. It needs a clear view of your hitbox (3 of 6 tracking points, upper+lower). Walls, closed doors, and most furniture block this.",
              "**Voice** — audible to the ghost within 9 m (same floor) if your voice chat picks it up.",
              "**Active electronics** in-hand or worn attract the ghost within 7.5 m (same floor) — even silent ones like flashlights or thermometers. Equipment left on the ground does not attract it.",
              "**Ghost footsteps/vocalizations** are audible to you up to 20 m (12 m for Myling) — useful for tracking where it is.",
              "Official hiding spots are safe as long as the door stays closed and you were never actually seen entering — the ghost has no memory of your position outside of an active hunt. If it does detect you while hidden, it sets a waypoint just outside and forces the door open on arrival, so timing your entry matters far more than the hiding spot itself.",
            ],
          },
          {
            title: "Looping",
            body: "Since the ghost can't clip through walls, obstacles and furniture blocks like tables/shelving are excellent for breaking line of sight repeatedly — a \"loop\" is running a circuit around such an obstacle so the ghost is always at least one corner behind you. This works because:",
            bullets: [
              "Base ghost speed is 1.7 m/s; it only accelerates (up to 1.65× base) while it maintains continuous LoS on you, taking up to 13 seconds to reach max speed.",
              "You walk at 1.6 m/s and can sprint at 3 m/s for 3-second bursts (5s cooldown) — breaking LoS around a corner resets its speed decay (slow, ~65s to fully return to base) and buys room to path toward a real hiding spot or the exit.",
              "Good loop spots are documented per map (e.g. the dining table and basement shelving in 10 Ridgeview Court) — check your map's wiki page for the best-known loop.",
            ],
          },
          {
            title: "Ghosts That Ignore Standard LoS Speed Rules",
            body: "Looping tactics that work on a \"standard\" ghost can fail badly against a handful of exceptions: **Revenant** (1 m/s when it hasn't detected you, but a flat 3 m/s once it has), **Hantu** (faster in cold rooms), **Deogen** (faster the farther away you are, slower up close), **Jinn** (fixed 2.5 m/s with LoS if the fuse box is on and you're >3 m away).",
          },
          {
            title: "Incense During a Hunt",
            body: "If lit incense successfully \"pings\" the ghost while it's within range, the ghost is blinded for 5 seconds — it can't detect or kill anyone and drops back into a wandering state with a new random waypoint. It doesn't repel the ghost away from you specifically, just resets its awareness, so use the window to actually move, not just stand still.",
          },
          {
            title: "Sound & Other Tells While Hunting",
            body: "A few passive signals worth knowing:",
            bullets: [
              "You can hear your own heartbeat if the ghost is within 10 m and has a clear path to you (no walls/floors/doors between you) — the closer it is, the louder.",
              "Electronics and lights within 10 m of the ghost (15 m for Raiju) flicker/malfunction — useful for triangulating its position if you have a stereo setup.",
              "A hunt ends when it kills someone (if Kills extend hunts is off), its timer runs out, or no living players remain in the investigation area. Duration scales with difficulty and map size — e.g. Amateur is 15s on a small map vs. 40s on a large map, Professional/Nightmare/Insanity go up to 30s/50s/1 minute respectively.",
            ],
          },
        ],
      },
    ],
    closing: {
      heading: "Key Takeaways",
      bullets: [
        "Evidence narrows the list; behavior confirms it — lean on tells the moment a difficulty hides evidence from you.",
        "Know your map's light limit and fuse box pool before you start flipping switches.",
        "A hunt's grace period is a window to move, not a countdown to verify — if the doors locked, go.",
        "Looping only works on ghosts with standard LoS acceleration — know the exceptions before you commit to one.",
      ],
    },
  },
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
