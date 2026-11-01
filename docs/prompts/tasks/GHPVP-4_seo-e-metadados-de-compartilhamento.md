---
key: "GHPVP-4"
type: "task"
epic: "GHPVP-1"
version: "v2"
status_source: "tracker"
depends_on: ["GHPVP-2"]
blocks: ["GHPVP-5"]
executor_role: "spec-executor"
reviewer_role: "software-architect"
auditor_role: "security-engineer"
validator_role: "product-owner"
---

# GHPVP-4 — SEO e metadados de compartilhamento

> Status oficial no Jira; esta é a ordem de serviço versionada (v2, refinada com diagnóstico factual).

## 1. Diagnóstico factual (verificado em 01/11/2026)
- `index.html`: tem `charset`, `viewport`, `description`, `color-scheme`; **não** tem `canonical`, Open Graph, Twitter Card, `theme-color` nem JSON-LD.
- `project.html`: só `charset`, `viewport` e CSS; `<title>` é trocado em runtime por `app.js` (crawlers sem JS não veem).
- `https://lucianoteixeiras.github.io/robots.txt` → **404**; `/sitemap.xml` → **404**.
- URL canônica: `https://lucianoteixeiras.github.io/`. Não há imagem social no repositório.

## 2. Escopo
Criar `robots.txt`, `sitemap.xml`, `assets/og-card.png` (1200×630, fundo claro, texto legível; gerar de HTML local via Edge/Chrome headless); editar `<head>` de `index.html` e `project.html`; em `app.js`, atualizar `document.title` e `meta[name=description]` por projeto. Fora: analytics, trackers, fontes externas, geração de páginas estáticas por projeto (exigiria build — decisão separada).

## 3. Passos
1. `<head>` da home: `canonical`, `og:type/title/description/url/image/locale(pt_BR)`, `twitter:card=summary_large_image`, `theme-color`; JSON-LD `Person` (nome, `jobTitle`, `sameAs` com os links públicos já presentes no rodapé — **sem telefone**).
2. `project.html`: mesmas tags com valores padrão + atualização dinâmica no `renderProject()`.
3. `robots.txt`: `User-agent: *`, `Allow: /`, `Sitemap: https://lucianoteixeiras.github.io/sitemap.xml`.
4. `sitemap.xml` com a home e uma entrada `project.html?slug=<slug>` por projeto **público** de `projects.json` (gerar com script one-off em Python, documentar o comando no README; sem tooling novo no repo).
5. Imagem OG: peso ≤ 300 KB, `alt` coerente.

## 4. DoD
```bash
python - <<'PY'
import re,json,xml.dom.minidom as m
h=open('index.html',encoding='utf-8').read()
for k in ('rel="canonical"','og:title','og:description','og:image','og:url','twitter:card'): assert k in h,k
m.parse('sitemap.xml'); s=open('sitemap.xml',encoding='utf-8').read()
n=len(re.findall('<loc>',s)); p=[x for x in json.load(open('projects/projects.json',encoding='utf-8')) if not x['private']]
assert n==1+len(p),(n,len(p))
ld=re.findall(r'<script type="application/ld\+json">(.*?)</script>',h,re.S)
assert len(ld)==1 and json.loads(ld[0])['@type']=='Person'
assert not re.search(r'wa\.me|\+?55\d{9,}|@',ld[0]),'contato pessoal no JSON-LD'
assert 'Sitemap:' in open('robots.txt').read()
import os; assert os.path.getsize('assets/og-card.png')<300_000
print('OK',n)
PY
```
- [ ] Após o merge (GHPVP-5): `curl -I` de `/robots.txt`, `/sitemap.xml` e da imagem OG retorna 200.
- [ ] JSON-LD não contém telefone/e-mail. [ ] Validação manual no Rich Results/LinkedIn Post Inspector anexada ao PR.

## Ritual do executor

```bash
git log origin/main --format=%B | grep -Fx 'Task-Done: GHPVP-4@v2' && exit 0   # idempotência
branch=$(git branch --show-current)
case "$branch" in main|master) echo 'Crie branch de trabalho'; exit 1;; esac
git switch -c feat/GHPVP-4-seo 2>/dev/null || true
```

Commit: `<tipo>(<escopo>): <resumo> [GHPVP-4]` com trailer `Task-Done: GHPVP-4@v2`. Nunca commit/push direto na `main`; merge só via PR revisado por Luciano.

> Premissas globais: site estático (HTML/CSS/JS vanilla, sem build). Pages publica em modo *legacy* a partir de `main` (`/`); **não** criar workflow, framework ou build sem decisão explícita registrada no GHPVP-1. Dados reais apenas; nenhum segredo/dado privado. **Não** rodar `sync-jira-prompts.py --force` (sobrescreve este refinamento).
