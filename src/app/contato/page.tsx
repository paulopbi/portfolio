import NavBar from "@/components/ui/navbar"
import Contact from "@/sections/Contact"

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <section className="relative z-10 container flex min-h-dvh flex-col items-center justify-center">
        <Contact />
      </section>
    </>
  )
}

export default ContactPage
