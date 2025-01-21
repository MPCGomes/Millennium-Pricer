import { createPriceContainer } from "./createPriceContainer.js";

export function displayTotalPrices() {
  const multiCardProductElement = document.getElementById("deck-view");
  if (!multiCardProductElement) {
    return;
  }

  let totalMinPrice = 0;
  let totalMedPrice = 0;
  let totalMaxPrice = 0;
  let totalTcgPrice = 0;

  const productDetails = multiCardProductElement.querySelectorAll("a");
  productDetails.forEach((card) => {
    const quantityElement = card.querySelector(".qtd-card");
    const cardQuantity = parseInt(quantityElement?.textContent || "0", 10);

    // Parse the three MYP prices
    const cardMypMin = parseFloat(
      (card.getAttribute("data-preco-menor") || "0").replace(",", ".")
    );
    const cardMypMed = parseFloat(
      (card.getAttribute("data-preco-medio") || "0").replace(",", ".")
    );
    const cardMypMax = parseFloat(
      (card.getAttribute("data-preco-maior") || "0").replace(",", ".")
    );

    // Parse TCG price for comparison
    const cardTcgPrice = parseFloat(
      (card.getAttribute("data-preco-tcg") || "0").replace(",", ".")
    );

    totalMinPrice += cardQuantity * cardMypMin;
    totalMedPrice += cardQuantity * cardMypMed;
    totalMaxPrice += cardQuantity * cardMypMax;
    totalTcgPrice += cardQuantity * cardTcgPrice;
  });

  // The container where we insert the final total prices
  const priceDiv = document.querySelector(".moeda");
  if (!priceDiv) {
    return;
  }

  // Clear old content if desired
  priceDiv.innerHTML = "";

  // Append the three MYP totals with colored arrow icons
  priceDiv.append(
    createPriceContainer(
      "images/arrow-down-solid.svg",
      "Menor Preço",
      totalMinPrice,
      "mypPrice"
    ),
    createPriceContainer(
      "images/minus-solid.svg",
      "Preço Médio",
      totalMedPrice,
      "mypPrice"
    ),
    createPriceContainer(
      "images/arrow-up-solid.svg",
      "Maior Preço",
      totalMaxPrice,
      "mypPrice"
    )
  );

  // Optionally, also append TCG total
  priceDiv.append(
    createPriceContainer(
      "images/tcgLogo.svg",
      "TCGPlayer Price (for comparison)",
      totalTcgPrice,
      "tcgPrice"
    )
  );
}