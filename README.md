[![Português](https://img.shields.io/badge/lang-portuguese-green.svg)](README_pt-br.md)

# Millennium Pricer

## Overview

Millennium Pricer is a Google Chrome extension designed to enhance the user experience on MYPCards and LigaYugioh websites. It provides users with real-time price calculations, comparisons between different card vendors, and currency conversion to help make informed purchasing decisions.

## Features

- **Currency Conversion**: Fetches the latest USD to BRL and EUR to BRL exchange rates for accurate price conversions.
- **Modular and Scalable Code**: Organized and modular code structure, making it easy to maintain and extend functionality.
- **Price Comparison on LigaYugioh**: Displays card prices in USD and BRL based on the latest TCGPlayer and Cardmarket data, and converts prices to the user's local currency for better understanding. Recent fixes ensure accurate price display and functionality.
- **Real-time Price Calculation on MYPCards**: Automatically calculates the total price of cards in your deck on MYPCards and provides a comparison between MYPCards prices and TCGPlayer prices.
- **Uses Axios for API Requests**: Efficient and reliable API requests using Axios.

## Technologies Used

- **Axios**: Used for making API requests to fetch exchange rates and card prices.
- **Google Chrome Extension API**: Utilized to integrate the extension with the Chrome browser and interact with web pages.
- **HTML & CSS**: Structure and styling of the extension's UI components.
- **JavaScript**: The primary programming language used for the extension's functionality.

## How to Install and Use

## How to Install and Use

1. **Download the project files**:

   - Click on the green "<> Code" button.
   - Select "Download ZIP".
   - Unzip the downloaded file.

2. **Load the extension in Google Chrome**:

   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" using the toggle in the top right corner.
   - Click on the "Load unpacked" button.
   - Select the project directory.

3. The extension is now installed and ready to use on the MYPCards and LigaYugioh websites.

4. The new details, information, and data will be shown automatically after entering the card product page on LigaYugioh and the deck product page on MYPCards.

## Project Structure

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

## License

This project is licensed under the MIT License.
