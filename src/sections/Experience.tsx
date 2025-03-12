"use client"
import CardInfo from "@/components/CardInfo"
import Subtitle from "@/components/ui/Subtitle"
import { FaStore } from "react-icons/fa6"
import { RiWirelessChargingFill } from "react-icons/ri"

export const jobExperiences = [
  {
    icon: <RiWirelessChargingFill />,
    title: "suporte técnico de redes",
    company: "brisa telecom",
    start: "fev/2024",
    end: "dez/2025",
  },
  {
    icon: <FaStore />,
    title: "operador de logistica I",
    company: "americanas s.a",
    start: "fev/2024",
    end: "dez/2025",
  },
  {
    icon: <FaStore />,
    title: "auxiliar de produção",
    company: "botafogo cultura & lazer",
    start: "fev/2024",
    end: "dez/2025",
  },
]

const Experience = () => {
  return (
    <section className="noise-effect container mt-16" id="experience">
      <Subtitle>Experiencia Profissional</Subtitle>

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
