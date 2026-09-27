let countryCardsContainer;
let displayCount  = 12;
let countrys = [];

document.addEventListener("DOMContentLoaded", ()=>{
    countryCardsContainer = document.getElementById("country-cards-container");

    if (typeof data!== "undefined") {
        countrys = data;
    }

    populateCountryCards()
});

function populateCountryCards(){

    countryCardsContainer.InnerHTML ="";

    if (countrys.length == 0){

        countryCardsContainer.innerHTML = "<p class='error'>Aucun pays ne se trouve dans le tableau</p>";
    } else{
        let loopCounter = Math.min(displayCount, countrys.length);

        for (let i = 0 ; i < loopCounter; i++){
            const country = countrys[i];

            const card = document.createElement("div");

            card.classList.add("country-card");

            // Image / Drapeau
            const flagDiv = document.createElement("div");
            flagDiv.className = "card-flag";
            flagDiv.innerHTML = `<img src="${country.flag.png}" alt="Flag of ${country.name}">`;

            // Nom du pays
            const nameDiv = document.createElement("div");
            nameDiv.className = "card-name";
            nameDiv.innerHTML = `<h3>${country.name.common}</h3>`;

            // Population
            const populationDiv = document.createElement("div");
            populationDiv.className = "card-info";
            populationDiv.innerHTML = `<p><strong>Population:</strong> ${country.population.toLocaleString()}</p>`;

            // Capitale
            const capitalDiv = document.createElement("div");
            capitalDiv.className = "card-info";
            capitalDiv.innerHTML = `<p><strong>Capital:</strong> ${country.capital || "N/A"}</p>`;

            // Région
            const regionDiv = document.createElement("div");
            regionDiv.className = "card-info";
            regionDiv.innerHTML = `<p><strong>Region:</strong> ${country.region}</p>`;

            // 3.2.5. Ajoutez tous les éléments créés à la balise <div> de la carte
            card.appendChild(flagDiv);
            card.appendChild(nameDiv);
            card.appendChild(populationDiv);
            card.appendChild(capitalDiv);
            card.appendChild(regionDiv);

            // 3.2.6. Ajoutez la carte à countryCardsContainer
            countryCardsContainer.appendChild(card);

        }
    }

}