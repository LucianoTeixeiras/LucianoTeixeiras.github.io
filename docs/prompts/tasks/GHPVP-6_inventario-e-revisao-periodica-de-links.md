# GHPVP-6 — Inventário e revisão periódica de links

**Tipo:** Tarefa  
**Status no Jira:** Backlog  
**Projeto:** GHPVP (GitHub Pages - Vitrine de Projetos)  
**Governança:** Issue-as-a-Prompt (Luciano Teixeira × Hermes Agent / Antigravity)

---

## Conteúdo do Prompt Canônico

## 📋 [ISSUE-AS-A-PROMPT] — Inventário e revisão periódica de links

**Papéis:** Executor: `Hermes Agent` | Arquiteto / Revisor: **Luciano Teixeira**

### 1. Contexto & Objetivo

Reduzir o risco de a vitrine apresentar links de repositórios, demos ou fontes que deixaram de existir.

### 2. Escopo Técnico & Caminhos Absolutos

* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\projects\projects.json`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\README.md`

### 3. Passos de Execução do Agente

1. Inventariar URLs externas presentes no catálogo e nas páginas.
2. Escolher uma verificação simples, executável localmente ou em GitHub Actions, sem segredos.
3. Registrar tratamento para projetos privados, redirects e indisponibilidade temporária.

### 4. Definition of Done (DoD)

* A verificação não falha por links vazios opcionais.
* URLs preenchidas no catálogo são reportadas com status verificável.
* O procedimento está documentado e não envia dados privados a terceiros.
