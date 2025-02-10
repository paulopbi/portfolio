"use client";
import { Code, Download } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import HeroImage from "@/assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative flex flex-col items-center justify-center gap-8 overflow-clip bg-gradient-to-b from-[#081333] to-[#000004] px-4 py-24"
    >
      <div className="container">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 md:max-w-[1000px] lg:flex-row lg:justify-between lg:gap-12">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              translateY: -50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
            }}
            transition={{ ease: "circInOut" }}
            className="z-20 mx-auto flex h-[260px] w-[260px] items-center justify-center overflow-clip rounded-full border-2 border-white/80 md:h-[380px] md:w-[380px]"
          >
            <Image
              src={HeroImage}
              alt="Minha foto"
              width={800}
              height={800}
              className="z-25 h-full w-full object-cover"
              priority
            />
          </motion.div>
          <article className="z-20">
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.5,
                translateY: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateY: 0,
              }}
              transition={{ ease: "circInOut" }}
              className="title-gradient mb-4 text-5xl font-bold tracking-tighter text-transparent md:text-6xl md:leading-[60px]"
            >
              Paulo Victor Silva Rosa
            </motion.h1>
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.5,
                translateY: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateY: 0,
              }}
              transition={{ duration: 0.5, ease: "circInOut", delay: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 text-lg font-normal text-white/90 md:text-2xl"
            >
              Frontend Developer{" "}
              <Code color="rgb(255 255 255 / 0.9)" size={19} />
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                scale: 0.5,
                translateY: -50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateY: 0,
              }}
              transition={{ duration: 0.5, ease: "circInOut", delay: 0.8 }}
              className="mb-6 max-w-[60ch] text-base font-normal text-white/80 md:text-lg"
            >
              Sou formado em{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> e
              atualmente moro no <strong>Rio de Janeiro</strong>.
              <br /> <br />
              Tenho experiência em desenvolver projetos completos, desde o
              design de interfaces intuitivas e eficientes até a programação,
              sempre focado em oferecer experiências visuais envolventes e de
              alta qualidade. <br />
              Minha stack atual inclui{" "}
              <strong>
                Next.js, React, Tailwind CSS, TypeScript, Node.js, Postgre SQL,
                MongoDB
              </strong>{" "}
              além de utilizar o <strong>Figma</strong> para criar designs
              funcionais e modernos.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
                translateY: -20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                translateY: 0,
              }}
              transition={{ duration: 0.5, ease: "circInOut", delay: 1.2 }}
              className="mb-5 flex gap-5"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, rotate: 3 }}
                href="/paulo-curriculo-frontend.pdf"
                download
                className="btn-primary flex items-center justify-between gap-2 px-8 py-2"
              >
                <Download size={20} color="#fff" />
                Curriculo
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, rotate: 3 }}
                href="#contato"
                className="btn-secondary px-8 py-2"
              >
                Contato
              </motion.a>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
}
