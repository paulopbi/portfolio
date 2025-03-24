import { StaticImageData } from "next/image"

export interface IInformativeAccordion {
  title: string
  subtitle: string
  description: string
  year: string
  href?: string
  linkName?: string
}

export interface ICardProject {
  imageSrc: StaticImageData | string
  title: string
  skills: string[]
  hrefTo: string | URL
}
