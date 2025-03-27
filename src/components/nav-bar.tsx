"use client"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollProgress } from "./magicui/scroll-progress"
import { Menu } from "lucide-react"

const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-20 flex h-[70px] w-full items-center justify-center p-4 backdrop-blur-2xl">
        <nav className="container inline-flex justify-between">
          {/* left side logo */}
          <h2 className="text-brand font-[Bricolage_Grotesque] text-base font-bold tracking-tight duration-75 ease-in hover:tracking-wide md:text-lg">
            <Link href="/">Paulo</Link>
          </h2>

          {/* right side menu */}
          <div className="z-20">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/">Inicio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/projetos">Projetos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/contato">Contato</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
      {/* top bar with scroll progress */}
      <div className="z-20 p-4">
        <ScrollProgress />
      </div>
    </>
  )
}

export default NavBar
