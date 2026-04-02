const container = document.getElementById("contact-form-container");
const showHideBtn = document.getElementById("show-hide-form-btn");

function cFormToggle() {
  showHideBtn.classList.add("form-toggle-btn");
  showHideBtn.textContent = "Show form";

  container.classList.add("hidden");

  // logic
  showHideBtn.addEventListener("click", () => {
    container.classList.toggle("hidden");

    if (container.classList.contains("hidden")) {
      showHideBtn.textContent = "Show form";
    } else {
      showHideBtn.textContent = "Hide form";
    }
  });
}

function cContactForm() {
  container.innerHTML = "";

  let form = document.createElement("form");
  form.classList.add("contact-form");

  // Name
  let nameLabel = document.createElement("label");
  nameLabel.textContent = "Name";

  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Enter your name";

  // Email
  let emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";

  let emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Enter your email";

  // Phone
  let phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone number";

  let phoneWrapper = document.createElement("div");
  phoneWrapper.classList.add("phone-wrapper");

  let countryCode = document.createElement("select");
  let optionFI = document.createElement("option");
  optionFI.value = "+358";
  optionFI.textContent = "+358";
  countryCode.append(optionFI);

  let phoneInput = document.createElement("input");
  phoneInput.type = "tel";
  phoneInput.placeholder = "Phone number";

  phoneWrapper.append(countryCode, phoneInput);

  // Device
  let deviceLabel = document.createElement("label");
  deviceLabel.textContent = "Device brand and model";

  let deviceInput = document.createElement("input");
  deviceInput.type = "text";
  deviceInput.placeholder = "E.g. iPhone 14, Samsung Galaxy A56";

  // Issue type
  let issueLabel = document.createElement("label");
  issueLabel.textContent = "Type of issue";

  let issueSelect = document.createElement("select");

  let defaultOption = document.createElement("option");
  defaultOption.textContent = "Select issue type";
  defaultOption.disabled = true;
  defaultOption.selected = true;

  let option1 = document.createElement("option");
  option1.textContent = "Screen problem";

  let option2 = document.createElement("option");
  option2.textContent = "Battery problem";

  let option3 = document.createElement("option");
  option3.textContent = "Other";

  issueSelect.append(defaultOption, option1, option2, option3);

  // Description
  let descLabel = document.createElement("label");
  descLabel.textContent = "Briefly describe the problem";

  let descTextarea = document.createElement("textarea");
  descTextarea.placeholder = "More details about the issue...";

  // Contact method
  let contactLabel = document.createElement("label");
  contactLabel.textContent = "Preferred contact method";

  let emailCheckWrapper = document.createElement("div");
  let emailCheckbox = document.createElement("input");
  emailCheckbox.type = "checkbox";
  let emailCheckText = document.createElement("span");
  emailCheckText.textContent = " Email";

  emailCheckWrapper.append(emailCheckbox, emailCheckText);

  let phoneCheckWrapper = document.createElement("div");
  let phoneCheckbox = document.createElement("input");
  phoneCheckbox.type = "checkbox";
  let phoneCheckText = document.createElement("span");
  phoneCheckText.textContent = " Phone";

  phoneCheckWrapper.append(phoneCheckbox, phoneCheckText);

  // Submit button
  let submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Send";

  // Append all
  form.append(
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    phoneLabel,
    phoneWrapper,
    deviceLabel,
    deviceInput,
    issueLabel,
    issueSelect,
    descLabel,
    descTextarea,
    contactLabel,
    emailCheckWrapper,
    phoneCheckWrapper,
    submitBtn,
  );

  container.append(form);
}

function runAll() {
  cFormToggle();
  cContactForm();
}

runAll();
