---
key: "GHPVP-2"
type: "task"
epic: "GHPVP-1"
version: "v2"
status_source: "tracker"
depends_on: []
blocks: ["GHPVP-3","GHPVP-4","GHPVP-6"]
executor_role: "spec-executor"
reviewer_role: "software-architect"
auditor_role: "security-engineer"
validator_role: "product-owner"
---

# GHPVP-2 — Catálogo editorial e atualização de projetos

> Status oficial no Jira; esta é a ordem de serviço versionada (v2, refinada com diagnóstico factual).

## 1. Diagnóstico factual (verificado em 01/11/2026)
- `projects/projects.json`: 8 projetos, slugs únicos, regex `^[a-z0-9]+(-[a-z0-9]+)*$` ok.
- Contrato real (ver `projects/_TEMPLATE.json`): `slug,title,summary,stack[],source_url,source_type,repo_url,demo_url,date,status,private,how_to_run,transcript`.
- `app.js` ordena por `date` (string) e renderiza home + `project.html?slug=`; privados não linkam `repo_url`.
- Inconsistência: `date` mistura `2026` e `2026-10` (template manda `AAAA-MM`). Status em uso: MVP, planejamento, em uso, ativo, lab.
- `README.md` (1 KB) só explica "adicionar novo projeto"; falta checklist, regra de privados e retirada.

## 2. Escopo
Permitido: `README.md`, `projects/_TEMPLATE.json`, `projects/projects.json` (só com evidência do repo do projeto), `app.js` (só para defeito demonstrado).
Fora: layout, framework, workflow, projetos fictícios.

## 3. Passos
1. Reescrever no README a seção do catálogo: tabela de campos reais (obrigatório/opcional), regra `private=true ⇒ repo_url ""`, `date` novo = `AAAA-MM`, checklist pré-commit, como retirar (marcar `status` e/ou remover via `git revert`/PR) e comando de validação local.
2. Para cada `date` só-ano: consultar `gh repo view <repo> --json createdAt` (ou primeiro commit) e propor `AAAA-MM`; aplicar apenas onde houver evidência. Privados sem repo acessível: listar como pendência para Luciano, não inventar.
3. Registrar no PR a tabela slug → date antiga/nova → evidência.

## 4. DoD (executar da raiz)
```bash
python - <<'PY'
import json,re
a=json.load(open('projects/projects.json',encoding='utf-8'))
req={'slug','title','summary','stack','source_url','source_type','repo_url','demo_url','date','status','private','how_to_run','transcript'}
assert all(req<=set(p) for p in a),'campo ausente'
s=[p['slug'] for p in a]; assert len(s)==len(set(s)),'slug duplicado'
assert all(re.fullmatch(r'[a-z0-9]+(-[a-z0-9]+)*',x) for x in s),'slug invalido'
assert all(not(p['private'] and p['repo_url']) for p in a),'privado com repo'
assert all(re.fullmatch(r'\d{4}(-\d{2})?',p['date']) for p in a),'data invalida'
assert not re.search(r'sk-[A-Za-z0-9_-]{20,}|api[_-]?key|password|client_secret',json.dumps(a),re.I),'segredo'
print('OK',len(a))
PY
python -m http.server 8765 >/dev/null 2>&1 & srv=$!; trap 'kill $srv' EXIT; sleep 1
curl -fs localhost:8765/projects/projects.json | python -m json.tool >/dev/null
for s in $(python -c "import json;print(*[p['slug'] for p in json.load(open('projects/projects.json',encoding='utf-8'))])"); do curl -fs -o /dev/null localhost:8765/project.html?slug=$s || { echo FAIL $s; exit 1; }; done; echo OK-http
```
- [ ] README com contrato/checklist/retirada; [ ] checks acima verdes; [ ] tabela de evidência de datas no PR.

## Ritual do executor

```bash
git log origin/main --format=%B | grep -Fx 'Task-Done: GHPVP-2@v2' && exit 0   # idempotência
branch=$(git branch --show-current)
case "$branch" in main|master) echo 'Crie branch de trabalho'; exit 1;; esac
git switch -c feat/GHPVP-2-catalogo 2>/dev/null || true
```

Commit: `<tipo>(<escopo>): <resumo> [GHPVP-2]` com trailer `Task-Done: GHPVP-2@v2`. Nunca commit/push direto na `main`; merge só via PR revisado por Luciano.

> Premissas globais: site estático (HTML/CSS/JS vanilla, sem build). Pages publica em modo *legacy* a partir de `main` (`/`); **não** criar workflow, framework ou build sem decisão explícita registrada no GHPVP-1. Dados reais apenas; nenhum segredo/dado privado. **Não** rodar `sync-jira-prompts.py --force` (sobrescreve este refinamento).
