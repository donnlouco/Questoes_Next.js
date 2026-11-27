// app/ouvidoria/page.tsx
import { listarManifestacoes, type Manifestacao } from "./repository";
import FormularioOuvidoria from "./components/FormularioOuvidoria";

export default function OuvidoriaPage() {
  const manifestacoes: Manifestacao[] = listarManifestacoes();

  return (
    <main style={{ padding: 24, display: "grid", gap: 24, maxWidth: 820 }}>
      <header>
        <h1>Ouvidoria Acadêmica</h1>
        <p>Envie elogios, sugestões ou reclamações e acompanhe o mural público.</p>
      </header>

      <FormularioOuvidoria />

      <section aria-label="Mural Público de Manifestações" style={{ display: "grid", gap: 12 }}>
        <h1>Mural Público ({manifestacoes.length})</h1>

        {manifestacoes.length === 0 ? (
          <p>Nenhuma manifestação registrada ainda.</p>
        ) : (
          manifestacoes.map((item: Manifestacao) => (
            <article
              key={item.id}
              style={{
                border: "1px solid #0f172a",
                borderRadius: 8,
                padding: 14,
                backgroundColor: "#ffffff",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                <strong>{item.nome}</strong>
                <span>{item.tipo}</span>
              </div>
              <p style={{ marginTop: 8, marginBottom: 6 }}>{item.mensagem}</p>
              <small style={{ color: "#64748b" }}>Registrado em: {item.criadoEm}</small>
            </article>
          ))
        )}
      </section>
    </main>
  );
}