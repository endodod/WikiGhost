import { alwaysObjective, objectivePool } from "@/data/objectives";
import { CheckCircle2 } from "lucide-react";

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-sm font-bold uppercase tracking-wide text-accent">{title}</h2>
      {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
    </div>
  );
}

export function ObjectivesView() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-4 sm:px-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-foreground">Objectives Wiki</h1>
        <p className="text-sm text-muted">
          Every contract has 4 objectives: &ldquo;Find the correct ghost type&rdquo; is always present, plus 3 more
          chosen at random from the pool below. Objectives are optional (skipping them just forfeits money/XP) and
          can be done in any order — some need equipment beyond the starter loadout. Looking for the Perfect
          Investigation bonus? That&rsquo;s now its own guide in the Guides tab.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Always Present" />
        <div className="flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/5 p-4">
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-foreground">{alwaysObjective.title}</h3>
            <p className="text-sm text-foreground/90">{alwaysObjective.condition}</p>
            {alwaysObjective.how && <p className="text-xs text-muted">{alwaysObjective.how}</p>}
            <span className="mt-1 w-fit rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent">
              {alwaysObjective.reward}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <SectionHeading title="Random Pool" subtitle="3 of these are picked per contract." />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {objectivePool.map((obj) => (
            <div key={obj.id} className="flex flex-col gap-1.5 rounded-xl border border-surface-border bg-surface p-3.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-foreground">{obj.title}</h3>
                <span className="shrink-0 rounded-full bg-surface-2 px-2 py-0.5 text-[11px] font-semibold text-muted ring-1 ring-surface-border">
                  {obj.reward}
                </span>
              </div>
              <p className="text-sm text-foreground/90">{obj.condition}</p>
              {obj.how && <p className="text-xs text-muted">{obj.how}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
