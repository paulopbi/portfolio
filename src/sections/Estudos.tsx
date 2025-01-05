"use client";
import { motion } from "motion/react";
import {
  ArrowRight,
  BookOpenText,
  GraduationCap,
  Languages,
} from "lucide-react";
import Ornament_Icon from "@/components/Icons/Ornament_Icon";
import SectionHeading from "@/components/SectionHeading";

const formacoes = [
  {
    nome: "Analise E Desenvolvimento de Sistemas",
    instituicao: "Unicesumar",
    grau: "Superior Completo",
    icone: "faculdade",
    horas: 2280,
  },
  {
    nome: "Inglês",
    instituicao: "Intermediário",
    grau: "Idioma",
    icone: "idioma",
    horas: null,
  },
  {
    nome: "UI Design Avançado",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 15,
  },
  {
    nome: "Next JS",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 18,
  },
  {
    nome: "React",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 18,
  },
  {
    nome: "Typescript",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 16,
  },
  {
    nome: "Javascript ES6+",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 37,
  },
  {
    nome: "HTML, CSS e Sass",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 58,
  },
  {
    nome: "Tailwind CSS",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "curso",
    horas: 16,
  },
  {
    nome: "Git / Github ",
    instituicao: "B7Web",
    grau: "Curso",
    icone: "curso",
    horas: 20,
  },
];

export default function Estudos() {
  return (
    <section
      id="educacao"
      className="container relative mx-auto w-full px-4 py-10"
    >
      <div className="absolute left-4 top-20 hidden opacity-40 md:block">
        <Ornament_Icon />
      </div>
      <div className="absolute bottom-5 right-4 hidden opacity-40 md:block">
        <Ornament_Icon />
      </div>
      <SectionHeading title="Educação">
        Aqui você encontrará minha trajetória acadêmica e os certificados que
        obtive ao longo dos meus estudos
      </SectionHeading>

      <section className="container mx-auto flex flex-shrink-0 gap-4 overflow-x-auto py-8">
        {formacoes.map((formacao) => (
          <motion.article
            animate={{ opacity: 0, scale: 0.5, translateY: -100 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            key={formacao.nome}
            className="flex min-h-[230px] min-w-[380px] flex-col justify-between rounded-md border border-indigo-400 bg-indigo-950 p-4"
          >
            <div className="pb-8">
              <h4 className="mb-2 inline-flex w-full items-center justify-between gap-4 text-base font-medium text-white/70">
                {formacao.grau}
                {(formacao.icone === "idioma" && <Languages opacity={0.7} />) ||
                  (formacao.icone === "faculdade" && (
                    <GraduationCap opacity={0.7} />
                  )) ||
                  (formacao.icone === "curso" && (
                    <BookOpenText opacity={0.7} />
                  ))}
              </h4>
              <h3 className="max-w-[300px] text-2xl font-bold capitalize leading-8 tracking-normal">
                {formacao.nome}
              </h3>
            </div>
            <div className="flex items-center justify-between text-sm font-normal uppercase text-white/70">
              <span>{formacao.instituicao}</span>
              <span>{formacao.horas ? `${formacao.horas}H` : null}</span>
            </div>
          </motion.article>
        ))}
      </section>
      <span className="mt-8 flex items-center justify-start gap-1 pl-4 text-sm font-normal text-indigo-50/20">
        Role para o lado
        <motion.span
          animate={{ translateX: [0, 10], scale: [1, 0.8] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        >
          <ArrowRight size={19} />
        </motion.span>
      </span>
    </section>
  );
}
