import { cn } from "@/lib/cn";
import type { LucideIcon } from "lucide-react";

interface BadgeProps {
  label: string;
  title?: string;
  icon?: LucideIcon;
  className: string; // text/bg/ring color pairing
  size?: "sm" | "md";
  dimmed?: boolean;
}

/** Generic colored pill badge (icon + label) used by the non-Phasmophobia game sections. */
export function Badge({ label, title, icon: Icon, className, size = "md", dimmed = false }: BadgeProps) {
  return (
    <span
      title={title ?? label}
      className={cn(
        "inline-flex items-center gap-1 rounded-full ring-1 font-medium",
        className,
        size === "sm" ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
        dimmed && "opacity-40 grayscale"
      )}
    >
      {Icon && <Icon className={size === "sm" ? "size-3" : "size-3.5"} strokeWidth={2.25} />}
      {label}
    </span>
  );
}
