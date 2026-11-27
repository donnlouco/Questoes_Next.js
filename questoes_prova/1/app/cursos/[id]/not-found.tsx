import Link from "next/link"


export default function CursoNaoEncontrado(){
    return(
        <div className="flex flex-col items-start justify-center p-8 border-l-4 border-[#4f6d24] bg-[#f2f2f2] rounded">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4f6d24] mb-1">
                Erro 404
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Curso não encontrado
            </h1>
            <p className="text-gray-700 mb-6">
                O ID informado não corresponde a nenhum curso disponível no catálogo.
            </p>
            <Link href="/cursos/1" className="bg-[#4f6d24] text-white text-lg font-semibold px-56 py-5 rounded hover:bg-[#3e561c] transition-colors"> 
            Retornar para o primeiro curso
            </Link>
        </div>
    )
    
}