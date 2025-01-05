import Estudos from "@/sections/Estudos";
import Habilidades from "@/sections/Habilidades";
import Hero from "@/sections/Hero";
import Projetos from "@/sections/Projetos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Habilidades />
      <Projetos />
      <Estudos />
    </main>
  );
}
