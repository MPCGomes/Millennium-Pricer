import axios from "axios";

export async function fetchCardPrices(cardName) {
  console.log("Fetching exchange rates...");
  const quote = await axios.get(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL"
  );
  console.log("Exchange rates fetched:", quote.data);
  const { USDBRL, EURBRL } = quote.data;
  const { ask: dollarRate } = USDBRL;
  const { ask: euroRate } = EURBRL;

  console.log("Fetching card prices for:", cardName);
  const response = await axios.get(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
      cardName
    )}&tcgplayer_data`
  );
  const { data } = response.data;
  const { card_prices } = data[0];

  return { card_prices, dollarRate, euroRate };
}
