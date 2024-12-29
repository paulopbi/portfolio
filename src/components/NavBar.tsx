"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, MenuIcon, X } from "lucide-react";
import Logo from "@/assets/svg/logo.svg";
import Image from "next/image";

export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function CloseOnClick() {
    setIsOpenMenu(false);
  }
  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full overflow-hidden px-4 py-5 backdrop-blur-sm transition-all duration-75 ${isOpenMenu ? "h-full bg-slate-950/95" : "h-auto"}`}
    >
      <nav
        className={
          "container relative mx-auto flex items-center justify-between px-4"
        }
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ delay: 0, ease: "easeInOut" }}
        >
          <Image src={Logo} alt="Logo" />
        </motion.div>

        <ul
          className={`items-center gap-4 md:flex ${isOpenMenu ? "absolute top-[30vh] flex h-full w-full flex-col items-center justify-center" : "hidden"}`}
        >
          <motion.li
            initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 0.2, ease: "easeInOut" }}
          >
            <a href="#sobre" className="link shadow-xl" onClick={CloseOnClick}>
              Sobre
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut" }}
          >
            <a
              href="#tecnologias"
              className="link shadow-xl"
              onClick={CloseOnClick}
            >
              Tecnologias
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 0.6, ease: "easeInOut" }}
          >
            <a
              href="#projetos"
              className="link shadow-xl"
              onClick={CloseOnClick}
            >
              Projetos
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 0.8, ease: "easeInOut" }}
          >
            <a
              href="#educacao"
              className="link shadow-xl"
              onClick={CloseOnClick}
            >
              Educação
            </a>
          </motion.li>
        </ul>

        <div
          className={`md:flex md:items-center md:gap-4 ${isOpenMenu ? "absolute top-[50vh] flex w-full items-center justify-center gap-6" : "hidden"}`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 1, ease: "easeInOut" }}
          >
            <a
              href="https://www.linkedin.com/in/paulopbi/"
              target="_blank"
              rel="noreferrer"
              className="link shadow-xl"
              onClick={CloseOnClick}
            >
              <Linkedin />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, translateY: -20 }}
            animate={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ delay: 1.2, ease: "easeInOut" }}
          >
            <a
              href="https://github.com/paulopbi"
              target="_blank"
              rel="noreferrer"
              className="link shadow-xl"
              onClick={CloseOnClick}
            >
              <Github />
            </a>
          </motion.div>
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
