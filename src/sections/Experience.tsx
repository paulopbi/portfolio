"use client"
import CardInfo from "@/components/card-info"
import { TextAnimate } from "@/components/magicui/text-animate"
import { Server, Store } from "lucide-react"

export const jobExperiences = [
  {
    icon: <Server />,
    title: "suporte técnico de redes",
    company: "brisa telecom",
    start: "fev/2024",
    end: "dez/2025",
  },
  {
    icon: <Store />,
    title: "operador de logistica I",
    company: "americanas s.a",
    start: "fev/2024",
    end: "dez/2025",
  },
  {
    icon: <Store />,
    title: "auxiliar de produção",
    company: "botafogo cultura & lazer",
    start: "fev/2024",
    end: "dez/2025",
  },
]

const Experience = () => {
  return (
    <section className="relative container mt-16" id="experience">
      <TextAnimate
        className="text-muted text-center text-sm font-light"
        by="character"
        as={"h2"}
        animation="blurIn"
      >
        Experiencia Profissional
      </TextAnimate>

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
    </section>
  )
}

export default Experience
