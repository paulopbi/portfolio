import { ICardInfo } from "@/types"
import Image from "next/image"

const CardInfo = ({
  image,
  href,
  icon,
  jobTitle,
  companyName,
  whenStart,
  whenFinish,
}: ICardInfo) => {
  return (
    <article className="mx-auto mt-8 flex max-w-[900px] items-start gap-2.5 border-b border-white/10 pb-4">
      {icon && (
        <div className="bg-foreground inline-flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border p-2">
          {icon}
        </div>
      )}

      {image && (
        <div className="inline-flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full border p-2">
          <Image
            src={image}
            alt={`${jobTitle} logo`}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="w-full">
        {href ? (
          <a href="#" className="block text-base capitalize">
            {jobTitle}
          </a>
        ) : (
          <h3 className="text-base capitalize"> {jobTitle}</h3>
        )}

        <div className="flex items-center justify-between gap-2">
          <p className="text-muted text-sm font-light lowercase">
            {companyName}
          </p>
          <p className="text-muted text-sm font-light lowercase">
            {whenStart} - {whenFinish}
          </p>
        </div>
      </div>
    </article>
  )
}

export default CardInfo
