import Image from "next/image"
import React from "react"
import ContactPicture from "@/assets/images/picture_contact.jpg"
import HeadingTitle from "@/components/ui/heading-title"
import { contactsPageLinks } from "@/constants/contactConstants"

const Contact = () => {
  return (
    <section className="container flex min-h-dvh flex-col items-center justify-center gap-2">
      {/* image */}
      <div className="relative z-10 mx-auto mb-2 size-52 overflow-hidden rounded-full border-3 border-white/50 duration-75 ease-in hover:scale-[1.1]">
        <Image
          src={ContactPicture}
          alt="Foto do programador Paulo Victor no cristo redentor Rio de Janeiro"
          width={208}
          height={208}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* texts */}
      <div className="mb-10 inline-flex flex-col items-center justify-center gap-1">
        <HeadingTitle title="Paulo Victor Silva" />
        <span className="description">Me siga nas redes sociais abaixo 👇🏾</span>
      </div>

      {/* links */}
      <div className="mb-10 flex w-full max-w-[540px] flex-col items-center justify-center gap-4">
        {contactsPageLinks.map((link) => (
          <a
            className="glow-on-hover"
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
