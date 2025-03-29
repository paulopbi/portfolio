import Link from "next/link"
import HeadingTitle from "@/components/ui/heading-title"
import { AccordionHeader } from "@radix-ui/react-accordion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { educationalSectionData } from "@/constants/educationConstants"

const Education = () => {
  return (
    <section className="container mt-20 grid grid-cols-1 items-center gap-10 md:mt-50 md:grid-cols-2">
      <div className="text-center">
        <HeadingTitle title="Estudos">
          Para mim, estudo e trabalho andam juntos. Cada nova aprendizagem é um
          passo rumo à excelência no que faço.
        </HeadingTitle>
      </div>

      <article className="mx-auto w-full">
        {educationalSectionData.map((education) => (
          <Accordion
            type="single"
            collapsible
            key={education.title}
            className="w-full border-b border-white/10"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <AccordionHeader className="flex w-full cursor-pointer flex-col items-start">
                  <div>
                    <h5 className="title--caption capitalize">
                      {education.title}
                    </h5>
                  </div>
                  <div className="mt-1 inline-flex w-full items-center justify-between gap-8">
                    <h6 className="subtitle--caption capitalize">
                      {education.subtitle}
                    </h6>
                    <p className="text-muted/70 text-xs font-light capitalize">
                      {education.year}
                    </p>
                  </div>
                </AccordionHeader>
              </AccordionTrigger>
              <AccordionContent>
                <p className="description">{education.description}</p>

                {education.linkName && education.href && (
                  <Link
                    href={education.href}
                    className="text-brand mt-1.5 inline-flex items-center gap-4 text-sm font-bold"
                  >
                    {education.linkName}
                  </Link>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </article>
    </section>
  )
}

export default Education
