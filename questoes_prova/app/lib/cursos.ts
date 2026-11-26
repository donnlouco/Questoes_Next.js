export interface Cursos{
    id: string;
    titulo: string;
    cargaHoraria: string;
    ementaDescritiva: string;
    preRequisitos: string[];
}

export const CURSOS: Cursos[] = [{
    id: "1",
    titulo: "Sistema Web",
    cargaHoraria: "51 horas",
    ementaDescritiva: "Fundamentos de desenvolvimento web: HTTP, HTML, CSS, JavaScript, arquitetura cliente-servidor e frameworks modernos como React e Next.js.",
    preRequisitos: ["Algoritmo e loginca", "Design e Desenvolvimento de Interfaces Web"],
},{
    id: "2",
    titulo: "Sistema Web",
    cargaHoraria: "51 horas",
    ementaDescritiva: "Fundamentos de desenvolvimento web: HTTP, HTML, CSS, JavaScript, arquitetura cliente-servidor e frameworks modernos como React e Next.js.",
    preRequisitos: [""]
},{
    id: "3",
    titulo: "Sistema Web",
    cargaHoraria: "51 horas",
    ementaDescritiva: "Fundamentos de desenvolvimento web: HTTP, HTML, CSS, JavaScript, arquitetura cliente-servidor e frameworks modernos como React e Next.js.",
    preRequisitos: [""]
}
]