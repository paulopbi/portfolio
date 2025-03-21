/* demo */
import Dogs from "../assets/demo/dogs.png"
import LemonPeper from "../assets/demo/lemon_peper.jpg"
import MovieMate from "../assets/demo/movie_mate.jpeg"
import CodeLandia from "../assets/demo/codelandia.jpg"
import FlashDash from "../assets/demo/flashdash.gif"
import Sass from "../assets/demo/sass.gif"
import RickAndMorty from "../assets/demo/rick_morty.gif"

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

export const projectsInfo = [
  {
    main: true,
    slug: "dogs",
    title: "dogs",
    tags: ["next js", "css", "typescript"],
    image_url: Dogs.src,
    repository: "https://github.com/paulopbi/dogs-next",
    demo_url: "https://dogs-next-bice.vercel.app/",
    description:
      "Uma rede social para cachorros, onde os usuários podem compartilhar as fotos dos seus pets com outras pessoas, possui autenticação e cadastro e totalmente optimizado com o uso de Next.js.",
  },
  {
    main: true,
    slug: "movie-mate",
    title: "movie mate",
    tags: ["react js", "tailwind css", "Appwrite", "Debounce", "TMDB API"],
    image_url: MovieMate.src,
    repository: "https://github.com/paulopbi/movie-mate",
    demo_url: "https://movie-mate-rho.vercel.app/",
    description:
      "Permite pesquisar filmes utilizando a API do TMDB, Ao pesquisar é utilizado o debounce nas requisições, os títulos pesquisados são salvos no Appwrite, permitindo exibir os mais procurados.",
  },
  {
    main: true,
    slug: "sass-landing-page",
    title: "saas landing page",
    tags: ["next js", "tailwind css", "motion", "typescript"],
    image_url: Sass.src,
    repository: "https://github.com/paulopbi/SaaS",
    demo_url: "https://saas-sable-psi.vercel.app/",
    description:
      "É uma Landing page com interface moderna de um SaaS ou 'Software as a Service', utilizando o 'motion' para criar animações suaves, efeito parallax, efeitos de gradiente entre outros.",
  },
  {
    main: true,
    slug: "flashdash",
    title: "flashdash",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    image_url: FlashDash.src,
    repository: "https://github.com/paulopbi/flashdash",
    demo_url: "https://flashdash-nine.vercel.app/",
    description:
      "Uma aplicação que utiliza a API do Unsplash que possui várias fotos, os usuários podem pesquisar e baixar as fotos para utilizar como wallpaper de celular ou computador.",
  },
  {
    main: false,
    slug: "codelandia",
    title: "codelândia",
    tags: ["html", "css"],
    image_url: CodeLandia,
    repository: "https://github.com/paulopbi/codelandia",
    demo_url: null,
    description:
      "Codelândia são desafios frontend onde você tem um design no figma e precisa transoformar em um site. Criei várias landing pages para praticar os conhecimentos de HTML e CSS.",
  },
  {
    main: false,
    slug: "rick-and-morty",
    title: "rick and morty",
    tags: ["react js", "motion", "css", "javascript"],
    image_url: RickAndMorty.src,
    repository: "https://github.com/paulopbi/rick-and-morty",
    demo_url: "https://paulopbi.github.io/rick-and-morty/",
    description:
      "Explore o rico multiverso de Rick e Morty onde você dados detalhados de todos os personagens da serie, podendo utilizar vários filtros como nome ou status para customizar as suas pesquisas.",
  },
  {
    main: false,
    slug: "lemon-peper",
    title: "lemon peper",
    tags: ["UI Design", "Figma"],
    image_url: LemonPeper,
    repository: null,
    demo_url: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    description:
      "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
  },
]

export const rotatingTextValues = [
  "React",
  "Next JS",
  "Typescript",
  "Javascript",
  "Node JS",
  "Tailwind",
  "Figma",
]

export const projectKeyWords = [
  "express",
  "node js",
  "react",
  "next",
  "tailwind",
  "styled component",
  "css",
  "scss",
  "react hooks",
  "custom hooks",
  "figma",
  "design",
  "prisma",
  "git",
  "github",
  "javascript",
  "typescript",
  "docker",
  "linux",
  "windows",
  "frontend",
  "fullstack",
  "web development",
  "frontend development",
  "backend development",
  "responsive design",
  "ui/ux design",
  "component library",
  "state management",
  "context api",
  "redux",
  "zustand",
  "rest api",
  "graphql",
  "apollo client",
  "server-side rendering",
  "static site generation",
  "ssr",
  "ssg",
  "ci/cd",
  "continuous integration",
  "deployment",
  "aws",
  "azure",
  "cloud computing",
  "containerization",
  "kubernetes",
  "npm",
  "yarn",
  "pnpm",
  "version control",
  "code review",
  "agile methodology",
  "devops",
  "testing",
  "jest",
  "react testing library",
  "cypress",
  "storybook",
  "accessibility",
  "performance optimization",
  "seo",
  "search engine optimization",
  "progressive web app",
  "pwa",
  "mobile-first design",
  "prototyping",
  "mockups",
  "wireframes",
  "user experience",
  "user interface",
  "team collaboration",
  "open source",
  "api integration",
  "database management",
  "postgresql",
  "mysql",
  "mongodb",
  "nosql",
  "orm",
  "schema design",
  "middleware",
  "authentication",
  "authorization",
  "jwt",
  "oauth",
  "microservices",
  "monorepo",
  "lerna",
  "nx",
  "bash scripting",
  "terminal commands",
  "shell scripting",
  "virtual machines",
  "cross-platform development",
  "web accessibility standards",
  "wcag",
  "motion design",
  "animation",
  "framer motion",
  "webgl",
  "data visualization",
  "chart.js",
  "d3.js",
  "real-time applications",
  "socket.io",
  "websocket",
  "headless cms",
  "contentful",
  "sanity",
  "strapi",
  "jamstack",
  "static websites",
  "dynamic websites",
  "web performance",
  "lazy loading",
  "code splitting",
  "tree shaking",
  "bundle optimization",
  "webpack",
  "vite",
  "esbuild",
  "eslint",
]
