"use client"
import React from "react"
import { motion } from "framer-motion"
import { TextAnimate } from "@/components/magicui/text-animate"
import { skillStacks } from "@/constants/skillsConstants"

function SkillColumn(props: {
  stacks: typeof skillStacks
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
                  className="bg-foreground border-brand flex min-h-[140px] min-w-[152px] flex-col items-center justify-center gap-5 rounded-3xl border-2 px-4 py-6"
                >
                  <h5 className="text-lg font-medium tracking-tight">
                    {stack.name}
                  </h5>
                  <stack.icon width={34} height={34} />
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
  const firstColumn = [...skillStacks]
  const secoundColumn = [...skillStacks].reverse()

  return (
    <section className="container mt-20 grid grid-cols-1 items-start justify-start md:grid-cols-2">
      <div className="text-center">
        <TextAnimate
          className="subtitle--heading"
          by="character"
          as={"h2"}
          animation="scaleDown"
        >
          Habilidades
        </TextAnimate>
        <p className="description mx-auto max-w-[50ch]">
          Cada quadrado desse representa uma etapa da minha jornada de
          aprendizado e prática, juntas, essas tecnologias formam o conjunto de
          ferramentas que uso para criar experiências digitais impactantes.
        </p>
      </div>

      {/* vertical marquee effect */}
      <div className="relative container mx-auto">
        <div className="mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <SkillColumn stacks={firstColumn} duration={30} />
          <SkillColumn
            stacks={secoundColumn}
            duration={40}
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
