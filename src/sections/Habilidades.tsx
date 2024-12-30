"use client";
import { motion } from "motion/react";
import React from "react";
import ReactIcon from "@/components/Icons/React_Icon";
import JavascriptIcon from "@/components/Icons/JS_Icon";
import FigmaIcon from "@/components/Icons/Figma_Icon";
import TailwindIcon from "@/components/Icons/Tailwind_Icon";
import TypeIcon from "@/components/Icons/Type_Icon";
import SassIcon from "@/components/Icons/Sass_Icon";
import StyledComponentsIcon from "@/components/Icons/Styled_Icon";
import GitIcon from "@/components/Icons/Git_Icon";
import HTMLIcon from "@/components/Icons/HTML_Icon";
import MongoDBIcon from "@/components/Icons/Mongo_Icon";
import NextIcon from "@/components/Icons/Next_Icon";
import NodeIcon from "@/components/Icons/Node_Icon";
import PostgresIcon from "@/components/Icons/Postgres_Icon";
import PrismaIcon from "@/components/Icons/Prisma_Icon";
import SectionHeading from "@/components/SectionHeading";
import OrnamentIcon from "@/components/Icons/Ornament_Icon";

const stacks = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Typescript",
    icon: TypeIcon,
  },
  {
    name: "Javascript",
    icon: JavascriptIcon,
  },
  {
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "SASS",
    icon: SassIcon,
  },
  {
    name: "GIT",
    icon: GitIcon,
  },
  {
    name: "Styled Components",
    icon: StyledComponentsIcon,
  },
  {
    name: "Node JS",
    icon: NodeIcon,
  },
  {
    name: "Next JS",
    icon: NextIcon,
  },
  {
    name: "Postgres SQL",
    icon: PostgresIcon,
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
  },
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "Mongo DB",
    icon: MongoDBIcon,
  },
];

function HabilidadesColumn(props: {
  stacks: typeof stacks;
  className?: string;
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.stacks.map((stack) => (
                <div
                  key={stack.name}
                  className="flex h-[150px] w-[200px] flex-col items-center justify-center gap-4 rounded-md border-2 border-indigo-500 bg-indigo-950 px-4 py-6"
                >
                  <h5 className="text-sm font-bold">{stack.name}</h5>
                  <stack.icon />
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
}

export default function Habilidades() {
  const firstColumn = stacks.slice(0, 4);
  const secoundColumn = stacks.slice(4, 8);
  const thirdColumn = stacks.slice(8, 14);

  return (
    <section
      id="tecnologias"
      className="container relative mx-auto px-4 py-10 md:py-24"
    >
      <div className="absolute bottom-24 left-4 opacity-40">
        <OrnamentIcon />
      </div>
      <div className="absolute right-4 top-36 opacity-40">
        <OrnamentIcon />
      </div>
      <SectionHeading title="Stacks e Habilidades">
        As principais línguagens, Frameworks e bibliotecas que utilizo no dia a
        dia
      </SectionHeading>

      <div className="mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
        <HabilidadesColumn stacks={firstColumn} duration={15} />
        <HabilidadesColumn
          stacks={secoundColumn}
          className="hidden md:block"
          duration={19}
        />
        <HabilidadesColumn
          stacks={thirdColumn}
          className="hidden lg:block"
          duration={17}
        />
      </div>
    </section>
  );
}
