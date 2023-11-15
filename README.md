# Millennium Price Helper

## Software Introduction
Millennium Price Helper is a browser extension developed for MYP Cards, an online card game marketplace. It aims to streamline its user experience by enhancing its navigation and deal visibility.

## Observed Problem
MYP Cards features a functionality that displays the cumulative price of all cards in each deck on their listing pages. However, this resource is limited to a specific section of the platform and is not integrated into the default search and shopping mechanisms. As a result, many users remain unaware of it, potentially missing out on advantageous deals.

## Proposed Solution
Millennium Price Helper addresses this issue by redirecting users from areas where the pricing feature is absent to where it is available, thereby saving time and providing better pricing perceptibility.

### Technologies Used
The extension employs several key technologies, each serving a distinct role in its functionality:
• JavaScript: This is the primary language used for building the extension. It enables the core functionality of the app, such as event handling, redirection, and dynamic interaction with the web pages of MYP Cards. JavaScript is essential in implementing the logic for detecting when a user is viewing a specific part of the site and needs redirection to access enhanced features. <br />
• DOM Manipulation: The extension uses Document Object Model (DOM) manipulation to interact with the web pages. This includes identifying specific elements like deck views or product numbers, and modifying the page content or structure in response to user actions or as part of the extension's core features. <br />
• Regular Expressions (RegEx): Used for pattern matching and string manipulation, RegEx helps in extracting relevant information from the webpage, such as product numbers from class names. This is crucial for the functionality that identifies specific products or decks on MYP Cards and redirects users appropriately. <br />
• Web APIs: The extension utilizes various Web APIs, with a particular focus on the Window API. This is used to manipulate browser behavior, such as redirecting users to different URLs within MYP Cards, thereby enhancing the user's navigational experience and providing quicker access to pricing information. <br />

### Installation and Usage
Work in Progress. This section will cover detailed steps for installation and guides for using the extension effectively.

## Future Plans
Future updates will introduce price comparisons for individual cards from two additional major online card game marketplaces on MYP Cards, and vice-versa. This will allow users to compare prices across multiple platforms, ensuring they find the most cost-effective options.

The extension is currently available for Google Chrome and is free to use.
