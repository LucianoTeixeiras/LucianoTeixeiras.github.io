# GHPVP-5 — Verificação de publicação no GitHub Pages

**Tipo:** Tarefa  
**Status no Jira:** Backlog  
**Projeto:** GHPVP (GitHub Pages - Vitrine de Projetos)  
**Governança:** Issue-as-a-Prompt (Luciano Teixeira × Hermes Agent / Antigravity)

---

## Conteúdo do Prompt Canônico

## 📋 [ISSUE-AS-A-PROMPT] — Verificação de publicação no GitHub Pages

**Papéis:** Executor: `Hermes Agent` | Arquiteto / Revisor: **Luciano Teixeira**

### 1. Contexto & Objetivo

Estabelecer uma verificação repetível do site publicado após alterações, conectando o repositório ao acompanhamento Jira.

### 2. Escopo Técnico & Caminhos Absolutos

* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\.github\workflows\`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\README.md`
* `https://lucianoteixeiras.github.io/`

### 3. Passos de Execução do Agente

1. Verificar o estado atual de Actions e do Pages.
2. Definir checks mínimos para home, catálogo JSON, página de projeto e links principais.
3. Documentar procedimento de rollback sem alterar a branch principal diretamente.

### 4. Definition of Done (DoD)

* Existe procedimento reproduzível de validação local e publicada.
* Uma falha de catálogo ou página é detectável antes do encerramento da issue.
* A documentação informa como acompanhar o deploy no GitHub.
