import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mt-16 flex w-full flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
      <p className="text-sm font-normal">
        &copy; {currentYear} Paulo Victor Silva, Todos os direitos reservados.
      </p>
      <div className="inline-flex gap-2">
        <a href="https://github.com/paulopbi" target="_blank" rel="noreferrer">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/paulopbi/">
          <Linkedin size={24} />
        </a>
        <a href="mailto:paulovictordev@gmail.com">
          <Mail size={24} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
