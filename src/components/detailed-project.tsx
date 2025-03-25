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
      {/* return link navegation */}
      <div className="flex items-center justify-between gap-4">
        <Link
          className="text-muted inline-flex items-center justify-between gap-2 text-base font-light"
          href="/projetos"
        >
          <ArrowLeft size={18} color="#e5e5e5" /> Projetos
        </Link>

        <Badge className="text-muted rounded-full border border-white/20 bg-transparent px-2 py-1">
          {data.map(({ year }) => year)}
        </Badge>
      </div>

      {/* main content */}
      <article className="mb-10">
        {data.map((project) => (
          <React.Fragment key={project.slug}>
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
                    className="block h-full w-full object-cover object-center"
                  />
                </div>
              )}
            </section>

            {/* title with button links */}
            <section className="mt-10 flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:justify-between">
              <TextAnimate className="title not-italic" as={"h2"}>
                {project.title}
              </TextAnimate>

              <div className="flex gap-x-5">
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

            {/* hightlight tags badge */}
            <section className="mt-5 inline-flex w-full flex-wrap items-center justify-center gap-4 border-b border-white/10 pb-5 md:items-start md:justify-start">
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

            {/* overview */}
            <p
              className="description mx-auto mt-10 max-w-[900px] text-justify text-pretty"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {/* image preview */}
            {project.image_url && (
              <section className="mx-auto mt-10 max-h-[900px] w-[900px] overflow-hidden rounded-2xl">
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
          </React.Fragment>
        ))}
      </article>
    </section>
  )
}

export default DetailedProjectInfo
