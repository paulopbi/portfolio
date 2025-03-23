import React from "react"
import DetailedProjectInfo from "@/components/detailed-project"
import { projectsContentInfo } from "@/constants/project/index"

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const filteredProjectData = projectsContentInfo.filter(
    (project) => project.slug === slug,
  )

  if (filteredProjectData)
    return <DetailedProjectInfo data={filteredProjectData} />

  if (!filteredProjectData) return <p>Não encontrado</p>
}

export default ProjectPage
