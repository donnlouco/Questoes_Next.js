
export type TipoManifestacao = "Elogio" | "Sugestao" | "Reclamacao"

export interface Manifestacao{
    id: number;
    nome: string;
    tipo: TipoManifestacao;
    mensagem: string;
    criadoEm: string;

}

export interface NovaManifestacaoInput{
    nome: string;
    tipo: TipoManifestacao;
    mensagem: string
}

const manifestacoes: Manifestacao[] = [
    {
        id: 1,
        nome: "Ana clara",
        tipo: "Elogio",
        mensagem: "A biblioteca estendeu o horário no período de provas e ajudou muito.",
        criadoEm: "2026-11-27",
    },
    {
        id: 2,
        nome: "Lucas Mendes",
        tipo: "Sugestao",
        mensagem: "Criar mais tomadas nas bancadas do laboratório de redes.",
        criadoEm: "2026-11-27", 
    }
]

let proximoId = 3

export function listarManifestacoes(): Manifestacao[]{
    return [...manifestacoes].reverse()
}

export function criarManifestacao({
    nome,
    tipo,
    mensagem,
}: NovaManifestacaoInput): Manifestacao{
    const nova: Manifestacao = {
        id: proximoId++,
        nome: nome.trim(),
        tipo,
        mensagem: mensagem.trim(),
        criadoEm: new Date().toISOString().slice(0, 10)
    };

    manifestacoes.push(nova);
    return nova
}