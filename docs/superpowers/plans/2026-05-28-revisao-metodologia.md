# Revisão da Metodologia Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Atualizar a seção de Metodologia para detalhar o processo de levantamento de requisitos e testes, corrigindo os tempos verbais para o passado.

**Architecture:** Substituição direta de blocos de texto no arquivo LaTeX para maior precisão técnica e clareza, eliminando redundâncias.

**Tech Stack:** LaTeX

---

### Task 1: Atualizar o trecho de Método no arquivo cap-metodologia.tex

**Files:**
- Modify: `capitulos/cap-metodologia.tex:96-121`

- [ ] **Step 1: Substituir o texto original pelo texto revisado e aprovado**

Substituir o bloco que começa na linha 96 (Inicialmente...) e termina na linha 121 (após o parágrafo sobre planilhas e testes) pelo novo conteúdo unificado.

```latex
<<<<
Inicialmente, para a coleta dos requisitos, foram feitas análises minuciosas das informações fornecidas pelos técnicos do \gls{IDR-PR}, que desempenham um papel fundamental na área em questão. Além disso, foi examinado de perto os documentos disponibilizados por esses profissionais, buscando uma compreensão abrangente das necessidades e desafios presentes. Por meio dessa abordagem, foi possível obter uma visão completa e embasada para que o projeto possa avançar. Deste modo, possibilitando profundo entendimento dos procedimentos corriqueiros indispensáveis do sistema e das dificuldades enfrentadas pelos técnicos.

Utilizando-se de aplicações de criação de planilhas eletrônicas, os técnicos do \gls{IDR-PR} realizam o gerenciamento dos dados das propriedades que estão sob sua supervisão. Essas planilhas fornecem uma base sólida para analisar e coletar os dados necessários para o sistema, bem como compreender a interação entre eles.

Após entendimento das funcionalidades e de como os dados se comportam através dos documentos fornecidos, foi possível o levantamento dos requisitos funcionais e não funcionais do sistema, tal como a diagramação dos casos de uso.

Na etapa subsequente, procederá à prototipação do sistema, incluindo suas interfaces, com o propósito de aprimorar a compreensão do que será desenvolvido. Isso irá possibilitar a eliminação de elementos desnecessários e a realização de testes para avaliar a experiência do usuário no sistema.

A seguir, o processo de desenvolvimento dos códigos-fonte da aplicação será iniciado. Simultaneamente, os testes do sistema serão conduzidos com o intuito de reduzir e corrigir eventuais erros durante a etapa de desenvolvimento.
====
Inicialmente, o levantamento de requisitos foi realizado por meio de reuniões \textit{online} e entrevistas não estruturadas com os técnicos do \gls{IDR-PR}. O objetivo dessas interações foi compreender o fluxo de trabalho atual da equipe, que se baseava no uso de planilhas eletrônicas para controlar os dados das propriedades rurais. 

Para complementar as informações coletadas, foi feita uma análise de documentos. Foram examinadas as próprias planilhas de controle utilizadas pelos técnicos e apresentações que detalhavam as regras de negócio do Instituto. Analisar esses documentos foi fundamental, pois revelou detalhes técnicos que não surgiram durante as conversas, como as especificações exatas de campos e o funcionamento correto dos módulos.

Após o entendimento das funcionalidades e da organização dos dados nos documentos, foram definidos os requisitos funcionais e não funcionais do sistema, além da criação dos diagramas de casos de uso.

Na etapa seguinte, realizou-se a prototipação das telas do sistema para melhorar a compreensão visual do projeto. Isso ajudou a remover partes desnecessárias antes da programação e permitiu avaliar a experiência do usuário de forma antecipada.

A seguir, iniciou-se o processo de desenvolvimento do sistema. Simultaneamente à programação, foram realizados testes manuais de validação. O objetivo desses testes foi verificar se as funcionalidades atendiam aos requisitos definidos e se as regras de negócio estavam corretas, permitindo a correção imediata de eventuais erros.
>>>>
```

- [ ] **Step 2: Verificar a integridade do arquivo**

Run: `grep "reuniões \textit{online}" capitulos/cap-metodologia.tex`
Expected: Uma linha de saída contendo o texto.

- [ ] **Step 3: Commit (opcional - conforme instrução do usuário)**

```bash
# git add capitulos/cap-metodologia.tex
# git commit -m "docs: revisa metodologia conforme feedback da banca"
```
