import { StaticImageData } from "next/image"

export interface ICardInfo {
  image?: string
  href?: string
  icon?: React.ReactNode
  jobTitle: string
  companyName: string
  whenStart: string
  whenFinish: string
}

export interface ICardProject {
  imageSrc: StaticImageData | string
  title: string
  skills: string[]
  hrefTo: string | URL
}
