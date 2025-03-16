"use client"
import Image from "next/image"
import USAFlag from "@/assets/images/usa_flag.png"
import { motion } from "framer-motion"
import { IoMenu } from "react-icons/io5"
import { ScrollProgress } from "./magicui/scroll-progress"

const Navbar = () => {
  return (
    <>
      <motion.header
        className="sticky top-0 left-0 z-99 w-full p-4 backdrop-blur-2xl"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="container flex items-center justify-between">
          <div className="text-brand text-md font-medium">Logo</div>

          <nav>
            <ul className="text-muted flex items-center gap-4 font-light">
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
        </div>
      </motion.header>
      <div className="z-10 rounded-lg p-4">
        <ScrollProgress className="top-[65px]" />
      </div>
    </>
  )
}

export default Navbar
