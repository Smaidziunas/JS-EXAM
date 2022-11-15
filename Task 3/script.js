/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

// TAIKAUSI:

const url = "https://api.github.com/users";
const outputDivEl = document.getElementById("output");
const showUsersBtnEl = document.getElementById("btn");

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

// EVENT LISTENER:

showUsersBtnEl.addEventListener("click", async (event) => {
  event.preventDefault();
  // clear "show users" message:
  outputDivEl.innerHTML = "";

  // Getting data from FETCH
  fetchedData = await getData(url);

  // Generating Cards:
  generateCards(fetchedData);
});

function generateCards(arr) {
  //creating grid to store all cards:
  const cardDivEl = document.createElement("div");
  cardDivEl.className = "grid";
  outputDivEl.append(cardDivEl);

  // creating and appending cards:
  arr
    .map((cardObj) => {
      const articleEl = document.createElement("article");
      articleEl.className = "article";

      const liEl1 = document.createElement("li");
      liEl1.className = "card";
      liEl1.textContent = `user login: ${cardObj.login}`;
      const liEl2 = document.createElement("li");
      liEl2.className = "card";
      liEl2.textContent = `user's url: ${cardObj.avatar_url}`;

      articleEl.append(liEl1, liEl2);
      return articleEl;
    })
    .forEach((uObj) => {
      cardDivEl.append(uObj);
    });
}
