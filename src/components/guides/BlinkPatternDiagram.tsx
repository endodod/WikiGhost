import { Ghost } from "lucide-react";

interface BlinkSegment {
  visible: boolean;
  duration: number; // seconds
}

interface BlinkRow {
  id: string;
  label: string;
  pattern: BlinkSegment[];
  note: string;
}

/**
 * Relative timing built from the wiki's known figures (Phantom's ~1.9s invisible cycle vs. the
 * normal sub-1s baseline; Oni's longer visible stretches) — illustrative pacing, not frame-exact.
 */
const ROWS: BlinkRow[] = [
  {
    id: "normal",
    label: "Normal",
    pattern: [
      { visible: true, duration: 1.4 },
      { visible: false, duration: 0.8 },
    ],
    note: "Baseline — invisible for well under 1s per cycle",
  },
  {
    id: "phantom",
    label: "Phantom",
    pattern: [
      { visible: true, duration: 1.1 },
      { visible: false, duration: 1.9 },
    ],
    note: "Invisible stretches up to ~1.9s — noticeably longer gaps",
  },
  {
    id: "oni",
    label: "Oni",
    pattern: [
      { visible: true, duration: 3.2 },
      { visible: false, duration: 0.5 },
    ],
    note: "Blinks rarely and briefly — stays visible for long stretches",
  },
];

const INVISIBLE_OPACITY = 0.08;

function cycleDuration(pattern: BlinkSegment[]): number {
  return pattern.reduce((sum, seg) => sum + seg.duration, 0);
}

/** Hard opacity cuts (via steps()) rather than fades, so it reads as a blink, not a pulse. */
function buildKeyframes(name: string, pattern: BlinkSegment[]): string {
  const total = cycleDuration(pattern);
  let t = 0;
  const stops: string[] = [];
  for (const seg of pattern) {
    stops.push(`${((t / total) * 100).toFixed(3)}% { opacity: ${seg.visible ? 1 : INVISIBLE_OPACITY}; }`);
    t += seg.duration;
  }
  stops.push(`100% { opacity: ${pattern[0].visible ? 1 : INVISIBLE_OPACITY}; }`);
  return `@keyframes ${name} { ${stops.join(" ")} }`;
}

const KEYFRAMES_CSS = ROWS.map((row) => buildKeyframes(`guide-blink-${row.id}`, row.pattern)).join("\n");

/** Live, looping comparison of blink cadence — relative pacing, not a frame-accurate capture. */
export function BlinkPatternDiagram() {
  return (
    <div className="flex flex-col gap-4">
      <style>{KEYFRAMES_CSS}</style>
      <p className="text-xs text-muted">
        Live loop built from known relative timing, not a frame-accurate capture — watch how long each stays
        visible versus blinked out.
      </p>
      <div className="flex flex-wrap justify-around gap-4">
        {ROWS.map((row) => (
          <div key={row.id} className="flex w-28 flex-col items-center gap-1.5 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-surface-2">
              <Ghost
                className="size-8 text-accent"
                style={{ animation: `guide-blink-${row.id} ${cycleDuration(row.pattern)}s steps(1, end) infinite` }}
              />
            </div>
            <span className="text-xs font-semibold text-foreground">{row.label}</span>
            <span className="text-[11px] text-muted">{row.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
