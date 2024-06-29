import { fetchCardPrices } from "./fetchCardPrices.js";

function findEditionCode() {
  const editionElement = document.querySelector("li.ed-sel font");
  return editionElement ? editionElement.innerText : null;
}

export async function setupCardPriceDisplay(cardName) {
  const { card_prices, dollarRate, euroRate } = await fetchCardPrices(cardName);

  Array.from(document.querySelectorAll("li[id^=edcard]")).forEach((el) => {
    el.addEventListener("mouseover", () => {
      const editionCode = findEditionCode();
      if (editionCode) {
        const price = card_prices
          .sort((a, b) => a.set_price - b.set_price)
          .find(({ set_code }) => set_code === editionCode)?.set_price;
        if (price) {
          document.querySelector("#precousd").textContent = `$ ${price}`;
          document.querySelector("#precousdconvertido").textContent = `R$ ${(
            price * dollarRate
          ).toFixed(2)}`;
        }
      }
    });
  });

  const container = document.createElement("div");
  container.align = "center";

  const createPriceRow = (title, valueUSD, valueBRL, extraClass = "") => {
    const row = document.createElement("div");
    row.className = "row bloco-preco-superior";
    row.title = title;

    const titleColumn = document.createElement("div");
    titleColumn.className = "col-ext";
    const titleDiv = document.createElement("div");
    titleDiv.className = `avgp-extra ${extraClass}`;
    titleDiv.textContent = title;
    titleColumn.appendChild(titleDiv);

    const colPrcMenor1 = document.createElement("div");
    colPrcMenor1.className = "col-prc col-prc-menor";
    colPrcMenor1.innerHTML = " ";

    const spacerColumn1 = document.createElement("div");
    spacerColumn1.className = "col-sep";
    const spacerDiv1 = document.createElement("div");
    spacerDiv1.className = "circle";
    spacerColumn1.appendChild(spacerDiv1);

    const priceUSDColumn = document.createElement("div");
    priceUSDColumn.className = "col-prc col-prc-menor";
    priceUSDColumn.textContent = `$ ${valueUSD}`;

    const spacerColumn2 = document.createElement("div");
    spacerColumn2.className = "col-sep";
    const spacerDiv2 = document.createElement("div");
    spacerDiv2.className = "circle";
    spacerColumn2.appendChild(spacerDiv2);

    const priceBRLColumn = document.createElement("div");
    priceBRLColumn.className = "col-prc col-prc-maior";
    priceBRLColumn.textContent = `R$ ${valueBRL.toFixed(2)}`;

    row.append(
      titleColumn,
      colPrcMenor1,
      spacerColumn1,
      priceUSDColumn,
      spacerColumn2,
      priceBRLColumn
    );
    return row;
  };

  container.append(
    createPriceRow(
      "TCGPLAYER",
      card_prices[0].tcgplayer_price,
      card_prices[0].tcgplayer_price * dollarRate
    ),
    createPriceRow(
      "CARDMARKET",
      card_prices[0].cardmarket_price,
      card_prices[0].cardmarket_price * euroRate,
      "avgp-extra-29"
    )
  );

  const priceContainer = document.querySelector(".desktop-price-lines-0");
  if (priceContainer) {
    priceContainer.appendChild(container);
  }
}
