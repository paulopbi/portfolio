import Dogs from "../assets/demo/dogs_demo.png";
import Sass from "../assets/demo/saas_demo.gif";
import RickAndMorty from "../assets/demo/rick_and_morty_demo.gif";
import CodeLandia from "../assets/demo/capa_codelandia.svg";
import FlashDash from "../assets/demo/flashdash_demo.gif";
import LemonPeper from "../assets/demo/lemon_peper.jpg";
import { ArrowRight, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dogs",
    slugs: ["next js", "css", "typescript"],
    demo_url: Dogs.src,
    description:
      "Uma rede social para cachorros, onde os usuários podem compartilhar as fotos dos seus pets com outras pessoas, possui autenticação e cadastro e totalmente optimizado com o uso de Next.js",
  },
  {
    id: 2,
    title: "Saas Landing Page",
    slugs: ["next js", "tailwind css", "motion", "typescript"],
    demo_url: Sass.src,
    description:
      "É uma Landing page com interface moderna de um SaaS ou 'Software as a Service', utilizando o 'motion' para criar animações suaves, efeito parallax, efeitos de gradiente entre outros.",
  },
  {
    id: 3,
    title: "FlashDash",
    slugs: ["react js", "tailwind css", "javascript"],
    demo_url: FlashDash.src,
    description:
      "Uma aplicação que utiliza a API do Unsplash para gera fotos aleatórias a cada vez que você entrar, os usuários podem baixar as fotos e usar como wallpaper de celular ou computador.",
  },
  {
    id: 4,
    title: "Codelandia",
    slugs: ["html", "css"],
    demo_url: CodeLandia.src,
    description:
      "Codelândia são desafios frontend onde você tem um design no figma e precisa transoformar em um site. Criei várias landing pages para praticar os conhecimentos de HTML e CSS.",
  },
  {
    id: 5,
    title: "Rick and Morty",
    slugs: ["react js", "motion", "css", "javascript"],
    demo_url: RickAndMorty.src,
    description:
      "Explore o rico multiverso de Rick e Morty onde você dados detalhados de todos os personagens da serie, podendo utilizar vários filtros como nome ou status para customizar as suas pesquisas.",
  },
  {
    id: 6,
    title: "Lemon Peper",
    slugs: ["UI Design", "Figma"],
    demo_url: LemonPeper.src,
    description:
      "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
  },
];

export default function Projetos() {
  return (
    <main className="bg-gradient-to-b from-[#000010] to-[#000004] py-24">
      <div className="text-center">
        <h3 className="section-title title-gradient">Projetos</h3>
        <span className="section-subtitle">
          Demonstrações e repositórios dos meus projetos.
        </span>
      </div>

      <section className="flex snap-x items-stretch justify-stretch gap-6 overflow-x-auto px-4 py-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mx-auto flex min-h-[300px] flex-shrink-0 snap-center flex-col items-center"
          >
            <div className="h-[240px] max-w-[380px] overflow-clip">
              <img
                src={project.demo_url}
                alt={project.title}
                className="object-fill object-center"
              />
            </div>
            <div className="flex max-w-[380px] flex-col rounded-b-md bg-indigo-950 px-2 py-4">
              <h4 className="mb-2 text-3xl font-bold">{project.title}</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.slugs.map((slug) => (
                  <span key={slug} className="card-slug uppercase">
                    {slug}
                  </span>
                ))}
              </div>
              <p className="mb-4 mt-2 max-w-[50ch] text-base text-indigo-50/90">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-2"
                >
                  <GithubIcon size={19} />
                  Repositório
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block px-8 py-2"
                >
                  Demonstração
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
      <span className="mt-8 flex items-center justify-start gap-1 pl-4 text-sm font-light text-indigo-50/20">
        Role para o lado
        <ArrowRight size={19} />
      </span>
    </main>
  );
}
