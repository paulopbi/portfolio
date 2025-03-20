import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const highlightTags = (tags: string) => {
  const shouldHighlight =
    tags.includes("next") ||
    tags.includes("react") ||
    tags.includes("UI Design")
  return shouldHighlight
    ? "inline-block border border-white/40 rounded-full px-2.5 py-1.5 text-sm leading-none font-bold tracking-wide bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] bg-clip-text text-transparent [background-size:200%]"
    : "inline-block border border-white/40 rounded-full px-2.5 py-1.5 text-sm text-muted leading-none font-medium tracking-wide"
}
