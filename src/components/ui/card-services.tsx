import React from "react"
import { LucideProps } from "lucide-react"

interface ICardServices {
  services: {
    title: string
    subtitle: string
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >
  }
}

const CardServices = ({ services }: ICardServices) => {
  return (
    <section className="bg-foreground border-b-brand mx-auto min-h-[200px] w-full rounded-lg border-b p-5 md:last:col-span-2">
      <span>
        <services.icon width={32} height={32} color="var(--color-brand)" />
      </span>
      <h2 className="title--services">{services.title}</h2>
      <h6 className="description">{services.subtitle}</h6>
    </section>
  )
}

export default CardServices
