// submit form

const cardDetailsForm = document.querySelector("#card-details-form");
const thankYouCont = document.querySelector("#thank-you-cont");

let cardholderName = document.querySelector("#cardholder-name");
let cardNumber = document.querySelector("#card-number");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let cvc = document.querySelector("#cvc");

cardDetailsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  cardDetailsForm.classList.add("hidden");
  cardDetailsForm.classList.remove("flex");

  thankYouCont.classList.remove("hidden");
  thankYouCont.classList.add("flex");
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
    : (cardNumberDisplay.children[0].textContent = cardNumber.value.slice(0, 4));
    Number(cardNumber.value.slice(5, 9)) === 0
    ? (cardNumberDisplay.children[1].textContent = "0000")
    : (cardNumberDisplay.children[1].textContent = cardNumber.value.slice(5, 9));
    Number(cardNumber.value.slice(10, 14)) === 0
    ? (cardNumberDisplay.children[2].textContent = "0000")
    : (cardNumberDisplay.children[2].textContent = cardNumber.value.slice(10, 14));
    Number(cardNumber.value.slice(15, 19)) === 0
    ? (cardNumberDisplay.children[3].textContent = "0000")
    : (cardNumberDisplay.children[3].textContent = cardNumber.value.slice(15, 19));
});
