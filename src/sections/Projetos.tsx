/* eslint-disable @next/next/no-img-element */
"use client";
import { GithubIcon } from "lucide-react";
import { motion } from "motion/react";
import Dogs from "../assets/demo/dogs_demo.png";
import Sass from "../assets/demo/saas_demo.gif";
import RickAndMorty from "../assets/demo/rick_and_morty_demo.gif";
import CodeLandia from "../assets/demo/codelandia.jpg";
import MovieMate from "../assets/demo/movie_mate.jpeg";
import FlashDash from "../assets/demo/flashdash.gif";
import LemonPeper from "../assets/demo/lemon_peper.jpg";
import SectionHeading from "@/components/SectionHeading";

const lista_projetos = [
  {
    titulo: "Dogs",
    tags: ["next js", "css", "typescript"],
    imagem_url: Dogs.src,
    repositorio_link: "https://github.com/paulopbi/dogs-next",
    demonstracao_link: "https://dogs-next-bice.vercel.app/",
    descricao:
      "Uma rede social para cachorros, onde os usuários podem compartilhar as fotos dos seus pets com outras pessoas, possui autenticação e cadastro e totalmente optimizado com o uso de Next.js.",
  },
  {
    titulo: "Movie Mate",
    tags: ["react js", "tailwind css", "Appwrite", "Debounce", "TMDB API"],
    imagem_url: MovieMate.src,
    repositorio_link: "https://github.com/paulopbi/movie-mate",
    demonstracao_link: "https://movie-mate-rho.vercel.app/",
    descricao:
      "Permite pesquisar filmes utilizando a API do TMDB, Ao pesquisar é utilizado o debounce nas requisições, os títulos pesquisados são salvos no Appwrite, permitindo exibir os mais procurados.",
  },
  {
    titulo: "Saas Landing Page",
    tags: ["next js", "tailwind css", "motion", "typescript"],
    imagem_url: Sass.src,
    repositorio_link: "https://github.com/paulopbi/SaaS",
    demonstracao_link: "https://saas-sable-psi.vercel.app/",
    descricao:
      "É uma Landing page com interface moderna de um SaaS ou 'Software as a Service', utilizando o 'motion' para criar animações suaves, efeito parallax, efeitos de gradiente entre outros.",
  },
  {
    titulo: "FlashDash",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    imagem_url: FlashDash.src,
    repositorio_link: "https://github.com/paulopbi/flashdash",
    demonstracao_link: "https://flashdash-nine.vercel.app/",
    descricao:
      "Uma aplicação que utiliza a API do Unsplash que possui várias fotos, os usuários podem pesquisar e baixar as fotos para utilizar como wallpaper de celular ou computador.",
  },
  {
    titulo: "Codelandia",
    tags: ["html", "css"],
    imagem_url: CodeLandia.src,
    repositorio_link: "https://github.com/paulopbi/codelandia",
    demonstracao_link: null,
    descricao:
      "Codelândia são desafios frontend onde você tem um design no figma e precisa transoformar em um site. Criei várias landing pages para praticar os conhecimentos de HTML e CSS.",
  },
  {
    id: 5,
    titulo: "Rick and Morty",
    tags: ["react js", "motion", "css", "javascript"],
    imagem_url: RickAndMorty.src,
    repositorio_link: "https://github.com/paulopbi/rick-and-morty",
    demonstracao_link: "https://paulopbi.github.io/rick-and-morty/",
    descricao:
      "Explore o rico multiverso de Rick e Morty onde você dados detalhados de todos os personagens da serie, podendo utilizar vários filtros como nome ou status para customizar as suas pesquisas.",
  },
  {
    id: 6,
    titulo: "Lemon Peper",
    tags: ["UI Design", "Figma"],
    imagem_url: LemonPeper.src,
    repositorio_link: null,
    demonstracao_link:
      "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    descricao:
      "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
  },
];

const highlightTags = (tags: string) => {
  const shouldHighlight =
    tags.includes("next") ||
    tags.includes("react") ||
    tags.includes("UI Design");
  return shouldHighlight
    ? "bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf)] bg-clip-text text-transparent [background-size:200%]"
    : "";
};

export default function Projetos() {
  return (
    <section
      id="projetos"
      className="bg-gradient-to-b from-[#081333] to-[#000004] px-4 py-10 md:py-24"
    >
      <SectionHeading title="Projetos">
        Demonstração dos meus trabalhos, cada projeto reflete meu aprendizado e
        meu compromisso em criar experiências únicas
      </SectionHeading>

      <section className="container mx-auto flex flex-wrap items-start justify-start gap-x-6 gap-y-8 py-8">
        {lista_projetos.map((props) => (
          <motion.div
            animate={{ translateY: "-100px", opacity: 0, scale: 0.8 }}
            whileInView={{ translateY: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            key={props.titulo}
            className="mx-auto flex min-h-[300px] max-w-[380px] flex-auto flex-col items-center justify-start"
          >
            <div className="h-[240px] max-w-[380px] overflow-clip rounded-t">
              <img
                src={props.imagem_url}
                alt={props.titulo}
                className="block h-auto w-full object-cover object-center"
              />
            </div>

            <div className="flex max-w-[380px] flex-col rounded-b-md bg-indigo-950/60 px-2 py-4">
              <h4 className="mb-2 text-3xl font-bold">{props.titulo}</h4>
              <div className="flex flex-wrap gap-1.5">
                {props.tags.map((tag) => (
                  <motion.div
                    animate={{ backgroundPositionX: "-100%" }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                      duration: 2,
                    }}
                    key={tag}
                    className={`${highlightTags(tag)}`}
                  >
                    <span className="card-slug uppercase">{tag}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mb-4 mt-2 max-w-[50ch] text-base leading-6 text-white/80">
                {props.descricao}
              </p>
              <div className="flex w-full flex-wrap items-center justify-center gap-4 md:justify-between">
                {props.repositorio_link ? (
                  <motion.a
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.8, rotate: 3 }}
                    href={props.repositorio_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex w-full items-center justify-center gap-2 px-8 py-2 md:w-auto"
                  >
                    <GithubIcon size={19} />
                    Repositório
                  </motion.a>
                ) : null}

                {props.demonstracao_link ? (
                  <motion.a
                    whileHover={{ scale: 0.9 }}
                    whileTap={{ scale: 0.8, rotate: 3 }}
                    href={props.demonstracao_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full items-center justify-center gap-2 px-8 py-2 text-center md:w-auto"
                  >
                    Demonstração
                  </motion.a>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
}
