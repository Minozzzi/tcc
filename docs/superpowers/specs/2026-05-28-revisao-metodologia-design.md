# Design Doc: Revisão da Seção de Metodologia (TCC)

**Data:** 28 de maio de 2026  
**Autor:** Gemini CLI  
**Tópico:** Correção de feedback da banca sobre o Capítulo 3 (Metodologia)

## 1. Problema e Contexto
Durante a apresentação da primeira parte do TCC, a banca examinadora apontou falta de especificidade no Capítulo de Metodologia, especificamente na seção 3.2 (Método). Os pontos vagos eram:
- "Análises minuciosas" (falta de clareza sobre o método).
- "Os documentos" (falta de identificação dos tipos de documentos).
- "Testes do sistema" (falta de definição do tipo de teste).

Além disso, o texto original utilizava o tempo verbal no futuro, sendo que as atividades já haviam sido concluídas.

## 2. Abordagem Proposta
Reescrever o trecho das linhas 96 a 104 do arquivo `cap-metodologia.tex` para:
1.  **Detalhar a Coleta:** Especificar reuniões online e entrevistas não estruturadas.
2.  **Identificar Artefatos:** Listar planilhas eletrônicas e apresentações de regras de negócio.
3.  **Explicar o Ganho da Análise Documental:** Mencionar a descoberta de especificações de campos e fluxos modulares.
4.  **Definir Testes:** Especificar testes manuais de validação com foco em requisitos e regras de negócio.
5.  **Ajustar Tempo Verbal:** Mudar do futuro para o passado (já realizado).
6.  **Linguagem:** Utilizar um vocabulário simples e direto, conforme solicitado pelo usuário.

## 3. Design da Alteração
O novo texto substituirá o bloco original e o parágrafo subsequente sobre planilhas (que estava redundante).

### Texto Final Aprovado:
> Inicialmente, o levantamento de requisitos foi realizado por meio de reuniões \textit{online} e entrevistas não estruturadas com os técnicos do \gls{IDR-PR}. O objetivo dessas interações foi compreender o fluxo de trabalho atual da equipe, que se baseava no uso de planilhas eletrônicas para controlar os dados das propriedades rurais. 
>
> Para complementar as informações coletadas, foi feita uma análise de documentos. Foram examinadas as próprias planilhas de controle utilizadas pelos técnicos e apresentações que detalhavam as regras de negócio do Instituto. Analisar esses documentos foi fundamental, pois revelou detalhes técnicos que não surgiram durante as conversas, como as especificações exatas de campos e o funcionamento correto dos módulos.
>
> Após o entendimento das funcionalidades e da organização dos dados nos documentos, foram definidos os requisitos funcionais e não funcionais do sistema, além da criação dos diagramas de casos de uso.
>
> Na etapa seguinte, realizou-se a prototipação das telas do sistema para melhorar a compreensão visual do projeto. Isso ajudou a remover partes desnecessárias antes da programação e permitiu avaliar a experiência do usuário de forma antecipada.
>
> A seguir, iniciou-se o processo de desenvolvimento do sistema. Simultaneamente à programação, foram realizados testes manuais de validação. O objetivo desses testes foi verificar se as funcionalidades atendiam aos requisitos definidos e se as regras de negócio estavam corretas, permitindo a correção imediata de eventuais erros.

## 4. Revisão da Spec
- **Placeholders:** Nenhum.
- **Consistência:** O texto agora reflete fielmente o processo real do aluno.
- **Escopo:** Focado exclusivamente na Seção 3.2.
- **Ambiguidade:** Removida através da especificação dos métodos e ferramentas.

## 5. Próximos Passos
1. Substituir o trecho no arquivo `cap-metodologia.tex`.
2. Verificar se a compilação (se possível) não quebra.
