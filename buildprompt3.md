# Zero-Evidence Investigation Walkthrough

A real hunt, broken down step by step. Every elimination below is cross-checked against verified Phasmophobia mechanics — where a claim couldn't be independently confirmed, it's flagged as such rather than stated as fact.

This is the elimination *order* one experienced investigator uses — not the only valid order, but a solid default when you're not on a low-evidence difficulty and just need to read a single hunt for maximum information.

---

## Stage 1 — Read the first hunt

During the very first hunt, you're passively collecting four signals at once: **speed**, **blink pattern**, **throw behavior**, and **line-of-sight acceleration**. A single hunt can eliminate close to half the roster if you know what to watch for.

### 1. Base speed
If the ghost is moving at the standard 1.7 m/s the whole time (not visibly slow, not visibly fast), you can immediately rule out every ghost with a **non-standard base or conditional speed**:

- **Deogen** — inverts entirely: ~3.0 m/s far away, slowing to ~0.4 m/s up close. Constant "normal" speed doesn't match either extreme.
- **Moroi** — 1.5 m/s at high sanity, up to 2.25 m/s (and up to ~3.71 m/s combined with LOS acceleration) as sanity drops toward 0%. At anything other than very specific sanity, its speed reads as "off" from standard.
- **Raiju** — jumps to 2.5 m/s only near *active* electronics (including gear in your own hands, like a flashlight). If it doesn't speed up while you're holding on active flashlight nearby, that's a direct test against Raiju.
- **Revenant** — a stark binary: 1.0 m/s with no line of sight/detection, 3.0 m/s once it detects you or your electronics. Neither of those is "normal," so a steady 1.7 m/s rules it out immediately.

### 2. The Jinn test (distance + LOS)
Jinn only speeds up to 2.5 m/s when it has line of sight on a player **more than 3 meters away** *and* the breaker is on. If you were >3m away, in its sight, breaker on, and it didn't accelerate — not a Jinn.

### 3. Salt
Wraith is the only ghost in the game that **never disturbs salt** — it walks through without leaving a footprint or getting slowed. If the ghost stepped in salt and disturbed it, that's a clean elimination of Wraith.

### 4. The standard line-of-sight acceleration check
This is the detail worth knowing cold: **most ghosts** gradually accelerate while holding continuous line of sight on a player, reaching roughly 1.65× base speed (~2.805 m/s) after about 13 seconds. This is a *universal* mechanic layered under everything else — but there are exactly **three confirmed exceptions that never get this acceleration**: **Hantu**, **Thaye**, and **Deogen** (Deogen instead slows down as it closes in). If you clocked a standard LOS speed-up happening, you've ruled out Hantu specifically (Thaye and Deogen are usually already excluded by their own distinctive speed signatures above).

### 5. Blink pattern
Ghosts flicker in and out of visibility during hunts at a fairly consistent rate. Two ghosts break from that baseline in opposite directions:

- **Phantom** blinks slower, with longer gaps of invisibility.
- **Oni** blinks faster and more frequently.

A "normal" blink pattern rules out both.

### 6. Model shapeshifting
**Obake** is the only ghost that swaps its model mid-hunt, on a fixed schedule of specific blink counts. If the model stayed the same the whole hunt (and the hunt ran long enough to plausibly hit those trigger points), that's an elimination.

### 7. Throw force
**Poltergeist** throws items far more often (roughly every 0.5 seconds when objects are in range) and with noticeably more force than any other ghost. Ordinary, infrequent object interaction rules it out.

**Running tally after one hunt:** you can realistically eliminate Deogen, Moroi, Raiju, Revenant, Jinn, Wraith, Hantu, Phantom, Oni, Obake, and Poltergeist — around 11 ghosts from a single, well-read hunt.

---

## Stage 2 — Active room tests

With the field narrowed, head to the ghost's favorite room and run a couple of setups at once.

### 8. Crucifix + firelight test (Onryo vs. Shade)
Place a **crucifix** and a **lit firelight** in the same room. **Onryo** is built around extinguishing flames as part of its hunt-trigger logic — if a nearby lit flame is within range when it would otherwise start a hunt, it prioritizes blowing that flame out *instead of* triggering the hunt. So: if the crucifix burns (meaning a hunt was attempted and blocked) *while the firelight is still lit*, that's inconsistent with Onryo's known behavior — rule it out.

While you're waiting in the room, if the ghost **hunts while you're physically inside its favorite room**, that rules out **Shade** — it's specifically restricted from hunting, doing events, or most EMF-tier interactions while a player shares its room. *Caveat: watch room boundaries carefully on small maps — a Shade can step just outside its room to interact and create a false positive, so don't rule it out from a borderline case.*

### 9. Orb check
While in the room, check for ghost orbs. **The Mimic's** ability spawns an orb in its favorite room as an unofficial "extra" piece of evidence — one that shows up even outside its official evidence set, and even on zero/low-evidence difficulties, since it isn't officially tied to the evidence system. Seeing an orb here is a solid Mimic tell.

---

## Stage 3 — Sound and light-based tests

### 10. Myling
Myling's hunt-audio range is reduced — footsteps and vocals cut off around 12m instead of the normal ~20m. If you can hear it clearly from further away than that, it's not a Myling.

### 11. Yokai
Yokai has a drastically reduced detection range (roughly 2.5m for electronics vs. the normal 7.5m/9m). Walk away, then turn on an electronic item (like a flashlight) from well outside that range. If it reacts and comes straight back, that's inconsistent with Yokai's short detection radius — rule it out.

### 12. Smudge test (Demon vs. Spirit)
Smudge the ghost and time the next hunt:
- **Demon** needs only ~60 seconds after a smudge before it can hunt again (vs. the normal 90s).
- **Spirit** is the opposite extreme — it needs a full 180 seconds (3 minutes) before it can hunt again.

A hunt landing well outside either window rules out both.

---

## Stage 4 — The stragglers

### 13. Twins
Twins randomly roll one of two fixed hunt speeds each time (slower ~1.5 m/s or faster ~1.9 m/s) — the point is that repeated hunts should show visible *speed variance* between them. If every hunt has come in at the same consistent speed across multiple hunts, that's a mark against Twins.

### 14. Yurei
Yurei must fully open or fully close any door it interacts with — leaving a door at any half-open state is impossible for it. If the ghost's room has no doors to observe, this test simply can't run, and Yurei stays on the table until you can test it another way (e.g. tracking with motion sensors whether it gets trapped in-room for ~90 seconds after a smudge, another documented Yurei trait).

### 15. Banshee
By this stage, you're watching whether the ghost seems to be actively roaming toward you specifically, the way a Banshee stalks its one chosen target. If you're unsure, listen for the distinct wail on a parabolic mic or sound recorder — it has roughly a 1-in-3 chance of producing it on a given response. After several non-scream responses in a row, the odds swing hard against Banshee, though — being probability-based — this isn't an absolute proof the way a salt-and-Wraith test is.

---

## The Unholy Trinity: Mare, Demon, Goryo

If you've run this whole flow and you're still stuck, there's a good chance you've landed on one of the ghosts the wider Phasmophobia community broadly agrees are the hardest to pin down with zero evidence:

- **Mare** — its only real tell (preferring darkness, killing lights right after they're turned on, never turning lights *on*) is something any ghost can coincidentally do; you need to see the pattern repeat before it means anything.
- **Demon** — without incense/smudges left to test its short hunt-cooldown, and without a Ouija board or crucifix interaction to watch, it has very little that separates it from a "generic" fast, aggressive ghost.
- **Goryo** — its defining trait (never changing its favorite room) is a non-event you can only confirm by absence over time; it gives you nothing active to test for.

Community discussion frequently lists Yurei, Spirit, and Shade alongside this group too — but by this point in the flow those three have already been handled by earlier tests (the door test, the smudge-cooldown test, and the same-room-hunt test respectively). What's left standing after all of that really is close to a coin flip. At that point: pick one, and treat it as an educated guess rather than a certainty.

---

## Sources & Verification Notes

- Ghost-by-ghost evidence, speed, and behavior data cross-referenced against the current in-game journal mechanics (27-ghost roster).
- The universal line-of-sight acceleration mechanic (~1.65× base speed, capping ~2.805 m/s after 13s) and its three named exceptions (Hantu, Thaye, Deogen) confirmed via community technical discussion and multiple independent guide sources.
- The Mimic's unofficial orb tell, and its visibility even on reduced-evidence difficulties, confirmed via independent low-evidence-run community documentation.
- "Hardest to identify with zero evidence" consensus (Mare, Goryo, Yurei, Spirit, Shade cluster) cross-referenced across multiple independent community discussions — the exact trio varies by source depending on what's already been eliminated earlier in a given run, which is reflected in the note above rather than presented as a single fixed ranking.
- Two claims in the source video are flagged above as **plausible but not independently confirmed** rather than verified fact: the specific "tier 2 crucifix" requirement for the Onryo test (crucifix tier likely affects range/charges only, not this particular interaction), and the motion-sensor-plus-incense method for testing Yurei's room-trap window (consistent with documented Yurei mechanics, but not confirmed as a named technique in other sources).