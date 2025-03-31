import NavBar from "@/components/ui/navbar"
import Contact from "@/sections/Contact"
import { Particles } from "@/components/magicui/particles"
import { Metadata } from "next"
import { SeoKeyWords } from "@/constants"

export const metadata: Metadata = {
  title: "Paulo Victor | Contato",
  description:
    "Entre em contato comigo! Veja meus links para redes sociais como LinkedIn, GitHub, Instagram e mais. Conecte-se e conheça meu trabalho no portfólio.",
  keywords: SeoKeyWords,
  authors: [
    {
      name: "Paulo Victor Silva Rosa",
      url: "https://paulo-victor-portfolio.vercel.app/",
    },
  ],
  alternates: {
    canonical: "https://paulo-victor-portfolio.vercel.app/",
  },
  openGraph: {
    title: "Paulo Victor - Contato | Portfólio Profissional",
    description:
      "Confira meus links para LinkedIn, GitHub, Instagram e mais no meu portfólio profissional.",
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

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Paulo Victor - Contato | Portfólio Profissional",
    description:
      "Confira meus links para LinkedIn, GitHub, Instagram e mais no meu portfólio profissional.",
    images: {
      url: "https://paulo-victor-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture_hero.06a8f87f.jpg&w=640&q=75",
      alt: "Paulo Victor Silva Rosa Portfólio",
    },
  },
}

const ContactPage = () => {
  return (
    <>
      <Particles
        className="absolute inset-0 z-0 size-full"
        quantity={160}
        ease={2000}
        refresh
      />
      <NavBar />
      <main className="relative z-10 container flex min-h-full flex-col items-center justify-center">
        <Contact />
      </main>
    </>
  )
}

export default ContactPage
