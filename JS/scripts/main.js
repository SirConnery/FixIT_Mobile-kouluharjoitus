const footer = document.getElementById("footer");

// Populates the brand&model selection card

function createSelectionCard(container) {
  container.innerHTML = "";

  let cardBackground = document.createElement("div");
  let textArea = document.createElement("div");
  let headline = document.createElement("h3");
  let text = document.createElement("p");

  let selectionControls = document.createElement("div");
  let brandSelect = document.createElement("select");
  let modelSelect = document.createElement("select");
  let viewServicesBtn = document.createElement("button");

  cardBackground.classList.add(
    "brand-model-card-background-wrapper",
    "flex-center",
    "column",
  );

  textArea.classList.add("brand-model-card-text-area", "flex-center", "column");

  headline.classList.add("brand-model-card-headline");
  text.classList.add("brand-model-card-text");
  brandSelect.classList.add("brand-select");
  brandSelect.id = "brand-select";
  modelSelect.classList.add("model-select");
  modelSelect.id = "model-select";
  viewServicesBtn.classList.add("view-services-btn");

  headline.textContent = "Näytä palvelumme";
  text.textContent = "Valitse puhelimesi";
  viewServicesBtn.textContent = "Näytä palvelut";

  textArea.append(headline, text);
  selectionControls.append(brandSelect, modelSelect, viewServicesBtn);
  cardBackground.append(textArea, selectionControls);
  container.append(cardBackground);

  brandSelect.card = container;
  modelSelect.card = container;

  populateBrands(brandSelect);
  handleBrandChange({ target: brandSelect });

  brandSelect.addEventListener("change", handleBrandChange);
  viewServicesBtn.addEventListener("click", submitResults);
}

function populateBrands(brandSelect) {
  brandSelect.innerHTML = "";

  let brands = Object.keys(phoneRepairPriceData);

  brands.forEach((brand) => {
    let option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });
}

function handleBrandChange(event) {
  let brandSelect = event.target;
  let card = brandSelect.card;
  let modelSelect = card.querySelector(".model-select");

  modelSelect.innerHTML = "";

  let selectedBrand = brandSelect.value;

  if (phoneRepairPriceData[selectedBrand]) {
    let models = Object.keys(phoneRepairPriceData[selectedBrand]);
    models.forEach(function (model) {
      let option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else {
    console.warn("Selected brand does not exist in database");
  }
}

function cCardsForAll() {
  document
    .querySelectorAll(".brand-model-selection-card")
    .forEach(function (card) {
      createSelectionCard(card);
    });
}

// Save results and move to resultspage

function submitResults(event) {
  let card = event.target.closest(".brand-model-selection-card");

  let brand = card.querySelector(".brand-select").value;
  let model = card.querySelector(".model-select").value;

  let prices = phoneRepairPriceData[brand][model];

  console.log("Selected:", brand, model);
  console.log("Prices:", prices);

  let data = {
    brand: brand,
    model: model,
    prices: prices,
  };

  localStorage.setItem("repairData", JSON.stringify(data));

  window.location.href = "repairs.html";
}

function cFooter() {
  const footerContentWrapper = document.createElement("footer");
  footerContentWrapper.classList.add("footer-content-wrapper");

  const footerHeaderLinksContainer = document.createElement("div");
  footerHeaderLinksContainer.classList.add("footer-header-links-container");

  const footerEndingText = document.createElement("p");
  footerEndingText.classList.add("footer-ending-text");

  // Create links
  const footerLinks = [
    { name: "Etusivu", url: "./index.html" },
    { name: "Korjaukset", url: "./repairs.html" },
    { name: "UKK", url: "./faq.html" },
    { name: "Yhteystiedot", url: "./contact.html" },
  ];

  footerLinks.forEach((link) => {
    const footerHeaderLink = document.createElement("a");
    footerHeaderLink.classList.add("footer-header-link");
    footerHeaderLink.textContent = link.name;
    footerHeaderLink.href = link.url;

    footerContentWrapper.append(footerHeaderLink);
  });

  //Ending text
  footerEndingText.textContent =
    "© 2026 FixIT Mobile | Vantaa | Puhelinkorjaukset, näytön vaihdot ja vianetsintä. Ratatie 11, 01300 Vantaa (Tikkurila). Avoinna ma-pe 10:00-18:00. Kaikki oikeudet pidätetään.";

  //Append
  footerContentWrapper.append(footerHeaderLinksContainer, footerEndingText);
  footer.append(footerContentWrapper);
}

function runAll() {
  cCardsForAll();
  cFooter();
}

runAll();
