let cardholderName = document.querySelector("#cardholder-name");
let cardNumber = document.querySelector("#card-number");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let cvc = document.querySelector("#cvc");

let errorCardholderName;
let errorCardNumber;
let errorMonth;
let errorYear;
let errorCvc;

// errors

const toggleError = function (element, showError, errorContent) {
  if (showError) {
    element.classList.add("border-primary-red");
    element.classList.remove("border-neutral-lightGrayishViolet");
    element.parentElement.querySelector(".error").textContent = errorContent;
  } else {
    element.classList.remove("border-primary-red");
    element.classList.add("border-neutral-lightGrayishViolet");
    element.parentElement.querySelector(".error").textContent = errorContent;
  }
};

// error - blank

const checkErrorBlank = function () {
  const errorContent = "Can't be blank";
  Number(cardholderName.value) === 0
    ? (toggleError(cardholderName, true, errorContent, errorCardholderName),
      (errorCardholderName = true))
    : (toggleError(cardholderName, false, "", errorCardholderName),
      (errorCardholderName = false));
  Number(cardNumber.value) === 0
    ? (toggleError(cardNumber, true, errorContent, errorCardNumber),
      (errorCardNumber = true))
    : (toggleError(cardNumber, false, "", errorCardNumber),
      (errorCardNumber = false));
  Number(month.value) === 0
    ? (toggleError(month, true, errorContent, errorMonth), (errorMonth = true))
    : (toggleError(month, false, "", errorMonth), (errorMonth = false));
  Number(year.value) === 0
    ? (toggleError(year, true, errorContent, errorYear), (errorYear = true))
    : (toggleError(year, false, "", errorYear), (errorYear = false));
  Number(cvc.value) === 0
    ? (toggleError(cvc, true, errorContent, errorCvc), (errorCvc = true))
    : (toggleError(cvc, false, "", errorCvc), (errorCvc = false));
};

// error - cardNumber

const checkErrorCardNumber = function () {
  if (cardNumber.value.match(/^(?:\d[ ]*?){16}$/)) {
    toggleError(cardNumber, false, "");

    errorCardNumber = false;
  } else {
    toggleError(cardNumber, true, "Wrong format, numbers only");
    errorCardNumber = true;
  }
};

// submit form

const cardDetailsForm = document.querySelector("#card-details-form");
const thankYouCont = document.querySelector("#thank-you-cont");

const submitOrContinue = function () {
  cardDetailsForm.classList.toggle("hidden");
  cardDetailsForm.classList.toggle("flex");

  thankYouCont.classList.toggle("hidden");
  thankYouCont.classList.toggle("flex");
};

cardDetailsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  checkErrorBlank();

  errorCardNumber ? checkErrorBlank() : checkErrorCardNumber();

  if (
    !errorCardholderName &&
    !errorCardNumber &&
    !errorMonth &&
    !errorYear &&
    !errorCvc
  ) {
    submitOrContinue();
  } else {
    alert("Please recheck the card details");
  }
});

// continue btn

const continueBtn = document.querySelector("#continue-btn");

continueBtn.addEventListener("click", () => {
  submitOrContinue();

  cardholderNameDisplay.textContent = "Jane Appleseed";
  for (let key in cardNumberDisplay.children) {
    cardNumberDisplay.children[key].textContent = "0000"
  }
  // cardNumberDisplay.textContent = "0000 0000 0000 0000";
  monthDisplay.textContent = "00";
  yearDisplay.textContent = "00";
  cvcDisplay = "00";
});

// interactive inputs

let cardholderNameDisplay = document.querySelector("#cardholder-name-display");
let monthDisplay = document.querySelector("#month-display");
let yearDisplay = document.querySelector("#year-display");
let cvcDisplay = document.querySelector("#cvc-display");
let cardNumberDisplay = document.querySelector("#card-number-display");

let display = function (value, displayCont, defaultValue) {
  if (Number(value) === 0) {
    displayCont.textContent = defaultValue;
  } else {
    displayCont.textContent = value;
  }
};

// cardholder name

cardholderName.addEventListener("keyup", () => {
  display(cardholderName.value, cardholderNameDisplay, "Jane Appleseed");
});

// expiry date

month.addEventListener("keyup", () => {
  display(month.value, monthDisplay, "00");
});
year.addEventListener("keyup", () => {
  display(year.value, yearDisplay, "00");
});

// cvc
cvc.addEventListener("keyup", () => {
  display(cvc.value, cvcDisplay, "000");
});

// card number

cardNumber.addEventListener("keyup", () => {
  Number(cardNumber.value.slice(0, 4)) === 0
    ? (cardNumberDisplay.children[0].textContent = "0000")
    : (cardNumberDisplay.children[0].textContent = cardNumber.value.slice(
        0,
        4
      ));
  Number(cardNumber.value.slice(5, 9)) === 0
    ? (cardNumberDisplay.children[1].textContent = "0000")
    : (cardNumberDisplay.children[1].textContent = cardNumber.value.slice(
        5,
        9
      ));
  Number(cardNumber.value.slice(10, 14)) === 0
    ? (cardNumberDisplay.children[2].textContent = "0000")
    : (cardNumberDisplay.children[2].textContent = cardNumber.value.slice(
        10,
        14
      ));
  Number(cardNumber.value.slice(15, 19)) === 0
    ? (cardNumberDisplay.children[3].textContent = "0000")
    : (cardNumberDisplay.children[3].textContent = cardNumber.value.slice(
        15,
        19
      ));
});
