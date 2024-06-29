import { createPriceContainer } from "./createPriceContainer.js";

export function displayTotalPrices() {
  const multiCardProductElement = document.getElementById("deck-view");
  if (!multiCardProductElement) {
    return;
  }

  let totalMypPrice = 0;
  let totalTcgPrice = 0;

  const productDetails = multiCardProductElement.querySelectorAll("a");

  productDetails.forEach((card) => {
    const quantityElement = card.querySelector(".qtd-card");
    const cardQuantity = parseInt(quantityElement?.textContent || "0", 10);
    const cardMypPrice = parseFloat(
      card.getAttribute("data-preco-menor")?.replace(",", ".") || "0"
    );
    const cardTcgPrice = parseFloat(
      card.getAttribute("data-preco-tcg")?.replace(",", ".") || "0"
    );

    totalMypPrice += cardQuantity * cardMypPrice;
    totalTcgPrice += cardQuantity * cardTcgPrice;
  });

  const priceDiv = document.querySelector(".moeda");
  if (!priceDiv) {
    return;
  }

  priceDiv.append(
    createPriceContainer(
      "images/mypLogo.svg",
      "Minimum MYPCards Price or TCG (for comparison)",
      totalMypPrice,
      "mypPrice"
    ),
    createPriceContainer(
      "images/tcgLogo.svg",
      "TCGPlayer Price (for comparison)",
      totalTcgPrice,
      "tcgPrice"
    )
  );
}
