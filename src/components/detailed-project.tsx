"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowLeft, ArrowUpRightIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import { projectsContentInfo } from "@/constants/project"
import { TextAnimate } from "./magicui/text-animate"
import { highlightTags } from "@/lib/utils"

const DetailedProjectInfo = ({
  data,
}: {
  data: typeof projectsContentInfo
}) => {
  return (
    <section className="relative z-10 container min-h-dvh">
      {/* header */}
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-muted inline-flex items-center justify-between gap-2 text-base font-light"
          href="/projetos"
        >
          <ArrowLeft size={18} color="#e5e5e5" /> Projetos
        </Link>

        <Badge className="text-muted rounded-md border-white/15 bg-transparent px-2 py-1 text-sm">
          {data.map(({ year }) => year)}
        </Badge>
      </div>

      {/* main content */}
      <article className="mb-10">
        {data.map((project) => (
          <React.Fragment key={project.slug}>
            {/* title with button links */}
            <section className="mt-10 flex w-full flex-col flex-wrap items-center justify-center gap-4">
              <TextAnimate className="title text-white not-italic" as={"h2"}>
                {project.title}
              </TextAnimate>

              <div className="flex gap-x-5">
                {project.demo_url && (
                  <Button asChild>
                    <a href={project.demo_url} target="_blank" rel="no-refer">
                      Demonstração <ArrowUpRightIcon />
                    </a>
                  </Button>
                )}
                {project.repository && (
                  <Button asChild>
                    <a href={project.repository} target="_blank">
                      Repositório <ArrowUpRightIcon />
                    </a>
                  </Button>
                )}
              </div>
            </section>

            {/* badge tags */}
            <section className="mt-5 inline-flex w-full flex-wrap items-center justify-center gap-4">
              {project.tags.map((tag) => (
                <motion.div
                  animate={{ backgroundPositionX: "-100%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    duration: 2,
                  }}
                  className={highlightTags(tag)}
                  key={tag}
                >
                  {tag}
                </motion.div>
              ))}
            </section>

            {/* cover picture */}
            <section>
              {project.cover && (
                <div className="mt-10 overflow-hidden rounded-3xl">
                  <Image
                    src={project.cover}
                    alt={`Banner do projeto ${project.title}`}
                    width={1000}
                    height={300}
                    fetchPriority="high"
                    className="block h-full w-full object-contain object-center"
                  />
                </div>
              )}
            </section>

            {/* overview */}
            <section className="mt-8 flex flex-col">
              <h6 className="subtitle border-b border-white/15 pb-2">
                Descrição
              </h6>
              <p
                className="description mt-4"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </section>

            {/* image preview */}
            {project.image_url && (
              <section className="subtitle mt-8">
                <h6 className="subtitle border-b border-white/15 pb-2">
                  Prévia
                </h6>
                <div className="mt-3 max-h-[800px] min-w-full overflow-hidden rounded-3xl">
                  <Image
                    unoptimized
                    loading="lazy"
                    src={project.image_url}
                    width={1920}
                    height={1080}
                    alt={`foto de capa do projeto ${project.title}`}
                    className="block h-full w-full object-cover object-center"
                  />
                </div>
              </section>
            )}
          </React.Fragment>
        ))}
      </article>
    </section>
  )
}

export default DetailedProjectInfo
