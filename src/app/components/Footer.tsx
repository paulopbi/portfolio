import logoIcon from "@/app/favicon.svg";
import { LucideGithub, LucideLinkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#bcbcbc]">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-6 inline-flex items-center justify-center">
          <Image src={logoIcon} width={40} height={40} alt="ICONE" />
        </div>
        <div className="mb-6 flex flex-col gap-3">
          <a
            href="mailto:paulovictordev16@gmail.com"
            className="text-md text-white hover:text-indigo-400"
          >
            paulovictordev16@gmail.com
          </a>
          <address className="font-normal not-italic">
            Rio de Janeiro - Brasil
          </address>
          <div className="flex items-center justify-center gap-4">
            <a href="#">
              <LucideGithub color="gray" size={24} />
            </a>
            <a href="#">
              <LucideLinkedin color="gray" size={24} />
            </a>
          </div>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} - Desenvolvido por Paulo Victor, todos
          os direitos reservados.
        </p>
      </div>
    </footer>
  );
}