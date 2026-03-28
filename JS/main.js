const footer = document.getElementById("footer");

// Populates the brand&model selection card

function createSelectionCard(container) {
  container.innerHTML = "";

  var cardBackground = document.createElement("div");
  var brandSelect = document.createElement("select");
  var modelSelect = document.createElement("select");
  var viewServicesBtn = document.createElement("button");

  cardBackground.classList.add("card-background-wrapper");
  brandSelect.classList.add("brand-select");
  modelSelect.classList.add("model-select");
  viewServicesBtn.classList.add("view-services-btn");

  viewServicesBtn.textContent = "View Services";

  cardBackground.appendChild(brandSelect);
  cardBackground.appendChild(modelSelect);
  cardBackground.appendChild(viewServicesBtn);
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

  var brands = Object.keys(phoneRepairPriceData);

  brands.forEach((brand) => {
    var option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandSelect.appendChild(option);
  });
}

function handleBrandChange(event) {
  var brandSelect = event.target;
  var card = brandSelect.card;
  var modelSelect = card.querySelector(".model-select");

  modelSelect.innerHTML = "";

  var selectedBrand = brandSelect.value;

  if (phoneRepairPriceData[selectedBrand]) {
    var models = Object.keys(phoneRepairPriceData[selectedBrand]);
    models.forEach(function (model) {
      var option = document.createElement("option");
      option.value = model;
      option.textContent = model;
      modelSelect.appendChild(option);
    });
  } else {
    console.warn("Selected brand does not exist in database");
  }
}

function cCardsForAll() {
  document.querySelectorAll(".selection-card").forEach(function (card) {
    createSelectionCard(card);
  });
}

// Save results and move to resultspage

function submitResults(event) {
  var card = event.target.closest(".selection-card");

  var brand = card.querySelector(".brand-select").value;
  var model = card.querySelector(".model-select").value;

  var prices = phoneRepairPriceData[brand][model];

  console.log("Selected:", brand, model);
  console.log("Prices:", prices);

  var data = {
    brand: brand,
    model: model,
    prices: prices,
  };

  localStorage.setItem("repairData", JSON.stringify(data));

  window.location.href = "resultspage.html";
}

function cFooter() {
  const footerContentWrapper = document.createElement("div");
  footerContentWrapper.classList.add("footerContentWrapper");

  const footerText = document.createElement("p");
  footerText.classList.add("footer-text");
  footerText.textContent =
    "© 2026 FixIT Mobile | Vantaa | Phone repairs, screen replacements, and troubleshooting. All rights reserved.";

  footerContentWrapper.append(footerText);
  footer.append(footerContentWrapper);
}

function runAll() {
  cCardsForAll();
  cFooter();
}

runAll();
