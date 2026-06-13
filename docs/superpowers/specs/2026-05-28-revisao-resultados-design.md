# Design Doc: Correções do Capítulo 4 (Resultados e Modelagem)

**Data:** 28 de maio de 2026  
**Autor:** Gemini CLI  
**Tópico:** Revisão gramatical, estrutural e técnica do Capítulo 4.

## 1. Problema e Contexto
O Capítulo 4 apresenta o escopo, a modelagem e os requisitos do sistema. A banca apontou diversos erros de gramática (crase, concordância, vírgulas), uso inadequado de primeira pessoa e falta de clareza técnica em requisitos não funcionais específicos (Auditoria, Desempenho e Formulação).

## 2. Decisões de Design (Baseadas no Feedback do Usuário)
- **Atores:** O sistema é focado em técnicos do IDR-PR, mas o texto deixará aberta a possibilidade de expansão para produtores rurais.
- **Auditoria:** Como a interface ainda não existe, o requisito será mantido como uma obrigatoriedade do sistema ("Deve haver..."), sem detalhar uma tela específica.
- **Desempenho:** O texto mencionará explicitamente o uso de estratégias de *caching* no *frontend* (via TanStack Query) para otimização de recursos e velocidade.
- **Tom de Voz:** Conversão total para voz passiva/impessoal.
- **Limpeza de Texto:** Remoção de repetições da palavra "dados" e correção de termos como "pormenorizadamente".

## 3. Alterações Mapeadas
- **Seção 4.1:** Ajuste de fluxo, pontuação e clareza sobre a plataforma web.
- **Seção 4.2.1:** Correção de erros ortográficos nos quadros de requisitos.
- **Requisitos 10.6 e 10.7:** Adição de explicações sobre validação nutricional e histórico de versões.

## 4. Próximos Passos
1. Gerar o Plano de Implementação detalhado.
2. Aplicar as correções no arquivo `cap-experimentos-resultados.tex`.
