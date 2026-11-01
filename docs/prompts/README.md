# Catálogo de Prompts Canônicos — Vitrine GitHub Pages (LucianoTeixeiras.github.io)

Este catálogo documenta e versiona formalmente todos os **Prompts de Arquitetura (Épicos)** e **Ordens de Serviço (Tasks-as-a-Prompt)** executados pelos agentes da frota (`Hermes Agent`, `Antigravity`, etc.) sob a governança de **Luciano Teixeira**.

Cada documento espelha fielmente a respectiva issue do Jira Cloud no projeto **`GHPVP`** (ID 10286), garantindo paridade total entre o board de governança e os arquivos físicos no Git.

---

## 🏛️ Épicos (Prompts de Arquitetura & Visão de Negócio)

| Chave | Status no Jira | Arquivo Canônico | Resumo |
|---|---|---|---|
| **GHPVP-1** | Backlog | [`epicos/GHPVP-1_evolucao-continua-da-vitrine-github-pages.md`](epicos/GHPVP-1_evolucao-continua-da-vitrine-github-pages.md) | Evolução contínua da vitrine GitHub Pages |

---

## 📋 Tasks & Histórias (Tasks-as-a-Prompt & Ordens de Execução)

| Chave | Status no Jira | Precedência / Vínculo | Arquivo Canônico | Resumo |
|---|---|---|---|---|
| **GHPVP-2** | Backlog | Filho de GHPVP-1 | [`tasks/GHPVP-2_catalogo-editorial-e-atualizacao-de-projetos.md`](tasks/GHPVP-2_catalogo-editorial-e-atualizacao-de-projetos.md) | Catálogo editorial e atualização de projetos |
| **GHPVP-3** | Backlog | Filho de GHPVP-1 | [`tasks/GHPVP-3_qualidade-visual-acessibilidade-e-responsividade.md`](tasks/GHPVP-3_qualidade-visual-acessibilidade-e-responsividade.md) | Qualidade visual, acessibilidade e responsividade |
| **GHPVP-4** | Backlog | Filho de GHPVP-1 | [`tasks/GHPVP-4_seo-e-metadados-de-compartilhamento.md`](tasks/GHPVP-4_seo-e-metadados-de-compartilhamento.md) | SEO e metadados de compartilhamento |
| **GHPVP-5** | Backlog | Sucessora de GHPVP-2..4 | [`tasks/GHPVP-5_verificacao-de-publicacao-no-github-pages.md`](tasks/GHPVP-5_verificacao-de-publicacao-no-github-pages.md) | Verificação de publicação no GitHub Pages |
| **GHPVP-6** | Backlog | Sucessora de GHPVP-2 | [`tasks/GHPVP-6_inventario-e-revisao-periodica-de-links.md`](tasks/GHPVP-6_inventario-e-revisao-periodica-de-links.md) | Inventário e revisão periódica de links |
| **GHPVP-7** | Backlog | Refinamento de UX/Catálogo | [`tasks/GHPVP-7_ordenacao-do-catalogo-por-visibilidade-e-ordem-alfabetica.md`](tasks/GHPVP-7_ordenacao-do-catalogo-por-visibilidade-e-ordem-alfabetica.md) | Ordenação do catálogo: públicos primeiro, depois privados e ordem alfabética |

---

## 🛡️ Padrão de Engenharia Agêntica (Core Rules Embarcadas)

Todas as tarefas ativas e futuras seguem compulsoriamente:
1. **Ritual de Início de Turno:** Sensoriamento de branch ativa (`§4.5`), Imersão prévia no código (`§4.2`) e Runner oficial `uv run` (`§4.3`).
2. **Governança de Branches & Commits:** Trabalho exclusivo em branches temáticas (`feat/...`), proibição de commits diretos na `main`, mensagens com convenção Angular e trailer rastreável com a chave Jira (ex: `[GHPVP-X]`).
3. **Imutabilidade de Stack:** Stack pura HTML5/CSS3/Vanilla JS ES6+, zero dependências de build ou frameworks não homologados, mantendo o GitHub Pages estático, rápido e seguro.
