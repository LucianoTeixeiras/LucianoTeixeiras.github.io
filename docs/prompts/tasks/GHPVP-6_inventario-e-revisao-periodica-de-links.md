---
key: "GHPVP-6"
type: "task"
epic: "GHPVP-1"
version: "v2"
status_source: "tracker"
depends_on: ["GHPVP-2","GHPVP-5"]
blocks: []
executor_role: "spec-executor"
reviewer_role: "software-architect"
auditor_role: "security-engineer"
validator_role: "product-owner"
---

# GHPVP-6 — Inventário e revisão periódica de links

> Status oficial no Jira; esta é a ordem de serviço versionada (v2, refinada com diagnóstico factual).

## 1. Diagnóstico factual (verificado em 01/11/2026)
- Links externos fixos em `index.html`: `https://agents2ai.com`, `https://github.com/LucianoTeixeiras`, `https://www.linkedin.com/in/luciano-teixeira-b6820322`, `https://wa.me/5551999584963`.
- Links dinâmicos: `repo_url`, `demo_url`, `source_url` em `projects/projects.json` (hoje 4 repos públicos preenchidos; `demo_url`/`source_url` vazios).
- LinkedIn responde 999/302 a clientes automatizados e `wa.me` redireciona: **status ≠ 200 não implica quebra** — o script deve classificar, não só falhar.
- Regra do dono: LinkedIn é somente leitura/sem automação de escrita; este card só faz GET/HEAD.

## 2. Escopo
Criar `scripts/check-links.py` (Python stdlib: `urllib`, `json`, `re`) e seção "Revisão de links" no README. Fora: dependências, cron/Actions, scraping de LinkedIn.

## 3. Passos
1. Extrair URLs de `index.html` (`href="https?://…"`) e de todos os campos `*_url` de `projects.json`; ignorar vazios.
2. HEAD (fallback GET), timeout 15 s, `User-Agent` de navegador, seguir redirects; classificar `ok` (2xx/3xx final), `bloqueado` (999/403/429 em domínios `linkedin.com`, `wa.me`), `quebrado` (404/410/DNS/timeout).
3. Saída: tabela Markdown `url | origem | status | classe`; `--json` opcional; exit 1 se houver `quebrado`.
4. Para repos privados (`private=true`) não há URL a checar; verificar que continuam sem `repo_url`.
5. README: cadência sugerida mensal e como registrar o resultado (anexar no Jira, não commitar relatórios no repo).

## 4. DoD
```bash
python scripts/check-links.py            # exit 0, tabela impressa
python scripts/check-links.py --json | python -m json.tool >/dev/null
python - <<'PY'
import subprocess,sys
r=subprocess.run([sys.executable,'scripts/check-links.py','--url','https://lucianoteixeiras.github.io/__inexistente__'],capture_output=True,text=True)
assert r.returncode==1,r.stdout   # teste negativo
print('OK negativo')
PY
```
- [ ] Todos os URLs de `index.html` e `projects.json` cobertos (contagem impressa = contagem extraída).
- [ ] Classificação `bloqueado` documentada no README. [ ] Sem novas dependências.

## Ritual do executor

```bash
git log origin/main --format=%B | grep -Fx 'Task-Done: GHPVP-6@v2' && exit 0   # idempotência
branch=$(git branch --show-current)
case "$branch" in main|master) echo 'Crie branch de trabalho'; exit 1;; esac
git switch -c feat/GHPVP-6-links 2>/dev/null || true
```

Commit: `<tipo>(<escopo>): <resumo> [GHPVP-6]` com trailer `Task-Done: GHPVP-6@v2`. Nunca commit/push direto na `main`; merge só via PR revisado por Luciano.

> Premissas globais: site estático (HTML/CSS/JS vanilla, sem build). Pages publica em modo *legacy* a partir de `main` (`/`); **não** criar workflow, framework ou build sem decisão explícita registrada no GHPVP-1. Dados reais apenas; nenhum segredo/dado privado. **Não** rodar `sync-jira-prompts.py --force` (sobrescreve este refinamento).
