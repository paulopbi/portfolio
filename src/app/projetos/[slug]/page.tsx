import React from "react"
import DetailedProjectInfo from "@/app/projetos/_components/detailed-project"
import Footer from "@/components/ui/footer"
import NavBar from "@/components/ui/navbar"
import NotFound from "@/app/not-found"
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
  const projectData = allProjects.filter((project) => project.slug === slug)
  const emptyArray = 0

  if (projectData.length === emptyArray)
    return (
      <>
        <NavBar />
        <NotFound titleMessage="Não foi possível encontrar este projeto, tente novamente com outro nome." />
        <Footer />
      </>
    )

  if (projectData)
    return (
      <>
        <NavBar />
        <DetailedProjectInfo data={projectData} />
        <Footer />
      </>
    )
}

export default DynamicProjectPage
