import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { geistSansFont } from "@/utils/fonts"
import { Particles } from "@/components/magicui/particles"
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
        className={`${geistSansFont.className} bg-background relative text-white antialiased`}
      >
        <Particles
          className="absolute inset-0 z-0 min-h-full min-w-full"
          quantity={290}
          ease={100}
          color="#ccc"
          refresh
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
