# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

- **Identificação da Questão:** Questão Prática Nº `[1]`
- **Estudante:** VINICIUS HENRIQUE
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
   "estou querendo projetar um catalogo academico com layouts aninhados e prefetching, app/cursos/[id]/page.tsx, utilizando segmentos dinamicos de rotas (NAO SEI COMO FUNCIONA ESSA PARTE, ME EXPLICA), persistencia de estado em layouts aninhados (provavelmente eu coloque um layout dentro de app/cursos e predefina um layout, correto?), server components e componente link de navegação rapida (eu aprendi mais ou menos o conceito, mas me explique melhor, sei que é por conta do prefetching, mas não coloquei em pratica).tirando essa parte, eu nao mexi em react, entao não sei criar as estruturas de uma pagina, como declaro margin, padding, color, etc, divs. enfim"

- **Prompt 2:**
   "to com duvida, eu posso fazer uma page.tsx dentro de /cursos? como se fosse uma home? e o que seria um botao de alternancia visual.2- teremos apenas 3 IDs, como declaro eles, sei que farei um component notFound(), caso tenha devo fazer algo parecido com a imagem que mandei, correto?.3-essa parte de link é algo novo para mim, como posso realizar?.e o numero 4, posso enviar o link da conversa?"

- **Prompt 3 (refinamento/correção):**
  export interface Curso {

id: string;

titulo: string;

cargaHoraria: string;

ementa: string;

preRequisitos: string[];

duracao: string;

turno: string;

vagas: string;

}



export const CURSOS: Curso[] = [

{



me explica essa parte, pq vc declarou antes "export interface Curso e passou os parametos e logo em seguida exportou com uma const, voce utilizou o Curso do primeiro import?



pq utilizou interface?"

- **Prompt 4 (refinamento/correção):**

---

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO FONTE

- **Blocos gerados integralmente pela IA:** 
  - Linhas `1` a `33` do arquivo `/app/cursos/page.tsx`
  - Linhas `1` a `51` do arquivo `/app/cursos/[id]/page.tsx`
  - Linhas `1` a `67` do arquivo `/app/cursos/components/sidebar.tsx`
  - Linhas `1` a `67` do arquivo `/app/cursos/[id]/components/sidebar.tsx`


- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `1` a `10` do arquivo `/app/cursos/layout.tsx`
  - **Descrição das alterações manuais:** 
  alterei a altura minima

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `1` a `10` do arquivo `/app/cursos/[id]/not-found.tsx`
  - **Descrição das alterações manuais:** 
  alterei o tamanho da letra e o padding
  

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `1` a `32` do arquivo `.lib/cursos.ts`
  - **Descrição das alterações manuais:** 
  peguei o modelo, porem adicionei todas informacoes, pois nao sabia como fazer essa parte do .tsx(como declarar as coisas)

- **Blocos de autoria 100% exclusiva do estudante:** 
  - Linhas `1` a `5` do arquivo `/app/page.tsx`
  - Linhas `1` a `17` do arquivo `/app/layout.tsx`

  NAO SEI SE CONTA, mas eu criei toda a estrutura de pasta

---

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

- **A IA cometeu erros de compilação ou sugeriu APIs legadas (ex: Pages Router em vez de App Router)?**
  - [ ] Sim
  - [x] Não
  - **Em caso afirmativo, qual foi o erro e como você o solucionou?**
    > 

- **Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?**
  > rodei o servidor e fui testando tudo que era possivel, comparando o enunciado da folha que recebemos