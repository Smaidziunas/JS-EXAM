/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

// TAIKAUSI:

const url = "cars.json";
const outputDivEl = document.getElementById("output");
outputDivEl.className = "card";

// FETCH:

async function getData(url) {
  try {
    const response = await fetch(url);
    const dataInJsFormat = await response.json();
    return dataInJsFormat;
  } catch (error) {
    console.warn("Error trying to retrieve .then()", error);
  }
}

// HELPER FUNCTIONS:

// adding styles

function getStyles() {
  const articleEls = document.querySelectorAll(".h5El");

  articleEls.forEach((element) => {
    element.addEventListener("click", displayToggle);

    function displayToggle() {
      if (element.nextElementSibling.style.display === "none") {
        element.nextElementSibling.style.display = "block";
        console.log("clicked");
      } else {
        element.nextElementSibling.style.display = "none";
      }
    }
  });
}

// generating cards

function generateCards(arr) {
  const randomId = Math.random().toFixed(8).slice(2);
  arr
    .map((carObject, i) => {
      const cardArticleEl = document.createElement("article");

      const h5El = document.createElement("h5");

      h5El.className = "h5El";
      h5El.textContent = carObject.brand;
      h5El.setAttribute("id", `${i + 1}`);

      const liEl = document.createElement("li");

      liEl.className = "liEl";
      liEl.textContent = carObject.models.join(", ");

      cardArticleEl.append(h5El, liEl);

      return cardArticleEl;
    })
    .forEach((cardEls) => {
      outputDivEl.append(cardEls);
    });
}

// main init function:

init = async () => {
  fetchedData = await getData(url);

  generateCards(fetchedData);

  getStyles();
};

init();
