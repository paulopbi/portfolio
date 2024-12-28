const formacoes = [
  {
    id: 1,
    nome: "Analise E Desenvolvimento de Sistemas",
    instituicao: "Unicesumar",
    grau: "Superior Completo",
    icone: "college",
    horas: 18,
  },
  {
    id: 2,
    nome: "Inglês",
    instituicao: "Intermediário",
    grau: "Idioma",
    icone: "college",
    horas: 34,
  },
  {
    id: 3,
    nome: "UI Design Avançado",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "study",
    horas: 22,
  },
  {
    id: 4,
    nome: "Next JS",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "study",
    horas: 22,
  },
  {
    id: 5,
    nome: "React",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "study",
    horas: 22,
  },
  {
    id: 6,
    nome: "Typescript",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "study",
    horas: 22,
  },
  {
    id: 7,
    nome: "Javascript ES6+",
    instituicao: "Origamid",
    grau: "Curso",
    icone: "study",
    horas: 22,
  },
];

export default function Estudos() {
  return (
    <section className="container mx-auto w-full px-4 py-10">
      <div className="text-center">
        <h3 className="section-title title-gradient">Estudos</h3>
        <span className="section-subtitle">
          Demonstrações e repositórios dos meus estudos.
        </span>
      </div>

      <section className="container mx-auto grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {formacoes.map((formacao) => (
          <div
            key={formacao.id}
            className="flex flex-col justify-between rounded-md border border-white bg-indigo-900 p-4 md:min-h-[230px] md:max-w-[400px]"
          >
            <div className="pb-8">
              <h4 className="mb-2 text-base font-medium">{formacao.grau}</h4>
              <h3 className="max-w-[35ch] text-2xl font-bold leading-8 tracking-normal">
                {formacao.nome}
              </h3>
            </div>
            <div className="flex items-center justify-between text-sm font-light uppercase">
              <span>{formacao.instituicao}</span>
              <span>{formacao.horas}H</span>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
