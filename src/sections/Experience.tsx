"use client"
import CardInfo from "@/components/card-info"
import { TextAnimate } from "@/components/magicui/text-animate"
import { experienceSectionData } from "@/constants/experienceConstants"

const Experience = () => {
  return (
    <section
      className="container mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2"
      id="experience"
    >
      <div className="text-center md:order-2">
        <TextAnimate
          className="subtitle--heading"
          by="character"
          as={"h2"}
          animation="scaleDown"
        >
          Experiência Profissional
        </TextAnimate>
        <p className="description mx-auto max-w-[50ch]">
          Ao longo da minha carreira, tive a chance de trabalhar em diferentes
          cenários, alguns deles são
        </p>
      </div>

      <article className="mx-auto w-full md:order-1">
        {/* card with job info */}
        {experienceSectionData.map((experience) => (
          <CardInfo
            key={experience.title}
            title={experience.title}
            subtitle={experience.subtitle}
            description={experience.description}
            year={experience.year}
          />
        ))}
      </article>
    </section>
  )
}

export default Experience
