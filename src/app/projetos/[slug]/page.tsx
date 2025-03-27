import React from "react"
import DetailedProjectInfo from "@/components/detailed-project"
import Footer from "../../../components/footer"
import NavBar from "@/components/nav-bar"
import { projectInfo } from "@/constants/projectConstants"

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
