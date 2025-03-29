"use client"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import { highlightTags } from "@/lib/utils"

interface ICardProject {
  imageSrc: StaticImageData | string
  title: string
  skills: string[]
  hrefTo: string | URL
}

const CardProject = ({ imageSrc, title, skills, hrefTo }: ICardProject) => {
  return (
    <article className="mx-auto flex w-full max-w-[500px] flex-col gap-2 md:even:mt-8">
      {/* project image */}
      <div className="mx-auto aspect-square h-[320px] w-full overflow-hidden rounded-3xl">
        <Image
          unoptimized
          src={imageSrc}
          width={800}
          height={800}
          alt={title}
          className="h-full w-full object-cover object-center transition duration-300 hover:scale-[1.1]"
        />
      </div>

      {/* project content */}
      <div className="inline-flex flex-col gap-3 px-2">
        {/* title */}
        <h3 className="title--project">{title}</h3>

        {/* badges */}
        <div className="inline-flex flex-wrap items-center justify-start gap-x-2 gap-y-3">
          {skills.map((slug) => (
            <motion.div
              animate={{ backgroundPositionX: "-100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                duration: 2,
              }}
              key={slug}
              className={`${highlightTags(slug)}`}
            >
              <span>{slug}</span>
            </motion.div>
          ))}
        </div>

        {/* links */}
        <Button
          asChild
          variant="link"
          className="text-brand inline-flex w-fit cursor-pointer items-center justify-start gap-2 text-left capitalize"
        >
          <Link href={hrefTo}>
            Mais Detalhes <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </article>
  )
}

export default CardProject
