"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import HeroImage from "@/assets/images/public/my_picture.jpg"
import { rotatingTextWords } from "@/constants"
import { Button } from "@/components/ui/button"
import { BricolageGrotesqueFont } from "@/utils/fonts"
import { WordRotate } from "@/components/magicui/word-rotate"
import { ArrowUpRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="container my-8 flex min-h-[550px] w-full flex-col items-center justify-center gap-6 overflow-hidden md:justify-around lg:flex-row">
      {/* left side */}
      <div className="z-10 order-2 col-span-2 max-w-[600px] flex-1 lg:order-1 lg:max-w-full">
        {/* caption and rotating title */}
        <div>
          <span className="text-xs font-normal text-white/20 italic">
            Bem-vindo ao meu universo de pixels e possibilidades!
          </span>
          <h1
            className={`${BricolageGrotesqueFont.className} title mt-1 text-white`}
          >
            Transformando ideias em interfaces incríveis com
            <WordRotate
              className={`title w-fit justify-center overflow-hidden rounded-md ${BricolageGrotesqueFont.className}`}
              words={rotatingTextWords}
            />
          </h1>
        </div>

        {/* description */}
        <div className="mt-2">
          <p className="description">
            Olá mundo! Me chamo <strong>Paulo Victor Silva Rosa</strong>, sou um{" "}
            <strong>desenvolvedor frontend</strong>.{" "}
          </p>

          <p className="description mt-2">
            Se você procura alguém que entende o poder de uma boa
            <strong>interface</strong> e sabe como{" "}
            <strong>transformar problemas em soluções elegantes</strong>, você
            veio ao lugar certo.{" "}
          </p>

          <p className="description mt-2">
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
          className="aspect-square h-[400px] w-[400px] rounded-2xl border object-cover object-center"
        />
      </div>
    </section>
  )
}

export default Hero
