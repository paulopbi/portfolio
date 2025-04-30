export const highlightTag = (tags: string) => {
  const normalizeString = tags.trim().toLowerCase()

  const shouldHighlight =
    normalizeString.includes("next js") ||
    normalizeString.includes("react js") ||
    normalizeString.includes("ui design")
  const textHighlightClassName =
    "inline-block rounded-full border border-white/20 bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] [background-size:200%] bg-clip-text px-2.5 py-1.5 text-sm leading-none font-bold tracking-wide text-transparent capitalize"
  return shouldHighlight ? textHighlightClassName : "badge-style"
}
