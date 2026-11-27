"use client"

import { useActionState } from "react"
import { registrarManifestacaoAction, OuvidoriaActionState } from "../actions"

const estadoInicial: OuvidoriaActionState = {
    ok: false,
    error: null,
    fieldErrors: {}
}

export default function FormularioOuvidoria() {
  const [state, formAction, isPending] = useActionState<
    OuvidoriaActionState,
    FormData
  >(registrarManifestacaoAction, estadoInicial);

  return (
    <form
      action={formAction}
      style={{
        display: "grid",
        gap: 12,
        maxWidth: 520,
        padding: 16,
        border: "1px solid #0f172a",
        borderRadius: 8,
      }}
    >
      <h1>Nova Manifestação</h1>

      {state.error && (
        <div
          role="alert"
          style={{
            padding: 10,
            borderRadius: 6,
            backgroundColor: "#fef2f2",
            color: "#991b1b",
            border: "1px solid #fecaca",
          }}
        >
          {state.error}
        </div>
      )}

      {state.ok && (
        <div
          role="status"
          style={{
            padding: 10,
            borderRadius: 6,
            backgroundColor: "#f0fdf4",
            color: "#166534",
            border: "1px solid #bbf7d0",
          }}
        >
          Manifestação registrada e mural atualizado!
        </div>
      )}

      <div>
        <label htmlFor="nome">
          <strong>Nome</strong>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Ex.: Mariana Souza"
          disabled={isPending}
          style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: "1px solid #0f172a", borderRadius: 6 }}
        />
        {state.fieldErrors.nome && (
          <small style={{ color: "#b91c1c" }}>{state.fieldErrors.nome}</small>
        )}
      </div>

      <div>
        <label htmlFor="tipo">
          <strong>Tipo de Manifestação</strong>
        </label>
        <select
          id="tipo"
          name="tipo"
          defaultValue="Elogio"
          disabled={isPending}
          style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: "1px solid #0f172a", borderRadius: 6 }}
        >
          <option value="Elogio">Elogio</option>
          <option value="Sugestão">Sugestão</option>
          <option value="Reclamação">Reclamação</option>
        </select>
        {state.fieldErrors.tipo && (
          <small style={{ color: "#b91c1c" }}>{state.fieldErrors.tipo}</small>
        )}
      </div>

      <div>
        <label htmlFor="mensagem">
          <strong>Mensagem</strong>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Escreva sua mensagem (mínimo de 10 caracteres)..."
          disabled={isPending}
          style={{ display: "block", width: "100%", padding: 8, marginTop: 4, border: "1px solid #0f172a", borderRadius: 6}}
        />
        {state.fieldErrors.mensagem && (
          <small style={{ color: "#b91c1c" }}>{state.fieldErrors.mensagem}</small>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        style={{
          padding: "10px 16px",
          borderRadius: 6,
          border: "none",
          cursor: isPending ? "not-allowed" : "pointer",
          backgroundColor: isPending ? "#94a3b8" : "#0f172a",
          color: "#ffffff",
          fontWeight: 600,
        }}
      >
        {isPending ? "Registrando manifestação..." : "Enviar manifestação"}
      </button>
    </form>
  );
}