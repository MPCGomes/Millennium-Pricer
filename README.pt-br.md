[_Retornar ao Seletor de Idiomas._](https://github.com/MPCGomes/Millennium-Price-Helper/blob/main/README.md)

# Millennium Price Helper

## Introdução do Software
Millennium Price Helper é uma extensão de navegador desenvolvida para MYP Cards, um mercado de jogos de cartas online. Ela melhora a experiência do usuário facilitando o acesso a informações valiosas de preços e proporcionando maior visibilidade de ofertas.

## Problema Observado
Embora MYP Cards mostre o preço cumulativo de cartas individuais em um deck na sua página de listagem, esta funcionalidade é limitada a uma seção específica da plataforma, que não está integrada aos mecanismos padrão de busca e compra. Consequentemente, muitos usuários não têm conhecimento dela, o que pode levar a negócios desfavoráveis.

## Solução Proposta
Para resolver isso, Millennium Price Helper calcula e exibe o preço cumulativo de todas as cartas individuais em um deck em sua página de listagem, sem a limitação dessa seção. Isso não só melhora a transparência dos preços, mas também empodera os usuários com insights abrangentes de preços, facilitando decisões de compra mais informadas.

### Tecnologias Utilizadas
Millennium Price Helper emprega várias tecnologias-chave, cada uma desempenhando um papel distinto em sua funcionalidade:

**• JavaScript:** JavaScript é uma linguagem de programação usada para criar páginas web interativas e dinâmicas. Em mypMultiCardScript.js, é usada para calcular e exibir preços dinamicamente, permitindo interação com o conteúdo da página web, como ler atributos de elementos e atualizar o DOM.

```javascript
productDetails.forEach(card => {
    // JavaScript operations with DOM elements
});
```

**• Manipulação do:** Manipulação do DOM (Modelo de Objeto de Documento) envolve interagir com e mudar a estrutura e o conteúdo de uma página web dinamicamente. No script, document.getElementById('deck-view') é usado para identificar e interagir com elementos específicos na página web.

```javascript
const isMultiCardProduct = document.getElementById('deck-view');
```

**• Seletores de Consulta:** Seletores de consulta são métodos em JavaScript para selecionar elementos do DOM com base em padrões especificados. Eles permitem a recuperação eficiente de elementos para processamento, como demonstrado por isMultiCardProduct.querySelectorAll('a').

```javascript
const productDetails = isMultiCardProduct.querySelectorAll('a');
```

**• Programação Orientada a Eventos:** A programação orientada a eventos em JavaScript envolve escrever código que responde a eventos, como interações do usuário ou carregamentos de página. O script usa essa abordagem para executar lógicas, como cálculo de preços, nos momentos apropriados.

```javascript
(() => { ... })(); // Immediately-invoked function expression (IIFE)
```

**• JSON (JavaScript Object Notation):**
JSON é um formato leve de intercâmbio de dados. Em manifest.json, é usado para especificar configurações da extensão, como quais scripts executar, permissões necessárias e localizações de recursos.

```javascript
"content_scripts": [
  {
    "matches": ["https://mypcards.com/outros/*"]
    // Other JSON configuration settings
  }
],
```

**• APIs de Extensão do Chrome:** As APIs de Extensão do Chrome fornecem funcionalidades específicas para o navegador Chrome. O script usa essas APIs, como chrome.runtime.getURL, para acessar e utilizar recursos específicos do navegador.

```javascript
logoSvg.src = chrome.runtime.getURL(logoUrl);
```

**• Integração com CSS:** CSS (Cascading Style Sheets) é usado para estilizar páginas web. O script integra CSS para estilizar elementos criados por JavaScript, garantindo que eles combinem com o design visual da página web.

```javascript
"css": ["scripts/priceStyles.css"]
```

### Instalação e Uso
_Em Desenvolvimento._
Para instalar e começar a usar o Millennium Price Helper, siga os seguintes passos para integrá-lo ao seu navegador Chrome.

> [!NOTE]
> Os seguintes passos de instalação são para carregar a extensão no Modo Desenvolvedor. Este processo é normalmente usado para testes e propósitos de desenvolvimento. Uma vez que o Millennium Price Helper esteja disponível na Chrome Web Store, a instalação será simplificada através da loja.

1. **Baixe a Extensão:** Navegue até o repositório do GitHub ou o link fornecido para o Millennium Price Helper. Procure um botão ou link rotulado 'Código' e selecione 'Baixar ZIP' nas opções do menu.

2. **Extraia o Arquivo ZIP:** Uma vez baixado o arquivo ZIP, localize-o no seu computador (geralmente na pasta Downloads) e extraia-o. Você pode fazer isso clicando com o botão direito no arquivo ZIP e escolhendo 'Extrair Tudo...' ou usando sua ferramenta de extração preferida.

3. **Abra a Página de Extensões do Chrome:** Abra seu navegador Google Chrome e digite chrome://extensions/ na barra de endereços. Isso o levará à página de gerenciamento de Extensões do Chrome.

4. **Ative o Modo Desenvolvedor:** No canto superior direito da página de Extensões do Chrome, encontre e ative 'Modo Desenvolvedor'. Isso permite carregar extensões descompactadas.

5. **Carregue a Extensão Descompactada:** Clique em 'Carregar descompactada' e navegue até a pasta extraída do Millennium Price Helper. Selecione a pasta para carregá-la no Chrome.

6. **Extensão Pronta para Uso:** Uma vez carregada a extensão, ela será listada entre suas extensões do Chrome. Agora está pronta para uso em sites compatíveis.

## Planos Futuros
Nas próximas atualizações, o Millennium Price Helper aprimorará suas capacidades de comparação entre plataformas:

**• MYP Cards:** Exibir preços individuais de cartas do Cardmarket e Liga Yugioh, dois outros grandes mercados de jogos de cartas online, em suas respectivas páginas de listagem no MYP Cards.

**• Liga Yugioh:** Mostrar preços individuais de cartas do Cardmarket, MYP Cards e TCG Prices, outro grande mercado de jogos de cartas online, em suas respectivas páginas de listagem na Liga Yugioh.

Esses aprimoramentos são projetados para capacitar ainda mais os usuários com opções adicionais de comparação de preços, permitindo que eles tomem decisões de compra mais informadas, fornecendo acesso a uma ampla gama de opções de preços em vários dos principais mercados de jogos de cartas online.

O objetivo do Millennium Price Helper é garantir que os usuários possam encontrar as opções mais econômicas e adequadas às suas necessidades.

_A extensão está atualmente disponível para o Google Chrome e é gratuita para uso._
