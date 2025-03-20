"use client"
import Image from "next/image"
import React from "react"
import HeroImage from "@/assets/images/hero.jpg"
import RotatingText from "@/components/reactbits/rotating-text"
import { rotatingTextValues } from "@/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="container mt-10 flex min-h-[550px] w-full flex-col items-center justify-center gap-6 overflow-hidden md:justify-around lg:flex-row">
      {/* left side */}
      <div className="z-10 order-2 col-span-2 max-w-[500px] lg:order-1 lg:max-w-full">
        <div>
          <span className="text-xs font-normal text-white/15 italic">
            Bem-vindo ao meu universo de pixels e possibilidades! 🚀
          </span>
          <h1 className="mt-1 text-4xl font-bold text-pretty break-words capitalize xl:text-4xl">
            Transformando ideias em interfaces incríveis com
            <RotatingText
              texts={rotatingTextValues}
              mainClassName="w-fit text-brand overflow-hidden justify-center rounded-md"
              staggerFrom={"random"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.028}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
        </div>

        <p className="text-muted mt-4 text-sm font-light text-pretty md:mb-0 md:text-base">
          👋🏾 Olá mundo! Me chamo <strong>Paulo Victor Silva Rosa</strong>, sou
          um <strong>desenvolvedor frontend</strong>.
          <br />
          <br />
          Se você procura alguém que entende o poder de uma boa{" "}
          <strong>interface</strong> e sabe como{" "}
          <strong>transformar problemas em soluções elegantes</strong>, você
          veio ao lugar certo.{" "}
          <strong>Vamos construir algo incrível juntos?</strong>
        </p>

        <div className="mt-4">
          <Button asChild>
            <a
              href="https://docs.google.com/document/d/1I8u6CNssCadMcUNyQW4P8sCbYHqC-AUg/edit?usp=sharing&ouid=113949315255905802728&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              Ver Currículo
            </a>
          </Button>
          <Button asChild className="ml-4" variant="outline">
            <Link href="/contato">Contato</Link>
          </Button>
        </div>
      </div>

      {/* right side */}
      <Image
        src={HeroImage}
        width={500}
        height={500}
        alt="Minha foto"
        className="z-10 block aspect-square h-[400px] w-[400px] rounded-3xl border-2 object-cover object-center lg:order-2"
      />
    </section>
  )
}

export default Hero
