import React from "react"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/assets/images/picture_hero.jpg"
import { rotatingTextWords } from "@/constants"
import { Button } from "@/components/ui/button"
import { WordRotate } from "@/components/magicui/word-rotate"
import { ArrowUpRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="container my-8 flex min-h-[550px] w-full flex-col items-center justify-center gap-6 lg:flex-row">
      {/* left side */}
      <div className="z-10 order-2 col-span-2 flex-1 lg:order-1 lg:max-w-full">
        {/* caption and rotating title */}
        <div>
          <span className="text-xs font-normal text-white/20 italic">
            De linhas de código a experiências incríveis.
          </span>
          <h1 className="title mt-1 max-w-[18ch] text-white">
            Transformando ideias em interfaces incríveis utilizando
            <WordRotate
              className="title"
              words={rotatingTextWords}
              duration={3000}
            />
          </h1>
        </div>

        {/* description */}
        <div className="mt-2">
          <p className="description max-w-[50ch]">
            Olá mundo! Me chamo <strong>Paulo Victor Silva Rosa</strong>, sou um{" "}
            <strong>desenvolvedor frontend</strong>. <br />
            <br />
            Minha jornada começou &apos;quebrando a cabeça com CSS&apos; e hoje
            me especializo em <strong>Next.js, React e TypeScript</strong> para
            criar{" "}
            <strong>
              aplicações que não só impressionam, mas também entregam resultados
            </strong>
            .
          </p>

          <p className="description mt-2 max-w-[300px]">
            Vamos construir algo <strong>incrível juntos?</strong> 👷🏾‍♂️
          </p>
        </div>

        {/* buttons */}
        <div className="mt-4">
          <Button asChild variant="default">
            <a
              href="https://docs.google.com/document/d/1WPWSy1veT0A_f8DJXWYsBiMZ0oONBIzZ7yAlI3Krzxg/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-2"
            >
              Currículo <ArrowUpRight />
            </a>
          </Button>

          <Button asChild className="ml-4" variant="outline">
            <Link href="/projetos">Projetos</Link>
          </Button>
        </div>
      </div>

      {/* right side */}
      <div className="z-10 flex-1 overflow-hidden lg:order-2">
        <Image
          src={HeroImage}
          width={500}
          height={500}
          alt="Foto do programador Paulo Victor"
          className="ml-auto aspect-square h-[400px] w-[400px] rounded-4xl border-2 border-white/20 object-cover object-center"
        />
      </div>
    </section>
  )
}

export default Hero
