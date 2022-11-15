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
  makeForm(inputTxtElValue);
  console.log(inputTxtElValue);
});

// FUNCTIONS:
function makeForm(inputVal) {
  const resultArticleEl = document.createElement("article");
  resultArticleEl.className = "card";

  const resultPEl = document.createElement("p");
  resultPEl.textContent = `${inputVal} kg is`;

  resultArticleEl.append(resultPEl);
  outputDivEl.append(resultArticleEl);
}
