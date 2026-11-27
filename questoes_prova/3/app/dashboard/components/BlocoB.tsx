interface RegistroEvasao{
    semestre: string;
    taxaEvasao: string
}

function delay(ms: number): Promise<void>{
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function obterRegistroEvasao():   Promise<RegistroEvasao[]> {
    await delay(3000)
    return[
        {semestre: "2024.1",taxaEvasao: "9,2%"},
        {semestre: "2024.2",taxaEvasao: "8,5%"},
        {semestre: "2025.1",taxaEvasao: "7,8%"}
    ]
}

export default async function BlocoB() {
  const historico: RegistroEvasao[] = await obterRegistroEvasao();

  return (
    <section style={{ border: "1px solid #cbd5e1", borderRadius: 8, padding: 16 }}>
      <h2>Relatório Histórico de Evasão</h2>
      <ul>
        {historico.map((item: RegistroEvasao) => (
          <li key={item.semestre}>
            <strong>{item.semestre}:</strong> {item.taxaEvasao} de evasão
          </li>
        ))}
      </ul>
    </section>
  );
}