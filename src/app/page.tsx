import Hero from "@/sections/Hero"
import Skills from "@/sections/Skills"
import Education from "@/sections/Education"
import Projects from "@/sections/Projects"
import Experience from "@/sections/Experience"
import ProjectsText from "@/sections/ProjectsText"
import Services from "@/sections/Services"
import Footer from "@/components/ui/footer"
import NavBar from "@/components/ui/navbar"
import { Particles } from "@/components/magicui/particles"

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Particles
        className="absolute inset-0 z-0 h-full w-full"
        quantity={300}
        ease={1200}
        color="#ccc"
        refresh
      />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Education />
        <ProjectsText />
        <Projects />
      </main>

      <Footer />
    </>
  )
}
