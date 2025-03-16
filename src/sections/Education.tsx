import CardInfo from "@/components/card-info"
import { TextAnimate } from "@/components/magicui/text-animate"
import { LuUniversity } from "react-icons/lu"

const Education = () => {
  return (
    <section className="relative container mt-16" id="education">
      <TextAnimate className="text-muted text-center text-sm font-light">
        Estudos
      </TextAnimate>

      <CardInfo
        icon={<LuUniversity />}
        jobTitle="análise e desenvolvimento de sistemas"
        companyName="unicesumar"
        whenStart="2022"
        whenFinish="2024"
      />
      <CardInfo
        icon={<LuUniversity />}
        jobTitle="técnico em eletrotécnica"
        companyName="escola técnica sandra silva"
        whenStart="2019"
        whenFinish="2024"
      />
    </section>
  )
}

export default Education
