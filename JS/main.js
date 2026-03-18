function createSelectionCard(container) {
  container.innerHTML = "";

  var cardBackground = document.createElement("div");
  var brandSelect = document.createElement("select");
  var modelSelect = document.createElement("select");
  var viewServicesBtn = document.createElement("button");

  cardBackground.className = "card-background-wrapper";
  brandSelect.className = "brand-select";
  modelSelect.className = "model-select";
  viewServicesBtn.className = "view-services-btn";

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

cCardsForAll();
