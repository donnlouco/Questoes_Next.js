"use server"

import { revalidatePath } from "next/cache"
import { criarManifestacao, TipoManifestacao } from "./repository"

export interface OuvidoriaActionState {
    ok: boolean;
    error: string | null;
    fieldErrors: {
        nome?: string;
        tipo?: string;
        mensagem?: string
    }
}

const TIPOS_VALIDOS: readonly TipoManifestacao[] = [
    "Elogio",
    "Reclamacao",
    "Sugestao"
]

function eTipoValido(valor: string): valor is TipoManifestacao {
    return(TIPOS_VALIDOS as readonly string[]).includes(valor)
}

export async function registrarManifestacaoAction(
  _estadoAnterior: OuvidoriaActionState,
  formData: FormData
): Promise<OuvidoriaActionState> {
  const nome = String(formData.get("nome") ?? "").trim();
  const tipoRaw = String(formData.get("tipo") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();

  const fieldErrors: OuvidoriaActionState["fieldErrors"] = {};

  if (!nome) {
    fieldErrors.nome = "Informe seu nome.";
  }

  if (!eTipoValido(tipoRaw)) {
    fieldErrors.tipo = "Selecione um tipo de manifestação válido.";
  }

  // Regra no servidor: rejeitar mensagens com menos de 10 caracteres
  if (mensagem.length < 10) {
    fieldErrors.mensagem =
      "A mensagem deve ter pelo menos 10 caracteres para que a ouvidoria possa analisar.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      error: "Não foi possível registrar a manifestação. Revise os campos abaixo.",
      fieldErrors,
    };
  }


  const tipo: TipoManifestacao = tipoRaw as TipoManifestacao;

  await new Promise<void>((resolve) => setTimeout(resolve, 600));

  criarManifestacao({ nome, tipo, mensagem });

  // Atualiza o mural na mesma rodada de rede
  revalidatePath("/ouvidoria");

  return {
    ok: true,
    error: null,
    fieldErrors: {},
  };
}