# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

- **Identificação da Questão:** Questão Prática Nº `[2]`
- **Estudante:** 
- **R.A.:** 
- **Ferramentas de IA Utilizadas:** 
  - [ ] ChatGPT
  - [ ] GitHub Copilot
  - [ ] Claude
  - [x] Gemini
  - [ ] Outra: ___________________________
- **Versão / Modelo Específico:** 
AUTO
---

## 1. HISTÓRICO COMPLETO DE PROMPTS ENVIADOS À IA
*(Transcreva de forma literal e cronológica todos os comandos executados)*

- **Prompt 1:**
Atue como professor de React e Next.js (App Router), com foco didático.

Estou aprendendo e quero entender cada conceito, não só receber o código pronto.



Contexto: questão prática de faculdade (curso de ADS). Arquivo: app/projetos/page.js,

que deve ser um Client Component ("use client").



Enunciado:

Painel interativo de gestão de Projetos Integradores, executado inteiramente no navegador.

Formulário controlado via useState com: Nome do Projeto (mínimo 5 caracteres),
Área Temática (select: Frontend, Backend, Mobile, DevOps) e Prazo de Conclusão.

Em tempo real, se o nome tiver menos de 5 caracteres: borda de alerta,

aria-invalid="true" e texto de erro vinculado com aria-describedby.

2. Lista de projetos cadastrados com filtro por texto de busca e por Área Temática.

A filtragem deve estar obrigatoriamente dentro do useMemo.

3. Persistência: useEffect para carregar e salvar os projetos no localStorage,

mantendo os dados após recarregar a página.



Como quero a resposta:

Antes do código, explique em linguagem simples, com um exemplo do dia a dia,
o que fazem useState, useEffect e useMemo, e por que cada um é usado aqui.

Depois entregue o código completo com comentários explicando cada decisão.
Explique o array de dependências de cada useEffect e do useMemo: o que acontece
se eu esquecer uma dependência e o que acontece se colocar dependência a mais.

Explique por que o localStorage só pode ser lido dentro do useEffect no Next.js
(problema de hidratação / window não existe no servidor).

Termine com 3 perguntas para eu testar se entendi.

- **Prompt 2:**
para que serve essa const? - const STORAGE_KEY = "projetos_integradores_v1";



Explique linha por linha o trecho do useMemo e me dê um exemplo de como verificar que ele não recalcula enquanto eu digito no formulário.

- **Prompt 3 (refinamento/correção):**
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



mas e se nao retornar nada, so retorna se a bateArea e bateTexto forem verdadeiro, ai ele retorna none?

- **Prompt 4 (refinamento/correção):**
me explique toda a parte do return, por exemplo, os classeName, sei que muita coisa e para a estilizacao, mas me descreva

- **Prompt 5 (refinamento/correção):**
explica detalhadamente essa parte de localStorage



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



useEffect(() => {

if (!carregouStorage) return;



try {

window.localStorage.setItem(STORAGE_KEY, JSON.stringify(projetos));

} catch (err) {

console.error("Erro ao salvar projetos no localStorage:", err);

}

}, [projetos, carregouStorage]);
---

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO FONTE

- **Blocos gerados integralmente pela IA:** 
  - Linhas `23` a `96` do arquivo `/app/projetos/page.tsx`

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `98` a `243` do arquivo `/app/projetos/page.tsx`
  - **Descrição das alterações manuais:** 
  fui estudando todas essa parte de criacao da estrutura do projeto, nao que eu nao tenha estudado a parte que a IA criou

- **Blocos de autoria 100% exclusiva do estudante:** 
  - Linhas `1` a `22` do arquivo `/app/projetos/page.tsx`

---

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

- **A IA cometeu erros de compilação ou sugeriu APIs legadas (ex: Pages Router em vez de App Router)?**
  - [ ] Sim
  - [x] Não
  - **Em caso afirmativo, qual foi o erro e como você o solucionou?**
    > 

- **Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?**
  > rodei o servidor e fui testando tudo que estava no enunciado, ate o momento nao achei erros