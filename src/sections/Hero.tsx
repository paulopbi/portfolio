"use client"
import Image from "next/image"
import React from "react"
import HeroImage from "../../public/images/hero.jpg"
import RotatingText from "@/components/ui/blocks/text/RotatingText/RotationgText"

import AnimatedContent from "@/components/ui/blocks/animations/AnimatedContent/AnimatedContent"

// TODO: consertar o "animate content" pois se ele ficar para fora, irá renderizar errado

const Hero = () => {
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      config={{ tension: 80, friction: 20 }}
      initialOpacity={0}
      animateOpacity
      scale={1.1}
      delay={200}
      threshold={0.5}
    >
      <section className="container my-16 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around">
        <div className="order-2 max-w-[500px] flex-1 md:order-1">
          <span className="text-muted-opacity mb-2 text-sm font-light">
            Olá me chamo Paulo Victor
          </span>
          <h1 className="mb-4 text-4xl font-bold text-pretty break-words capitalize xl:text-7xl">
            Sou Um Desenvolvedor{" "}
            <span className="text-brand">
              <RotatingText
                texts={[
                  "Frontend",
                  "React",
                  "Next JS",
                  "Typescript",
                  "Node JS",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-brand text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>

          <p className="text-muted-opacity mb-4 text-base font-light text-balance md:mb-0">
            Sou formado em Análise e Desenvolvimento de Sistemas e atualmente
            moro no Rio de Janeiro. Tenho experiência em desenvolver projetos
            completos, desde o design de interfaces intuitivas e eficientes até
            a programação, sempre focado em oferecer experiências visuais
            envolventes e de alta qualidade. Minha stack atual inclui Next.js,
            React, Tailwind CSS, TypeScript, Node.js, Postgre SQL, MongoDB além
            de utilizar o Figma para criar designs funcionais e modernos.
          </p>

          <div className="mt-4">
            <a href="#currcilo" className="btn primary">
              Curriculo
            </a>
            <a href="#contato" className="btn ghost ml-4">
              Contato
            </a>
          </div>
        </div>

        <div className="order-1 mx-auto h-[300px] w-[300px] flex-1 overflow-hidden rounded-full border">
          <Image
            src={HeroImage}
            width={300}
            height={300}
            alt="Minha foto"
            className="h-full w-full object-cover object-bottom"
          />
        </div>
      </section>
    </AnimatedContent>
  )
}

export default Hero
