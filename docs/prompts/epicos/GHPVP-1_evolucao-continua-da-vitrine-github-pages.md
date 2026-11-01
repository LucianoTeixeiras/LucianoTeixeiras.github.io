# GHPVP-1 — Evolução contínua da vitrine GitHub Pages

**Tipo:** Epic  
**Status no Jira:** Backlog  
**Projeto:** GHPVP (GitHub Pages - Vitrine de Projetos)  
**Governança:** Issue-as-a-Prompt (Luciano Teixeira × Hermes Agent / Antigravity)

---

## Conteúdo do Prompt Canônico

## 🏛️ [PROMPT DE ARQUITETURA] — Evolução contínua da vitrine GitHub Pages

**Liderança / Arquiteto:** Luciano Teixeira | Suporte de Execução: `Hermes Agent`

### 1. Visão do Domínio & Objetivo Estratégico

A vitrine pública `lucianoteixeiras.github.io` é o ponto de entrada para projetos atuais e futuros de IA e dados. O objetivo é mantê-la correta, clara, navegável e sincronizada com os repositórios, sem transformar o site estático em uma aplicação desnecessariamente complexa.

### 2. Diretrizes Técnicas & Padrão de Engenharia

* Preservar HTML, CSS e JavaScript vanilla como stack base; não introduzir framework ou build sem decisão explícita.
* Tratar `projects/projects.json` como catálogo editorial versionado e `project.html` como superfície detalhada por slug.
* Toda mudança deve ser feita em branch de trabalho e vinculada a uma issue GHPVP; commits usam a chave Jira entre colchetes.
* Validar acessibilidade, responsividade, links, carregamento HTTP e publicação no GitHub Pages antes de concluir cada fatia.
* Não expor dados de projetos privados, segredos ou credenciais na vitrine pública.

### 3. Metas de Entrega do Épico (Definition of Done)

* Catálogo e páginas individuais reproduzem fielmente os dados editoriais aprovados.
* Fluxo de manutenção permite adicionar ou atualizar projetos com baixo risco de regressão.
* Deploy e verificação do site são rastreáveis no GitHub e no Jira.
* Backlog inicial priorizado e pronto para execução incremental no Kanban.
