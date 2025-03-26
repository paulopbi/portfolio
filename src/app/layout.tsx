import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import { interSansFont } from "@/utils/fonts"
import { SeoKeyWords } from "@/constants"

export const metadata: Metadata = {
  title: "Paulo Victor Silva Rosa - Desenvolvedor Frontend",
  description:
    "Portfólio pessoal de Paulo Victor Silva Rosa. Um desenvolvedor front-end especializado em React, Next.js e Tailwind CSS.",
  authors: {
    name: "Paulo Victor Silva Rosa",
  },
  icons: {
    icon: "./src/app/favicon.ico",
  },
  keywords: SeoKeyWords,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interSansFont.className} bg-background relative text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
