import NavBar from "@/components/ui/navbar"
import Contact from "@/sections/Contact"
import { Particles } from "@/components/magicui/particles"

const ContactPage = () => {
  return (
    <>
      <Particles
        className="absolute inset-0 z-0 size-full"
        quantity={160}
        ease={2000}
        refresh
      />
      <NavBar />
      <main className="relative z-10 container flex min-h-full flex-col items-center justify-center">
        <Contact />
      </main>
    </>
  )
}

export default ContactPage
