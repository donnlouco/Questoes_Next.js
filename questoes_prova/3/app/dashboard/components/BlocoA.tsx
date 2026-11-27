interface MetricasRapidas{
    alunosAtivos: number;
    turmas: number;
    aprovacaoGeral: string;
}

function delay(ms: number): Promise<void>{
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function obterMetricasRapidas(): Promise<MetricasRapidas> {
    await delay(500)
    return{
        alunosAtivos: 1244,
        turmas: 35,
        aprovacaoGeral: "88,2%"
    }
}

export default async function BlocoA() {
    const metricas: MetricasRapidas = await obterMetricasRapidas()

    return(
        <section style={{ border: "1px solid #cbd5e1", borderRadius: 8, padding: 16 }}>
            <h2>Métricas Rápidas</h2>
            <ul>
                <li>
                <strong>Alunos ativos:</strong> {metricas.alunosAtivos}
                </li>
                <li>
                <strong>Turmas:</strong> {metricas.turmas}
                </li>
                <li>
                <strong>Aprovação geral:</strong> {metricas.aprovacaoGeral}
                </li>
            </ul>
        </section>
    )
    
}