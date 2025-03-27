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

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="relative z-10">
        <Particles
          className="absolute inset-0 z-0 h-full w-full"
          quantity={290}
          ease={120}
          color="#ccc"
          refresh
        />
        <main>
          <Hero />
          <Services />
          <Skills />
          <Experience />
          <Education />
          <ProjectsText />
          <Projects />
        </main>
      </section>
      <Footer />
    </>
  )
}
