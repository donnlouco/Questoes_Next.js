import { Suspense } from "react";
import { BarraAcessibilidade } from "../components/BarraAcessilidade";
import { MuralComunicados } from "../components/MuralComunicados";

export default function PortalPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <header className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wider opacity-75">
          IFMS • Comunicação Institucional
        </p>
        <h1 className="text-2xl font-bold">Portal de Comunicados</h1>
      </header>

      <BarraAcessibilidade />

      <Suspense fallback={<p className="p-4">Carregando comunicados do servidor...</p>}>
        <MuralComunicados />
      </Suspense>
    </main>
  );
}