[![English](https://img.shields.io/badge/lang-english-red.svg)](README.md)

# Millennium Pricer

## Visão Geral

Millennium Pricer é uma extensão do Google Chrome projetada para melhorar a experiência do usuário nos sites MYPCards e LigaYugioh. Ele fornece aos usuários cálculos de preços em tempo real, comparações entre diferentes fornecedores de cartas e conversão de moeda para ajudar a tomar decisões de compra informadas.

## Funcionalidades

- **Conversão de Moeda**: Busca as últimas taxas de câmbio de USD para BRL e EUR para BRL para conversões de preços precisas.
- **Código Modular e Escalável**: Estrutura de código organizada e modular, facilitando a manutenção e a extensão da funcionalidade.
- **Comparação de Preços no LigaYugioh**: Exibe os preços das cartas em USD e BRL com base nos dados mais recentes do TCGPlayer e do Cardmarket, e converte os preços para a moeda local do usuário para melhor compreensão.
- **Cálculo de Preços em Tempo Real**: Calcula automaticamente o preço total das cartas no seu deck no MYPCards e fornece uma comparação entre os preços do MYPCards e do TCGPlayer.
- **Usa Axios para Requisições de API**: Requisições de API eficientes e confiáveis usando Axios.

## Tecnologias Utilizadas

- **Axios**: Utilizado para fazer requisições de API para buscar taxas de câmbio e preços de cartas.
- **Google Chrome Extension API**: Utilizado para integrar a extensão com o navegador Chrome e interagir com as páginas da web.
- **HTML & CSS**: Estrutura e estilo dos componentes da interface do usuário da extensão.
- **JavaScript**: A principal linguagem de programação usada para a funcionalidade da extensão.

## Como Instalar e Usar

1. **Clone o repositório**:
    ```sh
    git clone https://github.com/yourusername/millennium-pricer.git
    ```

2. **Navegue até o diretório do projeto**:
    ```sh
    cd millennium-pricer
    ```

3. **Instale as dependências**:
    ```sh
    npm install
    ```

4. **Construa o projeto (se necessário)**:
    ```sh
    npm run build
    ```

5. **Carregue a extensão no Google Chrome**:
    - Abra o Chrome e navegue para `chrome://extensions/`.
    - Ative o "Modo de desenvolvedor" usando o botão no canto superior direito.
    - Clique no botão "Carregar sem compactação".
    - Selecione o diretório do projeto.

6. A extensão agora está instalada e pronta para uso nos sites MYPCards e LigaYugioh.

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
│   │       ├── displayTotalPrices.js
│   │       └── getURL.js
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
