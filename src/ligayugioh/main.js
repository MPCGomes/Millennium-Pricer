import { setupCardPriceDisplay } from "./utils/setupCardPriceDisplay.js";

window.addEventListener("load", async () => {
  const englishNameElement = document.querySelector(".nome-auxiliar");
  const portugueseNameElement = document.querySelector(".nome-principal span");

  if (englishNameElement && portugueseNameElement) {
    const cardName =
      englishNameElement.textContent || portugueseNameElement.textContent;
    await setupCardPriceDisplay(cardName);
  }
});
