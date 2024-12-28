import ReactIcon from "@/app/components/Icons/React_Icon";
import JavascriptIcon from "@/app/components/Icons/JS_Icon";
import FigmaIcon from "@/app/components/Icons/Figma_Icon";
import TailwindIcon from "@/app/components/Icons/Tailwind_Icon";
import TypeIcon from "@/app/components/Icons/Type_Icon";

export default function Habilidades() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-24">
      <div className="text-center">
        <h3 className="section-title title-gradient">Stacks e Habilidades</h3>
        <p className="section-subtitle max-w-[40ch]">
          As principais línguagens, Frameworks e bibliotecas que utilizo no dia
          a dia.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <ReactIcon />
          <JavascriptIcon />
          <FigmaIcon />
          <TailwindIcon />
        </div>
        <div>
          <ReactIcon />
          <JavascriptIcon />
          <FigmaIcon />
          <TailwindIcon />
          <TypeIcon />
        </div>
      </div>
    </section>
  );
}
