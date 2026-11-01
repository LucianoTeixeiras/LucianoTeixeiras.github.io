---
key: "GHPVP-3"
type: "task"
epic: "GHPVP-1"
version: "v2"
status_source: "tracker"
depends_on: ["GHPVP-2"]
blocks: ["GHPVP-6"]
executor_role: "spec-executor"
reviewer_role: "software-architect"
auditor_role: "security-engineer"
validator_role: "product-owner"
---

# GHPVP-3 — Qualidade visual, acessibilidade e responsividade

> Status oficial no Jira; esta é a ordem de serviço versionada (v2, refinada com diagnóstico factual).

## 1. Diagnóstico factual
- `style.css` (4,3 KB): um único `@media(max-width:700px)` que faz `.nav ul{display:none}` → **no mobile a navegação some sem substituto**.
- `a:focus-visible,button:focus-visible` com outline `#f59e0b` já existe; `index.html` tem 0 atributos `aria-*`, 0 `<img>`.
- Idioma alternado por `setLang` (classes `.pt/.en`, `html[lang]` atualizado); botão `.lang` sem `aria-label`/`aria-pressed`.
- Cards usam links `<h3><a>`; `project.html` tem 1,1 KB, estrutura dinâmica via `app.js`.
- Preferência do dono: fundo claro, alto contraste suave, sem fundos escuros, astigmatismo (nada de halos/contraste fraco).

## 2. Escopo
Permitido: `style.css`, `index.html`, `project.html`, ajustes pontuais em `app.js` (rótulos/ARIA). Fora: redesenho, novas fontes externas, frameworks, JS de terceiros.

## 3. Passos
1. Mobile: oferecer navegação (lista horizontal rolável ou menu `<details>`) em ≤700px sem JS pesado.
2. Landmarks: `<header>`, `<nav aria-label>`, `<main>`, `<footer>`; "skip link" para `#projetos`.
3. Botão de idioma: `aria-label` e `aria-pressed`/`lang` coerentes; `project.html` com `<main>` e título dinâmico (já em `document.title`).
4. Contraste: calcular razão de cada par texto/fundo de `style.css` (≥4.5:1 texto, ≥3:1 UI); corrigir só o que falhar.
5. Respeitar `prefers-reduced-motion` caso exista transição/animação.
6. Verificar larguras 360, 768 e 1280 px sem rolagem horizontal.

## 4. DoD
```bash
python -m http.server 8765 >/dev/null 2>&1 & srv=$!; trap 'kill $srv' EXIT; sleep 1
npx --yes lighthouse http://localhost:8765/index.html --only-categories=accessibility,best-practices --quiet --chrome-flags="--headless" --output=json --output-path=lh-index.json
npx --yes lighthouse "http://localhost:8765/project.html?slug=vigiagov" --only-categories=accessibility --quiet --chrome-flags="--headless" --output=json --output-path=lh-project.json
python - <<'PY'
import json
for f in ('lh-index.json','lh-project.json'):
    print(f, json.load(open(f))['categories']['accessibility']['score'])
PY
```
- [ ] Score acessibilidade ≥ 0.95 em ambas as páginas (anexar no PR; remover `lh-*.json` antes do commit).
- [ ] Sem overflow horizontal em 360/768/1280 (verificação via `document.documentElement.scrollWidth <= innerWidth` em Playwright/Chrome headless; registrar saída).
- [ ] Navegação operável por teclado e visível no mobile; foco visível preservado.
- [ ] Nenhum fundo escuro introduzido; nenhuma dependência externa nova.

## Ritual do executor

```bash
git log origin/main --format=%B | grep -Fx 'Task-Done: GHPVP-3@v2' && exit 0   # idempotência
branch=$(git branch --show-current)
case "$branch" in main|master) echo 'Crie branch de trabalho'; exit 1;; esac
git switch -c feat/GHPVP-3-a11y 2>/dev/null || true
```

Commit: `<tipo>(<escopo>): <resumo> [GHPVP-3]` com trailer `Task-Done: GHPVP-3@v2`. Nunca commit/push direto na `main`; merge só via PR revisado por Luciano.

> Premissas globais: site estático (HTML/CSS/JS vanilla, sem build). Pages publica em modo *legacy* a partir de `main` (`/`); **não** criar workflow, framework ou build sem decisão explícita registrada no GHPVP-1. Dados reais apenas; nenhum segredo/dado privado. **Não** rodar `sync-jira-prompts.py --force` (sobrescreve este refinamento).
