---
key: "GHPVP-1"
type: "epic"
epic: "GHPVP-1"
version: "v1"
status_source: "tracker"
depends_on: []
blocks: []
executor_role: "spec-executor"
reviewer_role: "software-architect"
auditor_role: "security-engineer"
validator_role: "product-owner"
---

# GHPVP-1 — Evolução contínua da vitrine GitHub Pages

> **Status:** O status oficial desta entrega reside no issue tracker configurado do projeto (`status_source: tracker`).
> O catálogo `docs/prompts/README.md` é gerado automaticamente.

---

## 1. Especificação Técnica (Spec)

### 1.1 Contexto & Diagnóstico Factual
🏛️ [PROMPT DE ARQUITETURA] — Evolução contínua da vitrine GitHub Pages Liderança / Arquiteto:  Luciano Teixeira  | Suporte de Execução:  Hermes Agent 1. Visão do Domínio & Objetivo Estratégico A vitrine pública lucianoteixeiras.github.io é o ponto de entrada para projetos atuais e futuros de IA e dados. O objetivo é mantê-la correta, clara, navegável e sincronizada com os repositórios, sem transformar o site estático em uma aplicação desnecessariamente complexa. 2. Diretrizes Técnicas & Padrão de Engenharia Preservar HTML, CSS e JavaScript vanilla como stack base; não introduzir framework ou build sem decisão explícita. Tratar projects/projects.json como catálogo editorial versionado e project.html como superfície detalhada por slug. Toda mudança deve ser feita em branch de trabalho e vinculada a uma issue GHPVP; commits usam a chave Jira entre colchetes. Validar acessibilidade, responsividade, links, carregamento HTTP e publicação no GitHub Pages antes de concluir cada fatia. Não expor dados de projetos privados, segredos ou credenciais na vitrine pública. 3. Metas de Entrega do Épico (Definition of Done) Catálogo e páginas individuais reproduzem fielmente os dados editoriais aprovados. Fluxo de manutenção permite adicionar ou atualizar projetos com baixo risco de regressão. Deploy e verificação do site são rastreáveis no GitHub e no Jira. Backlog inicial priorizado e pronto para execução incremental no Kanban.

### 1.2 Escopo Técnico & Arquivos Envolvidos
- **Arquivos a Criar / Modificar:**
  - Inspecionar a árvore do projeto e aplicar alterações estritamente no escopo da issue.
- **Contratos & Schemas:**
  - Garantir contratos de tipos estritos, schemas de payload e isolamento de segredos.

### 1.3 Definition of Done (DoD verificável por comando)
- [ ] Implementação concluída com tipagem estrita e sem warnings.
- [ ] Suíte de testes automatizados passando 100% via runner oficial (`uv run`).
- [ ] Zero dados sensíveis, credenciais ou segredos embutidos em código ou documentação.
- [ ] Conclusão registrada no histórico com o trailer formal: `Task-Done: GHPVP-1@v1`

---

## 2. Prompt de Execução do Agente

Execute a ordem de serviço descrita nesta especificação técnica seguindo estritamente o DoD e as Core Rules.

### 2.1 Ritual de Início de Turno & Idempotência
1. **Idempotência:** Execute a checagem no histórico Git:
   `git log origin/master --format=%B | grep -Fx "Task-Done: GHPVP-1@v1"`
   Se houver resultado positivo, aborte imediatamente com:
   `[IDEMPOTÊNCIA] GHPVP-1@v1 já concluída e auditada anteriormente.`
2. **Branch Ativa:** Confirme que não está em `master` ou `main` (`git branch --show-current`). Crie a branch de trabalho:
   `git switch -c feat/ghpvp-1-evolucao-continua-da-vitrine-github-pages`
3. **Execução:** Siga os passos determinísticos via runner oficial do projeto (`uv run`).

### 2.2 Mensagem de Commit Padronizada
```text
feat(escopo): Evolução contínua da vitrine GitHub Pages [GHPVP-1]

Task-Done: GHPVP-1@v1
```

---

## 3. Histórico de Versões do Prompt

* **v1:** Sincronizado a partir do Jira Cloud (GHPVP-1).
