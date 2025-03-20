import CardInfo from "@/components/card-info"
import { TextAnimate } from "@/components/magicui/text-animate"
import { GraduationCap } from "lucide-react"

const Education = () => {
  return (
    <section
      className="container my-25 grid grid-cols-1 items-start gap-10 md:grid-cols-2"
      id="education"
    >
      <div>
        <TextAnimate
          className="subtitle"
          by="character"
          as={"h3"}
          animation="scaleDown"
        >
          Estudos e Especialização
        </TextAnimate>
        <p className="subtitle__description">
          Para mim, estudo e trabalho andam juntos. Cada nova aprendizagem é um
          passo rumo à excelência no que faço.
        </p>
      </div>

      {/* card info with educational things */}
      <div>
        <CardInfo
          icon={<GraduationCap />}
          jobTitle="análise e desenvolvimento de sistemas"
          companyName="unicesumar"
          whenStart="2022"
          whenFinish="2024"
        />
        <CardInfo
          icon={<GraduationCap />}
          jobTitle="técnico em eletrotécnica"
          companyName="escola técnica sandra silva"
          whenStart="2019"
          whenFinish="2024"
        />
      </div>
    </section>
  )
}

export default Education
