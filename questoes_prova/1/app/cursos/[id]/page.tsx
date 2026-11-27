import { notFound } from "next/navigation";
import { buscarCursoPorId } from "../../lib/cursos";

interface CursoPageProps {
  params: Promise<{ id: string }>;
}

export default async function CursoDetalhePage({ params }: CursoPageProps) {
  const { id } = await params;
  const curso = buscarCursoPorId(id);

  if (!curso) {
    notFound();
  }

  return (
    <main className="space-y-6">
      <header className="border-t-4 border-[#4f6d24] bg-[#f2f2f2] p-4">
        <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
          Curso ID #{curso.id}
        </span>
        <h1 className="text-2xl font-normal text-[#4f6d24] mt-1">
          {curso.titulo}
        </h1>
      </header>

      <div className="bg-[#f2f2f2] border-l-8 border-[#cccccc] p-4 text-sm">
        <strong className="text-gray-900">Carga horária:</strong>{" "}
        <span className="text-gray-700">{curso.cargaHoraria}</span>
      </div>

      <section className="bg-[#f2f2f2] border-l-8 border-[#cccccc] p-4 text-sm space-y-2">
        <h2 className="font-bold text-gray-900 text-base">
          Ementa descritiva
        </h2>
        <p className="text-gray-700 leading-relaxed">{curso.ementaDescritiva}</p>
      </section>

      <section className="bg-[#f2f2f2] border-l-8 border-[#cccccc] p-4 text-sm space-y-2">
        <h2 className="font-bold text-gray-900 text-base">
          Pré-requisitos
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {curso.preRequisitos.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}