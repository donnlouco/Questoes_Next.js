import { obterComunicadosConfidenciais } from "../lib/comunicados";

// Por não ter "use client", este componente roda exclusivamente no servidor.
export async function MuralComunicados() {
  const comunicados = await obterComunicadosConfidenciais();

  return (
    <section aria-label="Mural de comunicados internos" className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Mural de Comunicados Internos</h2>
        <span className="rounded bg-emerald-700 px-2.5 py-1 text-xs font-semibold text-white">
          Renderizado no Servidor
        </span>
      </div>

      <div className="grid gap-4">
        {comunicados.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border border-current/20 p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs opacity-80">
              <span>{item.setor}</span>
              <span>Publicado em: {item.dataPublicacao}</span>
            </div>

            <h3 className="mt-1 text-lg font-semibold">{item.titulo}</h3>
            <p className="mt-2">{item.resumo}</p>

            <p className="mt-3 text-xs opacity-75">
              Protocolo interno: <code>{item.codigoProtocoloInterno}</code> ({item.nivelAcesso})
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}