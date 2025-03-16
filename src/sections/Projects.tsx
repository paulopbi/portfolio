import Dogs from "../assets/demo/dogs.png"
import LemonPeper from "../assets/demo/lemon_peper.jpg"
import MovieMate from "../assets/demo/movie_mate.jpeg"
import CodeLandia from "../assets/demo/codelandia.jpg"
import FlashDash from "../assets/demo/flashdash.gif"
import Sass from "../assets/demo/sass.gif"
import RickAndMorty from "../assets/demo/rick_morty.gif"
import CardProject from "@/components/card-project"
import { TextAnimate } from "@/components/magicui/text-animate"

const allProjects = [
  {
    title: "Dogs",
    tags: ["next js", "css", "typescript"],
    image_url: Dogs.src,
    repository: "https://github.com/paulopbi/dogs-next",
    demo_url: "https://dogs-next-bice.vercel.app/",
    description:
      "Uma rede social para cachorros, onde os usuários podem compartilhar as fotos dos seus pets com outras pessoas, possui autenticação e cadastro e totalmente optimizado com o uso de Next.js.",
  },
  {
    title: "Movie Mate",
    tags: ["react js", "tailwind css", "Appwrite", "Debounce", "TMDB API"],
    image_url: MovieMate.src,
    repository: "https://github.com/paulopbi/movie-mate",
    demo_url: "https://movie-mate-rho.vercel.app/",
    description:
      "Permite pesquisar filmes utilizando a API do TMDB, Ao pesquisar é utilizado o debounce nas requisições, os títulos pesquisados são salvos no Appwrite, permitindo exibir os mais procurados.",
  },
  {
    title: "Saas Landing Page",
    tags: ["next js", "tailwind css", "motion", "typescript"],
    image_url: Sass.src,
    repository: "https://github.com/paulopbi/SaaS",
    demo_url: "https://saas-sable-psi.vercel.app/",
    description:
      "É uma Landing page com interface moderna de um SaaS ou 'Software as a Service', utilizando o 'motion' para criar animações suaves, efeito parallax, efeitos de gradiente entre outros.",
  },
  {
    title: "FlashDash",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    image_url: FlashDash.src,
    repository: "https://github.com/paulopbi/flashdash",
    demo_url: "https://flashdash-nine.vercel.app/",
    description:
      "Uma aplicação que utiliza a API do Unsplash que possui várias fotos, os usuários podem pesquisar e baixar as fotos para utilizar como wallpaper de celular ou computador.",
  },
  {
    title: "Codelandia",
    tags: ["html", "css"],
    image_url: CodeLandia,
    repository: "https://github.com/paulopbi/codelandia",
    demo_url: null,
    description:
      "Codelândia são desafios frontend onde você tem um design no figma e precisa transoformar em um site. Criei várias landing pages para praticar os conhecimentos de HTML e CSS.",
  },
  {
    title: "Rick and Morty",
    tags: ["react js", "motion", "css", "javascript"],
    image_url: RickAndMorty.src,
    repository: "https://github.com/paulopbi/rick-and-morty",
    demo_url: "https://paulopbi.github.io/rick-and-morty/",
    description:
      "Explore o rico multiverso de Rick e Morty onde você dados detalhados de todos os personagens da serie, podendo utilizar vários filtros como nome ou status para customizar as suas pesquisas.",
  },
  {
    title: "Lemon Peper",
    tags: ["UI Design", "Figma"],
    image_url: LemonPeper,
    repository: null,
    demo_url: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    description:
      "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
  },
]

const Projects = () => {
  return (
    <section className="container mt-16">
      <TextAnimate className="text-muted text-center text-sm font-light">
        Projetos
      </TextAnimate>
      {/* projects */}
      <div className="relative mt-8 grid grid-cols-1 place-content-center gap-x-20 gap-y-10 md:grid-cols-2">
        {allProjects.map((project) => (
          <CardProject
            key={project.title}
            imageSrc={project.image_url}
            title={project.title}
            skills={project.tags}
            hrefTo={`/projetos/${project.title}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
