import Link from "next/link";
import { CURSOS } from "../lib/cursos";

export default function CursosHomePage() {
  return (
    <main>
      <div className="border-t-4 border-[#4f6d24] bg-[#f2f2f2] p-4 mb-6">
        <h1 className="text-2xl font-normal text-[#4f6d24]">
          Catálogo Académico de Disciplinas e Cursos
        </h1>
      </div>

      <p className="text-gray-700 mb-6">
        Selecione um curso na barra lateral ou nos atalhos abaixo para visualizar
        a carga horária, ementa descritiva e pré-requisitos. Experimente
        recolher a barra lateral e alternar entre os cursos para verificar a
        persistência do estado do layout.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CURSOS.map((curso) => (
          <Link
            key={curso.id}
            href={`/cursos/${curso.id}`}
            className="bg-[#4f6d24] text-white font-semibold text-center py-3 px-4 hover:bg-[#3e561c] transition-colors"
          >
            ID {curso.id} — {curso.titulo}
          </Link>
        ))}
      </div>
    </main>
  );
}