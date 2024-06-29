[![English](https://img.shields.io/badge/lang-english-red.svg)](README.md)

# Millennium Pricer

## Visão Geral

Millennium Pricer é uma extensão do Google Chrome projetada para melhorar a experiência do usuário nos sites MYPCards e LigaYugioh. Ele fornece aos usuários cálculos de preços em tempo real, comparações entre diferentes fornecedores de cartões e conversão de moeda para ajudar a tomar decisões de compra informadas.

## Funcionalidades

- **Conversão de Moeda**: Busca as últimas taxas de câmbio de USD para BRL e EUR para BRL para conversões de preços precisas.
- **Código Modular e Escalável**: Estrutura de código organizada e modular, facilitando a manutenção e extensão da funcionalidade.
- **Comparação de Preços na LigaYugioh**: Exibe os preços dos cartões em USD e BRL com base nos dados mais recentes do TCGPlayer e Cardmarket, e converte os preços para a moeda local do usuário para melhor compreensão. Correções recentes garantem a exibição precisa dos preços e funcionalidade.
- **Cálculo de Preços em Tempo Real no MYPCards**: Calcula automaticamente o preço total dos cartões no seu deck no MYPCards e fornece uma comparação entre os preços do MYPCards e do TCGPlayer.
- **Usa Axios para Requisições de API**: Requisições de API eficientes e confiáveis usando Axios.

## Tecnologias Utilizadas

- **Axios**: Usado para fazer requisições de API para buscar taxas de câmbio e preços de cartões.
- **API de Extensão do Google Chrome**: Utilizada para integrar a extensão ao navegador Chrome e interagir com páginas da web.
- **HTML & CSS**: Estrutura e estilo dos componentes da interface do usuário da extensão.
- **JavaScript**: A principal linguagem de programação usada para a funcionalidade da extensão.

## Como Instalar e Usar

1. **Baixar os arquivos do projeto**:

   - Clique no botão verde "<> Code".
   - Selecione "Download ZIP".
   - Descompacte o arquivo baixado.

2. **Carregar a extensão no Google Chrome**:

   1. Abra o Chrome e navegue até `chrome://extensions/`.
   2. Habilite o "Modo desenvolvedor" usando o toggle no canto superior direito.
   3. Clique no botão "Carregar sem compactação".
   4. Selecione o diretório do projeto.

3. A extensão agora está instalada e pronta para uso nos sites MYPCards e LigaYugioh.

4. Os novos detalhes, informações e dados serão exibidos automaticamente após entrar na página de produtos de cartões na LigaYugioh e na página de produtos de decks no MYPCards.

## Estrutura do Projeto

```
.
├── /src
│   ├── /ligayugioh
│   │   ├── main.js
│   │   └── /utils
│   │       ├── fetchCardPrices.js
│   │       └── setupCardPriceDisplay.js
│   ├── /mypcards
│   │   ├── main.js
│   │   └── /utils
│   │       ├── createPriceContainer.js
│   │       └── displayTotalPrices.js
│   ├── /styles
│   │   └── priceStyles.css
│   ├── /images
│   │   ├── icon-16.png
│   │   ├── icon-32.png
│   │   ├── icon-48.png
│   │   ├── icon-128.png
│   │   ├── mypLogo.svg
│   │   └── tcgLogo.svg
│   └── manifest.json
```

## Licença

Este projeto é licenciado sob a Licença MIT.
