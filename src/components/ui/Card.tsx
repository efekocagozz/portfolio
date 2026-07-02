import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "article" | "section" | "li";
}

export default function Card({
  children,
  className,
  padding = "md",
  as: Tag = "div",
}: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-5",
    lg: "p-6",
  };

  return (
    <Tag
      className={cn(
        "rounded-lg border border-white/[0.08] bg-transparent",
        paddings[padding],
        className
      )}
    >
      {children}
    </Tag>
  );
}
