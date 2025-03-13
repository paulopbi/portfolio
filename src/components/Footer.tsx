import { DiGithubBadge } from "react-icons/di"
import { LiaLinkedinIn } from "react-icons/lia"
import { MdAlternateEmail } from "react-icons/md"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="container mt-16 flex w-full flex-col items-center justify-between gap-4 py-6 md:flex-row">
      <p className="text-sm font-normal">
        &copy; {currentYear} Paulo Victor Silva. Todos os direitos reservados.
      </p>
      <div className="inline-flex gap-2">
        <DiGithubBadge size={24} />
        <LiaLinkedinIn size={24} />
        <MdAlternateEmail size={24} />
      </div>
    </footer>
  )
}

export default Footer
