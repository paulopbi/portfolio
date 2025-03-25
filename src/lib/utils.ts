import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const highlightTags = (tags: string) => {
  const shouldHighlight =
    tags.includes("next") ||
    tags.includes("react") ||
    tags.includes("ui design")
  const textHighlightClassName =
    "inline-block rounded-full border border-white/40 bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] [background-size:200%] bg-clip-text px-2.5 py-1.5 text-sm leading-none font-bold tracking-wide text-transparent capitalize"
  return shouldHighlight ? textHighlightClassName : "badge-style"
}
