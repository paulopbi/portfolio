import HeadingTitle from "@/components/ui/heading-title"
import { AccordionHeader } from "@radix-ui/react-accordion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { experienceSectionData } from "@/constants/experienceConstants"

const Experience = () => {
  return (
    <section className="container mt-20 grid grid-cols-1 items-start gap-10 md:grid-cols-2">
      {/* heading */}
      <div className="text-center md:order-2">
        <HeadingTitle title="Experiência Profissional">
          Já fui de empacotar produtos e até descarregar caminhões. Hoje,
          prefiro &apos;debugar&apos; códigos, porém toda essa bagagem me fez um
          profissional mais adaptável e determinado.
        </HeadingTitle>
      </div>

      <article className="mx-auto w-full md:order-1">
        <Accordion type="single" collapsible className="w-full">
          {experienceSectionData.map((experience, index) => (
            <AccordionItem
              key={experience.title}
              value={`item-${index}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger>
                <AccordionHeader className="flex w-full cursor-pointer flex-col items-start">
                  <div>
                    <h5 className="title--caption capitalize">
                      {experience.title}
                    </h5>
                  </div>
                  <div className="mt-1 inline-flex w-full items-center justify-between gap-8">
                    <h6 className="subtitle--caption capitalize">
                      {experience.subtitle}
                    </h6>
                    <p className="text-muted/60 text-xs font-light capitalize">
                      {experience.year}
                    </p>
                  </div>
                </AccordionHeader>
              </AccordionTrigger>
              <AccordionContent>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: experience.description }}
                ></p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </section>
  )
}

export default Experience
