export interface GuideItem {
  title: string;
  /** May contain **bold** spans, rendered inline. */
  body: string;
  bullets?: string[];
  /** Named speed values worth hearing as a footstep-cadence clip (synthesized, not in-game audio). */
  speeds?: { label: string; value: number }[];
  /** Reference photo gallery, collapsed by default. */
  imageGallery?: {
    label: string;
    images: { src: string; alt: string }[];
    /** May contain **bold** spans, shown below the gallery when expanded. */
    note?: string;
  };
  /** Key selecting a purpose-built diagram component to render when expanded — data can't hold JSX. */
  diagram?: "blink-pattern";
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
  closing?: GuideClosing;
  sources?: GuideSources;
}

export const guides: Guide[] = [
  {
    id: "basics",
    title: "The Basics",
    summary:
      "The foundational loop — what to actually do on a contract, how maps constrain you, and how to live through a hunt instead of guessing at it.",
    intro: [],
    stages: [
      {
        heading: "The Scenario",
        items: [
          {
            title: "You're the Investigator",
            body: "Every contract puts you and your team at a real haunted location with exactly one ghost. It's not a jump-scare gimmick — it has consistent rules, a type from a fixed roster, and it will kill you if you get careless.",
          },
          {
            title: "The Ghost Interacts With Its Surroundings",
            body: "Even when it's not actively hunting, the ghost roams the location and interacts with objects and the environment — flickering lights, opening doors, writing in a book left for it, knocking things over. These interactions are how most evidence gets left behind.",
          },
          {
            title: "It Has a Favorite Room",
            body: "The ghost is anchored to one room it returns to and is most active in — usually where its evidence and activity concentrate, and where cleanse/scan objectives get done. Finding it early narrows down where to actually set up gear.",
          },
          {
            title: "It Can Hunt You",
            body: "Beyond roaming, the ghost can enter a hunt: an aggressive state where it actively searches for and tries to kill players. Surviving one is the other half of the job — covered in full in \"Surviving Hunts\" below.",
          },
          {
            title: "Every Ghost Is Unique — Except One",
            body: "Each of the 30 ghost types has its own evidence set, behavior, and unique tells — no two play exactly alike. The one exception is **The Mimic**, which can copy other ghosts' apparent evidence and quirks, muddying a straight read. Full behavior breakdowns live in the Ghost Wiki and Find My Ghost tabs.",
          },
          {
            title: "Money & Equipment",
            body: "Completing contracts (and their optional objectives) pays out money and XP, which you spend back at the truck to buy new equipment or upgrade existing gear to higher tiers. Full pricing and tier breakdowns live in the Item Wiki tab.",
          },
        ],
      },
      {
        heading: "Objective, Evidence & How to Gather It",
        items: [
          {
            title: "Objective",
            body: "Each contract drops you at a haunted location with one goal: figure out which of the 30 ghost types is haunting it, survive long enough to do so, and get out. You do this by collecting evidence with equipment from the truck, logging it in your Journal, and cross-referencing against the ghost list. Optional side objectives give bonus money/XP but aren't required to finish the contract — see the Objectives Wiki tab for the full list.",
          },
          {
            title: "The 7 Evidence Types",
            body: "Every ghost has exactly 3 of these 7 fixed evidence types:",
            bullets: [
              "**EMF Level 5** — sweep with the EMF Reader near ghost interactions/objects; a level 5 spike is evidence.",
              "**D.O.T.S. Projector** — place it in a room the ghost frequents; watch for a silhouette passing through the light grid.",
              "**Ultraviolet (UV)** — shine the UV Light on doors, floors, light switches; look for glowing fingerprints/footprints.",
              "**Freezing Temperatures** — thermometer reads below 0°C/32°F in a room the ghost is active in.",
              "**Ghost Orb** — only visible through a Video Camera/Video Feed/Head Gear — floating orbs in the ghost room.",
              "**Ghost Writing** — place a Ghost Writing Book and leave the room; the ghost may write in it.",
              "**Spirit Box** — ask a question in a dark room; a reply confirms this evidence.",
            ],
          },
          {
            title: "Difficulty & Evidence Availability",
            body: "On Amateur/Intermediate/Professional, all 3 of a ghost's evidence types are obtainable. On Nightmare, only 2 of the 3 are available (1 is randomly hidden). On Insanity, only 1 of the 3 is available. This is why higher difficulties force you to rely more on ghost behavior than pure evidence.",
          },
        ],
      },
      {
        heading: "Everything to do with Maps",
        intro:
          "See the Map Wiki tab for the full per-map breakdown — exact light limits, fuse box spots and cursed possession locations for each of the 14 maps.",
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
              "**Light switches:** togglable by players during an Event; locked out entirely once a Hunt starts.",
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
  },
  {
    id: "zero-evidence-walkthrough",
    title: "0-Evidence Walkthrough",
    summary:
      "Broken down step by step — a way to identify each ghost, more or less, heavily focused on the first hunt alone, which can rule out a good chunk of the roster.",
    intro: [],
    stages: [
      {
        heading: "Stage 1 — Read the first hunt",
        intro:
          "During the very first hunt — which in a zero-evidence contract usually lands early, before much time has passed or many objects have been touched — you're passively reading several signals at once: **speed**, **line-of-sight behavior**, **salt**, **visual tells**, and **throw force**. A single hunt can eliminate close to half the roster.",
        items: [
          {
            title: "1. Base speed",
            body: "A steady 1.7 m/s the whole hunt (not visibly slow, not visibly fast) rules out every ghost with a **non-standard base or conditional speed**. Because this hunt is early, all of the following are testable off raw speed alone — no need to wait for a second hunt:",
            bullets: [
              "**Deogen** — inverts entirely: ~3.0 m/s far away, slowing to ~0.4 m/s up close. Steady 1.7 m/s matches neither extreme.",
              "**Moroi** — 1.5 m/s at high sanity, up to 2.25 m/s (~3.71 m/s combined with LOS acceleration) as sanity nears 0%. Anything but a specific low-sanity moment reads as \"off.\"",
              "**Raiju** — jumps to 2.5 m/s only near *active* electronics, including gear in your own hands. No speed-up while holding a lit flashlight nearby rules it out.",
              "**Revenant** — a stark binary: 1.0 m/s undetected, 3.0 m/s once it detects you or your electronics. Neither matches a steady 1.7 m/s.",
              "**Deildegast** — resets to 3.0 m/s at the start of every hunt if nothing's been interacted with since the last one. This early almost nothing has been touched, so a genuinely standard-speed hunt rules it out (it only grinds down toward ~0.4 m/s later, as objects get used).",
              "**Thaye** — starts every contract at its fastest \"youngest\" state (~2.75 m/s), only slowing as it ages later on. This early it should still read fast, not standard.",
            ],
            speeds: [
              { label: "Deogen (close)", value: 0.4 },
              { label: "Revenant (undetected)", value: 1.0 },
              { label: "Standard", value: 1.7 },
              { label: "Moroi (near 0% sanity)", value: 2.25 },
              { label: "Raiju (near active electronics)", value: 2.5 },
              { label: "Thaye (youngest state)", value: 2.75 },
              { label: "Deogen (far) · Revenant (detected) · Deildegast (fresh hunt)", value: 3.0 },
            ],
          },
          {
            title: "2. Line-of-sight speed",
            body: "Most ghosts gradually accelerate under sustained line of sight, reaching roughly 1.65× base speed (~2.805 m/s) after about 13 seconds. Four ghosts break from that baseline, each testable by watching how it reacts to your position or movement:",
            bullets: [
              "**Jinn** — speed snaps straight to a fixed 2.5 m/s only when the breaker is on *and* a target is more than 3m away *and* in its line of sight; otherwise it's a normal 1.7 m/s. >3m away, in its sight, breaker on, and no acceleration — not a Jinn.",
              "**Hantu** — never gets a line-of-sight speed boost at all, no matter how long it holds sight on you. Speed is set purely by room temperature (up to 2.7 m/s cold, down to 1.4 m/s warm). No acceleration through a long, sustained chase points straight at Hantu.",
              "**Aswang** — does get the acceleration, just abnormally fast off a lower starting speed (1.53 m/s), maxing out at 2.53 m/s in under 9 seconds instead of the usual ~13. A ramp-up that completes suspiciously early is the tell.",
              "**Dayan** — doesn't ramp on sustained LOS at all; it locks to a fixed speed based on whether the nearest player is moving (2.25 m/s) or standing still (1.2 m/s), regardless of how long it's held sight. Testable mid-loop: break LOS at a corner, then stop dead instead of continuing to move — a dramatic slowdown to a crawl the moment you go still all but confirms Dayan.",
            ],
          },
          {
            title: "3. Salt",
            body: "**Wraith** is the only ghost that never disturbs salt — it walks through without a footprint or slowdown. Salt disturbed at least once cleanly rules out Wraith. **Gallu** flips its salt behavior with its state instead: it won't disturb salt while **Enraged**. To test for it, get it Enraged first — either by walking it through an initial patch of salt, or by using incense or a crucifix on it — then lead it to a second, separate patch and watch whether it avoids disturbing that one too. Give it a moment before testing: the shift into Enraged takes 2 seconds, so triggering it and testing salt in the same instant can give a false read.",
          },
          {
            title: "4. Visual: blink pattern & model",
            body: "Two passive reads from the same hunt:",
            bullets: [
              "**Phantom** blinks slower, with longer invisible gaps (up to ~1.9s per cycle vs under 1s normally). **Oni** breaks the opposite way — it blinks less often and stays visible for longer stretches, easier to see mid-chase rather than flickerier.",
              "**Obake** is the only ghost that swaps its model mid-hunt, on a fixed schedule of blink counts — the same model held the whole hunt (assuming it ran long enough to hit those triggers) rules it out.",
              "**Dayan** is always a female model, and **Banshee** is the only other ghost locked female.",
              "**Hantu** — if it hasn't already been ruled out by the line-of-sight test above, check for visible freezing breath during the hunt: it shows specifically when the breaker is off or broken, and no other ghost has this tell.",
            ],
            diagram: "blink-pattern",
            imageGallery: {
              label: "The 4 female ghost models",
              images: [
                { src: "/images/ghost-models/argyro.webp", alt: "Argyro — one of the 4 female ghost models" },
                { src: "/images/ghost-models/creepy-girl.webp", alt: "Creepy Girl — one of the 4 female ghost models" },
                { src: "/images/ghost-models/old-crone.webp", alt: "Old Crone — one of the 4 female ghost models" },
                { src: "/images/ghost-models/ring-girl.webp", alt: "Ring Girl — one of the 4 female ghost models" },
              ],
              note: "These are the only 4 female models in the game. If the ghost's model doesn't match any of them, that rules out **Dayan** and **Banshee** — matching one doesn't confirm either, though, since unrestricted ghosts can roll a female model too.",
            },
          },
          {
            title: "5. Throw force",
            body: "**Poltergeist** throws items far more often (roughly every 0.5 seconds when objects are in range) and with noticeably more force than any other ghost. Ordinary, infrequent object interaction rules it out.",
          },
        ],
      },
      {
        heading: "Stage 2 — Detection range",
        intro:
          "Still during that first hunt, or a second dedicated one if you need it: three ghosts have hearing or detection ranges far from normal.",
        items: [
          {
            title: "6. Myling",
            body: "Myling's hunt-audio range is reduced — footsteps and vocals cut off around 12m instead of ~20m. Judging that distance by ear alone is hard, so drop a flashlight (or any other electronic) at a fixed spot before the hunt: electronics flicker within ~10m of any ghost, close enough to Myling's ~12m cutoff to double as a rough visual marker for the same range. Still hearing it clearly once the flashlight's well behind you rules it out.",
          },
          {
            title: "7. Yokai",
            body: "Yokai's electronics detection range during a hunt drops to ~2.5m (vs. the normal 7.5–9m). Walk away, then turn on an electronic item from well outside that range while it's hunting — if it reacts and comes straight back, rule it out.",
          },
          {
            title: "8. Kormos",
            body: "Kormos is completely blind during hunts and tracks purely by sound, but from far beyond normal range — roughly 10m crouched, 15m walking, 30m sprinting, even through walls. Staying crouched and silent lets you walk right past it in plain sight; if it beelines for you anyway with no noise made, it's not a Kormos.",
          },
        ],
      },
      {
        heading: "Stage 3 — Active room tests",
        intro: "With the field narrowed, head to the ghost's favorite room and run a couple of setups at once.",
        items: [
          {
            title: "9. Crucifix + firelight test (Onryo vs. Shade)",
            body: "Place a **crucifix** and a **lit firelight** in the same room. **Onryo** prioritizes blowing out a nearby lit flame over triggering a hunt — a crucifix that burns (a hunt was attempted and blocked) while the firelight stays lit is inconsistent with Onryo; rule it out. Meanwhile, a hunt while you're physically inside the room rules out **Shade**, which can't hunt, run events, or do most EMF-tier interactions while a player shares its room. *Caveat: on small maps a Shade can step just outside its room to interact — don't rule it out on a borderline case.*",
          },
          {
            title: "10. Orb check",
            body: "**The Mimic's** ability spawns an extra ghost orb in its favorite room — outside its official evidence set, and even on zero/low-evidence difficulties. An orb here is a solid Mimic tell.",
          },
          {
            title: "11. Poltergeist test (lit room)",
            body: "Head to its favorite room with the lights on and some interactable objects nearby. **Poltergeist** is the only ghost that can interact with and throw objects while the room is fully lit — every other ghost's object interactions need darkness, so any object movement here is a strong tell on its own. Also watch for its 'py-bomb': outside of a hunt, it can throw every interactable item in range all at once (draining ~2% sanity per item) — a sudden pile of objects thrown together instead of one at a time is close to a confirmed Poltergeist.",
          },
        ],
      },
      {
        heading: "Stage 4 — Smudge test",
        intro:
          "One more active test before falling back on passive reads: a smudge stick's cooldown side effect narrows two of the trickiest ghosts at once.",
        items: [
          {
            title: "12. Smudge test",
            body: "Smudge the ghost and time the next hunt:",
            bullets: [
              "**Demon** needs only ~60 seconds after a smudge (vs. the normal 90s).",
              "**Spirit** needs a full 180 seconds (3 minutes).",
              "A hunt landing well outside either window rules out both.",
              "No smudges left? **Demon** still gives itself away on its baseline re-hunt cooldown alone: it can start a new hunt as little as ~20 seconds after the last one ends, versus a 25-second minimum for every other ghost — no smudge needed, just a stopwatch on two consecutive hunts.",
            ],
          },
        ],
      },
      {
        heading: "Stage 5 — Varying speed",
        intro:
          "These ghosts shift hunt speed predictably, on a timer or off an external trigger — catching the pattern across hunts (or a state change mid-hunt) is the tell.",
        items: [
          {
            title: "13. Twins",
            body: "Twins randomly roll one of two fixed hunt speeds each time (~1.5 m/s or ~1.9 m/s) — repeated hunts should show visible speed variance. The same speed every time is a mark against Twins.",
          },
          {
            title: "14. Obambo",
            body: "Obambo alternates **Aggressive** (~1.96 m/s, hunts at ≤65% sanity, 20% shorter hunts) and **Calm** (~1.45 m/s, hunts only at ≤10% sanity) roughly every 2 minutes, starting Calm and first switching about a minute after the exit door opens. It can flip state mid-hunt — a hunt that visibly speeds up or slows down partway through is a strong tell.",
          },
          {
            title: "15. Gallu, again",
            body: "Gallu's three-state cycle shows up as raw speed too, not just salt: Normal (1.7 m/s) → Enraged (1.96 m/s, after salt/incense/crucifix) → Weakened (1.36 m/s, right after a hunt ends) → back to Normal. A visible speed-up right after using salt/incense/crucifix, followed by a slowdown right after a hunt ends, is about as confirmed as Gallu gets without evidence.",
          },
        ],
      },
      {
        heading: "Stage 6 — The stragglers",
        intro:
          "The rest of the roster comes down to behavior patterns rather than a single clean test — check these last since they lean on probability or absence, not a hard rule.",
        items: [
          {
            title: "16. Yurei",
            body: "Yurei must fully open or fully close any door it interacts with — a half-open door is impossible for it. No door in its room means this test can't run; fall back on whether it gets trapped in-room for ~90 seconds after a smudge instead.",
          },
          {
            title: "17. Banshee",
            body: "Watch whether it roams directly toward you specifically, the way a Banshee stalks one chosen target. Its wail on a parabolic mic/recorder has roughly a 1-in-3 chance per response — several non-scream responses in a row swings the odds against it, though this is probability, not proof.",
          },
          {
            title: "18. Mare",
            body: "Mare can never turn a light source ON, only off — catching it turn one on is an immediate elimination. It also has an elevated chance to flip a switch back off within 4m within moments of a player turning it on; one occurrence could be coincidence, but repeated occurrences are a real tell.",
          },
          {
            title: "19. Goryo",
            body: "Goryo never changes its favorite room for the whole contract — track where activity clusters across every hunt and event. A confirmed room change rules it out; if the room hasn't moved and nothing else has landed, that's the extent of the case for Goryo without evidence tools.",
          },
        ],
      },
    ],
    closing: {
      heading: "Hardest to Pin Down",
      intro:
        "If you've run this whole flow and you're still stuck, you've likely landed on one of the ghosts the wider community agrees are hardest to pin down with zero evidence:",
      bullets: [
        "**Mare** — its light tell is something any ghost can coincidentally do once; you need the pattern to repeat before it means anything.",
        "**Demon** — without a smudge or Ouija/crucifix interaction left to test, little separates it from a \"generic\" fast, aggressive ghost.",
        "**Goryo** — its favorite-room test only confirms by absence over time; it gives you nothing active to test for.",
        "**Yurei** — its door test needs an actual door in its favorite room; without one you're left with the weaker smudge-trap sign.",
        "**Spirit** — its only tell is a ~180s re-hunt after a smudge; burn your last one on the wrong ghost and nothing else separates it from default.",
        "**Shade** — only ruled out by catching it hunting while you share its room, and small-map room boundaries can produce a false positive either way.",
      ],
      outro:
        "If every test comes back neutral, whatever's left among these six is close to a coin flip — pick one and treat it as an educated guess, not a certainty.",
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
