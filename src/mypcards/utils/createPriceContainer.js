export function createPriceContainer(logoUrl, title, price, className) {
  console.log("Creating price container for:", {
    logoUrl,
    title,
    price,
    className,
  });

  const container = document.createElement("div");
  container.className = "priceContainer";

  const logoImage = document.createElement("img");
  logoImage.src = chrome.runtime.getURL(logoUrl);
  logoImage.className = "logoImage";

  console.log("SVG URL:", logoImage.src);

  logoImage.onerror = () => console.error("Failed to load SVG:", logoImage.src);
  logoImage.onload = () =>
    console.log("Successfully loaded SVG:", logoImage.src);

  const priceSpan = document.createElement("span");
  priceSpan.className = className;
  priceSpan.title = title;
  priceSpan.textContent = `R$ ${price.toFixed(2).replace(".", ",")}`;

  container.append(logoImage, priceSpan);
  console.log("Price container created:", container);

  return container;
}
