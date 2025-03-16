import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mt-16 flex w-full flex-col items-center justify-between gap-4 py-6 md:flex-row">
      <p className="text-sm font-normal">
        &copy; {currentYear} Paulo Victor Silva. Todos os direitos reservados.
      </p>
      <div className="inline-flex gap-2">
        <Github size={24} />
        <Linkedin size={24} />
        <Mail size={24} />
      </div>
    </footer>
  )
}

export default Footer
