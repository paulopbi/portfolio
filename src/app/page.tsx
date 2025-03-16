"use client"
import Hero from "@/sections/Hero"
import Skills from "@/sections/Skills"
import Education from "@/sections/Education"
import Projects from "@/sections/Projects"
import Experience from "@/sections/Experience"
import About from "@/sections/About"

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Education />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
