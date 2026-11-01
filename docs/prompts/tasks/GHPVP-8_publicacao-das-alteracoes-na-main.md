# GHPVP-8 — Publicação das alterações na main (Merge e consolidação do lote de evolução)

**Tipo:** Tarefa  
**Status no Jira:** Backlog  
**Projeto:** GHPVP (GitHub Pages - Vitrine de Projetos)  
**Governança:** Issue-as-a-Prompt (Luciano Teixeira × Hermes Agent / Antigravity)

---

## Conteúdo do Prompt Canônico

## 📋 [ISSUE-AS-A-PROMPT] — Publicação das alterações na branch main

**Papéis:** Executor: `Hermes Agent` | Arquiteto / Revisor: **Luciano Teixeira**

### 1. Contexto & Objetivo

Consolidar o lote completo de evolução do portfólio desenvolvido na branch `feat/melhorias-ux-mobile` (UX mobile, acessibilidade, SEO, metadados Open Graph, catálogo editorial com TutorAI e Tá na Lista, ordenação de repositórios públicos/privados e espelhamento do catálogo de prompts Jira) na branch `main` para publicação oficial no GitHub Pages.

### 2. Escopo Técnico & Caminhos Absolutos

* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\index.html`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\project.html`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\style.css`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\app.js`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\projects\projects.json`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\README.md`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\docs\`

### 3. Passos de Execução do Agente

1. Assegurar que a branch `feat/melhorias-ux-mobile` esteja com working tree 100% limpa e com todos os prompts/documentações commitados.
2. Fazer checkout da branch `main`.
3. Executar o merge da branch `feat/melhorias-ux-mobile` na `main` preservando os trailers de rastreabilidade Jira (`[GHPVP-1]` a `[GHPVP-8]`).
4. Executar verificação de sanidade local (validação sintática de JS e JSON).
5. Deixar a branch `main` pronta para revisão e push manual pelo Arquiteto Luciano Teixeira.

### 4. Definition of Done (DoD)

* Branch `main` contém todo o histórico consolidado de melhorias da fatia.
* Nenhum conflito de merge remanescente.
* Servidor local HTTP carrega a vitrine com o catálogo ordenado e menu mobile funcional.
* Status da issue registrado e atualizado no Jira.
