"use client";

import { playSpeedClip, stopSpeedClip } from "@/lib/speedAudio";
import { Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SpeedClipButtonProps {
  /** m/s value(s) this clip should represent — pass one number for a single condition row. */
  speed: number;
  durationSec?: number;
}

/** Plays a short synthesized tick pattern approximating this hunt speed's footstep cadence — not real game audio. */
export function SpeedClipButton({ speed, durationSec = 5 }: SpeedClipButtonProps) {
  const [playing, setPlaying] = useState(false);
  const playingRef = useRef(playing);

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  // Stops this clip if the button unmounts mid-playback — e.g. the ghost overlay closes.
  useEffect(() => {
    return () => {
      if (playingRef.current) stopSpeedClip();
    };
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (playing) return;
    setPlaying(true);
    // Starting a new clip automatically interrupts whatever else was playing.
    playSpeedClip([speed], durationSec, () => setPlaying(false));
  }

  return (
    <button
      onClick={handleClick}
      disabled={playing}
      title={`Play an approximate footstep-cadence clip for ${speed} m/s (synthesized, not in-game audio)`}
      className="flex shrink-0 items-center gap-1 rounded-md p-1 text-muted transition hover:bg-surface-2 hover:text-foreground disabled:opacity-60"
    >
      <Volume2 className={playing ? "size-3.5 animate-pulse text-accent" : "size-3.5"} />
    </button>
  );
}
