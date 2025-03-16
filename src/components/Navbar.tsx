"use client"
import Image from "next/image"
import USAFlag from "@/assets/images/usa_flag.png"
import { motion } from "framer-motion"
import { IoMenu } from "react-icons/io5"

const Navbar = () => {
  return (
    <motion.header
      className="sticky top-0 left-0 z-10 w-full bg-transparent p-4 backdrop-blur-xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav className="container flex items-center justify-between">
        <div className="font-regular text-brand text-2xl">Paulo Victor</div>

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
      </nav>
    </motion.header>
  )
}

export default Navbar
