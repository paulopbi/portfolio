/* demo */
import Zerou from "@/assets/demo/zerou.gif"
import Dogs from "@/assets/demo/dogs.png"
import LemonPeper from "@/assets/demo/lemon_peper.jpg"
import MovieMate from "@/assets/demo/movie_mate.jpeg"
import CodeLandia from "@/assets/demo/codelandia.jpg"
import FlashDash from "@/assets/demo/flashdash.gif"
import Sass from "@/assets/demo/sass.gif"
import RickAndMorty from "@/assets/demo/rick_morty.gif"
import FormHandler from "@/assets/demo/form-handler.gif"

const projectDescription = {
  dogs: `<strong>O Dogs é uma rede social dedicada aos amantes de cachorros, onde os usuários podem compartilhar fotos de seus pets e interagir com outras pessoas que compartilham da mesma paixão.</strong> A aplicação foi desenvolvida com foco em <strong>autenticação segura</strong> e <strong>experiência do usuário</strong>, utilizando tecnologias como <strong>Next.js</strong>, <strong>JWT (JSON Web Tokens)</strong>, <strong>TypeScript</strong> e <strong>CSS puro</strong>.<br/><br/> 
        Uma das características únicas do Dogs é o sistema de armazenamento temporário de fotos. As imagens compartilhadas permanecem disponíveis por apenas <strong>5 minutos</strong> antes de serem automaticamente deletadas do banco de dados. Essa funcionalidade garante um ambiente dinâmico e leve, evitando o acúmulo desnecessário de dados.<br/><br/> 
        Além disso, a aplicação foi totalmente otimizada para garantir <strong>performance</strong> e <strong>escalabilidade</strong>, graças ao uso de recursos avançados do <strong>Next.js</strong>, como renderização no servidor (SSR) e geração estática. A interface foi projetada com <strong>CSS puro</strong>, demonstrando minha habilidade em criar designs limpos e responsivos sem depender de bibliotecas adicionais.<br/><br/> 
        Este projeto reflete minha capacidade de desenvolver aplicações completas, combinando funcionalidades práticas, design intuitivo e segurança robusta. `,
  movieMate: `<strong>O Movie Mate é uma aplicação web desenvolvida para facilitar a pesquisa e análise de filmes, oferecendo uma experiência interativa aos usuários</strong>, ao utilizar a API do TMDB (The Movie Database), <strong>o sistema permite que os usuários pesquisem informações detalhadas sobre filmes em tempo real</strong>, enquanto digitam seus títulos preferidos, essa funcionalidade de busca dinâmica é alimentada pelos usos de React Hooks na hora de consumir a API. <br/><br/> 
              Para garantir uma análise mais profunda dos interesses dos usuários, o Movie Mate  armazena os dados das pesquisas realizadas em um banco de dados gerenciado pelo <strong>Appwrite</strong>. 
              Cada vez que um usuário realiza uma pesquisa, <strong>os dados são enviados ao backend através de requisições HTTP assíncronas e registrados no banco de dados</strong>. Esses registros permitem identificar quais filmes foram mais pesquisados ao longo do tempo, proporcionando insights valiosos sobre as preferências dos usuários. A interface do Movie Mate foi construída utilizando React, garantindo uma experiência fluida e responsiva. <br/><br/> 
              <strong>A estilização foi implementada com Tailwind</strong>, resultando em um design moderno e intuitivo. <br/><br/> A arquitetura do sistema foi projetada para ser modular e escalável, permitindo futuras expansões, como criar novas rotas onde podemos visualizar mais detalhes dos filmes (ex: descrição, casting de atores). O Movie Mate  é um exemplo prático de como integrar APIs externas, manipular dados em tempo real e armazená-los de forma eficiente, demonstrando minha capacidade de desenvolver soluções completas. `,
  flashdash: `<strong>O Flashdash é uma aplicação moderna e intuitiva que permite aos usuários explorar e baixar fotos de alta qualidade para usar como wallpapers em celulares ou computadores. </strong> A aplicação utiliza a <strong>API do Unsplash</strong>, uma das maiores plataformas de imagens gratuitas, garantindo acesso a uma vasta biblioteca de fotos incríveis e diversificadas. <br/><br/> Os usuários podem realizar pesquisas por temas específicos, encontrando imagens que se alinham aos seus interesses. 
              interface foi desenvolvida com foco na simplicidade e usabilidade, proporcionando uma experiência fluida e envolvente. Para isso, utilizei tecnologias como <strong>React.js</strong> combinado com <strong>TypeScript</strong>, garantindo um código robusto e escalável. Além disso, o design foi implementado com <strong>Tailwind CSS</strong> e componentes da biblioteca <strong>shadcn</strong>, resultando em uma interface limpa, responsiva e visualmente atraente. <br/><br/> 
              Este projeto demonstra minha habilidade em integrar APIs externas, como a do Unsplash, e transformá-las em uma aplicação prática e funcional. A escolha das tecnologias reflete meu compromisso com a criação de soluções modernas e eficientes, sempre priorizando a experiência do usuário. `,
  codelandia: `O Codelândia é uma coleção de desafios frontend que me permitiram praticar e aprimorar meus conhecimentos em <strong>HTML</strong> e <strong>CSS</strong>. O objetivo desses desafios é transformar designs fornecidos no <strong>Figma</strong> em landing pages funcionais, replicando fielmente o layout proposto.<br/><br/> 
               Neste projeto, desenvolvi várias landing pages, cada uma com um design único, para consolidar minhas habilidades em criação de interfaces responsivas e bem estruturadas. Esses desafios foram essenciais para aprimorar minha atenção aos detalhes e garantir que o código final fosse limpo e eficiente.<br/><br/> 
               Este projeto é um fork do trabalho original do desenvolvedor <strong>Iure</strong>, que criou os designs iniciais. Minha contribuição foi replicar as telas com precisão, utilizando apenas <strong>HTML</strong> e <strong>CSS puro</strong>, sem frameworks adicionais.<br/><br/> 
               Os desafios do Codelandia  demonstram minha dedicação em dominar as bases do desenvolvimento frontend e minha capacidade de traduzir designs visuais em código funcional. `,
  rickAndMorty: `<strong>O Rick and Morty é uma aplicação web desenvolvida para explorar os personagens e informações da famosa série de animação, utilizando a API pública do mesmo.</strong> A aplicação permite que os usuários naveguem por uma lista dinâmica de personagens, acessando detalhes como nome, espécie, status.
                 Essa funcionalidade de busca e exibição de dados é implementada com Fetch API. A interface foi cuidadosamente projetada para oferecer uma experiência intuitiva e envolvente. <strong>Utilizando React, a aplicação apresenta os personagens em um layout organizado e responsivo. A estilização foi realizada com CSS, garantindo um design moderno e visualmente atrativo e combinando o Framer Motion me permitiu fazer animações mais complexas de maneira simples</strong>. <br/><br/>
                 Para melhorar a usabilidade, a aplicação inclui recursos como Design Responsivo. Os dados são consumidos diretamente da API pública e processados em tempo real, sem necessidade de armazenamento adicional no backend. <strong>Isso demonstra minha capacidade de trabalhar com APIs externas e manipular grandes volumes de dados de forma eficiente</strong>. 
                 O projeto é um exemplo prático de como transformar uma API pública em uma interface interativa, funcional e bem animadas, demonstrando minha habilidade em criar soluções.`,
  saas: `Este projeto consiste em uma <strong>landing page moderna</strong> desenvolvida para promover um produto ou serviço baseado no modelo <strong>SaaS (Software as a Service)</strong>. A interface foi cuidadosamente projetada para oferecer uma experiência visualmente impactante e funcional, utilizando recursos avançados de design e interatividade. <br/><br/> 
        Entre os destaques técnicos, estão as animações suaves criadas com o auxílio de bibliotecas como o <strong>Motion</strong>, que proporcionam transições dinâmicas e envolventes. Além disso, a página conta com efeitos visuais sofisticados, como o <strong>parallax</strong>, que cria uma sensação de profundidade ao rolar a página, efeitos de <strong>gradiente</strong> modernos e elementos de <strong>marquee</strong> para transmitir movimento contínuo. <br/><br/> 
        A responsividade também foi uma prioridade no desenvolvimento deste projeto. A landing page foi construída para ser <strong>totalmente responsiva</strong>, garantindo uma experiência consistente e otimizada em qualquer dispositivo, seja desktop, tablet ou smartphone. Isso foi alcançado utilizando tecnologias como <strong>Flexbox e Grid</strong>. Combinando estética e funcionalidade, esta landing page demonstra minha capacidade de criar interfaces que não apenas impressionam visualmente, mas também entregam resultados práticos para negócios digitais. `,
  lemonPeper: `<strong>O Lemon Peper é um projeto de UI Design desenvolvido em colaboração com um amigo, criado para uma pizzaria fictícia</strong>. O objetivo foi desenvolver um website que oferecesse uma experiência visualmente atraente e funcional, permitindo que os usuários explorassem diferentes tipos de pizzas utilizando filtros intuitivos. <br/><br/> 
              Todo <strong>o design foi cuidadosamente elaborado no Figma, com foco em criar uma interface moderna, limpa e alinhada às necessidades dos usuários</strong>. As imagens utilizadas no projeto foram editadas no <strong>Photoshop</strong>, garantindo uma qualidade excepcional e um visual profissional. Cada detalhe foi pensado para destacar o apelo visual das pizzas e proporcionar uma experiência envolvente para o usuário. <br/><br/> 
              O projeto completo foi publicado no <strong>Behance</strong>, onde você pode conferir todos os detalhes do design acessando o link acima. Este trabalho reflete minha habilidade em criar designs funcionais e esteticamente impactantes, sempre priorizando a experiência do usuário e a qualidade visual.`,
  zerou: `O <strong></strong>Zerou é <strong>uma aplicação web desenvolvida com React</strong> que permite aos usuários organizarem e acompanharem seus jogos de maneira prática e personalizada, podendo fazer anotações dos jogos que está jogando de maneira rápida. <strong>Com funcionalidades de CRUD (Criar, Ler, Atualizar e Deletar)</strong>, animações suaves, editor de texto avançado e autenticação segura, é a ferramenta perfeita para quem quer manter anotar toda a sua jogatina.`,
  formHandler: `<strong>Form Handler</strong> é um projeto fullstack completo criado com o objetivo de aprofundar os conhecimentos no desenvolvimento de formulários web inteligentes e eficientes. A proposta principal do projeto é simular um fluxo real de um sistema de entrada de dados, aplicando <strong>boas práticas de desenvolvimento tanto no frontend quanto no backend</strong>. 
          Desde a <strong>validação dos dados na camada de interface</strong>, passando pela comunicação com a API, até o armazenamento no banco de dados, todas as etapas foram cuidadosamente construídas para garantir integridade, escalabilidade e uma experiência agradável para o usuário. <br/><br/>  O principal foco deste projeto é oferecer um <strong>formulário dinâmico com validação robusta</strong>, que forneça mensagens claras e úteis ao usuário final, ao mesmo tempo em que integra esses dados de forma segura com uma API backend. <br/><br/>
          A validação é aplicada tanto no frontend quanto no backend para garantir consistência e prevenir falhas de segurança. A ideia foi simular uma situação real onde o usuário envia dados e espera respostas precisas e amigáveis da aplicação. 
          Formulário dinâmico com validações em tempo real, opção de exibir ou ocultar o conteúdo dos campos de senha Aplicação de máscaras para CPF, telefone e CEP Busca automática de endereço a partir do CEP usando integração com API externa Feedback de erro e sucesso personalizado, com mensagens intuitivas Armazenamento de dados no banco de forma segura Foco na usabilidade com interface clara e mensagens que orientam o usuário durante a navegação.`,
}

export const allProjects = [
  {
    main: true,
    image_url: Zerou.src,
    slug: "zerou",
    title: "Zerou",
    year: 2023,
    tags: [
      "react js",
      "css",
      "typescript",
      "firebase",
      "react router",
      "TipTap",
      "framer motion",
    ],
    description: projectDescription.zerou,
    repository: "https://github.com/paulopbi/zerou",
    demo_url: "https://zerou.vercel.app/",
  },
  {
    main: true,
    image_url: Dogs.src,
    slug: "dogs",
    title: "Dogs",
    year: 2024,
    tags: ["next js", "css", "typescript", "JWT"],
    description: projectDescription.dogs,
    repository: "https://github.com/paulopbi/dogs-next",
    demo_url: "https://dogs-next-bice.vercel.app/",
  },
  {
    main: true,
    image_url: MovieMate.src,
    slug: "movie-mate",
    title: "Movie Mate",
    year: 2024,
    tags: ["react js", "tailwind css", "appwrite", "debounce", "TMDB API"],
    description: projectDescription.movieMate,
    repository: "https://github.com/paulopbi/movie-mate",
    demo_url: "https://movie-mate-rho.vercel.app/",
  },
  {
    main: true,
    image_url: Sass.src,
    slug: "saas-landing-page",
    title: "Saas Landing Page",
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
    title: "Flashdash",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    year: 2024,
    description: projectDescription.flashdash,
    repository: "https://github.com/paulopbi/flashdash",
    demo_url: "https://flashdash-nine.vercel.app/",
  },
  {
    main: true,
    image_url: FormHandler.src,
    slug: "form-handler",
    title: "Form Handler",
    tags: [
      "react js",
      "typescript",
      "css",
      "zod",
      "react hook form",
      "sqlite",
      "prisma orm",
      "express",
    ],
    year: 2025,
    description: projectDescription.formHandler,
    repository: "https://github.com/paulopbi/form-handler",
    demo_url: null,
  },
  {
    main: false,
    image_url: CodeLandia,
    slug: "codelandia",
    title: "Codelandia",
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
    title: "Rick And Morty",
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
    title: "Lemon Peper",
    tags: ["ui design", "figma", "photoshop"],
    year: 2024,
    description: projectDescription.lemonPeper,
    demo_url: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
    repository: null,
  },
]
