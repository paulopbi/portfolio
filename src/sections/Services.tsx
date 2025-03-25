"use client"
import { TextAnimate } from "@/components/magicui/text-animate"
import { servicesSectionData } from "@/constants/servicesConstants"

const Services = () => {
  return (
    <section className="relative z-10 container mt-20">
      {/* heading */}
      <div className="mb-8 text-center">
        <TextAnimate
          className="subtitle--heading"
          by="character"
          as={"h5"}
          animation="scaleDown"
        >
          Serviços
        </TextAnimate>
        <p className="description">
          Meus serviços abrangem três áreas essenciais no processo de criação.
        </p>
      </div>

      {/* cards */}
      <div className="container grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2">
        {servicesSectionData.map((service) => (
          <section
            className="bg-foreground border-b-brand mx-auto min-h-[200px] w-full rounded-lg border-b p-5 md:last:col-span-2"
            key={service.title}
          >
            <span>
              <service.icon size={32} color="var(--color-brand)" />
            </span>
            <h4 className="title--services">{service.title}</h4>
            <span className="description">{service.subtitle}</span>
          </section>
        ))}
      </div>
    </section>
  )
}

export default Services
