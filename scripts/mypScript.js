(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const isDeck = document.getElementById('deck-view');

        if (isDeck) {
            const findProductNumber = isDeck.querySelector('[class^="deck-card-link-"]');
            const productNumber = findProductNumber.className.match(/deck-card-link-(\d+)/);
            if (productNumber) {
                const number = productNumber[1];
                window.location.href = `https://mypcards.com/deck/${number}/`;
            }
        }
    });
})();
