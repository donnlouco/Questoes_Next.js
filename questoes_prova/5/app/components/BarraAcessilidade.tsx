"use client";

import { useAcessibilidade } from "@/app/providers";

export function BarraAcessibilidade() {
  const {
    altoContraste,
    tamanhoFonte,
    alternarAltoContraste,
    alternarTamanhoFonte,
  } = useAcessibilidade();

  
  return (
    <section
      aria-label="Barra de ferramentas de acessibilidade"
      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-current/20 p-4"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide opacity-75">
          Acessibilidade do Portal
        </p>
        <p className="text-sm">
          Alto Contraste:{" "}
          <strong>{altoContraste ? "Ativo" : "Inativo"}</strong> | Fonte:{" "}
          <strong>{tamanhoFonte === "ampliada" ? "Ampliada" : "Normal"}</strong>
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={alternarAltoContraste}
          aria-pressed={altoContraste}
          className="cursor-pointer rounded-lg border border-current px-3 py-2 font-medium"
        >
          {altoContraste ? "Desativar Alto Contraste" : "Ativar Alto Contraste"}
        </button>

        <button
          type="button"
          onClick={alternarTamanhoFonte}
          aria-pressed={tamanhoFonte === "ampliada"}
          className="cursor-pointer rounded-lg border border-current px-3 py-2 font-medium"
        >
          {tamanhoFonte === "ampliada" ? "Fonte Normal" : "Ampliar Fonte"}
        </button>
      </div>
    </section>
  );
}