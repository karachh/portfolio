# Decisões

Registro curto das escolhas do projeto. Uma entrada por decisão, a mais recente no topo.

## Modelo

### AAAA-MM-DD — [Título da decisão]

- **Contexto:** qual problema ou dúvida levou a isso
- **Decisão:** o que foi escolhido
- **Alternativas consideradas:** o que ficou de fora e por quê

---

### 2026-11-05 — React só para o fundo animado

- **Contexto:** o fundo escolhido (Color Bends, do React Bits; antes o CRT Warp) é distribuído como componente React e usa three.js.
- **Decisão:** adicionar `@astrojs/react` e usar o componente original como ilha (`client:only`), sem alterar o código dele. O resto do site continua em Astro puro.
- **Alternativas consideradas:** reescrever o componente em JavaScript puro (mais leve, mas perde a facilidade de atualizar a partir do React Bits).

### 2026-11-05 — Domínio próprio

- **Contexto:** o briefing pede um domínio próprio, mas o nome e a extensão ainda não estão definidos.
- **Decisão:** decidir depois. Até lá o site fica no endereço gratuito da Vercel (`*.vercel.app`).
- **Alternativas consideradas:** cauakarach.dev (~US$ 12/ano), cauakarach.com.br (~R$ 40/ano no Registro.br) e cauakarach.com (~US$ 10–15/ano).

### 2026-11-05 — Hospedagem: Vercel

- **Contexto:** o site é estático e precisa ser publicado a cada mudança, com espaço para ligar um domínio próprio depois.
- **Decisão:** Vercel, com publicação automática a cada push no GitHub.
- **Alternativas consideradas:** GitHub Pages (exige configurar um GitHub Action para o build) e Netlify (parecida com a Vercel, sem vantagem clara para este caso).

### 2026-11-05 — Estilização: Tailwind CSS

- **Contexto:** o site tem tema escuro por padrão e precisa ser responsivo.
- **Decisão:** Tailwind CSS, com as cores e fontes definidas como tokens no tema.
- **Alternativas consideradas:** CSS puro (dá controle total, mas exige escrever mais; Tailwind já é conhecido do app Estudos).

### 2026-11-05 — Framework: Astro

- **Contexto:** site de página única, em português e inglês, com animações e o currículo em PDF para baixar.
- **Decisão:** Astro. Gera um site estático e leve, traz rotas de idioma (PT/EN) prontas e permite componentes interativos (por exemplo, React) só onde houver interação.
- **Alternativas consideradas:** React + Vite (tudo roda no navegador e PT/EN exige uma biblioteca à parte), Next.js (mais pesado do que um site de uma página precisa) e HTML/CSS/JS puros (PT/EN e o reaproveitamento de partes ficariam manuais).
