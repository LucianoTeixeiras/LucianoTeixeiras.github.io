# Acervo Documental — LucianoTeixeiras.github.io

> **Governança:** Padrão Canônico de Taxonomia Documental (AKIT-54)  
> **Status:** Ativo  
> **Última Atualização:** 01/11/2026  

---

## 🏛️ Estrutura e Taxonomia Canônica (`docs/`)

Em conformidade com a governança da frota, a pasta `docs/` organiza a documentação do portfólio de forma padronizada, rastreável e sem pastas-curinga.

```text
docs/
├── README.md                  # Este índice geral do acervo documental
├── prompts/                   # Catálogo de Prompts Canônicos espelhando o Jira GHPVP
│   ├── README.md              # Índice mestre com matrizes Épicos x Tasks
│   ├── epicos/                # Prompts de Arquitetura (Jira Epics)
│   └── tasks/                 # Ordens de Serviço Autônomas (Jira Tasks)
├── reports/                   # Relatórios executivos e técnicos datados (YYYYMM/DD/)
│   └── 202611/
│       └── 01/                # Relatórios técnicos do dia 01/11/2026
├── preview-desktop.png        # Asset de OpenGraph / Social preview (desktop)
├── preview-mobile.png         # Asset de preview (mobile drawer)
└── preview-project.png        # Asset de preview (página de detalhe do projeto)
```

---

## 📑 Categorias Canônicas Previstas na Holding

| Categoria | Natureza | Descrição no Repositório |
| :--- | :---: | :--- |
| `prompts/` | Perene | Catálogo de Prompts Canônicos espelhando o Jira Cloud (Issue-as-a-Prompt). |
| `reports/` | Periódica (`YYYYMM/DD/`) | Relatórios técnicos de entregas, fechamento de turnos e auditorias de conformidade. |
| `runbooks/` | Perene | Procedimentos operacionais para manutenção do portfólio, atualização de cases e deploy. |
| `decisions/` | Periódica (`YYYYMM/DD/`) | Registros de Decisão Arquitetural (ADRs) sobre stacks, design system e integrações. |
| `diagrams/` | Perene | Modelos e diagramas Mermaid nativos de fluxos de navegação e componentes. |

---

## 🔍 Rastreabilidade de Entregas

* **2026-11-01:** [Relatório Técnico de Entrega — UX Mobile & Governança](reports/202611/01/relatorio-entrega-ux-mobile.md)
