import type { Metadata } from "next"
import { SeoKeyWords } from "@/constants"

export const metadata: Metadata = {
  title: "Paulo Victor - Contato",
  description: "Portfolio do programador Paulo Victor Silva Rosa",
  authors: {
    name: "Paulo Victor Silva Rosa",
  },
  keywords: SeoKeyWords,
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
