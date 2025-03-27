"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowUpRightIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import { projectInfo } from "@/constants/projectConstants"
import { TextAnimate } from "./magicui/text-animate"
import { highlightTags } from "@/lib/utils"

const DetailedProjectInfo = ({ data }: { data: typeof projectInfo }) => {
  return (
    <section className="relative z-10 container">
      {/* navegation on top */}
      <section className="flex items-center justify-between gap-4">
        <Link
          className="text-muted inline-flex items-center justify-between gap-2 text-base font-light"
          href="/projetos"
        >
          <ArrowLeft size={18} color="#e5e5e5" /> Projetos
        </Link>

        <Badge className="text-muted rounded-full border border-white/20 bg-transparent px-2 py-1">
          {data.map(({ year }) => year)}
        </Badge>
      </section>

      {data.map((project) => (
        <article className="my-10" key={project.slug}>
          {/* heading */}
          <section className="bg-brand mt-10 inline-flex min-h-[120px] w-full items-center justify-center overflow-hidden rounded-3xl">
            <h3 className="title text-brand-dark text-pretty uppercase">
              <TextAnimate>{project.title}</TextAnimate>
            </h3>
          </section>

          {/* skills and external links */}
          <section className="mx-auto mt-10 flex flex-col flex-wrap items-center justify-between gap-1 border-b border-white/20 pb-6 md:flex-row">
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
          <div className="p-4">
            <p
              className="description mx-auto mb-4 text-justify text-pretty"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {/* image preview */}
            {project.image_url && (
              <section className="mx-auto max-h-[900px] w-full overflow-hidden rounded-3xl">
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
