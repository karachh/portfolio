# Referências

Para cada referência: o link (ou print salvo em `refs/`) e, principalmente, **o que exatamente agrada** — layout, tipografia, cores, animação, navegação, texto...

Ficam aqui só as referências que estão em uso no site.

## Lista

### 0. Modelo

- **Link:** 
- **Print:** 
- **O que aproveitar:** 
- **O que evitar:** 



### 1. Tela inicial

- **Link: [https://www.figma.com/pt-br/comunidade/file/1475900980923949860/portfoloio](https://www.figma.com/pt-br/comunidade/file/1475900980923949860/portfoloio)**
- **Print:** `refs/TelaInicial01.png`
- **O que aproveitar:** Queria colocar também minha foto no centro, com essas letras embaixo que ficam passando como em um anúncio que fica nos estádios de futebol, o "Creative" e "Designer e Developer", substituindo para "Analista de Desenvolvimento de Sistema" e "Engenharia de Software - UEM"; Também, a descrição no canto superior direito, escrito: "6° Semestre de Engenharia de Software, estudando IA e Engenharia de Dados"
- **O que evitar:** Os atalhos na parte inferior, e o tema cinza. Queria que o tema do site fosse um verde escuro.



### 2. Linha do tempo da experiência

- **Link: [https://www.redoyanulhaque.me/](https://www.redoyanulhaque.me/)**
- **Print:** Sem print
- **O que aproveitar:** Gostei da parte do "my carrer experience", onde ele vai descendo como uma linha do tempo. 
- **O que evitar:** 



### 3. Tela de carregamento

- **Link: [https://aahana-surya.github.io/](https://aahana-surya.github.io/)**
- **Print:** `refs/CarregamentoSite.png`
- **O que aproveitar:** Quando abre o site, aparece uma barra com fundo preto bem simples, que carrega bem simples também, com o nome da pessoa em cima
- **O que evitar:** O tema preto. Queria que seguisse o tema verde também.



### 4. Barra lateral

- **Link: [https://www.tajmirul.site/](https://www.tajmirul.site/)**
- **Print:** `refs/BarraLateral.png`
- **O que aproveitar:** Gostei da simplicidade de ter uma barra lateral expandível que mostra as principais partes do site e as redes sociais
- **O que evitar:** 



### 5. Cor do tema

- **Link:** —
- **Print:** `refs/CorTema.png`
- **O que aproveitar:** a cor base do site inteiro é **`#0a1c15`** (verde-escuro quase preto). Ela é o fundo de todas as seções, da tela de carregamento e da tela inicial. As outras cores saem dela: superfícies um pouco mais claras (`#0e241b`, `#133024`), linhas `#1c4232`, texto `#e9f1ec` e destaque verde-limão `#c4f26b`. No código, ficam como tokens em `src/styles/global.css` (`forest-900` = cor base).
- **O que evitar:** misturar fundos de tons diferentes entre seções. A base é uma cor só.



### 6. Tela que sobe sobre a anterior

- **Link: [https://aitezaz.xyz/](https://aitezaz.xyz/)**
- **Print:** Sem print
- **O que aproveitar:** ao rolar a página, a tela inicial fica parada e o conteúdo de baixo sobe por cima dela, como uma folha deslizando sobre a outra. No site, a tela inicial fica fixa (`sticky`), o resto vem numa camada com cantos arredondados no topo e sombra, e a tela inicial escurece e diminui de leve enquanto é coberta.
- **O que evitar:** 



### 7. Stack em blocos

- **Link: [https://www.caesarcode.com.mx/index.html](https://www.caesarcode.com.mx/index.html)** (seção "Stack Técnico")
- **Print:** Sem print
- **O que aproveitar:** título centralizado com uma palavra em negrito e brilho e outra fina e apagada, mais uma palavra gigante bem fraca ao fundo. Os ícones ficam em blocos quadrados arredondados, apagados e em cinza. Ao passar o mouse, o bloco sobe, brilha, o ícone ganha cor e aparecem etiquetas com a categoria (em cima) e o nome (embaixo). Mantive os blocos "Domino" e "Já usei em projetos". O brilho ficou verde-limão em vez do alaranjado deles.
- **O que evitar:** o fundo preto. No celular não existe hover, então o nome fica sempre visível embaixo do bloco.



### 8. Fundo animado (Color Bends)

- **Link: [https://reactbits.dev/backgrounds/color-bends](https://reactbits.dev/backgrounds/color-bends)**
- **Print:** Sem print
- **O que aproveitar:** faixas de cor que se curvam e ondulam devagar, reagindo ao mouse. Usado na tela inicial e, bem apagado, atrás do resto da página. Componente original em `src/components/react/ColorBends.jsx` (usa three.js; licença MIT + Commons Clause em `LICENSE-reactbits.md`). As cores ficam em `src/components/Background.astro`, em tons do tema: `#1c4232`, `#3d7a5c`, `#7fe3b0` e `#c4f26b`.
- **O que evitar:** as faixas claras atrás dos textos. Por isso a tela inicial tem um leve escurecimento no topo e na base.



### 9. Galeria de projetos em profundidade

- **Link: [https://reactbits.dev/components/depth-carousel](https://reactbits.dev/components/depth-carousel)**
- **Print:** Sem print
- **O que aproveitar:** os cards empilhados em 3D, que se arrastam para o lado (também com setas, pontos e as setas do teclado), com o card de trás inclinado, escurecido e desfocado. Os cards de projeto continuam no mesmo estilo. A lógica do original (que só mostra imagens) foi portada para JavaScript puro em `src/components/Projects.astro`, usando GSAP.
- **O que evitar:** prender a rolagem da página. No original, a rodinha vertical gira o carrossel; aqui só o gesto horizontal mexe nele. No celular as setas somem, porque basta arrastar.



## Padrões que se repetem

<!-- Depois de juntar várias referências, anote aqui o que elas têm em comum. Isso vira a direção visual. -->
