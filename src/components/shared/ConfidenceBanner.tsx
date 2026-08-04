import { cn } from "@/lib/cn";
import { AlertTriangle, ShieldCheck, ShieldQuestion } from "lucide-react";

export type Confidence = "high" | "medium" | "low";

const STYLES: Record<Confidence, { icon: typeof ShieldCheck; className: string; label: string }> = {
  high: { icon: ShieldCheck, className: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300", label: "High confidence" },
  medium: { icon: ShieldQuestion, className: "border-amber-500/30 bg-amber-500/10 text-amber-300", label: "Medium confidence" },
  low: { icon: AlertTriangle, className: "border-red-500/30 bg-red-500/10 text-red-300", label: "Low confidence" },
};

interface ConfidenceBannerProps {
  confidence: Confidence;
  children: React.ReactNode;
}

/** Data-freshness/confidence disclaimer banner, shown once at the top of each new game section. */
export function ConfidenceBanner({ confidence, children }: ConfidenceBannerProps) {
  const s = STYLES[confidence];
  const Icon = s.icon;
  return (
    <div className={cn("flex gap-2.5 rounded-xl border px-4 py-3 text-xs leading-relaxed", s.className)}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div>
        <span className="font-semibold">{s.label}.</span> {children}
      </div>
    </div>
  );
}
