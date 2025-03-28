import { Particles } from "@/components/magicui/particles"
import NavBar from "@/components/ui/navbar"
import Contact from "@/sections/Contact"

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <Particles
        className="absolute top-0 left-0 z-0 size-full"
        quantity={160}
        ease={2000}
        color="#ccc"
        refresh
      />
      <section className="relative z-10 container flex min-h-full flex-col items-center justify-center">
        <Contact />
      </section>
    </>
  )
}

export default ContactPage
