
export default function SkeletonEvasao() {
  return (
    <section
      aria-busy="true"
      style={{
        border: "1px dashed #94a3b8",
        borderRadius: 8,
        padding: 16,
        backgroundColor: "#f8fafc",
      }}
    >
      <h2>Relatório Histórico de Evasão</h2>
      <p>Carregando série histórica de evasão (consulta pesada)...</p>
      <div style={{ height: 12, width: "65%", backgroundColor: "#e2e8f0", marginBottom: 8 }} />
      <div style={{ height: 12, width: "45%", backgroundColor: "#e2e8f0" }} />
    </section>
  );
}