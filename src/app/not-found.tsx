import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/magicui/particles"

export default function NotFound() {
  return (
    <React.Fragment>
      <Particles refresh className="absolute inset-0 z-0 size-full" />
      <section className="relative z-20 container flex h-dvh flex-col items-center justify-center">
        <h2 className="subtitle mb-1 text-center">
          Ops, algo deu errado, tente novamente mais tarde!
        </h2>
        <p className="description mb-6 text-center">
          Você pode voltar para a página principal clicando no botão abaixo 👇🏾
        </p>
        <Button asChild>
          <Link href="/">Retornar</Link>
        </Button>
      </section>
    </React.Fragment>
  )
}
