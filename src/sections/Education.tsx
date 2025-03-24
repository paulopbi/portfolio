import InformativeAccordion from "@/components/informative-accordion"
import { TextAnimate } from "@/components/magicui/text-animate"
import { educationalSectionData } from "@/constants/educationConstants"

const Education = () => {
  return (
    <section
      className="container mt-20 grid grid-cols-1 items-center gap-10 md:mt-50 md:grid-cols-2"
      id="education"
    >
      <div className="text-center">
        <TextAnimate
          className="subtitle--heading"
          by="character"
          as={"h2"}
          animation="scaleDown"
        >
          Estudos e Especialização
        </TextAnimate>
        <p className="description mx-auto max-w-[50ch]">
          Para mim, estudo e trabalho andam juntos. Cada nova aprendizagem é um
          passo rumo à excelência no que faço.
        </p>
      </div>

      <article className="mx-auto w-full">
        {educationalSectionData.map((education) => (
          <InformativeAccordion
            key={education.title}
            title={education.title}
            subtitle={education.subtitle}
            description={education.description}
            year={education.year}
            href={education.href}
            linkName={education.linkName}
          />
        ))}
      </article>
    </section>
  )
}

export default Education
