import type { Metadata } from "next"
import { SeoKeyWords } from "@/constants"

export const metadata: Metadata = {
  title: "Paulo Victor - Contato",
  description: "modificar",
  authors: {
    name: "Paulo Victor Silva Rosa",
  },
  icons: {
    icon: "./src/app/favicon.ico",
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
