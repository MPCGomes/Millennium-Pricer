import { createPriceContainer } from "./createPriceContainer.js";

export function displayTotalPrices() {
  console.log("Initializing displayTotalPrices");

  const multiCardProductElement = document.getElementById("deck-view");
  console.log("multiCardProductElement:", multiCardProductElement);
  if (!multiCardProductElement) {
    console.log("deck-view element not found");
    return;
  }

  let totalMypPrice = 0;
  let totalTcgPrice = 0;

  const productDetails = multiCardProductElement.querySelectorAll("a");
  console.log("productDetails:", productDetails);

  productDetails.forEach((card, index) => {
    const quantityElement = card.querySelector(".qtd-card");
    console.log(`Card ${index + 1}: QuantityElement=${quantityElement}`);
    const cardQuantity = parseInt(quantityElement?.textContent || "0", 10);
    const cardMypPrice = parseFloat(
      card.getAttribute("data-preco-menor")?.replace(",", ".") || "0"
    );
    const cardTcgPrice = parseFloat(
      card.getAttribute("data-preco-tcg")?.replace(",", ".") || "0"
    );

    console.log(
      `Card ${
        index + 1
      }: Quantity=${cardQuantity}, MYPCards Price=${cardMypPrice}, TCG Price=${cardTcgPrice}`
    );

    totalMypPrice += cardQuantity * cardMypPrice;
    totalTcgPrice += cardQuantity * cardTcgPrice;
  });

  console.log(
    `Total MYPCards Price: ${totalMypPrice}, Total TCG Price: ${totalTcgPrice}`
  );

  const priceDiv = document.querySelector(".moeda");
  console.log("priceDiv:", priceDiv);
  if (!priceDiv) {
    console.log("price div not found");
    return;
  }

  console.log("Appending price containers to price div");

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
  console.log("Price containers appended");
}
