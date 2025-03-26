import React from "react"
import DetailedProjectInfo from "@/components/detailed-project"
import { projectInfo } from "@/constants/projectConstants"
import Footer from "@/components/footer"

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const filteredProjectData = projectInfo.filter(
    (project) => project.slug === slug,
  )

  if (filteredProjectData)
    return (
      <>
        <DetailedProjectInfo data={filteredProjectData} />
        <Footer />
      </>
    )

  if (!filteredProjectData) return <p>Não encontrado</p>
}

export default ProjectPage
