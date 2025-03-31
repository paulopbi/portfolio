"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowUpRightIcon } from "lucide-react"
import { allProjects } from "@/constants/projectConstants"
import { TextAnimate } from "./magicui/text-animate"
import { highlightTags } from "@/lib/utils"

const DetailedProjectInfo = ({ data }: { data: typeof allProjects }) => {
  return (
    <section className="container">
      {/* navegation on top */}
      <section>
        <Link
          className="text-muted inline-flex items-center justify-between gap-2 text-base font-light"
          href="/projetos"
        >
          <ArrowLeft size={18} color="var(--color-muted)" /> Projetos
        </Link>
      </section>

      {data.map((project) => (
        <article className="my-10" key={project.slug}>
          {/* heading */}
          <section className="mt-8 flex items-center justify-center">
            <TextAnimate
              className="bg-brand title text-brand-dark inline-block w-[80%] overflow-hidden rounded-3xl px-5 py-8 text-center"
              animation="scaleDown"
              duration={1}
              as={"h2"}
            >
              {project.title}
            </TextAnimate>
          </section>
          {/* skills and external links */}
          <section className="mx-auto mt-10 flex max-w-[80%] flex-col flex-wrap items-center justify-between gap-1 border-b border-white/20 pb-6 md:flex-row">
            {/* badges */}
            <div className="mb-6 inline-flex flex-1 flex-wrap items-center justify-center gap-4 md:mb-0 md:justify-start">
              {project.tags.map((tag) => (
                <motion.div
                  animate={{ backgroundPositionX: "-100%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    duration: 3,
                  }}
                  className={highlightTags(tag)}
                  key={tag}
                >
                  {tag}
                </motion.div>
              ))}
            </div>

            {/* buttons */}
            <div className="inline-flex flex-1 items-center justify-end gap-4">
              {project.demo_url && (
                <Button asChild variant="outline">
                  <a href={project.demo_url} target="_blank" rel="no-refer">
                    Demonstração <ArrowUpRightIcon />
                  </a>
                </Button>
              )}
              {project.repository && (
                <Button asChild variant="outline">
                  <a href={project.repository} target="_blank">
                    Repositório <ArrowUpRightIcon />
                  </a>
                </Button>
              )}
            </div>
          </section>

          {/* overview */}
          <div className="mx-auto mt-6 mb-4 max-w-[80%]">
            <p
              className="description text-justify text-pretty"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {/* image preview */}
            {project.image_url && (
              <section className="mt-4 overflow-hidden rounded-3xl">
                <Image
                  unoptimized
                  loading="lazy"
                  src={project.image_url}
                  width={900}
                  height={900}
                  alt={`foto de capa do projeto ${project.title}`}
                  className="block h-full w-full object-cover object-center"
                />
              </section>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}

export default DetailedProjectInfo
