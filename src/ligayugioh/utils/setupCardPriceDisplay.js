import { fetchCardPrices } from "./fetchCardPrices.js";

export async function setupCardPriceDisplay(cardName) {
  const { card_prices, dollarRate, euroRate } = await fetchCardPrices(cardName);

  Array.from(document.querySelectorAll("li[id^=cardEdition")).forEach((el) => {
    el.addEventListener("mouseover", () => {
      const price = card_prices[0].card_sets
        .sort((a, b) => a.set_price - b.set_price)
        .find(({ set_code }) => set_code === findEditionCode())?.set_price;
      if (!price) return;

      document.querySelector("#priceUSD").textContent = `$ ${price}`;
      document.querySelector("#priceBRL").textContent = `R$ ${(
        price * dollarRate
      ).toFixed(2)}`;
    });
  });

  const container = document.createElement("div");
  container.align = "center";

  const createPriceRow = (title, valueUSD, valueBRL) => {
    const row = document.createElement("div");
    row.className = "row price-row";
    row.title = title;

    const titleColumn = document.createElement("div");
    titleColumn.className = "col-title";
    const titleDiv = document.createElement("div");
    titleDiv.className = "price-title";
    titleDiv.textContent = title;
    titleColumn.appendChild(titleDiv);

    const spacerColumn = document.createElement("div");
    spacerColumn.className = "col-spacer";
    const spacerDiv = document.createElement("div");
    spacerDiv.className = "spacer";
    spacerColumn.appendChild(spacerDiv);

    const priceUSDColumn = document.createElement("div");
    priceUSDColumn.className = "col-price-usd";
    priceUSDColumn.textContent = `$ ${valueUSD}`;

    const priceBRLColumn = document.createElement("div");
    priceBRLColumn.className = "col-price-brl";
    priceBRLColumn.textContent = `R$ ${valueBRL.toFixed(2)}`;

    row.append(
      titleColumn,
      spacerColumn,
      priceUSDColumn,
      spacerColumn.cloneNode(true),
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
      card_prices[0].cardmarket_price * euroRate
    )
  );

  document.querySelector(".price-container").appendChild(container);
}

function findEditionCode() {
  return document.querySelector("li.ed-sel font").innerText;
}
