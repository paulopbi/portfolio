import React from "react"
import CardProject from "@/components/card-project"
import { projectInfo } from "@/constants/projectConstants"
import { TextAnimate } from "@/components/magicui/text-animate"
import Footer from "../../components/footer"

const ProjectsPage = () => {
  return (
    <>
      <section className="relative container mt-10 mb-20">
        <TextAnimate className="subtitle--heading text-center">
          Todos os Projetos
        </TextAnimate>

        {/* card content */}
        <div className="mx-auto mt-16 grid min-h-dvh grid-cols-1 place-content-center gap-8 gap-x-20 gap-y-10 md:grid-cols-2">
          {projectInfo.map((project) => (
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
