/**
 * Synthesized (not recorded) footstep-cadence ticks used to give a speed value an audible
 * "feel" and to convert a tapped rhythm back into an estimated m/s figure. There's no official
 * formula tying Phasmophobia's hunt speed to a stride cadence, so this uses a fixed assumed
 * stride length as a consistent, reversible approximation — not a reverse-engineered constant.
 */
const ASSUMED_STRIDE_METERS = 0.75;

export function speedToBpm(speedMs: number): number {
  return (speedMs / ASSUMED_STRIDE_METERS) * 60;
}

export function bpmToSpeed(bpm: number): number {
  return (bpm / 60) * ASSUMED_STRIDE_METERS;
}

let sharedContext: AudioContext | null = null;
let activeNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
let activeOnStop: (() => void) | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!sharedContext) sharedContext = new Ctor();
  if (sharedContext.state === "suspended") void sharedContext.resume();
  return sharedContext;
}

function scheduleTick(context: AudioContext, when: number) {
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(210, when);
  gain.gain.setValueAtTime(0, when);
  gain.gain.linearRampToValueAtTime(0.22, when + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0008, when + 0.07);
  osc.connect(gain);
  gain.connect(context.destination);
  osc.start(when);
  osc.stop(when + 0.08);
  activeNodes.push({ osc, gain });
}

/** Immediately silences whatever clip is currently playing (if any) and notifies its listener. */
export function stopSpeedClip(): void {
  if (sharedContext) {
    const now = sharedContext.currentTime;
    for (const { osc, gain } of activeNodes) {
      try {
        gain.gain.cancelScheduledValues(now);
        gain.gain.setValueAtTime(0, now);
        osc.stop(now);
      } catch {
        // already stopped
      }
    }
  }
  activeNodes = [];
  const cb = activeOnStop;
  activeOnStop = null;
  cb?.();
}

/**
 * Plays a short synthesized tick pattern standing in for footstep cadence at the given speed(s).
 * Multiple distinct speeds share the clip's duration in back-to-back segments so a conditional
 * ghost's slow/fast states can both be heard within one clip. Starting a new clip (or calling
 * `stopSpeedClip`) cuts off whatever was playing before, and `onStop` fires either way — on
 * natural completion or on interruption — so callers can keep a "currently playing" UI in sync.
 */
export function playSpeedClip(speedsMs: number[], durationSec = 5, onStop?: () => void): void {
  stopSpeedClip();

  const context = getContext();
  if (!context) {
    onStop?.();
    return;
  }

  const segments = Array.from(new Set(speedsMs.filter((s) => s > 0)));
  if (segments.length === 0) segments.push(1.7);

  const gap = 0.3;
  const segDuration = Math.max(0.5, (durationSec - gap * (segments.length - 1)) / segments.length);

  let cursor = context.currentTime + 0.05;
  for (const speed of segments) {
    const interval = 60 / speedToBpm(speed);
    const segEnd = cursor + segDuration;
    for (let t = cursor; t < segEnd; t += interval) {
      scheduleTick(context, t);
    }
    cursor = segEnd + gap;
  }

  activeOnStop = onStop ?? null;
  window.setTimeout(() => {
    if (activeOnStop === (onStop ?? null)) {
      activeNodes = [];
      activeOnStop = null;
      onStop?.();
    }
  }, durationSec * 1000 + 100);
}
