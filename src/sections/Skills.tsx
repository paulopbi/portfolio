"use client"
import ReactIcon from "@/components/Icons/React_Icon"
import JavascriptIcon from "@/components/Icons/JS_Icon"
import FigmaIcon from "@/components/Icons/Figma_Icon"
import TailwindIcon from "@/components/Icons/Tailwind_Icon"
import TypeIcon from "@/components/Icons/Type_Icon"
import SassIcon from "@/components/Icons/Sass_Icon"
import StyledComponentsIcon from "@/components/Icons/Styled_Icon"
import GitIcon from "@/components/Icons/Git_Icon"
import HTMLIcon from "@/components/Icons/HTML_Icon"
import MongoDBIcon from "@/components/Icons/Mongo_Icon"
import NextIcon from "@/components/Icons/Next_Icon"
import NodeIcon from "@/components/Icons/Node_Icon"
import PostgresIcon from "@/components/Icons/Postgres_Icon"
import PrismaIcon from "@/components/Icons/Prisma_Icon"
import { motion } from "framer-motion"

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
]

const Skills = () => {
  return (
    <section className="mt-16 w-full overflow-hidden border-t border-b border-white/10 py-8 whitespace-nowrap">
      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: "-100%" }}
        transition={{ duration: "50", ease: "linear", repeat: Infinity }}
        className="inline-flex gap-6"
      >
        {stacks.map((stack) => (
          <div
            key={stack.name}
            className="bg-foreground inline-flex min-w-fit items-center justify-center gap-2 rounded-full px-5 py-2"
          >
            <span className="text-sm text-nowrap">{stack.name}</span>
            <stack.icon />
          </div>
        ))}
        {stacks.map((stack) => (
          <div
            key={stack.name}
            className="bg-foreground inline-flex min-w-fit items-center justify-center gap-2 rounded-full px-5 py-2"
          >
            <span className="text-sm text-nowrap">{stack.name}</span>
            <stack.icon />
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
