# BrejaFood (komidaCumida)

Landing page fictícia para o "BrejaFood", um boteco artesanal, feita com HTML, CSS e JavaScript puro. A página apresenta o bar, o cardápio e avaliações de clientes.

## Funcionalidades

- Barra de navegação com links âncora (Início, Cardápio, Avaliações) e rolagem suave
- Menu mobile que abre e fecha pelo botão de hambúrguer, trocando o ícone
- Seção inicial com chamada para ver o cardápio e botão "Ligue agora" (link `tel:`)
- Carrossel de pratos com botões de anterior/próximo: as imagens giram continuamente e aceleram durante a troca
- Cardápio em grid com seis itens, reorganizado por `grid-template-areas` em telas menores
- Seção de avaliações com cards de clientes e estrelas
- Rodapé com onda em SVG, crédito do desenvolvedor e links para redes sociais
- Layout responsivo com media queries (1210px, 1170px e 768px)

## Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, animações, media queries)
- JavaScript puro (`requestAnimationFrame` para a rotação das imagens)
- Font Awesome e Google Fonts (Poppins) via CDN

## Como rodar

Não há dependências nem etapa de build: abra o `index.html` no navegador.

## Estrutura

```
index.html   estrutura da página
style.css    estilos e responsividade
script.js    menu mobile e carrossel de pratos
public/      imagens dos pratos, do bartender e do perfil das avaliações
```

## Licença

MIT. Veja o arquivo [LICENSE](LICENSE).
