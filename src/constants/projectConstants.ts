/* demo */
import Dogs from "@/assets/demo/dogs.png"
import LemonPeper from "@/assets/demo/lemon_peper.jpg"
import MovieMate from "@/assets/demo/movie_mate.jpeg"
import CodeLandia from "@/assets/demo/codelandia.jpg"
import FlashDash from "@/assets/demo/flashdash.gif"
import Sass from "@/assets/demo/sass.gif"
import RickAndMorty from "@/assets/demo/rick_morty.gif"

const projectDescription = {
  dogs: `Uma rede social para cachorros, onde os usuários podem compartilhar as fotos dos seus pets com outras pessoas, possui autenticação e cadastro e totalmente optimizado com o uso de Next.js.`,
  movieMate: `O Movie Mate  é uma aplicação web desenvolvida para facilitar a pesquisa e análise de filmes, oferecendo uma experiência interativa aos usuários. Ao utilizar a API do [TMDB (The Movie Database)], o sistema permite que os usuários pesquisem informações detalhadas sobre filmes em tempo real, enquanto digitam seus títulos. <br/><br/>Essa funcionalidade de busca dinâmica é alimentada por [tecnologia/framework utilizado(a) para a integração da API, ex.: React com Axios]. Para garantir uma análise mais profunda dos interesses dos usuários, o Movie Mate  armazena os dados das pesquisas realizadas em um banco de dados gerenciado pelo [nome do serviço de banco de dados, ex.: Appwrite]. Cada vez que um usuário realiza uma pesquisa, os dados são enviados ao backend através de [tecnologia utilizada para comunicação, ex.: requisições HTTP assíncronas] e registrados no banco de dados. Esses registros permitem identificar quais filmes foram mais pesquisados ao longo do tempo, proporcionando insights valiosos sobre as preferências dos usuários. A interface do Movie Mate  foi construída utilizando [tecnologia/framework utilizado(a) para o frontend, ex.: React.js], garantindo uma experiência fluida e responsiva. <br/><br/> A estilização foi implementada com [tecnologia utilizada para estilização, ex.: CSS Modules, TailwindCSS ou Styled Components], resultando em um design moderno e intuitivo. Além disso, a aplicação foi desenvolvida com foco em [detalhe técnico relevante, ex.: performance, acessibilidade ou escalabilidade], assegurando uma experiência consistente em diferentes dispositivos. 
              No backend, foi utilizado [linguagem/framework/backend utilizado, ex.: Node.js com Express] para gerenciar as requisições à API do TMDB e para processar os dados antes de enviá-los ao banco de dados. <br/><br/> A arquitetura do sistema foi projetada para ser modular e escalável, permitindo futuras expansões, como [exemplo de funcionalidade futura, ex.: adicionar recomendações personalizadas baseadas nos filmes mais pesquisados]. O Movie Mate  é um exemplo prático de como integrar APIs externas, manipular dados em tempo real e armazená-los de forma eficiente, demonstrando minha capacidade de desenvolver soluções completas e funcionais utilizando [lista de tecnologias principais, ex.: React, Appwrite e TypeScript]. `,
  saas: "É uma Landing page com interface moderna de um SaaS ou 'Software as a Service', utilizando o 'motion' para criar animações suaves, efeito parallax, efeitos de gradiente entre outros.",
  flashdash:
    "Uma aplicação que utiliza a API do Unsplash que possui várias fotos, os usuários podem pesquisar e baixar as fotos para utilizar como wallpaper de celular ou computador.",
  codelandia:
    "Codelândia são desafios frontend onde você tem um design no figma e precisa transoformar em um site. Criei várias landing pages para praticar os conhecimentos de HTML e CSS.",
  rickAndMorty: `O Rick and Morty  é uma aplicação web desenvolvida para explorar os personagens e informações da famosa série de animação, utilizando a API pública do [Rick and Morty API]. A aplicação permite que os usuários naveguem por uma lista dinâmica de personagens, acessando detalhes como nome, espécie, status, localização e muito mais. <br/></br> Essa funcionalidade de busca e exibição de dados é implementada com [tecnologia/framework utilizado(a) para integração da API, ex.: React com Fetch API]. A interface foi cuidadosamente projetada para oferecer uma experiência intuitiva e envolvente. Utilizando [tecnologia/framework utilizado(a) para o frontend, ex.: React.js], a aplicação apresenta os personagens em um layout organizado e responsivo. A estilização foi realizada com [tecnologia utilizada para estilização, ex.: CSS puro, TailwindCSS ou Styled Components], garantindo um design moderno e visualmente atrativo. 
                Para melhorar a usabilidade, a aplicação inclui recursos como [detalhe técnico relevante, ex.: paginação, filtros por status ou espécie, ou busca por nome], permitindo que os usuários encontrem rapidamente as informações desejadas. <br/><br/> Os dados são consumidos diretamente da API pública e processados em tempo real, sem necessidade de armazenamento adicional no backend. Isso demonstra minha capacidade de trabalhar com APIs externas e manipular grandes volumes de dados de forma eficiente. O projeto também explora conceitos importantes de desenvolvimento frontend, como [exemplo de conceito, ex.: gerenciamento de estados com Context API ou Redux] e [outro exemplo, ex.: componentização para reutilização de código]. Além disso, a aplicação foi desenvolvida com foco em [detalhe técnico relevante, ex.: performance, responsividade ou acessibilidade], garantindo uma experiência consistente em diferentes dispositivos. O Rick and Morty  é um exemplo prático de como transformar uma API pública em uma interface interativa e funcional, demonstrando minha habilidade em criar soluções frontend utilizando [lista de tecnologias principais, ex.: React, JavaScript e CSS]. `,
  lemonPeper:
    "Lemon Peper, um projeto de UI Design feito em colaboração com um amigo, sendo um website para pizzaria, onde utilizando alguns filtros, o usuário pode ver vários tipos de pizzas diferentes.",
}

export const projectInfo = [
  {
    main: true,
    image_url: Dogs.src,
    title: "dogs",
    slug: "dogs",
    year: 2024,
    tags: ["next js", "css", "typescript", "JWT"],
    description: projectDescription.dogs,
    repository: "https://github.com/paulopbi/dogs-next",
    demo_url: "https://dogs-next-bice.vercel.app/",
  },
  {
    main: true,
    image_url: MovieMate.src,
    title: "movie mate",
    slug: "movie-mate",
    year: 2024,
    tags: ["react js", "tailwind css", "appwrite", "debounce", "TMDB API"],
    description: projectDescription.movieMate,
    repository: "https://github.com/paulopbi/movie-mate",
    demo_url: "https://movie-mate-rho.vercel.app/",
  },
  {
    main: true,
    image_url: Sass.src,
    title: "saas landing page",
    slug: "saas-landing-page",
    year: 2024,
    tags: ["next js", "tailwind css", "motion", "typescript"],
    description: projectDescription.saas,
    repository: "https://github.com/paulopbi/SaaS",
    demo_url: "https://saas-sable-psi.vercel.app/",
  },
  {
    main: true,
    image_url: FlashDash.src,
    slug: "flashdash",
    title: "flashdash",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    year: 2024,
    description: projectDescription.flashdash,
    repository: "https://github.com/paulopbi/flashdash",
    demo_url: "https://flashdash-nine.vercel.app/",
  },
  {
    main: false,
    image_url: CodeLandia,
    slug: "codelandia",
    title: "codelândia",
    tags: ["html", "css"],
    year: 2024,
    description: projectDescription.codelandia,
    repository: "https://github.com/paulopbi/codelandia",
    demo_url: null,
  },
  {
    main: false,
    image_url: RickAndMorty.src,
    slug: "rick-and-morty",
    title: "rick and morty",
    tags: ["react js", "motion", "css", "javascript"],
    year: 2024,
    description: projectDescription.rickAndMorty,
    repository: "https://github.com/paulopbi/rick-and-morty",
    demo_url: "https://paulopbi.github.io/rick-and-morty/",
  },
  {
    main: false,
    image_url: LemonPeper,
    slug: "lemon-peper",
    title: "lemon peper",
    tags: ["ui design", "figma"],
    year: 2024,
    description: projectDescription.lemonPeper,
    demo_url: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    repository: null,
  },
]
