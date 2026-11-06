# Portfolio

Portfolio pessoal de **Cauã Karach**.

> Status: 🟢 protótipo inicial

## Sobre

Site pessoal no formato de currículo online: trajetória, experiência, formação, habilidades e contato.

## Documentação

| Documento | Para que serve |
|---|---|
| [Briefing](docs/01-briefing.md) | Objetivo, público, conteúdo e seções do site |
| [Referências](docs/02-referencias.md) | Sites e imagens de inspiração, e o que aproveitar de cada um |
| [Decisões](docs/03-decisoes.md) | Registro das escolhas técnicas e de design, com o porquê |

Imagens e prints de referência ficam em [`refs/`](refs/).

## Stack

- [Astro](https://astro.build), com versões em português e inglês
- Tailwind CSS
- Hospedagem na Vercel
- Domínio próprio: a definir

Detalhes e motivos em [docs/03-decisoes.md](docs/03-decisoes.md).

## Como rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321  (inglês em /en/)
npm run build    # gera o site estático em dist/
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Todo o texto (PT e EN), links e projetos | `src/i18n/content.ts` |
| Cores e fontes (tokens do tema) | `src/styles/global.css` |
| Foto do hero | `src/assets/eu.jpg` |
| Seções | `src/components/*.astro` |
| Currículo em PDF | `public/curriculo-caua-karach.pdf` e `public/resume-caua-karach.pdf` (ainda faltam) |

A tela de carregamento aparece uma vez por sessão do navegador. Para vê-la de novo, abra uma aba anônima.
