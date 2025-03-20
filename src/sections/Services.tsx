"use client"
import { TextAnimate } from "@/components/magicui/text-animate"
import { CodeXml, Figma, Smartphone } from "lucide-react"

const servicesContent = [
  {
    icon: CodeXml,
    title: "Programação",
    subtitle: "Criação de sites",
  },
  {
    icon: Figma,
    title: "UI Design",
    subtitle: "Criação de Wireframes",
  },
  {
    icon: Smartphone,
    title: "Sites Responsivos",
    subtitle: "Mobile First",
  },
]

const Services = () => {
  return (
    <section className="z-10 container mt-20">
      {/* heading */}
      <div className="flex flex-col items-center justify-center gap-2">
        <TextAnimate
          className="subtitle"
          by="character"
          as={"h3"}
          animation="scaleDown"
        >
          Serviços
        </TextAnimate>
        <span className="subtitle__description">
          Meus serviços abrangem três áreas essenciais no processo de criação
        </span>
      </div>

      {/* cards */}
      <div className="relative z-10 container mt-10 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2">
        {servicesContent.map((service) => (
          <section
            className="bg-foreground border-b-brand z-10 mx-auto min-h-[200px] w-full rounded-lg border-b-2 p-8 md:last:col-span-2"
            key={service.title}
          >
            <span>
              <service.icon size={32} color="var(--color-brand)" />
            </span>
            <h4 className="mt-6 text-4xl font-medium">{service.title}</h4>
            <span className="text-muted mt-4 inline-block text-sm font-extralight">
              {service.subtitle}
            </span>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Services
