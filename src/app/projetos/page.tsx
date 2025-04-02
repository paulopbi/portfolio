import React from "react"
import CardProject from "@/components/ui/card-project"
import Footer from "@/components/ui/footer"
import NavBar from "@/components/ui/navbar"
import HeadingTitle from "@/components/ui/heading-title"
import { allProjects } from "@/constants/projectConstants"
import { Metadata } from "next"
import { SeoKeyWords } from "@/constants"
import { Particles } from "@/components/magicui/particles"

export const metadata: Metadata = {
  title: "Paulo Victor | Projetos",
  description:
    "Explore meus projetos como desenvolvedor frontend! Veja meu portfólio com trabalhos em React, Next.js, Typescript e mais. Conheça minhas habilidades e soluções criativas.",
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
    title: "Paulo Victor - Projetos | Portfólio Profissional",
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

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Paulo Victor - Projetos | Portfólio Profissional",
    description:
      "Explore meus projetos como desenvolvedor frontend! Veja meu portfólio com trabalhos em React, Next.js, Typescript e mais. Conheça minhas habilidades e soluções criativas.",
    images: {
      url: "https://paulo-victor-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpicture_hero.06a8f87f.jpg&w=640&q=75",
      alt: "Paulo Victor Silva Rosa Portfólio",
    },
  },
}

const ProjectsPage = () => {
  return (
    <>
      <NavBar />
      <Particles
        className="absolute inset-0 z-0 size-full"
        quantity={160}
        ease={2000}
        refresh
      />
      <section className="relative container my-20">
        <div className="text-center">
          <HeadingTitle title="Todos Os Projetos">
            Aqui estão todos os meus projetos, sinta-se livre para explorar, no
            total são {`${allProjects.length}`} projetos.
          </HeadingTitle>
        </div>

        {/* card content */}
        <div className="mx-auto mt-16 grid min-h-dvh grid-cols-1 place-content-center gap-8 gap-x-20 gap-y-10 md:grid-cols-2">
          {allProjects.map((project) => (
            <CardProject
              key={project.slug}
              title={project.title}
              hrefTo={`/projetos/${project.slug}`}
              imageSrc={project.image_url}
              skills={project.tags}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectsPage
