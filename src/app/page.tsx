import Hero from "@/sections/Hero"
import Skills from "@/sections/Skills"
import Education from "@/sections/Education"
import Projects from "@/sections/Projects"
import Experience from "@/sections/Experience"
import ProjectsText from "@/sections/ProjectsText"
import Services from "@/sections/Services"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Education />
      <ProjectsText />
      <Projects />
    </main>
  )
}
