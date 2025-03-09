import Image from "next/image"
import { IoMenu } from "react-icons/io5"
import USAFlag from "../../public/icons/usa-flag.png"

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full rounded-b-2xl bg-transparent p-4">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between">
        <div className="font-regular text-2xl text-white">Paulo Victor</div>

        <nav>
          <ul className="flex items-center gap-4 font-normal text-white/80">
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Educação</li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div>
            <Image
              src={USAFlag}
              width={32}
              height={32}
              alt="English language"
            />
          </div>
          <IoMenu size={24} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
