/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// TAIKAUSI:

const clickBtnEl = document.getElementById("btn__element");
const stateDivEl = document.getElementById("btn__state");
console.log("clickBtnEl ===", clickBtnEl);

// EVENT LISTENER:
let arr = 0;

clickBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  arr += 1;
  stateDivEl.textContent = arr;
});
