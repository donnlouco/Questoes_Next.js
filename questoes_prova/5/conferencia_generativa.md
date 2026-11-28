# RELATÓRIO DE TRANSPARÊNCIA E AUDITORIA DE IA GENERATIVA

- **Identificação da Questão:** Questão Prática Nº `[5]`
- **Estudante:** 
- **R.A.:** 
- **Ferramentas de IA Utilizadas:** 
  - [ ] ChatGPT
  - [ ] GitHub Copilot
  - [ ] Claude
  - [X] Gemini
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
Arquivos: app/portal/page.js e app/providers.js.

Enunciado:
Página inicial do Portal de Comunicados do IFMS, unindo segurança no servidor e
preferências dinâmicas de acessibilidade no cliente.
1. Contexto Global de Acessibilidade: criar app/providers.js marcado com "use client",
   contendo um AcessibilidadeContext que armazene o estado de Alto Contraste
   (ativo/inativo) e Tamanho da Fonte (Normal/Ampliada), com botões de alternância.
   O provedor deve encapsular a aplicação pela propriedade children, para não
   transformar os componentes filhos em Client Components.
2. Proteção contra vazamento (server-only): app/portal/page.js deve ser um Server
   Component que consulta dados confidenciais de comunicados internos. A função de
   leitura deve ficar em um módulo de serviço protegido obrigatoriamente por
   import 'server-only', garantindo que o código nunca seja empacotado para o cliente.
3. Composição de interface: no topo, a barra de ferramentas de acessibilidade
   consumindo o contexto; abaixo, o mural de avisos gerado diretamente no servidor.

Como quero a resposta:
- Antes do código, explique em linguagem simples, com uma analogia do dia a dia,
  o que é Context API, o que é o padrão children e por que ele impede que os
  filhos virem Client Components, e o que o pacote server-only protege.
- Entregue o código completo com comentários, separado em arquivos: app/providers.js,
  app/layout.js (onde o Provider envolve a aplicação), app/portal/page.js, o módulo
  de serviço com server-only (ex.: lib/comunicados.js), a barra de acessibilidade
  (Client Component que usa o contexto) e o mural.
- Mostre o ERRO COMUM: importar o mural (Server Component) dentro de providers.js e
  explique por que isso o transforma em Client Component. Depois mostre a forma correta.
- Mostre como o contexto aplica Alto Contraste e fonte ampliada na tela (por exemplo,
  via classes CSS ou atributos data-* no wrapper), e como criar um hook
  useAcessibilidade() com erro amigável caso seja usado fora do Provider.
- Explique o que acontece no build se um Client Component importar o módulo com
  server-only, e como eu reproduzo esse erro de propósito para comprovar a barreira.
- Explique a diferença entre dado "confidencial no servidor" e dado enviado ao
  cliente (o que vai no HTML/bundle e o que não vai).
- Termine com 3 perguntas para eu testar se entendi.

- **Prompt 2:**
Por que <Providers><PortalPage/></Providers> mantém a página como Server Component, mas importar a página dentro de providers.js não? Explique com a árvore de componentes.

- **Prompt 3 (refinamento/correção):**
Me dê um exemplo de dado confidencial que vazaria sem server-only e explique o que o bundler faz quando detecta a importação indevida.

- **Prompt 4 (refinamento/correção):**
Como deixo os botões de alternância acessíveis (aria-pressed, rótulos, foco por teclado)

*(Adicione mais prompts aqui, se houver)*

---

## 2. MAPEAMENTO DE AUTORIA NO CÓDIGO FONTE

- **Blocos gerados integralmente pela IA:** 
  - Linhas `____` a `____` do arquivo `/app/providers.tsx`
  - Linhas `____` a `____` do arquivo `/app/layout.tsx`
  - Linhas `____` a `____` do arquivo `/app/components/BarraAcessibilidade.tsx`
  - Linhas `____` a `____` do arquivo `/app/components/MuralComunicados.tsx`
  - Linhas `____` a `____` do arquivo `/app/lib/comunicados.ts`
  - Linhas `____` a `____` do arquivo `/app/portal/page.tsx`

- **Blocos gerados por IA e modificados pelo aluno:** 
  - Linhas `____` a `____` do arquivo `___________________________`
  - **Descrição das alterações manuais:** 

- **Blocos de autoria 100% exclusiva do estudante:** 
  - Linhas `____` a `____` do arquivo `/app/page.tsx`

---

## 3. AUDITORIA E JUSTIFICATIVA TÉCNICA DO ESTUDANTE

- **A IA cometeu erros de compilação ou sugeriu APIs legadas (ex: Pages Router em vez de App Router)?**
  - [ ] Sim
  - [X] Não
  - **Em caso afirmativo, qual foi o erro e como você o solucionou?**
    > 

- **Como você validou que a solução gerada atende com rigor técnico aos requisitos do enunciado?**
 importei obterComunicadosConfidenciais (lib/comunicados.ts, que contém import "server-only") dentro de BarraAcessibilidade.tsx ("use client").Porem nao teve um bloqueio, fui verificando e nao havia o server-only instalado dentro do package.json, fiz a instalaçao e mesmo assim, ainda nao havia bloqueado, só apos eu ter declarado void obterComunicadosConfidenciais, que apareceu a mensagem
"You're importing a module that depends on 'server-only' into a React Client Component module. This API is only available in Server Components but one of its parents is marked with 'use client', so this module is also a Client Component."

removi a importação do Client Component, mantive a leitura apenas no Server Component (MuralComunicados.tsx) e confirmei que o build voltou a concluir com sucesso.