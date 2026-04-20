const resultCards = document.getElementById("result-cards");
let data = JSON.parse(localStorage.getItem("repairData"));

let brand = data.brand;
let model = data.model;
let prices = data.prices;

function cResultCards() {
  repairTypes.forEach((repairType, i) => {
    let card = document.createElement("article");
    card.classList.add("result-card");

    let cardHeadlineArea = document.createElement("div");
    cardHeadlineArea.classList.add("result-card-headline-area");

    let cardHeadline = document.createElement("h3");
    cardHeadline.classList.add("result-card-headline");
    cardHeadline.textContent = repairType.name;

    let cardModelBrandNames = document.createElement("h4");
    cardModelBrandNames.classList.add("result-card-model-brand-names");
    cardModelBrandNames = brand + " " + model;

    let cardPrice = document.createElement("h4");
    cardPrice.classList.add("result-card-price");
    cardPrice.textContent = prices[i] + "€";

    let cardTextSeparator = document.createElement("hr");
    cardTextSeparator.classList.add("result-card-separator");

    let cardTextArea = document.createElement("div");
    cardTextArea.classList.add("result-card-text-area");

    let cardText = document.createElement("p");
    cardText.classList.add("result-card-text");
    cardText.textContent = repairType.description;

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("result-card-img-wrapper");

    let cardImg = document.createElement("img");
    cardImg.classList.add("result-card-img");
    cardImg.src = repairType.img;
    cardImg.alt = repairType.name;


    cardHeadlineArea.append(cardHeadline, cardModelBrandNames, cardPrice);
    cardTextArea.append(cardText);
    imgWrapper.append(cardImg);
    card.append(cardHeadlineArea, cardTextSeparator, cardTextArea, imgWrapper);
    resultCards.append(card);
  });
}

function runAll() {
  cResultCards();
}

runAll();
