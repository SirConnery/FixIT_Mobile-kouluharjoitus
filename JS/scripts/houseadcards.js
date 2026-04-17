const houseAdSection = document.getElementById("house-ad-section");

function cHouseAdCards() {
  houseAdsData.forEach((adData, index) => {
    let houseAdContainer = document.createElement("div");
    houseAdContainer.classList.add("house-ad-container");

    let houseAdCard = document.createElement("article");
    houseAdCard.classList.add("house-ad-card");

    let houseAdTextWrapper = document.createElement("div");
    houseAdTextWrapper.classList.add("house-ad-text-wrapper");

    let houseAdHeader = document.createElement("header");
    houseAdHeader.classList.add("house-ad-header");

    let houseAdTitle = document.createElement("h3");
    houseAdTitle.classList.add("house-ad-title");

    let houseAdDescriptionArea = document.createElement("div");
    houseAdDescriptionArea.classList.add("house-ad-description-area");

    let houseAdDescription = document.createElement("p");
    houseAdDescription.classList.add("house-ad-description");

    let houseAdImgContainer = document.createElement("div");
    houseAdImgContainer.classList.add("house-ad-img-container");

    let houseAdImg = document.createElement("img");
    houseAdImg.classList.add("house-ad-img");

    //Content
    houseAdTitle.textContent = adData.headerText;
    houseAdDescription.textContent = adData.text;
    houseAdImg.src = adData.imgSource;

    // Styles
    houseAdContainer.style.backgroundColor = adData.containerColor;
    houseAdCard.style.backgroundColor = adData.cardColor;

    //Appending
    houseAdHeader.append(houseAdTitle);
    houseAdDescriptionArea.append(houseAdDescription);
    houseAdTextWrapper.append(houseAdHeader, houseAdDescriptionArea);
    houseAdImgContainer.append(houseAdImg);

    if (adData.imgOnLeftSide) {
      houseAdCard.append(houseAdImgContainer, houseAdTextWrapper);
    } else {
      houseAdCard.append(houseAdTextWrapper, houseAdImgContainer);
    }

    houseAdContainer.append(houseAdCard);

    houseAdSection.append(houseAdContainer);
  });
}

function runAll() {
  cHouseAdCards();
}

runAll();
