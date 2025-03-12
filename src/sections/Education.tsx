import CardInfo from "@/components/CardInfo"
import Subtitle from "@/components/ui/Subtitle"
import { LuUniversity } from "react-icons/lu"

const Education = () => {
  return (
    <section className="mt-16" id="education">
      <Subtitle>Experiencia Acadêmica</Subtitle>

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
