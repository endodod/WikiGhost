import { AppShell } from "@/components/AppShell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phasmophobia",
  description:
    "Phasmophobia ghost wiki and mid-game elimination tool. Identify which of the 30 ghosts you're facing in seconds.",
};

export default function PhasmophobiaPage() {
  return <AppShell />;
}
