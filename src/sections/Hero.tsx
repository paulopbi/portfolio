"use client";
import Image from "next/image";
import { ArrowDown, ArrowDownToLine, Code } from "lucide-react";
import { motion } from "motion/react";
import HeroImage from "@/assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="sobre"
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-clip bg-gradient-to-b from-[#081333] to-[#000004] px-4 py-12 md:py-24"
    >
      <div className="container">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 md:max-w-[1000px] lg:flex-row lg:justify-between lg:gap-12">
          <motion.div
            whileHover={{ scale: 0.9 }}
            className="z-20 mx-auto flex h-[380px] w-[380px] items-center justify-center overflow-clip rounded-full border-2 border-white/80 lg:w-[400]"
          >
            <Image
              src={HeroImage}
              alt="Minha foto"
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </motion.div>
          <article className="z-20">
            <h1 className="title-gradient mb-4 text-5xl font-bold tracking-tighter text-transparent md:text-6xl md:leading-[60px]">
              Paulo Victor Silva Rosa
            </h1>
            <h2 className="mb-4 inline-flex items-center gap-2 text-lg font-normal text-white/90 md:text-2xl">
              Frontend Developer{" "}
              <Code color="rgb(255 255 255 / 0.9)" size={19} />
            </h2>
            <p className="mb-6 max-w-[60ch] text-base font-normal text-white/80 md:text-lg">
              Sou formado em{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong> e
              atualmente moro no <strong>Rio de Janeiro</strong>.
              <br /> <br />
              Tenho experiência em desenvolver projetos completos, desde o
              design de interfaces intuitivas e eficientes até a programação,
              sempre focado em oferecer experiências visuais envolventes e de
              alta qualidade. <br />
              Minha stack atual inclui <strong>Next.js</strong>,{" "}
              <strong>React</strong>, <strong>Tailwind CSS</strong>,{" "}
              <strong>TypeScript</strong>, <strong>Node.js</strong> e{" "}
              <strong>MongoDB</strong> além de utilizar o <strong>Figma</strong>{" "}
              para criar designs funcionais e modernos.
            </p>

            <div className="mb-5 flex gap-5">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, rotate: 2 }}
                href="#"
                className="btn-primary flex items-center justify-between gap-2 px-8 py-2"
              >
                Curriculo
                <ArrowDownToLine size={20} color="#eef2ff" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8, rotate: 3 }}
                href="#"
                className="btn-secondary px-8 py-2"
              >
                Contato
              </motion.a>
            </div>
            <motion.div
              animate={{ translateY: [0, 15], scale: [1, 0.8] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
              }}
              className="inline-flex items-center justify-center gap-1 text-sm font-light opacity-10"
            >
              <ArrowDown size={24} />
            </motion.div>
          </article>
        </div>
      </div>
      {/* circulos desfocados */}
      <motion.div
        animate={{ scale: [1, 1.3], opacity: [0.1, 0.5] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5 }}
        className="absolute -left-10 -top-5 z-0 h-[400px] w-[400px] rounded-full bg-[#071544] opacity-50 blur-[80px] backdrop-grayscale"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0.1, 0.5] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5 }}
        className="bottom-70 absolute -right-10 -top-12 z-0 h-[400px] w-[400px] rounded-full bg-[#1B103A] opacity-50 blur-[50px]"
      ></motion.div>
      <motion.div
        animate={{ scale: [1, 1.3], opacity: [0.1, 0.5] }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 5 }}
        className="bottom-15 absolute -left-10 z-0 h-[400px] w-[400px] rounded-full bg-[#1B103A] opacity-50 blur-[50px] backdrop-grayscale"
      ></motion.div>
    </section>
  );
}
