# AgroSatélite

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a5c2a,50:2e7d32,100:4caf50&height=220&section=header&text=AgroSat%C3%A9lite&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Tecnologia%20Espacial%20para%20o%20Agroneg%C3%B3cio%20Brasileiro&descSize=18&descAlignY=58&descColor=ffffff"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</p>

<p align="center">
  Projeto acadêmico desenvolvido para a <strong>Global Solution FIAP 2026/1</strong><br>
  Curso de Análise e Desenvolvimento de Sistemas — Turma 1TDSPG
</p>

---

## 💡 Sobre o Projeto

O **AgroSatélite** é uma plataforma web de monitoramento agrícola inteligente que conecta a exploração espacial com os desafios reais do campo brasileiro. A solução integra dados satelitais, climáticos e agronômicos para responder a pergunta mais importante do agricultor no fim do ciclo: **a lavoura está pronta para colher?**

O produtor informa os dados da sua fazenda e recebe, em segundos, um diagnóstico preciso com base em cinco indicadores combinados:

- 🛰️ **Índice NDVI** — saúde e densidade da vegetação obtidos por imagens de satélite
- 🌡️ **Temperatura** — faixa ideal de maturação para cada cultura
- 💧 **Umidade do solo** — nível adequado ao ponto de colheita
- 📅 **Dias desde o plantio** — ciclo mínimo de cada cultura
- 🌾 **Tipo de cultura e irrigação** — parâmetros específicos por variedade

O sistema cruza todos esses dados e emite um dos três diagnósticos: **Pronto para Colheita**, **Aguardar** ou **Atenção — Condições Adversas** — eliminando a subjetividade da avaliação visual e reduzindo perdas por colheita fora do tempo ideal.

---

## 🎯 Objetivo Acadêmico

Desenvolver um site completo e funcional aplicando boas práticas de **Front-End Design Engineering**, utilizando exclusivamente as tecnologias essenciais da web:

- **HTML5** com estrutura semântica e acessibilidade
- **CSS3** com layout responsivo, identidade visual consistente e código modularizado
- **JavaScript puro** para interatividade, validação e lógica de análise
- **Git e GitHub** para versionamento e colaboração em equipe

O projeto conecta o tema da **Economia Espacial** — proposto na Global Solution 2026/1 — com uma aplicação prática e relevante para o agronegócio, um dos pilares da economia brasileira.

---

## ⚙️ Tecnologias Utilizadas

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,git,github,vscode" />
</p>

| Tecnologia | Aplicação no projeto |
|---|---|
| **HTML5** | Estrutura semântica com `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` |
| **CSS3** | Arquitetura modular em camadas: base → layout → components → pages |
| **JavaScript** | Menu responsivo, accordion, validação de formulário e engine de análise agrícola |
| **Git** | Controle de versão com histórico de commits e branch `main` |
| **GitHub** | Repositório público para colaboração e entrega |

---

## 🚀 Funcionalidades

<div align="center">

| Funcionalidade | Descrição |
|---|---|
| 🌾 Dashboard de Consulta | Formulário completo de análise da lavoura com diagnóstico automático |
| 🛰️ Monitoramento Satelital | Painel com dados orbitais, tabela histórica de 7 dias e escala NDVI |
| ☰ Menu Hambúrguer | Navegação responsiva funcional com abertura e fechamento via JavaScript |
| ❓ FAQ Interativo | Accordion acessível usando `<button>` semântico com `aria-expanded` |
| 📬 Formulário de Contato | Validação completa de campos com mensagens de erro por campo |
| 📊 Barra de NDVI | Indicador visual de saúde da vegetação via CSS custom property |
| 🏷️ Badge de Status | Diagnóstico colorido: Pronto / Aguardar / Atenção |
| ⬆️ Voltar ao Topo | Botão fixo com `aria-label` e animação suave |
| 📱 Responsividade Total | Layout adaptado para mobile (480px), tablet (768px) e desktop (992px+) |
| ♿ Acessibilidade | `aria-label`, `aria-current`, `aria-live` e `role` em todos os elementos interativos |

</div>

---

## 🎨 Identidade Visual

<div align="center">

A paleta foi construída com base nas cores da natureza, sustentabilidade e tecnologia — verde terra para o agronegócio e azul céu para o elemento espacial.

| Cor | Nome | Hexadecimal |
|:---:|---|---|
| 🟢 | Verde Escuro (fundo header/footer) | `#1a5c2a` |
| 🌿 | Verde Principal (botões e destaques) | `#2e7d32` |
| 🍃 | Verde Claro (bordas e acentos) | `#4caf50` |
| 🟦 | Azul Céu (dados satelitais) | `#0288d1` |
| ⚪ | Branco | `#ffffff` |
| ⚫ | Escuro (texto principal) | `#1c1c1c` |
| 🔘 | Cinza Claro (fundo das páginas) | `#f4f4f4` |
| 🟩 | Verde Pálido (fundos de destaque) | `#e8f5e9` |

</div>

---

## 🗂️ Estrutura do Projeto

```plaintext
📦 AgroSateliteGS_FrontEnd
┃
┣ 📂 assets
┃ ┣ 📂 css
┃ ┃ ┣ 📂 base
┃ ┃ ┃ ┣ 📄 reset.css          ← zeragem de estilos padrão dos navegadores
┃ ┃ ┃ ┗ 📄 variables.css      ← custom properties, paleta, utilitários
┃ ┃ ┃
┃ ┃ ┣ 📂 components
┃ ┃ ┃ ┣ 📄 buttons.css        ← botões, variantes e back-to-top
┃ ┃ ┃ ┣ 📄 cards.css          ← cards, stat-boxes e métricas
┃ ┃ ┃ ┗ 📄 forms.css          ← inputs, selects, textarea e erros
┃ ┃ ┃
┃ ┃ ┣ 📂 layout
┃ ┃ ┃ ┣ 📄 header.css         ← header fixo e menu hambúrguer
┃ ┃ ┃ ┗ 📄 footer.css         ← rodapé responsivo
┃ ┃ ┃
┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┣ 📄 home.css           ← hero, features grid, stats e CTA
┃ ┃ ┃ ┣ 📄 sobre.css          ← intro, cards e ODS da ONU
┃ ┃ ┃ ┣ 📄 faq.css            ← accordion
┃ ┃ ┃ ┣ 📄 contato.css        ← layout de duas colunas
┃ ┃ ┃ ┣ 📄 integrantes.css    ← grid de cards dos membros
┃ ┃ ┃ ┣ 📄 dashboard.css      ← painel de consulta e resultado
┃ ┃ ┃ ┗ 📄 monitoramento.css  ← mapa, cards satelitais e tabela
┃ ┃ ┃
┃ ┃ ┗ 📄 main.css             ← ponto de entrada, importa todos os módulos
┃ ┃
┃ ┣ 📂 img
┃ ┃ ┣ 📂 integrantes          ← fotos dos membros da equipe
┃ ┃ ┃ ┣ 📄 Tarik.jpeg
┃ ┃ ┃ ┣ 📄 Giovanni.jpeg
┃ ┃ ┃ ┣ 📄 Italo.jpeg
┃ ┃ ┃ ┣ 📄 fabricio.jpeg
┃ ┃ ┃ ┗ 📄 Carlos.jpeg
┃ ┃ ┃
┃ ┃ ┗ 📂 icones               ← ícones de redes sociais
┃ ┃   ┣ 📄 github.png
┃ ┃   ┗ 📄 linkedin.png
┃ ┃
┃ ┗ 📂 js
┃   ┗ 📄 main.js              ← toda a interatividade: menu, FAQ, validação, engine agrícola
┃
┣ 📄 index.html               ← página inicial com hero e visão geral
┣ 📄 integrantes.html         ← equipe com foto, RM, turma e links
┣ 📄 sobre.html               ← proposta, tecnologias e ODS da ONU
┣ 📄 faq.html                 ← perguntas frequentes com accordion
┣ 📄 contato.html             ← formulário com validação em JavaScript
┣ 📄 dashboard.html           ← consulta de colheita (solução — página 1)
┣ 📄 monitoramento.html       ← dados satelitais em tempo real (solução — página 2)
┗ 📄 README.md
```

---

## 🖼️ Screenshots

> Alguém bota os prints aqui por favor

| Página | Preview |
|---|---|
| Home | <img width="1080" height="1920" alt="Screen Shot 2026-06-08 at 20 19 13" src="https://github.com/user-attachments/assets/423f42cf-0750-4bd4-b9c4-fc29afc548ba" /> |
| Dashboard | <img width="1920" height="1080" alt="Screen Shot 2026-06-08 at 20 21 38" src="https://github.com/user-attachments/assets/4869d392-27b4-4e75-b291-c86b94d76d8e" /> |
| Monitoramento | <img width="1080" height="1920" alt="Screen Shot 2026-06-08 at 20 22 32" src="https://github.com/user-attachments/assets/0cd6c4a1-f257-4b3f-8780-2d0e9195ac11" /> |
| FAQ | <img width="1920" height="1080" alt="Screen Shot 2026-06-08 at 20 23 03" src="https://github.com/user-attachments/assets/f602b5c3-383c-4c12-9e6d-853a5b0b1ccc" /> |
| Contato | <img width="1920" height="1080" alt="Screen Shot 2026-06-08 at 20 23 36" src="https://github.com/user-attachments/assets/2363e85c-ecb9-4ff6-ad95-46cfc3d9fcb7" /> |
| Integrantes | <img width="1920" height="1080" alt="Screen Shot 2026-06-08 at 20 24 05" src="https://github.com/user-attachments/assets/196230aa-ca8e-4910-b5c7-15103d77794f" /> |
| Mobile | <img width="1236" height="2745" alt="Screen Shot 2026-06-08 at 20 24 57" src="https://github.com/user-attachments/assets/882743e4-100a-4395-bba0-e7534a027d1e" /> |

---

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first**, garantindo que o layout se adapte perfeitamente a qualquer dispositivo através de Flexbox, CSS Grid e Media Queries estrategicamente distribuídas em todos os arquivos de página.

| Dispositivo | Breakpoint | Comportamento |
|---|---|---|
| 📱 Mobile | até 480px | layout em coluna única, menu hambúrguer ativo, fontes redimensionadas |
| 📲 Tablet | 481px – 768px | grid de 2 colunas, menus e cards reorganizados |
| 🖥️ Desktop | acima de 992px | layout completo com múltiplas colunas e espaçamentos generosos |

---

## 🌍 Conexão com os ODS da ONU

A solução contribui diretamente para os seguintes Objetivos de Desenvolvimento Sustentável da ONU:

| ODS | Objetivo | Relação com o projeto |
|:---:|---|---|
| **2** | Fome Zero e Agricultura Sustentável | Apoio à decisão de colheita reduz desperdício e melhora produtividade |
| **9** | Indústria, Inovação e Infraestrutura | Uso de tecnologia satelital e software para o campo |
| **11** | Cidades e Comunidades Sustentáveis | Conectividade de dados entre o campo e centros urbanos |
| **13** | Ação contra a Mudança do Clima | Monitoramento de temperatura e umidade integrado à produção |
| **8** | Trabalho Decente e Crescimento Econômico | Redução de perdas e aumento da rentabilidade do produtor rural |

---

## 👨‍💻 Integrantes

| Nome | RM | Turma | GitHub | LinkedIn |
|---|---:|---|---|---|
| Tárik Moussa Alma | 571411 | 1TDSPG | [GitHub](https://github.com/cearaa) | [LinkedIn](https://www.linkedin.com/in/rikk-alma/) |
| Giovanni Azevedo | 572894 | 1TDSPG | [GitHub](https://github.com/GiovanniDEVazevedo) | [LinkedIn](https://www.linkedin.com/in/giovanni-azevedo-760753353/) |
| Ítalo Neto | 572912 | 1TDSPG | [GitHub](https://github.com/I-neeto99) | [LinkedIn](https://www.linkedin.com/in/italo-neto-390579345/) |
| Fabrício Aquiles Sales da Silva | 570985 | 1TDSPG | [GitHub](https://github.com/fabricioaquiles) | [LinkedIn](https://www.linkedin.com/in/fabricioaquiles/) |
| Carlos Eduardo Tsucamoto Chiarelli | 569574 | 1TDSPG | [GitHub](https://github.com/carlostsucamoto) | [LinkedIn](https://www.linkedin.com/in/carlostsucamoto/) |

---

## 🌐 Repositório

<p align="center">
  <a href="https://github.com/cearaa/AgroSateliteGS_FrontEnd" target="_blank">
    <img src="https://img.shields.io/badge/Acessar%20Repositório-2e7d32?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</p>

<p align="center">
  👉 https://github.com/cearaa/AgroSateliteGS_FrontEnd
</p>

---

## 🖥️ Como Executar

Clone o repositório:

```bash
git clone https://github.com/cearaa/AgroSateliteGS_FrontEnd
```

Entre na pasta:

```bash
cd AgroSateliteGS_FrontEnd
```

Abra o arquivo `index.html` diretamente no navegador ou use a extensão **Live Server** no VS Code para visualização com recarregamento automático.

---

## 📌 Boas Práticas Aplicadas

✅ HTML semântico — `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`  
✅ Um único `<h1>` por página, com hierarquia correta até `<h4>`  
✅ Logo em `<p>` para não conflitar com o `<h1>` da página  
✅ CSS modularizado em camadas — base / layout / components / pages  
✅ JavaScript em arquivo externo — zero JS inline  
✅ Zero CSS inline — todas as propriedades visuais em arquivos externos  
✅ Zero frameworks externos — HTML, CSS e JS puros  
✅ Responsividade com breakpoints em 480px e 768px em todos os arquivos de página  
✅ Menu hambúrguer funcional com abertura via JS e fechamento ao clicar em link  
✅ Accordion FAQ usando `<button>` semântico com `aria-expanded`  
✅ Formulário de contato com `preventDefault()` e mensagens de erro por campo  
✅ `aria-label` em todos os elementos interativos (botões, links, inputs)  
✅ `aria-current="page"` no link ativo do menu em cada página  
✅ Nomes de arquivos em letras minúsculas, sem espaços ou acentos  
✅ Pasta `css` em minúsculo em todos os caminhos (compatibilidade Linux/web)  

---

## 📬 Contato

Dúvidas ou sugestões sobre o projeto? Entre em contato pela página [Contato](contato.html) ou diretamente pelo GitHub ou LinkedIn de qualquer integrante listado acima.

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:4caf50,50:2e7d32,100:1a5c2a&height=140&section=footer"/>
</p>

<p align="center">
  Desenvolvido com 🌱 pela equipe AgroSatélite &nbsp;|&nbsp; FIAP Global Solution 2026/1
</p>
