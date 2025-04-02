import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/magicui/particles"
import { HomeIcon } from "lucide-react"

export default function NotFound({ titleMessage }: { titleMessage?: string }) {
  const standartMessage =
    "Oops, algo deu errado, por favor, tente novamente mais tarde."
  return (
    <React.Fragment>
      <Particles refresh className="absolute inset-0 z-0 size-full" />
      <section className="relative z-20 container flex h-dvh flex-col items-center justify-center">
        <h2 className="subtitle mx-auto mb-1 max-w-[35ch] text-center">
          {titleMessage ? titleMessage : standartMessage}
        </h2>
        <p className="subtitle--caption mb-6 text-center">
          Volte para a página principal clicando no botão abaixo 👇🏾
        </p>
        <Button asChild>
          <Link href="/">
            Retornar <HomeIcon size={16} />
          </Link>
        </Button>
      </section>
    </React.Fragment>
  )
}
