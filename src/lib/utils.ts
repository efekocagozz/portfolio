import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  projects: "projects",
  contact: "contact",
} as const;

export const CV_PATH = "/Efe-Kodzhagioz-CV.pdf";
