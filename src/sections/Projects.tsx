import Link from "next/link"
import CardProject from "@/components/ui/card-project"
import { Button } from "@/components/ui/button"
import { allProjects } from "@/constants/projectConstants"

const Projects = () => {
  const showFourProjects = allProjects.filter((project) => project.main)
  const totalProjectsNumber = allProjects.length
  return (
    <section className="container my-18">
      {/* projects */}
      <div className="relative mt-8 grid grid-cols-1 place-content-center gap-x-20 gap-y-10 md:grid-cols-2">
        {showFourProjects.map((project) => (
          <CardProject
            key={project.title}
            imageSrc={project.image_url}
            title={project.title}
            skills={project.tags}
            hrefTo={`/projetos/${project.slug}`}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center">
        <Button className="cursor-pointer" asChild variant="outline">
          <Link href="/projetos">
            Ver todos os {totalProjectsNumber} projetos
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Projects
