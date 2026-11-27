# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

- **Identificação da Questão:** Questão Prática Nº `[4]`
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
 Atue como professor de Next.js (App Router, versão 15 ou superior), com foco didático.

Estou aprendendo e quero entender cada conceito, não só receber o código pronto.



Contexto: questão prática de faculdade (curso de ADS).

Arquivo principal: app/ouvidoria/page.js.



Enunciado:

Página de Ouvidoria Acadêmica que recebe manifestações dos estudantes e atualiza o

mural público em uma única rodada de rede.

Server Action: função assíncrona com a diretiva "use server" que recebe o FormData
do formulário e captura os campos Nome, Tipo de Manifestação (Elogio, Sugestão,

Reclamação) e Mensagem. Validar no servidor: rejeitar mensagens com menos de 10

caracteres, retornando um objeto estruturado de erro.

2. Se os dados forem válidos, persistir a manifestação em um repositório simulado em

memória e chamar imediatamente revalidatePath('/ouvidoria'), para o mural atualizar

de forma instantânea.

3. Feedback de processamento: o botão de submissão deve ficar desabilitado e mudar o

texto para "Registrando manifestação..." enquanto a promise estiver pendente.



Como quero a resposta:

Antes do código, explique em linguagem simples, com uma analogia do dia a dia, o que
é uma Server Action, o que é FormData, o que faz o revalidatePath e por que validar

no servidor mesmo que o navegador já valide.

Entregue o código completo com comentários, separando: a page.js (Server Component
que lista o mural), a Server Action (em arquivo próprio ou no escopo da page), o

repositório em memória e o componente de formulário com "use client".

Explique por que o botão com feedback precisa de um Client Component e como
useActionState ou useFormStatus funcionam (qual a diferença entre os dois).

Mostre como o erro de validação retornado pela Server Action é exibido na tela.
Explique, passo a passo, o que acontece desde o clique em "Enviar" até o mural
atualizar, e por que a página não recarrega como em um formulário HTML clássico.

Explique o que aconteceria se eu esquecesse o revalidatePath (o mural atualizaria?
Por quê?).

Termine com 3 perguntas para eu testar se entendi.


- **Prompt 2:**
dentro dessa parte do codigo, por que vem uma interrogracao apos o parmetro?



fieldErrors: {

nome?: string;

tipo?: string;

mensagem?: string;

- **Prompt 3 (refinamento/correção):**
_estadoAnterior: OuvidoriaActionState,



porque esta declarado com _?

- **Prompt 4 (refinamento/correção):**
essa parte export default function FormularioOuvidoria() {

const [state, formAction, isPending] = useActionState<

OuvidoriaActionState,

FormData

>(registrarManifestacaoAction, estadoInicial);



o que significa quando coloca dentro de <>
---

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO FONTE

- **Blocos gerados integralmente pela IA:** 
  - Linhas `6` a `73` do arquivo `/app/ouvidoria/actions.ts`
  - Linhas `36` a `57` do arquivo `/app/ouvidoria/repository.ts`


---  

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `1` a `4` do arquivo `/app/ouvidoria/actions.ts`
  - **Descrição das alterações manuais:** 
  na importacao do {TipoManifestacao } from "./repository", ele estava com
  type antes do TipoManifestacao
  

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `12` a `133` do arquivo `/app/ouvidoria/components/FormularioOuvidoria.tsx`
  - **Descrição das alterações manuais:** 
 ele deu o modelo e fui estruturando o style

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `1` a `45` do arquivo `/app/ouvidoria/page.tsx`
  - **Descrição das alterações manuais:** 
 ele deu o modelo e fui estruturando o style

---

- **Blocos de autoria 100% exclusiva do estudante:** 
  - Linhas `1` a `10` do arquivo `/app/ouvidoria/components/FormularioOuvidoria.tsx`
  - Linhas `1` a `36` do arquivo `/app/ouvidoria/repository.ts`

---

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

- **A IA cometeu erros de compilação ou sugeriu APIs legadas (ex: Pages Router em vez de App Router)?**
  - [ ] Sim
  - [x] Não
  - **Em caso afirmativo, qual foi o erro e como você o solucionou?**
    > 

- **Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?**
  O Next.js intercepta o envio do formulario e faz uma chamada assíncrona nos bastidores em vez de disparar um submit HTML tradicional. Assim, ele atualiza apenas os trechos necessários da tela na resposta, sem recarregar a página inteira.