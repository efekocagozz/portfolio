"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "article" | "section";
}

export default function GlassCard({
  children,
  className,
  hover = true,
  padding = "md",
  as: Tag = "div",
}: GlassCardProps) {
  const base =
    "relative rounded-xl border border-white/8 bg-white/[0.03] backdrop-blur-sm overflow-hidden";

  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = cn(base, paddings[padding], className);

  if (!hover) {
    return <Tag className={classes}>{children}</Tag>;
  }

  return (
    <motion.div
      className={classes}
      whileHover={{
        borderColor: "rgba(99,102,241,0.3)",
        backgroundColor: "rgba(99,102,241,0.04)",
      }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
