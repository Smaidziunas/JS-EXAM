/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

// TAIKAUSI:

const inputTxtEl = document.getElementById("search");
const submitBtnEl = document.getElementById("submit-btn");

const outputDivEl = document.getElementById("output");

// EVENT LISTENER:
submitBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  const inputTxtElValue = inputTxtEl.value.trim();
  // remove text from input value
  inputTxtEl.value = "";
  // validate if number
  if (isNaN(inputTxtElValue)) return alert("write a number");
  // conversion functions
  delInputsNcrConversion(inputTxtElValue);
});

// HELPER FUNCTIONS:
function makeConversion(inputVal) {
  //creating els
  const resultArticleEl = document.createElement("article");
  resultArticleEl.className = "card";
  const resultPEl = document.createElement("p");
  //creating output value
  resultPEl.textContent = `Your weight is ${inputVal} kg, or ${(
    inputVal * 2.2046
  ).toFixed(2)} lbs, or ${parseFloat(
    (inputVal / 0.001).toFixed(2)
  )} grams, or ${(inputVal * 35.274).toFixed(2)} oz`;
  // placing results
  resultArticleEl.append(resultPEl);
  outputDivEl.append(resultArticleEl);
  return resultArticleEl;
}

function delInputsNcrConversion(value) {
  if (outputDivEl.childNodes.length < 1) {
    makeConversion(value);
  } else {
    outputDivEl.innerHTML = "";
    makeConversion(value);
  }
}
