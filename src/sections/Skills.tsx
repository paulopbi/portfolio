"use client"
import React from "react"
import { motion } from "framer-motion"
import { TextAnimate } from "@/components/magicui/text-animate"
import { stacks } from "@/constants/project/index"

function SkillColumn(props: {
  stacks: typeof stacks
  className?: string
  duration?: number
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
                  className="bg-foreground border-brand flex min-h-[140px] w-[150px] flex-col items-center justify-center gap-5 rounded-3xl border-2 px-4 py-6"
                >
                  <h5 className="text-center text-sm font-bold">
                    {stack.name}
                  </h5>
                  <stack.icon width={36} height={36} />
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

const Skills = () => {
  const firstColumn = [...stacks]
  const secoundColumn = [...stacks].reverse()

  return (
    <section className="container mt-20 grid grid-cols-1 items-center md:grid-cols-2">
      <div>
        <TextAnimate
          className="subtitle"
          by="character"
          as={"h3"}
          animation="scaleDown"
        >
          Habilidades
        </TextAnimate>
        <p className="subtitle__description">
          Cada quadrado desse representa uma etapa da minha jornada de
          aprendizado e prática, juntas, essas tecnologias formam o conjunto de
          ferramentas que uso para criar experiências digitais impactantes.
        </p>
      </div>

      {/* vertical marquee effect */}
      <div className="relative container mx-auto">
        <div className="mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <SkillColumn stacks={firstColumn} duration={40} />
          <SkillColumn
            stacks={secoundColumn}
            duration={60}
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
