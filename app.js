const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])
  );

function setLang(l) {
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l === "en" ? "en" : "pt-BR";
  localStorage.setItem("lang", l);
  document.querySelectorAll(".lang").forEach((b) => {
    b.textContent = l === "en" ? "Português" : "English";
  });
}

setLang(localStorage.getItem("lang") || "pt");

document.addEventListener("click", (e) => {
  if (e.target.closest(".lang")) {
    setLang(document.documentElement.dataset.lang === "en" ? "pt" : "en");
  }

  // Menu mobile hambúrguer
  const toggleBtn = e.target.closest(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (toggleBtn && navMenu) {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-open");
    return;
  }

  // Fechar menu mobile ao clicar em um link
  if (e.target.closest(".nav-menu a") && navMenu) {
    const btn = document.querySelector(".nav-toggle");
    if (btn) btn.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
    return;
  }

  // Fechar menu ao clicar fora do cabeçalho
  if (
    navMenu &&
    navMenu.classList.contains("is-open") &&
    !e.target.closest("header.nav")
  ) {
    const btn = document.querySelector(".nav-toggle");
    if (btn) btn.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("is-open");
  }
});

const base = document.body.dataset.base || "";

async function loadProjects() {
  const r = await fetch(base + "projects/projects.json");
  return (await r.json()).sort((a, b) =>
    String(b.date).localeCompare(String(a.date))
  );
}

const badge = (p) =>
  p.private
    ? '<span class="badge priv">código privado / disponível sob demanda</span>'
    : p.repo_url
    ? '<span class="badge pub">código aberto</span>'
    : "";

async function renderList() {
  const el = document.getElementById("project-list");
  if (!el) return;
  try {
    const ps = await loadProjects();
    el.innerHTML = ps
      .map(
        (p) => `<article class="card">
        ${badge(p)}
        <h3><a href="${base}project.html?slug=${encodeURIComponent(p.slug)}">${esc(p.title)}</a></h3>
        <p class="when">${esc(p.status)} · ${esc(p.date)}${p.source_type ? " · fonte: " + esc(p.source_type) : ""}</p>
        <p>${esc(p.summary)}</p>
        <ul class="tags">${(p.stack || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </article>`
      )
      .join("");
  } catch (e) {
    el.innerHTML =
      "<p>Não foi possível carregar projects.json (abra via servidor HTTP).</p>";
  }
}

async function renderProject() {
  const el = document.getElementById("project");
  if (!el) return;
  const slug = new URLSearchParams(location.search).get("slug");
  const p = (await loadProjects()).find((x) => x.slug === slug);
  if (!p) {
    el.innerHTML =
      "<h1>Projeto não encontrado</h1><p><a href='index.html#projetos'>Voltar</a></p>";
    return;
  }
  document.title = p.title + " — Luciano Teixeira";
  let tr = "";
  if (p.transcript) {
    try {
      const r = await fetch(base + p.transcript);
      if (r.ok) tr = await r.text();
    } catch (e) {}
  }
  const link = (u, t) =>
    u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(t || u)}</a>` : "";

  el.innerHTML = `
    <p><a href="index.html#projetos">← Todos os projetos</a></p>
    ${badge(p)}
    <h1>${esc(p.title)}</h1>
    <p class="when">${esc(p.status)} · ${esc(p.date)}</p>
    <h2>Resumo</h2>
    <p class="pitch">${esc(p.summary)}</p>
    <h2>Stack</h2>
    <ul class="tags">${(p.stack || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
    <h2>Fonte original</h2>
    <p>${p.source_url ? link(p.source_url) + " (" + esc(p.source_type) + ")" : "Projeto próprio (" + esc(p.source_type || "—") + ")"}</p>
    <h2>Transcrição</h2>
    ${tr ? `<details><summary>Mostrar transcrição</summary><pre style="white-space:pre-wrap;font:inherit">${esc(tr)}</pre></details>` : "<p>Sem transcrição (projeto não derivado de vídeo/artigo).</p>"}
    <h2>Protótipo / demo</h2>
    <p>${p.demo_url ? link(p.demo_url, "Abrir demo") : "Demo ainda não publicada."} ${p.repo_url ? " · " + link(p.repo_url, "Repositório no GitHub") : p.private ? " · Código privado / disponível sob demanda." : ""}</p>
    <h2>Como rodar</h2>
    ${p.how_to_run ? `<pre class="card" style="white-space:pre-wrap">${esc(p.how_to_run)}</pre>` : "<p>Instruções disponíveis sob demanda.</p>"}
  `;
}

renderList();
renderProject();
