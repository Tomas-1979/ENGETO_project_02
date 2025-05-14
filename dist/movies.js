"use strict";
// 
// API 
// 
// získání elementů z HTML
const selectElement = document.getElementById("movies-select");
const resultsContainer = document.getElementById("results");
// událost po vybrání hodnoty v roletce
selectElement.addEventListener("change", async () => {
    const query = selectElement.value;
    // čeká na výběr z roletky
    if (!query)
        return;
    // načtení dat z API
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        // vymazání předchozích výsledků
        resultsContainer.innerHTML = "";
        // vytvoření výsledků - pouze obrázky
        data.forEach((item) => {
            if (item.show.image) {
                const img = document.createElement("img");
                img.src = item.show.image.medium;
                // přidání výsledku na stránku
                resultsContainer.appendChild(img);
            }
        });
        // při problému bude výstup v konzoli
    }
    catch (error) {
        console.error("Chyba při načítání dat:", error);
    }
});
