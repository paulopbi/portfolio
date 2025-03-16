import Image from "next/image"
import { ICardProject } from "@/types"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const CardProject = ({ imageSrc, title, skills, hrefTo }: ICardProject) => {
  return (
    <article className="mx-auto flex w-full max-w-[500px] flex-col gap-2 md:even:mt-8">
      {/* project image */}
      <div className="mx-auto aspect-square h-[320px] w-full overflow-hidden rounded-3xl">
        <Image
          src={imageSrc}
          width={800}
          height={800}
          alt={title}
          className="h-full w-full object-cover object-center transition duration-300 hover:scale-[1.1]"
        />
      </div>

      {/* project content */}
      <div className="inline-flex flex-col gap-3 px-2">
        <h3 className="line-clamp-1 text-left text-2xl font-bold capitalize">
          {title}
        </h3>
        <div className="inline-flex flex-wrap items-center justify-start gap-2">
          {skills.map((slug) => (
            <Badge
              variant="outline"
              className="text-muted line-clamp-1 inline-flex flex-wrap items-center rounded-3xl bg-transparent px-2 py-1 text-center text-xs font-light uppercase"
              key={slug}
            >
              {slug}
            </Badge>
          ))}
        </div>
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
