"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../../../components/ui/button"
import { ArrowLeft, ArrowUpRightIcon } from "lucide-react"
import { allProjects } from "@/constants/projectConstants"
import { TextAnimate } from "../../../components/magicui/text-animate"
import { highlightTag } from "@/utils/highlightTag"

const DetailedProjectInfo = ({ data }: { data: typeof allProjects }) => {
  return (
    <section className="container">
      {/* navegation on top */}
      <Link
        className="text-muted mb-4 inline-flex items-center justify-between gap-2 text-base font-light md:mb-8"
        href="/projetos"
      >
        <ArrowLeft size={18} color="var(--color-muted)" /> Projetos
      </Link>

      {data.map((project) => (
        <article key={project.slug}>
          {/* heading with animated title */}
          <section className="mb-4 flex items-center justify-center md:mb-8">
            <TextAnimate
              className="bg-brand title text-brand-dark inline-block w-full overflow-hidden rounded-3xl px-5 py-8 text-center"
              animation="slideDown"
              duration={1.2}
              as={"h2"}
            >
              {project.title}
            </TextAnimate>
          </section>

          {/* skills and external links */}
          <section className="mx-auto mb-4 flex flex-col flex-wrap items-center justify-between gap-x-2 gap-y-6 border-b border-white/20 pb-6 md:mb-8 md:flex-row">
            {/* badges */}
            <div className="inline-flex flex-1 flex-wrap items-center justify-center gap-4 md:justify-start">
              {project.tags.map((tag) => (
                <motion.div
                  animate={{ backgroundPositionX: "-100%" }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                    duration: 3,
                  }}
                  className={highlightTag(tag)}
                  key={tag}
                >
                  {tag}
                </motion.div>
              ))}
            </div>

            {/* buttons */}
            <div className="inline-flex flex-1 items-center justify-end gap-x-6">
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
          <div className="mb-4 md:mb-8">
            <p
              className="description pb-8 text-justify text-pretty"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            {/* image preview */}
            {project.image_url && (
              <section className="overflow-hidden rounded-3xl">
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
