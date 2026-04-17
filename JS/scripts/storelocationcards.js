const storeLocationCardsContainer = document.getElementById(
  "store-location-cards-container",
);

function cStoreLocationCards() {
  storeLocationCardsContainer.innerHTML = "";

  storeLocations.forEach((storeLocation, index) => {
    // Card container
    let card = document.createElement("article");
    card.classList.add("store-location-card");

    // Text area
    let textArea = document.createElement("div");
    textArea.classList.add("store-location-card-text-area");

    let storeName = document.createElement("h3");
    storeName.classList.add("store-location-card-name");
    storeName.textContent = storeLocation.name;

    let cardDetails = document.createElement("div");
    cardDetails.classList.add("store-location-card-details");

    let storeLocationText = document.createElement("p");
    storeLocationText.classList.add("store-location-card-location");
    storeLocationText.textContent = storeLocation.location;

    let storeInfoText = document.createElement("p");
    storeInfoText.classList.add("store-location-card-info");
    storeInfoText.textContent = storeLocation.info;

    //map area
    let mapArea = document.createElement("div");
    mapArea.classList.add("store-location-card-map-area");

    let mapImg = document.createElement("img");
    mapImg.classList.add("store-location-card-map-img");
    mapImg.src = storeLocation.mapImg;
    mapImg.alt = `Map of ${storeLocation.name}`;

    // Append elements
    textArea.append(storeName, storeLocationText, storeInfoText);
    mapArea.append(mapImg);
    card.append(textArea, mapArea);

    storeLocationCardsContainer.append(card);
  });
}

function runAll() {
  cStoreLocationCards();
}

runAll();
