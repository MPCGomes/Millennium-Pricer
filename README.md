# Millennium Price Helper

## Software Introduction
Millennium Price Helper is a browser extension developed for MYP Cards, an online card game marketplace. It enhances user experience by easing access to valuable pricing information and providing better deal visibility.

## Observed Problem
Although MYP Cards displays the cumulative price of individual cards in a deck on its listing page, this feature is limited to a specific section of the platform, which is not integrated into the default search and shopping mechanisms. Consequently, many users remain unaware of it, potentially leading to unfavorable deals.

## Proposed Solution
To address this, Millennium Price Helper calculates and displays the cumulative price of all individual cards in a deck on its listing page, without that section limitation. This not only improves pricing transparency but also empowers users with comprehensive pricing insights, facilitating more informed purchasing decisions.

### Technologies Used
Millennium Price Helper employs several key technologies, each serving a distinct role in its functionality:

**• JavaScript:** JavaScript is a programming language used to create interactive and dynamic web pages. In mypMultiCardScript.js, it's used to dynamically calculate and display prices, allowing interaction with web page content, such as reading element attributes and updating the DOM.

```javascript
productDetails.forEach(card => {
    // JavaScript operations with DOM elements
});
```

**• DOM Manipulation:** DOM (Document Object Model) Manipulation involves interacting with and changing the structure and content of a webpage dynamically. In the script, document.getElementById('deck-view') is used to identify and interact with specific elements on the webpage.

```javascript
const isMultiCardProduct = document.getElementById('deck-view');
```

**• Query Selectors:** Query selectors are methods in JavaScript for selecting elements from the DOM based on specified patterns. They allow efficient retrieval of elements for processing, as demonstrated by isMultiCardProduct.querySelectorAll('a').

```javascript
const productDetails = isMultiCardProduct.querySelectorAll('a');
```

**• Event-Driven Programming:** Event-Driven Programming in JavaScript involves writing code that responds to events like user interactions or page loads. The script uses this approach to execute logic such as price calculation at appropriate times.

```javascript
(() => { ... })(); // Immediately-invoked function expression (IIFE)
```

**• JSON (JavaScript Object Notation):**
JSON is a lightweight data-interchange format. In manifest.json, it's used for specifying extension settings such as which scripts to run, permissions needed, and resource locations.

```javascript
"content_scripts": [
  {
    "matches": ["https://mypcards.com/outros/*"]
    // Other JSON configuration settings
  }
],
```

**• Chrome Extension APIs:** Chrome Extension APIs provide functionalities specific to the Chrome browser. The script uses these APIs, like chrome.runtime.getURL, to access and utilize browser-specific features.

```javascript
logoSvg.src = chrome.runtime.getURL(logoUrl);
```

**• CSS Integration:** CSS (Cascading Style Sheets) is used for styling web pages. The script integrates CSS to style elements created by JavaScript, ensuring they match the webpage's visual design.

```javascript
"css": ["scripts/priceStyles.css"]
```

### Installation and Usage
_Work in Progress._
To install and start using Millennium Price Helper, follow the following steps to integrate it into your Chrome browser.

> [!NOTE]
> The following installation steps are for loading the extension in Developer Mode. This process is typically used for testing and development purposes. Once Millennium Price Helper is available on the Chrome Web Store, installation will be streamlined through the store.

1. **Download the Extension:** Navigate to the GitHub repository or the provided link for Millennium Price Helper. Look for a button or link labeled 'Code' and select 'Download ZIP' from the dropdown options.

2. **Extract the ZIP File:** Once the ZIP file is downloaded, locate it on your computer (usually in the Downloads folder) and extract it. You can do this by right-clicking on the ZIP file and choosing 'Extract All...' or using your preferred extraction tool.

3. **Open Chrome Extensions Page:** Launch your Google Chrome browser and enter chrome://extensions/ into the address bar. This action will take you to the Chrome Extensions management page.

4. **Enable Developer Mode:** On the top right of the Chrome Extensions page, find and enable 'Developer Mode'. This allows you to load unpacked extensions.

5. **Load the Unpacked Extension:** Click on 'Load unpacked' and navigate to the extracted folder of Millennium Price Helper. Select the folder to load it into Chrome.

6. **Extension Ready to Use:** Once the extension is loaded, you will see it listed among your Chrome extensions. It's now ready for use on supported websites.

## Future Plans
In upcoming updates, Millennium Price Helper will enhance its cross-platform comparison capabilities:

**• MYP Cards:** Display individual card prices from Cardmarket and Liga Yugioh, two other major online card game marketplace, on their respective listing pages on MYP Cards.

**• Liga Yugioh:** Show individual card prices from Cardmarket, MYP Cards and TCG Prices, another major online card game marketplace, on their respective listing pages on Liga Yugioh.

These enhancements are designed to empower users even more with additional price comparison options, enabling them to make more informed purchasing decisions by providing access to a wide range of pricing options across multiple leading online card game marketplaces.

Millennium Price Helper aims to ensure that users can find the most cost-effective and suitable options for their needs.

_The extension is currently available for Google Chrome and is free to use._
