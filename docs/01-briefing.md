# Briefing

## Objetivo

Site pessoal no formato de **currículo online**: apresentar quem eu sou, minha trajetória e como me contatar.

## Tipo de site

- Página única (one-page) com rolagem
- Versão em PDF do currículo para download? sim

## Público

Recrutadores, clientes e devs que queiram se inspirar no site ou saber mais sobre mim, sobre meus projetos, experiência e formação.


## Conteúdo

### Seções do site

- [X] Apresentação (nome, cargo/área, foto, frase de resumo)
- [X] Sobre mim
- [X] Experiência profissional
- [X] Formação
- [X] Habilidades / ferramentas
- [X] Projetos
- [X] Certificações / cursos
- [X] Idiomas
- [X] Contato
- [ ] A preencher ainda, com base nas referências que eu for encontrando

### Foco atual: Engenharia de Dados e IA

Estou estudando Engenharia de Dados e Inteligência Artificial. No site, isso aparece em três lugares:

- **Apresentação:** na linha do cargo/área, por exemplo "Analista de Desenvolvimento · estudando Engenharia de Dados e IA".
- **Sobre mim:** um parágrafo sobre a transição, contando o que já faço no trabalho que leva a isso (SQL avançado, PostGIS, automação com Python e integradores) e para onde estou indo.
- **Projetos:** o Pipeline do Dólar como exemplo prático de ETL. O app Estudos mostra o roadmap de Engenharia de Dados e IA que estou seguindo.

### Experiência

| Período | Cargo | Empresa | Principais atividades | Competências desenvolvidas |
|---|---|---|---|---|
| jul/2025 – mar/2026 · meio período | Estagiário de Atendimento ao Cliente | Publisoft | Testes manuais do sistema, atendimento ao cliente e suporte por acesso remoto com ferramentas de help desk | Atenção a detalhes, comunicação com o cliente, diagnóstico de problemas |
| abr/2026 – ago/2026 · meio período | Estagiário de Suporte | Tributech Gestão Pública | Suporte interno; consultas SQL (JOIN, CTE, subqueries) inclusive com dados georreferenciados no PostGIS; automação de processos com Python; otimização de rotinas lentas; criação de um integrador em Python consumindo APIs | SQL avançado, dados geoespaciais, automação, performance de consultas, integração de sistemas |
| ago/2026 – atual · integral | Analista de Desenvolvimento de Sistemas | Tributech Gestão Pública | Desenvolvimento em Java (Spring e Spring Boot) e Angular; criação de integradores; automação de rotinas com Python e SQL; testes e code review do time de desenvolvimento; suporte interno | Desenvolvimento back-end, integração de sistemas, revisão de código, qualidade de software, visão de ponta a ponta (do suporte ao código) |

### Formação

| Período | Curso | Instituição | Situação |
|---|---|---|---|
| Noturno | Engenharia de Software | UEM - Universidade Estadual de Maringá | Cursando o 6º semestre |

### Habilidades

No site, as habilidades aparecem em dois blocos: o que eu domino e as tecnologias com que já fiz projetos (sem dizer que domino).

**Domino**
- **Linguagens:** Python, SQL
- **Dados:** ETL, Pandas, PostgreSQL, PostGIS, SQLite
- **Ferramentas:** Docker, Git, Claude Code
- **Segurança e processos:** ISO 27001, Scrum

**Já usei em projetos**
- **Java** (Spring e Spring Boot): desenvolvimento na Tributech
- **Angular:** desenvolvimento na Tributech
- **Django:** FORMATECH

### Idiomas

| Idioma | Nível |
|---|---|
| Português | Nativo |
| Inglês | Intermediário/avançado |

### Projetos a exibir

Analisados em 05/11/2026 a partir dos repositórios.

| Projeto | Descrição curta | Link | Destaque? |
|---|---|---|---|
| FORMATECH | Sistema web em Django e PostgreSQL que organiza as formações de um ministério jovem da RCC: ciclos, formadores, perseverantes, temas e cronograma. Projeto em equipe da UEM, com arquitetura em camadas e 146 testes automatizados. | https://github.com/karachh/formatech | Sim (principal) |
| Pipeline do Dólar (PTAX) | Pipeline ETL em Python que extrai a cotação diária do dólar da API do Banco Central, carrega em SQLite e agrega um resumo mensal em SQL, de forma idempotente. | https://github.com/karachh/pipeline-dolar | Sim |
| Estudos | PWA pessoal e offline (React, TypeScript, IndexedDB) que reúne todos os meus estudos em módulos, com progresso por etapa e um visual temático para cada área. | https://github.com/karachh/estudos-app | Não (vitrine visual) |

#### Detalhes de cada projeto

**FORMATECH**
- **Status:** em desenvolvimento (Sprint 2). Seis histórias prontas: login com perfis (coordenador e formador), ciclos, formadores, perseverantes, temas da apostila e montagem do cronograma. Faltam escalação com avisos, troca de formador, presença, consultas e exportação.
- **Stack:** Python, Django 5.2, PostgreSQL (Docker), templates renderizados no servidor.
- **O que mostrar:** monolito modular em camadas (view → serviço → repositório → domínio); padrões Repository, Strategy e Template Method; a regra de negócio "o sistema avisa, mas nunca bloqueia: a decisão é humana"; 146 testes; 56 commits e 9 PRs com code review; histórias documentadas em `HISTORIAS.md`.
- **Meu papel:** time de 3 pessoas; fiquei com as histórias de ciclos (US002) e de cronograma (US006).
- **Período:** set/2026 até hoje.

**Pipeline do Dólar (PTAX)**
- **Status:** concluído como estudo (v1). Próximos passos já listados no README: Selic e IPCA, PostgreSQL e agendamento com Airflow.
- **Stack:** Python (`requests`), SQLite, SQL.
- **O que mostrar:** camadas bruta e agregada (raw → mart); carga idempotente (`INSERT OR REPLACE` + full refresh); janela móvel de 365 dias que corrige sozinha uma falha da véspera; datas convertidas para ISO; checagem de qualidade com a contagem de dias úteis; agregação feita no banco, não em Python. README bem escrito, com as decisões técnicas.
- **Período:** jul/2026.

**Estudos**
- **Status:** em uso pessoal e ativo (out/2026). Próxima etapa: sincronizar PC e celular com Supabase.
- **Stack:** React 19, TypeScript, Vite, Tailwind v4, Dexie (IndexedDB), vite-plugin-pwa.
- **O que mostrar:** local-first e offline; um modelo de dados único para todos os módulos; conteúdo pré-carregado que nunca sobrescreve o que o usuário editou; temas visuais por módulo com animações.
- **Período:** out/2026.
- **Antes de exibir:** o README ainda é o modelo padrão do Vite e não há versão publicada para abrir. Vale escrever um README e publicar uma demo (Vercel ou GitHub Pages), senão o card não tem o que mostrar. Outro ponto: o repositório é público e traz imagens de Cowboy Bebop, Evangelion e The Office, que têm direitos autorais; para uma vitrine pública, prefira prints da casca e dos temas com arte de domínio público (Igreja, paisagens).

### Links e contatos

- GitHub: https://github.com/karachh
- LinkedIn: https://www.linkedin.com/in/cauakarach/
- E-mail: karachbr@gmail.com

## Tom e personalidade

Interativo, moderno e característico

## Requisitos

- [X] Responsivo (celular)
- [X] Versões em português e inglês
- [X] Escuro por padrão
- [X] Domínio próprio?

## Fora de escopo (por enquanto)

<!-- O que conscientemente NÃO vai entrar na primeira versão. -->
