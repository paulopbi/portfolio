import Logo from "@/assets/svg/logo.svg";
import { Github, Linkedin, MenuIcon } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className="fixed left-0 top-0 z-10 w-full py-5 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>

        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Tecnologias</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#">
            <Linkedin />
          </a>
          <a href="#">
            <Github />
          </a>
        </div>

        <button className="md:hidden">
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}
