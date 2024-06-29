import { createPriceContainer } from "./createPriceContainer.js";

export function displayTotalPrices() {
  console.log("Display total prices called");

  const multiCardProductElement = document.getElementById("deck-view");
  if (!multiCardProductElement) {
    console.log("Multi-card product element not found");
    return;
  }

  let totalMypPrice = 0;
  let totalTcgPrice = 0;

  const productDetails = multiCardProductElement.querySelectorAll("a");

  productDetails.forEach((card) => {
    const cardQuantity = parseInt(
      card.querySelector(".quantity-card")?.textContent || "0",
      10
    );
    const cardMypPrice = parseFloat(
      card.getAttribute("data-price-min")?.replace(",", ".") || "0"
    );
    const cardTcgPrice = parseFloat(
      card.getAttribute("data-price-tcg")?.replace(",", ".") || "0"
    );

    console.log(`Card: ${card.textContent}, Quantity: ${cardQuantity}, MYP Price: ${cardMypPrice}, TCG Price: ${cardTcgPrice}`);

    totalMypPrice += cardQuantity * cardMypPrice;
    totalTcgPrice += cardQuantity * cardTcgPrice;
  });

  console.log(`Total MYP Price: ${totalMypPrice}, Total TCG Price: ${totalTcgPrice}`);

  const priceDiv = document.querySelector(".price");
  if (!priceDiv) return;

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
