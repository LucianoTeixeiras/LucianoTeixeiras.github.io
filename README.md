# Portfólio — Luciano Teixeira

Site estático (HTML + CSS + JS, sem build), pronto para GitHub Pages.

## Ver localmente
    python3 -m http.server 8000   # depois abra http://localhost:8000
(É preciso um servidor HTTP: os projetos são carregados via `fetch` de `projects/projects.json`.)

## Adicionar um novo projeto
1. Copie o bloco de `projects/_TEMPLATE.json` para dentro da lista em `projects/projects.json`.
2. Preencha: `slug` (único, sem espaços), `title`, `summary`, `stack[]`, `source_url` + `source_type` (vídeo, artigo, post), `repo_url`, `demo_url`, `date` (AAAA-MM), `status`, `how_to_run`, `private` (true = mostra "código privado / disponível sob demanda" e não linka o repo).
3. (Opcional) Salve a transcrição em `projects/<slug>/transcript.md` e aponte `"transcript": "projects/<slug>/transcript.md"`.
4. Pronto: o card aparece na home (ordenado por data) e a página fica em `project.html?slug=<slug>`.

Campos vazios ("") são tratados automaticamente na página do projeto.
