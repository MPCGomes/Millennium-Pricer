(() => {
    const isMultiCardProduct = document.getElementById('deck-view');
    if (!isMultiCardProduct) return;

    let totalMypPrice = 0;
    let totalTcgPrice = 0;

    const productDetails = isMultiCardProduct.querySelectorAll('a');

    productDetails.forEach(card => {
        const cardQuantity = parseInt(card.querySelector('.qtd-card')?.textContent || '0', 10);
        const cardMypPrice = parseFloat(card.getAttribute('data-preco-menor')?.replace(',', '.') || '0');
        const cardTcgPrice = parseFloat(card.getAttribute('data-preco-tcg')?.replace(',', '.') || '0');

        totalMypPrice += cardQuantity * cardMypPrice;
        totalTcgPrice += cardQuantity * cardTcgPrice;
    });

    const precoDiv = document.querySelector('.preco');
    if (!precoDiv) return;

    function getURL(resource) {
        if (typeof browser !== 'undefined') {
            return browser.runtime.getURL(resource);
        } else if (typeof chrome !== 'undefined') {
            return chrome.runtime.getURL(resource);
        } else {
            return resource;
        }
    }

    function createPriceContainer(logoUrl, title, price, className) {
        const container = document.createElement('div');
        container.className = 'priceContainer';

        const logoSvg = document.createElement('img');
        logoSvg.src = getURL(logoUrl);
        logoSvg.className = 'logoSvg';

        const priceSpan = document.createElement('span');
        priceSpan.className = className;
        priceSpan.title = title;
        priceSpan.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;

        container.append(logoSvg, priceSpan);
        return container;
    }

    precoDiv.append(
        createPriceContainer('images/mypLogo.svg', 'Preço MYPCards mínimo ou TCG (apenas para comparação)', totalMypPrice, 'mypPrice'),
        createPriceContainer('images/tcgLogo.svg', 'Preço TCGPlayer (apenas para comparação)', totalTcgPrice, 'tcgPrice')
    );
})();
