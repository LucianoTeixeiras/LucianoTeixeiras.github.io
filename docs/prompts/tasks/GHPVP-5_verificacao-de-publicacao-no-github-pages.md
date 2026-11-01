---
key: "GHPVP-5"
type: "task"
epic: "GHPVP-1"
version: "v2"
status_source: "tracker"
depends_on: ["GHPVP-2","GHPVP-3","GHPVP-4"]
blocks: ["GHPVP-6"]
executor_role: "spec-executor"
reviewer_role: "software-architect"
auditor_role: "security-engineer"
validator_role: "product-owner"
---

# GHPVP-5 — Verificação de publicação no GitHub Pages

> Status oficial no Jira; esta é a ordem de serviço versionada (v2, refinada com diagnóstico factual).

## 1. Diagnóstico factual (verificado em 01/11/2026)
- `gh api repos/LucianoTeixeiras/LucianoTeixeiras.github.io/pages`: `build_type=legacy`, fonte `main` `/`, `https_enforced=true`, sem CNAME.
- Runs existentes: apenas "pages build and deployment" (workflow gerenciado pelo GitHub). **Não há workflow no repo e não é requisito criar um.**
- `.nojekyll` presente; site responde 200 em `/` e `project.html?slug=vigiagov`.

## 2. Objetivo
Criar um roteiro executável e um script de smoke test **pós-publicação**, sem alterar o modo de publicação.

## 3. Escopo
Criar `scripts/smoke-pages.sh` (bash + curl + python stdlib) e seção "Publicar e verificar" no README. Fora: GitHub Actions, build, domínio customizado.

## 4. Passos
1. Script recebe `BASE=${BASE:-https://lucianoteixeiras.github.io}`; checa 200 em `/`, `/projects/projects.json`, `/style.css`, `/app.js`, `/robots.txt`, `/sitemap.xml` (estes dois só passam após GHPVP-4) e `project.html?slug=<cada slug>`.
2. Checa que `projects.json` publicado é JSON válido e igual em contagem ao do clone local.
3. Retorna exit ≠ 0 em qualquer falha, imprimindo URL e status.
4. README: fluxo branch → PR → merge → aguardar run "pages build and deployment" (`gh run watch`) → rodar smoke.

## 5. DoD
```bash
bash scripts/smoke-pages.sh                       # contra produção, exit 0
BASE=http://localhost:8765 bash scripts/smoke-pages.sh   # contra servidor local
gh run list -R LucianoTeixeiras/LucianoTeixeiras.github.io -L 1 --json conclusion,name
```
- [ ] Script falha (exit≠0) ao apontar para um slug inexistente (teste negativo registrado no PR).
- [ ] Última run `success` após o merge; saída do smoke anexada ao Jira.
- [ ] Nenhum arquivo em `.github/` criado.

## Ritual do executor

```bash
git log origin/main --format=%B | grep -Fx 'Task-Done: GHPVP-5@v2' && exit 0   # idempotência
branch=$(git branch --show-current)
case "$branch" in main|master) echo 'Crie branch de trabalho'; exit 1;; esac
git switch -c feat/GHPVP-5-pages 2>/dev/null || true
```

Commit: `<tipo>(<escopo>): <resumo> [GHPVP-5]` com trailer `Task-Done: GHPVP-5@v2`. Nunca commit/push direto na `main`; merge só via PR revisado por Luciano.

> Premissas globais: site estático (HTML/CSS/JS vanilla, sem build). Pages publica em modo *legacy* a partir de `main` (`/`); **não** criar workflow, framework ou build sem decisão explícita registrada no GHPVP-1. Dados reais apenas; nenhum segredo/dado privado. **Não** rodar `sync-jira-prompts.py --force` (sobrescreve este refinamento).
