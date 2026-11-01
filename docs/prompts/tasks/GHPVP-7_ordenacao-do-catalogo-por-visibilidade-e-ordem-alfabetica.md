# GHPVP-7 — Ordenação do catálogo de projetos: públicos primeiro, privados depois e ordem alfabética

**Tipo:** Tarefa  
**Status no Jira:** Backlog  
**Projeto:** GHPVP (GitHub Pages - Vitrine de Projetos)  
**Governança:** Issue-as-a-Prompt (Luciano Teixeira × Hermes Agent / Antigravity)

---

## Conteúdo do Prompt Canônico

## 📋 [ISSUE-AS-A-PROMPT] — Ordenação do catálogo por visibilidade e ordem alfabética

**Papéis:** Executor: `Hermes Agent` | Arquiteto / Revisor: **Luciano Teixeira**

### 1. Contexto & Objetivo

Aprimorar a apresentação visual e a navegabilidade do catálogo de projetos na vitrine pública, agrupando os projetos prioritariamente pela classe de visibilidade do repositório (públicos primeiro, seguidos pelos privados) e aplicando ordenação alfabética dentro de cada classe.

### 2. Escopo Técnico & Caminhos Absolutos

* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\projects\projects.json`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\app.js`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\README.md`

### 3. Passos de Execução do Agente

1. Analisar a lista atual de projetos em `projects/projects.json` e a lógica de renderização em `app.js`.
2. Definir a regra determinística de ordenação:
   - Critério 1: `visibility == 'public'` precede `visibility == 'private'` (ou repositórios públicos primeiro).
   - Critério 2: Dentro do mesmo grupo de visibilidade, ordenar alfabeticamente pelo título (`title.pt` / `title.en`).
3. Reorganizar `projects/projects.json` para refletir essa estrutura canônica como fonte de verdade estática e/ou garantir ordenação resiliente em tempo de execução no `app.js`.
4. Atualizar o `README.md` e o catálogo de prompts com a nova regra de negócio editorial.
5. Validar via servidor local HTTP sem erros de renderização.

### 4. Definition of Done (DoD)

* Projetos com repositório público aparecem no início da listagem na vitrine.
* Projetos com repositório privado aparecem após os públicos.
* Em cada categoria de visibilidade, os cards estão dispostos em ordem alfabética rigorosa.
* Nenhuma quebra de layout, link ou busca ocorre após a reorganização.
