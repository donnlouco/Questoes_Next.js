import "server-only";

export interface ComunicadoInterno {
  id: string;
  titulo: string;
  setor: string;
  dataPublicacao: string;
  resumo: string;
  // Dado confidencial de uso interno (ex.: código de protocolo / restrição administrativa)
  codigoProtocoloInterno: string;
  nivelAcesso: "INTERNO_IFMS" | "DIRETORIA";
}

/**
 * Simula consulta segura no servidor (banco de dados, API interna ou variável de ambiente secreta).
 * Como o arquivo tem `import "server-only"`, nenhum Client Component pode importar esta função.
 */
export async function obterComunicadosConfidenciais(): Promise<ComunicadoInterno[]> {
  // Exemplo de variável exclusiva do servidor (sem prefixo NEXT_PUBLIC_)
  const chaveInterna = process.env.IFMS_INTERNAL_API_KEY ?? "chave-simulada-servidor";

  // Simula pequena latência de consulta no servidor
  await new Promise((resolve) => setTimeout(resolve, 100));

  void chaveInterna;

  return [
    {
      id: "com-01",
      titulo: "Calendário Acadêmico - Ajustes de Laboratório",
      setor: "Diretoria de Ensino (DIREN)",
      dataPublicacao: "27/11/2026",
      resumo:
        "Atualização dos horários de manutenção preventiva nos laboratórios de informática do campus.",
      codigoProtocoloInterno: "IFMS-PROT-2026-8841",
      nivelAcesso: "INTERNO_IFMS",
    },
    {
      id: "com-02",
      titulo: "Reunião do Colegiado - Planejamento Anual",
      setor: "Gabinete / Coordenação ADS",
      dataPublicacao: "26/11/2026",
      resumo:
        "Pauta preliminar para revisão de projetos integradores e estágios supervisionados.",
      codigoProtocoloInterno: "IFMS-PROT-2026-8819",
      nivelAcesso: "DIRETORIA",
    },
  ];
}