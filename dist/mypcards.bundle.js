(()=>{"use strict";function e(e,o,c,n){console.log("Creating price container for:",{logoUrl:e,title:o,price:c,className:n});var t=document.createElement("div");t.className="priceContainer";var r=document.createElement("img");r.src=chrome.runtime.getURL(e),r.className="logoImage",console.log("SVG URL:",r.src),r.onerror=function(){return console.error("Failed to load SVG:",r.src)},r.onload=function(){return console.log("Successfully loaded SVG:",r.src)};var a=document.createElement("span");return a.className=n,a.title=o,a.textContent="R$ ".concat(c.toFixed(2).replace(".",",")),t.append(r,a),console.log("Price container created:",t),t}console.log("Initializing MYPCards Extension"),function(){console.log("Initializing displayTotalPrices");var o=document.getElementById("deck-view");if(console.log("multiCardProductElement:",o),o){var c=0,n=0,t=o.querySelectorAll("a");console.log("productDetails:",t),t.forEach((function(e,o){var t,r,a=e.querySelector(".qtd-card");console.log("Card ".concat(o+1,": QuantityElement=").concat(a));var l=parseInt((null==a?void 0:a.textContent)||"0",10),i=parseFloat((null===(t=e.getAttribute("data-preco-menor"))||void 0===t?void 0:t.replace(",","."))||"0"),s=parseFloat((null===(r=e.getAttribute("data-preco-tcg"))||void 0===r?void 0:r.replace(",","."))||"0");console.log("Card ".concat(o+1,": Quantity=").concat(l,", MYPCards Price=").concat(i,", TCG Price=").concat(s)),c+=l*i,n+=l*s})),console.log("Total MYPCards Price: ".concat(c,", Total TCG Price: ").concat(n));var r=document.querySelector(".moeda");console.log("priceDiv:",r),r?(console.log("Appending price containers to price div"),r.append(e("images/mypLogo.svg","Minimum MYPCards Price or TCG (for comparison)",c,"mypPrice"),e("images/tcgLogo.svg","TCGPlayer Price (for comparison)",n,"tcgPrice")),console.log("Price containers appended")):console.log("price div not found")}else console.log("deck-view element not found")}()})();