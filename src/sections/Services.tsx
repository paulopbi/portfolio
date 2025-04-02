import CardServices from "@/components/ui/card-services"
import HeadingTitle from "@/components/ui/heading-title"
import { servicesSectionData } from "@/constants/servicesConstants"

const Services = () => {
  return (
    <section className="relative z-10 container mt-20">
      {/* heading */}
      <div className="mb-8 text-center">
        <HeadingTitle title="Serviços">
          Não é só código, entregas pensadas para resolver seu problema, da
          ideia ao deploy. Aqui está o que posso fazer por você.
        </HeadingTitle>
      </div>

      {/* cards */}
      <div className="container grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2">
        {servicesSectionData.map((service) => (
          <CardServices key={service.title} services={service} />
        ))}
      </div>
    </section>
  )
}

export default Services
