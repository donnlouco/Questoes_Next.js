export interface Curso{
    id: string;
    titulo: string;
    cargaHoraria: string;
    ementaDescritiva: string;
    preRequisitos: string[];
}

export const CURSOS: Curso[] = [{
    id: "1",
    titulo: "Sistema Web",
    cargaHoraria: "51 horas",
    ementaDescritiva: "Fundamentos de desenvolvimento web: HTTP, HTML, CSS, JavaScript, arquitetura cliente-servidor e frameworks modernos como React e Next.js.",
    preRequisitos: ["Algoritmo e loginca", "Design e Desenvolvimento de Interfaces Web"],
},{
    id: "2",
    titulo: "Banco de Dados",
    cargaHoraria: "60 horas",
    ementaDescritiva: "Modelagem relacional, SQL, normalização, transações e introdução a bancos NoSQL.",
    preRequisitos: ["Lógica de Programação", "Estruturas de Dados"]
},{
    id: "3",
    titulo: "Engenharia de software",
    cargaHoraria: "70 horas",
    ementaDescritiva: "Processos de desenvolvimento, metodologias ágeis, requisitos, arquitetura, testes e gestão de projetos de software.",
    preRequisitos: ["Sistemas Web", "Banco de Dados"]
}
]

export function buscarCursoPorId(id: string): Curso | undefined {
  return CURSOS.find((curso) => curso.id === id);
}