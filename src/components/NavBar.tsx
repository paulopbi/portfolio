"use client";
import Logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import { Github, Linkedin, MenuIcon, X } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function CloseOnClick() {
    setIsOpenMenu(false);
  }
  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full overflow-hidden py-5 backdrop-blur-sm transition-all duration-75 ${isOpenMenu ? "h-full bg-slate-950/95" : "h-auto"}`}
    >
      <nav
        className={
          "container relative mx-auto flex items-center justify-between px-4"
        }
      >
        <div>
          <Image src={Logo} alt="Logo" />
        </div>

        <ul
          className={`items-center gap-4 md:flex ${isOpenMenu ? "absolute top-[30vh] flex h-full w-full flex-col items-center justify-center" : "hidden"}`}
        >
          <li>
            <a href="#sobre" className="shadow-xl" onClick={CloseOnClick}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="shadow-xl" onClick={CloseOnClick}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#" className="shadow-xl" onClick={CloseOnClick}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#" className="shadow-xl" onClick={CloseOnClick}>
              Contato
            </a>
          </li>
        </ul>

        <div
          className={`md:flex md:items-center md:gap-4 ${isOpenMenu ? "absolute top-[50vh] flex w-full items-center justify-center gap-6" : "hidden"}`}
        >
          <a href="#" className="shadow-xl" onClick={CloseOnClick}>
            <Linkedin />
          </a>
          <a href="#" className="shadow-xl" onClick={CloseOnClick}>
            <Github />
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? <X /> : <MenuIcon />}
        </button>
      </nav>
    </header>
  );
}
