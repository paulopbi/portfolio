import React from "react"
import DetailedProjectInfo from "@/components/detailed-project"
import Footer from "@/components/ui/footer"
import NavBar from "@/components/ui/navbar"
import { allProjects } from "@/constants/projectConstants"

interface PageParams {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params
  const clearProjectName = slug.trim().replaceAll("-", " ")
  return {
    title: `Paulo Victor | ${clearProjectName}`,
    description: `Projeto '${clearProjectName}' feito pelo programador Paulo Victor.`,
  }
}

const DynamicProjectPage = async ({
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
        <NavBar />
        <DetailedProjectInfo data={filteredProjectData} />
        <Footer />
      </>
    )

  if (!filteredProjectData) return <p>Não encontrado</p>
}

export default DynamicProjectPage
