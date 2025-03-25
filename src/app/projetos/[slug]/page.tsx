import React from "react"
import DetailedProjectInfo from "@/components/detailed-project"
import { projectInfo } from "@/constants/projectConstants"

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
    return <DetailedProjectInfo data={filteredProjectData} />

  if (!filteredProjectData) return <p>Não encontrado</p>
}

export default ProjectPage
