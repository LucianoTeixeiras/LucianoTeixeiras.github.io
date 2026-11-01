# GHPVP-2 — Catálogo editorial e atualização de projetos

**Tipo:** Tarefa  
**Status no Jira:** Backlog  
**Projeto:** GHPVP (GitHub Pages - Vitrine de Projetos)  
**Governança:** Issue-as-a-Prompt (Luciano Teixeira × Hermes Agent / Antigravity)

---

## Conteúdo do Prompt Canônico

## 📋 [ISSUE-AS-A-PROMPT] — Catálogo editorial e atualização de projetos

**Papéis:** Executor: `Hermes Agent` | Arquiteto / Revisor: **Luciano Teixeira**

### 1. Contexto & Objetivo

Criar um fluxo documentado e verificável para adicionar, atualizar e retirar projetos da vitrine sem quebrar a listagem ou as páginas por slug.

### 2. Escopo Técnico & Caminhos Absolutos

* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\projects\projects.json`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\projects\_TEMPLATE.json`
* `D:\0000-repositorios-dev\c3\LucianoTeixeiras.github.io\README.md`

### 3. Passos de Execução do Agente

1. Inspecionar o contrato atual de `projects.json` e o template.
2. Definir checklist editorial mínimo para status, data, stack, visibilidade, repositório e demo.
3. Atualizar a documentação sem introduzir dados fictícios.
4. Validar JSON e abrir a home e uma página de projeto via servidor HTTP local.

### 4. Definition of Done (DoD)

* O README descreve o contrato atual e o checklist de publicação.
* `projects.json` continua válido e todos os slugs são únicos.
* A home lista todos os registros e `project.html` resolve os slugs existentes.
