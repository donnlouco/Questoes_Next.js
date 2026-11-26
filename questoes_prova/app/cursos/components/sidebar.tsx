"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CURSOS } from "@/app/lib/cursos";

export default function SideBarCursos(){
    const[expandido, setExpandido] = useState(true);
    const pathname = usePathname();

    return (
    <aside
      className={`bg-[#f2f2f2] border-r-4 border-[#cccccc] transition-all duration-300 flex flex-col justify-between p-4 ${
        expandido ? "w-72" : "w-20"
      }`}
    >
      <div>
        <div className="flex items-center justify-between border-b-2 border-[#4f6d24] pb-3 mb-4">
          {expandido && (
            <h2 className="font-bold text-[#4f6d24] text-lg">
              Catálogo de Cursos
            </h2>
          )}
          <button
            type="button"
            onClick={() => setExpandido(!expandido)}
            className="bg-[#4f6d24] text-white text-xs font-semibold px-2.5 py-1.5 rounded hover:bg-[#3e561c] cursor-pointer"
            title="Alternar modo de visualização da barra lateral"
          >
            {expandido ? "« Recolher" : "»"}
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {CURSOS.map((curso) => {
            const ativo = pathname === `/cursos/${curso.id}`;
            return (
              <Link
                key={curso.id}
                href={`/cursos/${curso.id}`}
                prefetch={true}
                className={`border-l-4 px-3 py-2.5 text-sm font-medium transition-colors ${
                  ativo
                    ? "bg-[#e2ead5] border-[#4f6d24] text-[#2f4214] font-bold"
                    : "bg-[#e8e8e8] border-[#bcbcbc] text-gray-800 hover:bg-[#dcdcdc]"
                }`}
              >
                {expandido ? `ID ${curso.id}: ${curso.titulo}` : `ID ${curso.id}`}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-6 pt-3 border-t border-gray-300 text-xs text-gray-600">
        {expandido ? (
          <p>
            Estado do menu: <strong>Expandido</strong> (persiste ao trocar de curso)
          </p>
        ) : (
          <p className="text-center font-bold">Rec.</p>
        )}
      </div>
    </aside>
  );
}

