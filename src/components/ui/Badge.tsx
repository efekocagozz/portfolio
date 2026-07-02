import { cn } from "@/lib/utils";

interface BadgeProps {
  children: string;
  variant?: "default" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const base = "inline-flex items-center px-2 py-0.5 rounded text-xs font-mono transition-colors duration-150";

  const variants = {
    default: "bg-white/[0.05] text-zinc-400 border border-white/[0.07]",
    outline: "bg-transparent text-zinc-500 border border-white/[0.07] hover:border-white/15 hover:text-zinc-300",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
