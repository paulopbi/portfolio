"use client"
import Image from "next/image"
import React from "react"
import HeroImage from "@/assets/images/hero.jpg"
import RotatingText from "@/components/ui/reactbits/text/RotatingText/RotationgText"
import { rotatingTextValues } from "@/constants"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/magicui/particles"

const Hero = () => {
  return (
    <section className="relative min-h-[400px] w-full overflow-hidden">
      {/* magic ui particle effect */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        ease={90}
        refresh
      />

      <section className="container mx-auto mt-10 flex flex-col items-center justify-center gap-8 md:justify-around lg:flex-row">
        {/* left side */}
        <div className="z-10 order-2 col-span-2 max-w-[500px] lg:order-1 lg:max-w-full">
          <span className="text-muted text-sm font-light">Olá mundo 👋🏾</span>
          <h1 className="mt-1 text-4xl font-bold text-pretty break-words capitalize xl:text-5xl">
            Sou Um Desenvolvedor{" "}
            <RotatingText
              texts={rotatingTextValues}
              mainClassName="w-fit px-2 py-4 bg-brand-dark text-brand overflow-hidden justify-center rounded-md"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>

          <p className="text-muted mt-4 text-base font-light text-balance md:mb-0">
            Me chamo Paulo Victor Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Cumque fugiat asperiores eveniet fugit recusandae
            natus nemo quisquam officiis, aliquid doloremque animi ipsam odit,
            voluptate vero repellat minus commodi mollitia eos.
          </p>

          <Button asChild className="mt-4">
            <a
              href="https://docs.google.com/document/d/1I8u6CNssCadMcUNyQW4P8sCbYHqC-AUg/edit?usp=sharing&ouid=113949315255905802728&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              Meu currículo
            </a>
          </Button>
        </div>

        {/* right side */}
        <Image
          src={HeroImage}
          width={500}
          height={500}
          alt="Minha foto"
          className="z-10 block aspect-square h-[400px] w-[400px] rounded-3xl border-4 border-white object-cover object-center lg:order-2"
        />
      </section>
    </section>
  )
}

export default Hero
