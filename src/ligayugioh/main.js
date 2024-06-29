import { setupCardPriceDisplay } from "./utils/setupCardPriceDisplay.js";

function initializeLigaYugiohExtension() {
  window.addEventListener("load", async () => {
    const englishNameElement = document.querySelector(".name-auxiliary");
    const portugueseNameElement = document.querySelector(".name-primary span");

    if (englishNameElement && portugueseNameElement) {
      const cardName =
        englishNameElement.textContent || portugueseNameElement.textContent;
      await setupCardPriceDisplay(cardName);
    } else {
      console.log('Element with class "name-auxiliary" not found');
    }
  });
}

initializeLigaYugiohExtension();
