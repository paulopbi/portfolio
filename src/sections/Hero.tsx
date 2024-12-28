import HeroImage from "@/assets/images/hero.jpg";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-clip bg-gradient-to-b from-[#030922] to-[#000004] px-4 py-10 md:py-24">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 md:max-w-[1000px] lg:flex-row lg:justify-between lg:gap-12">
            <div className="z-20 mx-auto flex h-[380px] w-[380px] items-center justify-center overflow-clip rounded-full lg:w-[400]">
              <Image
                src={HeroImage}
                alt="Minha foto"
                width={1000}
                height={1000}
                className="object-cover"
                priority
              />
            </div>
            <article>
              <h1 className="title-gradient mb-4 text-5xl font-bold tracking-tighter text-transparent md:text-6xl md:leading-[60px]">
                Paulo Victor Silva Rosa
              </h1>
              <h2 className="mb-4 text-lg font-normal text-slate-50/90 md:text-2xl">
                Frontend Developer
              </h2>
              <p className="mb-6 max-w-[60ch] text-base font-normal text-slate-50/80 md:text-lg lg:text-xl">
                Olá! Sou Paulo Victor, formado em Análise e Desenvolvimento de
                Sistemas pela Unicesumar. Tenho conhecimento nas principais
                ferramentas de Programação Frontend e UI Design do mercado.{" "}
                <br />
                Minha experiência vem dos projetos que desenvolvi, nos quais
                crio o design de interfaces intuitivas e eficientes, além de
                programá-las em projetos completos para oferecer experiências
                visuais envolventes.
              </p>
              <div className="mb-5 flex gap-4">
                <a
                  href="#"
                  className="btn-primary flex items-center justify-between gap-2 px-8 py-2"
                >
                  <Download size={20} color="#eef2ff" />
                  Curriculo
                </a>
                <a href="#" className="btn-secondary px-8 py-2">
                  Contato
                </a>
              </div>
              <span className="inline-flex items-center justify-center gap-1 text-sm font-light opacity-10">
                Role para baixo <ArrowDown size={18} />
              </span>
            </article>
          </div>
        </div>
      </section>
      <div className="absolute -left-10 -top-10 z-0 h-[400px] w-[400px] rounded-full bg-violet-600 opacity-10 blur-3xl backdrop-grayscale"></div>
      <div className="bottom-70 absolute right-0 top-12 z-0 h-[400px] w-[400px] rounded-full bg-violet-600 opacity-10 blur-[200px]"></div>
    </>
  );
}
