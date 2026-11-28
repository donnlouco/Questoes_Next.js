"use client";

import React, { createContext, useContext, useState } from "react";


export type TamanhoFonte = "normal" | "ampliada";

interface AcessibilidadeContextValue {
  altoContraste: boolean;
  tamanhoFonte: TamanhoFonte;
  alternarAltoContraste: () => void;
  alternarTamanhoFonte: () => void;
}

const AcessibilidadeContext = createContext<AcessibilidadeContextValue | undefined>(
  undefined
);

export function Providers({ children }: { children: React.ReactNode }) {
  const [altoContraste, setAltoContraste] = useState<boolean>(false);
  const [tamanhoFonte, setTamanhoFonte] = useState<TamanhoFonte>("normal");

  const alternarAltoContraste = () => {
    setAltoContraste((prev) => !prev);
  };

  const alternarTamanhoFonte = () => {
    setTamanhoFonte((prev) => (prev === "normal" ? "ampliada" : "normal"));
  };

  return (
    <AcessibilidadeContext.Provider
      value={{
        altoContraste,
        tamanhoFonte,
        alternarAltoContraste,
        alternarTamanhoFonte,
      }}
    >
      {/* Wrapper no cliente aplica atributos data-* e classes reativas sem virar Server Component os children */}
      <div
        data-alto-contraste={altoContraste ? "ativo" : "inativo"}
        data-tamanho-fonte={tamanhoFonte}
        className={[
          "min-h-screen transition-colors",
          altoContraste
            ? "bg-neutral-950 text-amber-200"
            : "bg-slate-50 text-slate-900",
          tamanhoFonte === "ampliada" ? "text-lg leading-relaxed" : "text-base leading-normal",
        ].join(" ")}
      >
        {children}
      </div>
    </AcessibilidadeContext.Provider>
  );
}

/**
 * Hook customizado com validação explícita:
 * evita falhas silenciosas se alguém chamar useAcessibilidade() fora de <Providers>.
 */
export function useAcessibilidade(): AcessibilidadeContextValue {
  const contexto = useContext(AcessibilidadeContext);

  if (!contexto) {
    throw new Error(
      "useAcessibilidade() deve ser utilizado dentro de um <Providers> (AcessibilidadeContext)."
    );
  }

  return contexto;
}