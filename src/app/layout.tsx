import "./globals.css"
import type { Metadata } from "next"
import { interSansFont } from "@/utils/fonts"
import { SeoKeyWords } from "@/constants"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  keywords: SeoKeyWords,
  title: "Paulo Victor Silva Rosa | Desenvolvedor Frontend - Portfólio",
  description:
    "Portfólio pessoal de Paulo Victor Silva Rosa, desenvolvedor front-end especializado em React, Next.js, Typescript e Tailwind CSS, nesse portfólio tem todas as suas informações, projetos, links e redes sociais para contato.",
  authors: [
    {
      name: "Paulo Victor Silva Rosa",
      url: "https://paulo-victor-portfolio.vercel.app/",
    },
  ],

  openGraph: {
    title: "Paulo Victor Silva Rosa | Portfólio Profissional",
    description:
      "Explore meus projetos como desenvolvedor frontend! Veja meu portfólio com trabalhos em React, Next.js, Typescript e mais. Conheça minhas habilidades e soluções criativas.",
    url: "https://paulo-victor-portfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://paulo-victor-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture_hero.06a8f87f.jpg&w=640&q=75",
        width: 600,
        height: 600,
        alt: "Imagem de contato do portfólio do Paulo Victor Silva Rosa",
      },
    ],
    siteName: "Paulo Victor Silva Rosa Portfólio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Paulo Victor Silva Rosa | Portfólio Profissional",
    description:
      "Explore meus projetos como desenvolvedor frontend! Veja meu portfólio com trabalhos em React, Next.js, Typescript e mais. Conheça minhas habilidades e soluções criativas.",
    images: {
      url: "https://paulo-victor-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture_hero.06a8f87f.jpg&w=640&q=75",
      alt: "Paulo Victor Silva Rosa Portfólio",
    },
  },
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
