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

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-20 flex h-[70px] w-full items-center justify-center p-4 backdrop-blur-2xl">
        <nav className="container inline-flex justify-between">
          {/* left side logo */}
          <h2 className="text-brand text-md font-medium">
            <Link href="/">Paulo Victor</Link>
          </h2>

          {/* right side menu */}
          <div className="z-20">
            <DropdownMenu>
              <DropdownMenuTrigger className="cursor-pointer">
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/">Ínicio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/projetos">Projetos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/experiencias">Experiencias</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link href="/contato">Contato</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>
      <div className="z-20 rounded-lg p-4">
        <ScrollProgress />
      </div>
    </>
  )
}

export default Navbar
