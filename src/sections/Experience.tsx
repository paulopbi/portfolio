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
    <section className="container mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      {/* heading */}
      <div className="text-center md:order-2">
        <HeadingTitle title="Experiência Profissional">
          Ao longo da minha carreira, tive a chance de trabalhar em diferentes
          cenários, alguns deles são.
        </HeadingTitle>
      </div>

      <article className="mx-auto w-full md:order-1">
        {/* accordion with job info */}
        {experienceSectionData.map((experience) => (
          <Accordion
            type="single"
            collapsible
            key={experience.title}
            className="w-full border-b border-white/10"
          >
            <AccordionItem value="item-1">
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
                    <p className="text-muted/70 text-xs font-light capitalize">
                      {experience.year}
                    </p>
                  </div>
                </AccordionHeader>
              </AccordionTrigger>
              <AccordionContent>
                <p className="description">{experience.description}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </article>
    </section>
  )
}

export default Experience
