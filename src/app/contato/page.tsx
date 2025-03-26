import Image from "next/image"
import ContactPicture from "@/assets/images/picture_contact.jpg"

import { contactsPageLinks } from "@/constants/contactConstants"

const ContactPage = () => {
  return (
    <section className="relative z-10 container flex min-h-dvh flex-col items-center justify-center">
      {/* image */}
      <div className="mx-auto mb-2 size-52 overflow-hidden rounded-full border-3 border-white/50">
        <Image
          src={ContactPicture}
          alt="Foto do programador Paulo Victor no cristo redentor Rio de Janeiro"
          width={208}
          height={208}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* name */}
      <p className="subtitle mb-10 text-center">Paulo Victor Silva</p>

      {/* links */}
      <div className="mb-10 flex w-full max-w-[540px] flex-col items-center justify-center gap-4">
        {contactsPageLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="bg-foreground inline-block w-full rounded-[8px] border border-white/50 px-6 py-4 text-center text-base font-medium capitalize"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  )
}

export default ContactPage
