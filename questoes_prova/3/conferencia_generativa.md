# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

- **Identificação da Questão:** Questão Prática Nº `[3]`
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
Estou aprendendo e quero entender cada conceito, não só receber o código pronto.



Contexto: questão prática de faculdade (curso de ADS).

Arquivos: app/dashboard/page.js e app/dashboard/loading.js.



Enunciado:

Dashboard Analítico Acadêmico que agrega dados de fontes com tempos de resposta diferentes.

A página principal deve ser um Server Component assíncrono que renderiza dois cartões
independentes: Bloco A (Métricas Rápidas: alunos ativos, turmas, aprovação geral),

resolvido de forma simulada em 500ms, e Bloco B (Relatório Histórico de Evasão),

com atraso intencional de 3 segundos via Promise.

2. O Bloco A deve aparecer de forma instantânea. O Bloco B deve ficar isolado em

<Suspense fallback={<SkeletonEvasao />}>, para a interface ser exibida em partes

conforme os dados são transmitidos via streaming.

3. Criar o loading.js para dar feedback de transição imediata quando a rota /dashboard

for requisitada.



Como quero a resposta:

Antes do código, explique em linguagem simples, com uma analogia do dia a dia
(por exemplo, um restaurante entregando pratos conforme ficam prontos), o que são

streaming, Suspense e loading.js, e qual a diferença entre o fallback do Suspense

e o loading.js.

Entregue o código completo com comentários, separando os componentes em arquivos
(BlocoA, BlocoB, SkeletonEvasao) e usando uma função de delay com Promise.

Explique por que o await do Bloco B NÃO pode ficar direto na page.js, e mostre
o que aconteceria na tela se ficasse (para eu entender o erro).

Explique o que acontece, em ordem cronológica, nos primeiros 3 segundos após
eu acessar /dashboard (o que aparece em 0s, em 0,5s e em 3s).

Explique como eu posso comprovar no navegador (aba Network do DevTools) que
a resposta está sendo transmitida em partes.

Termine com 3 perguntas para eu testar se entendi

- **Prompt 2:**
por que declaro interface, so para declarar o parametro das metricas?

interface MetricasRapidas {

alunosAtivos: number;

turmas: number;

aprovacaoGeral: string;

}



function delay(ms: number): Promise<void> {

return new Promise((resolve) => setTimeout(resolve, ms));

}



function delay(ms: number): Promise<void> {

return new Promise((resolve) => setTimeout(resolve, ms));

}

- **Prompt 3 (refinamento/correção):**
1- ele esperaria os 6 segundos, pois o blocoC estaria dentro do suspense, entao so apareceria apos o await de todos os blocos dentro desse suspense serem resolvidos

2- se fizesse um await dentro da page, independente de outros blocos, ele esperaria esse await, quando voce quebra em suspense e await dentro de component filho, voce permite deixar apenas uma parte carregando, enquanto o restante da pagina ja carregou

3-acredito que no momento que os 3 segundo passam

- **Prompt 4 (refinamento/correção):**

---

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO FONTE

- **Blocos gerados integralmente pela IA:** 
  - Linhas `21` a `40` do arquivo `/app/dashboard/components/BlocoA`
  - Linhas `19` a `34` do arquivo `/app/dashboard/components/BlocoB`
  - Linhas `1` a `19` do arquivo `/app/dashboard/components/Skeleton`
  - Linhas `7` a `17` do arquivo `/app/dashboard/page.tsx`

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `1` a `21` do arquivo ``
  - **Descrição das alterações manuais:** 



- **Blocos de autoria 100% exclusiva do estudante:** 
  - Linhas `____` a `____` do arquivo `/app/page.tsx`
  - Linhas `____` a `____` do arquivo `/app/layout.tsx`
  - Linhas `1` a `8` do arquivo `/app/dashboard/loading.tsx`
  - Linhas `1` a `21` do arquivo `/app/dashboard/components/BlocoA`
  - Linhas `1` a `19` do arquivo `/app/dashboard/components/BlocoB`
  - Linhas `1` a `7` do arquivo `/app/dashboard/page.tsx`

---

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

- **A IA cometeu erros de compilação ou sugeriu APIs legadas (ex: Pages Router em vez de App Router)?**
  - [ ] Sim
  - [X] Não
  - **Em caso afirmativo, qual foi o erro e como você o solucionou?**
    > 

- **Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?**
  > ao recarregar o servidor, por 0,5s aparece a pagina do loading.tsx, logo apos carrega a pagina com o Bloco A e o suspense(skeleton) logo abaixo, depois de 2,5S, ou 3S desde o recarregamento, o bloco B aparece juntamente a pagina