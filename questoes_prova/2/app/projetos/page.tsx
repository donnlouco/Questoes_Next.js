'use client'
import { useState, useEffect, useMemo } from "react"

const AREAS = ["Front-end", "Backend", "Mobile", "DevOps"];
const STORAGE_KEY = "projetos_integradores_v1";


export default function ProjetosPage(){

    const[nome, setNome] = useState("")
    const[area, setArea] = useState("Front-end")
    const[prazo, setPrazo] = useState("")
    const[enviado, setEnviado] = useState(false)

    const[projetos, setProjetos] = useState([])

    const [carregouStorage, setCarregouStorage] = useState(false)

    const [busca, setBusca] = useState("")
    const [areaFiltro, setAreaFiltro] = useState("Todas")

    const nomeTrim = nome.trim();
    const nomeInvalido = (nome.length > 0 || enviado) && nomeTrim.length < 5;
    const erroNomeId = "erro-nome-projeto";

    useEffect(() => {
    try {
      const salvo = window.localStorage.getItem(STORAGE_KEY);
        if (salvo) {
            const parsed = JSON.parse(salvo);
            if (Array.isArray(parsed)) {
            setProjetos(parsed);
            }
        }
        } catch (err) {
        console.error("Erro ao ler projetos do localStorage:", err);
        } finally {
        // Só após tentar ler o storage liberamos a escrita automática
        setCarregouStorage(true);
        }
    }, []);

    // 2) Salva os projetos no localStorage sempre que a lista mudar (após carregar)
    useEffect(() => {
        if (!carregouStorage) return;

        try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projetos));
        } catch (err) {
        console.error("Erro ao salvar projetos no localStorage:", err);
        }
    }, [projetos, carregouStorage]);

    // 3) Filtragem memorizada: só reexecuta se projetos, busca ou areaFiltro mudarem
    const projetosFiltrados = useMemo(() => {
        const termo = busca.trim().toLowerCase();

        return projetos.filter((projeto) => {
        const bateArea = areaFiltro === "Todas" || projeto.area === areaFiltro;
        const bateTexto =
            termo === "" ||
            projeto.nome.toLowerCase().includes(termo) ||
            projeto.area.toLowerCase().includes(termo);

        return bateArea && bateTexto;
        });
    }, [projetos, busca, areaFiltro]);

    function handleSubmit(e) {
        e.preventDefault();
        setEnviado(true);

        // Impede cadastro se nome tiver menos de 5 caracteres ou se prazo estiver vazio
        if (nomeTrim.length < 5 || !prazo) {
        return;
        }

        const novoProjeto = {
        id: crypto.randomUUID(),
        nome: nomeTrim,
        area,
        prazo,
        };

        // Atualização funcional garante trabalhar sempre com o estado mais recente
        setProjetos((prev) => [novoProjeto, ...prev]);

        // Limpa os campos do formulário mantendo a área selecionada
        setNome("");
        setPrazo("");
        setEnviado(false);
    }

    function handleRemover(id) {
        setProjetos((prev) => prev.filter((item) => item.id !== id));
    }

    return(
        <main className="mx-auto max-w-4xl space-y-8 p-6">
            <header className="space-y-1">
                <h1 className="text-2xl font-bold">
                    Gestao de Projetos Integradores
                </h1>
                <p className="text-sm text-gray-600">
                    Painel interativo executado no navegador com persistência local.
                </p>
            </header>
        <section className="rounded-lg border p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Cadastrar Novo Projeto</h2>

            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3" noValidate>
            <div className="md:col-span-3">
                <label htmlFor="nome-projeto" className="mb-1 block text-sm font-medium">
                Nome do Projeto (mínimo 5 caracteres)
                </label>
                <input
                id="nome-projeto"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Sistema de Fila Inteligente"
                aria-invalid={nomeInvalido ? "true" : "false"}
                aria-describedby={nomeInvalido ? erroNomeId : undefined}
                className={`w-full rounded border px-3 py-2 outline-none transition ${
                    nomeInvalido
                    ? "border-2 border-red-600 bg-red-50/40 focus:border-red-600"
                    : "border-gray-300 focus:border-blue-600"
                }`}
                />
                {nomeInvalido && (
                <p id={erroNomeId} role="alert" className="mt-1 text-sm text-red-600">
                    O nome do projeto deve ter pelo menos 5 caracteres (atual: {nomeTrim.length}).
                </p>
                )}
            </div>

            <div>
                <label htmlFor="area-tematica" className="mb-1 block text-sm font-medium">
                Área Temática
                </label>
                <select
                id="area-tematica"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-600"
                >
                {AREAS.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>

            <div>
                <label htmlFor="prazo-conclusao" className="mb-1 block text-sm font-medium">
                Prazo de Conclusão
                </label>
                <input
                id="prazo-conclusao"
                type="date"
                value={prazo}
                onChange={(e) => setPrazo(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-600"
                />
            </div>

            <div className="flex items-end">
                <button
                type="submit"
                className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                >
                Adicionar Projeto
                </button>
            </div>
            </form>
        </section>

        {/* Filtros e listagem */}
        <section className="space-y-4 rounded-lg border p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold">
                Projetos Cadastrados ({projetosFiltrados.length})
            </h2>

            <div className="flex flex-col gap-2 sm:flex-row">
                <input
                type="search"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar por nome ou área..."
                aria-label="Buscar projetos"
                className="rounded border border-gray-300 px-3 py-1.5 text-sm outline-none focus:border-blue-600"
                />

                <select
                value={areaFiltro}
                onChange={(e) => setAreaFiltro(e.target.value)}
                aria-label="Filtrar por área temática"
                className="rounded border border-gray-300 bg-white px-3 py-1.5 text-sm outline-none focus:border-blue-600"
                >
                <option value="Todas">Todas as áreas</option>
                {AREAS.map((item) => (
                    <option key={item} value={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
            </div>

            {projetosFiltrados.length === 0 ? (
            <p className="rounded bg-gray-50 p-4 text-sm text-gray-500">
                Nenhum projeto encontrado com os filtros atuais.
            </p>
            ) : (
            <ul className="divide-y">
                {projetosFiltrados.map((projeto) => (
                <li
                    key={projeto.id}
                    className="flex items-center justify-between gap-4 py-3"
                >
                    <div>
                    <p className="font-medium">{projeto.nome}</p>
                    <p className="text-xs text-gray-600">
                        Área: <strong>{projeto.area}</strong> · Prazo:{" "}
                        <strong>{projeto.prazo}</strong>
                    </p>
                    </div>

                    <button
                    type="button"
                    onClick={() => handleRemover(projeto.id)}
                    className="rounded border border-red-200 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
                    >
                    Remover
                    </button>
                </li>
                ))}
            </ul>
            )}
        </section>
        </main>
    )
}