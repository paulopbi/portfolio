"use client"
import CardInfo from "@/components/card-info"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Forklift, Router } from "lucide-react"

export const jobExperiences = [
  {
    icon: <Router />,
    title: "suporte técnico de redes",
    company: "Brisa Telecom",
    start: "fev/2024",
    end: "dez/2025",
  },
  {
    icon: <Forklift />,
    title: "operador de logistica I",
    company: "Americanas S.A",
    start: "fev/2024",
    end: "dez/2025",
  },
]

const Experience = () => {
  return (
    <section
      className="container mt-20 grid grid-cols-1 items-start gap-10 md:grid-cols-2"
      id="experience"
    >
      <div className="md:order-2">
        <TextAnimate
          className="subtitle"
          by="character"
          as={"h3"}
          animation="scaleDown"
        >
          Experiência Profissional
        </TextAnimate>
        <p className="subtitle__description">
          Ao longo da minha carreira, tive a chance de trabalhar em diferentes
          cenários, alguns deles são
        </p>
      </div>

      <div className="md:order-1">
        {/* card with job info */}
        {jobExperiences.map((job) => (
          <CardInfo
            key={job.title}
            icon={job.icon}
            jobTitle={job.title}
            companyName={job.company}
            whenStart={job.start}
            whenFinish={job.end}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
