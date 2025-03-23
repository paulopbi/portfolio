import CoverImg from "@/assets/banner_teste.png"
import MovieMateCover from "@/assets/movie_mate_cover.png"
/* demo */
import Dogs from "@/assets/demo/dogs.png"
import LemonPeper from "@/assets/demo/lemon_peper.jpg"
import MovieMate from "@/assets/demo/movie_mate.jpeg"
import CodeLandia from "@/assets/demo/codelandia.jpg"
import FlashDash from "@/assets/demo/flashdash.gif"
import Sass from "@/assets/demo/sass.gif"
import RickAndMorty from "@/assets/demo/rick_morty.gif"

/* icons */
import ReactIcon from "@/components/Icons/React_Icon"
import JavascriptIcon from "@/components/Icons/JS_Icon"
import FigmaIcon from "@/components/Icons/Figma_Icon"
import TailwindIcon from "@/components/Icons/Tailwind_Icon"
import TypeIcon from "@/components/Icons/Type_Icon"
import SassIcon from "@/components/Icons/Sass_Icon"
import StyledComponentsIcon from "@/components/Icons/Styled_Icon"
import GitIcon from "@/components/Icons/Git_Icon"
import HTMLIcon from "@/components/Icons/HTML_Icon"
import MongoDBIcon from "@/components/Icons/Mongo_Icon"
import NextIcon from "@/components/Icons/Next_Icon"
import NodeIcon from "@/components/Icons/Node_Icon"
import PostgresIcon from "@/components/Icons/Postgres_Icon"
import PrismaIcon from "@/components/Icons/Prisma_Icon"

const movieMateDescription = `
  O Movie Mate  é uma aplicação web desenvolvida para facilitar a pesquisa e análise de filmes, oferecendo uma experiência interativa aos usuários. Ao utilizar a API do TMDB (The Movie Database), o sistema permite que os usuários pesquisem informações detalhadas sobre filmes em tempo real, enquanto digitam seus títulos. <br/><br/> 
  Essa funcionalidade de busca dinâmica é alimentada por [tecnologia/framework utilizado(a) para a integração da API, ex.: React com Axios]. Para garantir uma análise mais profunda dos interesses dos usuários, o Movie Mate  armazena os dados das pesquisas realizadas em um banco de dados gerenciado pelo [nome do serviço de banco de dados, ex.: Appwrite]. Cada vez que um usuário realiza uma pesquisa, os dados são enviados ao backend através de [tecnologia utilizada para comunicação, ex.: requisições HTTP assíncronas] e registrados no banco de dados. <br/><br/>
  Esses registros permitem identificar quais filmes foram mais pesquisados ao longo do tempo, proporcionando insights valiosos sobre as preferências dos usuários. <br/><br/> 
  A interface do Movie Mate foi construída utilizando [tecnologia/framework utilizado(a) para o frontend, ex.: React.js], garantindo uma experiência fluida e responsiva. A estilização foi implementada com [tecnologia utilizada para estilização, ex.: CSS Modules, TailwindCSS ou Styled Components], resultando em um design moderno e intuitivo. Além disso, a aplicação foi desenvolvida com foco em [detalhe técnico relevante, ex.: performance, acessibilidade ou escalabilidade], assegurando uma experiência consistente em diferentes dispositivos. 
  No backend, foi utilizado [linguagem/framework/backend utilizado, ex.: Node.js com Express] para gerenciar as requisições à API do TMDB e para processar os dados antes de enviá-los ao banco de dados. A arquitetura do sistema foi projetada para ser modular e escalável, permitindo futuras expansões, como [exemplo de funcionalidade futura, ex.: adicionar recomendações personalizadas baseadas nos filmes mais pesquisados]. <br/><br/> 
  O Movie Mate  é um exemplo prático de como integrar APIs externas, manipular dados em tempo real e armazená-los de forma eficiente, demonstrando minha capacidade de desenvolver soluções completas e funcionais utilizando [lista de tecnologias principais, ex.: React, Appwrite e TypeScript]. 
`

const dogsDescription =
  "Uma rede social para cachorros, onde os usuários podem compartilhar as fotos dos seus pets com outras pessoas, possui autenticação e cadastro e totalmente optimizado com o uso de Next.js."

export const projectsContentInfo = [
  {
    main: true,
    image_url: Dogs.src,
    cover: CoverImg,
    title: "dogs",
    slug: "dogs",
    year: 2024,
    tags: ["next js", "css", "typescript"],
    description: dogsDescription,

    repository: "https://github.com/paulopbi/dogs-next",
    demo_url: "https://dogs-next-bice.vercel.app/",
  },
  {
    main: true,
    image_url: MovieMate.src,
    cover: MovieMateCover,
    title: "movie mate",
    slug: "movie-mate",
    year: 2024,
    tags: ["react js", "tailwind css", "Appwrite", "Debounce", "TMDB API"],
    description: movieMateDescription,
    repository: "https://github.com/paulopbi/movie-mate",
    demo_url: "https://movie-mate-rho.vercel.app/",
  },
  {
    main: true,
    image_url: Sass.src,
    cover: CoverImg,
    title: "saas landing page",
    slug: "sass-landing-page",
    year: 2024,
    tags: ["next js", "tailwind css", "motion", "typescript"],
    description:
      "É uma Landing page com interface moderna de um SaaS ou 'Software as a Service', utilizando o 'motion' para criar animações suaves, efeito parallax, efeitos de gradiente entre outros.",
    repository: "https://github.com/paulopbi/SaaS",
    demo_url: "https://saas-sable-psi.vercel.app/",
  },
  {
    main: true,
    image_url: FlashDash.src,
    cover: CoverImg,
    slug: "flashdash",
    title: "flashdash",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    year: 2024,
    description:
      "Uma aplicação que utiliza a API do Unsplash que possui várias fotos, os usuários podem pesquisar e baixar as fotos para utilizar como wallpaper de celular ou computador.",
    repository: "https://github.com/paulopbi/flashdash",
    demo_url: "https://flashdash-nine.vercel.app/",
  },
  {
    main: false,
    image_url: CodeLandia,
    cover: CoverImg,
    slug: "codelandia",
    title: "codelândia",
    tags: ["html", "css"],
    year: 2024,
    description:
      "Codelândia são desafios frontend onde você tem um design no figma e precisa transoformar em um site. Criei várias landing pages para praticar os conhecimentos de HTML e CSS.",
    repository: "https://github.com/paulopbi/codelandia",
    demo_url: null,
  },
  {
    main: false,
    image_url: RickAndMorty.src,
    /* cover: CoverImg, */
    slug: "rick-and-morty",
    title: "rick and morty",
    tags: ["react js", "motion", "css", "javascript"],
    year: 2024,
    description:
      "Explore o rico multiverso de Rick e Morty onde você dados detalhados de todos os personagens da serie, podendo utilizar vários filtros como nome ou status para customizar as suas pesquisas.",
    repository: "https://github.com/paulopbi/rick-and-morty",
    demo_url: "https://paulopbi.github.io/rick-and-morty/",
  },
  {
    main: false,
    image_url: LemonPeper,
    cover: CoverImg,
    slug: "lemon-peper",
    title: "lemon peper",
    tags: ["UI Design", "Figma"],
    year: 2024,
    description:
      "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
    demo_url: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    repository: null,
  },
]

export const stacks = [
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Typescript",
    icon: TypeIcon,
  },
  {
    name: "Javascript",
    icon: JavascriptIcon,
  },
  {
    name: "Figma",
    icon: FigmaIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },
  {
    name: "SASS",
    icon: SassIcon,
  },
  {
    name: "GIT",
    icon: GitIcon,
  },
  {
    name: "Styled Components",
    icon: StyledComponentsIcon,
  },
  {
    name: "Node JS",
    icon: NodeIcon,
  },
  {
    name: "Next JS",
    icon: NextIcon,
  },
  {
    name: "Postgres SQL",
    icon: PostgresIcon,
  },
  {
    name: "Prisma",
    icon: PrismaIcon,
  },
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "Mongo DB",
    icon: MongoDBIcon,
  },
]
