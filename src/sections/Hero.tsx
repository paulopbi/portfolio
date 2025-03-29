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
            Bem-vindo ao meu universo de pixels e possibilidades!
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
            <br /> Se{" "}
            <strong>
              você procura alguém que entende o poder de uma boa interface
            </strong>{" "}
            e sabe como{" "}
            <strong>transformar problemas em soluções elegantes</strong>, você
            veio ao lugar certo.{" "}
          </p>

          <p className="description mt-2 max-w-[300px]">
            Vamos construir algo incrível juntos? 👷🏾‍♂️
          </p>
        </div>

        {/* buttons */}
        <div className="mt-4">
          <Button asChild variant="default">
            <a
              href="https://docs.google.com/document/d/1I8u6CNssCadMcUNyQW4P8sCbYHqC-AUg/edit?usp=sharing&ouid=113949315255905802728&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between gap-2"
            >
              Currículo <ArrowUpRight />
            </a>
          </Button>

          <Button asChild className="ml-4" variant="outline">
            <Link href="/contato">Contato</Link>
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
