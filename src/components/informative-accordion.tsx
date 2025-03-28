import React from "react"
import Link from "next/link"
import { IInformativeAccordion } from "@/types"
import { AccordionHeader } from "@radix-ui/react-accordion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const InformativeAccordion = ({
  title,
  subtitle,
  description,
  year,
  href,
  linkName,
}: IInformativeAccordion) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-b border-white/10"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <AccordionHeader className="flex w-full cursor-pointer flex-col items-start">
            <div>
              <h5 className="title--caption capitalize">{title}</h5>
            </div>
            <div className="mt-1 inline-flex w-full items-center justify-between gap-8">
              <h6 className="subtitle--caption capitalize">{subtitle}</h6>
              <p className="text-muted/70 text-xs font-light capitalize">
                {year}
              </p>
            </div>
          </AccordionHeader>
        </AccordionTrigger>
        <AccordionContent>
          <p className="description">{description}</p>

          {linkName && href && (
            <Link
              href={href}
              className="text-brand mt-1.5 inline-flex items-center gap-4 text-sm font-bold"
            >
              {linkName}
            </Link>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default InformativeAccordion
